# EC-404 Control System — Question Bank with Answer Hints

## Unit 1: Introduction & Modelling

### Short answer (2-3 marks)

- **Q.** Define *Open-loop System*.  
  **Ans.** output has no effect on control action
- **Q.** Define *Closed-loop System*.  
  **Ans.** output fed back to correct errors
- **Q.** Define *Feedback*.  
  **Ans.** comparison of output with reference
- **Q.** Define *Transfer Function*.  
  **Ans.** Laplace output over input with zero initial conditions
- **Q.** Define *Order of System*.  
  **Ans.** highest power of s in the denominator
- **Q.** Define *Characteristic Equation*.  
  **Ans.** denominator of closed-loop TF set to zero
- **Q.** Define *Closed-loop TF*.  
  **Ans.** G/(1 + GH) for negative feedback
- **Q.** Define *Cascade Blocks*.  
  **Ans.** transfer functions multiply
- **Q.** Define *Moving a Summing Point*.  
  **Ans.** rules preserve the overall TF
- **Q.** Define *Signal Flow Graph*.  
  **Ans.** nodes and branches representing signals
- **Q.** Define *Mason's Gain Formula*.  
  **Ans.** T = Σ Pk Δk / Δ
- **Q.** Define *Non-touching Loops*.  
  **Ans.** loops with no common node

### Long answer (7 marks)

- **Q.** Explain *Control System Basics* in detail with a neat diagram.  
  **Key points:** Control systems regulate outputs using inputs and feedback. Open-loop System — output has no effect on control action; Closed-loop System — output fed back to correct errors; Feedback — comparison of output with reference.
- **Q.** Explain *Transfer Function* in detail with a neat diagram.  
  **Key points:** Transfer functions model LTI systems in s-domain. Transfer Function — Laplace output over input with zero initial conditions; Order of System — highest power of s in the denominator; Characteristic Equation — denominator of closed-loop TF set to zero.
- **Q.** Explain *Block Diagram Reduction* in detail with a neat diagram.  
  **Key points:** Block diagrams combine into one transfer function. Closed-loop TF — G/(1 + GH) for negative feedback; Cascade Blocks — transfer functions multiply; Moving a Summing Point — rules preserve the overall TF.
- **Q.** Explain *Signal Flow Graph & Mason's Gain* in detail with a neat diagram.  
  **Key points:** SFGs and Mason's rule find overall gain. Signal Flow Graph — nodes and branches representing signals; Mason's Gain Formula — T = Σ Pk Δk / Δ; Non-touching Loops — loops with no common node.

## Unit 2: Time Response Analysis

### Short answer (2-3 marks)

- **Q.** Define *Step Input*.  
  **Ans.** sudden constant change
- **Q.** Define *Ramp Input*.  
  **Ans.** linearly increasing input
- **Q.** Define *Impulse Response*.  
  **Ans.** inverse Laplace of the transfer function
- **Q.** Define *Time Constant*.  
  **Ans.** time to reach 63.2% for a first-order step response
- **Q.** Define *Natural Frequency*.  
  **Ans.** ωn, oscillation frequency without damping
- **Q.** Define *Damping Ratio*.  
  **Ans.** ζ determines oscillation and overshoot
- **Q.** Define *Peak Overshoot*.  
  **Ans.** Mp = e^(−πζ/√(1 − ζ²))
- **Q.** Define *Settling Time*.  
  **Ans.** about 4/(ζωn) for 2% band
- **Q.** Define *Rise Time*.  
  **Ans.** time from 10% to 90% of final value
- **Q.** Define *Type of System*.  
  **Ans.** number of poles at the origin
- **Q.** Define *Position Error Constant*.  
  **Ans.** Kp = lim G(s)H(s) as s → 0
- **Q.** Define *Velocity Error Constant*.  
  **Ans.** Kv = lim s·G(s)H(s) as s → 0

### Long answer (7 marks)

- **Q.** Explain *Standard Test Signals* in detail with a neat diagram.  
  **Key points:** Systems are tested with standard inputs. Step Input — sudden constant change; Ramp Input — linearly increasing input; Impulse Response — inverse Laplace of the transfer function.
- **Q.** Explain *First & Second Order Response* in detail with a neat diagram.  
  **Key points:** Order determines response shape. Time Constant — time to reach 63.2% for a first-order step response; Natural Frequency — ωn, oscillation frequency without damping; Damping Ratio — ζ determines oscillation and overshoot.
- **Q.** Explain *Time-domain Specifications* in detail with a neat diagram.  
  **Key points:** Specifications describe transient performance. Peak Overshoot — Mp = e^(−πζ/√(1 − ζ²)); Settling Time — about 4/(ζωn) for 2% band; Rise Time — time from 10% to 90% of final value.
- **Q.** Explain *Steady-state Error* in detail with a neat diagram.  
  **Key points:** Error constants measure steady-state accuracy. Type of System — number of poles at the origin; Position Error Constant — Kp = lim G(s)H(s) as s → 0; Velocity Error Constant — Kv = lim s·G(s)H(s) as s → 0.

## Unit 3: Stability Analysis

### Short answer (2-3 marks)

- **Q.** Define *BIBO Stability*.  
  **Ans.** bounded input gives bounded output
- **Q.** Define *Absolute Stability*.  
  **Ans.** whether the system is stable or not
- **Q.** Define *Relative Stability*.  
  **Ans.** how close a stable system is to instability
- **Q.** Define *Routh Array*.  
  **Ans.** tabulation from characteristic equation coefficients
- **Q.** Define *Sign Changes*.  
  **Ans.** number equals roots in right half-plane
- **Q.** Define *Row of Zeros*.  
  **Ans.** indicates symmetric roots; use auxiliary equation
- **Q.** Define *Root Locus*.  
  **Ans.** path of closed-loop poles as K goes from 0 to ∞
- **Q.** Define *Asymptote Angle*.  
  **Ans.** (2q + 1)180° / (P − Z)
- **Q.** Define *Breakaway Point*.  
  **Ans.** where loci leave the real axis
- **Q.** Define *Adding a Zero*.  
  **Ans.** tends to increase stability and speed
- **Q.** Define *Adding a Pole*.  
  **Ans.** tends to reduce stability
- **Q.** Define *Dominant Poles*.  
  **Ans.** poles nearest the jω-axis govern response

### Long answer (7 marks)

- **Q.** Explain *Concept of Stability* in detail with a neat diagram.  
  **Key points:** Stable systems return to equilibrium. BIBO Stability — bounded input gives bounded output; Absolute Stability — whether the system is stable or not; Relative Stability — how close a stable system is to instability.
- **Q.** Explain *Routh-Hurwitz Criterion* in detail with a neat diagram.  
  **Key points:** Routh array checks stability without solving roots. Routh Array — tabulation from characteristic equation coefficients; Sign Changes — number equals roots in right half-plane; Row of Zeros — indicates symmetric roots; use auxiliary equation.
- **Q.** Explain *Root Locus* in detail with a neat diagram.  
  **Key points:** Root locus tracks closed-loop poles as gain varies. Root Locus — path of closed-loop poles as K goes from 0 to ∞; Asymptote Angle — (2q + 1)180° / (P − Z); Breakaway Point — where loci leave the real axis.
- **Q.** Explain *Effect of Adding Poles & Zeros* in detail with a neat diagram.  
  **Key points:** Pole-zero placement shapes response. Adding a Zero — tends to increase stability and speed; Adding a Pole — tends to reduce stability; Dominant Poles — poles nearest the jω-axis govern response.

## Unit 4: Frequency Response Analysis

### Short answer (2-3 marks)

- **Q.** Define *Resonant Peak*.  
  **Ans.** Mr, maximum of closed-loop magnitude
- **Q.** Define *Bandwidth*.  
  **Ans.** frequency range where gain ≥ −3 dB
- **Q.** Define *Correlation with Time Domain*.  
  **Ans.** higher bandwidth means faster response
- **Q.** Define *Bode Plot*.  
  **Ans.** magnitude in dB and phase versus log ω
- **Q.** Define *Corner Frequency*.  
  **Ans.** where asymptote slope changes
- **Q.** Define *Slope of Pole*.  
  **Ans.** −20 dB per decade for each simple pole
- **Q.** Define *Gain Margin*.  
  **Ans.** gain change needed to reach instability at phase crossover
- **Q.** Define *Phase Margin*.  
  **Ans.** 180° + phase at gain crossover
- **Q.** Define *Stable Condition*.  
  **Ans.** positive gain and phase margins
- **Q.** Define *Polar Plot*.  
  **Ans.** locus of G(jω) in the complex plane
- **Q.** Define *Nyquist Criterion*.  
  **Ans.** Z = N + P, encirclements of −1 point
- **Q.** Define *Nichols Chart*.  
  **Ans.** magnitude versus phase with closed-loop contours

### Long answer (7 marks)

- **Q.** Explain *Frequency-domain Specifications* in detail with a neat diagram.  
  **Key points:** Frequency response describes steady-state sinusoidal behaviour. Resonant Peak — Mr, maximum of closed-loop magnitude; Bandwidth — frequency range where gain ≥ −3 dB; Correlation with Time Domain — higher bandwidth means faster response.
- **Q.** Explain *Bode Plot* in detail with a neat diagram.  
  **Key points:** Bode plots show magnitude and phase on log frequency. Bode Plot — magnitude in dB and phase versus log ω; Corner Frequency — where asymptote slope changes; Slope of Pole — −20 dB per decade for each simple pole.
- **Q.** Explain *Gain & Phase Margin* in detail with a neat diagram.  
  **Key points:** Margins measure relative stability. Gain Margin — gain change needed to reach instability at phase crossover; Phase Margin — 180° + phase at gain crossover; Stable Condition — positive gain and phase margins.
- **Q.** Explain *Nyquist & Polar Plots* in detail with a neat diagram.  
  **Key points:** Nyquist criterion assesses closed-loop stability from open-loop data. Polar Plot — locus of G(jω) in the complex plane; Nyquist Criterion — Z = N + P, encirclements of −1 point; Nichols Chart — magnitude versus phase with closed-loop contours.

## Unit 5: Controllers & State Space

### Short answer (2-3 marks)

- **Q.** Define *Lead Compensator*.  
  **Ans.** adds phase lead to improve transient response
- **Q.** Define *Lag Compensator*.  
  **Ans.** improves steady-state error
- **Q.** Define *Lead-Lag Compensator*.  
  **Ans.** combines both effects
- **Q.** Define *Proportional Control*.  
  **Ans.** output proportional to error
- **Q.** Define *Integral Control*.  
  **Ans.** removes steady-state error
- **Q.** Define *Derivative Control*.  
  **Ans.** anticipates error and improves damping
- **Q.** Define *State Equation*.  
  **Ans.** ẋ = Ax + Bu
- **Q.** Define *Output Equation*.  
  **Ans.** y = Cx + Du
- **Q.** Define *State Transition Matrix*.  
  **Ans.** φ(t) = e^(At)
- **Q.** Define *Controllability*.  
  **Ans.** all states can be driven by inputs
- **Q.** Define *Kalman Controllability Matrix*.  
  **Ans.** [B AB A²B …] must have full rank
- **Q.** Define *Observability*.  
  **Ans.** states can be determined from outputs

### Long answer (7 marks)

- **Q.** Explain *Compensators* in detail with a neat diagram.  
  **Key points:** Compensators reshape system response. Lead Compensator — adds phase lead to improve transient response; Lag Compensator — improves steady-state error; Lead-Lag Compensator — combines both effects.
- **Q.** Explain *PID Controllers* in detail with a neat diagram.  
  **Key points:** PID combines proportional, integral and derivative action. Proportional Control — output proportional to error; Integral Control — removes steady-state error; Derivative Control — anticipates error and improves damping.
- **Q.** Explain *State-space Representation* in detail with a neat diagram.  
  **Key points:** State models handle MIMO and time-varying systems. State Equation — ẋ = Ax + Bu; Output Equation — y = Cx + Du; State Transition Matrix — φ(t) = e^(At).
- **Q.** Explain *Controllability & Observability* in detail with a neat diagram.  
  **Key points:** These properties decide if states can be controlled or estimated. Controllability — all states can be driven by inputs; Kalman Controllability Matrix — [B AB A²B …] must have full rank; Observability — states can be determined from outputs.

