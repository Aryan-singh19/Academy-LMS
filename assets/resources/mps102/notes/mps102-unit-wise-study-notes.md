# MPS-102 Power System Dynamics & Stability — Unit-wise Study Notes

> Synchronous machine modelling, excitation and governor systems, small-signal, transient and voltage stability.

## Unit 1: Synchronous Machine Modelling

### Park's Transformation

dq0 frame simplifies machine equations.

- **Park's Transformation:** converts abc to dq0
- **d-axis:** aligned with field
- **q-axis:** 90° ahead of d-axis

### Machine Reactances

Different reactances for time scales.

- **Synchronous Reactance:** steady state Xd
- **Transient Reactance:** X'd after subtransient decay
- **Subtransient Reactance:** X''d immediately after fault

### Time Constants

Decay of currents.

- **T'do:** open-circuit transient time constant
- **T''d:** subtransient time constant
- **Field Winding Dynamics:** flux decay

### Simplified Models

Models for stability studies.

- **Classical Model:** constant voltage behind X'd
- **One-axis Model:** includes field dynamics
- **Swing Equation:** 2H/ωs d²δ/dt² = Pm − Pe

## Unit 2: Excitation & Governor Systems

### Excitation Systems

Control generator voltage.

- **DC Exciter:** older rotating exciter
- **Static Exciter:** thyristor-based excitation
- **AVR:** automatic voltage regulator

### Excitation System Models

IEEE standard models.

- **IEEE Type ST1A:** static exciter model
- **Exciter Gain:** high gain improves voltage regulation
- **Limiters:** protect against over-excitation

### Power System Stabiliser

Damps oscillations.

- **PSS:** adds damping via excitation
- **Phase Compensation:** lead-lag blocks
- **Washout Filter:** removes steady-state signals

### Prime Mover & Governor

Control mechanical power.

- **Speed Governor:** adjusts valve/gate
- **Droop:** speed regulation characteristic
- **Turbine Model:** steam or hydro dynamics

## Unit 3: Small-signal Stability

### Linearisation

Analysing small perturbations.

- **State-space Model:** ẋ = Ax + Bu
- **Eigenvalues:** determine stability
- **Damping Ratio of Mode:** −σ/√(σ² + ω²)

### Heffron-Phillips Model

Single machine infinite bus.

- **Heffron-Phillips Constants:** K1-K6
- **Synchronising Torque:** in phase with δ
- **Damping Torque:** in phase with speed

### Modes of Oscillation

Types of electromechanical modes.

- **Local Mode:** 1-2 Hz, one plant against system
- **Inter-area Mode:** 0.1-0.8 Hz between regions
- **Participation Factor:** state contribution to mode

### Damping Control

Improving small-signal stability.

- **PSS Tuning:** places damping on modes
- **FACTS Damping Controller:** auxiliary damping
- **Wide-area Damping:** uses remote PMU signals

## Unit 4: Transient Stability

### Transient Stability Concepts

Large disturbance stability.

- **Transient Stability:** maintaining synchronism after large disturbance
- **First Swing Stability:** stable in first oscillation
- **Multi-machine Stability:** all generators in synchronism

### Equal Area Criterion

SMIB transient stability.

- **Equal Area Criterion:** accelerating area equals decelerating area
- **Critical Clearing Angle:** maximum angle to clear fault
- **Critical Clearing Time:** corresponding time

### Numerical Methods

Solving swing equations.

- **Euler Method:** simple numerical integration
- **Runge-Kutta Method:** more accurate integration
- **Trapezoidal Rule:** implicit integration in simulators

### Enhancement Methods

Improving transient stability.

- **Fast Fault Clearing:** reduces accelerating area
- **Fast Valving:** reduces mechanical power
- **Braking Resistor:** absorbs excess power

## Unit 5: Voltage Stability

### Voltage Stability Concepts

Maintaining acceptable voltages.

- **Voltage Stability:** ability to maintain voltages after disturbance
- **Voltage Collapse:** progressive voltage decline
- **Reactive Power Deficiency:** main cause

### PV & QV Curves

Tools for voltage stability.

- **PV Curve:** nose curve showing loadability
- **Nose Point:** maximum loadability
- **QV Curve:** reactive power margin

### Analysis Methods

Assessing voltage stability.

- **Continuation Power Flow:** traces PV curve
- **Modal Analysis:** eigenvalues of reduced Jacobian
- **L-index:** voltage stability indicator

### Prevention of Collapse

Countermeasures.

- **Under-voltage Load Shedding:** removes load to restore voltage
- **OLTC Blocking:** stops tap changer action
- **Reactive Reserve:** keep generators' reactive margin

## Standard Textbooks

- *Power System Stability and Control* — Prabha Kundur
- *Power System Dynamics: Stability and Control* — K. R. Padiyar
- *Power System Control and Stability* — Anderson & Fouad

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
