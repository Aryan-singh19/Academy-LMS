# EC-604(A) Microcontroller & Embedded Systems — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: ECE Sem 6: EC-604(A).

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define 8051. Explain its role in 8051 Features with a suitable example or diagram. **[7]**

(b) Explain Memory Organisation in detail. Differentiate between Register Banks and Bit-addressable RAM. **[7]**

**Q2.** *(Unit 2)*

(a) Define SETB and CLR. Explain its role in Instruction Set with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Embedded C for 8051. Bring out the significance of sbit and Data Types. **[7]**

**Q3.** *(Unit 3)*

(a) Define Interrupt Vector. Explain its role in Interrupts with a suitable example or diagram. **[7]**

(b) Explain Interfacing Peripherals in detail. Differentiate between LCD Interfacing and Keypad Scanning. **[7]**

**Q4.** *(Unit 4)*

(a) Define STM32. Explain its role in Popular Development Platforms with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss ARM Architecture. Bring out the significance of ARM and Thumb Instruction Set. **[7]**

**Q5.** *(Unit 5)*

(a) Define Real-time Constraint. Explain its role in Embedded System Characteristics with a suitable example or diagram. **[7]**

(b) Explain Embedded Design Process in detail. Differentiate between Hardware-Software Co-design and Watchdog Timer. **[7]**

**Q6.** *(Unit 1)*

(a) Define Crystal Frequency. Explain its role in Oscillator & Reset with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss 8051 Features. Bring out the significance of 8051 and Harvard Architecture. **[7]**

**Q7.** *(Unit 3)*

(a) Define TMOD. Explain its role in Timers & Counters with a suitable example or diagram. **[7]**

(b) Explain Serial Communication in detail. Differentiate between SCON and SBUF. **[7]**

**Q8.** *(Unit 5)*

(a) Define Watchdog Timer. Explain its role in Embedded Design Process with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss RTOS Concepts. Bring out the significance of RTOS and Task. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Bit-addressable RAM. Explain its role in Memory Organisation with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Ports & Pin Functions. Bring out the significance of Port 0 and Port 3. **[7]**

**Q2.** *(Unit 2)*

(a) Define Delay Loop. Explain its role in Embedded C for 8051 with a suitable example or diagram. **[7]**

(b) Explain Assembler & Toolchain in detail. Differentiate between Assembler and Cross Compiler. **[7]**

**Q3.** *(Unit 3)*

(a) Define LCD Interfacing. Explain its role in Interfacing Peripherals with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Timers & Counters. Bring out the significance of TMOD and Mode 1. **[7]**

**Q4.** *(Unit 4)*

(a) Define Thumb Instruction Set. Explain its role in ARM Architecture with a suitable example or diagram. **[7]**

(b) Explain ARM Registers & Modes in detail. Differentiate between R13 and R14. **[7]**

**Q5.** *(Unit 5)*

(a) Define Firmware. Explain its role in Embedded Design Process with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss RTOS Concepts. Bring out the significance of RTOS and Task. **[7]**

**Q6.** *(Unit 2)*

(a) Define Immediate Addressing. Explain its role in Addressing Modes with a suitable example or diagram. **[7]**

(b) Explain Instruction Set in detail. Differentiate between DJNZ and SETB and CLR. **[7]**

**Q7.** *(Unit 4)*

(a) Define R14. Explain its role in ARM Registers & Modes with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Cortex-M Features. Bring out the significance of NVIC and SysTick. **[7]**

**Q8.** *(Unit 1)*

(a) Define PSEN. Explain its role in Ports & Pin Functions with a suitable example or diagram. **[7]**

(b) Explain Oscillator & Reset in detail. Differentiate between Machine Cycle and Reset. **[7]**

## Answer Hints (Set A)

- **Q1(a):** 8051: 8-bit MCU with 4 KB ROM, 128 B RAM, 4 ports, 2 timers
- **Q1(b):** Register Banks: four banks of R0-R7 | Bit-addressable RAM: 16 bytes at 20H-2FH | SFR: special function registers in 80H-FFH
- **Q2(a):** SETB and CLR: set and clear bits
- **Q2(b):** sbit: declares a single bit variable in Keil C | Data Types: unsigned char for 8-bit values | Delay Loop: software loop generating time delay
- **Q3(a):** Interrupt Vector: fixed address of each ISR
- **Q3(b):** LCD Interfacing: data and command modes through RS, RW, EN | Keypad Scanning: rows driven, columns read | DC Motor Control: PWM speed control through a driver
- **Q4(a):** STM32: Cortex-M microcontroller family
- **Q4(b):** ARM: 32-bit RISC architecture with load-store design | Thumb Instruction Set: 16-bit compressed instructions | Cortex-M: ARM profile for microcontrollers
- **Q5(a):** Real-time Constraint: deadline for producing correct output
- **Q5(b):** Hardware-Software Co-design: concurrent design of hardware and software | Watchdog Timer: resets system if software hangs | Firmware: software stored in non-volatile memory
- **Q6(a):** Crystal Frequency: commonly 11.0592 MHz for standard baud rates
- **Q6(b):** 8051: 8-bit MCU with 4 KB ROM, 128 B RAM, 4 ports, 2 timers | Harvard Architecture: separate program and data memory | Microcontroller: CPU, memory and peripherals on one chip
- **Q7(a):** TMOD: register selecting timer modes
- **Q7(b):** SCON: serial control register | SBUF: serial buffer register | Baud Rate Calculation: timer 1 reload value sets the baud rate
- **Q8(a):** Watchdog Timer: resets system if software hangs
- **Q8(b):** RTOS: operating system guaranteeing timing behaviour | Task: independent thread of execution | Preemptive Scheduling: higher-priority task interrupts lower one

## Recommended Books

- *The 8051 Microcontroller and Embedded Systems* — Mazidi, Mazidi & McKinlay
- *ARM System Developer's Guide* — Sloss, Symes & Wright
- *Embedded Systems: Architecture, Programming and Design* — Raj Kamal
