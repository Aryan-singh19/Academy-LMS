# CS-802(A) Blockchain Technologies — Question Bank with Answer Hints

## Unit 1: Blockchain Fundamentals

### Short answer (2-3 marks)

- **Q.** Define *Blockchain*.  
  **Ans.** chain of blocks, each linking to the previous block's hash
- **Q.** Define *Distributed Ledger*.  
  **Ans.** database shared and synchronised across many nodes
- **Q.** Define *Immutability*.  
  **Ans.** recorded data cannot be altered without breaking the chain
- **Q.** Define *Public Blockchain*.  
  **Ans.** anyone can read, transact and validate, e.g. Bitcoin
- **Q.** Define *Private Blockchain*.  
  **Ans.** controlled by one organisation
- **Q.** Define *Consortium Blockchain*.  
  **Ans.** governed by a group of organisations
- **Q.** Define *Block Header*.  
  **Ans.** contains previous hash, Merkle root, timestamp and nonce
- **Q.** Define *Genesis Block*.  
  **Ans.** first block of a blockchain
- **Q.** Define *Block Height*.  
  **Ans.** number of blocks before a given block
- **Q.** Define *Decentralisation*.  
  **Ans.** no single party controls the network
- **Q.** Define *Double Spending*.  
  **Ans.** spending the same digital token twice
- **Q.** Define *Trustless System*.  
  **Ans.** participants need not trust each other, only the protocol

### Long answer (7 marks)

- **Q.** Explain *What is Blockchain?* in detail with a neat diagram.  
  **Key points:** A blockchain is an append-only ledger replicated across peers. Blockchain — chain of blocks, each linking to the previous block's hash; Distributed Ledger — database shared and synchronised across many nodes; Immutability — recorded data cannot be altered without breaking the chain.
- **Q.** Explain *Types of Blockchain* in detail with a neat diagram.  
  **Key points:** Networks differ in who can join and validate. Public Blockchain — anyone can read, transact and validate, e.g. Bitcoin; Private Blockchain — controlled by one organisation; Consortium Blockchain — governed by a group of organisations.
- **Q.** Explain *Block Structure* in detail with a neat diagram.  
  **Key points:** Each block holds a header and transactions. Block Header — contains previous hash, Merkle root, timestamp and nonce; Genesis Block — first block of a blockchain; Block Height — number of blocks before a given block.
- **Q.** Explain *Decentralisation & Trust* in detail with a neat diagram.  
  **Key points:** Blockchains replace central authorities with protocols. Decentralisation — no single party controls the network; Double Spending — spending the same digital token twice; Trustless System — participants need not trust each other, only the protocol.

## Unit 2: Cryptographic Foundations

### Short answer (2-3 marks)

- **Q.** Define *SHA-256*.  
  **Ans.** hash function producing a 256-bit digest, used in Bitcoin
- **Q.** Define *Collision Resistance*.  
  **Ans.** infeasible to find two inputs with the same hash
- **Q.** Define *Avalanche Effect*.  
  **Ans.** small input change produces a very different hash
- **Q.** Define *Merkle Tree*.  
  **Ans.** binary tree of hashes whose root commits to all leaves
- **Q.** Define *Merkle Root*.  
  **Ans.** top hash stored in the block header
- **Q.** Define *Merkle Proof*.  
  **Ans.** path of hashes proving a transaction is in a block
- **Q.** Define *Public Key*.  
  **Ans.** shared key used to verify signatures and derive addresses
- **Q.** Define *ECDSA*.  
  **Ans.** elliptic curve digital signature algorithm used in Bitcoin and Ethereum
- **Q.** Define *Wallet*.  
  **Ans.** software storing private keys and creating transactions
- **Q.** Define *Zero-knowledge Proof*.  
  **Ans.** proves a statement is true without revealing why
- **Q.** Define *zk-SNARK*.  
  **Ans.** succinct non-interactive zero-knowledge proof
- **Q.** Define *Ring Signature*.  
  **Ans.** signature from a group hiding the actual signer

### Long answer (7 marks)

- **Q.** Explain *Hash Functions* in detail with a neat diagram.  
  **Key points:** Cryptographic hashes give fixed-size fingerprints of data. SHA-256 — hash function producing a 256-bit digest, used in Bitcoin; Collision Resistance — infeasible to find two inputs with the same hash; Avalanche Effect — small input change produces a very different hash.
- **Q.** Explain *Merkle Trees* in detail with a neat diagram.  
  **Key points:** Merkle trees summarise many transactions in one hash. Merkle Tree — binary tree of hashes whose root commits to all leaves; Merkle Root — top hash stored in the block header; Merkle Proof — path of hashes proving a transaction is in a block.
- **Q.** Explain *Public-key Cryptography & Signatures* in detail with a neat diagram.  
  **Key points:** Keys prove ownership and authorise transactions. Public Key — shared key used to verify signatures and derive addresses; ECDSA — elliptic curve digital signature algorithm used in Bitcoin and Ethereum; Wallet — software storing private keys and creating transactions.
- **Q.** Explain *Zero-knowledge & Privacy Techniques* in detail with a neat diagram.  
  **Key points:** Advanced cryptography adds privacy. Zero-knowledge Proof — proves a statement is true without revealing why; zk-SNARK — succinct non-interactive zero-knowledge proof; Ring Signature — signature from a group hiding the actual signer.

## Unit 3: Consensus Mechanisms

### Short answer (2-3 marks)

- **Q.** Define *Proof of Work*.  
  **Ans.** consensus where miners find a nonce giving a hash below a target
- **Q.** Define *Mining Difficulty*.  
  **Ans.** target adjusted to keep block time steady
- **Q.** Define *51% Attack*.  
  **Ans.** majority hash power can rewrite recent history
- **Q.** Define *Proof of Stake*.  
  **Ans.** validators selected in proportion to coins staked
- **Q.** Define *Slashing*.  
  **Ans.** penalty destroying stake of misbehaving validators
- **Q.** Define *Delegated PoS*.  
  **Ans.** token holders elect a small set of validators
- **Q.** Define *Byzantine Generals Problem*.  
  **Ans.** reaching agreement when some participants are malicious
- **Q.** Define *PBFT*.  
  **Ans.** practical BFT tolerating f faults with 3f + 1 nodes
- **Q.** Define *Finality*.  
  **Ans.** point after which a transaction cannot be reversed
- **Q.** Define *Soft Fork*.  
  **Ans.** backward-compatible rule tightening
- **Q.** Define *Hard Fork*.  
  **Ans.** non-backward-compatible change splitting the chain
- **Q.** Define *Orphan Block*.  
  **Ans.** valid block not included in the main chain

### Long answer (7 marks)

- **Q.** Explain *Proof of Work* in detail with a neat diagram.  
  **Key points:** Miners compete to solve a hash puzzle. Proof of Work — consensus where miners find a nonce giving a hash below a target; Mining Difficulty — target adjusted to keep block time steady; 51% Attack — majority hash power can rewrite recent history.
- **Q.** Explain *Proof of Stake & Variants* in detail with a neat diagram.  
  **Key points:** Validators are chosen by stake instead of work. Proof of Stake — validators selected in proportion to coins staked; Slashing — penalty destroying stake of misbehaving validators; Delegated PoS — token holders elect a small set of validators.
- **Q.** Explain *Byzantine Fault Tolerance* in detail with a neat diagram.  
  **Key points:** BFT protocols reach agreement despite faulty nodes. Byzantine Generals Problem — reaching agreement when some participants are malicious; PBFT — practical BFT tolerating f faults with 3f + 1 nodes; Finality — point after which a transaction cannot be reversed.
- **Q.** Explain *Forks & Network Upgrades* in detail with a neat diagram.  
  **Key points:** Protocol changes and competing chains create forks. Soft Fork — backward-compatible rule tightening; Hard Fork — non-backward-compatible change splitting the chain; Orphan Block — valid block not included in the main chain.

## Unit 4: Bitcoin & Ethereum

### Short answer (2-3 marks)

- **Q.** Define *UTXO*.  
  **Ans.** unspent transaction output model used by Bitcoin
- **Q.** Define *Bitcoin Script*.  
  **Ans.** simple stack-based language locking outputs
- **Q.** Define *Block Reward*.  
  **Ans.** new coins plus fees given to the miner
- **Q.** Define *Ethereum Virtual Machine*.  
  **Ans.** runtime executing smart contract bytecode
- **Q.** Define *Gas*.  
  **Ans.** fee unit measuring computation cost on Ethereum
- **Q.** Define *Account Model*.  
  **Ans.** Ethereum tracks balances in externally owned and contract accounts
- **Q.** Define *Smart Contract*.  
  **Ans.** self-executing code enforcing agreement terms
- **Q.** Define *Solidity*.  
  **Ans.** statically typed language for Ethereum contracts
- **Q.** Define *Reentrancy Attack*.  
  **Ans.** exploit calling back into a contract before state updates
- **Q.** Define *ERC-20*.  
  **Ans.** standard for fungible tokens on Ethereum
- **Q.** Define *ERC-721*.  
  **Ans.** standard for non-fungible tokens
- **Q.** Define *DApp*.  
  **Ans.** decentralised application whose backend runs on a blockchain

### Long answer (7 marks)

- **Q.** Explain *Bitcoin Transactions* in detail with a neat diagram.  
  **Key points:** Bitcoin tracks coins as unspent outputs. UTXO — unspent transaction output model used by Bitcoin; Bitcoin Script — simple stack-based language locking outputs; Block Reward — new coins plus fees given to the miner.
- **Q.** Explain *Ethereum & the EVM* in detail with a neat diagram.  
  **Key points:** Ethereum is a programmable blockchain. Ethereum Virtual Machine — runtime executing smart contract bytecode; Gas — fee unit measuring computation cost on Ethereum; Account Model — Ethereum tracks balances in externally owned and contract accounts.
- **Q.** Explain *Smart Contracts & Solidity* in detail with a neat diagram.  
  **Key points:** Contracts are programs that run on the chain. Smart Contract — self-executing code enforcing agreement terms; Solidity — statically typed language for Ethereum contracts; Reentrancy Attack — exploit calling back into a contract before state updates.
- **Q.** Explain *Tokens & DApps* in detail with a neat diagram.  
  **Key points:** Standards define tokens and decentralised applications. ERC-20 — standard for fungible tokens on Ethereum; ERC-721 — standard for non-fungible tokens; DApp — decentralised application whose backend runs on a blockchain.

## Unit 5: Enterprise Blockchain & Applications

### Short answer (2-3 marks)

- **Q.** Define *Hyperledger Fabric*.  
  **Ans.** modular permissioned blockchain framework
- **Q.** Define *Chaincode*.  
  **Ans.** smart contract in Hyperledger Fabric
- **Q.** Define *Endorsement Policy*.  
  **Ans.** rule specifying which peers must approve a transaction
- **Q.** Define *Scalability Trilemma*.  
  **Ans.** trade-off among decentralisation, security and scalability
- **Q.** Define *Sharding*.  
  **Ans.** splitting the network so shards process transactions in parallel
- **Q.** Define *Lightning Network*.  
  **Ans.** Bitcoin layer-2 payment channels
- **Q.** Define *Supply Chain Traceability*.  
  **Ans.** recording product movement on a shared ledger
- **Q.** Define *Self-sovereign Identity*.  
  **Ans.** users control their own identity credentials
- **Q.** Define *DeFi*.  
  **Ans.** decentralised finance services built on smart contracts
- **Q.** Define *Oracle*.  
  **Ans.** service bringing off-chain data onto the blockchain
- **Q.** Define *Energy Consumption*.  
  **Ans.** PoW networks use very large amounts of electricity
- **Q.** Define *Regulatory Compliance*.  
  **Ans.** KYC and AML rules applied to crypto services

### Long answer (7 marks)

- **Q.** Explain *Hyperledger Fabric* in detail with a neat diagram.  
  **Key points:** Permissioned frameworks serve business networks. Hyperledger Fabric — modular permissioned blockchain framework; Chaincode — smart contract in Hyperledger Fabric; Endorsement Policy — rule specifying which peers must approve a transaction.
- **Q.** Explain *Blockchain Scalability* in detail with a neat diagram.  
  **Key points:** Layer-2 and sharding improve throughput. Scalability Trilemma — trade-off among decentralisation, security and scalability; Sharding — splitting the network so shards process transactions in parallel; Lightning Network — Bitcoin layer-2 payment channels.
- **Q.** Explain *Applications Beyond Cryptocurrency* in detail with a neat diagram.  
  **Key points:** Blockchains serve supply chains, identity and finance. Supply Chain Traceability — recording product movement on a shared ledger; Self-sovereign Identity — users control their own identity credentials; DeFi — decentralised finance services built on smart contracts.
- **Q.** Explain *Limitations, Oracles & Regulation* in detail with a neat diagram.  
  **Key points:** Blockchains face practical constraints. Oracle — service bringing off-chain data onto the blockchain; Energy Consumption — PoW networks use very large amounts of electricity; Regulatory Compliance — KYC and AML rules applied to crypto services.

