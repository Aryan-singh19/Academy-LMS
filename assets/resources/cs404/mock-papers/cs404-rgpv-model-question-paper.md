# CS-404 Computer Organization & Architecture — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: CSE Sem 4: CS-404 · IT Sem 4: CSIT-404.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Von Neumann Architecture. Explain its role in Von Neumann Architecture & Functional Units with a suitable example or diagram. **[7]**

(b) Explain Registers & Register Transfer in detail. Differentiate between Program Counter and Register Transfer Language. **[7]**

**Q2.** *(Unit 2)*

(a) Define Indirect Mode. Explain its role in Addressing Modes with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss RISC vs CISC. Bring out the significance of RISC and CISC. **[7]**

**Q3.** *(Unit 3)*

(a) Define Divide Overflow. Explain its role in Division Algorithms with a suitable example or diagram. **[7]**

(b) Explain Floating Point Representation in detail. Differentiate between IEEE 754 Single Precision and Biased Exponent. **[7]**

**Q4.** *(Unit 4)*

(a) Define Paging. Explain its role in Virtual Memory with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Memory Hierarchy. Bring out the significance of Memory Hierarchy and Locality of Reference. **[7]**

**Q5.** *(Unit 5)*

(a) Define Interrupt-driven I/O. Explain its role in I/O Interface & Modes of Transfer with a suitable example or diagram. **[7]**

(b) Explain DMA & I/O Processors in detail. Differentiate between DMA and Cycle Stealing. **[7]**

**Q6.** *(Unit 1)*

(a) Define Tri-state Buffer. Explain its role in Bus Organisation with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Von Neumann Architecture & Functional Units. Bring out the significance of Von Neumann Architecture and Stored Program Concept. **[7]**

**Q7.** *(Unit 3)*

(a) Define Signed Magnitude. Explain its role in Addition & Subtraction of Signed Numbers with a suitable example or diagram. **[7]**

(b) Explain Booth's Multiplication in detail. Differentiate between Booth's Algorithm and Arithmetic Shift Right. **[7]**

**Q8.** *(Unit 5)*

(a) Define Cycle Stealing. Explain its role in DMA & I/O Processors with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Pipelining. Bring out the significance of Instruction Pipeline and Pipeline Speedup. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Register Transfer Language. Explain its role in Registers & Register Transfer with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Instruction Cycle. Bring out the significance of Fetch Cycle and Decode. **[7]**

**Q2.** *(Unit 2)*

(a) Define Load-Store Architecture. Explain its role in RISC vs CISC with a suitable example or diagram. **[7]**

(b) Explain Hardwired vs Microprogrammed Control in detail. Differentiate between Hardwired Control and Microprogrammed Control. **[7]**

**Q3.** *(Unit 3)*

(a) Define IEEE 754 Single Precision. Explain its role in Floating Point Representation with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Addition & Subtraction of Signed Numbers. Bring out the significance of Signed Magnitude and Overflow Detection. **[7]**

**Q4.** *(Unit 4)*

(a) Define Locality of Reference. Explain its role in Memory Hierarchy with a suitable example or diagram. **[7]**

(b) Explain Cache Memory & Mapping in detail. Differentiate between Direct Mapping and Set-Associative Mapping. **[7]**

**Q5.** *(Unit 5)*

(a) Define I/O Processor. Explain its role in DMA & I/O Processors with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Pipelining. Bring out the significance of Instruction Pipeline and Pipeline Speedup. **[7]**

**Q6.** *(Unit 2)*

(a) Define Three-address Instruction. Explain its role in Instruction Formats with a suitable example or diagram. **[7]**

(b) Explain Addressing Modes in detail. Differentiate between Immediate Mode and Indirect Mode. **[7]**

**Q7.** *(Unit 4)*

(a) Define Set-Associative Mapping. Explain its role in Cache Memory & Mapping with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Main Memory & Associative Memory. Bring out the significance of SRAM and DRAM. **[7]**

**Q8.** *(Unit 1)*

(a) Define Execute. Explain its role in Instruction Cycle with a suitable example or diagram. **[7]**

(b) Explain Bus Organisation in detail. Differentiate between Common Bus and Bus Arbitration. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Von Neumann Architecture: program and data share the same memory
- **Q1(b):** Program Counter: holds address of the next instruction | Register Transfer Language: notation such as R2 ← R1 for micro-operations | Accumulator: register holding one operand and the ALU result
- **Q2(a):** Indirect Mode: instruction holds address of the operand's address
- **Q2(b):** RISC: few simple fixed-length instructions; load-store design | CISC: many complex variable-length instructions | Load-Store Architecture: only load and store access memory
- **Q3(a):** Divide Overflow: quotient too large for the register
- **Q3(b):** IEEE 754 Single Precision: 1 sign, 8 exponent, 23 mantissa bits | Biased Exponent: stored exponent plus bias, 127 for single precision | Normalisation: shifting mantissa so the leading bit is 1
- **Q4(a):** Paging: memory divided into fixed-size pages and frames
- **Q4(b):** Memory Hierarchy: registers, cache, main memory, secondary storage | Locality of Reference: programs reuse recently used or nearby data | Access Time: time to read or write a memory word
- **Q5(a):** Interrupt-driven I/O: device interrupts CPU when ready
- **Q5(b):** DMA: direct memory access transfers blocks between device and memory | Cycle Stealing: DMA takes the bus for one cycle at a time | I/O Processor: dedicated processor handling I/O operations
- **Q6(a):** Tri-state Buffer: gate with high-impedance state used on shared buses
- **Q6(b):** Von Neumann Architecture: program and data share the same memory | Stored Program Concept: instructions held in memory and fetched for execution | System Bus: address, data and control lines connecting units
- **Q7(a):** Signed Magnitude: sign bit plus magnitude
- **Q7(b):** Booth's Algorithm: examines bit pairs Q0 and Q−1 to add, subtract or shift | Arithmetic Shift Right: shift preserving the sign bit | Bit-pair Recoding: modified Booth halving the number of partial products
- **Q8(a):** Cycle Stealing: DMA takes the bus for one cycle at a time
- **Q8(b):** Instruction Pipeline: stages such as fetch, decode, execute and write-back overlap | Pipeline Speedup: ideal speedup approaches the number of stages k | Pipeline Hazard: structural, data or control conflict stalling the pipeline

## Recommended Books

- *Computer System Architecture* — M. Morris Mano
- *Computer Organization and Architecture* — William Stallings
- *Computer Organization* — Hamacher, Vranesic & Zaky
