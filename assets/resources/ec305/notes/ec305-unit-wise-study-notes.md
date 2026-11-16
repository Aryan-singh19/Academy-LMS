# EC-305 Network Analysis — Unit-wise Study Notes

> Circuit laws, network theorems, transient analysis, Laplace methods, two-port networks and filters.

## Unit 1: Circuit Fundamentals

### Circuit Elements & Sources

Networks are built from passive elements and sources.

- **Active Element:** supplies energy, e.g. voltage source
- **Passive Element:** absorbs or stores energy, e.g. R, L, C
- **Dependent Source:** source whose value depends on another circuit quantity

### Kirchhoff's Laws

KCL and KVL are the basis of circuit analysis.

- **KCL:** algebraic sum of currents at a node is zero
- **KVL:** algebraic sum of voltages around a loop is zero
- **Source Transformation:** converting a voltage source with series R to a current source with parallel R

### Mesh & Nodal Analysis

Systematic methods write equations for any network.

- **Mesh Analysis:** KVL around meshes using mesh currents
- **Nodal Analysis:** KCL at nodes using node voltages
- **Supermesh:** mesh formed when a current source lies between meshes

### Graph Theory of Networks

Network topology organises equation writing.

- **Tree:** connected subgraph with all nodes and no loops
- **Tie-set:** loop formed by one link and tree branches
- **Incidence Matrix:** node-branch matrix of a network graph

## Unit 2: Network Theorems

### Superposition & Linearity

Linear networks allow sources to be considered one at a time.

- **Superposition Theorem:** response is the sum of responses to each source alone
- **Linearity:** output proportional to input
- **Source Deactivation:** voltage sources shorted, current sources opened

### Thevenin & Norton Theorems

Any linear network seen from two terminals has a simple equivalent.

- **Thevenin Equivalent:** voltage source Vth in series with Rth
- **Norton Equivalent:** current source IN in parallel with RN
- **Rth:** Vth / IN

### Maximum Power Transfer

Load power peaks at a particular load.

- **Maximum Power Transfer:** load resistance equals source resistance
- **AC Maximum Power:** load impedance is the complex conjugate of source impedance
- **Efficiency at Maximum Power:** 50%

### Reciprocity, Millman & Tellegen

Other theorems simplify specific problems.

- **Reciprocity Theorem:** ratio of response to excitation unchanged when swapped
- **Millman's Theorem:** combines parallel voltage sources into one
- **Tellegen's Theorem:** sum of instantaneous powers in a network is zero

## Unit 3: Transient Analysis

### RL & RC Transients

First-order circuits respond exponentially.

- **Time Constant RC:** τ = RC; capacitor charges to 63.2% in τ
- **Time Constant RL:** τ = L/R
- **Initial Conditions:** capacitor voltage and inductor current cannot change instantly

### RLC Transients

Second-order circuits can oscillate.

- **Damping Ratio:** ζ = (R/2)√(C/L) for a series RLC
- **Underdamped Response:** oscillatory decaying response when ζ < 1
- **Critically Damped:** fastest non-oscillatory response, ζ = 1

### Laplace Transform in Circuits

Laplace turns differential equations into algebra.

- **s-domain Impedance:** R, sL and 1/(sC)
- **Initial Value Theorem:** f(0+) = lim s·F(s) as s → ∞
- **Final Value Theorem:** f(∞) = lim s·F(s) as s → 0

### Step & Impulse Response

Standard inputs characterise a network.

- **Unit Step Response:** output to a sudden constant input
- **Impulse Response:** output to a unit impulse; inverse Laplace of H(s)
- **Convolution:** output equals input convolved with impulse response

## Unit 4: Network Functions & Two-port Networks

### Network Functions

Transfer functions relate outputs to inputs.

- **Driving Point Impedance:** ratio of voltage to current at the same port
- **Transfer Function:** output transform divided by input transform
- **Poles and Zeros:** roots of denominator and numerator

### Z & Y Parameters

Two-ports are described by impedance or admittance parameters.

- **Z-parameters:** open-circuit impedance parameters
- **Y-parameters:** short-circuit admittance parameters
- **Reciprocal Network:** Z12 = Z21

### h & ABCD Parameters

Hybrid and transmission parameters suit transistors and cascades.

- **h-parameters:** hybrid parameters used for transistor models
- **ABCD Parameters:** transmission parameters relating input to output
- **Cascade Connection:** overall ABCD is the product of individual matrices

### Interconnection of Two-ports

Two-ports combine in series, parallel and cascade.

- **Series Connection:** Z-parameters add
- **Parallel Connection:** Y-parameters add
- **Symmetrical Network:** Z11 = Z22

## Unit 5: Resonance & Filters

### Series Resonance

Series RLC resonates when reactances cancel.

- **Resonant Frequency:** f0 = 1/(2π√(LC))
- **Q-factor:** Q = ω0L/R
- **Bandwidth:** f0 / Q

### Parallel Resonance

Parallel circuits show maximum impedance at resonance.

- **Anti-resonance:** parallel resonance with maximum impedance
- **Dynamic Resistance:** L/(CR) at parallel resonance
- **Selectivity:** ability to discriminate between nearby frequencies

### Passive Filters

Filters pass desired frequencies.

- **Low-pass Filter:** passes frequencies below cut-off
- **Constant-k Filter:** filter with Z1·Z2 = k² independent of frequency
- **m-derived Filter:** sharper cut-off than constant-k

### Attenuators & Coupled Circuits

Attenuators reduce signal level; coupled coils transfer energy.

- **Attenuator:** resistive network giving fixed loss
- **Mutual Inductance:** M = k√(L1L2)
- **Dot Convention:** marks coil ends for polarity of mutual voltage

## Standard Textbooks

- *Network Analysis* — M. E. Van Valkenburg
- *Engineering Circuit Analysis* — Hayt, Kemmerly & Durbin
- *Circuit Theory* — A. Chakrabarti

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
