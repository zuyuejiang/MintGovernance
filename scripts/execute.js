require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const governor = await ethers.getContractAt("MyGovernor", process.env.GOVERNOR_CONTRACT_ADDRESS);
  const token = await ethers.getContractAt("MyToken", process.env.TOKEN_CONTRACT_ADDRESS);

  const description = "Proposal to mint 25000 tokens";
  await governor.execute(
    [token.address],
    [0],
    [token.interface.encodeFunctionData("mint", [process.env.OWNER_ADDRESS, ethers.utils.parseEther("25000")])],
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes(description))
  );

  console.log("Proposal executed.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
