const ethers = require('ethers')
const { contractAbi, contractAddress } = require('../localContractData.json')

const utf8ToHex = (str) => ethers.utils.hexlify(str.length ? ethers.utils.toUtf8Bytes(str) : 0)
const keccak256 = ethers.utils.keccak256

class RainService {
  // ethers jsonRpcProvider
  constructor (web3) {
    this.provider = new ethers.providers.Web3Provider(web3)
    const factoryNoSigner = new ethers.Contract(contractAddress, contractAbi, this.provider)
    const signer = this.provider.getSigner()
    this.factory = factoryNoSigner.connect(signer)
  }

  getJsonRpcProvider () { return this.provider }

  async createCommunityContract (name, symbol, isOpen) {
    if (!this.templateAddress) this.templateAddress = await this.factory.communityTemplate.call()
    if (!this.signerAddress) this.signerAddress = await this.provider.getSigner().getAddress()

    const lockSalt = keccak256(utf8ToHex(name)).substring(0, 26)

    const tx = await this.factory.createCommunity(name, symbol, isOpen, lockSalt)
    await this.provider.waitForTransaction(tx.hash)

    const newAddress = this._create2Address(
      this.factory.address,
      this.templateAddress,
      this.signerAddress,
      lockSalt.substring(2)
    )

    return {
      address: newAddress,
      abi: contractAbi
    }
  }

  _create2Address (factoryAddress, templateAddress, account, lockSalt) {
    const saltHex = `${account}${lockSalt}`
    const byteCode = `0x3d602d80600a3d3981f3363d3d373d3d3d363d73${templateAddress.replace(
      /0x/,
      ''
    )}5af43d82803e903d91602b57fd5bf3`

    const keccak256 = ethers.utils.keccak256
    const byteCodeHash = keccak256(byteCode)

    const seed = ['ff', factoryAddress, saltHex, byteCodeHash]
      .map(x => x.replace(/0x/, ''))
      .join('')

    const address = keccak256(`0x${seed}`).slice(-40)

    return ethers.utils.getAddress(`0x${address}`)
  }

  getAbi () {
    return contractAbi
  }
}

module.exports = RainService
