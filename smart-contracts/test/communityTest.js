const RainCommunity = artifacts.require('RainCommunity')
const getProxy = require('../helpers/proxy')
const { utils, constants } = require('hardlydifficult-eth')
const { expectRevert } = require('@openzeppelin/test-helpers')

const { checkCommunityRoles } = require('./rolesTest.js')

let templateAddress
let prevCommunity
let rainCommunity

contract('RainCommunity', async accounts => {
  const owner = accounts[0]

  before(async () => {
    rainCommunity = await getProxy(RainCommunity)
    templateAddress = await rainCommunity.communityTemplate()
  })

  it('Test the initial contract', async () => {
    await checkCommunityRoles(rainCommunity, accounts, 'Rain', 'RAI', true, accounts[0])
  })

  it('Test parent community of initial contract', async () => {
    const parent = await rainCommunity.parentCommunity()
    assert.equal(parent, constants.ZERO_ADDRESS, 'Parent community should be zero address')
  })

  describe('Deploy with Clone 2 with various salts', () => {
    const testSalts = [
      '0x000000000000000000000000',
      '0x000000000000000000000001',
      '0x000000000000000000000002',
      '0xffffffffffffffffffffffff',
      '0xefffffffffffffffffffffff',
      '0xdfffffffffffffffffffffff',
      '0x0000000000f0000000000000',
      '0x0000000000e0000000000000'
    ]
    for (let i = 0; i < testSalts.length; i++) {
      const salt = testSalts[i]
      const name = `New-${i}`
      const symbol = `N${i}`
      const isOpen = Boolean(i)

      describe(`Salt: ${salt}`, () => {
        before(async () => {
          const tx = await rainCommunity.createCommunity(name, symbol, isOpen, salt, { from: owner })

          const evt = tx.logs.find(v => v.event === 'NewCommunity')

          const { newCommunityAddress } = evt.args

          prevCommunity = rainCommunity
          rainCommunity = await RainCommunity.at(newCommunityAddress)
        })

        it('Check community template', async () => {
          const taddr = await rainCommunity.communityTemplate()
          assert.equal(taddr, templateAddress, 'Template address of created community incorrect')
        })

        it('Check parent community', async () => {
          const parent = await rainCommunity.parentCommunity()
          assert.equal(parent, prevCommunity.address, 'Parent community is incorrect')
        })

        it('Check roles of community', async () => {
          await checkCommunityRoles(rainCommunity, accounts, name, symbol, isOpen, owner)
        })

        it('Matches the JS calculated address', async () => {
          const address = await utils.create2.buildClone2Address(
            prevCommunity.address,
            templateAddress,
            accounts[0] + salt.replace('0x', '')
          )
          assert.equal(address, rainCommunity.address)
        })

        it('Should fail if a salt is re-used', async () => {
          await expectRevert.unspecified(
            prevCommunity.createCommunity(name, symbol, isOpen, salt, { from: owner }),
            'Re-used salt should fail'
          )
        })

        it('Can use the same salt if the account is different', async () => {
          const tx = await prevCommunity.createCommunity(name, symbol, isOpen, salt, { from: accounts[9] })
          const evt = tx.logs.find(v => v.event === 'NewCommunity')

          const diffAddr = evt.args.newCommunityAddress
          const diffContract = RainCommunity.at(diffAddr)
          await checkCommunityRoles(diffContract, accounts, name, symbol, accounts[9])
        })
      })
    }
  })
})
