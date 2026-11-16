# MCSE-103 Advanced Computer Architecture — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: M.Tech CSE Sem 1: MCSE-103.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define CPI. Explain its role in Performance Metrics with a suitable example or diagram. **[7]**

(b) Explain Instruction Set Design in detail. Differentiate between RISC-V and Load-Store Architecture. **[7]**

**Q2.** *(Unit 2)*

(a) Define Tournament Predictor. Explain its role in Branch Prediction with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Dynamic Scheduling. Bring out the significance of Tomasulo's Algorithm and Reorder Buffer. **[7]**

**Q3.** *(Unit 3)*

(a) Define Virtually Indexed Physically Tagged Cache. Explain its role in Virtual Memory & TLB with a suitable example or diagram. **[7]**

(b) Explain Memory Technologies in detail. Differentiate between DRAM Row Buffer and HBM. **[7]**

**Q4.** *(Unit 4)*

(a) Define Mesh Network. Explain its role in Interconnection Networks with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Thread-level Parallelism. Bring out the significance of SMT and Chip Multiprocessor. **[7]**

**Q5.** *(Unit 5)*

(a) Define SIMD Extensions. Explain its role in Vector & SIMD with a suitable example or diagram. **[7]**

(b) Explain GPU Architecture in detail. Differentiate between SIMT and Warp. **[7]**

**Q6.** *(Unit 1)*

(a) Define Roofline Model. Explain its role in Benchmarks with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Performance Metrics. Bring out the significance of CPI and Execution Time. **[7]**

**Q7.** *(Unit 3)*

(a) Define AMAT. Explain its role in Cache Design with a suitable example or diagram. **[7]**

(b) Explain Advanced Cache Optimisations in detail. Differentiate between Non-blocking Cache and Prefetching. **[7]**

**Q8.** *(Unit 5)*

(a) Define Warp. Explain its role in GPU Architecture with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Domain-specific Architectures. Bring out the significance of TPU and Systolic Array. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Load-Store Architecture. Explain its role in Instruction Set Design with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Power & Energy. Bring out the significance of Dynamic Power and Dennard Scaling. **[7]**

**Q2.** *(Unit 2)*

(a) Define Register Renaming. Explain its role in Dynamic Scheduling with a suitable example or diagram. **[7]**

(b) Explain Superscalar & VLIW in detail. Differentiate between Superscalar and VLIW. **[7]**

**Q3.** *(Unit 3)*

(a) Define DRAM Row Buffer. Explain its role in Memory Technologies with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Cache Design. Bring out the significance of AMAT and Three Cs. **[7]**

**Q4.** *(Unit 4)*

(a) Define Chip Multiprocessor. Explain its role in Thread-level Parallelism with a suitable example or diagram. **[7]**

(b) Explain Cache Coherence in detail. Differentiate between MESI Protocol and Snooping Protocol. **[7]**

**Q5.** *(Unit 5)*

(a) Define CUDA. Explain its role in GPU Architecture with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Domain-specific Architectures. Bring out the significance of TPU and Systolic Array. **[7]**

**Q6.** *(Unit 2)*

(a) Define Data Hazard. Explain its role in Pipelining & Hazards with a suitable example or diagram. **[7]**

(b) Explain Branch Prediction in detail. Differentiate between 2-bit Predictor and Tournament Predictor. **[7]**

**Q7.** *(Unit 4)*

(a) Define Snooping Protocol. Explain its role in Cache Coherence with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Memory Consistency. Bring out the significance of Sequential Consistency and Relaxed Consistency. **[7]**

**Q8.** *(Unit 1)*

(a) Define Dark Silicon. Explain its role in Power & Energy with a suitable example or diagram. **[7]**

(b) Explain Benchmarks in detail. Differentiate between SPEC CPU and Geometric Mean. **[7]**

## Answer Hints (Set A)

- **Q1(a):** CPI: cycles per instruction
- **Q1(b):** RISC-V: open modular RISC instruction set | Load-Store Architecture: only loads and stores access memory | Addressing Modes: ways operands are located
- **Q2(a):** Tournament Predictor: chooses between local and global predictors
- **Q2(b):** Tomasulo's Algorithm: register renaming with reservation stations | Reorder Buffer: commits instructions in order | Register Renaming: removes false dependencies
- **Q3(a):** Virtually Indexed Physically Tagged Cache: overlaps lookup and translation
- **Q3(b):** DRAM Row Buffer: open row speeds access | HBM: high bandwidth stacked memory | NVM: non-volatile memory such as 3D XPoint
- **Q4(a):** Mesh Network: 2D grid of routers
- **Q4(b):** SMT: simultaneous multithreading on one core | Chip Multiprocessor: multiple cores on a chip | Shared Memory Multiprocessor: cores share address space
- **Q5(a):** SIMD Extensions: AVX and NEON instructions
- **Q5(b):** SIMT: single instruction multiple threads | Warp: group of 32 threads executing together | CUDA: NVIDIA programming model for GPUs
- **Q6(a):** Roofline Model: performance bounded by compute or bandwidth
- **Q6(b):** CPI: cycles per instruction | Execution Time: IC × CPI × clock period | Amdahl's Law: speedup limited by serial fraction
- **Q7(a):** AMAT: hit time + miss rate × miss penalty
- **Q7(b):** Non-blocking Cache: serves hits during misses | Prefetching: fetches data before use | Victim Cache: small cache for evicted lines
- **Q8(a):** Warp: group of 32 threads executing together
- **Q8(b):** TPU: Google's tensor processing unit | Systolic Array: grid of processing elements for matrix multiply | FPGA Accelerator: reconfigurable hardware

## Recommended Books

- *Computer Architecture: A Quantitative Approach* — Hennessy & Patterson
- *Advanced Computer Architecture* — Kai Hwang
- *Parallel Computer Architecture* — Culler & Singh
