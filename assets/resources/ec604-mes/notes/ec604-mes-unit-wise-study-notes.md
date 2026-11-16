# EC-604(A) Microcontroller & Embedded Systems — Unit-wise Study Notes

> 8051 and ARM architecture, programming, interfacing, embedded design and RTOS.

## Unit 1: 8051 Architecture

### 8051 Features

The 8051 is the classic 8-bit microcontroller.

- **8051:** 8-bit MCU with 4 KB ROM, 128 B RAM, 4 ports, 2 timers
- **Harvard Architecture:** separate program and data memory
- **Microcontroller:** CPU, memory and peripherals on one chip

### Memory Organisation

8051 memory is split into banks and areas.

- **Register Banks:** four banks of R0-R7
- **Bit-addressable RAM:** 16 bytes at 20H-2FH
- **SFR:** special function registers in 80H-FFH

### Ports & Pin Functions

I/O ports also have alternate functions.

- **Port 0:** needs external pull-ups; multiplexed address/data
- **Port 3:** alternate functions such as RxD, TxD, INT0
- **PSEN:** program store enable for external ROM

### Oscillator & Reset

Timing and reset circuits start the MCU.

- **Machine Cycle:** 12 oscillator periods in classic 8051
- **Reset:** sets PC to 0000H
- **Crystal Frequency:** commonly 11.0592 MHz for standard baud rates

## Unit 2: 8051 Programming

### Addressing Modes

8051 supports several addressing modes.

- **Immediate Addressing:** MOV A, #25H
- **Indirect Addressing:** MOV A, @R0
- **Indexed Addressing:** MOVC A, @A+DPTR for look-up tables

### Instruction Set

Instructions move, compute and branch.

- **DJNZ:** decrement and jump if not zero
- **SETB and CLR:** set and clear bits
- **ACALL and LCALL:** absolute and long subroutine calls

### Embedded C for 8051

High-level programming speeds development.

- **sbit:** declares a single bit variable in Keil C
- **Data Types:** unsigned char for 8-bit values
- **Delay Loop:** software loop generating time delay

### Assembler & Toolchain

Tools build and debug firmware.

- **Assembler:** converts assembly into machine code
- **Cross Compiler:** compiles on a PC for the target MCU
- **Simulator:** runs code without hardware, e.g. Keil

## Unit 3: Timers, Serial & Interrupts

### Timers & Counters

Timers count clock pulses or external events.

- **TMOD:** register selecting timer modes
- **Mode 1:** 16-bit timer
- **Mode 2:** 8-bit auto-reload, used for baud rate

### Serial Communication

8051 has a built-in UART.

- **SCON:** serial control register
- **SBUF:** serial buffer register
- **Baud Rate Calculation:** timer 1 reload value sets the baud rate

### Interrupts

Interrupts handle events promptly.

- **IE Register:** enables individual interrupts
- **IP Register:** sets interrupt priority
- **Interrupt Vector:** fixed address of each ISR

### Interfacing Peripherals

MCUs connect to displays, keypads and motors.

- **LCD Interfacing:** data and command modes through RS, RW, EN
- **Keypad Scanning:** rows driven, columns read
- **DC Motor Control:** PWM speed control through a driver

## Unit 4: ARM & Advanced Microcontrollers

### ARM Architecture

ARM is a 32-bit RISC family.

- **ARM:** 32-bit RISC architecture with load-store design
- **Thumb Instruction Set:** 16-bit compressed instructions
- **Cortex-M:** ARM profile for microcontrollers

### ARM Registers & Modes

Banked registers support modes.

- **R13:** stack pointer
- **R14:** link register holding return address
- **CPSR:** current program status register

### Cortex-M Features

Cortex-M adds features for embedded use.

- **NVIC:** nested vectored interrupt controller
- **SysTick:** system tick timer for RTOS
- **Low-power Modes:** sleep modes to save energy

### Popular Development Platforms

Boards accelerate prototyping.

- **STM32:** Cortex-M microcontroller family
- **Arduino:** easy AVR-based prototyping platform
- **ESP32:** Wi-Fi and Bluetooth MCU for IoT

## Unit 5: Embedded System Design & RTOS

### Embedded System Characteristics

Embedded systems are dedicated, constrained and reliable.

- **Embedded System:** computer designed for a specific function within a device
- **Real-time Constraint:** deadline for producing correct output
- **Hard Real-time:** missing a deadline is a system failure

### Embedded Design Process

Design moves from requirements to deployment.

- **Hardware-Software Co-design:** concurrent design of hardware and software
- **Watchdog Timer:** resets system if software hangs
- **Firmware:** software stored in non-volatile memory

### RTOS Concepts

RTOS schedules tasks to meet deadlines.

- **RTOS:** operating system guaranteeing timing behaviour
- **Task:** independent thread of execution
- **Preemptive Scheduling:** higher-priority task interrupts lower one

### Inter-task Communication

Tasks share data safely.

- **Semaphore:** synchronises tasks and protects resources
- **Message Queue:** passes data between tasks
- **Priority Inversion:** low-priority task blocks high-priority one; fixed by priority inheritance

## Standard Textbooks

- *The 8051 Microcontroller and Embedded Systems* — Mazidi, Mazidi & McKinlay
- *ARM System Developer's Guide* — Sloss, Symes & Wright
- *Embedded Systems: Architecture, Programming and Design* — Raj Kamal

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
