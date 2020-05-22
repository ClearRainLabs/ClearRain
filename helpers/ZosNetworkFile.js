const Zos = require('@openzeppelin/cli')

module.exports = async function getNetworkFile (web3) {
  const _id = await web3.eth.net.getId()
  let network
  switch (_id) {
    case '1':
      network = 'mainnet'
      break
    case '3':
      network = 'ropsten'
      break
    default:
      network = `dev-${_id}`
  }
  return new Zos.files.NetworkFile(new Zos.files.ProjectFile(), network)
}
