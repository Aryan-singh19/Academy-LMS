# MCSE-103 Advanced Computer Architecture — Question Bank with Answer Hints

## Unit 1: Fundamentals & Performance

### Short answer (2-3 marks)

- **Q.** Define *CPI*.  
  **Ans.** cycles per instruction
- **Q.** Define *Execution Time*.  
  **Ans.** IC × CPI × clock period
- **Q.** Define *Amdahl's Law*.  
  **Ans.** speedup limited by serial fraction
- **Q.** Define *RISC-V*.  
  **Ans.** open modular RISC instruction set
- **Q.** Define *Load-Store Architecture*.  
  **Ans.** only loads and stores access memory
- **Q.** Define *Addressing Modes*.  
  **Ans.** ways operands are located
- **Q.** Define *Dynamic Power*.  
  **Ans.** αCV²f
- **Q.** Define *Dennard Scaling*.  
  **Ans.** power density constant as transistors shrank
- **Q.** Define *Dark Silicon*.  
  **Ans.** portions of chip that must stay off
- **Q.** Define *SPEC CPU*.  
  **Ans.** standard CPU benchmark suite
- **Q.** Define *Geometric Mean*.  
  **Ans.** averages normalised benchmark results
- **Q.** Define *Roofline Model*.  
  **Ans.** performance bounded by compute or bandwidth

### Long answer (7 marks)

- **Q.** Explain *Performance Metrics* in detail with a neat diagram.  
  **Key points:** Architects quantify performance. CPI — cycles per instruction; Execution Time — IC × CPI × clock period; Amdahl's Law — speedup limited by serial fraction.
- **Q.** Explain *Instruction Set Design* in detail with a neat diagram.  
  **Key points:** ISAs balance simplicity and capability. RISC-V — open modular RISC instruction set; Load-Store Architecture — only loads and stores access memory; Addressing Modes — ways operands are located.
- **Q.** Explain *Power & Energy* in detail with a neat diagram.  
  **Key points:** Power limits modern designs. Dynamic Power — αCV²f; Dennard Scaling — power density constant as transistors shrank; Dark Silicon — portions of chip that must stay off.
- **Q.** Explain *Benchmarks* in detail with a neat diagram.  
  **Key points:** Benchmarks compare systems. SPEC CPU — standard CPU benchmark suite; Geometric Mean — averages normalised benchmark results; Roofline Model — performance bounded by compute or bandwidth.

## Unit 2: Instruction-level Parallelism

### Short answer (2-3 marks)

- **Q.** Define *Data Hazard*.  
  **Ans.** instruction depends on earlier result
- **Q.** Define *Forwarding*.  
  **Ans.** bypasses results to dependent instructions
- **Q.** Define *Control Hazard*.  
  **Ans.** branch outcome unknown
- **Q.** Define *2-bit Predictor*.  
  **Ans.** saturating counter per branch
- **Q.** Define *Tournament Predictor*.  
  **Ans.** chooses between local and global predictors
- **Q.** Define *Branch Target Buffer*.  
  **Ans.** caches branch targets
- **Q.** Define *Tomasulo's Algorithm*.  
  **Ans.** register renaming with reservation stations
- **Q.** Define *Reorder Buffer*.  
  **Ans.** commits instructions in order
- **Q.** Define *Register Renaming*.  
  **Ans.** removes false dependencies
- **Q.** Define *Superscalar*.  
  **Ans.** issues several instructions per cycle dynamically
- **Q.** Define *VLIW*.  
  **Ans.** compiler packs parallel operations
- **Q.** Define *Speculation*.  
  **Ans.** executes before branch is resolved

### Long answer (7 marks)

- **Q.** Explain *Pipelining & Hazards* in detail with a neat diagram.  
  **Key points:** Pipelines overlap instructions. Data Hazard — instruction depends on earlier result; Forwarding — bypasses results to dependent instructions; Control Hazard — branch outcome unknown.
- **Q.** Explain *Branch Prediction* in detail with a neat diagram.  
  **Key points:** Predictors reduce control stalls. 2-bit Predictor — saturating counter per branch; Tournament Predictor — chooses between local and global predictors; Branch Target Buffer — caches branch targets.
- **Q.** Explain *Dynamic Scheduling* in detail with a neat diagram.  
  **Key points:** Out-of-order execution exploits ILP. Tomasulo's Algorithm — register renaming with reservation stations; Reorder Buffer — commits instructions in order; Register Renaming — removes false dependencies.
- **Q.** Explain *Superscalar & VLIW* in detail with a neat diagram.  
  **Key points:** Multiple issue increases throughput. Superscalar — issues several instructions per cycle dynamically; VLIW — compiler packs parallel operations; Speculation — executes before branch is resolved.

## Unit 3: Memory Hierarchy

### Short answer (2-3 marks)

- **Q.** Define *AMAT*.  
  **Ans.** hit time + miss rate × miss penalty
- **Q.** Define *Three Cs*.  
  **Ans.** compulsory, capacity and conflict misses
- **Q.** Define *Write-back Cache*.  
  **Ans.** writes memory only on eviction
- **Q.** Define *Non-blocking Cache*.  
  **Ans.** serves hits during misses
- **Q.** Define *Prefetching*.  
  **Ans.** fetches data before use
- **Q.** Define *Victim Cache*.  
  **Ans.** small cache for evicted lines
- **Q.** Define *TLB*.  
  **Ans.** caches page table entries
- **Q.** Define *Page Walk*.  
  **Ans.** traversing page table on TLB miss
- **Q.** Define *Virtually Indexed Physically Tagged Cache*.  
  **Ans.** overlaps lookup and translation
- **Q.** Define *DRAM Row Buffer*.  
  **Ans.** open row speeds access
- **Q.** Define *HBM*.  
  **Ans.** high bandwidth stacked memory
- **Q.** Define *NVM*.  
  **Ans.** non-volatile memory such as 3D XPoint

### Long answer (7 marks)

- **Q.** Explain *Cache Design* in detail with a neat diagram.  
  **Key points:** Caches exploit locality. AMAT — hit time + miss rate × miss penalty; Three Cs — compulsory, capacity and conflict misses; Write-back Cache — writes memory only on eviction.
- **Q.** Explain *Advanced Cache Optimisations* in detail with a neat diagram.  
  **Key points:** Techniques reduce miss penalty. Non-blocking Cache — serves hits during misses; Prefetching — fetches data before use; Victim Cache — small cache for evicted lines.
- **Q.** Explain *Virtual Memory & TLB* in detail with a neat diagram.  
  **Key points:** Address translation must be fast. TLB — caches page table entries; Page Walk — traversing page table on TLB miss; Virtually Indexed Physically Tagged Cache — overlaps lookup and translation.
- **Q.** Explain *Memory Technologies* in detail with a neat diagram.  
  **Key points:** DRAM and new memories. DRAM Row Buffer — open row speeds access; HBM — high bandwidth stacked memory; NVM — non-volatile memory such as 3D XPoint.

## Unit 4: Multiprocessors

### Short answer (2-3 marks)

- **Q.** Define *SMT*.  
  **Ans.** simultaneous multithreading on one core
- **Q.** Define *Chip Multiprocessor*.  
  **Ans.** multiple cores on a chip
- **Q.** Define *Shared Memory Multiprocessor*.  
  **Ans.** cores share address space
- **Q.** Define *MESI Protocol*.  
  **Ans.** modified, exclusive, shared, invalid states
- **Q.** Define *Snooping Protocol*.  
  **Ans.** caches monitor shared bus
- **Q.** Define *Directory Protocol*.  
  **Ans.** central directory tracks sharers
- **Q.** Define *Sequential Consistency*.  
  **Ans.** operations appear in program order
- **Q.** Define *Relaxed Consistency*.  
  **Ans.** allows reordering with fences
- **Q.** Define *Memory Fence*.  
  **Ans.** enforces ordering
- **Q.** Define *Mesh Network*.  
  **Ans.** 2D grid of routers
- **Q.** Define *Network on Chip*.  
  **Ans.** packet-switched on-chip network
- **Q.** Define *Bisection Bandwidth*.  
  **Ans.** bandwidth across network cut

### Long answer (7 marks)

- **Q.** Explain *Thread-level Parallelism* in detail with a neat diagram.  
  **Key points:** Multiple cores run threads. SMT — simultaneous multithreading on one core; Chip Multiprocessor — multiple cores on a chip; Shared Memory Multiprocessor — cores share address space.
- **Q.** Explain *Cache Coherence* in detail with a neat diagram.  
  **Key points:** Copies of data must agree. MESI Protocol — modified, exclusive, shared, invalid states; Snooping Protocol — caches monitor shared bus; Directory Protocol — central directory tracks sharers.
- **Q.** Explain *Memory Consistency* in detail with a neat diagram.  
  **Key points:** Ordering rules for memory operations. Sequential Consistency — operations appear in program order; Relaxed Consistency — allows reordering with fences; Memory Fence — enforces ordering.
- **Q.** Explain *Interconnection Networks* in detail with a neat diagram.  
  **Key points:** Networks connect cores. Mesh Network — 2D grid of routers; Network on Chip — packet-switched on-chip network; Bisection Bandwidth — bandwidth across network cut.

## Unit 5: Data-level Parallelism & Accelerators

### Short answer (2-3 marks)

- **Q.** Define *Vector Processor*.  
  **Ans.** operates on vector registers
- **Q.** Define *SIMD Extensions*.  
  **Ans.** AVX and NEON instructions
- **Q.** Define *Strip Mining*.  
  **Ans.** splits loops into vector-length chunks
- **Q.** Define *SIMT*.  
  **Ans.** single instruction multiple threads
- **Q.** Define *Warp*.  
  **Ans.** group of 32 threads executing together
- **Q.** Define *CUDA*.  
  **Ans.** NVIDIA programming model for GPUs
- **Q.** Define *TPU*.  
  **Ans.** Google's tensor processing unit
- **Q.** Define *Systolic Array*.  
  **Ans.** grid of processing elements for matrix multiply
- **Q.** Define *FPGA Accelerator*.  
  **Ans.** reconfigurable hardware
- **Q.** Define *Warehouse-scale Computer*.  
  **Ans.** data centre treated as one machine
- **Q.** Define *PUE*.  
  **Ans.** power usage effectiveness
- **Q.** Define *Tail Latency*.  
  **Ans.** slowest responses dominate user experience

### Long answer (7 marks)

- **Q.** Explain *Vector & SIMD* in detail with a neat diagram.  
  **Key points:** One instruction operates on many data. Vector Processor — operates on vector registers; SIMD Extensions — AVX and NEON instructions; Strip Mining — splits loops into vector-length chunks.
- **Q.** Explain *GPU Architecture* in detail with a neat diagram.  
  **Key points:** GPUs run thousands of threads. SIMT — single instruction multiple threads; Warp — group of 32 threads executing together; CUDA — NVIDIA programming model for GPUs.
- **Q.** Explain *Domain-specific Architectures* in detail with a neat diagram.  
  **Key points:** Specialised hardware accelerates workloads. TPU — Google's tensor processing unit; Systolic Array — grid of processing elements for matrix multiply; FPGA Accelerator — reconfigurable hardware.
- **Q.** Explain *Warehouse-scale Computers* in detail with a neat diagram.  
  **Key points:** Data centres are computers. Warehouse-scale Computer — data centre treated as one machine; PUE — power usage effectiveness; Tail Latency — slowest responses dominate user experience.

