# CS-404 Computer Organization & Architecture — Question Bank with Answer Hints

## Unit 1: Basic Computer Organisation

### Short answer (2-3 marks)

- **Q.** Define *Von Neumann Architecture*.  
  **Ans.** program and data share the same memory
- **Q.** Define *Stored Program Concept*.  
  **Ans.** instructions held in memory and fetched for execution
- **Q.** Define *System Bus*.  
  **Ans.** address, data and control lines connecting units
- **Q.** Define *Program Counter*.  
  **Ans.** holds address of the next instruction
- **Q.** Define *Register Transfer Language*.  
  **Ans.** notation such as R2 ← R1 for micro-operations
- **Q.** Define *Accumulator*.  
  **Ans.** register holding one operand and the ALU result
- **Q.** Define *Fetch Cycle*.  
  **Ans.** instruction read from memory into the instruction register
- **Q.** Define *Decode*.  
  **Ans.** control unit interprets the opcode
- **Q.** Define *Execute*.  
  **Ans.** operation performed and results stored
- **Q.** Define *Common Bus*.  
  **Ans.** shared path selected by multiplexers
- **Q.** Define *Bus Arbitration*.  
  **Ans.** deciding which master controls the bus
- **Q.** Define *Tri-state Buffer*.  
  **Ans.** gate with high-impedance state used on shared buses

### Long answer (7 marks)

- **Q.** Explain *Von Neumann Architecture & Functional Units* in detail with a neat diagram.  
  **Key points:** A computer has CPU, memory and I/O linked by buses. Von Neumann Architecture — program and data share the same memory; Stored Program Concept — instructions held in memory and fetched for execution; System Bus — address, data and control lines connecting units.
- **Q.** Explain *Registers & Register Transfer* in detail with a neat diagram.  
  **Key points:** Registers hold data inside the CPU and move via micro-operations. Program Counter — holds address of the next instruction; Register Transfer Language — notation such as R2 ← R1 for micro-operations; Accumulator — register holding one operand and the ALU result.
- **Q.** Explain *Instruction Cycle* in detail with a neat diagram.  
  **Key points:** Each instruction is fetched, decoded and executed. Fetch Cycle — instruction read from memory into the instruction register; Decode — control unit interprets the opcode; Execute — operation performed and results stored.
- **Q.** Explain *Bus Organisation* in detail with a neat diagram.  
  **Key points:** Shared buses connect registers and memory. Common Bus — shared path selected by multiplexers; Bus Arbitration — deciding which master controls the bus; Tri-state Buffer — gate with high-impedance state used on shared buses.

## Unit 2: Instruction Set & Control Unit

### Short answer (2-3 marks)

- **Q.** Define *Three-address Instruction*.  
  **Ans.** specifies two sources and a destination
- **Q.** Define *Zero-address Instruction*.  
  **Ans.** stack-based instruction with implicit operands
- **Q.** Define *Opcode*.  
  **Ans.** field specifying the operation
- **Q.** Define *Immediate Mode*.  
  **Ans.** operand is part of the instruction
- **Q.** Define *Indirect Mode*.  
  **Ans.** instruction holds address of the operand's address
- **Q.** Define *Indexed Mode*.  
  **Ans.** effective address = base + index register
- **Q.** Define *RISC*.  
  **Ans.** few simple fixed-length instructions; load-store design
- **Q.** Define *CISC*.  
  **Ans.** many complex variable-length instructions
- **Q.** Define *Load-Store Architecture*.  
  **Ans.** only load and store access memory
- **Q.** Define *Hardwired Control*.  
  **Ans.** control signals produced by fixed logic; fast
- **Q.** Define *Microprogrammed Control*.  
  **Ans.** signals stored as microinstructions in control memory
- **Q.** Define *Control Word*.  
  **Ans.** bit pattern specifying micro-operations for one step

### Long answer (7 marks)

- **Q.** Explain *Instruction Formats* in detail with a neat diagram.  
  **Key points:** Instructions encode an opcode and operand fields. Three-address Instruction — specifies two sources and a destination; Zero-address Instruction — stack-based instruction with implicit operands; Opcode — field specifying the operation.
- **Q.** Explain *Addressing Modes* in detail with a neat diagram.  
  **Key points:** Modes specify how the operand address is found. Immediate Mode — operand is part of the instruction; Indirect Mode — instruction holds address of the operand's address; Indexed Mode — effective address = base + index register.
- **Q.** Explain *RISC vs CISC* in detail with a neat diagram.  
  **Key points:** Two design philosophies for instruction sets. RISC — few simple fixed-length instructions; load-store design; CISC — many complex variable-length instructions; Load-Store Architecture — only load and store access memory.
- **Q.** Explain *Hardwired vs Microprogrammed Control* in detail with a neat diagram.  
  **Key points:** The control unit generates control signals. Hardwired Control — control signals produced by fixed logic; fast; Microprogrammed Control — signals stored as microinstructions in control memory; Control Word — bit pattern specifying micro-operations for one step.

## Unit 3: Computer Arithmetic

### Short answer (2-3 marks)

- **Q.** Define *Signed Magnitude*.  
  **Ans.** sign bit plus magnitude
- **Q.** Define *Overflow Detection*.  
  **Ans.** carry into and out of the sign bit differ
- **Q.** Define *Ripple Carry Adder*.  
  **Ans.** chain of full adders passing carry serially
- **Q.** Define *Booth's Algorithm*.  
  **Ans.** examines bit pairs Q0 and Q−1 to add, subtract or shift
- **Q.** Define *Arithmetic Shift Right*.  
  **Ans.** shift preserving the sign bit
- **Q.** Define *Bit-pair Recoding*.  
  **Ans.** modified Booth halving the number of partial products
- **Q.** Define *Restoring Division*.  
  **Ans.** restore remainder when subtraction gives a negative result
- **Q.** Define *Non-restoring Division*.  
  **Ans.** skip restore and add back in the next step
- **Q.** Define *Divide Overflow*.  
  **Ans.** quotient too large for the register
- **Q.** Define *IEEE 754 Single Precision*.  
  **Ans.** 1 sign, 8 exponent, 23 mantissa bits
- **Q.** Define *Biased Exponent*.  
  **Ans.** stored exponent plus bias, 127 for single precision
- **Q.** Define *Normalisation*.  
  **Ans.** shifting mantissa so the leading bit is 1

### Long answer (7 marks)

- **Q.** Explain *Addition & Subtraction of Signed Numbers* in detail with a neat diagram.  
  **Key points:** ALUs use 2's complement arithmetic. Signed Magnitude — sign bit plus magnitude; Overflow Detection — carry into and out of the sign bit differ; Ripple Carry Adder — chain of full adders passing carry serially.
- **Q.** Explain *Booth's Multiplication* in detail with a neat diagram.  
  **Key points:** Booth's algorithm multiplies signed numbers efficiently. Booth's Algorithm — examines bit pairs Q0 and Q−1 to add, subtract or shift; Arithmetic Shift Right — shift preserving the sign bit; Bit-pair Recoding — modified Booth halving the number of partial products.
- **Q.** Explain *Division Algorithms* in detail with a neat diagram.  
  **Key points:** Hardware division uses repeated subtraction and shifting. Restoring Division — restore remainder when subtraction gives a negative result; Non-restoring Division — skip restore and add back in the next step; Divide Overflow — quotient too large for the register.
- **Q.** Explain *Floating Point Representation* in detail with a neat diagram.  
  **Key points:** Real numbers are stored with sign, exponent and mantissa. IEEE 754 Single Precision — 1 sign, 8 exponent, 23 mantissa bits; Biased Exponent — stored exponent plus bias, 127 for single precision; Normalisation — shifting mantissa so the leading bit is 1.

## Unit 4: Memory Organisation

### Short answer (2-3 marks)

- **Q.** Define *Memory Hierarchy*.  
  **Ans.** registers, cache, main memory, secondary storage
- **Q.** Define *Locality of Reference*.  
  **Ans.** programs reuse recently used or nearby data
- **Q.** Define *Access Time*.  
  **Ans.** time to read or write a memory word
- **Q.** Define *Direct Mapping*.  
  **Ans.** each block maps to exactly one cache line
- **Q.** Define *Set-Associative Mapping*.  
  **Ans.** block maps to any line within a set
- **Q.** Define *Hit Ratio*.  
  **Ans.** hits divided by total memory accesses
- **Q.** Define *SRAM*.  
  **Ans.** static RAM using flip-flops; fast, used for cache
- **Q.** Define *DRAM*.  
  **Ans.** dynamic RAM using capacitors; needs refresh
- **Q.** Define *Associative Memory*.  
  **Ans.** searched by content rather than address
- **Q.** Define *Paging*.  
  **Ans.** memory divided into fixed-size pages and frames
- **Q.** Define *Page Fault*.  
  **Ans.** referenced page is not in main memory
- **Q.** Define *TLB*.  
  **Ans.** translation look-aside buffer caching page table entries

### Long answer (7 marks)

- **Q.** Explain *Memory Hierarchy* in detail with a neat diagram.  
  **Key points:** Faster memory is smaller and costlier per bit. Memory Hierarchy — registers, cache, main memory, secondary storage; Locality of Reference — programs reuse recently used or nearby data; Access Time — time to read or write a memory word.
- **Q.** Explain *Cache Memory & Mapping* in detail with a neat diagram.  
  **Key points:** Cache holds frequently used blocks close to the CPU. Direct Mapping — each block maps to exactly one cache line; Set-Associative Mapping — block maps to any line within a set; Hit Ratio — hits divided by total memory accesses.
- **Q.** Explain *Main Memory & Associative Memory* in detail with a neat diagram.  
  **Key points:** RAM types and content-addressable memory serve different needs. SRAM — static RAM using flip-flops; fast, used for cache; DRAM — dynamic RAM using capacitors; needs refresh; Associative Memory — searched by content rather than address.
- **Q.** Explain *Virtual Memory* in detail with a neat diagram.  
  **Key points:** Virtual memory gives programs an address space larger than RAM. Paging — memory divided into fixed-size pages and frames; Page Fault — referenced page is not in main memory; TLB — translation look-aside buffer caching page table entries.

## Unit 5: I/O Organisation & Parallel Processing

### Short answer (2-3 marks)

- **Q.** Define *Programmed I/O*.  
  **Ans.** CPU repeatedly polls device status
- **Q.** Define *Interrupt-driven I/O*.  
  **Ans.** device interrupts CPU when ready
- **Q.** Define *I/O Port*.  
  **Ans.** register through which the CPU exchanges data with a device
- **Q.** Define *DMA*.  
  **Ans.** direct memory access transfers blocks between device and memory
- **Q.** Define *Cycle Stealing*.  
  **Ans.** DMA takes the bus for one cycle at a time
- **Q.** Define *I/O Processor*.  
  **Ans.** dedicated processor handling I/O operations
- **Q.** Define *Instruction Pipeline*.  
  **Ans.** stages such as fetch, decode, execute and write-back overlap
- **Q.** Define *Pipeline Speedup*.  
  **Ans.** ideal speedup approaches the number of stages k
- **Q.** Define *Pipeline Hazard*.  
  **Ans.** structural, data or control conflict stalling the pipeline
- **Q.** Define *Flynn's Taxonomy*.  
  **Ans.** SISD, SIMD, MISD and MIMD classification
- **Q.** Define *Vector Processor*.  
  **Ans.** executes one instruction on arrays of data
- **Q.** Define *Cache Coherence*.  
  **Ans.** keeping copies of shared data consistent across caches

### Long answer (7 marks)

- **Q.** Explain *I/O Interface & Modes of Transfer* in detail with a neat diagram.  
  **Key points:** The CPU communicates with peripherals through interfaces. Programmed I/O — CPU repeatedly polls device status; Interrupt-driven I/O — device interrupts CPU when ready; I/O Port — register through which the CPU exchanges data with a device.
- **Q.** Explain *DMA & I/O Processors* in detail with a neat diagram.  
  **Key points:** Bulk transfers bypass the CPU. DMA — direct memory access transfers blocks between device and memory; Cycle Stealing — DMA takes the bus for one cycle at a time; I/O Processor — dedicated processor handling I/O operations.
- **Q.** Explain *Pipelining* in detail with a neat diagram.  
  **Key points:** Overlapping instruction stages increases throughput. Instruction Pipeline — stages such as fetch, decode, execute and write-back overlap; Pipeline Speedup — ideal speedup approaches the number of stages k; Pipeline Hazard — structural, data or control conflict stalling the pipeline.
- **Q.** Explain *Parallel Processing & Multiprocessors* in detail with a neat diagram.  
  **Key points:** Multiple processing units work concurrently. Flynn's Taxonomy — SISD, SIMD, MISD and MIMD classification; Vector Processor — executes one instruction on arrays of data; Cache Coherence — keeping copies of shared data consistent across caches.

