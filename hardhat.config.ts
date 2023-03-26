import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
const fs = require('fs')

const privateKey = fs.readFileSync('.secret')

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: 'hardhat',
    networks: {
      hardhat: {
        chainId: 1337
      },
      scroll: {
        chainId:534353,
        url:'https://alpha-rpc.scroll.io/l2',
        accounts:[`0x${privateKey}`]
      }
    },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./web-app/src/artifacts"
  },
};

export default config;
