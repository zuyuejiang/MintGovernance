require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const governor = await ethers.getContractAt("MyGovernor", process.env.GOVERNOR_CONTRACT_ADDRESS);
  const token = await ethers.getContractAt("MyToken", process.env.TOKEN_CONTRACT_ADDRESS);

  const tx = await governor.propose(
    [token.address],
    [0],
    [token.interface.encodeFunctionData("mint", [process.env.OWNER_ADDRESS, ethers.utils.parseEther("25000")])],
    "Proposal to mint 25000 tokens"
  );

  const receipt = await tx.wait();
  const event = receipt.events.find((e) => e.event === "ProposalCreated");
  const { proposalId } = event.args;
  console.log(`Proposal created with ID: ${proposalId}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
