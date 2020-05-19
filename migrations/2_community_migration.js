const RainCommunity = artifacts.require('RainCommunity')

module.exports = function (deployer) {
  deployer.deploy(RainCommunity, 'rain', 'rai')
}
