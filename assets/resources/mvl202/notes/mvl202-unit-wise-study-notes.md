# MVL-202 VLSI Testing & Testability — Unit-wise Study Notes

> Fault models, test generation, fault simulation, design for testability, BIST and memory testing.

## Unit 1: Testing Fundamentals

### Need for Testing

Manufacturing defects must be screened.

- **Testing:** detecting manufacturing defects
- **Verification vs Testing:** design correctness versus physical defects
- **Test Cost:** significant share of chip cost

### Defects & Fault Models

Faults abstract physical defects.

- **Stuck-at Fault:** node fixed at 0 or 1
- **Bridging Fault:** short between nets
- **Transition Fault:** slow-to-rise or slow-to-fall

### Fault Equivalence & Collapsing

Reduce fault list.

- **Fault Equivalence:** faults with identical tests
- **Fault Dominance:** test for one detects another
- **Fault Collapsing:** removes redundant faults

### Yield & Quality

Test quality affects shipped quality.

- **Defect Level:** fraction of bad chips shipped
- **Fault Coverage:** detected faults / total faults
- **DPPM:** defective parts per million

## Unit 2: Test Generation

### Combinational ATPG

Algorithms generate tests.

- **D-algorithm:** uses D and D-bar notation
- **PODEM:** path-oriented decision making
- **FAN:** fanout-oriented test generation

### Fault Activation & Propagation

Tests excite and observe faults.

- **Fault Activation:** set node opposite to stuck value
- **Fault Propagation:** sensitise path to output
- **Justification:** set inputs to achieve values

### Sequential ATPG

Sequential circuits are harder.

- **Time-frame Expansion:** unrolls circuit over cycles
- **Initialisation:** bringing circuit to known state
- **Scan Converts:** sequential to combinational test problem

### Delay Testing

Timing defects need two-pattern tests.

- **Path Delay Fault:** path slower than specified
- **Launch-on-capture:** at-speed test method
- **Small Delay Defects:** subtle timing defects

## Unit 3: Fault Simulation

### Fault Simulation Purpose

Measures test effectiveness.

- **Fault Simulation:** determines faults detected by tests
- **Serial Fault Simulation:** one fault at a time
- **Fault Dropping:** remove detected faults

### Parallel & Deductive Simulation

Faster simulation techniques.

- **Parallel Fault Simulation:** bits represent faulty machines
- **Deductive Fault Simulation:** propagates fault lists
- **Concurrent Fault Simulation:** simulates differences only

### Test Compaction

Fewer patterns save time.

- **Static Compaction:** merges compatible patterns
- **Dynamic Compaction:** during generation
- **Test Data Volume:** storage required for patterns

### Diagnosis

Locating defects in failing chips.

- **Fault Diagnosis:** identifies likely fault locations
- **Failure Analysis:** physical inspection of defect
- **Volume Diagnosis:** statistics across many chips

## Unit 4: Design for Testability

### Testability Measures

Controllability and observability.

- **SCOAP:** testability measures
- **Controllability:** ease of setting a node
- **Observability:** ease of observing a node

### Scan Design

Scan chains make flip-flops accessible.

- **Scan Flip-flop:** mux selects functional or scan input
- **Scan Chain:** flip-flops linked as shift register
- **Scan Overhead:** area and timing cost

### Boundary Scan

Testing boards and I/O.

- **IEEE 1149.1:** JTAG boundary scan standard
- **TAP Controller:** 16-state test access port FSM
- **Boundary Scan Cell:** cell at each I/O pin

### Test Compression

Reducing test data.

- **Test Compression:** decompressor feeds many scan chains
- **EDT:** embedded deterministic test
- **X-masking:** handles unknown values

## Unit 5: BIST & Memory Testing

### Built-in Self-Test

On-chip test generation and checking.

- **BIST:** circuit tests itself
- **LFSR:** pseudo-random pattern generator
- **MISR:** multiple input signature register compactor

### Logic BIST

Random patterns test logic.

- **Pseudo-random Testing:** LFSR patterns
- **Test Points:** improve random-pattern testability
- **Aliasing:** faulty signature equals good signature

### Memory Fault Models

Memories have specific faults.

- **Coupling Fault:** one cell affects another
- **Address Decoder Fault:** wrong cell accessed
- **Retention Fault:** cell loses data over time

### Memory BIST & Repair

Testing and repairing memories.

- **March Test:** sequence of read/write operations, e.g. March C−
- **MBIST:** memory built-in self-test
- **Redundancy Repair:** spare rows and columns

## Standard Textbooks

- *Essentials of Electronic Testing* — Bushnell & Agrawal
- *VLSI Test Principles and Architectures* — Wang, Wu & Wen
- *Digital Systems Testing and Testable Design* — Abramovici, Breuer & Friedman

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
