require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')
const MNEMONIC = process.env.MNEMONIC
const INFURA_ID = process.env.INFURA_ID

module.exports = {
  networks: {

    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: 5777,
      websockets: true,
      gas: 6700000
    },

    ropsten: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://ropsten.infura.io/v3/${INFURA_ID}`),
      network_id: 3,
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },

  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: '0.6.7'
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
}
