const RainCommunity = artifacts.require('RainCommunity')
const getProxy = require('../helpers/proxy')

contract('RainCommunity', async accounts => {
  const owner = accounts[0]
  let contract

  before(async () => {
    contract = await getProxy(RainCommunity)
  })

  it('Get name and symbol', async () => {
    const name = await contract.name.call()
    assert.equal(name, 'Rain', `Name ${name} was not correct`)

    const symbol = await contract.symbol.call()
    assert.equal(symbol, 'RAI', `Symbol ${symbol} was not correct`)
  })

  it('Get owner of the community', async () => {
    const owner = await contract.owner.call()
    assert.equal(owner, accounts[0], 'Owner should be the first account')
  })

  /// ADD TEST FOR MODERATOR

  it('Add/Remove admin, moderator, and member', async () => {
    await contract.addAdmin(accounts[1], { from: owner })

    // owner add moderator
    await contract.addModerator(accounts[2], { from: owner })
    // admin add moderator
    await contract.addModerator(accounts[3], { from: accounts[1] })

    // test 'member' functions
    await contract.addMember(accounts[4], { from: accounts[4] })
    await contract.addMember(accounts[5], { from: accounts[4] })
    await contract.addMember(accounts[6], { from: accounts[6] })

    await contract.removeMember(accounts[6], { from: owner })
    await contract.removeMember(accounts[4], { from: accounts[2] })

    await contract.removeModerator(accounts[3], { from: owner })

    try {
      await contract.addAdmin(accounts[2], { from: accounts[1] })
      assert.fail()
    } catch (e) {
      assert.ok(/revert/.test(e.message))
    }

    try {
      await contract.removeModerator(accounts[2], { from: accounts[4] })
      assert.fail()
    } catch (e) {
      assert.ok(/revert/.test(e.message))
    }

    await contract.removeAdmin(accounts[1], { from: owner })
  })

  it('Add/Remove Self', async () => {
    // members
    await contract.addMember(accounts[1], { from: accounts[1] })
    await contract.removeMember(accounts[1], { from: accounts[1] })

    // moderators
    await contract.addModerator(accounts[1], { from: owner })
    await contract.removeModerator(accounts[1], { from: accounts[1] })

    // admin
    await contract.addAdmin(accounts[1], { from: owner })
    await contract.removeAdmin(accounts[1], { from: accounts[1] })
  })

  it('Transfer ownership', async () => {
    await contract.transferOwnership(accounts[1], { from: owner })
    let newOwner = await contract.owner.call()
    assert.equal(newOwner, accounts[1], 'Owner should have updated')

    try {
      const prevOwner = owner
      await contract.transferOwnership(accounts[2], { from: prevOwner })
      assert.fail()
    } catch (e) {
      assert.ok(/revert/.test(e.message))
    }

    await contract.transferOwnership(accounts[2], { from: accounts[1] })
    newOwner = await contract.owner.call()
    assert.equal(newOwner, accounts[2], 'Owner should be updated again')
  })

  it('Create a new community', async () => {
    const salt = '0xdffffffffffffffffffffffc'
    const tx = await contract.createCommunity('New', 'NEW', salt, { from: owner })

    const newCommunityAddress = tx.logs[0].args.newCommunityAddress
    const newCommunity = await RainCommunity.at(newCommunityAddress)
    await newCommunity.owner.call()
    // assert.equal(communityOwner, owner, 'Owner should be the first account')
  })
})
