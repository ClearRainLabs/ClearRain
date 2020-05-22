const RainCommunity = artifacts.require('RainCommunity')
const getProxy = require('../helpers/proxy')
const { utils } = require('hardlydifficult-eth')

// const { expectRevert } = require('@openzepplin/test-helpers')

const { checkCommunityRoles } = require('./rolesTest.js')

contract('RainCommunity', async accounts => {
  const owner = accounts[0]
  let templateAddress
  let prevAddr

  before(async () => {
    contract = await getProxy(RainCommunity)
    templateAddress = await contract.communityTemplate()
  })

  describe('Test the initial contract', async () => {
    await checkCommunityRoles(contract, accounts, 'Rain', 'RAI', accounts[0])
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

      describe(`Salt: ${salt}`, () => {
        before(async () => {
          const tx = await contract.createCommunity('New', 'NEW', salt, { from: owner })

          const evt = tx.logs.find(v => v.event === 'NewCommunity')

          const { newCommunityAddress } = evt.args

          prevAddr = contract.address
          contract = await RainCommunity.at(newCommunityAddress)
        })

        it('Check community template', async () => {
          const taddr = await contract.communityTemplate()
          assert.equal(taddr, templateAddress, 'Template address of created community incorrect')
        })

        it('Check roles of community', async () => {
          await checkCommunityRoles(contract, accounts, 'New', 'NEW', accounts[0])
        })

        it('Matches the JS calculated address', async () => {
          const address = await utils.create2.buildClone2Address(
            prevAddr,
            templateAddress,
            accounts[0] + salt.replace('0x', '')
          )
          assert.equal(address, contract.address)
        })
      })
    }
  })
})
