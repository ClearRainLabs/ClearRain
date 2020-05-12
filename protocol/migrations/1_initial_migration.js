const Migrations = artifacts.require('Migrations')
const RainCommunity = artifacts.require('RainCommunity')

module.exports = function (deployer) {
  deployer.deploy(Migrations)
  deployer.deploy(RainCommunity, 'rain', 'rai')
}
