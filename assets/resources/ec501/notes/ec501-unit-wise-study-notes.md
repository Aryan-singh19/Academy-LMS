# EC-501 Microprocessor & Its Applications — Unit-wise Study Notes

> 8085 and 8086 architecture, instruction sets, assembly programming, interrupts and peripheral interfacing.

## Unit 1: 8085 Microprocessor

### 8085 Architecture

The 8085 is an 8-bit microprocessor with a 16-bit address bus.

- **8085:** 8-bit processor, 16-bit address bus, 64 KB addressable memory
- **Accumulator:** 8-bit register A used in arithmetic and logic
- **Flag Register:** S, Z, AC, P and CY status flags

### 8085 Pin Diagram & Buses

Multiplexed buses save pins.

- **AD0-AD7:** multiplexed lower address and data bus
- **ALE:** address latch enable to demultiplex AD lines
- **IO/M Signal:** distinguishes I/O from memory operation

### Timing Diagrams

Instructions are executed in machine cycles.

- **Machine Cycle:** basic operation such as opcode fetch or memory read
- **T-state:** one clock period
- **Opcode Fetch:** takes 4 T-states in 8085

### 8085 Interrupts

Interrupts let devices request service.

- **TRAP:** non-maskable highest-priority interrupt
- **RST 7.5:** maskable vectored interrupt, edge triggered
- **INTR:** non-vectored interrupt acknowledged with INTA

## Unit 2: 8085 Instruction Set & Programming

### Addressing Modes of 8085

Modes specify operand location.

- **Immediate Addressing:** data in the instruction, e.g. MVI A, 32H
- **Register Indirect:** memory addressed by a register pair, e.g. MOV A, M
- **Direct Addressing:** address in the instruction, e.g. LDA 2000H

### Data Transfer & Arithmetic Instructions

Instructions move and process data.

- **MOV:** copies data between registers
- **ADD:** adds register to accumulator
- **DAA:** decimal adjust accumulator after BCD addition

### Logical, Branch & Machine Control Instructions

Instructions test, jump and control the CPU.

- **CMP:** compares register with accumulator setting flags
- **JNZ:** jump if zero flag is reset
- **HLT:** halts the processor

### Stack & Subroutines

Stack supports calls and temporary storage.

- **Stack Pointer:** holds address of top of stack
- **CALL and RET:** enter and return from subroutines
- **PUSH and POP:** save and restore register pairs

## Unit 3: 8086 Microprocessor

### 8086 Architecture

The 8086 is a 16-bit processor with pipelined units.

- **BIU:** bus interface unit fetching instructions and data
- **EU:** execution unit decoding and executing instructions
- **Instruction Queue:** 6-byte prefetch queue enabling pipelining

### Memory Segmentation

Segments let a 16-bit CPU address 1 MB.

- **Physical Address:** segment × 16 + offset
- **Segment Registers:** CS, DS, SS and ES
- **1 MB Address Space:** 20-bit address bus

### 8086 Addressing Modes & Instructions

8086 supports rich addressing.

- **Based Indexed Addressing:** BX or BP plus SI or DI
- **String Instructions:** MOVSB, CMPSB with REP prefix
- **MUL and DIV:** unsigned multiply and divide

### Minimum & Maximum Mode

8086 operates alone or with coprocessors.

- **Minimum Mode:** single processor generating control signals
- **Maximum Mode:** multiprocessor mode using 8288 bus controller
- **8087:** math coprocessor for floating point

## Unit 4: Peripheral Interfacing

### Memory & I/O Interfacing

Address decoding connects memory and ports.

- **Memory-mapped I/O:** devices addressed as memory locations
- **I/O-mapped I/O:** separate I/O address space with IN and OUT
- **Address Decoding:** generating chip select from address lines

### 8255 PPI

Programmable peripheral interface provides parallel ports.

- **8255:** programmable peripheral interface with ports A, B and C
- **Mode 0:** simple input/output
- **Control Word:** byte configuring 8255 ports and modes

### 8253/8254 Timer & 8259 PIC

Timers and interrupt controllers support real-time tasks.

- **8253:** programmable interval timer with three 16-bit counters
- **8259:** programmable interrupt controller for 8 interrupts, cascadable to 64
- **Priority Resolver:** selects highest priority pending interrupt

### 8257 DMA & 8251 USART

DMA and serial controllers handle data transfer.

- **8257:** DMA controller with four channels
- **8251:** USART for serial communication
- **Baud Rate:** number of signal changes per second

## Unit 5: Applications & Microcontrollers

### ADC & DAC Interfacing

Microprocessors measure and generate analog signals.

- **ADC0808:** 8-bit ADC with 8-channel multiplexer
- **DAC0808:** 8-bit digital-to-analog converter
- **Start of Conversion:** signal starting an ADC conversion

### Display & Keyboard Interfacing

User I/O devices are scanned and driven.

- **8279:** keyboard and display controller
- **Key Debouncing:** ignoring contact bounce
- **Multiplexed Display:** digits lit one at a time rapidly

### Stepper Motor & Traffic Light Control

Typical lab applications.

- **Stepper Motor:** motor moving in fixed angle steps
- **Step Sequence:** pattern of coil energisation
- **Traffic Light Controller:** timed output sequence driving lamps

### Introduction to 8051 Microcontroller

Microcontrollers integrate CPU, memory and I/O.

- **8051:** 8-bit microcontroller with 4 KB ROM and 128 bytes RAM
- **Microcontroller vs Microprocessor:** MCU integrates peripherals on chip
- **SFR:** special function registers controlling peripherals

## Standard Textbooks

- *Microprocessor Architecture, Programming and Applications with the 8085* — Ramesh Gaonkar
- *Microprocessors and Interfacing* — Douglas V. Hall
- *Advanced Microprocessors and Peripherals* — A. K. Ray & K. M. Bhurchandi

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
