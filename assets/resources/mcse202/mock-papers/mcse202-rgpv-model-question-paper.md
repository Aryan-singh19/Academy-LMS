# MCSE-202 Distributed Systems & Cloud Computing — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: M.Tech CSE Sem 2: MCSE-202.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Distributed System. Explain its role in Characteristics of Distributed Systems with a suitable example or diagram. **[7]**

(b) Explain System Models in detail. Differentiate between Synchronous Model and Asynchronous Model. **[7]**

**Q2.** *(Unit 2)*

(a) Define Cristian's Algorithm. Explain its role in Clock Synchronisation with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Mutual Exclusion & Election. Bring out the significance of Ricart-Agrawala Algorithm and Bully Algorithm. **[7]**

**Q3.** *(Unit 3)*

(a) Define State Machine Replication. Explain its role in Replication Strategies with a suitable example or diagram. **[7]**

(b) Explain Byzantine Fault Tolerance in detail. Differentiate between PBFT and 3f + 1 Rule. **[7]**

**Q4.** *(Unit 4)*

(a) Define MapReduce. Explain its role in Big Data Frameworks with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Distributed File Systems. Bring out the significance of GFS/HDFS and NameNode. **[7]**

**Q5.** *(Unit 5)*

(a) Define Container. Explain its role in Virtualisation & Containers with a suitable example or diagram. **[7]**

(b) Explain Microservices in detail. Differentiate between Microservice and Service Mesh. **[7]**

**Q6.** *(Unit 1)*

(a) Define Eventual Consistency. Explain its role in CAP Theorem with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Characteristics of Distributed Systems. Bring out the significance of Distributed System and Transparency. **[7]**

**Q7.** *(Unit 3)*

(a) Define FLP Impossibility. Explain its role in Consensus Problem with a suitable example or diagram. **[7]**

(b) Explain Raft in detail. Differentiate between Raft and Leader Election. **[7]**

**Q8.** *(Unit 5)*

(a) Define Service Mesh. Explain its role in Microservices with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Serverless Computing. Bring out the significance of FaaS and Cold Start. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Asynchronous Model. Explain its role in System Models with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Communication. Bring out the significance of RPC and Message Queue. **[7]**

**Q2.** *(Unit 2)*

(a) Define Ring Election. Explain its role in Mutual Exclusion & Election with a suitable example or diagram. **[7]**

(b) Explain Global State & Snapshots in detail. Differentiate between Chandy-Lamport Snapshot and Consistent Cut. **[7]**

**Q3.** *(Unit 3)*

(a) Define PBFT. Explain its role in Byzantine Fault Tolerance with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Consensus Problem. Bring out the significance of FLP Impossibility and Paxos. **[7]**

**Q4.** *(Unit 4)*

(a) Define NameNode. Explain its role in Distributed File Systems with a suitable example or diagram. **[7]**

(b) Explain Distributed Databases in detail. Differentiate between Sharding and Consistent Hashing. **[7]**

**Q5.** *(Unit 5)*

(a) Define API Gateway. Explain its role in Microservices with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Serverless Computing. Bring out the significance of FaaS and Cold Start. **[7]**

**Q6.** *(Unit 2)*

(a) Define Lamport Clock. Explain its role in Logical Clocks with a suitable example or diagram. **[7]**

(b) Explain Clock Synchronisation in detail. Differentiate between NTP and Cristian's Algorithm. **[7]**

**Q7.** *(Unit 4)*

(a) Define Consistent Hashing. Explain its role in Distributed Databases with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss NoSQL Systems. Bring out the significance of Key-value Store and Wide-column Store. **[7]**

**Q8.** *(Unit 1)*

(a) Define Publish-Subscribe. Explain its role in Communication with a suitable example or diagram. **[7]**

(b) Explain CAP Theorem in detail. Differentiate between CAP Theorem and PACELC. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Distributed System: components on networked computers coordinating by messages
- **Q1(b):** Synchronous Model: bounded delays | Asynchronous Model: no timing bounds | Byzantine Failure: arbitrary malicious behaviour
- **Q2(a):** Cristian's Algorithm: synchronise with time server
- **Q2(b):** Ricart-Agrawala Algorithm: permission-based mutual exclusion | Bully Algorithm: highest-ID process becomes leader | Ring Election: token passed around logical ring
- **Q3(a):** State Machine Replication: replicas apply same commands in order
- **Q3(b):** PBFT: practical Byzantine fault tolerance | 3f + 1 Rule: nodes needed to tolerate f Byzantine faults | Blockchain Consensus: BFT applied to ledgers
- **Q4(a):** MapReduce: map and reduce over partitions
- **Q4(b):** GFS/HDFS: large-block replicated distributed file systems | NameNode: metadata server in HDFS | Replication Factor: copies of each block
- **Q5(a):** Container: lightweight OS-level isolation
- **Q5(b):** Microservice: independently deployable service | Service Mesh: infrastructure for service communication, e.g. Istio | API Gateway: single entry point for clients
- **Q6(a):** Eventual Consistency: replicas converge over time
- **Q6(b):** Distributed System: components on networked computers coordinating by messages | Transparency: hides distribution from users | Partial Failure: some components fail while others work
- **Q7(a):** FLP Impossibility: no deterministic consensus in async system with one crash
- **Q7(b):** Raft: leader-based consensus with replicated log | Leader Election: randomised timeouts choose leader | Log Replication: leader appends entries to followers
- **Q8(a):** Service Mesh: infrastructure for service communication, e.g. Istio
- **Q8(b):** FaaS: function as a service | Cold Start: latency of initialising function | Event-driven Architecture: components react to events

## Recommended Books

- *Distributed Systems* — van Steen & Tanenbaum
- *Designing Data-Intensive Applications* — Martin Kleppmann
- *Cloud Computing: Concepts, Technology & Architecture* — Thomas Erl
