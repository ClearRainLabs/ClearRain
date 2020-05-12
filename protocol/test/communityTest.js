const RainCommunity = artifacts.require('RainCommunity')

contract('RainCommunity', async accounts => {
  it('Get name of community', async () => {
    const instance = await RainCommunity.deployed()
    const name = await instance.name.call()
    assert.equal(name, 'rain', `Name ${name} was not correct`)
    RainCommunity.deployed()
  })

  it('Get symbol of community', async () => {
    const instance = await RainCommunity.deployed()
    const symbol = await instance.symbol.call()
    assert.equal(symbol, 'rai', `Symbol ${symbol} was not correct`)
  })
})
