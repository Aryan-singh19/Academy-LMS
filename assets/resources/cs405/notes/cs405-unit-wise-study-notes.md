# CS-405 Operating Systems — Unit-wise Study Notes

> Processes, CPU scheduling, synchronisation, deadlocks, memory management, file systems and disk scheduling.

## Unit 1: OS Introduction & Processes

### Operating System Functions & Types

An OS manages hardware and provides services to programs.

- **Operating System:** system software managing resources and providing services
- **Multiprogramming:** several jobs in memory to keep the CPU busy
- **Real-time OS:** guarantees response within strict deadlines

### System Calls & OS Structure

Programs request OS services through system calls.

- **System Call:** programmatic interface to request a kernel service
- **Monolithic Kernel:** all OS services run in kernel space
- **Microkernel:** minimal kernel with services in user space

### Process Concept & PCB

A process is a program in execution with its own state.

- **Process:** program in execution with code, data, stack and registers
- **PCB:** process control block storing state, registers and scheduling info
- **Process States:** new, ready, running, waiting and terminated

### Threads

Threads are lightweight units of execution within a process.

- **Thread:** smallest unit of CPU scheduling sharing its process's memory
- **User-level Thread:** managed by a library without kernel support
- **Context Switch:** saving one process's state and loading another's

## Unit 2: CPU Scheduling

### Scheduling Criteria

Schedulers are judged by utilisation and waiting metrics.

- **Turnaround Time:** completion time − arrival time
- **Waiting Time:** turnaround time − burst time
- **Throughput:** number of processes completed per unit time

### FCFS & SJF Scheduling

Simple policies order jobs by arrival or length.

- **FCFS:** first come first served; suffers convoy effect
- **SJF:** shortest job first; minimum average waiting time
- **SRTF:** preemptive SJF choosing the shortest remaining time

### Priority & Round Robin Scheduling

Policies balance importance and fairness.

- **Priority Scheduling:** CPU given to the highest-priority process
- **Aging:** gradually raising priority of waiting processes to prevent starvation
- **Round Robin:** each process gets a time quantum in cyclic order

### Multilevel Queue Scheduling

Processes are grouped into queues with different policies.

- **Multilevel Queue:** separate ready queues for process classes
- **Multilevel Feedback Queue:** processes move between queues based on behaviour
- **Dispatcher:** module giving CPU control to the selected process

## Unit 3: Process Synchronisation & Deadlocks

### Critical Section Problem

Concurrent access to shared data must be controlled.

- **Race Condition:** outcome depends on the order of concurrent execution
- **Critical Section:** code segment accessing shared resources
- **Mutual Exclusion:** only one process in its critical section at a time

### Semaphores & Classical Problems

Semaphores coordinate processes using wait and signal.

- **Semaphore:** integer variable accessed only by atomic wait and signal
- **Producer-Consumer Problem:** synchronising a shared bounded buffer
- **Dining Philosophers:** classic problem illustrating deadlock and starvation

### Deadlock Characterisation

Deadlock needs four conditions at once.

- **Deadlock:** processes wait forever for resources held by each other
- **Coffman Conditions:** mutual exclusion, hold and wait, no preemption, circular wait
- **Resource Allocation Graph:** graph of processes and resources showing requests and assignments

### Deadlock Avoidance, Detection & Recovery

Systems prevent, avoid or recover from deadlock.

- **Banker's Algorithm:** grants requests only if the system stays in a safe state
- **Safe State:** some order exists in which all processes can finish
- **Deadlock Recovery:** terminate processes or preempt resources

## Unit 4: Memory Management

### Contiguous Allocation & Fragmentation

Processes occupy single blocks of memory.

- **First Fit:** allocate the first hole that is big enough
- **External Fragmentation:** free memory scattered in small non-contiguous holes
- **Compaction:** shuffling memory to merge free space

### Paging & Segmentation

Non-contiguous allocation removes external fragmentation.

- **Paging:** logical memory split into pages mapped to frames
- **Segmentation:** memory divided by logical units such as code and stack
- **Internal Fragmentation:** unused space inside an allocated page

### Virtual Memory & Demand Paging

Pages load only when needed.

- **Demand Paging:** page brought in only on first reference
- **Effective Access Time:** (1 − p) × memory access + p × page fault time
- **Thrashing:** excessive paging that collapses CPU utilisation

### Page Replacement Algorithms

When memory is full a victim page is chosen.

- **FIFO Replacement:** replace the oldest page; can show Belady's anomaly
- **LRU Replacement:** replace the least recently used page
- **Optimal Replacement:** replace the page not used for the longest future time

## Unit 5: File Systems & Disk Management

### File Concepts & Access Methods

Files are named collections of related data.

- **Sequential Access:** records read in order
- **Direct Access:** records read at any position by block number
- **File Attributes:** name, type, size, location and protection

### Directory Structures & Allocation

Directories organise files; allocation maps blocks.

- **Tree-structured Directory:** hierarchical directories with paths
- **Indexed Allocation:** index block holds pointers to file blocks
- **Linked Allocation:** each block points to the next block

### Disk Scheduling

Scheduling orders requests to reduce head movement.

- **SSTF:** shortest seek time first
- **SCAN:** elevator algorithm moving end to end servicing requests
- **C-SCAN:** services in one direction and jumps back to the start

### Protection & Security

The OS controls access and defends against threats.

- **Access Matrix:** rows domains, columns objects, entries rights
- **Authentication:** verifying user identity, e.g. passwords
- **Trojan Horse:** program that misuses its environment while appearing useful

## Standard Textbooks

- *Operating System Concepts* — Silberschatz, Galvin & Gagne
- *Modern Operating Systems* — Andrew S. Tanenbaum
- *Operating Systems: Internals and Design Principles* — William Stallings

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
