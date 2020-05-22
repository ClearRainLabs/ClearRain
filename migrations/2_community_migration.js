const { scripts, ConfigManager } = require('@openzeppelin/cli')
const { constants } = require('hardlydifficult-eth')

const { add, push, create } = scripts

const RainCommunity = artifacts.require('RainCommunity')

async function deploy (options, accounts) {
  const owner = accounts[0]

  // register Rain Community in project.json?
  add({ contractsData: [{ name: 'RainCommunity', alias: 'RainCommunity' }] })
  // push implementation to network, whatever that means
  await push(options)

  const rainContract = await create(
    Object.assign(
      {
        contractAlias: 'RainCommunity',
        methodName: 'initialize',
        methodArgs: [constants.ZERO_ADDRESS, owner, 'Rain', 'RAI']
      },
      options
    )
  )

  const communityTemplate = await RainCommunity.new()

  await rainContract.methods
    .setCommunityTemplate(communityTemplate.address)
    .send({ from: owner })
}

module.exports = async function (deployer, networkName, accounts) {
  const { network, txParams } = await ConfigManager.initNetworkConfiguration({
    network: networkName,
    from: accounts[0]
  })

  await deploy({ network, txParams }, accounts)
}
