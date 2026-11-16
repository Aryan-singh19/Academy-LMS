# MVL-102 Analog IC Design — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: M.Tech VLSI Sem 1: MVL-102.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Transconductance. Explain its role in Small-signal Models with a suitable example or diagram. **[7]**

(b) Explain Common-source Amplifier in detail. Differentiate between CS Gain and Source Degeneration. **[7]**

**Q2.** *(Unit 2)*

(a) Define CMRR. Explain its role in Differential Pair with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Active Load. Bring out the significance of Active-load Differential Amplifier and Gain. **[7]**

**Q3.** *(Unit 3)*

(a) Define Nulling Resistor. Explain its role in Stability & Compensation with a suitable example or diagram. **[7]**

(b) Explain Common-mode Feedback in detail. Differentiate between Fully Differential Op-amp and CMFB. **[7]**

**Q4.** *(Unit 4)*

(a) Define Switched-capacitor Integrator. Explain its role in Switched-capacitor Circuits with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Frequency Response. Bring out the significance of Miller Effect and Dominant Pole. **[7]**

**Q5.** *(Unit 5)*

(a) Define Kickback Noise. Explain its role in Comparators with a suitable example or diagram. **[7]**

(b) Explain DAC Architectures in detail. Differentiate between Current-steering DAC and R-2R DAC. **[7]**

**Q6.** *(Unit 1)*

(a) Define Constant-gm Bias. Explain its role in Biasing with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Small-signal Models. Bring out the significance of Transconductance and Output Resistance. **[7]**

**Q7.** *(Unit 3)*

(a) Define Two-stage Op-amp. Explain its role in Two-stage Op-amp with a suitable example or diagram. **[7]**

(b) Explain Folded Cascode Op-amp in detail. Differentiate between Folded Cascode and Telescopic Cascode. **[7]**

**Q8.** *(Unit 5)*

(a) Define R-2R DAC. Explain its role in DAC Architectures with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss ADC Architectures. Bring out the significance of SAR ADC and Pipeline ADC. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Source Degeneration. Explain its role in Common-source Amplifier with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Common-gate & Source Follower. Bring out the significance of Source Follower and Common-gate. **[7]**

**Q2.** *(Unit 2)*

(a) Define Systematic Offset. Explain its role in Active Load with a suitable example or diagram. **[7]**

(b) Explain Mismatch in detail. Differentiate between Pelgrom's Law and Common Centroid Layout. **[7]**

**Q3.** *(Unit 3)*

(a) Define Fully Differential Op-amp. Explain its role in Common-mode Feedback with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Two-stage Op-amp. Bring out the significance of Two-stage Op-amp and Miller Compensation. **[7]**

**Q4.** *(Unit 4)*

(a) Define Dominant Pole. Explain its role in Frequency Response with a suitable example or diagram. **[7]**

(b) Explain Noise Sources in detail. Differentiate between Thermal Noise and Flicker Noise. **[7]**

**Q5.** *(Unit 5)*

(a) Define DNL and INL. Explain its role in DAC Architectures with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss ADC Architectures. Bring out the significance of SAR ADC and Pipeline ADC. **[7]**

**Q6.** *(Unit 2)*

(a) Define Basic Current Mirror. Explain its role in Current Mirrors with a suitable example or diagram. **[7]**

(b) Explain Differential Pair in detail. Differentiate between Differential Gain and CMRR. **[7]**

**Q7.** *(Unit 4)*

(a) Define Flicker Noise. Explain its role in Noise Sources with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Noise Optimisation. Bring out the significance of Corner Frequency and Chopper Stabilisation. **[7]**

**Q8.** *(Unit 1)*

(a) Define Cascode. Explain its role in Common-gate & Source Follower with a suitable example or diagram. **[7]**

(b) Explain Biasing in detail. Differentiate between Current Source Bias and Bandgap Reference. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Transconductance: gm = 2ID/(VGS − VT)
- **Q1(b):** CS Gain: −gm (ro parallel RD) | Source Degeneration: improves linearity, reduces gain | Diode-connected Load: gain set by transconductance ratio
- **Q2(a):** CMRR: differential gain / common-mode gain
- **Q2(b):** Active-load Differential Amplifier: mirror load converts to single-ended | Gain: gm (ro2 parallel ro4) | Systematic Offset: from asymmetry
- **Q3(a):** Nulling Resistor: cancels RHP zero
- **Q3(b):** Fully Differential Op-amp: differential output | CMFB: sets output common-mode | Slew Rate: I/Cc
- **Q4(a):** Switched-capacitor Integrator: resistor emulated by switched capacitor
- **Q4(b):** Miller Effect: input capacitance multiplied | Dominant Pole: sets bandwidth | Gain-bandwidth Product: constant for single pole
- **Q5(a):** Kickback Noise: disturbance to input
- **Q5(b):** Current-steering DAC: high-speed switched currents | R-2R DAC: resistor ladder | DNL and INL: differential and integral non-linearity
- **Q6(a):** Constant-gm Bias: transconductance independent of process
- **Q6(b):** Transconductance: gm = 2ID/(VGS − VT) | Output Resistance: ro = 1/(λID) | Intrinsic Gain: gm ro
- **Q7(a):** Two-stage Op-amp: differential pair plus CS stage
- **Q7(b):** Folded Cascode: high gain and wide input range | Telescopic Cascode: highest gain, limited swing | Output Swing: limited by stacked devices
- **Q8(a):** R-2R DAC: resistor ladder
- **Q8(b):** SAR ADC: binary search with capacitor DAC | Pipeline ADC: stages each resolving few bits | Flash ADC: fastest with 2^N − 1 comparators

## Recommended Books

- *Design of Analog CMOS Integrated Circuits* — Behzad Razavi
- *CMOS Analog Circuit Design* — Allen & Holberg
- *Analysis and Design of Analog Integrated Circuits* — Gray, Hurst, Lewis & Meyer
