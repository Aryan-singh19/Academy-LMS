# EX-601 Power System-II — Question Bank with Answer Hints

## Unit 1: Per-unit System & Network Matrices

### Short answer (2-3 marks)

- **Q.** Define *Per-unit Value*.  
  **Ans.** actual value / base value
- **Q.** Define *Base Impedance*.  
  **Ans.** Zb = kVb²/MVAb
- **Q.** Define *Change of Base*.  
  **Ans.** Znew = Zold (MVAnew/MVAold)(kVold/kVnew)²
- **Q.** Define *Single Line Diagram*.  
  **Ans.** one-line representation of three-phase system
- **Q.** Define *Impedance Diagram*.  
  **Ans.** equivalent circuit for analysis
- **Q.** Define *Reactance Diagram*.  
  **Ans.** resistance neglected
- **Q.** Define *Ybus*.  
  **Ans.** bus admittance matrix
- **Q.** Define *Diagonal Element*.  
  **Ans.** sum of admittances at bus
- **Q.** Define *Off-diagonal Element*.  
  **Ans.** negative admittance between buses
- **Q.** Define *Zbus*.  
  **Ans.** inverse of Ybus
- **Q.** Define *Zbus Building Algorithm*.  
  **Ans.** step-by-step addition of elements
- **Q.** Define *Sparsity*.  
  **Ans.** Ybus is sparse

### Long answer (7 marks)

- **Q.** Explain *Per-unit System* in detail with a neat diagram.  
  **Key points:** Normalised quantities simplify analysis. Per-unit Value — actual value / base value; Base Impedance — Zb = kVb²/MVAb; Change of Base — Znew = Zold (MVAnew/MVAold)(kVold/kVnew)².
- **Q.** Explain *Single Line Diagram* in detail with a neat diagram.  
  **Key points:** Simplified representation of system. Single Line Diagram — one-line representation of three-phase system; Impedance Diagram — equivalent circuit for analysis; Reactance Diagram — resistance neglected.
- **Q.** Explain *Bus Admittance Matrix* in detail with a neat diagram.  
  **Key points:** Network modelled by Ybus. Ybus — bus admittance matrix; Diagonal Element — sum of admittances at bus; Off-diagonal Element — negative admittance between buses.
- **Q.** Explain *Bus Impedance Matrix* in detail with a neat diagram.  
  **Key points:** Zbus is used for fault analysis. Zbus — inverse of Ybus; Zbus Building Algorithm — step-by-step addition of elements; Sparsity — Ybus is sparse.

## Unit 2: Load Flow Studies

### Short answer (2-3 marks)

- **Q.** Define *Load Flow*.  
  **Ans.** calculates bus voltages and power flows
- **Q.** Define *Slack Bus*.  
  **Ans.** reference bus with fixed V and δ
- **Q.** Define *PV Bus*.  
  **Ans.** generator bus with fixed P and voltage magnitude
- **Q.** Define *Gauss-Seidel Load Flow*.  
  **Ans.** updates voltages one bus at a time
- **Q.** Define *Acceleration Factor*.  
  **Ans.** speeds convergence, about 1.6
- **Q.** Define *Convergence*.  
  **Ans.** slow for large systems
- **Q.** Define *Newton-Raphson Load Flow*.  
  **Ans.** uses Jacobian matrix
- **Q.** Define *Jacobian*.  
  **Ans.** partial derivatives of power equations
- **Q.** Define *Convergence*.  
  **Ans.** few iterations
- **Q.** Define *FDLF*.  
  **Ans.** decouples P-δ and Q-V
- **Q.** Define *Constant Jacobian*.  
  **Ans.** reduces computation
- **Q.** Define *Applications*.  
  **Ans.** real-time studies

### Long answer (7 marks)

- **Q.** Explain *Load Flow Problem* in detail with a neat diagram.  
  **Key points:** Load flow finds steady-state voltages. Load Flow — calculates bus voltages and power flows; Slack Bus — reference bus with fixed V and δ; PV Bus — generator bus with fixed P and voltage magnitude.
- **Q.** Explain *Gauss-Seidel Method* in detail with a neat diagram.  
  **Key points:** Iterative method using Ybus. Gauss-Seidel Load Flow — updates voltages one bus at a time; Acceleration Factor — speeds convergence, about 1.6; Convergence — slow for large systems.
- **Q.** Explain *Newton-Raphson Method* in detail with a neat diagram.  
  **Key points:** Fast quadratic convergence. Newton-Raphson Load Flow — uses Jacobian matrix; Jacobian — partial derivatives of power equations; Convergence — few iterations.
- **Q.** Explain *Fast Decoupled Load Flow* in detail with a neat diagram.  
  **Key points:** Approximations speed computation. FDLF — decouples P-δ and Q-V; Constant Jacobian — reduces computation; Applications — real-time studies.

## Unit 3: Economic Operation

### Short answer (2-3 marks)

- **Q.** Define *Incremental Cost*.  
  **Ans.** dC/dP of generator
- **Q.** Define *Equal Incremental Cost Criterion*.  
  **Ans.** optimal dispatch condition
- **Q.** Define *Lagrange Multiplier*.  
  **Ans.** system incremental cost λ
- **Q.** Define *B-coefficients*.  
  **Ans.** model transmission loss
- **Q.** Define *Penalty Factor*.  
  **Ans.** Li = 1/(1 − ∂PL/∂Pi)
- **Q.** Define *Loss Formula*.  
  **Ans.** PL = Σ Σ Pi Bij Pj
- **Q.** Define *Unit Commitment*.  
  **Ans.** scheduling on/off of units
- **Q.** Define *Spinning Reserve*.  
  **Ans.** online unused capacity
- **Q.** Define *Priority List Method*.  
  **Ans.** commits cheapest units first
- **Q.** Define *Hydrothermal Scheduling*.  
  **Ans.** minimise thermal cost using hydro
- **Q.** Define *Water Value*.  
  **Ans.** equivalent cost of water
- **Q.** Define *Short-term Scheduling*.  
  **Ans.** daily operation

### Long answer (7 marks)

- **Q.** Explain *Economic Dispatch* in detail with a neat diagram.  
  **Key points:** Load is shared at minimum cost. Incremental Cost — dC/dP of generator; Equal Incremental Cost Criterion — optimal dispatch condition; Lagrange Multiplier — system incremental cost λ.
- **Q.** Explain *Transmission Losses* in detail with a neat diagram.  
  **Key points:** Losses affect dispatch. B-coefficients — model transmission loss; Penalty Factor — Li = 1/(1 − ∂PL/∂Pi); Loss Formula — PL = Σ Σ Pi Bij Pj.
- **Q.** Explain *Unit Commitment* in detail with a neat diagram.  
  **Key points:** Decide which units run. Unit Commitment — scheduling on/off of units; Spinning Reserve — online unused capacity; Priority List Method — commits cheapest units first.
- **Q.** Explain *Hydro-thermal Coordination* in detail with a neat diagram.  
  **Key points:** Hydro and thermal plants are scheduled together. Hydrothermal Scheduling — minimise thermal cost using hydro; Water Value — equivalent cost of water; Short-term Scheduling — daily operation.

## Unit 4: Fault Analysis

### Short answer (2-3 marks)

- **Q.** Define *Symmetrical Fault*.  
  **Ans.** three-phase fault
- **Q.** Define *Short Circuit MVA*.  
  **Ans.** base MVA / Zpu
- **Q.** Define *Current Limiting Reactor*.  
  **Ans.** limits fault current
- **Q.** Define *Symmetrical Components*.  
  **Ans.** positive, negative and zero sequence
- **Q.** Define *Operator a*.  
  **Ans.** 1∠120°
- **Q.** Define *Sequence Impedances*.  
  **Ans.** differ for machines and lines
- **Q.** Define *LG Fault Current*.  
  **Ans.** If = 3E/(Z1 + Z2 + Z0)
- **Q.** Define *LL Fault*.  
  **Ans.** involves positive and negative sequence
- **Q.** Define *LLG Fault*.  
  **Ans.** involves all three sequences
- **Q.** Define *Fault Current from Zbus*.  
  **Ans.** If = Vf/(Zkk + Zf)
- **Q.** Define *Post-fault Voltages*.  
  **Ans.** from Zbus elements
- **Q.** Define *Circuit Breaker Rating*.  
  **Ans.** from fault MVA

### Long answer (7 marks)

- **Q.** Explain *Symmetrical Faults* in detail with a neat diagram.  
  **Key points:** Three-phase faults are balanced. Symmetrical Fault — three-phase fault; Short Circuit MVA — base MVA / Zpu; Current Limiting Reactor — limits fault current.
- **Q.** Explain *Symmetrical Components* in detail with a neat diagram.  
  **Key points:** Unbalanced systems are decomposed. Symmetrical Components — positive, negative and zero sequence; Operator a — 1∠120°; Sequence Impedances — differ for machines and lines.
- **Q.** Explain *Unsymmetrical Faults* in detail with a neat diagram.  
  **Key points:** LG, LL and LLG faults. LG Fault Current — If = 3E/(Z1 + Z2 + Z0); LL Fault — involves positive and negative sequence; LLG Fault — involves all three sequences.
- **Q.** Explain *Fault Analysis Using Zbus* in detail with a neat diagram.  
  **Key points:** Systematic fault computation. Fault Current from Zbus — If = Vf/(Zkk + Zf); Post-fault Voltages — from Zbus elements; Circuit Breaker Rating — from fault MVA.

## Unit 5: Power System Stability & Control

### Short answer (2-3 marks)

- **Q.** Define *Steady-state Stability*.  
  **Ans.** small slow disturbances
- **Q.** Define *Transient Stability*.  
  **Ans.** large sudden disturbances
- **Q.** Define *Swing Equation*.  
  **Ans.** M d²δ/dt² = Pm − Pe
- **Q.** Define *Equal Area Criterion*.  
  **Ans.** accelerating area equals decelerating area
- **Q.** Define *Critical Clearing Angle*.  
  **Ans.** maximum angle for stability
- **Q.** Define *Critical Clearing Time*.  
  **Ans.** time to clear fault
- **Q.** Define *Speed Governor*.  
  **Ans.** adjusts mechanical power
- **Q.** Define *Speed Regulation*.  
  **Ans.** R = Δf/ΔP
- **Q.** Define *AGC*.  
  **Ans.** automatic generation control
- **Q.** Define *Reactive Power Compensation*.  
  **Ans.** capacitors and reactors
- **Q.** Define *Tap Changing Transformer*.  
  **Ans.** voltage regulation
- **Q.** Define *AVR*.  
  **Ans.** automatic voltage regulator

### Long answer (7 marks)

- **Q.** Explain *Stability Concepts* in detail with a neat diagram.  
  **Key points:** Stability is ability to remain in synchronism. Steady-state Stability — small slow disturbances; Transient Stability — large sudden disturbances; Swing Equation — M d²δ/dt² = Pm − Pe.
- **Q.** Explain *Equal Area Criterion* in detail with a neat diagram.  
  **Key points:** Graphical transient stability. Equal Area Criterion — accelerating area equals decelerating area; Critical Clearing Angle — maximum angle for stability; Critical Clearing Time — time to clear fault.
- **Q.** Explain *Load Frequency Control* in detail with a neat diagram.  
  **Key points:** Frequency is regulated by governors. Speed Governor — adjusts mechanical power; Speed Regulation — R = Δf/ΔP; AGC — automatic generation control.
- **Q.** Explain *Voltage Control* in detail with a neat diagram.  
  **Key points:** Reactive power controls voltage. Reactive Power Compensation — capacitors and reactors; Tap Changing Transformer — voltage regulation; AVR — automatic voltage regulator.

