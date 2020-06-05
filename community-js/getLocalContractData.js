const fs = require('fs')

const factoryContract = JSON.parse(fs.readFileSync('../smart-contracts/build/contracts/RainCommunity.json', 'utf8'))
const ropstenData = JSON.parse(fs.readFileSync('../smart-contracts/.openzeppelin/dev-5777.json', 'utf8'))

const length = ropstenData.proxies['ClearRain/RainCommunity'].length

const contractData = {
  contractAbi: factoryContract.abi,
  contractAddress: ropstenData.proxies['ClearRain/RainCommunity'][length - 1].address
}

fs.writeFile('localContractData.json', JSON.stringify(contractData), function (err) {
  if (err) throw err
  console.log('Contract Data saved')
})
