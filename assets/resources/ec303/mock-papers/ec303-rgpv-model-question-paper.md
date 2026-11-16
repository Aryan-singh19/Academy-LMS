# EC-303 Digital System Design — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: ECE Sem 3: EC-303.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Consensus Theorem. Explain its role in Boolean Algebra Review with a suitable example or diagram. **[7]**

(b) Explain K-Map Minimisation in detail. Differentiate between Karnaugh Map and Essential Prime Implicant. **[7]**

**Q2.** *(Unit 2)*

(a) Define Function Implementation with MUX. Explain its role in MUX & DEMUX Design with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Decoders & Encoders. Bring out the significance of Decoder and Priority Encoder. **[7]**

**Q3.** *(Unit 3)*

(a) Define Serial-to-parallel Conversion. Explain its role in Shift Registers with a suitable example or diagram. **[7]**

(b) Explain Timing & Clocking in detail. Differentiate between Setup Time and Hold Time. **[7]**

**Q4.** *(Unit 4)*

(a) Define Fundamental Mode. Explain its role in Asynchronous Sequential Circuits with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Mealy & Moore Machines. Bring out the significance of Moore Machine and Mealy Machine. **[7]**

**Q5.** *(Unit 5)*

(a) Define SRAM. Explain its role in Semiconductor Memories with a suitable example or diagram. **[7]**

(b) Explain Programmable Logic Devices in detail. Differentiate between PLA and PAL. **[7]**

**Q6.** *(Unit 1)*

(a) Define Hazard Cover. Explain its role in Hazards in Combinational Circuits with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Boolean Algebra Review. Bring out the significance of Consensus Theorem and De Morgan's Theorem. **[7]**

**Q7.** *(Unit 3)*

(a) Define JK Flip-Flop. Explain its role in Flip-Flops with a suitable example or diagram. **[7]**

(b) Explain Counters in detail. Differentiate between Ripple Counter and Synchronous Counter. **[7]**

**Q8.** *(Unit 5)*

(a) Define PAL. Explain its role in Programmable Logic Devices with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Logic Families. Bring out the significance of TTL and CMOS. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Essential Prime Implicant. Explain its role in K-Map Minimisation with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Quine-McCluskey Method. Bring out the significance of Quine-McCluskey and Prime Implicant Chart. **[7]**

**Q2.** *(Unit 2)*

(a) Define 7-Segment Decoder. Explain its role in Decoders & Encoders with a suitable example or diagram. **[7]**

(b) Explain Comparators & ALU Design in detail. Differentiate between Magnitude Comparator and 74181 ALU. **[7]**

**Q3.** *(Unit 3)*

(a) Define Setup Time. Explain its role in Timing & Clocking with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Flip-Flops. Bring out the significance of JK Flip-Flop and T Flip-Flop. **[7]**

**Q4.** *(Unit 4)*

(a) Define Mealy Machine. Explain its role in Mealy & Moore Machines with a suitable example or diagram. **[7]**

(b) Explain State Reduction & Assignment in detail. Differentiate between Equivalent States and State Assignment. **[7]**

**Q5.** *(Unit 5)*

(a) Define FPGA. Explain its role in Programmable Logic Devices with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Logic Families. Bring out the significance of TTL and CMOS. **[7]**

**Q6.** *(Unit 2)*

(a) Define Full Adder. Explain its role in Arithmetic Circuits with a suitable example or diagram. **[7]**

(b) Explain MUX & DEMUX Design in detail. Differentiate between Multiplexer and Function Implementation with MUX. **[7]**

**Q7.** *(Unit 4)*

(a) Define State Assignment. Explain its role in State Reduction & Assignment with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Sequence Detector Design. Bring out the significance of Sequence Detector and Overlapping Detection. **[7]**

**Q8.** *(Unit 1)*

(a) Define Petrick's Method. Explain its role in Quine-McCluskey Method with a suitable example or diagram. **[7]**

(b) Explain Hazards in Combinational Circuits in detail. Differentiate between Static Hazard and Dynamic Hazard. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Consensus Theorem: AB + A'C + BC = AB + A'C
- **Q1(b):** Karnaugh Map: Gray-ordered grid for grouping 1s | Essential Prime Implicant: prime implicant covering a minterm no other covers | Don't-care Condition: unspecified output usable for larger groups
- **Q2(a):** Function Implementation with MUX: n-variable function on 2^(n−1):1 MUX
- **Q2(b):** Decoder: activates one of 2^n outputs | Priority Encoder: encodes the highest-priority active input | 7-Segment Decoder: drives display segments from a BCD input
- **Q3(a):** Serial-to-parallel Conversion: data shifted in serially and read in parallel
- **Q3(b):** Setup Time: input stable before clock edge | Hold Time: input stable after clock edge | Clock Skew: arrival time difference of the clock at different flip-flops
- **Q4(a):** Fundamental Mode: only one input changes at a time
- **Q4(b):** Moore Machine: outputs depend only on present state | Mealy Machine: outputs depend on present state and inputs | State Diagram: graph of states and transitions
- **Q5(a):** SRAM: static RAM using flip-flops
- **Q5(b):** PLA: programmable AND and OR arrays | PAL: programmable AND array with fixed OR array | FPGA: array of configurable logic blocks and interconnects
- **Q6(a):** Hazard Cover: adding redundant terms to remove static hazards
- **Q6(b):** Consensus Theorem: AB + A'C + BC = AB + A'C | De Morgan's Theorem: complement of a sum is the product of complements | Duality: interchanging AND/OR and 0/1 gives a valid identity
- **Q7(a):** JK Flip-Flop: J = K = 1 toggles the state
- **Q7(b):** Ripple Counter: asynchronous counter with cumulative delay | Synchronous Counter: all flip-flops clocked together | Johnson Counter: twisted ring counter with 2n states
- **Q8(a):** PAL: programmable AND array with fixed OR array
- **Q8(b):** TTL: bipolar logic family, 74 series | CMOS: complementary MOS with very low static power | Fan-out: number of loads an output can drive

## Recommended Books

- *Digital Design* — M. Morris Mano
- *Fundamentals of Logic Design* — Charles H. Roth
- *Modern Digital Electronics* — R. P. Jain
