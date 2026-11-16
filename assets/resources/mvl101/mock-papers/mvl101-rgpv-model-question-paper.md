# MVL-101 Digital IC Design — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: M.Tech VLSI Sem 1: MVL-101.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Square-law Model. Explain its role in MOSFET Operation with a suitable example or diagram. **[7]**

(b) Explain Short-channel Effects in detail. Differentiate between DIBL and Threshold Roll-off. **[7]**

**Q2.** *(Unit 2)*

(a) Define Rise and Fall Time. Explain its role in Dynamic Behaviour with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Power Consumption. Bring out the significance of Dynamic Power and Short-circuit Power. **[7]**

**Q3.** *(Unit 3)*

(a) Define CPL. Explain its role in Ratioed & Pass-transistor Logic with a suitable example or diagram. **[7]**

(b) Explain Dynamic Logic in detail. Differentiate between Domino Logic and Charge Sharing. **[7]**

**Q4.** *(Unit 4)*

(a) Define Metastability. Explain its role in Metastability & Synchronisers with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Latches & Flip-flops. Bring out the significance of Static Latch and Master-slave Flip-flop. **[7]**

**Q5.** *(Unit 5)*

(a) Define Elmore Delay. Explain its role in Interconnect Modelling with a suitable example or diagram. **[7]**

(b) Explain Crosstalk & Signal Integrity in detail. Differentiate between Crosstalk and Ground Bounce. **[7]**

**Q6.** *(Unit 1)*

(a) Define Miller Capacitance. Explain its role in Device Capacitances with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss MOSFET Operation. Bring out the significance of Square-law Model and Velocity Saturation. **[7]**

**Q7.** *(Unit 3)*

(a) Define Pull-down Network. Explain its role in Static CMOS Gates with a suitable example or diagram. **[7]**

(b) Explain Logical Effort in detail. Differentiate between Logical Effort and Electrical Effort. **[7]**

**Q8.** *(Unit 5)*

(a) Define Ground Bounce. Explain its role in Crosstalk & Signal Integrity with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Adders. Bring out the significance of Carry Look-ahead Adder and Kogge-Stone Adder. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Threshold Roll-off. Explain its role in Short-channel Effects with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss FinFET & Advanced Devices. Bring out the significance of FinFET and GAA FET. **[7]**

**Q2.** *(Unit 2)*

(a) Define Leakage Power. Explain its role in Power Consumption with a suitable example or diagram. **[7]**

(b) Explain Inverter Chains & Sizing in detail. Differentiate between Fan-out of 4 and Optimal Stage Count. **[7]**

**Q3.** *(Unit 3)*

(a) Define Domino Logic. Explain its role in Dynamic Logic with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Static CMOS Gates. Bring out the significance of Pull-down Network and Stack Effect. **[7]**

**Q4.** *(Unit 4)*

(a) Define Master-slave Flip-flop. Explain its role in Latches & Flip-flops with a suitable example or diagram. **[7]**

(b) Explain Timing Constraints in detail. Differentiate between Setup Constraint and Hold Constraint. **[7]**

**Q5.** *(Unit 5)*

(a) Define Shielding. Explain its role in Crosstalk & Signal Integrity with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Adders. Bring out the significance of Carry Look-ahead Adder and Kogge-Stone Adder. **[7]**

**Q6.** *(Unit 2)*

(a) Define Switching Threshold. Explain its role in Static Characteristics with a suitable example or diagram. **[7]**

(b) Explain Dynamic Behaviour in detail. Differentiate between Propagation Delay and Rise and Fall Time. **[7]**

**Q7.** *(Unit 4)*

(a) Define Hold Constraint. Explain its role in Timing Constraints with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Clock Distribution. Bring out the significance of H-tree and Clock Jitter. **[7]**

**Q8.** *(Unit 1)*

(a) Define FD-SOI. Explain its role in FinFET & Advanced Devices with a suitable example or diagram. **[7]**

(b) Explain Device Capacitances in detail. Differentiate between Gate Capacitance and Junction Capacitance. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Square-law Model: ID = (μCox/2)(W/L)(VGS − VT)²
- **Q1(b):** DIBL: drain-induced barrier lowering | Threshold Roll-off: VT decreases with channel length | Hot Carrier Effect: degradation from energetic carriers
- **Q2(a):** Rise and Fall Time: 10-90% transition times
- **Q2(b):** Dynamic Power: α CL VDD² f | Short-circuit Power: direct path current during switching | Leakage Power: static subthreshold and gate leakage
- **Q3(a):** CPL: complementary pass-transistor logic
- **Q3(b):** Domino Logic: dynamic stage plus static inverter | Charge Sharing: reduces dynamic node voltage | Keeper Transistor: maintains dynamic node
- **Q4(a):** Metastability: unresolved flip-flop output
- **Q4(b):** Static Latch: cross-coupled inverters | Master-slave Flip-flop: two latches | Pulsed Latch: latch with narrow clock pulse
- **Q5(a):** Elmore Delay: RC delay of distributed line
- **Q5(b):** Crosstalk: coupling between adjacent wires | Ground Bounce: supply noise from switching | Shielding: grounded wires between signals
- **Q6(a):** Miller Capacitance: gate-drain capacitance amplified
- **Q6(b):** Square-law Model: ID = (μCox/2)(W/L)(VGS − VT)² | Velocity Saturation: limits current in short channels | Subthreshold Current: exponential leakage below VT
- **Q7(a):** Pull-down Network: NMOS implementing function complement
- **Q7(b):** Logical Effort: gate input capacitance relative to inverter | Electrical Effort: Cout/Cin | Path Effort: product of stage efforts
- **Q8(a):** Ground Bounce: supply noise from switching
- **Q8(b):** Carry Look-ahead Adder: generate and propagate logic | Kogge-Stone Adder: parallel prefix adder | Carry Select Adder: precomputes both carry cases

## Recommended Books

- *Digital Integrated Circuits* — Rabaey, Chandrakasan & Nikolic
- *CMOS VLSI Design* — Weste & Harris
- *CMOS Digital Integrated Circuits* — Kang & Leblebici
