# CS-304 Digital Systems — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: CSE Sem 3: CS-304 · IT Sem 3: CSIT-304.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Binary. Explain its role in Number Systems & Conversion with a suitable example or diagram. **[7]**

(b) Explain Complements & Signed Arithmetic in detail. Differentiate between 1's Complement and 2's Complement. **[7]**

**Q2.** *(Unit 2)*

(a) Define XOR Gate. Explain its role in Logic Gates & Universal Gates with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss SOP, POS & Canonical Forms. Bring out the significance of Minterm and Maxterm. **[7]**

**Q3.** *(Unit 3)*

(a) Define Magnitude Comparator. Explain its role in Decoders, Encoders & Comparators with a suitable example or diagram. **[7]**

(b) Explain Code Converters & Parity Generators in detail. Differentiate between Binary to Gray Converter and BCD to 7-Segment Decoder. **[7]**

**Q4.** *(Unit 4)*

(a) Define Asynchronous Counter. Explain its role in Counters with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Latches & Flip-Flops. Bring out the significance of SR Latch and JK Flip-Flop. **[7]**

**Q5.** *(Unit 5)*

(a) Define Propagation Delay. Explain its role in Logic Family Characteristics with a suitable example or diagram. **[7]**

(b) Explain TTL, ECL & CMOS in detail. Differentiate between TTL and ECL. **[7]**

**Q6.** *(Unit 1)*

(a) Define Hamming Distance. Explain its role in Error Detecting & Correcting Codes with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Number Systems & Conversion. Bring out the significance of Binary and Hexadecimal. **[7]**

**Q7.** *(Unit 3)*

(a) Define Half Adder. Explain its role in Adders & Subtractors with a suitable example or diagram. **[7]**

(b) Explain Multiplexers & Demultiplexers in detail. Differentiate between Multiplexer and Demultiplexer. **[7]**

**Q8.** *(Unit 5)*

(a) Define ECL. Explain its role in TTL, ECL & CMOS with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Digital-to-Analog Converters. Bring out the significance of Weighted Resistor DAC and R-2R Ladder DAC. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define 2's Complement. Explain its role in Complements & Signed Arithmetic with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Binary Codes. Bring out the significance of BCD and Gray Code. **[7]**

**Q2.** *(Unit 2)*

(a) Define Canonical SOP. Explain its role in SOP, POS & Canonical Forms with a suitable example or diagram. **[7]**

(b) Explain K-Map & Quine-McCluskey in detail. Differentiate between Karnaugh Map and Don't Care. **[7]**

**Q3.** *(Unit 3)*

(a) Define Binary to Gray Converter. Explain its role in Code Converters & Parity Generators with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Adders & Subtractors. Bring out the significance of Half Adder and Full Adder. **[7]**

**Q4.** *(Unit 4)*

(a) Define JK Flip-Flop. Explain its role in Latches & Flip-Flops with a suitable example or diagram. **[7]**

(b) Explain Flip-Flop Conversion & Timing in detail. Differentiate between Excitation Table and Setup Time. **[7]**

**Q5.** *(Unit 5)*

(a) Define CMOS. Explain its role in TTL, ECL & CMOS with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Digital-to-Analog Converters. Bring out the significance of Weighted Resistor DAC and R-2R Ladder DAC. **[7]**

**Q6.** *(Unit 2)*

(a) Define De Morgan's Theorem. Explain its role in Boolean Laws & Theorems with a suitable example or diagram. **[7]**

(b) Explain Logic Gates & Universal Gates in detail. Differentiate between NAND Gate and XOR Gate. **[7]**

**Q7.** *(Unit 4)*

(a) Define Setup Time. Explain its role in Flip-Flop Conversion & Timing with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Registers & Shift Registers. Bring out the significance of SISO Register and PIPO Register. **[7]**

**Q8.** *(Unit 1)*

(a) Define Excess-3 Code. Explain its role in Binary Codes with a suitable example or diagram. **[7]**

(b) Explain Error Detecting & Correcting Codes in detail. Differentiate between Parity Bit and Hamming Code. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Binary: base-2 system with digits 0 and 1
- **Q1(b):** 1's Complement: invert every bit | 2's Complement: 1's complement plus 1; standard signed representation | Overflow: result exceeds the range representable in n bits
- **Q2(a):** XOR Gate: output 1 when inputs differ
- **Q2(b):** Minterm: product term containing every variable once | Maxterm: sum term containing every variable once | Canonical SOP: function written as a sum of its minterms
- **Q3(a):** Magnitude Comparator: outputs A > B, A = B or A < B
- **Q3(b):** Binary to Gray Converter: G(n) = B(n) and G(i) = B(i+1) ⊕ B(i) | BCD to 7-Segment Decoder: drives display segments a-g from a BCD digit | Parity Generator: XOR tree producing an even or odd parity bit
- **Q4(a):** Asynchronous Counter: ripple counter where each flip-flop clocks the next
- **Q4(b):** SR Latch: basic memory element; S = R = 1 is the forbidden state | JK Flip-Flop: J = K = 1 toggles the output | D Flip-Flop: output follows D at the clock edge
- **Q5(a):** Propagation Delay: time between input change and output change
- **Q5(b):** TTL: transistor-transistor logic; fast but higher power | ECL: emitter-coupled logic; fastest because transistors never saturate | CMOS: complementary MOS; very low static power consumption
- **Q6(a):** Hamming Distance: number of bit positions in which two codewords differ
- **Q6(b):** Binary: base-2 system with digits 0 and 1 | Hexadecimal: base-16 system using 0-9 and A-F; one digit = 4 bits | Radix Conversion: repeated division for integers, repeated multiplication for fractions
- **Q7(a):** Half Adder: adds two bits; Sum = A ⊕ B, Carry = A·B
- **Q7(b):** Multiplexer: selects one of 2^n inputs using n select lines | Demultiplexer: sends one input to one of many outputs | MUX as Function Generator: any n-variable function realised with a 2^n:1 MUX
- **Q8(a):** ECL: emitter-coupled logic; fastest because transistors never saturate
- **Q8(b):** Weighted Resistor DAC: resistors in binary-weighted ratios | R-2R Ladder DAC: uses only two resistor values; easy to fabricate | DAC Resolution: smallest output step, Vref/2^n

## Recommended Books

- *Digital Design* — M. Morris Mano
- *Modern Digital Electronics* — R. P. Jain
- *Digital Principles and Applications* — Malvino & Leach
