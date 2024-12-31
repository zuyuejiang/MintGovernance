require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const governor = await ethers.getContractAt("MyGovernor", process.env.GOVERNOR_CONTRACT_ADDRESS);
  const proposalId = process.env.PROPOSAL_ID;

  console.log(`Voting on proposal ${proposalId}`);
  await governor.castVote(proposalId, 1); // 1 for "For"
  console.log("Vote cast.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
