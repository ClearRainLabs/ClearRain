const getNetworkFile = require('./ZosNetworkFile.js')

module.exports = async function getProxy (contractArtifact) {
  const networkFile = await getNetworkFile(web3)
  const proxies = networkFile.getProxies({
    contract: contractArtifact.contractName
  })

  console.log(proxies, 'THE PROXIES')

  const mostRecentProxy = proxies.length - 1
  const proxyAddress = proxies[mostRecentProxy].address
  return await contractArtifact.at(proxyAddress)
}
