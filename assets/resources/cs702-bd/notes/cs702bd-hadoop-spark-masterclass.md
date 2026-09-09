# CS-702 (Big Data): Hadoop, MapReduce & Spark Masterclass
**Course Code:** CS-702 (Big Data) | **7th Semester B.Tech CSE Core Notes**

---

## Unit 1: Big Data Fundamentals & HDFS Storage
### 1. The 5 V's of Big Data
1. **Volume:** Scale of data (terabytes to petabytes and exabytes).
2. **Velocity:** Speed of data arrival and real-time generation (IoT streams, financial tickers).
3. **Variety:** Structural heterogeneity (Structured SQL, Semi-structured JSON/XML, Unstructured video/text).
4. **Veracity:** Trustworthiness, data cleanliness, noise, and data provenance.
5. **Value:** Actionable business intelligence derived from analytical transformation.

### 2. Hadoop Distributed File System (HDFS) Architecture
- **Master-Worker Paradigm:**
  - **NameNode (Master):** Stores metadata (namespace tree, file-to-block mapping, block-to-DataNode locations). Kept entirely in RAM for fast lookup.
  - **Secondary NameNode:** Performs checkpointing by periodically merging the `fsimage` snapshot and the `edits` log file. **It is NOT a hot standby backup!**
  - **DataNodes (Workers):** Store actual data blocks (default size 128MB) as raw files on underlying Linux ext4/xfs storage. Send periodic heartbeats (every 3 seconds) and block reports (every 6 hours) to the NameNode.
- **Block Replication & Rack Awareness:**
  - Default replication factor: 3.
  - *Rack Awareness Policy:*
    - 1st replica placed on a local node in the writer's rack.
    - 2nd replica placed on a different node in a *different (remote) rack*.
    - 3rd replica placed on a different node in the *same remote rack*.
    - Maximizes fault tolerance against entire rack power/switch failures while minimizing cross-rack network switch saturation.

---

## Unit 2: MapReduce Distributed Computing
### 1. MapReduce Execution Pipeline
1. **InputFormat & InputSplit:** Logical chunking of HDFS data without moving bytes.
2. **RecordReader:** Emits `(key, value)` pairs from splits (e.g. line offset, line text).
3. **Map Phase:** User-defined `map(K1, V1, Context)` emits intermediate `(K2, V2)`.
4. **Combiner (Mini-Reducer):** Optional local aggregation on mapper node to shrink network traffic (e.g., local partial word sum).
5. **Partitioner:** Assigns intermediate keys to reducers using `(hash(K2) & Integer.MAX_VALUE) % numReducers`.
6. **Shuffle & Sort:** Critical phase where framework pulls partitions across the network and sorts keys alphabetically.
7. **Reduce Phase:** User-defined `reduce(K2, Iterable<V2>, Context)` emits final `(K3, V3)`.

---

## Unit 3: Apache Spark & In-Memory Analytics
### 1. Why Spark Beats Hadoop MapReduce (100x Speedup)
- MapReduce writes all intermediate outputs to physical disks between every map and reduce phase.
- Spark keeps working data in distributed RAM using **Resilient Distributed Datasets (RDDs)**, only writing to disk on explicit caching or memory spill.
- **Transformations (Lazy):** Build execution DAG without running (`map`, `filter`, `flatMap`, `groupByKey`, `reduceByKey`).
- **Actions (Eager):** Trigger DAG evaluation and return results (`count`, `collect`, `take`, `saveAsTextFile`).
- **RDD Lineage Graph:** If a node crashes, Spark reconstructs only the lost partition from the parent lineage without re-running the whole job!
