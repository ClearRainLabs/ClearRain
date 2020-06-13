const fs = require('fs')

let networkFiles = fs.readdirSync('../smart-contracts/.openzeppelin/')
networkFiles = networkFiles.filter(name => name !== '.session' && name !== 'project.json')

const contractAddress = {}
let i
for (i = 0; i < networkFiles.length; i++) {
  const data = JSON.parse(fs.readFileSync(`../smart-contracts/.openzeppelin/${networkFiles[i]}`, 'utf8'))
  const contractProxies = data.proxies['ClearRain/RainCommunity']
  const networkName = networkFiles[i].split('.')[0]
  contractAddress[networkName] = contractProxies[contractProxies.length - 1].address
}

const factoryContract = JSON.parse(fs.readFileSync('../smart-contracts/build/contracts/RainCommunity.json', 'utf8'))

const contractData = {
  contractAbi: factoryContract.abi,
  contractAddress
}

fs.writeFile('contractData.json', JSON.stringify(contractData), function (err) {
  if (err) throw err
  console.log('Contract Data saved')
})
