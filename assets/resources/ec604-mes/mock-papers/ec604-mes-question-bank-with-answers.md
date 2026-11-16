# EC-604(A) Microcontroller & Embedded Systems — Question Bank with Answer Hints

## Unit 1: 8051 Architecture

### Short answer (2-3 marks)

- **Q.** Define *8051*.  
  **Ans.** 8-bit MCU with 4 KB ROM, 128 B RAM, 4 ports, 2 timers
- **Q.** Define *Harvard Architecture*.  
  **Ans.** separate program and data memory
- **Q.** Define *Microcontroller*.  
  **Ans.** CPU, memory and peripherals on one chip
- **Q.** Define *Register Banks*.  
  **Ans.** four banks of R0-R7
- **Q.** Define *Bit-addressable RAM*.  
  **Ans.** 16 bytes at 20H-2FH
- **Q.** Define *SFR*.  
  **Ans.** special function registers in 80H-FFH
- **Q.** Define *Port 0*.  
  **Ans.** needs external pull-ups; multiplexed address/data
- **Q.** Define *Port 3*.  
  **Ans.** alternate functions such as RxD, TxD, INT0
- **Q.** Define *PSEN*.  
  **Ans.** program store enable for external ROM
- **Q.** Define *Machine Cycle*.  
  **Ans.** 12 oscillator periods in classic 8051
- **Q.** Define *Reset*.  
  **Ans.** sets PC to 0000H
- **Q.** Define *Crystal Frequency*.  
  **Ans.** commonly 11.0592 MHz for standard baud rates

### Long answer (7 marks)

- **Q.** Explain *8051 Features* in detail with a neat diagram.  
  **Key points:** The 8051 is the classic 8-bit microcontroller. 8051 — 8-bit MCU with 4 KB ROM, 128 B RAM, 4 ports, 2 timers; Harvard Architecture — separate program and data memory; Microcontroller — CPU, memory and peripherals on one chip.
- **Q.** Explain *Memory Organisation* in detail with a neat diagram.  
  **Key points:** 8051 memory is split into banks and areas. Register Banks — four banks of R0-R7; Bit-addressable RAM — 16 bytes at 20H-2FH; SFR — special function registers in 80H-FFH.
- **Q.** Explain *Ports & Pin Functions* in detail with a neat diagram.  
  **Key points:** I/O ports also have alternate functions. Port 0 — needs external pull-ups; multiplexed address/data; Port 3 — alternate functions such as RxD, TxD, INT0; PSEN — program store enable for external ROM.
- **Q.** Explain *Oscillator & Reset* in detail with a neat diagram.  
  **Key points:** Timing and reset circuits start the MCU. Machine Cycle — 12 oscillator periods in classic 8051; Reset — sets PC to 0000H; Crystal Frequency — commonly 11.0592 MHz for standard baud rates.

## Unit 2: 8051 Programming

### Short answer (2-3 marks)

- **Q.** Define *Immediate Addressing*.  
  **Ans.** MOV A, #25H
- **Q.** Define *Indirect Addressing*.  
  **Ans.** MOV A, @R0
- **Q.** Define *Indexed Addressing*.  
  **Ans.** MOVC A, @A+DPTR for look-up tables
- **Q.** Define *DJNZ*.  
  **Ans.** decrement and jump if not zero
- **Q.** Define *SETB and CLR*.  
  **Ans.** set and clear bits
- **Q.** Define *ACALL and LCALL*.  
  **Ans.** absolute and long subroutine calls
- **Q.** Define *sbit*.  
  **Ans.** declares a single bit variable in Keil C
- **Q.** Define *Data Types*.  
  **Ans.** unsigned char for 8-bit values
- **Q.** Define *Delay Loop*.  
  **Ans.** software loop generating time delay
- **Q.** Define *Assembler*.  
  **Ans.** converts assembly into machine code
- **Q.** Define *Cross Compiler*.  
  **Ans.** compiles on a PC for the target MCU
- **Q.** Define *Simulator*.  
  **Ans.** runs code without hardware, e.g. Keil

### Long answer (7 marks)

- **Q.** Explain *Addressing Modes* in detail with a neat diagram.  
  **Key points:** 8051 supports several addressing modes. Immediate Addressing — MOV A, #25H; Indirect Addressing — MOV A, @R0; Indexed Addressing — MOVC A, @A+DPTR for look-up tables.
- **Q.** Explain *Instruction Set* in detail with a neat diagram.  
  **Key points:** Instructions move, compute and branch. DJNZ — decrement and jump if not zero; SETB and CLR — set and clear bits; ACALL and LCALL — absolute and long subroutine calls.
- **Q.** Explain *Embedded C for 8051* in detail with a neat diagram.  
  **Key points:** High-level programming speeds development. sbit — declares a single bit variable in Keil C; Data Types — unsigned char for 8-bit values; Delay Loop — software loop generating time delay.
- **Q.** Explain *Assembler & Toolchain* in detail with a neat diagram.  
  **Key points:** Tools build and debug firmware. Assembler — converts assembly into machine code; Cross Compiler — compiles on a PC for the target MCU; Simulator — runs code without hardware, e.g. Keil.

## Unit 3: Timers, Serial & Interrupts

### Short answer (2-3 marks)

- **Q.** Define *TMOD*.  
  **Ans.** register selecting timer modes
- **Q.** Define *Mode 1*.  
  **Ans.** 16-bit timer
- **Q.** Define *Mode 2*.  
  **Ans.** 8-bit auto-reload, used for baud rate
- **Q.** Define *SCON*.  
  **Ans.** serial control register
- **Q.** Define *SBUF*.  
  **Ans.** serial buffer register
- **Q.** Define *Baud Rate Calculation*.  
  **Ans.** timer 1 reload value sets the baud rate
- **Q.** Define *IE Register*.  
  **Ans.** enables individual interrupts
- **Q.** Define *IP Register*.  
  **Ans.** sets interrupt priority
- **Q.** Define *Interrupt Vector*.  
  **Ans.** fixed address of each ISR
- **Q.** Define *LCD Interfacing*.  
  **Ans.** data and command modes through RS, RW, EN
- **Q.** Define *Keypad Scanning*.  
  **Ans.** rows driven, columns read
- **Q.** Define *DC Motor Control*.  
  **Ans.** PWM speed control through a driver

### Long answer (7 marks)

- **Q.** Explain *Timers & Counters* in detail with a neat diagram.  
  **Key points:** Timers count clock pulses or external events. TMOD — register selecting timer modes; Mode 1 — 16-bit timer; Mode 2 — 8-bit auto-reload, used for baud rate.
- **Q.** Explain *Serial Communication* in detail with a neat diagram.  
  **Key points:** 8051 has a built-in UART. SCON — serial control register; SBUF — serial buffer register; Baud Rate Calculation — timer 1 reload value sets the baud rate.
- **Q.** Explain *Interrupts* in detail with a neat diagram.  
  **Key points:** Interrupts handle events promptly. IE Register — enables individual interrupts; IP Register — sets interrupt priority; Interrupt Vector — fixed address of each ISR.
- **Q.** Explain *Interfacing Peripherals* in detail with a neat diagram.  
  **Key points:** MCUs connect to displays, keypads and motors. LCD Interfacing — data and command modes through RS, RW, EN; Keypad Scanning — rows driven, columns read; DC Motor Control — PWM speed control through a driver.

## Unit 4: ARM & Advanced Microcontrollers

### Short answer (2-3 marks)

- **Q.** Define *ARM*.  
  **Ans.** 32-bit RISC architecture with load-store design
- **Q.** Define *Thumb Instruction Set*.  
  **Ans.** 16-bit compressed instructions
- **Q.** Define *Cortex-M*.  
  **Ans.** ARM profile for microcontrollers
- **Q.** Define *R13*.  
  **Ans.** stack pointer
- **Q.** Define *R14*.  
  **Ans.** link register holding return address
- **Q.** Define *CPSR*.  
  **Ans.** current program status register
- **Q.** Define *NVIC*.  
  **Ans.** nested vectored interrupt controller
- **Q.** Define *SysTick*.  
  **Ans.** system tick timer for RTOS
- **Q.** Define *Low-power Modes*.  
  **Ans.** sleep modes to save energy
- **Q.** Define *STM32*.  
  **Ans.** Cortex-M microcontroller family
- **Q.** Define *Arduino*.  
  **Ans.** easy AVR-based prototyping platform
- **Q.** Define *ESP32*.  
  **Ans.** Wi-Fi and Bluetooth MCU for IoT

### Long answer (7 marks)

- **Q.** Explain *ARM Architecture* in detail with a neat diagram.  
  **Key points:** ARM is a 32-bit RISC family. ARM — 32-bit RISC architecture with load-store design; Thumb Instruction Set — 16-bit compressed instructions; Cortex-M — ARM profile for microcontrollers.
- **Q.** Explain *ARM Registers & Modes* in detail with a neat diagram.  
  **Key points:** Banked registers support modes. R13 — stack pointer; R14 — link register holding return address; CPSR — current program status register.
- **Q.** Explain *Cortex-M Features* in detail with a neat diagram.  
  **Key points:** Cortex-M adds features for embedded use. NVIC — nested vectored interrupt controller; SysTick — system tick timer for RTOS; Low-power Modes — sleep modes to save energy.
- **Q.** Explain *Popular Development Platforms* in detail with a neat diagram.  
  **Key points:** Boards accelerate prototyping. STM32 — Cortex-M microcontroller family; Arduino — easy AVR-based prototyping platform; ESP32 — Wi-Fi and Bluetooth MCU for IoT.

## Unit 5: Embedded System Design & RTOS

### Short answer (2-3 marks)

- **Q.** Define *Embedded System*.  
  **Ans.** computer designed for a specific function within a device
- **Q.** Define *Real-time Constraint*.  
  **Ans.** deadline for producing correct output
- **Q.** Define *Hard Real-time*.  
  **Ans.** missing a deadline is a system failure
- **Q.** Define *Hardware-Software Co-design*.  
  **Ans.** concurrent design of hardware and software
- **Q.** Define *Watchdog Timer*.  
  **Ans.** resets system if software hangs
- **Q.** Define *Firmware*.  
  **Ans.** software stored in non-volatile memory
- **Q.** Define *RTOS*.  
  **Ans.** operating system guaranteeing timing behaviour
- **Q.** Define *Task*.  
  **Ans.** independent thread of execution
- **Q.** Define *Preemptive Scheduling*.  
  **Ans.** higher-priority task interrupts lower one
- **Q.** Define *Semaphore*.  
  **Ans.** synchronises tasks and protects resources
- **Q.** Define *Message Queue*.  
  **Ans.** passes data between tasks
- **Q.** Define *Priority Inversion*.  
  **Ans.** low-priority task blocks high-priority one; fixed by priority inheritance

### Long answer (7 marks)

- **Q.** Explain *Embedded System Characteristics* in detail with a neat diagram.  
  **Key points:** Embedded systems are dedicated, constrained and reliable. Embedded System — computer designed for a specific function within a device; Real-time Constraint — deadline for producing correct output; Hard Real-time — missing a deadline is a system failure.
- **Q.** Explain *Embedded Design Process* in detail with a neat diagram.  
  **Key points:** Design moves from requirements to deployment. Hardware-Software Co-design — concurrent design of hardware and software; Watchdog Timer — resets system if software hangs; Firmware — software stored in non-volatile memory.
- **Q.** Explain *RTOS Concepts* in detail with a neat diagram.  
  **Key points:** RTOS schedules tasks to meet deadlines. RTOS — operating system guaranteeing timing behaviour; Task — independent thread of execution; Preemptive Scheduling — higher-priority task interrupts lower one.
- **Q.** Explain *Inter-task Communication* in detail with a neat diagram.  
  **Key points:** Tasks share data safely. Semaphore — synchronises tasks and protects resources; Message Queue — passes data between tasks; Priority Inversion — low-priority task blocks high-priority one; fixed by priority inheritance.

