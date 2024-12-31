# ERC20 Governor

Alchemy tutorial link: https://university.alchemy.com/course/ethereum/md/63c036f2016d9c0004923145
</br>My governance contract: https://sepolia.etherscan.io/address/0x52a4B38b5f19815abcC22CF2746E0340B25780a6
### 🚀 Updated Features:
- ⏰ Extend voting period (~2.5min)
- 🎯 Delegate votes to myself
- 📝 Create a proposal
- ✅ Vote on the proposal
- ⚡ Execute the proposal
- **🆕 Migitate from Goerli to Sepolia**
- **🆕 Check proposal status**

### 🔄 Workflow:
- `npm install`

- `touch .env`
  - `ALCHEMY_SEPOLIA_URL`: alchemy api url
  - `SEPOLIA_PRIVATE_KEY`: private key

- `npx hardhat run scripts/deploy.js --network sepolia`
  ```
  Governor deployed to GOVERNOR_CONTRACT_ADDRESS Token deployed to TOKEN_CONTRACT_ADDRESS
  ```
  record `GOVERNOR_CONTRACT_ADDRESS` and `TOKEN_CONTRACT_ADDRESS` in `.env`

- `npx hardhat run scripts/delegate.js --network sepolia`
  ```
  Delegating votes to OWNER_ADDRESS
  Votes delegated.
  ```
  record `OWNER_ADDRESS` in `.env`, this should be your wallet address

- `npx hardhat run scripts/propose.js --network sepolia`
  ```
  Proposal created with ID: PROPOSAL_ID
  ```
  record `PROPOSAL_ID` in `.env`

- `npx hardhat run scripts/vote.js --network sepolia`
  ```
  Voting on proposal PROPOSAL_ID
  Vote cast.
  ```
  check `PROPOSAL_ID` matches the previous step's `PROPOSAL_ID`

- (optional) `npx hardhat run scripts/checkProposal.js --network sepolia`
  During the voting period, it will return
  ```
  Proposal State: Active
  Votes For: 10000.0
  Votes Against: 0.0
  Votes Abstained: 0.0
  ```
  When the period ends, run it again and it will return
  ```
  Proposal State: Succeeded
  Votes For: 10000.0
  Votes Against: 0.0
  Votes Abstained: 0.0
  ```
  Proposals could only be executed when Proposal State is `Succeeded`

- `npx hardhat run scripts/execute.js --network sepolia`
  ```
  Proposal executed.
  ```

- (optional) `npx hardhat run scripts/checkProposal.js --network sepolia`
  ```
  Proposal State: Executed
  Votes For: 10000.0
  Votes Against: 0.0
  Votes Abstained: 0.0
  ```
