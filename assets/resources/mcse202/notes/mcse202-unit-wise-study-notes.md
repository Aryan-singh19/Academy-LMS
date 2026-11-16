# MCSE-202 Distributed Systems & Cloud Computing — Unit-wise Study Notes

> Distributed system models, time, consensus, replication, distributed storage, big data frameworks and cloud-native systems.

## Unit 1: Distributed System Models

### Characteristics of Distributed Systems

Independent computers appear as one system.

- **Distributed System:** components on networked computers coordinating by messages
- **Transparency:** hides distribution from users
- **Partial Failure:** some components fail while others work

### System Models

Models specify timing and failures.

- **Synchronous Model:** bounded delays
- **Asynchronous Model:** no timing bounds
- **Byzantine Failure:** arbitrary malicious behaviour

### Communication

Processes communicate by messages.

- **RPC:** remote procedure call
- **Message Queue:** asynchronous decoupled messaging
- **Publish-Subscribe:** topic-based message distribution

### CAP Theorem

Trade-offs in distributed data.

- **CAP Theorem:** choose two of consistency, availability, partition tolerance
- **PACELC:** adds latency-consistency trade-off without partitions
- **Eventual Consistency:** replicas converge over time

## Unit 2: Time & Coordination

### Logical Clocks

Ordering without global clock.

- **Lamport Clock:** scalar logical timestamps
- **Vector Clock:** captures causality between events
- **Happened-before Relation:** causal ordering of events

### Clock Synchronisation

Physical clocks drift.

- **NTP:** network time protocol
- **Cristian's Algorithm:** synchronise with time server
- **Berkeley Algorithm:** averages clocks of group

### Mutual Exclusion & Election

Coordination among processes.

- **Ricart-Agrawala Algorithm:** permission-based mutual exclusion
- **Bully Algorithm:** highest-ID process becomes leader
- **Ring Election:** token passed around logical ring

### Global State & Snapshots

Capturing consistent state.

- **Chandy-Lamport Snapshot:** records consistent global state
- **Consistent Cut:** no message received before being sent
- **Deadlock Detection:** in distributed systems via wait-for graphs

## Unit 3: Consensus & Replication

### Consensus Problem

Nodes agree on a value.

- **FLP Impossibility:** no deterministic consensus in async system with one crash
- **Paxos:** consensus with proposers, acceptors and learners
- **Quorum:** majority overlap ensures agreement

### Raft

Understandable consensus algorithm.

- **Raft:** leader-based consensus with replicated log
- **Leader Election:** randomised timeouts choose leader
- **Log Replication:** leader appends entries to followers

### Replication Strategies

Copies improve availability.

- **Primary-backup Replication:** primary handles writes
- **Chain Replication:** writes flow along a chain
- **State Machine Replication:** replicas apply same commands in order

### Byzantine Fault Tolerance

Tolerating malicious nodes.

- **PBFT:** practical Byzantine fault tolerance
- **3f + 1 Rule:** nodes needed to tolerate f Byzantine faults
- **Blockchain Consensus:** BFT applied to ledgers

## Unit 4: Distributed Storage & Big Data

### Distributed File Systems

Files spread across machines.

- **GFS/HDFS:** large-block replicated distributed file systems
- **NameNode:** metadata server in HDFS
- **Replication Factor:** copies of each block

### Distributed Databases

Databases scale horizontally.

- **Sharding:** partitioning data across nodes
- **Consistent Hashing:** minimises remapping when nodes change
- **Two-phase Commit:** atomic distributed transactions

### NoSQL Systems

Flexible scalable stores.

- **Key-value Store:** e.g. DynamoDB, Redis
- **Wide-column Store:** e.g. Cassandra, Bigtable
- **Document Store:** e.g. MongoDB

### Big Data Frameworks

Frameworks process massive data.

- **MapReduce:** map and reduce over partitions
- **Apache Spark:** in-memory RDD-based processing
- **Apache Kafka:** distributed commit log for streams

## Unit 5: Cloud-native Systems

### Virtualisation & Containers

Isolation for cloud workloads.

- **Hypervisor:** runs virtual machines
- **Container:** lightweight OS-level isolation
- **Kubernetes:** container orchestration platform

### Microservices

Applications as small services.

- **Microservice:** independently deployable service
- **Service Mesh:** infrastructure for service communication, e.g. Istio
- **API Gateway:** single entry point for clients

### Serverless Computing

Functions run on demand.

- **FaaS:** function as a service
- **Cold Start:** latency of initialising function
- **Event-driven Architecture:** components react to events

### Reliability Engineering

Running services reliably.

- **SLO:** service level objective
- **Observability:** metrics, logs and traces
- **Chaos Engineering:** injecting failures to test resilience

## Standard Textbooks

- *Distributed Systems* — van Steen & Tanenbaum
- *Designing Data-Intensive Applications* — Martin Kleppmann
- *Cloud Computing: Concepts, Technology & Architecture* — Thomas Erl

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
