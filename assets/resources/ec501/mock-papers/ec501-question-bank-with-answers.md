# EC-501 Microprocessor & Its Applications — Question Bank with Answer Hints

## Unit 1: 8085 Microprocessor

### Short answer (2-3 marks)

- **Q.** Define *8085*.  
  **Ans.** 8-bit processor, 16-bit address bus, 64 KB addressable memory
- **Q.** Define *Accumulator*.  
  **Ans.** 8-bit register A used in arithmetic and logic
- **Q.** Define *Flag Register*.  
  **Ans.** S, Z, AC, P and CY status flags
- **Q.** Define *AD0-AD7*.  
  **Ans.** multiplexed lower address and data bus
- **Q.** Define *ALE*.  
  **Ans.** address latch enable to demultiplex AD lines
- **Q.** Define *IO/M Signal*.  
  **Ans.** distinguishes I/O from memory operation
- **Q.** Define *Machine Cycle*.  
  **Ans.** basic operation such as opcode fetch or memory read
- **Q.** Define *T-state*.  
  **Ans.** one clock period
- **Q.** Define *Opcode Fetch*.  
  **Ans.** takes 4 T-states in 8085
- **Q.** Define *TRAP*.  
  **Ans.** non-maskable highest-priority interrupt
- **Q.** Define *RST 7.5*.  
  **Ans.** maskable vectored interrupt, edge triggered
- **Q.** Define *INTR*.  
  **Ans.** non-vectored interrupt acknowledged with INTA

### Long answer (7 marks)

- **Q.** Explain *8085 Architecture* in detail with a neat diagram.  
  **Key points:** The 8085 is an 8-bit microprocessor with a 16-bit address bus. 8085 — 8-bit processor, 16-bit address bus, 64 KB addressable memory; Accumulator — 8-bit register A used in arithmetic and logic; Flag Register — S, Z, AC, P and CY status flags.
- **Q.** Explain *8085 Pin Diagram & Buses* in detail with a neat diagram.  
  **Key points:** Multiplexed buses save pins. AD0-AD7 — multiplexed lower address and data bus; ALE — address latch enable to demultiplex AD lines; IO/M Signal — distinguishes I/O from memory operation.
- **Q.** Explain *Timing Diagrams* in detail with a neat diagram.  
  **Key points:** Instructions are executed in machine cycles. Machine Cycle — basic operation such as opcode fetch or memory read; T-state — one clock period; Opcode Fetch — takes 4 T-states in 8085.
- **Q.** Explain *8085 Interrupts* in detail with a neat diagram.  
  **Key points:** Interrupts let devices request service. TRAP — non-maskable highest-priority interrupt; RST 7.5 — maskable vectored interrupt, edge triggered; INTR — non-vectored interrupt acknowledged with INTA.

## Unit 2: 8085 Instruction Set & Programming

### Short answer (2-3 marks)

- **Q.** Define *Immediate Addressing*.  
  **Ans.** data in the instruction, e.g. MVI A, 32H
- **Q.** Define *Register Indirect*.  
  **Ans.** memory addressed by a register pair, e.g. MOV A, M
- **Q.** Define *Direct Addressing*.  
  **Ans.** address in the instruction, e.g. LDA 2000H
- **Q.** Define *MOV*.  
  **Ans.** copies data between registers
- **Q.** Define *ADD*.  
  **Ans.** adds register to accumulator
- **Q.** Define *DAA*.  
  **Ans.** decimal adjust accumulator after BCD addition
- **Q.** Define *CMP*.  
  **Ans.** compares register with accumulator setting flags
- **Q.** Define *JNZ*.  
  **Ans.** jump if zero flag is reset
- **Q.** Define *HLT*.  
  **Ans.** halts the processor
- **Q.** Define *Stack Pointer*.  
  **Ans.** holds address of top of stack
- **Q.** Define *CALL and RET*.  
  **Ans.** enter and return from subroutines
- **Q.** Define *PUSH and POP*.  
  **Ans.** save and restore register pairs

### Long answer (7 marks)

- **Q.** Explain *Addressing Modes of 8085* in detail with a neat diagram.  
  **Key points:** Modes specify operand location. Immediate Addressing — data in the instruction, e.g. MVI A, 32H; Register Indirect — memory addressed by a register pair, e.g. MOV A, M; Direct Addressing — address in the instruction, e.g. LDA 2000H.
- **Q.** Explain *Data Transfer & Arithmetic Instructions* in detail with a neat diagram.  
  **Key points:** Instructions move and process data. MOV — copies data between registers; ADD — adds register to accumulator; DAA — decimal adjust accumulator after BCD addition.
- **Q.** Explain *Logical, Branch & Machine Control Instructions* in detail with a neat diagram.  
  **Key points:** Instructions test, jump and control the CPU. CMP — compares register with accumulator setting flags; JNZ — jump if zero flag is reset; HLT — halts the processor.
- **Q.** Explain *Stack & Subroutines* in detail with a neat diagram.  
  **Key points:** Stack supports calls and temporary storage. Stack Pointer — holds address of top of stack; CALL and RET — enter and return from subroutines; PUSH and POP — save and restore register pairs.

## Unit 3: 8086 Microprocessor

### Short answer (2-3 marks)

- **Q.** Define *BIU*.  
  **Ans.** bus interface unit fetching instructions and data
- **Q.** Define *EU*.  
  **Ans.** execution unit decoding and executing instructions
- **Q.** Define *Instruction Queue*.  
  **Ans.** 6-byte prefetch queue enabling pipelining
- **Q.** Define *Physical Address*.  
  **Ans.** segment × 16 + offset
- **Q.** Define *Segment Registers*.  
  **Ans.** CS, DS, SS and ES
- **Q.** Define *1 MB Address Space*.  
  **Ans.** 20-bit address bus
- **Q.** Define *Based Indexed Addressing*.  
  **Ans.** BX or BP plus SI or DI
- **Q.** Define *String Instructions*.  
  **Ans.** MOVSB, CMPSB with REP prefix
- **Q.** Define *MUL and DIV*.  
  **Ans.** unsigned multiply and divide
- **Q.** Define *Minimum Mode*.  
  **Ans.** single processor generating control signals
- **Q.** Define *Maximum Mode*.  
  **Ans.** multiprocessor mode using 8288 bus controller
- **Q.** Define *8087*.  
  **Ans.** math coprocessor for floating point

### Long answer (7 marks)

- **Q.** Explain *8086 Architecture* in detail with a neat diagram.  
  **Key points:** The 8086 is a 16-bit processor with pipelined units. BIU — bus interface unit fetching instructions and data; EU — execution unit decoding and executing instructions; Instruction Queue — 6-byte prefetch queue enabling pipelining.
- **Q.** Explain *Memory Segmentation* in detail with a neat diagram.  
  **Key points:** Segments let a 16-bit CPU address 1 MB. Physical Address — segment × 16 + offset; Segment Registers — CS, DS, SS and ES; 1 MB Address Space — 20-bit address bus.
- **Q.** Explain *8086 Addressing Modes & Instructions* in detail with a neat diagram.  
  **Key points:** 8086 supports rich addressing. Based Indexed Addressing — BX or BP plus SI or DI; String Instructions — MOVSB, CMPSB with REP prefix; MUL and DIV — unsigned multiply and divide.
- **Q.** Explain *Minimum & Maximum Mode* in detail with a neat diagram.  
  **Key points:** 8086 operates alone or with coprocessors. Minimum Mode — single processor generating control signals; Maximum Mode — multiprocessor mode using 8288 bus controller; 8087 — math coprocessor for floating point.

## Unit 4: Peripheral Interfacing

### Short answer (2-3 marks)

- **Q.** Define *Memory-mapped I/O*.  
  **Ans.** devices addressed as memory locations
- **Q.** Define *I/O-mapped I/O*.  
  **Ans.** separate I/O address space with IN and OUT
- **Q.** Define *Address Decoding*.  
  **Ans.** generating chip select from address lines
- **Q.** Define *8255*.  
  **Ans.** programmable peripheral interface with ports A, B and C
- **Q.** Define *Mode 0*.  
  **Ans.** simple input/output
- **Q.** Define *Control Word*.  
  **Ans.** byte configuring 8255 ports and modes
- **Q.** Define *8253*.  
  **Ans.** programmable interval timer with three 16-bit counters
- **Q.** Define *8259*.  
  **Ans.** programmable interrupt controller for 8 interrupts, cascadable to 64
- **Q.** Define *Priority Resolver*.  
  **Ans.** selects highest priority pending interrupt
- **Q.** Define *8257*.  
  **Ans.** DMA controller with four channels
- **Q.** Define *8251*.  
  **Ans.** USART for serial communication
- **Q.** Define *Baud Rate*.  
  **Ans.** number of signal changes per second

### Long answer (7 marks)

- **Q.** Explain *Memory & I/O Interfacing* in detail with a neat diagram.  
  **Key points:** Address decoding connects memory and ports. Memory-mapped I/O — devices addressed as memory locations; I/O-mapped I/O — separate I/O address space with IN and OUT; Address Decoding — generating chip select from address lines.
- **Q.** Explain *8255 PPI* in detail with a neat diagram.  
  **Key points:** Programmable peripheral interface provides parallel ports. 8255 — programmable peripheral interface with ports A, B and C; Mode 0 — simple input/output; Control Word — byte configuring 8255 ports and modes.
- **Q.** Explain *8253/8254 Timer & 8259 PIC* in detail with a neat diagram.  
  **Key points:** Timers and interrupt controllers support real-time tasks. 8253 — programmable interval timer with three 16-bit counters; 8259 — programmable interrupt controller for 8 interrupts, cascadable to 64; Priority Resolver — selects highest priority pending interrupt.
- **Q.** Explain *8257 DMA & 8251 USART* in detail with a neat diagram.  
  **Key points:** DMA and serial controllers handle data transfer. 8257 — DMA controller with four channels; 8251 — USART for serial communication; Baud Rate — number of signal changes per second.

## Unit 5: Applications & Microcontrollers

### Short answer (2-3 marks)

- **Q.** Define *ADC0808*.  
  **Ans.** 8-bit ADC with 8-channel multiplexer
- **Q.** Define *DAC0808*.  
  **Ans.** 8-bit digital-to-analog converter
- **Q.** Define *Start of Conversion*.  
  **Ans.** signal starting an ADC conversion
- **Q.** Define *8279*.  
  **Ans.** keyboard and display controller
- **Q.** Define *Key Debouncing*.  
  **Ans.** ignoring contact bounce
- **Q.** Define *Multiplexed Display*.  
  **Ans.** digits lit one at a time rapidly
- **Q.** Define *Stepper Motor*.  
  **Ans.** motor moving in fixed angle steps
- **Q.** Define *Step Sequence*.  
  **Ans.** pattern of coil energisation
- **Q.** Define *Traffic Light Controller*.  
  **Ans.** timed output sequence driving lamps
- **Q.** Define *8051*.  
  **Ans.** 8-bit microcontroller with 4 KB ROM and 128 bytes RAM
- **Q.** Define *Microcontroller vs Microprocessor*.  
  **Ans.** MCU integrates peripherals on chip
- **Q.** Define *SFR*.  
  **Ans.** special function registers controlling peripherals

### Long answer (7 marks)

- **Q.** Explain *ADC & DAC Interfacing* in detail with a neat diagram.  
  **Key points:** Microprocessors measure and generate analog signals. ADC0808 — 8-bit ADC with 8-channel multiplexer; DAC0808 — 8-bit digital-to-analog converter; Start of Conversion — signal starting an ADC conversion.
- **Q.** Explain *Display & Keyboard Interfacing* in detail with a neat diagram.  
  **Key points:** User I/O devices are scanned and driven. 8279 — keyboard and display controller; Key Debouncing — ignoring contact bounce; Multiplexed Display — digits lit one at a time rapidly.
- **Q.** Explain *Stepper Motor & Traffic Light Control* in detail with a neat diagram.  
  **Key points:** Typical lab applications. Stepper Motor — motor moving in fixed angle steps; Step Sequence — pattern of coil energisation; Traffic Light Controller — timed output sequence driving lamps.
- **Q.** Explain *Introduction to 8051 Microcontroller* in detail with a neat diagram.  
  **Key points:** Microcontrollers integrate CPU, memory and I/O. 8051 — 8-bit microcontroller with 4 KB ROM and 128 bytes RAM; Microcontroller vs Microprocessor — MCU integrates peripherals on chip; SFR — special function registers controlling peripherals.

