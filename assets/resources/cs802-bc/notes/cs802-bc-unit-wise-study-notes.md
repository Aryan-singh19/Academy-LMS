# CS-802(A) Blockchain Technologies — Unit-wise Study Notes

> Distributed ledgers, cryptographic primitives, consensus, Bitcoin, Ethereum smart contracts and enterprise blockchains.

## Unit 1: Blockchain Fundamentals

### What is Blockchain?

A blockchain is an append-only ledger replicated across peers.

- **Blockchain:** chain of blocks, each linking to the previous block's hash
- **Distributed Ledger:** database shared and synchronised across many nodes
- **Immutability:** recorded data cannot be altered without breaking the chain

### Types of Blockchain

Networks differ in who can join and validate.

- **Public Blockchain:** anyone can read, transact and validate, e.g. Bitcoin
- **Private Blockchain:** controlled by one organisation
- **Consortium Blockchain:** governed by a group of organisations

### Block Structure

Each block holds a header and transactions.

- **Block Header:** contains previous hash, Merkle root, timestamp and nonce
- **Genesis Block:** first block of a blockchain
- **Block Height:** number of blocks before a given block

### Decentralisation & Trust

Blockchains replace central authorities with protocols.

- **Decentralisation:** no single party controls the network
- **Double Spending:** spending the same digital token twice
- **Trustless System:** participants need not trust each other, only the protocol

## Unit 2: Cryptographic Foundations

### Hash Functions

Cryptographic hashes give fixed-size fingerprints of data.

- **SHA-256:** hash function producing a 256-bit digest, used in Bitcoin
- **Collision Resistance:** infeasible to find two inputs with the same hash
- **Avalanche Effect:** small input change produces a very different hash

### Merkle Trees

Merkle trees summarise many transactions in one hash.

- **Merkle Tree:** binary tree of hashes whose root commits to all leaves
- **Merkle Root:** top hash stored in the block header
- **Merkle Proof:** path of hashes proving a transaction is in a block

### Public-key Cryptography & Signatures

Keys prove ownership and authorise transactions.

- **Public Key:** shared key used to verify signatures and derive addresses
- **ECDSA:** elliptic curve digital signature algorithm used in Bitcoin and Ethereum
- **Wallet:** software storing private keys and creating transactions

### Zero-knowledge & Privacy Techniques

Advanced cryptography adds privacy.

- **Zero-knowledge Proof:** proves a statement is true without revealing why
- **zk-SNARK:** succinct non-interactive zero-knowledge proof
- **Ring Signature:** signature from a group hiding the actual signer

## Unit 3: Consensus Mechanisms

### Proof of Work

Miners compete to solve a hash puzzle.

- **Proof of Work:** consensus where miners find a nonce giving a hash below a target
- **Mining Difficulty:** target adjusted to keep block time steady
- **51% Attack:** majority hash power can rewrite recent history

### Proof of Stake & Variants

Validators are chosen by stake instead of work.

- **Proof of Stake:** validators selected in proportion to coins staked
- **Slashing:** penalty destroying stake of misbehaving validators
- **Delegated PoS:** token holders elect a small set of validators

### Byzantine Fault Tolerance

BFT protocols reach agreement despite faulty nodes.

- **Byzantine Generals Problem:** reaching agreement when some participants are malicious
- **PBFT:** practical BFT tolerating f faults with 3f + 1 nodes
- **Finality:** point after which a transaction cannot be reversed

### Forks & Network Upgrades

Protocol changes and competing chains create forks.

- **Soft Fork:** backward-compatible rule tightening
- **Hard Fork:** non-backward-compatible change splitting the chain
- **Orphan Block:** valid block not included in the main chain

## Unit 4: Bitcoin & Ethereum

### Bitcoin Transactions

Bitcoin tracks coins as unspent outputs.

- **UTXO:** unspent transaction output model used by Bitcoin
- **Bitcoin Script:** simple stack-based language locking outputs
- **Block Reward:** new coins plus fees given to the miner

### Ethereum & the EVM

Ethereum is a programmable blockchain.

- **Ethereum Virtual Machine:** runtime executing smart contract bytecode
- **Gas:** fee unit measuring computation cost on Ethereum
- **Account Model:** Ethereum tracks balances in externally owned and contract accounts

### Smart Contracts & Solidity

Contracts are programs that run on the chain.

- **Smart Contract:** self-executing code enforcing agreement terms
- **Solidity:** statically typed language for Ethereum contracts
- **Reentrancy Attack:** exploit calling back into a contract before state updates

### Tokens & DApps

Standards define tokens and decentralised applications.

- **ERC-20:** standard for fungible tokens on Ethereum
- **ERC-721:** standard for non-fungible tokens
- **DApp:** decentralised application whose backend runs on a blockchain

## Unit 5: Enterprise Blockchain & Applications

### Hyperledger Fabric

Permissioned frameworks serve business networks.

- **Hyperledger Fabric:** modular permissioned blockchain framework
- **Chaincode:** smart contract in Hyperledger Fabric
- **Endorsement Policy:** rule specifying which peers must approve a transaction

### Blockchain Scalability

Layer-2 and sharding improve throughput.

- **Scalability Trilemma:** trade-off among decentralisation, security and scalability
- **Sharding:** splitting the network so shards process transactions in parallel
- **Lightning Network:** Bitcoin layer-2 payment channels

### Applications Beyond Cryptocurrency

Blockchains serve supply chains, identity and finance.

- **Supply Chain Traceability:** recording product movement on a shared ledger
- **Self-sovereign Identity:** users control their own identity credentials
- **DeFi:** decentralised finance services built on smart contracts

### Limitations, Oracles & Regulation

Blockchains face practical constraints.

- **Oracle:** service bringing off-chain data onto the blockchain
- **Energy Consumption:** PoW networks use very large amounts of electricity
- **Regulatory Compliance:** KYC and AML rules applied to crypto services

## Standard Textbooks

- *Mastering Bitcoin* — Andreas M. Antonopoulos
- *Blockchain Technology* — Chandramouli Subramanian et al.
- *Mastering Ethereum* — Antonopoulos & Wood

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
