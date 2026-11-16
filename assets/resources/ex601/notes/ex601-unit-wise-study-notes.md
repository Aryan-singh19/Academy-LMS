# EX-601 Power System-II — Unit-wise Study Notes

> Per-unit system, load flow studies, economic dispatch, fault analysis, stability and power system control.

## Unit 1: Per-unit System & Network Matrices

### Per-unit System

Normalised quantities simplify analysis.

- **Per-unit Value:** actual value / base value
- **Base Impedance:** Zb = kVb²/MVAb
- **Change of Base:** Znew = Zold (MVAnew/MVAold)(kVold/kVnew)²

### Single Line Diagram

Simplified representation of system.

- **Single Line Diagram:** one-line representation of three-phase system
- **Impedance Diagram:** equivalent circuit for analysis
- **Reactance Diagram:** resistance neglected

### Bus Admittance Matrix

Network modelled by Ybus.

- **Ybus:** bus admittance matrix
- **Diagonal Element:** sum of admittances at bus
- **Off-diagonal Element:** negative admittance between buses

### Bus Impedance Matrix

Zbus is used for fault analysis.

- **Zbus:** inverse of Ybus
- **Zbus Building Algorithm:** step-by-step addition of elements
- **Sparsity:** Ybus is sparse

## Unit 2: Load Flow Studies

### Load Flow Problem

Load flow finds steady-state voltages.

- **Load Flow:** calculates bus voltages and power flows
- **Slack Bus:** reference bus with fixed V and δ
- **PV Bus:** generator bus with fixed P and voltage magnitude

### Gauss-Seidel Method

Iterative method using Ybus.

- **Gauss-Seidel Load Flow:** updates voltages one bus at a time
- **Acceleration Factor:** speeds convergence, about 1.6
- **Convergence:** slow for large systems

### Newton-Raphson Method

Fast quadratic convergence.

- **Newton-Raphson Load Flow:** uses Jacobian matrix
- **Jacobian:** partial derivatives of power equations
- **Convergence:** few iterations

### Fast Decoupled Load Flow

Approximations speed computation.

- **FDLF:** decouples P-δ and Q-V
- **Constant Jacobian:** reduces computation
- **Applications:** real-time studies

## Unit 3: Economic Operation

### Economic Dispatch

Load is shared at minimum cost.

- **Incremental Cost:** dC/dP of generator
- **Equal Incremental Cost Criterion:** optimal dispatch condition
- **Lagrange Multiplier:** system incremental cost λ

### Transmission Losses

Losses affect dispatch.

- **B-coefficients:** model transmission loss
- **Penalty Factor:** Li = 1/(1 − ∂PL/∂Pi)
- **Loss Formula:** PL = Σ Σ Pi Bij Pj

### Unit Commitment

Decide which units run.

- **Unit Commitment:** scheduling on/off of units
- **Spinning Reserve:** online unused capacity
- **Priority List Method:** commits cheapest units first

### Hydro-thermal Coordination

Hydro and thermal plants are scheduled together.

- **Hydrothermal Scheduling:** minimise thermal cost using hydro
- **Water Value:** equivalent cost of water
- **Short-term Scheduling:** daily operation

## Unit 4: Fault Analysis

### Symmetrical Faults

Three-phase faults are balanced.

- **Symmetrical Fault:** three-phase fault
- **Short Circuit MVA:** base MVA / Zpu
- **Current Limiting Reactor:** limits fault current

### Symmetrical Components

Unbalanced systems are decomposed.

- **Symmetrical Components:** positive, negative and zero sequence
- **Operator a:** 1∠120°
- **Sequence Impedances:** differ for machines and lines

### Unsymmetrical Faults

LG, LL and LLG faults.

- **LG Fault Current:** If = 3E/(Z1 + Z2 + Z0)
- **LL Fault:** involves positive and negative sequence
- **LLG Fault:** involves all three sequences

### Fault Analysis Using Zbus

Systematic fault computation.

- **Fault Current from Zbus:** If = Vf/(Zkk + Zf)
- **Post-fault Voltages:** from Zbus elements
- **Circuit Breaker Rating:** from fault MVA

## Unit 5: Power System Stability & Control

### Stability Concepts

Stability is ability to remain in synchronism.

- **Steady-state Stability:** small slow disturbances
- **Transient Stability:** large sudden disturbances
- **Swing Equation:** M d²δ/dt² = Pm − Pe

### Equal Area Criterion

Graphical transient stability.

- **Equal Area Criterion:** accelerating area equals decelerating area
- **Critical Clearing Angle:** maximum angle for stability
- **Critical Clearing Time:** time to clear fault

### Load Frequency Control

Frequency is regulated by governors.

- **Speed Governor:** adjusts mechanical power
- **Speed Regulation:** R = Δf/ΔP
- **AGC:** automatic generation control

### Voltage Control

Reactive power controls voltage.

- **Reactive Power Compensation:** capacitors and reactors
- **Tap Changing Transformer:** voltage regulation
- **AVR:** automatic voltage regulator

## Standard Textbooks

- *Modern Power System Analysis* — D. P. Kothari & I. J. Nagrath
- *Power System Analysis* — Hadi Saadat
- *Power System Analysis* — Grainger & Stevenson

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
