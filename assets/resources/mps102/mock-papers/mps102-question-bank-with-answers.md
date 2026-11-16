# MPS-102 Power System Dynamics & Stability — Question Bank with Answer Hints

## Unit 1: Synchronous Machine Modelling

### Short answer (2-3 marks)

- **Q.** Define *Park's Transformation*.  
  **Ans.** converts abc to dq0
- **Q.** Define *d-axis*.  
  **Ans.** aligned with field
- **Q.** Define *q-axis*.  
  **Ans.** 90° ahead of d-axis
- **Q.** Define *Synchronous Reactance*.  
  **Ans.** steady state Xd
- **Q.** Define *Transient Reactance*.  
  **Ans.** X'd after subtransient decay
- **Q.** Define *Subtransient Reactance*.  
  **Ans.** X''d immediately after fault
- **Q.** Define *T'do*.  
  **Ans.** open-circuit transient time constant
- **Q.** Define *T''d*.  
  **Ans.** subtransient time constant
- **Q.** Define *Field Winding Dynamics*.  
  **Ans.** flux decay
- **Q.** Define *Classical Model*.  
  **Ans.** constant voltage behind X'd
- **Q.** Define *One-axis Model*.  
  **Ans.** includes field dynamics
- **Q.** Define *Swing Equation*.  
  **Ans.** 2H/ωs d²δ/dt² = Pm − Pe

### Long answer (7 marks)

- **Q.** Explain *Park's Transformation* in detail with a neat diagram.  
  **Key points:** dq0 frame simplifies machine equations. Park's Transformation — converts abc to dq0; d-axis — aligned with field; q-axis — 90° ahead of d-axis.
- **Q.** Explain *Machine Reactances* in detail with a neat diagram.  
  **Key points:** Different reactances for time scales. Synchronous Reactance — steady state Xd; Transient Reactance — X'd after subtransient decay; Subtransient Reactance — X''d immediately after fault.
- **Q.** Explain *Time Constants* in detail with a neat diagram.  
  **Key points:** Decay of currents. T'do — open-circuit transient time constant; T''d — subtransient time constant; Field Winding Dynamics — flux decay.
- **Q.** Explain *Simplified Models* in detail with a neat diagram.  
  **Key points:** Models for stability studies. Classical Model — constant voltage behind X'd; One-axis Model — includes field dynamics; Swing Equation — 2H/ωs d²δ/dt² = Pm − Pe.

## Unit 2: Excitation & Governor Systems

### Short answer (2-3 marks)

- **Q.** Define *DC Exciter*.  
  **Ans.** older rotating exciter
- **Q.** Define *Static Exciter*.  
  **Ans.** thyristor-based excitation
- **Q.** Define *AVR*.  
  **Ans.** automatic voltage regulator
- **Q.** Define *IEEE Type ST1A*.  
  **Ans.** static exciter model
- **Q.** Define *Exciter Gain*.  
  **Ans.** high gain improves voltage regulation
- **Q.** Define *Limiters*.  
  **Ans.** protect against over-excitation
- **Q.** Define *PSS*.  
  **Ans.** adds damping via excitation
- **Q.** Define *Phase Compensation*.  
  **Ans.** lead-lag blocks
- **Q.** Define *Washout Filter*.  
  **Ans.** removes steady-state signals
- **Q.** Define *Speed Governor*.  
  **Ans.** adjusts valve/gate
- **Q.** Define *Droop*.  
  **Ans.** speed regulation characteristic
- **Q.** Define *Turbine Model*.  
  **Ans.** steam or hydro dynamics

### Long answer (7 marks)

- **Q.** Explain *Excitation Systems* in detail with a neat diagram.  
  **Key points:** Control generator voltage. DC Exciter — older rotating exciter; Static Exciter — thyristor-based excitation; AVR — automatic voltage regulator.
- **Q.** Explain *Excitation System Models* in detail with a neat diagram.  
  **Key points:** IEEE standard models. IEEE Type ST1A — static exciter model; Exciter Gain — high gain improves voltage regulation; Limiters — protect against over-excitation.
- **Q.** Explain *Power System Stabiliser* in detail with a neat diagram.  
  **Key points:** Damps oscillations. PSS — adds damping via excitation; Phase Compensation — lead-lag blocks; Washout Filter — removes steady-state signals.
- **Q.** Explain *Prime Mover & Governor* in detail with a neat diagram.  
  **Key points:** Control mechanical power. Speed Governor — adjusts valve/gate; Droop — speed regulation characteristic; Turbine Model — steam or hydro dynamics.

## Unit 3: Small-signal Stability

### Short answer (2-3 marks)

- **Q.** Define *State-space Model*.  
  **Ans.** ẋ = Ax + Bu
- **Q.** Define *Eigenvalues*.  
  **Ans.** determine stability
- **Q.** Define *Damping Ratio of Mode*.  
  **Ans.** −σ/√(σ² + ω²)
- **Q.** Define *Heffron-Phillips Constants*.  
  **Ans.** K1-K6
- **Q.** Define *Synchronising Torque*.  
  **Ans.** in phase with δ
- **Q.** Define *Damping Torque*.  
  **Ans.** in phase with speed
- **Q.** Define *Local Mode*.  
  **Ans.** 1-2 Hz, one plant against system
- **Q.** Define *Inter-area Mode*.  
  **Ans.** 0.1-0.8 Hz between regions
- **Q.** Define *Participation Factor*.  
  **Ans.** state contribution to mode
- **Q.** Define *PSS Tuning*.  
  **Ans.** places damping on modes
- **Q.** Define *FACTS Damping Controller*.  
  **Ans.** auxiliary damping
- **Q.** Define *Wide-area Damping*.  
  **Ans.** uses remote PMU signals

### Long answer (7 marks)

- **Q.** Explain *Linearisation* in detail with a neat diagram.  
  **Key points:** Analysing small perturbations. State-space Model — ẋ = Ax + Bu; Eigenvalues — determine stability; Damping Ratio of Mode — −σ/√(σ² + ω²).
- **Q.** Explain *Heffron-Phillips Model* in detail with a neat diagram.  
  **Key points:** Single machine infinite bus. Heffron-Phillips Constants — K1-K6; Synchronising Torque — in phase with δ; Damping Torque — in phase with speed.
- **Q.** Explain *Modes of Oscillation* in detail with a neat diagram.  
  **Key points:** Types of electromechanical modes. Local Mode — 1-2 Hz, one plant against system; Inter-area Mode — 0.1-0.8 Hz between regions; Participation Factor — state contribution to mode.
- **Q.** Explain *Damping Control* in detail with a neat diagram.  
  **Key points:** Improving small-signal stability. PSS Tuning — places damping on modes; FACTS Damping Controller — auxiliary damping; Wide-area Damping — uses remote PMU signals.

## Unit 4: Transient Stability

### Short answer (2-3 marks)

- **Q.** Define *Transient Stability*.  
  **Ans.** maintaining synchronism after large disturbance
- **Q.** Define *First Swing Stability*.  
  **Ans.** stable in first oscillation
- **Q.** Define *Multi-machine Stability*.  
  **Ans.** all generators in synchronism
- **Q.** Define *Equal Area Criterion*.  
  **Ans.** accelerating area equals decelerating area
- **Q.** Define *Critical Clearing Angle*.  
  **Ans.** maximum angle to clear fault
- **Q.** Define *Critical Clearing Time*.  
  **Ans.** corresponding time
- **Q.** Define *Euler Method*.  
  **Ans.** simple numerical integration
- **Q.** Define *Runge-Kutta Method*.  
  **Ans.** more accurate integration
- **Q.** Define *Trapezoidal Rule*.  
  **Ans.** implicit integration in simulators
- **Q.** Define *Fast Fault Clearing*.  
  **Ans.** reduces accelerating area
- **Q.** Define *Fast Valving*.  
  **Ans.** reduces mechanical power
- **Q.** Define *Braking Resistor*.  
  **Ans.** absorbs excess power

### Long answer (7 marks)

- **Q.** Explain *Transient Stability Concepts* in detail with a neat diagram.  
  **Key points:** Large disturbance stability. Transient Stability — maintaining synchronism after large disturbance; First Swing Stability — stable in first oscillation; Multi-machine Stability — all generators in synchronism.
- **Q.** Explain *Equal Area Criterion* in detail with a neat diagram.  
  **Key points:** SMIB transient stability. Equal Area Criterion — accelerating area equals decelerating area; Critical Clearing Angle — maximum angle to clear fault; Critical Clearing Time — corresponding time.
- **Q.** Explain *Numerical Methods* in detail with a neat diagram.  
  **Key points:** Solving swing equations. Euler Method — simple numerical integration; Runge-Kutta Method — more accurate integration; Trapezoidal Rule — implicit integration in simulators.
- **Q.** Explain *Enhancement Methods* in detail with a neat diagram.  
  **Key points:** Improving transient stability. Fast Fault Clearing — reduces accelerating area; Fast Valving — reduces mechanical power; Braking Resistor — absorbs excess power.

## Unit 5: Voltage Stability

### Short answer (2-3 marks)

- **Q.** Define *Voltage Stability*.  
  **Ans.** ability to maintain voltages after disturbance
- **Q.** Define *Voltage Collapse*.  
  **Ans.** progressive voltage decline
- **Q.** Define *Reactive Power Deficiency*.  
  **Ans.** main cause
- **Q.** Define *PV Curve*.  
  **Ans.** nose curve showing loadability
- **Q.** Define *Nose Point*.  
  **Ans.** maximum loadability
- **Q.** Define *QV Curve*.  
  **Ans.** reactive power margin
- **Q.** Define *Continuation Power Flow*.  
  **Ans.** traces PV curve
- **Q.** Define *Modal Analysis*.  
  **Ans.** eigenvalues of reduced Jacobian
- **Q.** Define *L-index*.  
  **Ans.** voltage stability indicator
- **Q.** Define *Under-voltage Load Shedding*.  
  **Ans.** removes load to restore voltage
- **Q.** Define *OLTC Blocking*.  
  **Ans.** stops tap changer action
- **Q.** Define *Reactive Reserve*.  
  **Ans.** keep generators' reactive margin

### Long answer (7 marks)

- **Q.** Explain *Voltage Stability Concepts* in detail with a neat diagram.  
  **Key points:** Maintaining acceptable voltages. Voltage Stability — ability to maintain voltages after disturbance; Voltage Collapse — progressive voltage decline; Reactive Power Deficiency — main cause.
- **Q.** Explain *PV & QV Curves* in detail with a neat diagram.  
  **Key points:** Tools for voltage stability. PV Curve — nose curve showing loadability; Nose Point — maximum loadability; QV Curve — reactive power margin.
- **Q.** Explain *Analysis Methods* in detail with a neat diagram.  
  **Key points:** Assessing voltage stability. Continuation Power Flow — traces PV curve; Modal Analysis — eigenvalues of reduced Jacobian; L-index — voltage stability indicator.
- **Q.** Explain *Prevention of Collapse* in detail with a neat diagram.  
  **Key points:** Countermeasures. Under-voltage Load Shedding — removes load to restore voltage; OLTC Blocking — stops tap changer action; Reactive Reserve — keep generators' reactive margin.

