# MPS-101 Advanced Power System Analysis — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: M.Tech Power Sem 1: MPS-101.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Primitive Impedance Matrix. Explain its role in Primitive Network with a suitable example or diagram. **[7]**

(b) Explain Ybus & Zbus in detail. Differentiate between Ybus and Zbus Building Algorithm. **[7]**

**Q2.** *(Unit 2)*

(a) Define Decoupling. Explain its role in Fast Decoupled Load Flow with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss DC Load Flow. Bring out the significance of DC Load Flow and Assumptions. **[7]**

**Q3.** *(Unit 3)*

(a) Define Corrective Action. Explain its role in Contingency Ranking with a suitable example or diagram. **[7]**

(b) Explain Security-constrained Dispatch in detail. Differentiate between SCOPF and Preventive Control. **[7]**

**Q4.** *(Unit 4)*

(a) Define Fault Level. Explain its role in Short-circuit Studies with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Symmetrical Components. Bring out the significance of Sequence Networks and Transformation Matrix. **[7]**

**Q5.** *(Unit 5)*

(a) Define Measurement Redundancy. Explain its role in State Estimation Concept with a suitable example or diagram. **[7]**

(b) Explain Weighted Least Squares in detail. Differentiate between WLS Estimator and Gain Matrix. **[7]**

**Q6.** *(Unit 1)*

(a) Define Load Model. Explain its role in Component Modelling with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Primitive Network. Bring out the significance of Primitive Impedance Matrix and Incidence Matrix. **[7]**

**Q7.** *(Unit 3)*

(a) Define N-1 Criterion. Explain its role in Security Concepts with a suitable example or diagram. **[7]**

(b) Explain Sensitivity Factors in detail. Differentiate between Generation Shift Factor and Line Outage Distribution Factor. **[7]**

**Q8.** *(Unit 5)*

(a) Define Gain Matrix. Explain its role in Weighted Least Squares with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Bad Data Detection. Bring out the significance of Chi-square Test and Largest Normalised Residual. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Zbus Building Algorithm. Explain its role in Ybus & Zbus with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Sparse Matrix Techniques. Bring out the significance of Sparsity and Optimal Ordering. **[7]**

**Q2.** *(Unit 2)*

(a) Define Applications. Explain its role in DC Load Flow with a suitable example or diagram. **[7]**

(b) Explain Control in Load Flow in detail. Differentiate between Tap Changing Transformer and PV Bus Q Limits. **[7]**

**Q3.** *(Unit 3)*

(a) Define SCOPF. Explain its role in Security-constrained Dispatch with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Security Concepts. Bring out the significance of N-1 Criterion and Contingency Analysis. **[7]**

**Q4.** *(Unit 4)*

(a) Define Transformation Matrix. Explain its role in Symmetrical Components with a suitable example or diagram. **[7]**

(b) Explain Unsymmetrical Faults in detail. Differentiate between LG Fault and LL Fault. **[7]**

**Q5.** *(Unit 5)*

(a) Define Measurement Jacobian. Explain its role in Weighted Least Squares with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Bad Data Detection. Bring out the significance of Chi-square Test and Largest Normalised Residual. **[7]**

**Q6.** *(Unit 2)*

(a) Define Power Mismatch. Explain its role in Newton-Raphson Load Flow with a suitable example or diagram. **[7]**

(b) Explain Fast Decoupled Load Flow in detail. Differentiate between B' and B'' Matrices and Decoupling. **[7]**

**Q7.** *(Unit 4)*

(a) Define LL Fault. Explain its role in Unsymmetrical Faults with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Zbus Fault Analysis. Bring out the significance of Fault Current and Post-fault Voltage. **[7]**

**Q8.** *(Unit 1)*

(a) Define LU Factorisation. Explain its role in Sparse Matrix Techniques with a suitable example or diagram. **[7]**

(b) Explain Component Modelling in detail. Differentiate between Generator Model and Transformer Model. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Primitive Impedance Matrix: element impedances
- **Q1(b):** Ybus: sparse admittance matrix | Zbus Building Algorithm: adds elements step by step | Mutual Coupling: off-diagonal primitive terms
- **Q2(a):** Decoupling: P depends on δ, Q on V
- **Q2(b):** DC Load Flow: P = Bθ | Assumptions: flat voltages, lossless lines | Applications: market and contingency screening
- **Q3(a):** Corrective Action: rescheduling to relieve overloads
- **Q3(b):** SCOPF: security-constrained optimal power flow | Preventive Control: secure before contingency | Corrective Control: acts after contingency
- **Q4(a):** Fault Level: MVA at bus
- **Q4(b):** Sequence Networks: positive, negative, zero | Transformation Matrix: A with operator a | Sequence Impedance: per component
- **Q5(a):** Measurement Redundancy: more measurements than states
- **Q5(b):** WLS Estimator: minimises weighted squared residuals | Gain Matrix: HᵀWH | Measurement Jacobian: H matrix
- **Q6(a):** Load Model: constant power, current or impedance
- **Q6(b):** Primitive Impedance Matrix: element impedances | Incidence Matrix: connects elements to buses | Ybus Formation: AᵀyA
- **Q7(a):** N-1 Criterion: system survives single outage
- **Q7(b):** Generation Shift Factor: change in line flow per generation change | Line Outage Distribution Factor: flow redistribution after outage | PTDF: power transfer distribution factor
- **Q8(a):** Gain Matrix: HᵀWH
- **Q8(b):** Chi-square Test: detects bad data | Largest Normalised Residual: identifies bad measurement | Observability: states determinable from measurements

## Recommended Books

- *Computer Methods in Power System Analysis* — Stagg & El-Abiad
- *Power System Analysis* — Hadi Saadat
- *Power Generation, Operation and Control* — Wood & Wollenberg
