# CS-304 Digital Systems — Unit-wise Study Notes

> Number systems, Boolean algebra, combinational and sequential circuits, logic families and A/D conversion.

## Unit 1: Number Systems & Codes

### Number Systems & Conversion

Digital systems use binary but humans read decimal, octal and hex.

- **Binary:** base-2 system with digits 0 and 1
- **Hexadecimal:** base-16 system using 0-9 and A-F; one digit = 4 bits
- **Radix Conversion:** repeated division for integers, repeated multiplication for fractions

### Complements & Signed Arithmetic

Complements let subtraction be done by addition.

- **1's Complement:** invert every bit
- **2's Complement:** 1's complement plus 1; standard signed representation
- **Overflow:** result exceeds the range representable in n bits

### Binary Codes

Codes represent decimal digits and characters.

- **BCD:** each decimal digit encoded as 4 bits
- **Gray Code:** successive values differ in only one bit
- **Excess-3 Code:** BCD value plus 3; self-complementing

### Error Detecting & Correcting Codes

Extra bits detect or correct transmission errors.

- **Parity Bit:** bit added to make the count of 1s even or odd
- **Hamming Code:** places parity bits at powers of 2 to correct single-bit errors
- **Hamming Distance:** number of bit positions in which two codewords differ

## Unit 2: Boolean Algebra & Minimisation

### Boolean Laws & Theorems

Boolean algebra manipulates logic expressions.

- **De Morgan's Theorem:** (A + B)' = A'·B' and (A·B)' = A' + B'
- **Absorption Law:** A + A·B = A
- **Duality Principle:** swapping + with · and 0 with 1 gives another valid identity

### Logic Gates & Universal Gates

Gates implement Boolean functions in hardware.

- **NAND Gate:** universal gate; output 0 only when all inputs are 1
- **XOR Gate:** output 1 when inputs differ
- **Universal Gate:** gate from which any Boolean function can be built

### SOP, POS & Canonical Forms

Functions are expressed as sums of products or products of sums.

- **Minterm:** product term containing every variable once
- **Maxterm:** sum term containing every variable once
- **Canonical SOP:** function written as a sum of its minterms

### K-Map & Quine-McCluskey

Graphical and tabular methods minimise logic.

- **Karnaugh Map:** grid of cells in Gray-code order for grouping adjacent 1s
- **Don't Care:** input combination whose output does not matter; may be grouped
- **Prime Implicant:** group that cannot be combined into a larger group

## Unit 3: Combinational Circuits

### Adders & Subtractors

Arithmetic circuits add and subtract binary numbers.

- **Half Adder:** adds two bits; Sum = A ⊕ B, Carry = A·B
- **Full Adder:** adds three bits including carry-in
- **Carry Look-ahead Adder:** computes carries in parallel to cut propagation delay

### Multiplexers & Demultiplexers

Data selectors route one of many inputs to an output.

- **Multiplexer:** selects one of 2^n inputs using n select lines
- **Demultiplexer:** sends one input to one of many outputs
- **MUX as Function Generator:** any n-variable function realised with a 2^n:1 MUX

### Decoders, Encoders & Comparators

Code converters and comparators support addressing and decisions.

- **Decoder:** n inputs activate one of 2^n outputs
- **Priority Encoder:** outputs the code of the highest-priority active input
- **Magnitude Comparator:** outputs A > B, A = B or A < B

### Code Converters & Parity Generators

Combinational logic converts codes and checks integrity.

- **Binary to Gray Converter:** G(n) = B(n) and G(i) = B(i+1) ⊕ B(i)
- **BCD to 7-Segment Decoder:** drives display segments a-g from a BCD digit
- **Parity Generator:** XOR tree producing an even or odd parity bit

## Unit 4: Sequential Circuits

### Latches & Flip-Flops

Sequential elements store one bit of state.

- **SR Latch:** basic memory element; S = R = 1 is the forbidden state
- **JK Flip-Flop:** J = K = 1 toggles the output
- **D Flip-Flop:** output follows D at the clock edge

### Flip-Flop Conversion & Timing

Characteristic and excitation tables convert one flip-flop into another.

- **Excitation Table:** required inputs for each present-to-next state transition
- **Setup Time:** minimum time input must be stable before the clock edge
- **Race-around Condition:** JK output toggles repeatedly when clock pulse is too long

### Registers & Shift Registers

Groups of flip-flops store and move multi-bit data.

- **SISO Register:** serial-in serial-out shift register
- **PIPO Register:** parallel-in parallel-out register
- **Ring Counter:** shift register with output fed back to input

### Counters

Counters step through a defined sequence of states.

- **Asynchronous Counter:** ripple counter where each flip-flop clocks the next
- **Synchronous Counter:** all flip-flops share a common clock
- **Mod-N Counter:** counter that resets after N states

## Unit 5: Logic Families & Converters

### Logic Family Characteristics

Families are compared by speed, power and noise immunity.

- **Fan-out:** number of gate inputs one output can drive reliably
- **Propagation Delay:** time between input change and output change
- **Noise Margin:** tolerance to unwanted voltage on logic levels

### TTL, ECL & CMOS

Different transistor technologies implement logic gates.

- **TTL:** transistor-transistor logic; fast but higher power
- **ECL:** emitter-coupled logic; fastest because transistors never saturate
- **CMOS:** complementary MOS; very low static power consumption

### Digital-to-Analog Converters

DACs convert digital codes into proportional voltages.

- **Weighted Resistor DAC:** resistors in binary-weighted ratios
- **R-2R Ladder DAC:** uses only two resistor values; easy to fabricate
- **DAC Resolution:** smallest output step, Vref/2^n

### Analog-to-Digital Converters

ADCs sample and quantise analog signals.

- **Flash ADC:** fastest ADC using 2^n − 1 comparators
- **Successive Approximation ADC:** binary search on the input; n clock cycles
- **Quantisation Error:** difference between analog value and its digital level

## Standard Textbooks

- *Digital Design* — M. Morris Mano
- *Modern Digital Electronics* — R. P. Jain
- *Digital Principles and Applications* — Malvino & Leach

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
