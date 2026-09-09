# CS-702 (Big Data): University Solved Exam Question Bank
**Course Code:** CS-702 Big Data | **Solved Examination Numericals & Architecture Proofs**

---

### Question 1: Explain HDFS Architecture with a block diagram. Detail the NameNode Checkpointing Process using fsimage and edits log.
**Solution:**
```
+----------------------------------------------------------------+
|                        HDFS CLIENT                             |
+--------------+----------------------------------+--------------+
               | Read / Write Metadata            | Direct Block I/O
               v                                  v
+-------------------------------+  +-----------------------------+
|           NAMENODE            |  |          DATANODES          |
| - Namespace in RAM            |  | [Rack 1] Node 1 (B1, B2)    |
| - fsimage (Disk image)        |  | [Rack 1] Node 2 (B3)        |
| - edits log (Tx log)          |  | [Rack 2] Node 3 (B1, B3)    |
+---------------+---------------+  | [Rack 2] Node 4 (B2)        |
                ^ Checkpoint       +-----------------------------+
                |
+---------------+---------------+
|      SECONDARY NAMENODE       |
| - Periodically pulls edits    |
| - Merges with fsimage         |
| - Ships new fsimage to NN     |
+-------------------------------+
```
**Checkpointing Mechanism:**
1. Secondary NameNode asks NameNode to roll current `edits` log into `edits_inprogress_X`.
2. Secondary NameNode downloads `fsimage` and old `edits` via HTTP GET.
3. Secondary NameNode loads `fsimage` into its local memory, applies all changes from `edits`, and saves `fsimage.ckpt`.
4. Secondary NameNode pushes `fsimage.ckpt` back to the NameNode.
5. NameNode renames `fsimage.ckpt` to `fsimage`, preventing edits log from growing infinitely large and speeding up reboot time.

---

### Question 2: Trace the complete MapReduce Word Count execution for the following two lines of input across 2 Mappers and 2 Reducers:
- **Input Line 1:** `"dear bear river"`
- **Input Line 2:** `"dear car bear"`

**Solution:**
**Phase 1: Input Splits & Mapping**
- Mapper 1 receives Line 1:
  - Output: `(dear, 1), (bear, 1), (river, 1)`
- Mapper 2 receives Line 2:
  - Output: `(dear, 1), (car, 1), (bear, 1)`

**Phase 2: Partitioning, Shuffle & Sort**
- Assume Partitioner routes keys:
  - Reducer 1: Keys `bear`, `car`
  - Reducer 2: Keys `dear`, `river`
- Reducer 1 grouped input:
  - `(bear, [1, 1])`
  - `(car, [1])`
- Reducer 2 grouped input:
  - `(dear, [1, 1])`
  - `(river, [1])`

**Phase 3: Reduce Aggregation & Final Output**
- Reducer 1 outputs:
  - `bear 2`
  - `car 1`
- Reducer 2 outputs:
  - `dear 2`
  - `river 1`

---

### Question 3: Distinguish between RDD `reduceByKey` and `groupByKey` in Apache Spark. Why is `reduceByKey` significantly faster?
**Solution:**
- **`groupByKey()`:** Collects all values across the entire cluster for a key into an iterable list before reducing. Forces a massive shuffle of raw data pairs across network switches, easily causing out-of-memory errors.
- **`reduceByKey()`:** Automatically performs **Map-Side Combiner aggregation** on local executor memory before sending any bytes across the network. Only the partial accumulated scalar per key is sent over the network.
- *Performance Impact:* `reduceByKey` cuts network shuffle I/O by over 90% for repeated keys.
