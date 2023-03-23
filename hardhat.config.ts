import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: 'hardhat',
    networks: {
      hardhat: {
        chainId: 1337
      }
    },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./web-app/artifacts"
  },
};

export default config;
