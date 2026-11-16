# CS-404 Computer Organization & Architecture — Unit-wise Study Notes

> CPU organisation, instruction sets, control unit, arithmetic, memory hierarchy, I/O and pipelining.

## Unit 1: Basic Computer Organisation

### Von Neumann Architecture & Functional Units

A computer has CPU, memory and I/O linked by buses.

- **Von Neumann Architecture:** program and data share the same memory
- **Stored Program Concept:** instructions held in memory and fetched for execution
- **System Bus:** address, data and control lines connecting units

### Registers & Register Transfer

Registers hold data inside the CPU and move via micro-operations.

- **Program Counter:** holds address of the next instruction
- **Register Transfer Language:** notation such as R2 ← R1 for micro-operations
- **Accumulator:** register holding one operand and the ALU result

### Instruction Cycle

Each instruction is fetched, decoded and executed.

- **Fetch Cycle:** instruction read from memory into the instruction register
- **Decode:** control unit interprets the opcode
- **Execute:** operation performed and results stored

### Bus Organisation

Shared buses connect registers and memory.

- **Common Bus:** shared path selected by multiplexers
- **Bus Arbitration:** deciding which master controls the bus
- **Tri-state Buffer:** gate with high-impedance state used on shared buses

## Unit 2: Instruction Set & Control Unit

### Instruction Formats

Instructions encode an opcode and operand fields.

- **Three-address Instruction:** specifies two sources and a destination
- **Zero-address Instruction:** stack-based instruction with implicit operands
- **Opcode:** field specifying the operation

### Addressing Modes

Modes specify how the operand address is found.

- **Immediate Mode:** operand is part of the instruction
- **Indirect Mode:** instruction holds address of the operand's address
- **Indexed Mode:** effective address = base + index register

### RISC vs CISC

Two design philosophies for instruction sets.

- **RISC:** few simple fixed-length instructions; load-store design
- **CISC:** many complex variable-length instructions
- **Load-Store Architecture:** only load and store access memory

### Hardwired vs Microprogrammed Control

The control unit generates control signals.

- **Hardwired Control:** control signals produced by fixed logic; fast
- **Microprogrammed Control:** signals stored as microinstructions in control memory
- **Control Word:** bit pattern specifying micro-operations for one step

## Unit 3: Computer Arithmetic

### Addition & Subtraction of Signed Numbers

ALUs use 2's complement arithmetic.

- **Signed Magnitude:** sign bit plus magnitude
- **Overflow Detection:** carry into and out of the sign bit differ
- **Ripple Carry Adder:** chain of full adders passing carry serially

### Booth's Multiplication

Booth's algorithm multiplies signed numbers efficiently.

- **Booth's Algorithm:** examines bit pairs Q0 and Q−1 to add, subtract or shift
- **Arithmetic Shift Right:** shift preserving the sign bit
- **Bit-pair Recoding:** modified Booth halving the number of partial products

### Division Algorithms

Hardware division uses repeated subtraction and shifting.

- **Restoring Division:** restore remainder when subtraction gives a negative result
- **Non-restoring Division:** skip restore and add back in the next step
- **Divide Overflow:** quotient too large for the register

### Floating Point Representation

Real numbers are stored with sign, exponent and mantissa.

- **IEEE 754 Single Precision:** 1 sign, 8 exponent, 23 mantissa bits
- **Biased Exponent:** stored exponent plus bias, 127 for single precision
- **Normalisation:** shifting mantissa so the leading bit is 1

## Unit 4: Memory Organisation

### Memory Hierarchy

Faster memory is smaller and costlier per bit.

- **Memory Hierarchy:** registers, cache, main memory, secondary storage
- **Locality of Reference:** programs reuse recently used or nearby data
- **Access Time:** time to read or write a memory word

### Cache Memory & Mapping

Cache holds frequently used blocks close to the CPU.

- **Direct Mapping:** each block maps to exactly one cache line
- **Set-Associative Mapping:** block maps to any line within a set
- **Hit Ratio:** hits divided by total memory accesses

### Main Memory & Associative Memory

RAM types and content-addressable memory serve different needs.

- **SRAM:** static RAM using flip-flops; fast, used for cache
- **DRAM:** dynamic RAM using capacitors; needs refresh
- **Associative Memory:** searched by content rather than address

### Virtual Memory

Virtual memory gives programs an address space larger than RAM.

- **Paging:** memory divided into fixed-size pages and frames
- **Page Fault:** referenced page is not in main memory
- **TLB:** translation look-aside buffer caching page table entries

## Unit 5: I/O Organisation & Parallel Processing

### I/O Interface & Modes of Transfer

The CPU communicates with peripherals through interfaces.

- **Programmed I/O:** CPU repeatedly polls device status
- **Interrupt-driven I/O:** device interrupts CPU when ready
- **I/O Port:** register through which the CPU exchanges data with a device

### DMA & I/O Processors

Bulk transfers bypass the CPU.

- **DMA:** direct memory access transfers blocks between device and memory
- **Cycle Stealing:** DMA takes the bus for one cycle at a time
- **I/O Processor:** dedicated processor handling I/O operations

### Pipelining

Overlapping instruction stages increases throughput.

- **Instruction Pipeline:** stages such as fetch, decode, execute and write-back overlap
- **Pipeline Speedup:** ideal speedup approaches the number of stages k
- **Pipeline Hazard:** structural, data or control conflict stalling the pipeline

### Parallel Processing & Multiprocessors

Multiple processing units work concurrently.

- **Flynn's Taxonomy:** SISD, SIMD, MISD and MIMD classification
- **Vector Processor:** executes one instruction on arrays of data
- **Cache Coherence:** keeping copies of shared data consistent across caches

## Standard Textbooks

- *Computer System Architecture* — M. Morris Mano
- *Computer Organization and Architecture* — William Stallings
- *Computer Organization* — Hamacher, Vranesic & Zaky

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
