# CS-405 Operating Systems — Question Bank with Answer Hints

## Unit 1: OS Introduction & Processes

### Short answer (2-3 marks)

- **Q.** Define *Operating System*.  
  **Ans.** system software managing resources and providing services
- **Q.** Define *Multiprogramming*.  
  **Ans.** several jobs in memory to keep the CPU busy
- **Q.** Define *Real-time OS*.  
  **Ans.** guarantees response within strict deadlines
- **Q.** Define *System Call*.  
  **Ans.** programmatic interface to request a kernel service
- **Q.** Define *Monolithic Kernel*.  
  **Ans.** all OS services run in kernel space
- **Q.** Define *Microkernel*.  
  **Ans.** minimal kernel with services in user space
- **Q.** Define *Process*.  
  **Ans.** program in execution with code, data, stack and registers
- **Q.** Define *PCB*.  
  **Ans.** process control block storing state, registers and scheduling info
- **Q.** Define *Process States*.  
  **Ans.** new, ready, running, waiting and terminated
- **Q.** Define *Thread*.  
  **Ans.** smallest unit of CPU scheduling sharing its process's memory
- **Q.** Define *User-level Thread*.  
  **Ans.** managed by a library without kernel support
- **Q.** Define *Context Switch*.  
  **Ans.** saving one process's state and loading another's

### Long answer (7 marks)

- **Q.** Explain *Operating System Functions & Types* in detail with a neat diagram.  
  **Key points:** An OS manages hardware and provides services to programs. Operating System — system software managing resources and providing services; Multiprogramming — several jobs in memory to keep the CPU busy; Real-time OS — guarantees response within strict deadlines.
- **Q.** Explain *System Calls & OS Structure* in detail with a neat diagram.  
  **Key points:** Programs request OS services through system calls. System Call — programmatic interface to request a kernel service; Monolithic Kernel — all OS services run in kernel space; Microkernel — minimal kernel with services in user space.
- **Q.** Explain *Process Concept & PCB* in detail with a neat diagram.  
  **Key points:** A process is a program in execution with its own state. Process — program in execution with code, data, stack and registers; PCB — process control block storing state, registers and scheduling info; Process States — new, ready, running, waiting and terminated.
- **Q.** Explain *Threads* in detail with a neat diagram.  
  **Key points:** Threads are lightweight units of execution within a process. Thread — smallest unit of CPU scheduling sharing its process's memory; User-level Thread — managed by a library without kernel support; Context Switch — saving one process's state and loading another's.

## Unit 2: CPU Scheduling

### Short answer (2-3 marks)

- **Q.** Define *Turnaround Time*.  
  **Ans.** completion time − arrival time
- **Q.** Define *Waiting Time*.  
  **Ans.** turnaround time − burst time
- **Q.** Define *Throughput*.  
  **Ans.** number of processes completed per unit time
- **Q.** Define *FCFS*.  
  **Ans.** first come first served; suffers convoy effect
- **Q.** Define *SJF*.  
  **Ans.** shortest job first; minimum average waiting time
- **Q.** Define *SRTF*.  
  **Ans.** preemptive SJF choosing the shortest remaining time
- **Q.** Define *Priority Scheduling*.  
  **Ans.** CPU given to the highest-priority process
- **Q.** Define *Aging*.  
  **Ans.** gradually raising priority of waiting processes to prevent starvation
- **Q.** Define *Round Robin*.  
  **Ans.** each process gets a time quantum in cyclic order
- **Q.** Define *Multilevel Queue*.  
  **Ans.** separate ready queues for process classes
- **Q.** Define *Multilevel Feedback Queue*.  
  **Ans.** processes move between queues based on behaviour
- **Q.** Define *Dispatcher*.  
  **Ans.** module giving CPU control to the selected process

### Long answer (7 marks)

- **Q.** Explain *Scheduling Criteria* in detail with a neat diagram.  
  **Key points:** Schedulers are judged by utilisation and waiting metrics. Turnaround Time — completion time − arrival time; Waiting Time — turnaround time − burst time; Throughput — number of processes completed per unit time.
- **Q.** Explain *FCFS & SJF Scheduling* in detail with a neat diagram.  
  **Key points:** Simple policies order jobs by arrival or length. FCFS — first come first served; suffers convoy effect; SJF — shortest job first; minimum average waiting time; SRTF — preemptive SJF choosing the shortest remaining time.
- **Q.** Explain *Priority & Round Robin Scheduling* in detail with a neat diagram.  
  **Key points:** Policies balance importance and fairness. Priority Scheduling — CPU given to the highest-priority process; Aging — gradually raising priority of waiting processes to prevent starvation; Round Robin — each process gets a time quantum in cyclic order.
- **Q.** Explain *Multilevel Queue Scheduling* in detail with a neat diagram.  
  **Key points:** Processes are grouped into queues with different policies. Multilevel Queue — separate ready queues for process classes; Multilevel Feedback Queue — processes move between queues based on behaviour; Dispatcher — module giving CPU control to the selected process.

## Unit 3: Process Synchronisation & Deadlocks

### Short answer (2-3 marks)

- **Q.** Define *Race Condition*.  
  **Ans.** outcome depends on the order of concurrent execution
- **Q.** Define *Critical Section*.  
  **Ans.** code segment accessing shared resources
- **Q.** Define *Mutual Exclusion*.  
  **Ans.** only one process in its critical section at a time
- **Q.** Define *Semaphore*.  
  **Ans.** integer variable accessed only by atomic wait and signal
- **Q.** Define *Producer-Consumer Problem*.  
  **Ans.** synchronising a shared bounded buffer
- **Q.** Define *Dining Philosophers*.  
  **Ans.** classic problem illustrating deadlock and starvation
- **Q.** Define *Deadlock*.  
  **Ans.** processes wait forever for resources held by each other
- **Q.** Define *Coffman Conditions*.  
  **Ans.** mutual exclusion, hold and wait, no preemption, circular wait
- **Q.** Define *Resource Allocation Graph*.  
  **Ans.** graph of processes and resources showing requests and assignments
- **Q.** Define *Banker's Algorithm*.  
  **Ans.** grants requests only if the system stays in a safe state
- **Q.** Define *Safe State*.  
  **Ans.** some order exists in which all processes can finish
- **Q.** Define *Deadlock Recovery*.  
  **Ans.** terminate processes or preempt resources

### Long answer (7 marks)

- **Q.** Explain *Critical Section Problem* in detail with a neat diagram.  
  **Key points:** Concurrent access to shared data must be controlled. Race Condition — outcome depends on the order of concurrent execution; Critical Section — code segment accessing shared resources; Mutual Exclusion — only one process in its critical section at a time.
- **Q.** Explain *Semaphores & Classical Problems* in detail with a neat diagram.  
  **Key points:** Semaphores coordinate processes using wait and signal. Semaphore — integer variable accessed only by atomic wait and signal; Producer-Consumer Problem — synchronising a shared bounded buffer; Dining Philosophers — classic problem illustrating deadlock and starvation.
- **Q.** Explain *Deadlock Characterisation* in detail with a neat diagram.  
  **Key points:** Deadlock needs four conditions at once. Deadlock — processes wait forever for resources held by each other; Coffman Conditions — mutual exclusion, hold and wait, no preemption, circular wait; Resource Allocation Graph — graph of processes and resources showing requests and assignments.
- **Q.** Explain *Deadlock Avoidance, Detection & Recovery* in detail with a neat diagram.  
  **Key points:** Systems prevent, avoid or recover from deadlock. Banker's Algorithm — grants requests only if the system stays in a safe state; Safe State — some order exists in which all processes can finish; Deadlock Recovery — terminate processes or preempt resources.

## Unit 4: Memory Management

### Short answer (2-3 marks)

- **Q.** Define *First Fit*.  
  **Ans.** allocate the first hole that is big enough
- **Q.** Define *External Fragmentation*.  
  **Ans.** free memory scattered in small non-contiguous holes
- **Q.** Define *Compaction*.  
  **Ans.** shuffling memory to merge free space
- **Q.** Define *Paging*.  
  **Ans.** logical memory split into pages mapped to frames
- **Q.** Define *Segmentation*.  
  **Ans.** memory divided by logical units such as code and stack
- **Q.** Define *Internal Fragmentation*.  
  **Ans.** unused space inside an allocated page
- **Q.** Define *Demand Paging*.  
  **Ans.** page brought in only on first reference
- **Q.** Define *Effective Access Time*.  
  **Ans.** (1 − p) × memory access + p × page fault time
- **Q.** Define *Thrashing*.  
  **Ans.** excessive paging that collapses CPU utilisation
- **Q.** Define *FIFO Replacement*.  
  **Ans.** replace the oldest page; can show Belady's anomaly
- **Q.** Define *LRU Replacement*.  
  **Ans.** replace the least recently used page
- **Q.** Define *Optimal Replacement*.  
  **Ans.** replace the page not used for the longest future time

### Long answer (7 marks)

- **Q.** Explain *Contiguous Allocation & Fragmentation* in detail with a neat diagram.  
  **Key points:** Processes occupy single blocks of memory. First Fit — allocate the first hole that is big enough; External Fragmentation — free memory scattered in small non-contiguous holes; Compaction — shuffling memory to merge free space.
- **Q.** Explain *Paging & Segmentation* in detail with a neat diagram.  
  **Key points:** Non-contiguous allocation removes external fragmentation. Paging — logical memory split into pages mapped to frames; Segmentation — memory divided by logical units such as code and stack; Internal Fragmentation — unused space inside an allocated page.
- **Q.** Explain *Virtual Memory & Demand Paging* in detail with a neat diagram.  
  **Key points:** Pages load only when needed. Demand Paging — page brought in only on first reference; Effective Access Time — (1 − p) × memory access + p × page fault time; Thrashing — excessive paging that collapses CPU utilisation.
- **Q.** Explain *Page Replacement Algorithms* in detail with a neat diagram.  
  **Key points:** When memory is full a victim page is chosen. FIFO Replacement — replace the oldest page; can show Belady's anomaly; LRU Replacement — replace the least recently used page; Optimal Replacement — replace the page not used for the longest future time.

## Unit 5: File Systems & Disk Management

### Short answer (2-3 marks)

- **Q.** Define *Sequential Access*.  
  **Ans.** records read in order
- **Q.** Define *Direct Access*.  
  **Ans.** records read at any position by block number
- **Q.** Define *File Attributes*.  
  **Ans.** name, type, size, location and protection
- **Q.** Define *Tree-structured Directory*.  
  **Ans.** hierarchical directories with paths
- **Q.** Define *Indexed Allocation*.  
  **Ans.** index block holds pointers to file blocks
- **Q.** Define *Linked Allocation*.  
  **Ans.** each block points to the next block
- **Q.** Define *SSTF*.  
  **Ans.** shortest seek time first
- **Q.** Define *SCAN*.  
  **Ans.** elevator algorithm moving end to end servicing requests
- **Q.** Define *C-SCAN*.  
  **Ans.** services in one direction and jumps back to the start
- **Q.** Define *Access Matrix*.  
  **Ans.** rows domains, columns objects, entries rights
- **Q.** Define *Authentication*.  
  **Ans.** verifying user identity, e.g. passwords
- **Q.** Define *Trojan Horse*.  
  **Ans.** program that misuses its environment while appearing useful

### Long answer (7 marks)

- **Q.** Explain *File Concepts & Access Methods* in detail with a neat diagram.  
  **Key points:** Files are named collections of related data. Sequential Access — records read in order; Direct Access — records read at any position by block number; File Attributes — name, type, size, location and protection.
- **Q.** Explain *Directory Structures & Allocation* in detail with a neat diagram.  
  **Key points:** Directories organise files; allocation maps blocks. Tree-structured Directory — hierarchical directories with paths; Indexed Allocation — index block holds pointers to file blocks; Linked Allocation — each block points to the next block.
- **Q.** Explain *Disk Scheduling* in detail with a neat diagram.  
  **Key points:** Scheduling orders requests to reduce head movement. SSTF — shortest seek time first; SCAN — elevator algorithm moving end to end servicing requests; C-SCAN — services in one direction and jumps back to the start.
- **Q.** Explain *Protection & Security* in detail with a neat diagram.  
  **Key points:** The OS controls access and defends against threats. Access Matrix — rows domains, columns objects, entries rights; Authentication — verifying user identity, e.g. passwords; Trojan Horse — program that misuses its environment while appearing useful.

