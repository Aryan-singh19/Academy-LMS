# EC-701 VLSI Design — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: ECE Sem 7: EC-701.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define NMOS. Explain its role in MOSFET Structure & Operation with a suitable example or diagram. **[7]**

(b) Explain I-V Characteristics in detail. Differentiate between Linear Region and Saturation Region. **[7]**

**Q2.** *(Unit 2)*

(a) Define Pull-up Network. Explain its role in Static CMOS Gates with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Fabrication Process. Bring out the significance of Photolithography and n-well Process. **[7]**

**Q3.** *(Unit 3)*

(a) Define Repeater Insertion. Explain its role in Interconnect with a suitable example or diagram. **[7]**

(b) Explain Low-power Design in detail. Differentiate between Clock Gating and Power Gating. **[7]**

**Q4.** *(Unit 4)*

(a) Define Ripple Carry Adder. Explain its role in Datapath Elements with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Pass Transistor & Transmission Gate Logic. Bring out the significance of Pass Transistor and Transmission Gate. **[7]**

**Q5.** *(Unit 5)*

(a) Define 1T1C DRAM Cell. Explain its role in Semiconductor Memories with a suitable example or diagram. **[7]**

(b) Explain Programmable Logic in detail. Differentiate between FPGA and LUT. **[7]**

**Q6.** *(Unit 1)*

(a) Define Short Channel Effects. Explain its role in Scaling with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss MOSFET Structure & Operation. Bring out the significance of NMOS and Threshold Voltage. **[7]**

**Q7.** *(Unit 3)*

(a) Define Propagation Delay. Explain its role in Delay Estimation with a suitable example or diagram. **[7]**

(b) Explain Power Dissipation in detail. Differentiate between Dynamic Power and Static Power. **[7]**

**Q8.** *(Unit 5)*

(a) Define LUT. Explain its role in Programmable Logic with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss ASIC Design Flow. Bring out the significance of RTL Design and Logic Synthesis. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Saturation Region. Explain its role in I-V Characteristics with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Second-order Effects. Bring out the significance of Channel Length Modulation and Velocity Saturation. **[7]**

**Q2.** *(Unit 2)*

(a) Define Ion Implantation. Explain its role in Fabrication Process with a suitable example or diagram. **[7]**

(b) Explain Layout & Design Rules in detail. Differentiate between Lambda Rules and Stick Diagram. **[7]**

**Q3.** *(Unit 3)*

(a) Define Clock Gating. Explain its role in Low-power Design with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Delay Estimation. Bring out the significance of Propagation Delay and Elmore Delay. **[7]**

**Q4.** *(Unit 4)*

(a) Define Transmission Gate. Explain its role in Pass Transistor & Transmission Gate Logic with a suitable example or diagram. **[7]**

(b) Explain Dynamic Logic in detail. Differentiate between Dynamic Logic and Domino Logic. **[7]**

**Q5.** *(Unit 5)*

(a) Define CPLD. Explain its role in Programmable Logic with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss ASIC Design Flow. Bring out the significance of RTL Design and Logic Synthesis. **[7]**

**Q6.** *(Unit 2)*

(a) Define CMOS Inverter. Explain its role in CMOS Inverter with a suitable example or diagram. **[7]**

(b) Explain Static CMOS Gates in detail. Differentiate between Pull-down Network and Pull-up Network. **[7]**

**Q7.** *(Unit 4)*

(a) Define Domino Logic. Explain its role in Dynamic Logic with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Latches & Flip-flops. Bring out the significance of Static Latch and Master-slave Flip-flop. **[7]**

**Q8.** *(Unit 1)*

(a) Define Subthreshold Conduction. Explain its role in Second-order Effects with a suitable example or diagram. **[7]**

(b) Explain Scaling in detail. Differentiate between Constant Field Scaling and Moore's Law. **[7]**

## Answer Hints (Set A)

- **Q1(a):** NMOS: n-channel MOSFET conducting with positive gate voltage
- **Q1(b):** Linear Region: ID ∝ (VGS − VT)VDS for small VDS | Saturation Region: ID = (k/2)(VGS − VT)² | Body Effect: threshold rises with source-to-body voltage
- **Q2(a):** Pull-up Network: dual PMOS network
- **Q2(b):** Photolithography: transfers patterns using light and photoresist | n-well Process: PMOS built in n-well on p-substrate | Ion Implantation: doping by accelerated ions
- **Q3(a):** Repeater Insertion: buffers break long wires
- **Q3(b):** Clock Gating: disables clock to idle blocks | Power Gating: shuts off supply to unused blocks | Voltage Scaling: lowering VDD reduces power quadratically
- **Q4(a):** Ripple Carry Adder: simple but slow
- **Q4(b):** Pass Transistor: MOSFET passing a signal | Transmission Gate: parallel NMOS and PMOS passing full swing | Threshold Drop: NMOS passes weak 1
- **Q5(a):** 1T1C DRAM Cell: transistor and capacitor storing charge
- **Q5(b):** FPGA: configurable logic blocks and routing | LUT: look-up table implementing any function of k inputs | CPLD: complex PLD with macrocells
- **Q6(a):** Short Channel Effects: threshold roll-off in small devices
- **Q6(b):** NMOS: n-channel MOSFET conducting with positive gate voltage | Threshold Voltage: gate voltage needed to invert the channel | Inversion Layer: channel formed under the gate
- **Q7(a):** Propagation Delay: average of rise and fall delays
- **Q7(b):** Dynamic Power: P = α C V² f | Static Power: leakage power when idle | Short-circuit Power: current while both networks conduct
- **Q8(a):** LUT: look-up table implementing any function of k inputs
- **Q8(b):** RTL Design: register-transfer level description in HDL | Logic Synthesis: RTL to gate netlist | Place and Route: physical placement and wiring

## Recommended Books

- *CMOS VLSI Design* — Weste & Harris
- *Digital Integrated Circuits* — Rabaey, Chandrakasan & Nikolic
- *Basic VLSI Design* — Pucknell & Eshraghian
