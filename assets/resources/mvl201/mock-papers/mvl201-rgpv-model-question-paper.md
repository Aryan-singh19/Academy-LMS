# MVL-201 Low Power VLSI Design — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: M.Tech VLSI Sem 2: MVL-201.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Switching Power. Explain its role in Sources of Power Dissipation with a suitable example or diagram. **[7]**

(b) Explain Need for Low Power in detail. Differentiate between Battery Life and Thermal Design Power. **[7]**

**Q2.** *(Unit 2)*

(a) Define Dual-VT Assignment. Explain its role in Multi-threshold CMOS with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Body Biasing. Bring out the significance of Reverse Body Bias and Forward Body Bias. **[7]**

**Q3.** *(Unit 3)*

(a) Define UPF. Explain its role in Multi-voltage Design with a suitable example or diagram. **[7]**

(b) Explain DVFS in detail. Differentiate between DVFS and Performance State. **[7]**

**Q4.** *(Unit 4)*

(a) Define Bus-invert Coding. Explain its role in Bus Encoding with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss SRAM Power. Bring out the significance of Bitline Power and Sleep Mode SRAM. **[7]**

**Q5.** *(Unit 5)*

(a) Define Power Intent. Explain its role in Power-aware Design Flow with a suitable example or diagram. **[7]**

(b) Explain IR Drop & Electromigration in detail. Differentiate between IR Drop and Decap. **[7]**

**Q6.** *(Unit 1)*

(a) Define Gate-level Power Simulation. Explain its role in Power Estimation with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Sources of Power Dissipation. Bring out the significance of Switching Power and Short-circuit Power. **[7]**

**Q7.** *(Unit 3)*

(a) Define Clock Gating. Explain its role in Clock Gating with a suitable example or diagram. **[7]**

(b) Explain Power Gating in detail. Differentiate between Power Gating and Retention Register. **[7]**

**Q8.** *(Unit 5)*

(a) Define Decap. Explain its role in IR Drop & Electromigration with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Thermal Management. Bring out the significance of Hotspot and Thermal Throttling. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Thermal Design Power. Explain its role in Need for Low Power with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Leakage Mechanisms. Bring out the significance of Subthreshold Leakage and Gate Tunnelling. **[7]**

**Q2.** *(Unit 2)*

(a) Define Adaptive Body Bias. Explain its role in Body Biasing with a suitable example or diagram. **[7]**

(b) Explain Low-power Logic Styles in detail. Differentiate between Adiabatic Logic and Stack Forcing. **[7]**

**Q3.** *(Unit 3)*

(a) Define DVFS. Explain its role in DVFS with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Clock Gating. Bring out the significance of Clock Gating and Integrated Clock Gate. **[7]**

**Q4.** *(Unit 4)*

(a) Define Sleep Mode SRAM. Explain its role in SRAM Power with a suitable example or diagram. **[7]**

(b) Explain Low-power Caches in detail. Differentiate between Way Prediction and Drowsy Cache. **[7]**

**Q5.** *(Unit 5)*

(a) Define EM Analysis. Explain its role in IR Drop & Electromigration with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Thermal Management. Bring out the significance of Hotspot and Thermal Throttling. **[7]**

**Q6.** *(Unit 2)*

(a) Define Dynamic Voltage Scaling. Explain its role in Voltage Scaling with a suitable example or diagram. **[7]**

(b) Explain Multi-threshold CMOS in detail. Differentiate between MTCMOS and Dual-VT Assignment. **[7]**

**Q7.** *(Unit 4)*

(a) Define Drowsy Cache. Explain its role in Low-power Caches with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Low-power Arithmetic. Bring out the significance of Operand Isolation and Approximate Computing. **[7]**

**Q8.** *(Unit 1)*

(a) Define GIDL. Explain its role in Leakage Mechanisms with a suitable example or diagram. **[7]**

(b) Explain Power Estimation in detail. Differentiate between Switching Activity and Probabilistic Estimation. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Switching Power: α C V² f
- **Q1(b):** Battery Life: depends on average power | Thermal Design Power: maximum sustained heat | Energy per Operation: key metric for efficiency
- **Q2(a):** Dual-VT Assignment: low VT on critical paths
- **Q2(b):** Reverse Body Bias: raises VT to cut leakage | Forward Body Bias: lowers VT for speed | Adaptive Body Bias: compensates variation
- **Q3(a):** UPF: unified power format specification
- **Q3(b):** DVFS: dynamic voltage and frequency scaling | Performance State: voltage-frequency pair | Governor: OS policy selecting states
- **Q4(a):** Bus-invert Coding: inverts data to cut toggles
- **Q4(b):** Bitline Power: from charging long bitlines | Sleep Mode SRAM: reduced retention voltage | Read Assist: improves stability at low voltage
- **Q5(a):** Power Intent: UPF describing domains
- **Q5(b):** IR Drop: voltage drop on supply network | Decap: decoupling capacitance | EM Analysis: checks current density limits
- **Q6(a):** Gate-level Power Simulation: activity from simulation
- **Q6(b):** Switching Power: α C V² f | Short-circuit Power: during input transitions | Leakage Power: subthreshold, gate and junction leakage
- **Q7(a):** Clock Gating: stops clock to idle registers
- **Q7(b):** Power Gating: cutting supply to blocks | Retention Register: saves state during power-down | Isolation Cell: clamps outputs of off blocks
- **Q8(a):** Decap: decoupling capacitance
- **Q8(b):** Hotspot: local high temperature | Thermal Throttling: reduces frequency when hot | Dark Silicon: unpowered regions due to power limits

## Recommended Books

- *Low-Power CMOS VLSI Circuit Design* — Kaushik Roy & Sharat Prasad
- *Low Power Methodology Manual* — Keating et al.
- *Practical Low Power Digital VLSI Design* — Gary Yeap
