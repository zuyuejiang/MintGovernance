require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const governor = await ethers.getContractAt("MyGovernor", process.env.GOVERNOR_CONTRACT_ADDRESS);
  const proposalId = process.env.PROPOSAL_ID;

  const state = await governor.state(proposalId);
  const proposal = {
    0: "Pending",
    1: "Active",
    2: "Canceled",
    3: "Defeated",
    4: "Succeeded",
    5: "Queued",
    6: "Expired",
    7: "Executed",
  };

  console.log(`Proposal State: ${proposal[state]}`);

  const proposalVotes = await governor.proposalVotes(proposalId);
  console.log(`Votes For: ${ethers.utils.formatEther(proposalVotes.forVotes)}`);
  console.log(`Votes Against: ${ethers.utils.formatEther(proposalVotes.againstVotes)}`);
  console.log(`Votes Abstained: ${ethers.utils.formatEther(proposalVotes.abstainVotes)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
