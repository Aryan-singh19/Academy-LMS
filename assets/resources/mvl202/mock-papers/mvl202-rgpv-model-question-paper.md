# MVL-202 VLSI Testing & Testability — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: M.Tech VLSI Sem 2: MVL-202.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Testing. Explain its role in Need for Testing with a suitable example or diagram. **[7]**

(b) Explain Defects & Fault Models in detail. Differentiate between Stuck-at Fault and Bridging Fault. **[7]**

**Q2.** *(Unit 2)*

(a) Define Fault Propagation. Explain its role in Fault Activation & Propagation with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Sequential ATPG. Bring out the significance of Time-frame Expansion and Initialisation. **[7]**

**Q3.** *(Unit 3)*

(a) Define Test Data Volume. Explain its role in Test Compaction with a suitable example or diagram. **[7]**

(b) Explain Diagnosis in detail. Differentiate between Fault Diagnosis and Failure Analysis. **[7]**

**Q4.** *(Unit 4)*

(a) Define Test Compression. Explain its role in Test Compression with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Testability Measures. Bring out the significance of SCOAP and Controllability. **[7]**

**Q5.** *(Unit 5)*

(a) Define LFSR. Explain its role in Built-in Self-Test with a suitable example or diagram. **[7]**

(b) Explain Logic BIST in detail. Differentiate between Pseudo-random Testing and Test Points. **[7]**

**Q6.** *(Unit 1)*

(a) Define DPPM. Explain its role in Yield & Quality with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Need for Testing. Bring out the significance of Testing and Verification vs Testing. **[7]**

**Q7.** *(Unit 3)*

(a) Define Fault Simulation. Explain its role in Fault Simulation Purpose with a suitable example or diagram. **[7]**

(b) Explain Parallel & Deductive Simulation in detail. Differentiate between Parallel Fault Simulation and Deductive Fault Simulation. **[7]**

**Q8.** *(Unit 5)*

(a) Define Test Points. Explain its role in Logic BIST with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Memory Fault Models. Bring out the significance of Coupling Fault and Address Decoder Fault. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Bridging Fault. Explain its role in Defects & Fault Models with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Fault Equivalence & Collapsing. Bring out the significance of Fault Equivalence and Fault Dominance. **[7]**

**Q2.** *(Unit 2)*

(a) Define Scan Converts. Explain its role in Sequential ATPG with a suitable example or diagram. **[7]**

(b) Explain Delay Testing in detail. Differentiate between Path Delay Fault and Launch-on-capture. **[7]**

**Q3.** *(Unit 3)*

(a) Define Fault Diagnosis. Explain its role in Diagnosis with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Fault Simulation Purpose. Bring out the significance of Fault Simulation and Serial Fault Simulation. **[7]**

**Q4.** *(Unit 4)*

(a) Define Controllability. Explain its role in Testability Measures with a suitable example or diagram. **[7]**

(b) Explain Scan Design in detail. Differentiate between Scan Flip-flop and Scan Chain. **[7]**

**Q5.** *(Unit 5)*

(a) Define Aliasing. Explain its role in Logic BIST with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Memory Fault Models. Bring out the significance of Coupling Fault and Address Decoder Fault. **[7]**

**Q6.** *(Unit 2)*

(a) Define D-algorithm. Explain its role in Combinational ATPG with a suitable example or diagram. **[7]**

(b) Explain Fault Activation & Propagation in detail. Differentiate between Fault Activation and Fault Propagation. **[7]**

**Q7.** *(Unit 4)*

(a) Define Scan Chain. Explain its role in Scan Design with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Boundary Scan. Bring out the significance of IEEE 1149.1 and TAP Controller. **[7]**

**Q8.** *(Unit 1)*

(a) Define Fault Collapsing. Explain its role in Fault Equivalence & Collapsing with a suitable example or diagram. **[7]**

(b) Explain Yield & Quality in detail. Differentiate between Defect Level and Fault Coverage. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Testing: detecting manufacturing defects
- **Q1(b):** Stuck-at Fault: node fixed at 0 or 1 | Bridging Fault: short between nets | Transition Fault: slow-to-rise or slow-to-fall
- **Q2(a):** Fault Propagation: sensitise path to output
- **Q2(b):** Time-frame Expansion: unrolls circuit over cycles | Initialisation: bringing circuit to known state | Scan Converts: sequential to combinational test problem
- **Q3(a):** Test Data Volume: storage required for patterns
- **Q3(b):** Fault Diagnosis: identifies likely fault locations | Failure Analysis: physical inspection of defect | Volume Diagnosis: statistics across many chips
- **Q4(a):** Test Compression: decompressor feeds many scan chains
- **Q4(b):** SCOAP: testability measures | Controllability: ease of setting a node | Observability: ease of observing a node
- **Q5(a):** LFSR: pseudo-random pattern generator
- **Q5(b):** Pseudo-random Testing: LFSR patterns | Test Points: improve random-pattern testability | Aliasing: faulty signature equals good signature
- **Q6(a):** DPPM: defective parts per million
- **Q6(b):** Testing: detecting manufacturing defects | Verification vs Testing: design correctness versus physical defects | Test Cost: significant share of chip cost
- **Q7(a):** Fault Simulation: determines faults detected by tests
- **Q7(b):** Parallel Fault Simulation: bits represent faulty machines | Deductive Fault Simulation: propagates fault lists | Concurrent Fault Simulation: simulates differences only
- **Q8(a):** Test Points: improve random-pattern testability
- **Q8(b):** Coupling Fault: one cell affects another | Address Decoder Fault: wrong cell accessed | Retention Fault: cell loses data over time

## Recommended Books

- *Essentials of Electronic Testing* — Bushnell & Agrawal
- *VLSI Test Principles and Architectures* — Wang, Wu & Wen
- *Digital Systems Testing and Testable Design* — Abramovici, Breuer & Friedman
