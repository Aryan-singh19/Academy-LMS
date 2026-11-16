# EC-404 Control System — Unit-wise Study Notes

> Control system modelling, time response, stability, root locus, frequency response and state-space analysis.

## Unit 1: Introduction & Modelling

### Control System Basics

Control systems regulate outputs using inputs and feedback.

- **Open-loop System:** output has no effect on control action
- **Closed-loop System:** output fed back to correct errors
- **Feedback:** comparison of output with reference

### Transfer Function

Transfer functions model LTI systems in s-domain.

- **Transfer Function:** Laplace output over input with zero initial conditions
- **Order of System:** highest power of s in the denominator
- **Characteristic Equation:** denominator of closed-loop TF set to zero

### Block Diagram Reduction

Block diagrams combine into one transfer function.

- **Closed-loop TF:** G/(1 + GH) for negative feedback
- **Cascade Blocks:** transfer functions multiply
- **Moving a Summing Point:** rules preserve the overall TF

### Signal Flow Graph & Mason's Gain

SFGs and Mason's rule find overall gain.

- **Signal Flow Graph:** nodes and branches representing signals
- **Mason's Gain Formula:** T = Σ Pk Δk / Δ
- **Non-touching Loops:** loops with no common node

## Unit 2: Time Response Analysis

### Standard Test Signals

Systems are tested with standard inputs.

- **Step Input:** sudden constant change
- **Ramp Input:** linearly increasing input
- **Impulse Response:** inverse Laplace of the transfer function

### First & Second Order Response

Order determines response shape.

- **Time Constant:** time to reach 63.2% for a first-order step response
- **Natural Frequency:** ωn, oscillation frequency without damping
- **Damping Ratio:** ζ determines oscillation and overshoot

### Time-domain Specifications

Specifications describe transient performance.

- **Peak Overshoot:** Mp = e^(−πζ/√(1 − ζ²))
- **Settling Time:** about 4/(ζωn) for 2% band
- **Rise Time:** time from 10% to 90% of final value

### Steady-state Error

Error constants measure steady-state accuracy.

- **Type of System:** number of poles at the origin
- **Position Error Constant:** Kp = lim G(s)H(s) as s → 0
- **Velocity Error Constant:** Kv = lim s·G(s)H(s) as s → 0

## Unit 3: Stability Analysis

### Concept of Stability

Stable systems return to equilibrium.

- **BIBO Stability:** bounded input gives bounded output
- **Absolute Stability:** whether the system is stable or not
- **Relative Stability:** how close a stable system is to instability

### Routh-Hurwitz Criterion

Routh array checks stability without solving roots.

- **Routh Array:** tabulation from characteristic equation coefficients
- **Sign Changes:** number equals roots in right half-plane
- **Row of Zeros:** indicates symmetric roots; use auxiliary equation

### Root Locus

Root locus tracks closed-loop poles as gain varies.

- **Root Locus:** path of closed-loop poles as K goes from 0 to ∞
- **Asymptote Angle:** (2q + 1)180° / (P − Z)
- **Breakaway Point:** where loci leave the real axis

### Effect of Adding Poles & Zeros

Pole-zero placement shapes response.

- **Adding a Zero:** tends to increase stability and speed
- **Adding a Pole:** tends to reduce stability
- **Dominant Poles:** poles nearest the jω-axis govern response

## Unit 4: Frequency Response Analysis

### Frequency-domain Specifications

Frequency response describes steady-state sinusoidal behaviour.

- **Resonant Peak:** Mr, maximum of closed-loop magnitude
- **Bandwidth:** frequency range where gain ≥ −3 dB
- **Correlation with Time Domain:** higher bandwidth means faster response

### Bode Plot

Bode plots show magnitude and phase on log frequency.

- **Bode Plot:** magnitude in dB and phase versus log ω
- **Corner Frequency:** where asymptote slope changes
- **Slope of Pole:** −20 dB per decade for each simple pole

### Gain & Phase Margin

Margins measure relative stability.

- **Gain Margin:** gain change needed to reach instability at phase crossover
- **Phase Margin:** 180° + phase at gain crossover
- **Stable Condition:** positive gain and phase margins

### Nyquist & Polar Plots

Nyquist criterion assesses closed-loop stability from open-loop data.

- **Polar Plot:** locus of G(jω) in the complex plane
- **Nyquist Criterion:** Z = N + P, encirclements of −1 point
- **Nichols Chart:** magnitude versus phase with closed-loop contours

## Unit 5: Controllers & State Space

### Compensators

Compensators reshape system response.

- **Lead Compensator:** adds phase lead to improve transient response
- **Lag Compensator:** improves steady-state error
- **Lead-Lag Compensator:** combines both effects

### PID Controllers

PID combines proportional, integral and derivative action.

- **Proportional Control:** output proportional to error
- **Integral Control:** removes steady-state error
- **Derivative Control:** anticipates error and improves damping

### State-space Representation

State models handle MIMO and time-varying systems.

- **State Equation:** ẋ = Ax + Bu
- **Output Equation:** y = Cx + Du
- **State Transition Matrix:** φ(t) = e^(At)

### Controllability & Observability

These properties decide if states can be controlled or estimated.

- **Controllability:** all states can be driven by inputs
- **Kalman Controllability Matrix:** [B AB A²B …] must have full rank
- **Observability:** states can be determined from outputs

## Standard Textbooks

- *Control Systems Engineering* — I. J. Nagrath & M. Gopal
- *Modern Control Engineering* — Katsuhiko Ogata
- *Automatic Control Systems* — Benjamin C. Kuo

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
