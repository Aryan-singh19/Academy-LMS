# CS-405 Operating Systems — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: CSE Sem 4: CS-405 · IT Sem 5: CSIT-502.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Operating System. Explain its role in Operating System Functions & Types with a suitable example or diagram. **[7]**

(b) Explain System Calls & OS Structure in detail. Differentiate between System Call and Monolithic Kernel. **[7]**

**Q2.** *(Unit 2)*

(a) Define SJF. Explain its role in FCFS & SJF Scheduling with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Priority & Round Robin Scheduling. Bring out the significance of Priority Scheduling and Aging. **[7]**

**Q3.** *(Unit 3)*

(a) Define Resource Allocation Graph. Explain its role in Deadlock Characterisation with a suitable example or diagram. **[7]**

(b) Explain Deadlock Avoidance, Detection & Recovery in detail. Differentiate between Banker's Algorithm and Safe State. **[7]**

**Q4.** *(Unit 4)*

(a) Define FIFO Replacement. Explain its role in Page Replacement Algorithms with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Contiguous Allocation & Fragmentation. Bring out the significance of First Fit and External Fragmentation. **[7]**

**Q5.** *(Unit 5)*

(a) Define Direct Access. Explain its role in File Concepts & Access Methods with a suitable example or diagram. **[7]**

(b) Explain Directory Structures & Allocation in detail. Differentiate between Tree-structured Directory and Indexed Allocation. **[7]**

**Q6.** *(Unit 1)*

(a) Define Context Switch. Explain its role in Threads with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Operating System Functions & Types. Bring out the significance of Operating System and Multiprogramming. **[7]**

**Q7.** *(Unit 3)*

(a) Define Race Condition. Explain its role in Critical Section Problem with a suitable example or diagram. **[7]**

(b) Explain Semaphores & Classical Problems in detail. Differentiate between Semaphore and Producer-Consumer Problem. **[7]**

**Q8.** *(Unit 5)*

(a) Define Indexed Allocation. Explain its role in Directory Structures & Allocation with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Disk Scheduling. Bring out the significance of SSTF and SCAN. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Monolithic Kernel. Explain its role in System Calls & OS Structure with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Process Concept & PCB. Bring out the significance of Process and PCB. **[7]**

**Q2.** *(Unit 2)*

(a) Define Round Robin. Explain its role in Priority & Round Robin Scheduling with a suitable example or diagram. **[7]**

(b) Explain Multilevel Queue Scheduling in detail. Differentiate between Multilevel Queue and Multilevel Feedback Queue. **[7]**

**Q3.** *(Unit 3)*

(a) Define Banker's Algorithm. Explain its role in Deadlock Avoidance, Detection & Recovery with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Critical Section Problem. Bring out the significance of Race Condition and Critical Section. **[7]**

**Q4.** *(Unit 4)*

(a) Define External Fragmentation. Explain its role in Contiguous Allocation & Fragmentation with a suitable example or diagram. **[7]**

(b) Explain Paging & Segmentation in detail. Differentiate between Paging and Segmentation. **[7]**

**Q5.** *(Unit 5)*

(a) Define Linked Allocation. Explain its role in Directory Structures & Allocation with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Disk Scheduling. Bring out the significance of SSTF and SCAN. **[7]**

**Q6.** *(Unit 2)*

(a) Define Turnaround Time. Explain its role in Scheduling Criteria with a suitable example or diagram. **[7]**

(b) Explain FCFS & SJF Scheduling in detail. Differentiate between FCFS and SJF. **[7]**

**Q7.** *(Unit 4)*

(a) Define Segmentation. Explain its role in Paging & Segmentation with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Virtual Memory & Demand Paging. Bring out the significance of Demand Paging and Effective Access Time. **[7]**

**Q8.** *(Unit 1)*

(a) Define Process States. Explain its role in Process Concept & PCB with a suitable example or diagram. **[7]**

(b) Explain Threads in detail. Differentiate between Thread and User-level Thread. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Operating System: system software managing resources and providing services
- **Q1(b):** System Call: programmatic interface to request a kernel service | Monolithic Kernel: all OS services run in kernel space | Microkernel: minimal kernel with services in user space
- **Q2(a):** SJF: shortest job first; minimum average waiting time
- **Q2(b):** Priority Scheduling: CPU given to the highest-priority process | Aging: gradually raising priority of waiting processes to prevent starvation | Round Robin: each process gets a time quantum in cyclic order
- **Q3(a):** Resource Allocation Graph: graph of processes and resources showing requests and assignments
- **Q3(b):** Banker's Algorithm: grants requests only if the system stays in a safe state | Safe State: some order exists in which all processes can finish | Deadlock Recovery: terminate processes or preempt resources
- **Q4(a):** FIFO Replacement: replace the oldest page; can show Belady's anomaly
- **Q4(b):** First Fit: allocate the first hole that is big enough | External Fragmentation: free memory scattered in small non-contiguous holes | Compaction: shuffling memory to merge free space
- **Q5(a):** Direct Access: records read at any position by block number
- **Q5(b):** Tree-structured Directory: hierarchical directories with paths | Indexed Allocation: index block holds pointers to file blocks | Linked Allocation: each block points to the next block
- **Q6(a):** Context Switch: saving one process's state and loading another's
- **Q6(b):** Operating System: system software managing resources and providing services | Multiprogramming: several jobs in memory to keep the CPU busy | Real-time OS: guarantees response within strict deadlines
- **Q7(a):** Race Condition: outcome depends on the order of concurrent execution
- **Q7(b):** Semaphore: integer variable accessed only by atomic wait and signal | Producer-Consumer Problem: synchronising a shared bounded buffer | Dining Philosophers: classic problem illustrating deadlock and starvation
- **Q8(a):** Indexed Allocation: index block holds pointers to file blocks
- **Q8(b):** SSTF: shortest seek time first | SCAN: elevator algorithm moving end to end servicing requests | C-SCAN: services in one direction and jumps back to the start

## Recommended Books

- *Operating System Concepts* — Silberschatz, Galvin & Gagne
- *Modern Operating Systems* — Andrew S. Tanenbaum
- *Operating Systems: Internals and Design Principles* — William Stallings
