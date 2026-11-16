# EC-404 Control System — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: ECE Sem 4: EC-404.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Open-loop System. Explain its role in Control System Basics with a suitable example or diagram. **[7]**

(b) Explain Transfer Function in detail. Differentiate between Transfer Function and Order of System. **[7]**

**Q2.** *(Unit 2)*

(a) Define Natural Frequency. Explain its role in First & Second Order Response with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Time-domain Specifications. Bring out the significance of Peak Overshoot and Settling Time. **[7]**

**Q3.** *(Unit 3)*

(a) Define Breakaway Point. Explain its role in Root Locus with a suitable example or diagram. **[7]**

(b) Explain Effect of Adding Poles & Zeros in detail. Differentiate between Adding a Zero and Adding a Pole. **[7]**

**Q4.** *(Unit 4)*

(a) Define Polar Plot. Explain its role in Nyquist & Polar Plots with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Frequency-domain Specifications. Bring out the significance of Resonant Peak and Bandwidth. **[7]**

**Q5.** *(Unit 5)*

(a) Define Lag Compensator. Explain its role in Compensators with a suitable example or diagram. **[7]**

(b) Explain PID Controllers in detail. Differentiate between Proportional Control and Integral Control. **[7]**

**Q6.** *(Unit 1)*

(a) Define Non-touching Loops. Explain its role in Signal Flow Graph & Mason's Gain with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Control System Basics. Bring out the significance of Open-loop System and Closed-loop System. **[7]**

**Q7.** *(Unit 3)*

(a) Define BIBO Stability. Explain its role in Concept of Stability with a suitable example or diagram. **[7]**

(b) Explain Routh-Hurwitz Criterion in detail. Differentiate between Routh Array and Sign Changes. **[7]**

**Q8.** *(Unit 5)*

(a) Define Integral Control. Explain its role in PID Controllers with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss State-space Representation. Bring out the significance of State Equation and Output Equation. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Order of System. Explain its role in Transfer Function with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Block Diagram Reduction. Bring out the significance of Closed-loop TF and Cascade Blocks. **[7]**

**Q2.** *(Unit 2)*

(a) Define Rise Time. Explain its role in Time-domain Specifications with a suitable example or diagram. **[7]**

(b) Explain Steady-state Error in detail. Differentiate between Type of System and Position Error Constant. **[7]**

**Q3.** *(Unit 3)*

(a) Define Adding a Zero. Explain its role in Effect of Adding Poles & Zeros with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Concept of Stability. Bring out the significance of BIBO Stability and Absolute Stability. **[7]**

**Q4.** *(Unit 4)*

(a) Define Bandwidth. Explain its role in Frequency-domain Specifications with a suitable example or diagram. **[7]**

(b) Explain Bode Plot in detail. Differentiate between Bode Plot and Corner Frequency. **[7]**

**Q5.** *(Unit 5)*

(a) Define Derivative Control. Explain its role in PID Controllers with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss State-space Representation. Bring out the significance of State Equation and Output Equation. **[7]**

**Q6.** *(Unit 2)*

(a) Define Step Input. Explain its role in Standard Test Signals with a suitable example or diagram. **[7]**

(b) Explain First & Second Order Response in detail. Differentiate between Time Constant and Natural Frequency. **[7]**

**Q7.** *(Unit 4)*

(a) Define Corner Frequency. Explain its role in Bode Plot with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Gain & Phase Margin. Bring out the significance of Gain Margin and Phase Margin. **[7]**

**Q8.** *(Unit 1)*

(a) Define Moving a Summing Point. Explain its role in Block Diagram Reduction with a suitable example or diagram. **[7]**

(b) Explain Signal Flow Graph & Mason's Gain in detail. Differentiate between Signal Flow Graph and Mason's Gain Formula. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Open-loop System: output has no effect on control action
- **Q1(b):** Transfer Function: Laplace output over input with zero initial conditions | Order of System: highest power of s in the denominator | Characteristic Equation: denominator of closed-loop TF set to zero
- **Q2(a):** Natural Frequency: ωn, oscillation frequency without damping
- **Q2(b):** Peak Overshoot: Mp = e^(−πζ/√(1 − ζ²)) | Settling Time: about 4/(ζωn) for 2% band | Rise Time: time from 10% to 90% of final value
- **Q3(a):** Breakaway Point: where loci leave the real axis
- **Q3(b):** Adding a Zero: tends to increase stability and speed | Adding a Pole: tends to reduce stability | Dominant Poles: poles nearest the jω-axis govern response
- **Q4(a):** Polar Plot: locus of G(jω) in the complex plane
- **Q4(b):** Resonant Peak: Mr, maximum of closed-loop magnitude | Bandwidth: frequency range where gain ≥ −3 dB | Correlation with Time Domain: higher bandwidth means faster response
- **Q5(a):** Lag Compensator: improves steady-state error
- **Q5(b):** Proportional Control: output proportional to error | Integral Control: removes steady-state error | Derivative Control: anticipates error and improves damping
- **Q6(a):** Non-touching Loops: loops with no common node
- **Q6(b):** Open-loop System: output has no effect on control action | Closed-loop System: output fed back to correct errors | Feedback: comparison of output with reference
- **Q7(a):** BIBO Stability: bounded input gives bounded output
- **Q7(b):** Routh Array: tabulation from characteristic equation coefficients | Sign Changes: number equals roots in right half-plane | Row of Zeros: indicates symmetric roots; use auxiliary equation
- **Q8(a):** Integral Control: removes steady-state error
- **Q8(b):** State Equation: ẋ = Ax + Bu | Output Equation: y = Cx + Du | State Transition Matrix: φ(t) = e^(At)

## Recommended Books

- *Control Systems Engineering* — I. J. Nagrath & M. Gopal
- *Modern Control Engineering* — Katsuhiko Ogata
- *Automatic Control Systems* — Benjamin C. Kuo
