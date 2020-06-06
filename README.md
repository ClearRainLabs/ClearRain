# Clear Rain
Self-governed Online Communities

We are keeping track of tasks in Github projects.

### About the repo
./smart-contracts
  - The smart contracts
 
./scripts
  - Where all bash scripts will go. We'll probably write more than the one that's already there so I already made a dir for it
  
./community-js
  - A library for interacting with the smart contracts. We should aim to put as much web3 and smart contract logic in it. For local development I'm importing it into the ui with a relative path. Eventually we'll publish it and import it as a node_module

Get started:
```bash
# You must use ssh to correctly clone the submodule
git clone git@github.com:ClearRainLabs/ClearRain.git
yarn install
```

### Local Smart contract Development:
```bash
cd smart-contracts
yarn install
```

Run a local blockchain at port specified in truffle config. We recommend [ganache](https://www.trufflesuite.com/ganache).

Useful commands
```bash
yarn compile            # Compile smart contracts
yarn migrate:dev        # deploy the contracts to the local blockchain
yarn test               # test the smart contracts
```

### Community-js development
```bash
cd community-js
yarn install
yarn build:dev
```
