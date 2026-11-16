# EC-501 Microprocessor & Its Applications — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: ECE Sem 5: EC-501 · EX Sem 6: EX-602.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define 8085. Explain its role in 8085 Architecture with a suitable example or diagram. **[7]**

(b) Explain 8085 Pin Diagram & Buses in detail. Differentiate between AD0-AD7 and ALE. **[7]**

**Q2.** *(Unit 2)*

(a) Define ADD. Explain its role in Data Transfer & Arithmetic Instructions with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Logical, Branch & Machine Control Instructions. Bring out the significance of CMP and JNZ. **[7]**

**Q3.** *(Unit 3)*

(a) Define MUL and DIV. Explain its role in 8086 Addressing Modes & Instructions with a suitable example or diagram. **[7]**

(b) Explain Minimum & Maximum Mode in detail. Differentiate between Minimum Mode and Maximum Mode. **[7]**

**Q4.** *(Unit 4)*

(a) Define 8257. Explain its role in 8257 DMA & 8251 USART with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Memory & I/O Interfacing. Bring out the significance of Memory-mapped I/O and I/O-mapped I/O. **[7]**

**Q5.** *(Unit 5)*

(a) Define DAC0808. Explain its role in ADC & DAC Interfacing with a suitable example or diagram. **[7]**

(b) Explain Display & Keyboard Interfacing in detail. Differentiate between 8279 and Key Debouncing. **[7]**

**Q6.** *(Unit 1)*

(a) Define INTR. Explain its role in 8085 Interrupts with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss 8085 Architecture. Bring out the significance of 8085 and Accumulator. **[7]**

**Q7.** *(Unit 3)*

(a) Define BIU. Explain its role in 8086 Architecture with a suitable example or diagram. **[7]**

(b) Explain Memory Segmentation in detail. Differentiate between Physical Address and Segment Registers. **[7]**

**Q8.** *(Unit 5)*

(a) Define Key Debouncing. Explain its role in Display & Keyboard Interfacing with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Stepper Motor & Traffic Light Control. Bring out the significance of Stepper Motor and Step Sequence. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define ALE. Explain its role in 8085 Pin Diagram & Buses with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Timing Diagrams. Bring out the significance of Machine Cycle and T-state. **[7]**

**Q2.** *(Unit 2)*

(a) Define HLT. Explain its role in Logical, Branch & Machine Control Instructions with a suitable example or diagram. **[7]**

(b) Explain Stack & Subroutines in detail. Differentiate between Stack Pointer and CALL and RET. **[7]**

**Q3.** *(Unit 3)*

(a) Define Minimum Mode. Explain its role in Minimum & Maximum Mode with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss 8086 Architecture. Bring out the significance of BIU and EU. **[7]**

**Q4.** *(Unit 4)*

(a) Define I/O-mapped I/O. Explain its role in Memory & I/O Interfacing with a suitable example or diagram. **[7]**

(b) Explain 8255 PPI in detail. Differentiate between 8255 and Mode 0. **[7]**

**Q5.** *(Unit 5)*

(a) Define Multiplexed Display. Explain its role in Display & Keyboard Interfacing with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Stepper Motor & Traffic Light Control. Bring out the significance of Stepper Motor and Step Sequence. **[7]**

**Q6.** *(Unit 2)*

(a) Define Immediate Addressing. Explain its role in Addressing Modes of 8085 with a suitable example or diagram. **[7]**

(b) Explain Data Transfer & Arithmetic Instructions in detail. Differentiate between MOV and ADD. **[7]**

**Q7.** *(Unit 4)*

(a) Define Mode 0. Explain its role in 8255 PPI with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss 8253/8254 Timer & 8259 PIC. Bring out the significance of 8253 and 8259. **[7]**

**Q8.** *(Unit 1)*

(a) Define Opcode Fetch. Explain its role in Timing Diagrams with a suitable example or diagram. **[7]**

(b) Explain 8085 Interrupts in detail. Differentiate between TRAP and RST 7.5. **[7]**

## Answer Hints (Set A)

- **Q1(a):** 8085: 8-bit processor, 16-bit address bus, 64 KB addressable memory
- **Q1(b):** AD0-AD7: multiplexed lower address and data bus | ALE: address latch enable to demultiplex AD lines | IO/M Signal: distinguishes I/O from memory operation
- **Q2(a):** ADD: adds register to accumulator
- **Q2(b):** CMP: compares register with accumulator setting flags | JNZ: jump if zero flag is reset | HLT: halts the processor
- **Q3(a):** MUL and DIV: unsigned multiply and divide
- **Q3(b):** Minimum Mode: single processor generating control signals | Maximum Mode: multiprocessor mode using 8288 bus controller | 8087: math coprocessor for floating point
- **Q4(a):** 8257: DMA controller with four channels
- **Q4(b):** Memory-mapped I/O: devices addressed as memory locations | I/O-mapped I/O: separate I/O address space with IN and OUT | Address Decoding: generating chip select from address lines
- **Q5(a):** DAC0808: 8-bit digital-to-analog converter
- **Q5(b):** 8279: keyboard and display controller | Key Debouncing: ignoring contact bounce | Multiplexed Display: digits lit one at a time rapidly
- **Q6(a):** INTR: non-vectored interrupt acknowledged with INTA
- **Q6(b):** 8085: 8-bit processor, 16-bit address bus, 64 KB addressable memory | Accumulator: 8-bit register A used in arithmetic and logic | Flag Register: S, Z, AC, P and CY status flags
- **Q7(a):** BIU: bus interface unit fetching instructions and data
- **Q7(b):** Physical Address: segment × 16 + offset | Segment Registers: CS, DS, SS and ES | 1 MB Address Space: 20-bit address bus
- **Q8(a):** Key Debouncing: ignoring contact bounce
- **Q8(b):** Stepper Motor: motor moving in fixed angle steps | Step Sequence: pattern of coil energisation | Traffic Light Controller: timed output sequence driving lamps

## Recommended Books

- *Microprocessor Architecture, Programming and Applications with the 8085* — Ramesh Gaonkar
- *Microprocessors and Interfacing* — Douglas V. Hall
- *Advanced Microprocessors and Peripherals* — A. K. Ray & K. M. Bhurchandi
