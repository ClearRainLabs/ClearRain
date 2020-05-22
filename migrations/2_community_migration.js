const { scripts, ConfigManager } = require('@openzeppelin/cli')
const { add, push, create } = scripts

async function deploy (options) {
  // register Rain Community in project.json?
  add({ contractsData: [{ name: 'RainCommunity', alias: 'RainCommunity' }] })
  // push implementation to network, whatever that means
  await push(options)

  await create(
    Object.assign(
      {
        contractAlias: 'RainCommunity',
        methodName: 'initialize',
        methodArgs: ['Rain', 'RAI']
      },
      options
    )
  )
}

module.exports = async function (deployer, networkName, accounts) {
  const { network, txParams } = await ConfigManager.initNetworkConfiguration({
    network: networkName,
    from: accounts[0]
  })

  await deploy({ network, txParams })
}
