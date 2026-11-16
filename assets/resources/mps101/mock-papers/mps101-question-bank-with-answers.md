# MPS-101 Advanced Power System Analysis — Question Bank with Answer Hints

## Unit 1: Network Modelling

### Short answer (2-3 marks)

- **Q.** Define *Primitive Impedance Matrix*.  
  **Ans.** element impedances
- **Q.** Define *Incidence Matrix*.  
  **Ans.** connects elements to buses
- **Q.** Define *Ybus Formation*.  
  **Ans.** AᵀyA
- **Q.** Define *Ybus*.  
  **Ans.** sparse admittance matrix
- **Q.** Define *Zbus Building Algorithm*.  
  **Ans.** adds elements step by step
- **Q.** Define *Mutual Coupling*.  
  **Ans.** off-diagonal primitive terms
- **Q.** Define *Sparsity*.  
  **Ans.** most Ybus elements are zero
- **Q.** Define *Optimal Ordering*.  
  **Ans.** minimises fill-ins
- **Q.** Define *LU Factorisation*.  
  **Ans.** solves network equations
- **Q.** Define *Generator Model*.  
  **Ans.** voltage behind reactance
- **Q.** Define *Transformer Model*.  
  **Ans.** π model with off-nominal tap
- **Q.** Define *Load Model*.  
  **Ans.** constant power, current or impedance

### Long answer (7 marks)

- **Q.** Explain *Primitive Network* in detail with a neat diagram.  
  **Key points:** Elements before interconnection. Primitive Impedance Matrix — element impedances; Incidence Matrix — connects elements to buses; Ybus Formation — AᵀyA.
- **Q.** Explain *Ybus & Zbus* in detail with a neat diagram.  
  **Key points:** Network matrices. Ybus — sparse admittance matrix; Zbus Building Algorithm — adds elements step by step; Mutual Coupling — off-diagonal primitive terms.
- **Q.** Explain *Sparse Matrix Techniques* in detail with a neat diagram.  
  **Key points:** Efficient computation. Sparsity — most Ybus elements are zero; Optimal Ordering — minimises fill-ins; LU Factorisation — solves network equations.
- **Q.** Explain *Component Modelling* in detail with a neat diagram.  
  **Key points:** Models of power system elements. Generator Model — voltage behind reactance; Transformer Model — π model with off-nominal tap; Load Model — constant power, current or impedance.

## Unit 2: Load Flow Analysis

### Short answer (2-3 marks)

- **Q.** Define *Power Mismatch*.  
  **Ans.** specified minus calculated power
- **Q.** Define *Jacobian Matrix*.  
  **Ans.** J1-J4 submatrices
- **Q.** Define *Quadratic Convergence*.  
  **Ans.** few iterations
- **Q.** Define *B' and B'' Matrices*.  
  **Ans.** constant matrices
- **Q.** Define *Decoupling*.  
  **Ans.** P depends on δ, Q on V
- **Q.** Define *Speed*.  
  **Ans.** suitable for repeated studies
- **Q.** Define *DC Load Flow*.  
  **Ans.** P = Bθ
- **Q.** Define *Assumptions*.  
  **Ans.** flat voltages, lossless lines
- **Q.** Define *Applications*.  
  **Ans.** market and contingency screening
- **Q.** Define *Tap Changing Transformer*.  
  **Ans.** voltage control in load flow
- **Q.** Define *PV Bus Q Limits*.  
  **Ans.** switching to PQ when exceeded
- **Q.** Define *Phase Shifter*.  
  **Ans.** controls active power flow

### Long answer (7 marks)

- **Q.** Explain *Newton-Raphson Load Flow* in detail with a neat diagram.  
  **Key points:** Robust load flow method. Power Mismatch — specified minus calculated power; Jacobian Matrix — J1-J4 submatrices; Quadratic Convergence — few iterations.
- **Q.** Explain *Fast Decoupled Load Flow* in detail with a neat diagram.  
  **Key points:** Exploiting P-δ and Q-V decoupling. B' and B'' Matrices — constant matrices; Decoupling — P depends on δ, Q on V; Speed — suitable for repeated studies.
- **Q.** Explain *DC Load Flow* in detail with a neat diagram.  
  **Key points:** Linear approximation. DC Load Flow — P = Bθ; Assumptions — flat voltages, lossless lines; Applications — market and contingency screening.
- **Q.** Explain *Control in Load Flow* in detail with a neat diagram.  
  **Key points:** Adjusting devices. Tap Changing Transformer — voltage control in load flow; PV Bus Q Limits — switching to PQ when exceeded; Phase Shifter — controls active power flow.

## Unit 3: Contingency Analysis & Security

### Short answer (2-3 marks)

- **Q.** Define *N-1 Criterion*.  
  **Ans.** system survives single outage
- **Q.** Define *Contingency Analysis*.  
  **Ans.** simulates outages
- **Q.** Define *Security States*.  
  **Ans.** normal, alert, emergency, restorative
- **Q.** Define *Generation Shift Factor*.  
  **Ans.** change in line flow per generation change
- **Q.** Define *Line Outage Distribution Factor*.  
  **Ans.** flow redistribution after outage
- **Q.** Define *PTDF*.  
  **Ans.** power transfer distribution factor
- **Q.** Define *Performance Index*.  
  **Ans.** ranks contingencies
- **Q.** Define *Contingency Selection*.  
  **Ans.** identifies critical outages
- **Q.** Define *Corrective Action*.  
  **Ans.** rescheduling to relieve overloads
- **Q.** Define *SCOPF*.  
  **Ans.** security-constrained optimal power flow
- **Q.** Define *Preventive Control*.  
  **Ans.** secure before contingency
- **Q.** Define *Corrective Control*.  
  **Ans.** acts after contingency

### Long answer (7 marks)

- **Q.** Explain *Security Concepts* in detail with a neat diagram.  
  **Key points:** Secure operation under contingencies. N-1 Criterion — system survives single outage; Contingency Analysis — simulates outages; Security States — normal, alert, emergency, restorative.
- **Q.** Explain *Sensitivity Factors* in detail with a neat diagram.  
  **Key points:** Fast contingency evaluation. Generation Shift Factor — change in line flow per generation change; Line Outage Distribution Factor — flow redistribution after outage; PTDF — power transfer distribution factor.
- **Q.** Explain *Contingency Ranking* in detail with a neat diagram.  
  **Key points:** Screening severe cases. Performance Index — ranks contingencies; Contingency Selection — identifies critical outages; Corrective Action — rescheduling to relieve overloads.
- **Q.** Explain *Security-constrained Dispatch* in detail with a neat diagram.  
  **Key points:** Economic and secure operation. SCOPF — security-constrained optimal power flow; Preventive Control — secure before contingency; Corrective Control — acts after contingency.

## Unit 4: Fault Analysis

### Short answer (2-3 marks)

- **Q.** Define *Sequence Networks*.  
  **Ans.** positive, negative, zero
- **Q.** Define *Transformation Matrix*.  
  **Ans.** A with operator a
- **Q.** Define *Sequence Impedance*.  
  **Ans.** per component
- **Q.** Define *LG Fault*.  
  **Ans.** sequence networks in series
- **Q.** Define *LL Fault*.  
  **Ans.** positive and negative in parallel
- **Q.** Define *LLG Fault*.  
  **Ans.** all three networks connected
- **Q.** Define *Fault Current*.  
  **Ans.** Vf/(Zkk + Zf)
- **Q.** Define *Post-fault Voltage*.  
  **Ans.** Vi = Vf − Zik If
- **Q.** Define *Open Conductor Fault*.  
  **Ans.** series fault analysis
- **Q.** Define *Fault Level*.  
  **Ans.** MVA at bus
- **Q.** Define *IEC 60909*.  
  **Ans.** short circuit calculation standard
- **Q.** Define *Breaker Selection*.  
  **Ans.** based on fault current

### Long answer (7 marks)

- **Q.** Explain *Symmetrical Components* in detail with a neat diagram.  
  **Key points:** Analysing unbalanced faults. Sequence Networks — positive, negative, zero; Transformation Matrix — A with operator a; Sequence Impedance — per component.
- **Q.** Explain *Unsymmetrical Faults* in detail with a neat diagram.  
  **Key points:** LG, LL and LLG faults. LG Fault — sequence networks in series; LL Fault — positive and negative in parallel; LLG Fault — all three networks connected.
- **Q.** Explain *Zbus Fault Analysis* in detail with a neat diagram.  
  **Key points:** Systematic fault computation. Fault Current — Vf/(Zkk + Zf); Post-fault Voltage — Vi = Vf − Zik If; Open Conductor Fault — series fault analysis.
- **Q.** Explain *Short-circuit Studies* in detail with a neat diagram.  
  **Key points:** Equipment rating. Fault Level — MVA at bus; IEC 60909 — short circuit calculation standard; Breaker Selection — based on fault current.

## Unit 5: State Estimation

### Short answer (2-3 marks)

- **Q.** Define *State Estimation*.  
  **Ans.** best estimate of voltages and angles
- **Q.** Define *Measurement Redundancy*.  
  **Ans.** more measurements than states
- **Q.** Define *SCADA Data*.  
  **Ans.** input to state estimator
- **Q.** Define *WLS Estimator*.  
  **Ans.** minimises weighted squared residuals
- **Q.** Define *Gain Matrix*.  
  **Ans.** HᵀWH
- **Q.** Define *Measurement Jacobian*.  
  **Ans.** H matrix
- **Q.** Define *Chi-square Test*.  
  **Ans.** detects bad data
- **Q.** Define *Largest Normalised Residual*.  
  **Ans.** identifies bad measurement
- **Q.** Define *Observability*.  
  **Ans.** states determinable from measurements
- **Q.** Define *PMU*.  
  **Ans.** phasor measurement unit
- **Q.** Define *Synchrophasor*.  
  **Ans.** GPS time-stamped phasor
- **Q.** Define *Linear State Estimation*.  
  **Ans.** possible with PMUs

### Long answer (7 marks)

- **Q.** Explain *State Estimation Concept* in detail with a neat diagram.  
  **Key points:** Estimating system state from measurements. State Estimation — best estimate of voltages and angles; Measurement Redundancy — more measurements than states; SCADA Data — input to state estimator.
- **Q.** Explain *Weighted Least Squares* in detail with a neat diagram.  
  **Key points:** Standard estimation method. WLS Estimator — minimises weighted squared residuals; Gain Matrix — HᵀWH; Measurement Jacobian — H matrix.
- **Q.** Explain *Bad Data Detection* in detail with a neat diagram.  
  **Key points:** Identifying erroneous measurements. Chi-square Test — detects bad data; Largest Normalised Residual — identifies bad measurement; Observability — states determinable from measurements.
- **Q.** Explain *PMU-based Estimation* in detail with a neat diagram.  
  **Key points:** Synchrophasors improve estimation. PMU — phasor measurement unit; Synchrophasor — GPS time-stamped phasor; Linear State Estimation — possible with PMUs.

