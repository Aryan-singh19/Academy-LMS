# MPS-101 Advanced Power System Analysis — Unit-wise Study Notes

> Network modelling, sparse techniques, load flow, contingency analysis, fault analysis and state estimation.

## Unit 1: Network Modelling

### Primitive Network

Elements before interconnection.

- **Primitive Impedance Matrix:** element impedances
- **Incidence Matrix:** connects elements to buses
- **Ybus Formation:** AᵀyA

### Ybus & Zbus

Network matrices.

- **Ybus:** sparse admittance matrix
- **Zbus Building Algorithm:** adds elements step by step
- **Mutual Coupling:** off-diagonal primitive terms

### Sparse Matrix Techniques

Efficient computation.

- **Sparsity:** most Ybus elements are zero
- **Optimal Ordering:** minimises fill-ins
- **LU Factorisation:** solves network equations

### Component Modelling

Models of power system elements.

- **Generator Model:** voltage behind reactance
- **Transformer Model:** π model with off-nominal tap
- **Load Model:** constant power, current or impedance

## Unit 2: Load Flow Analysis

### Newton-Raphson Load Flow

Robust load flow method.

- **Power Mismatch:** specified minus calculated power
- **Jacobian Matrix:** J1-J4 submatrices
- **Quadratic Convergence:** few iterations

### Fast Decoupled Load Flow

Exploiting P-δ and Q-V decoupling.

- **B' and B'' Matrices:** constant matrices
- **Decoupling:** P depends on δ, Q on V
- **Speed:** suitable for repeated studies

### DC Load Flow

Linear approximation.

- **DC Load Flow:** P = Bθ
- **Assumptions:** flat voltages, lossless lines
- **Applications:** market and contingency screening

### Control in Load Flow

Adjusting devices.

- **Tap Changing Transformer:** voltage control in load flow
- **PV Bus Q Limits:** switching to PQ when exceeded
- **Phase Shifter:** controls active power flow

## Unit 3: Contingency Analysis & Security

### Security Concepts

Secure operation under contingencies.

- **N-1 Criterion:** system survives single outage
- **Contingency Analysis:** simulates outages
- **Security States:** normal, alert, emergency, restorative

### Sensitivity Factors

Fast contingency evaluation.

- **Generation Shift Factor:** change in line flow per generation change
- **Line Outage Distribution Factor:** flow redistribution after outage
- **PTDF:** power transfer distribution factor

### Contingency Ranking

Screening severe cases.

- **Performance Index:** ranks contingencies
- **Contingency Selection:** identifies critical outages
- **Corrective Action:** rescheduling to relieve overloads

### Security-constrained Dispatch

Economic and secure operation.

- **SCOPF:** security-constrained optimal power flow
- **Preventive Control:** secure before contingency
- **Corrective Control:** acts after contingency

## Unit 4: Fault Analysis

### Symmetrical Components

Analysing unbalanced faults.

- **Sequence Networks:** positive, negative, zero
- **Transformation Matrix:** A with operator a
- **Sequence Impedance:** per component

### Unsymmetrical Faults

LG, LL and LLG faults.

- **LG Fault:** sequence networks in series
- **LL Fault:** positive and negative in parallel
- **LLG Fault:** all three networks connected

### Zbus Fault Analysis

Systematic fault computation.

- **Fault Current:** Vf/(Zkk + Zf)
- **Post-fault Voltage:** Vi = Vf − Zik If
- **Open Conductor Fault:** series fault analysis

### Short-circuit Studies

Equipment rating.

- **Fault Level:** MVA at bus
- **IEC 60909:** short circuit calculation standard
- **Breaker Selection:** based on fault current

## Unit 5: State Estimation

### State Estimation Concept

Estimating system state from measurements.

- **State Estimation:** best estimate of voltages and angles
- **Measurement Redundancy:** more measurements than states
- **SCADA Data:** input to state estimator

### Weighted Least Squares

Standard estimation method.

- **WLS Estimator:** minimises weighted squared residuals
- **Gain Matrix:** HᵀWH
- **Measurement Jacobian:** H matrix

### Bad Data Detection

Identifying erroneous measurements.

- **Chi-square Test:** detects bad data
- **Largest Normalised Residual:** identifies bad measurement
- **Observability:** states determinable from measurements

### PMU-based Estimation

Synchrophasors improve estimation.

- **PMU:** phasor measurement unit
- **Synchrophasor:** GPS time-stamped phasor
- **Linear State Estimation:** possible with PMUs

## Standard Textbooks

- *Computer Methods in Power System Analysis* — Stagg & El-Abiad
- *Power System Analysis* — Hadi Saadat
- *Power Generation, Operation and Control* — Wood & Wollenberg

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
