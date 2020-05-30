# Clear Rain
Self-governed Online Communities

Get started:
```bash
# You must use ssh to correctly clone the submodule
git clone --recurse-submodules git@github.com:samhatem/clear-rain.git 
yarn install
```

### Local Smart contract Development:
```bash
cd smart-contracts
yarn install
```

Run a local blockchain at port 8485. We recommend [ganache](https://www.trufflesuite.com/ganache).

```bash
yarn compile            # Compile smart contracts
yarn migrate:dev        # deploy the contracts to the local blockchain
yarn test               # test the smart contracts
```
