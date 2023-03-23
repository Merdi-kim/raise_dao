import { ethers } from "hardhat";

async function main() {
  const Raise = await ethers.getContractFactory("Raise");
  const contract = await Raise.deploy();
  await contract.deployed();
  console.log(
    `Deployed to: ${contract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
