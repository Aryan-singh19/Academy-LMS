# MCSE-103 Advanced Computer Architecture — Unit-wise Study Notes

> Performance, instruction-level parallelism, memory hierarchy, multiprocessors, GPUs and domain-specific architectures.

## Unit 1: Fundamentals & Performance

### Performance Metrics

Architects quantify performance.

- **CPI:** cycles per instruction
- **Execution Time:** IC × CPI × clock period
- **Amdahl's Law:** speedup limited by serial fraction

### Instruction Set Design

ISAs balance simplicity and capability.

- **RISC-V:** open modular RISC instruction set
- **Load-Store Architecture:** only loads and stores access memory
- **Addressing Modes:** ways operands are located

### Power & Energy

Power limits modern designs.

- **Dynamic Power:** αCV²f
- **Dennard Scaling:** power density constant as transistors shrank
- **Dark Silicon:** portions of chip that must stay off

### Benchmarks

Benchmarks compare systems.

- **SPEC CPU:** standard CPU benchmark suite
- **Geometric Mean:** averages normalised benchmark results
- **Roofline Model:** performance bounded by compute or bandwidth

## Unit 2: Instruction-level Parallelism

### Pipelining & Hazards

Pipelines overlap instructions.

- **Data Hazard:** instruction depends on earlier result
- **Forwarding:** bypasses results to dependent instructions
- **Control Hazard:** branch outcome unknown

### Branch Prediction

Predictors reduce control stalls.

- **2-bit Predictor:** saturating counter per branch
- **Tournament Predictor:** chooses between local and global predictors
- **Branch Target Buffer:** caches branch targets

### Dynamic Scheduling

Out-of-order execution exploits ILP.

- **Tomasulo's Algorithm:** register renaming with reservation stations
- **Reorder Buffer:** commits instructions in order
- **Register Renaming:** removes false dependencies

### Superscalar & VLIW

Multiple issue increases throughput.

- **Superscalar:** issues several instructions per cycle dynamically
- **VLIW:** compiler packs parallel operations
- **Speculation:** executes before branch is resolved

## Unit 3: Memory Hierarchy

### Cache Design

Caches exploit locality.

- **AMAT:** hit time + miss rate × miss penalty
- **Three Cs:** compulsory, capacity and conflict misses
- **Write-back Cache:** writes memory only on eviction

### Advanced Cache Optimisations

Techniques reduce miss penalty.

- **Non-blocking Cache:** serves hits during misses
- **Prefetching:** fetches data before use
- **Victim Cache:** small cache for evicted lines

### Virtual Memory & TLB

Address translation must be fast.

- **TLB:** caches page table entries
- **Page Walk:** traversing page table on TLB miss
- **Virtually Indexed Physically Tagged Cache:** overlaps lookup and translation

### Memory Technologies

DRAM and new memories.

- **DRAM Row Buffer:** open row speeds access
- **HBM:** high bandwidth stacked memory
- **NVM:** non-volatile memory such as 3D XPoint

## Unit 4: Multiprocessors

### Thread-level Parallelism

Multiple cores run threads.

- **SMT:** simultaneous multithreading on one core
- **Chip Multiprocessor:** multiple cores on a chip
- **Shared Memory Multiprocessor:** cores share address space

### Cache Coherence

Copies of data must agree.

- **MESI Protocol:** modified, exclusive, shared, invalid states
- **Snooping Protocol:** caches monitor shared bus
- **Directory Protocol:** central directory tracks sharers

### Memory Consistency

Ordering rules for memory operations.

- **Sequential Consistency:** operations appear in program order
- **Relaxed Consistency:** allows reordering with fences
- **Memory Fence:** enforces ordering

### Interconnection Networks

Networks connect cores.

- **Mesh Network:** 2D grid of routers
- **Network on Chip:** packet-switched on-chip network
- **Bisection Bandwidth:** bandwidth across network cut

## Unit 5: Data-level Parallelism & Accelerators

### Vector & SIMD

One instruction operates on many data.

- **Vector Processor:** operates on vector registers
- **SIMD Extensions:** AVX and NEON instructions
- **Strip Mining:** splits loops into vector-length chunks

### GPU Architecture

GPUs run thousands of threads.

- **SIMT:** single instruction multiple threads
- **Warp:** group of 32 threads executing together
- **CUDA:** NVIDIA programming model for GPUs

### Domain-specific Architectures

Specialised hardware accelerates workloads.

- **TPU:** Google's tensor processing unit
- **Systolic Array:** grid of processing elements for matrix multiply
- **FPGA Accelerator:** reconfigurable hardware

### Warehouse-scale Computers

Data centres are computers.

- **Warehouse-scale Computer:** data centre treated as one machine
- **PUE:** power usage effectiveness
- **Tail Latency:** slowest responses dominate user experience

## Standard Textbooks

- *Computer Architecture: A Quantitative Approach* — Hennessy & Patterson
- *Advanced Computer Architecture* — Kai Hwang
- *Parallel Computer Architecture* — Culler & Singh

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
