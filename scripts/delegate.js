require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const [owner, otherAccount] = await ethers.getSigners();
  const token = await ethers.getContractAt("MyToken", process.env.TOKEN_CONTRACT_ADDRESS);

  console.log(`Delegating votes to ${owner.address}`);
  await token.delegate(owner.address);
  console.log("Votes delegated.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
