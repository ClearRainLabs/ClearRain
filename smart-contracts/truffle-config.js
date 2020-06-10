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
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },

    rinkeby: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://rinkeby.infura.io/v3/${INFURA_ID}`),
      network_id: 4,
      gas: 6400000,
      gasPrice: 5000000000, // 5GWEI
      skipDryRun: true
    }
  },

  compilers: {
    solc: {
      version: '0.6.7',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  },
  mocha: {
    reporter: 'eth-gas-reporter',
    useColors: true,
    reporterOptions: {
      currency: 'USD',
      excludeContracts: ['Migrations'],
      gasPrice: 5
    }
  }
}
