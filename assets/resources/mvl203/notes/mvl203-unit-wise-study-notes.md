# MVL-203 System-on-Chip & Embedded System Design — Unit-wise Study Notes

> SoC architecture, processor cores, on-chip buses, hardware-software co-design, IP integration and embedded software.

## Unit 1: SoC Fundamentals

### SoC Concept

Whole systems on one chip.

- **SoC:** processor, memory, peripherals and accelerators on one chip
- **IP Core:** reusable design block
- **Platform-based Design:** reuse of a common architecture

### SoC Design Flow

Design spans hardware and software.

- **System Specification:** functional and performance requirements
- **Architecture Exploration:** evaluating alternatives
- **Integration:** combining IP blocks

### Processor Cores

CPUs anchor SoCs.

- **ARM Cortex-A:** application processors
- **ARM Cortex-M:** microcontroller cores
- **RISC-V Core:** open ISA processor

### Accelerators

Specialised hardware boosts efficiency.

- **Hardware Accelerator:** dedicated logic for a task
- **NPU:** neural processing unit
- **DSP Core:** signal processing engine

## Unit 2: On-chip Communication

### On-chip Buses

Buses connect IP blocks.

- **AMBA:** ARM bus family
- **AXI:** high-performance AMBA interface with separate channels
- **APB:** simple bus for peripherals

### Network on Chip

Scalable interconnect.

- **NoC:** packet-based on-chip network
- **Router:** forwards flits between links
- **Wormhole Routing:** flits follow header through network

### Memory Subsystem

Memory organisation in SoC.

- **Memory Controller:** interfaces with DRAM
- **Cache Coherent Interconnect:** keeps caches consistent
- **DMA Controller:** transfers data without CPU

### Interrupts & Peripherals

Peripheral integration.

- **Interrupt Controller:** prioritises interrupts, e.g. GIC
- **Timer:** time base for software
- **GPIO:** general-purpose I/O

## Unit 3: Hardware-Software Co-design

### Partitioning

Decide hardware versus software.

- **HW/SW Partitioning:** assigning functions to hardware or software
- **Co-simulation:** simulating hardware and software together
- **Profiling:** finds performance hotspots

### High-level Synthesis

C to RTL.

- **HLS:** generates RTL from C/C++
- **Loop Unrolling:** parallelises loops in hardware
- **Pipelining Pragma:** directs HLS pipelining

### Virtual Prototyping

Early software development.

- **Virtual Platform:** software model of hardware
- **TLM:** transaction-level modelling
- **SystemC:** C++ library for system modelling

### Design Space Exploration

Evaluating trade-offs.

- **Pareto Front:** optimal trade-off points
- **Performance Model:** estimates throughput
- **Power-Performance-Area:** PPA trade-offs

## Unit 4: Embedded Software

### Embedded Programming

Software close to hardware.

- **Bare-metal:** software without operating system
- **Device Driver:** software controlling hardware
- **Memory-mapped I/O:** registers accessed as memory

### RTOS

Real-time scheduling.

- **RTOS:** deterministic real-time operating system
- **Rate Monotonic Scheduling:** shorter period gets higher priority
- **Priority Inheritance:** prevents priority inversion

### Embedded Linux

Full OS for complex SoCs.

- **Bootloader:** initialises hardware and loads OS, e.g. U-Boot
- **Device Tree:** describes hardware to kernel
- **Kernel Module:** loadable driver

### Firmware Updates & Security

Keeping devices safe.

- **Secure Boot:** verifies firmware signatures
- **OTA Update:** over-the-air firmware update
- **Root of Trust:** hardware trust anchor

## Unit 5: Verification & Applications

### SoC Verification

Verification of integrated systems.

- **SoC-level Verification:** tests integrated IPs
- **Hardware-in-the-loop:** real hardware in test loop
- **Emulation:** fast execution of SoC model

### Low-power SoC

Power management at system level.

- **Power Management Unit:** controls domains
- **Power States:** active, idle and sleep
- **Wake-up Sources:** events that resume system

### Automotive & IoT SoCs

Domain-specific SoCs.

- **Automotive SoC:** ADAS and infotainment chips
- **ISO 26262:** automotive functional safety standard
- **IoT SoC:** low-power connected device chip

### Chiplets & Advanced Packaging

Modular silicon systems.

- **Chiplet:** small die combined in package
- **UCIe:** universal chiplet interconnect express
- **2.5D Integration:** dies on silicon interposer

## Standard Textbooks

- *On-Chip Communication Architectures* — Pasricha & Dutt
- *Embedded System Design* — Frank Vahid & Tony Givargis
- *ARM System-on-Chip Architecture* — Steve Furber

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
