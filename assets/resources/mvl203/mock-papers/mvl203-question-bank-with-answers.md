# MVL-203 System-on-Chip & Embedded System Design — Question Bank with Answer Hints

## Unit 1: SoC Fundamentals

### Short answer (2-3 marks)

- **Q.** Define *SoC*.  
  **Ans.** processor, memory, peripherals and accelerators on one chip
- **Q.** Define *IP Core*.  
  **Ans.** reusable design block
- **Q.** Define *Platform-based Design*.  
  **Ans.** reuse of a common architecture
- **Q.** Define *System Specification*.  
  **Ans.** functional and performance requirements
- **Q.** Define *Architecture Exploration*.  
  **Ans.** evaluating alternatives
- **Q.** Define *Integration*.  
  **Ans.** combining IP blocks
- **Q.** Define *ARM Cortex-A*.  
  **Ans.** application processors
- **Q.** Define *ARM Cortex-M*.  
  **Ans.** microcontroller cores
- **Q.** Define *RISC-V Core*.  
  **Ans.** open ISA processor
- **Q.** Define *Hardware Accelerator*.  
  **Ans.** dedicated logic for a task
- **Q.** Define *NPU*.  
  **Ans.** neural processing unit
- **Q.** Define *DSP Core*.  
  **Ans.** signal processing engine

### Long answer (7 marks)

- **Q.** Explain *SoC Concept* in detail with a neat diagram.  
  **Key points:** Whole systems on one chip. SoC — processor, memory, peripherals and accelerators on one chip; IP Core — reusable design block; Platform-based Design — reuse of a common architecture.
- **Q.** Explain *SoC Design Flow* in detail with a neat diagram.  
  **Key points:** Design spans hardware and software. System Specification — functional and performance requirements; Architecture Exploration — evaluating alternatives; Integration — combining IP blocks.
- **Q.** Explain *Processor Cores* in detail with a neat diagram.  
  **Key points:** CPUs anchor SoCs. ARM Cortex-A — application processors; ARM Cortex-M — microcontroller cores; RISC-V Core — open ISA processor.
- **Q.** Explain *Accelerators* in detail with a neat diagram.  
  **Key points:** Specialised hardware boosts efficiency. Hardware Accelerator — dedicated logic for a task; NPU — neural processing unit; DSP Core — signal processing engine.

## Unit 2: On-chip Communication

### Short answer (2-3 marks)

- **Q.** Define *AMBA*.  
  **Ans.** ARM bus family
- **Q.** Define *AXI*.  
  **Ans.** high-performance AMBA interface with separate channels
- **Q.** Define *APB*.  
  **Ans.** simple bus for peripherals
- **Q.** Define *NoC*.  
  **Ans.** packet-based on-chip network
- **Q.** Define *Router*.  
  **Ans.** forwards flits between links
- **Q.** Define *Wormhole Routing*.  
  **Ans.** flits follow header through network
- **Q.** Define *Memory Controller*.  
  **Ans.** interfaces with DRAM
- **Q.** Define *Cache Coherent Interconnect*.  
  **Ans.** keeps caches consistent
- **Q.** Define *DMA Controller*.  
  **Ans.** transfers data without CPU
- **Q.** Define *Interrupt Controller*.  
  **Ans.** prioritises interrupts, e.g. GIC
- **Q.** Define *Timer*.  
  **Ans.** time base for software
- **Q.** Define *GPIO*.  
  **Ans.** general-purpose I/O

### Long answer (7 marks)

- **Q.** Explain *On-chip Buses* in detail with a neat diagram.  
  **Key points:** Buses connect IP blocks. AMBA — ARM bus family; AXI — high-performance AMBA interface with separate channels; APB — simple bus for peripherals.
- **Q.** Explain *Network on Chip* in detail with a neat diagram.  
  **Key points:** Scalable interconnect. NoC — packet-based on-chip network; Router — forwards flits between links; Wormhole Routing — flits follow header through network.
- **Q.** Explain *Memory Subsystem* in detail with a neat diagram.  
  **Key points:** Memory organisation in SoC. Memory Controller — interfaces with DRAM; Cache Coherent Interconnect — keeps caches consistent; DMA Controller — transfers data without CPU.
- **Q.** Explain *Interrupts & Peripherals* in detail with a neat diagram.  
  **Key points:** Peripheral integration. Interrupt Controller — prioritises interrupts, e.g. GIC; Timer — time base for software; GPIO — general-purpose I/O.

## Unit 3: Hardware-Software Co-design

### Short answer (2-3 marks)

- **Q.** Define *HW/SW Partitioning*.  
  **Ans.** assigning functions to hardware or software
- **Q.** Define *Co-simulation*.  
  **Ans.** simulating hardware and software together
- **Q.** Define *Profiling*.  
  **Ans.** finds performance hotspots
- **Q.** Define *HLS*.  
  **Ans.** generates RTL from C/C++
- **Q.** Define *Loop Unrolling*.  
  **Ans.** parallelises loops in hardware
- **Q.** Define *Pipelining Pragma*.  
  **Ans.** directs HLS pipelining
- **Q.** Define *Virtual Platform*.  
  **Ans.** software model of hardware
- **Q.** Define *TLM*.  
  **Ans.** transaction-level modelling
- **Q.** Define *SystemC*.  
  **Ans.** C++ library for system modelling
- **Q.** Define *Pareto Front*.  
  **Ans.** optimal trade-off points
- **Q.** Define *Performance Model*.  
  **Ans.** estimates throughput
- **Q.** Define *Power-Performance-Area*.  
  **Ans.** PPA trade-offs

### Long answer (7 marks)

- **Q.** Explain *Partitioning* in detail with a neat diagram.  
  **Key points:** Decide hardware versus software. HW/SW Partitioning — assigning functions to hardware or software; Co-simulation — simulating hardware and software together; Profiling — finds performance hotspots.
- **Q.** Explain *High-level Synthesis* in detail with a neat diagram.  
  **Key points:** C to RTL. HLS — generates RTL from C/C++; Loop Unrolling — parallelises loops in hardware; Pipelining Pragma — directs HLS pipelining.
- **Q.** Explain *Virtual Prototyping* in detail with a neat diagram.  
  **Key points:** Early software development. Virtual Platform — software model of hardware; TLM — transaction-level modelling; SystemC — C++ library for system modelling.
- **Q.** Explain *Design Space Exploration* in detail with a neat diagram.  
  **Key points:** Evaluating trade-offs. Pareto Front — optimal trade-off points; Performance Model — estimates throughput; Power-Performance-Area — PPA trade-offs.

## Unit 4: Embedded Software

### Short answer (2-3 marks)

- **Q.** Define *Bare-metal*.  
  **Ans.** software without operating system
- **Q.** Define *Device Driver*.  
  **Ans.** software controlling hardware
- **Q.** Define *Memory-mapped I/O*.  
  **Ans.** registers accessed as memory
- **Q.** Define *RTOS*.  
  **Ans.** deterministic real-time operating system
- **Q.** Define *Rate Monotonic Scheduling*.  
  **Ans.** shorter period gets higher priority
- **Q.** Define *Priority Inheritance*.  
  **Ans.** prevents priority inversion
- **Q.** Define *Bootloader*.  
  **Ans.** initialises hardware and loads OS, e.g. U-Boot
- **Q.** Define *Device Tree*.  
  **Ans.** describes hardware to kernel
- **Q.** Define *Kernel Module*.  
  **Ans.** loadable driver
- **Q.** Define *Secure Boot*.  
  **Ans.** verifies firmware signatures
- **Q.** Define *OTA Update*.  
  **Ans.** over-the-air firmware update
- **Q.** Define *Root of Trust*.  
  **Ans.** hardware trust anchor

### Long answer (7 marks)

- **Q.** Explain *Embedded Programming* in detail with a neat diagram.  
  **Key points:** Software close to hardware. Bare-metal — software without operating system; Device Driver — software controlling hardware; Memory-mapped I/O — registers accessed as memory.
- **Q.** Explain *RTOS* in detail with a neat diagram.  
  **Key points:** Real-time scheduling. RTOS — deterministic real-time operating system; Rate Monotonic Scheduling — shorter period gets higher priority; Priority Inheritance — prevents priority inversion.
- **Q.** Explain *Embedded Linux* in detail with a neat diagram.  
  **Key points:** Full OS for complex SoCs. Bootloader — initialises hardware and loads OS, e.g. U-Boot; Device Tree — describes hardware to kernel; Kernel Module — loadable driver.
- **Q.** Explain *Firmware Updates & Security* in detail with a neat diagram.  
  **Key points:** Keeping devices safe. Secure Boot — verifies firmware signatures; OTA Update — over-the-air firmware update; Root of Trust — hardware trust anchor.

## Unit 5: Verification & Applications

### Short answer (2-3 marks)

- **Q.** Define *SoC-level Verification*.  
  **Ans.** tests integrated IPs
- **Q.** Define *Hardware-in-the-loop*.  
  **Ans.** real hardware in test loop
- **Q.** Define *Emulation*.  
  **Ans.** fast execution of SoC model
- **Q.** Define *Power Management Unit*.  
  **Ans.** controls domains
- **Q.** Define *Power States*.  
  **Ans.** active, idle and sleep
- **Q.** Define *Wake-up Sources*.  
  **Ans.** events that resume system
- **Q.** Define *Automotive SoC*.  
  **Ans.** ADAS and infotainment chips
- **Q.** Define *ISO 26262*.  
  **Ans.** automotive functional safety standard
- **Q.** Define *IoT SoC*.  
  **Ans.** low-power connected device chip
- **Q.** Define *Chiplet*.  
  **Ans.** small die combined in package
- **Q.** Define *UCIe*.  
  **Ans.** universal chiplet interconnect express
- **Q.** Define *2.5D Integration*.  
  **Ans.** dies on silicon interposer

### Long answer (7 marks)

- **Q.** Explain *SoC Verification* in detail with a neat diagram.  
  **Key points:** Verification of integrated systems. SoC-level Verification — tests integrated IPs; Hardware-in-the-loop — real hardware in test loop; Emulation — fast execution of SoC model.
- **Q.** Explain *Low-power SoC* in detail with a neat diagram.  
  **Key points:** Power management at system level. Power Management Unit — controls domains; Power States — active, idle and sleep; Wake-up Sources — events that resume system.
- **Q.** Explain *Automotive & IoT SoCs* in detail with a neat diagram.  
  **Key points:** Domain-specific SoCs. Automotive SoC — ADAS and infotainment chips; ISO 26262 — automotive functional safety standard; IoT SoC — low-power connected device chip.
- **Q.** Explain *Chiplets & Advanced Packaging* in detail with a neat diagram.  
  **Key points:** Modular silicon systems. Chiplet — small die combined in package; UCIe — universal chiplet interconnect express; 2.5D Integration — dies on silicon interposer.

