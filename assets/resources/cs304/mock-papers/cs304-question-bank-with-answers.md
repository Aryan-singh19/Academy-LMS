# CS-304 Digital Systems — Question Bank with Answer Hints

## Unit 1: Number Systems & Codes

### Short answer (2-3 marks)

- **Q.** Define *Binary*.  
  **Ans.** base-2 system with digits 0 and 1
- **Q.** Define *Hexadecimal*.  
  **Ans.** base-16 system using 0-9 and A-F; one digit = 4 bits
- **Q.** Define *Radix Conversion*.  
  **Ans.** repeated division for integers, repeated multiplication for fractions
- **Q.** Define *1's Complement*.  
  **Ans.** invert every bit
- **Q.** Define *2's Complement*.  
  **Ans.** 1's complement plus 1; standard signed representation
- **Q.** Define *Overflow*.  
  **Ans.** result exceeds the range representable in n bits
- **Q.** Define *BCD*.  
  **Ans.** each decimal digit encoded as 4 bits
- **Q.** Define *Gray Code*.  
  **Ans.** successive values differ in only one bit
- **Q.** Define *Excess-3 Code*.  
  **Ans.** BCD value plus 3; self-complementing
- **Q.** Define *Parity Bit*.  
  **Ans.** bit added to make the count of 1s even or odd
- **Q.** Define *Hamming Code*.  
  **Ans.** places parity bits at powers of 2 to correct single-bit errors
- **Q.** Define *Hamming Distance*.  
  **Ans.** number of bit positions in which two codewords differ

### Long answer (7 marks)

- **Q.** Explain *Number Systems & Conversion* in detail with a neat diagram.  
  **Key points:** Digital systems use binary but humans read decimal, octal and hex. Binary — base-2 system with digits 0 and 1; Hexadecimal — base-16 system using 0-9 and A-F; one digit = 4 bits; Radix Conversion — repeated division for integers, repeated multiplication for fractions.
- **Q.** Explain *Complements & Signed Arithmetic* in detail with a neat diagram.  
  **Key points:** Complements let subtraction be done by addition. 1's Complement — invert every bit; 2's Complement — 1's complement plus 1; standard signed representation; Overflow — result exceeds the range representable in n bits.
- **Q.** Explain *Binary Codes* in detail with a neat diagram.  
  **Key points:** Codes represent decimal digits and characters. BCD — each decimal digit encoded as 4 bits; Gray Code — successive values differ in only one bit; Excess-3 Code — BCD value plus 3; self-complementing.
- **Q.** Explain *Error Detecting & Correcting Codes* in detail with a neat diagram.  
  **Key points:** Extra bits detect or correct transmission errors. Parity Bit — bit added to make the count of 1s even or odd; Hamming Code — places parity bits at powers of 2 to correct single-bit errors; Hamming Distance — number of bit positions in which two codewords differ.

## Unit 2: Boolean Algebra & Minimisation

### Short answer (2-3 marks)

- **Q.** Define *De Morgan's Theorem*.  
  **Ans.** (A + B)' = A'·B' and (A·B)' = A' + B'
- **Q.** Define *Absorption Law*.  
  **Ans.** A + A·B = A
- **Q.** Define *Duality Principle*.  
  **Ans.** swapping + with · and 0 with 1 gives another valid identity
- **Q.** Define *NAND Gate*.  
  **Ans.** universal gate; output 0 only when all inputs are 1
- **Q.** Define *XOR Gate*.  
  **Ans.** output 1 when inputs differ
- **Q.** Define *Universal Gate*.  
  **Ans.** gate from which any Boolean function can be built
- **Q.** Define *Minterm*.  
  **Ans.** product term containing every variable once
- **Q.** Define *Maxterm*.  
  **Ans.** sum term containing every variable once
- **Q.** Define *Canonical SOP*.  
  **Ans.** function written as a sum of its minterms
- **Q.** Define *Karnaugh Map*.  
  **Ans.** grid of cells in Gray-code order for grouping adjacent 1s
- **Q.** Define *Don't Care*.  
  **Ans.** input combination whose output does not matter; may be grouped
- **Q.** Define *Prime Implicant*.  
  **Ans.** group that cannot be combined into a larger group

### Long answer (7 marks)

- **Q.** Explain *Boolean Laws & Theorems* in detail with a neat diagram.  
  **Key points:** Boolean algebra manipulates logic expressions. De Morgan's Theorem — (A + B)' = A'·B' and (A·B)' = A' + B'; Absorption Law — A + A·B = A; Duality Principle — swapping + with · and 0 with 1 gives another valid identity.
- **Q.** Explain *Logic Gates & Universal Gates* in detail with a neat diagram.  
  **Key points:** Gates implement Boolean functions in hardware. NAND Gate — universal gate; output 0 only when all inputs are 1; XOR Gate — output 1 when inputs differ; Universal Gate — gate from which any Boolean function can be built.
- **Q.** Explain *SOP, POS & Canonical Forms* in detail with a neat diagram.  
  **Key points:** Functions are expressed as sums of products or products of sums. Minterm — product term containing every variable once; Maxterm — sum term containing every variable once; Canonical SOP — function written as a sum of its minterms.
- **Q.** Explain *K-Map & Quine-McCluskey* in detail with a neat diagram.  
  **Key points:** Graphical and tabular methods minimise logic. Karnaugh Map — grid of cells in Gray-code order for grouping adjacent 1s; Don't Care — input combination whose output does not matter; may be grouped; Prime Implicant — group that cannot be combined into a larger group.

## Unit 3: Combinational Circuits

### Short answer (2-3 marks)

- **Q.** Define *Half Adder*.  
  **Ans.** adds two bits; Sum = A ⊕ B, Carry = A·B
- **Q.** Define *Full Adder*.  
  **Ans.** adds three bits including carry-in
- **Q.** Define *Carry Look-ahead Adder*.  
  **Ans.** computes carries in parallel to cut propagation delay
- **Q.** Define *Multiplexer*.  
  **Ans.** selects one of 2^n inputs using n select lines
- **Q.** Define *Demultiplexer*.  
  **Ans.** sends one input to one of many outputs
- **Q.** Define *MUX as Function Generator*.  
  **Ans.** any n-variable function realised with a 2^n:1 MUX
- **Q.** Define *Decoder*.  
  **Ans.** n inputs activate one of 2^n outputs
- **Q.** Define *Priority Encoder*.  
  **Ans.** outputs the code of the highest-priority active input
- **Q.** Define *Magnitude Comparator*.  
  **Ans.** outputs A > B, A = B or A < B
- **Q.** Define *Binary to Gray Converter*.  
  **Ans.** G(n) = B(n) and G(i) = B(i+1) ⊕ B(i)
- **Q.** Define *BCD to 7-Segment Decoder*.  
  **Ans.** drives display segments a-g from a BCD digit
- **Q.** Define *Parity Generator*.  
  **Ans.** XOR tree producing an even or odd parity bit

### Long answer (7 marks)

- **Q.** Explain *Adders & Subtractors* in detail with a neat diagram.  
  **Key points:** Arithmetic circuits add and subtract binary numbers. Half Adder — adds two bits; Sum = A ⊕ B, Carry = A·B; Full Adder — adds three bits including carry-in; Carry Look-ahead Adder — computes carries in parallel to cut propagation delay.
- **Q.** Explain *Multiplexers & Demultiplexers* in detail with a neat diagram.  
  **Key points:** Data selectors route one of many inputs to an output. Multiplexer — selects one of 2^n inputs using n select lines; Demultiplexer — sends one input to one of many outputs; MUX as Function Generator — any n-variable function realised with a 2^n:1 MUX.
- **Q.** Explain *Decoders, Encoders & Comparators* in detail with a neat diagram.  
  **Key points:** Code converters and comparators support addressing and decisions. Decoder — n inputs activate one of 2^n outputs; Priority Encoder — outputs the code of the highest-priority active input; Magnitude Comparator — outputs A > B, A = B or A < B.
- **Q.** Explain *Code Converters & Parity Generators* in detail with a neat diagram.  
  **Key points:** Combinational logic converts codes and checks integrity. Binary to Gray Converter — G(n) = B(n) and G(i) = B(i+1) ⊕ B(i); BCD to 7-Segment Decoder — drives display segments a-g from a BCD digit; Parity Generator — XOR tree producing an even or odd parity bit.

## Unit 4: Sequential Circuits

### Short answer (2-3 marks)

- **Q.** Define *SR Latch*.  
  **Ans.** basic memory element; S = R = 1 is the forbidden state
- **Q.** Define *JK Flip-Flop*.  
  **Ans.** J = K = 1 toggles the output
- **Q.** Define *D Flip-Flop*.  
  **Ans.** output follows D at the clock edge
- **Q.** Define *Excitation Table*.  
  **Ans.** required inputs for each present-to-next state transition
- **Q.** Define *Setup Time*.  
  **Ans.** minimum time input must be stable before the clock edge
- **Q.** Define *Race-around Condition*.  
  **Ans.** JK output toggles repeatedly when clock pulse is too long
- **Q.** Define *SISO Register*.  
  **Ans.** serial-in serial-out shift register
- **Q.** Define *PIPO Register*.  
  **Ans.** parallel-in parallel-out register
- **Q.** Define *Ring Counter*.  
  **Ans.** shift register with output fed back to input
- **Q.** Define *Asynchronous Counter*.  
  **Ans.** ripple counter where each flip-flop clocks the next
- **Q.** Define *Synchronous Counter*.  
  **Ans.** all flip-flops share a common clock
- **Q.** Define *Mod-N Counter*.  
  **Ans.** counter that resets after N states

### Long answer (7 marks)

- **Q.** Explain *Latches & Flip-Flops* in detail with a neat diagram.  
  **Key points:** Sequential elements store one bit of state. SR Latch — basic memory element; S = R = 1 is the forbidden state; JK Flip-Flop — J = K = 1 toggles the output; D Flip-Flop — output follows D at the clock edge.
- **Q.** Explain *Flip-Flop Conversion & Timing* in detail with a neat diagram.  
  **Key points:** Characteristic and excitation tables convert one flip-flop into another. Excitation Table — required inputs for each present-to-next state transition; Setup Time — minimum time input must be stable before the clock edge; Race-around Condition — JK output toggles repeatedly when clock pulse is too long.
- **Q.** Explain *Registers & Shift Registers* in detail with a neat diagram.  
  **Key points:** Groups of flip-flops store and move multi-bit data. SISO Register — serial-in serial-out shift register; PIPO Register — parallel-in parallel-out register; Ring Counter — shift register with output fed back to input.
- **Q.** Explain *Counters* in detail with a neat diagram.  
  **Key points:** Counters step through a defined sequence of states. Asynchronous Counter — ripple counter where each flip-flop clocks the next; Synchronous Counter — all flip-flops share a common clock; Mod-N Counter — counter that resets after N states.

## Unit 5: Logic Families & Converters

### Short answer (2-3 marks)

- **Q.** Define *Fan-out*.  
  **Ans.** number of gate inputs one output can drive reliably
- **Q.** Define *Propagation Delay*.  
  **Ans.** time between input change and output change
- **Q.** Define *Noise Margin*.  
  **Ans.** tolerance to unwanted voltage on logic levels
- **Q.** Define *TTL*.  
  **Ans.** transistor-transistor logic; fast but higher power
- **Q.** Define *ECL*.  
  **Ans.** emitter-coupled logic; fastest because transistors never saturate
- **Q.** Define *CMOS*.  
  **Ans.** complementary MOS; very low static power consumption
- **Q.** Define *Weighted Resistor DAC*.  
  **Ans.** resistors in binary-weighted ratios
- **Q.** Define *R-2R Ladder DAC*.  
  **Ans.** uses only two resistor values; easy to fabricate
- **Q.** Define *DAC Resolution*.  
  **Ans.** smallest output step, Vref/2^n
- **Q.** Define *Flash ADC*.  
  **Ans.** fastest ADC using 2^n − 1 comparators
- **Q.** Define *Successive Approximation ADC*.  
  **Ans.** binary search on the input; n clock cycles
- **Q.** Define *Quantisation Error*.  
  **Ans.** difference between analog value and its digital level

### Long answer (7 marks)

- **Q.** Explain *Logic Family Characteristics* in detail with a neat diagram.  
  **Key points:** Families are compared by speed, power and noise immunity. Fan-out — number of gate inputs one output can drive reliably; Propagation Delay — time between input change and output change; Noise Margin — tolerance to unwanted voltage on logic levels.
- **Q.** Explain *TTL, ECL & CMOS* in detail with a neat diagram.  
  **Key points:** Different transistor technologies implement logic gates. TTL — transistor-transistor logic; fast but higher power; ECL — emitter-coupled logic; fastest because transistors never saturate; CMOS — complementary MOS; very low static power consumption.
- **Q.** Explain *Digital-to-Analog Converters* in detail with a neat diagram.  
  **Key points:** DACs convert digital codes into proportional voltages. Weighted Resistor DAC — resistors in binary-weighted ratios; R-2R Ladder DAC — uses only two resistor values; easy to fabricate; DAC Resolution — smallest output step, Vref/2^n.
- **Q.** Explain *Analog-to-Digital Converters* in detail with a neat diagram.  
  **Key points:** ADCs sample and quantise analog signals. Flash ADC — fastest ADC using 2^n − 1 comparators; Successive Approximation ADC — binary search on the input; n clock cycles; Quantisation Error — difference between analog value and its digital level.

