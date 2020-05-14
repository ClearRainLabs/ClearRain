const RainCommunity = artifacts.require('RainCommunity')

contract('RainCommunity', async accounts => {
  let contract
  const owner = accounts[0]

  beforeEach('Set up contract', async () => {
    contract = await RainCommunity.deployed()
  })

  it('Get name and symbol', async () => {
    const name = await contract.name.call()
    assert.equal(name, 'rain', `Name ${name} was not correct`)

    const symbol = await contract.symbol.call()
    assert.equal(symbol, 'rai', `Symbol ${symbol} was not correct`)
  })

  it('Get owner of the community', async () => {
    const owner = await contract.owner.call()
    assert.equal(owner, accounts[0], 'Owner should be the first account')
  })

  it('Add and remove admin to the community', async () => {
    await contract.addAdmin(accounts[1], { from: owner })
    await contract.removeAdmin(accounts[1], { from: owner })
  })

  it('Try add from bad account', async () => {
    try {
      await contract.addAdmin(accounts[2], { from: accounts[1] })
      assert.fail()
    } catch (e) {
      assert.ok(/revert/.test(e.message))
    }
  })
})
