# MCSE-202 Distributed Systems & Cloud Computing — Question Bank with Answer Hints

## Unit 1: Distributed System Models

### Short answer (2-3 marks)

- **Q.** Define *Distributed System*.  
  **Ans.** components on networked computers coordinating by messages
- **Q.** Define *Transparency*.  
  **Ans.** hides distribution from users
- **Q.** Define *Partial Failure*.  
  **Ans.** some components fail while others work
- **Q.** Define *Synchronous Model*.  
  **Ans.** bounded delays
- **Q.** Define *Asynchronous Model*.  
  **Ans.** no timing bounds
- **Q.** Define *Byzantine Failure*.  
  **Ans.** arbitrary malicious behaviour
- **Q.** Define *RPC*.  
  **Ans.** remote procedure call
- **Q.** Define *Message Queue*.  
  **Ans.** asynchronous decoupled messaging
- **Q.** Define *Publish-Subscribe*.  
  **Ans.** topic-based message distribution
- **Q.** Define *CAP Theorem*.  
  **Ans.** choose two of consistency, availability, partition tolerance
- **Q.** Define *PACELC*.  
  **Ans.** adds latency-consistency trade-off without partitions
- **Q.** Define *Eventual Consistency*.  
  **Ans.** replicas converge over time

### Long answer (7 marks)

- **Q.** Explain *Characteristics of Distributed Systems* in detail with a neat diagram.  
  **Key points:** Independent computers appear as one system. Distributed System — components on networked computers coordinating by messages; Transparency — hides distribution from users; Partial Failure — some components fail while others work.
- **Q.** Explain *System Models* in detail with a neat diagram.  
  **Key points:** Models specify timing and failures. Synchronous Model — bounded delays; Asynchronous Model — no timing bounds; Byzantine Failure — arbitrary malicious behaviour.
- **Q.** Explain *Communication* in detail with a neat diagram.  
  **Key points:** Processes communicate by messages. RPC — remote procedure call; Message Queue — asynchronous decoupled messaging; Publish-Subscribe — topic-based message distribution.
- **Q.** Explain *CAP Theorem* in detail with a neat diagram.  
  **Key points:** Trade-offs in distributed data. CAP Theorem — choose two of consistency, availability, partition tolerance; PACELC — adds latency-consistency trade-off without partitions; Eventual Consistency — replicas converge over time.

## Unit 2: Time & Coordination

### Short answer (2-3 marks)

- **Q.** Define *Lamport Clock*.  
  **Ans.** scalar logical timestamps
- **Q.** Define *Vector Clock*.  
  **Ans.** captures causality between events
- **Q.** Define *Happened-before Relation*.  
  **Ans.** causal ordering of events
- **Q.** Define *NTP*.  
  **Ans.** network time protocol
- **Q.** Define *Cristian's Algorithm*.  
  **Ans.** synchronise with time server
- **Q.** Define *Berkeley Algorithm*.  
  **Ans.** averages clocks of group
- **Q.** Define *Ricart-Agrawala Algorithm*.  
  **Ans.** permission-based mutual exclusion
- **Q.** Define *Bully Algorithm*.  
  **Ans.** highest-ID process becomes leader
- **Q.** Define *Ring Election*.  
  **Ans.** token passed around logical ring
- **Q.** Define *Chandy-Lamport Snapshot*.  
  **Ans.** records consistent global state
- **Q.** Define *Consistent Cut*.  
  **Ans.** no message received before being sent
- **Q.** Define *Deadlock Detection*.  
  **Ans.** in distributed systems via wait-for graphs

### Long answer (7 marks)

- **Q.** Explain *Logical Clocks* in detail with a neat diagram.  
  **Key points:** Ordering without global clock. Lamport Clock — scalar logical timestamps; Vector Clock — captures causality between events; Happened-before Relation — causal ordering of events.
- **Q.** Explain *Clock Synchronisation* in detail with a neat diagram.  
  **Key points:** Physical clocks drift. NTP — network time protocol; Cristian's Algorithm — synchronise with time server; Berkeley Algorithm — averages clocks of group.
- **Q.** Explain *Mutual Exclusion & Election* in detail with a neat diagram.  
  **Key points:** Coordination among processes. Ricart-Agrawala Algorithm — permission-based mutual exclusion; Bully Algorithm — highest-ID process becomes leader; Ring Election — token passed around logical ring.
- **Q.** Explain *Global State & Snapshots* in detail with a neat diagram.  
  **Key points:** Capturing consistent state. Chandy-Lamport Snapshot — records consistent global state; Consistent Cut — no message received before being sent; Deadlock Detection — in distributed systems via wait-for graphs.

## Unit 3: Consensus & Replication

### Short answer (2-3 marks)

- **Q.** Define *FLP Impossibility*.  
  **Ans.** no deterministic consensus in async system with one crash
- **Q.** Define *Paxos*.  
  **Ans.** consensus with proposers, acceptors and learners
- **Q.** Define *Quorum*.  
  **Ans.** majority overlap ensures agreement
- **Q.** Define *Raft*.  
  **Ans.** leader-based consensus with replicated log
- **Q.** Define *Leader Election*.  
  **Ans.** randomised timeouts choose leader
- **Q.** Define *Log Replication*.  
  **Ans.** leader appends entries to followers
- **Q.** Define *Primary-backup Replication*.  
  **Ans.** primary handles writes
- **Q.** Define *Chain Replication*.  
  **Ans.** writes flow along a chain
- **Q.** Define *State Machine Replication*.  
  **Ans.** replicas apply same commands in order
- **Q.** Define *PBFT*.  
  **Ans.** practical Byzantine fault tolerance
- **Q.** Define *3f + 1 Rule*.  
  **Ans.** nodes needed to tolerate f Byzantine faults
- **Q.** Define *Blockchain Consensus*.  
  **Ans.** BFT applied to ledgers

### Long answer (7 marks)

- **Q.** Explain *Consensus Problem* in detail with a neat diagram.  
  **Key points:** Nodes agree on a value. FLP Impossibility — no deterministic consensus in async system with one crash; Paxos — consensus with proposers, acceptors and learners; Quorum — majority overlap ensures agreement.
- **Q.** Explain *Raft* in detail with a neat diagram.  
  **Key points:** Understandable consensus algorithm. Raft — leader-based consensus with replicated log; Leader Election — randomised timeouts choose leader; Log Replication — leader appends entries to followers.
- **Q.** Explain *Replication Strategies* in detail with a neat diagram.  
  **Key points:** Copies improve availability. Primary-backup Replication — primary handles writes; Chain Replication — writes flow along a chain; State Machine Replication — replicas apply same commands in order.
- **Q.** Explain *Byzantine Fault Tolerance* in detail with a neat diagram.  
  **Key points:** Tolerating malicious nodes. PBFT — practical Byzantine fault tolerance; 3f + 1 Rule — nodes needed to tolerate f Byzantine faults; Blockchain Consensus — BFT applied to ledgers.

## Unit 4: Distributed Storage & Big Data

### Short answer (2-3 marks)

- **Q.** Define *GFS/HDFS*.  
  **Ans.** large-block replicated distributed file systems
- **Q.** Define *NameNode*.  
  **Ans.** metadata server in HDFS
- **Q.** Define *Replication Factor*.  
  **Ans.** copies of each block
- **Q.** Define *Sharding*.  
  **Ans.** partitioning data across nodes
- **Q.** Define *Consistent Hashing*.  
  **Ans.** minimises remapping when nodes change
- **Q.** Define *Two-phase Commit*.  
  **Ans.** atomic distributed transactions
- **Q.** Define *Key-value Store*.  
  **Ans.** e.g. DynamoDB, Redis
- **Q.** Define *Wide-column Store*.  
  **Ans.** e.g. Cassandra, Bigtable
- **Q.** Define *Document Store*.  
  **Ans.** e.g. MongoDB
- **Q.** Define *MapReduce*.  
  **Ans.** map and reduce over partitions
- **Q.** Define *Apache Spark*.  
  **Ans.** in-memory RDD-based processing
- **Q.** Define *Apache Kafka*.  
  **Ans.** distributed commit log for streams

### Long answer (7 marks)

- **Q.** Explain *Distributed File Systems* in detail with a neat diagram.  
  **Key points:** Files spread across machines. GFS/HDFS — large-block replicated distributed file systems; NameNode — metadata server in HDFS; Replication Factor — copies of each block.
- **Q.** Explain *Distributed Databases* in detail with a neat diagram.  
  **Key points:** Databases scale horizontally. Sharding — partitioning data across nodes; Consistent Hashing — minimises remapping when nodes change; Two-phase Commit — atomic distributed transactions.
- **Q.** Explain *NoSQL Systems* in detail with a neat diagram.  
  **Key points:** Flexible scalable stores. Key-value Store — e.g. DynamoDB, Redis; Wide-column Store — e.g. Cassandra, Bigtable; Document Store — e.g. MongoDB.
- **Q.** Explain *Big Data Frameworks* in detail with a neat diagram.  
  **Key points:** Frameworks process massive data. MapReduce — map and reduce over partitions; Apache Spark — in-memory RDD-based processing; Apache Kafka — distributed commit log for streams.

## Unit 5: Cloud-native Systems

### Short answer (2-3 marks)

- **Q.** Define *Hypervisor*.  
  **Ans.** runs virtual machines
- **Q.** Define *Container*.  
  **Ans.** lightweight OS-level isolation
- **Q.** Define *Kubernetes*.  
  **Ans.** container orchestration platform
- **Q.** Define *Microservice*.  
  **Ans.** independently deployable service
- **Q.** Define *Service Mesh*.  
  **Ans.** infrastructure for service communication, e.g. Istio
- **Q.** Define *API Gateway*.  
  **Ans.** single entry point for clients
- **Q.** Define *FaaS*.  
  **Ans.** function as a service
- **Q.** Define *Cold Start*.  
  **Ans.** latency of initialising function
- **Q.** Define *Event-driven Architecture*.  
  **Ans.** components react to events
- **Q.** Define *SLO*.  
  **Ans.** service level objective
- **Q.** Define *Observability*.  
  **Ans.** metrics, logs and traces
- **Q.** Define *Chaos Engineering*.  
  **Ans.** injecting failures to test resilience

### Long answer (7 marks)

- **Q.** Explain *Virtualisation & Containers* in detail with a neat diagram.  
  **Key points:** Isolation for cloud workloads. Hypervisor — runs virtual machines; Container — lightweight OS-level isolation; Kubernetes — container orchestration platform.
- **Q.** Explain *Microservices* in detail with a neat diagram.  
  **Key points:** Applications as small services. Microservice — independently deployable service; Service Mesh — infrastructure for service communication, e.g. Istio; API Gateway — single entry point for clients.
- **Q.** Explain *Serverless Computing* in detail with a neat diagram.  
  **Key points:** Functions run on demand. FaaS — function as a service; Cold Start — latency of initialising function; Event-driven Architecture — components react to events.
- **Q.** Explain *Reliability Engineering* in detail with a neat diagram.  
  **Key points:** Running services reliably. SLO — service level objective; Observability — metrics, logs and traces; Chaos Engineering — injecting failures to test resilience.

