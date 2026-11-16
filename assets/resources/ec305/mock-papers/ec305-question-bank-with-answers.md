# EC-305 Network Analysis — Question Bank with Answer Hints

## Unit 1: Circuit Fundamentals

### Short answer (2-3 marks)

- **Q.** Define *Active Element*.  
  **Ans.** supplies energy, e.g. voltage source
- **Q.** Define *Passive Element*.  
  **Ans.** absorbs or stores energy, e.g. R, L, C
- **Q.** Define *Dependent Source*.  
  **Ans.** source whose value depends on another circuit quantity
- **Q.** Define *KCL*.  
  **Ans.** algebraic sum of currents at a node is zero
- **Q.** Define *KVL*.  
  **Ans.** algebraic sum of voltages around a loop is zero
- **Q.** Define *Source Transformation*.  
  **Ans.** converting a voltage source with series R to a current source with parallel R
- **Q.** Define *Mesh Analysis*.  
  **Ans.** KVL around meshes using mesh currents
- **Q.** Define *Nodal Analysis*.  
  **Ans.** KCL at nodes using node voltages
- **Q.** Define *Supermesh*.  
  **Ans.** mesh formed when a current source lies between meshes
- **Q.** Define *Tree*.  
  **Ans.** connected subgraph with all nodes and no loops
- **Q.** Define *Tie-set*.  
  **Ans.** loop formed by one link and tree branches
- **Q.** Define *Incidence Matrix*.  
  **Ans.** node-branch matrix of a network graph

### Long answer (7 marks)

- **Q.** Explain *Circuit Elements & Sources* in detail with a neat diagram.  
  **Key points:** Networks are built from passive elements and sources. Active Element — supplies energy, e.g. voltage source; Passive Element — absorbs or stores energy, e.g. R, L, C; Dependent Source — source whose value depends on another circuit quantity.
- **Q.** Explain *Kirchhoff's Laws* in detail with a neat diagram.  
  **Key points:** KCL and KVL are the basis of circuit analysis. KCL — algebraic sum of currents at a node is zero; KVL — algebraic sum of voltages around a loop is zero; Source Transformation — converting a voltage source with series R to a current source with parallel R.
- **Q.** Explain *Mesh & Nodal Analysis* in detail with a neat diagram.  
  **Key points:** Systematic methods write equations for any network. Mesh Analysis — KVL around meshes using mesh currents; Nodal Analysis — KCL at nodes using node voltages; Supermesh — mesh formed when a current source lies between meshes.
- **Q.** Explain *Graph Theory of Networks* in detail with a neat diagram.  
  **Key points:** Network topology organises equation writing. Tree — connected subgraph with all nodes and no loops; Tie-set — loop formed by one link and tree branches; Incidence Matrix — node-branch matrix of a network graph.

## Unit 2: Network Theorems

### Short answer (2-3 marks)

- **Q.** Define *Superposition Theorem*.  
  **Ans.** response is the sum of responses to each source alone
- **Q.** Define *Linearity*.  
  **Ans.** output proportional to input
- **Q.** Define *Source Deactivation*.  
  **Ans.** voltage sources shorted, current sources opened
- **Q.** Define *Thevenin Equivalent*.  
  **Ans.** voltage source Vth in series with Rth
- **Q.** Define *Norton Equivalent*.  
  **Ans.** current source IN in parallel with RN
- **Q.** Define *Rth*.  
  **Ans.** Vth / IN
- **Q.** Define *Maximum Power Transfer*.  
  **Ans.** load resistance equals source resistance
- **Q.** Define *AC Maximum Power*.  
  **Ans.** load impedance is the complex conjugate of source impedance
- **Q.** Define *Efficiency at Maximum Power*.  
  **Ans.** 50%
- **Q.** Define *Reciprocity Theorem*.  
  **Ans.** ratio of response to excitation unchanged when swapped
- **Q.** Define *Millman's Theorem*.  
  **Ans.** combines parallel voltage sources into one
- **Q.** Define *Tellegen's Theorem*.  
  **Ans.** sum of instantaneous powers in a network is zero

### Long answer (7 marks)

- **Q.** Explain *Superposition & Linearity* in detail with a neat diagram.  
  **Key points:** Linear networks allow sources to be considered one at a time. Superposition Theorem — response is the sum of responses to each source alone; Linearity — output proportional to input; Source Deactivation — voltage sources shorted, current sources opened.
- **Q.** Explain *Thevenin & Norton Theorems* in detail with a neat diagram.  
  **Key points:** Any linear network seen from two terminals has a simple equivalent. Thevenin Equivalent — voltage source Vth in series with Rth; Norton Equivalent — current source IN in parallel with RN; Rth — Vth / IN.
- **Q.** Explain *Maximum Power Transfer* in detail with a neat diagram.  
  **Key points:** Load power peaks at a particular load. Maximum Power Transfer — load resistance equals source resistance; AC Maximum Power — load impedance is the complex conjugate of source impedance; Efficiency at Maximum Power — 50%.
- **Q.** Explain *Reciprocity, Millman & Tellegen* in detail with a neat diagram.  
  **Key points:** Other theorems simplify specific problems. Reciprocity Theorem — ratio of response to excitation unchanged when swapped; Millman's Theorem — combines parallel voltage sources into one; Tellegen's Theorem — sum of instantaneous powers in a network is zero.

## Unit 3: Transient Analysis

### Short answer (2-3 marks)

- **Q.** Define *Time Constant RC*.  
  **Ans.** τ = RC; capacitor charges to 63.2% in τ
- **Q.** Define *Time Constant RL*.  
  **Ans.** τ = L/R
- **Q.** Define *Initial Conditions*.  
  **Ans.** capacitor voltage and inductor current cannot change instantly
- **Q.** Define *Damping Ratio*.  
  **Ans.** ζ = (R/2)√(C/L) for a series RLC
- **Q.** Define *Underdamped Response*.  
  **Ans.** oscillatory decaying response when ζ < 1
- **Q.** Define *Critically Damped*.  
  **Ans.** fastest non-oscillatory response, ζ = 1
- **Q.** Define *s-domain Impedance*.  
  **Ans.** R, sL and 1/(sC)
- **Q.** Define *Initial Value Theorem*.  
  **Ans.** f(0+) = lim s·F(s) as s → ∞
- **Q.** Define *Final Value Theorem*.  
  **Ans.** f(∞) = lim s·F(s) as s → 0
- **Q.** Define *Unit Step Response*.  
  **Ans.** output to a sudden constant input
- **Q.** Define *Impulse Response*.  
  **Ans.** output to a unit impulse; inverse Laplace of H(s)
- **Q.** Define *Convolution*.  
  **Ans.** output equals input convolved with impulse response

### Long answer (7 marks)

- **Q.** Explain *RL & RC Transients* in detail with a neat diagram.  
  **Key points:** First-order circuits respond exponentially. Time Constant RC — τ = RC; capacitor charges to 63.2% in τ; Time Constant RL — τ = L/R; Initial Conditions — capacitor voltage and inductor current cannot change instantly.
- **Q.** Explain *RLC Transients* in detail with a neat diagram.  
  **Key points:** Second-order circuits can oscillate. Damping Ratio — ζ = (R/2)√(C/L) for a series RLC; Underdamped Response — oscillatory decaying response when ζ < 1; Critically Damped — fastest non-oscillatory response, ζ = 1.
- **Q.** Explain *Laplace Transform in Circuits* in detail with a neat diagram.  
  **Key points:** Laplace turns differential equations into algebra. s-domain Impedance — R, sL and 1/(sC); Initial Value Theorem — f(0+) = lim s·F(s) as s → ∞; Final Value Theorem — f(∞) = lim s·F(s) as s → 0.
- **Q.** Explain *Step & Impulse Response* in detail with a neat diagram.  
  **Key points:** Standard inputs characterise a network. Unit Step Response — output to a sudden constant input; Impulse Response — output to a unit impulse; inverse Laplace of H(s); Convolution — output equals input convolved with impulse response.

## Unit 4: Network Functions & Two-port Networks

### Short answer (2-3 marks)

- **Q.** Define *Driving Point Impedance*.  
  **Ans.** ratio of voltage to current at the same port
- **Q.** Define *Transfer Function*.  
  **Ans.** output transform divided by input transform
- **Q.** Define *Poles and Zeros*.  
  **Ans.** roots of denominator and numerator
- **Q.** Define *Z-parameters*.  
  **Ans.** open-circuit impedance parameters
- **Q.** Define *Y-parameters*.  
  **Ans.** short-circuit admittance parameters
- **Q.** Define *Reciprocal Network*.  
  **Ans.** Z12 = Z21
- **Q.** Define *h-parameters*.  
  **Ans.** hybrid parameters used for transistor models
- **Q.** Define *ABCD Parameters*.  
  **Ans.** transmission parameters relating input to output
- **Q.** Define *Cascade Connection*.  
  **Ans.** overall ABCD is the product of individual matrices
- **Q.** Define *Series Connection*.  
  **Ans.** Z-parameters add
- **Q.** Define *Parallel Connection*.  
  **Ans.** Y-parameters add
- **Q.** Define *Symmetrical Network*.  
  **Ans.** Z11 = Z22

### Long answer (7 marks)

- **Q.** Explain *Network Functions* in detail with a neat diagram.  
  **Key points:** Transfer functions relate outputs to inputs. Driving Point Impedance — ratio of voltage to current at the same port; Transfer Function — output transform divided by input transform; Poles and Zeros — roots of denominator and numerator.
- **Q.** Explain *Z & Y Parameters* in detail with a neat diagram.  
  **Key points:** Two-ports are described by impedance or admittance parameters. Z-parameters — open-circuit impedance parameters; Y-parameters — short-circuit admittance parameters; Reciprocal Network — Z12 = Z21.
- **Q.** Explain *h & ABCD Parameters* in detail with a neat diagram.  
  **Key points:** Hybrid and transmission parameters suit transistors and cascades. h-parameters — hybrid parameters used for transistor models; ABCD Parameters — transmission parameters relating input to output; Cascade Connection — overall ABCD is the product of individual matrices.
- **Q.** Explain *Interconnection of Two-ports* in detail with a neat diagram.  
  **Key points:** Two-ports combine in series, parallel and cascade. Series Connection — Z-parameters add; Parallel Connection — Y-parameters add; Symmetrical Network — Z11 = Z22.

## Unit 5: Resonance & Filters

### Short answer (2-3 marks)

- **Q.** Define *Resonant Frequency*.  
  **Ans.** f0 = 1/(2π√(LC))
- **Q.** Define *Q-factor*.  
  **Ans.** Q = ω0L/R
- **Q.** Define *Bandwidth*.  
  **Ans.** f0 / Q
- **Q.** Define *Anti-resonance*.  
  **Ans.** parallel resonance with maximum impedance
- **Q.** Define *Dynamic Resistance*.  
  **Ans.** L/(CR) at parallel resonance
- **Q.** Define *Selectivity*.  
  **Ans.** ability to discriminate between nearby frequencies
- **Q.** Define *Low-pass Filter*.  
  **Ans.** passes frequencies below cut-off
- **Q.** Define *Constant-k Filter*.  
  **Ans.** filter with Z1·Z2 = k² independent of frequency
- **Q.** Define *m-derived Filter*.  
  **Ans.** sharper cut-off than constant-k
- **Q.** Define *Attenuator*.  
  **Ans.** resistive network giving fixed loss
- **Q.** Define *Mutual Inductance*.  
  **Ans.** M = k√(L1L2)
- **Q.** Define *Dot Convention*.  
  **Ans.** marks coil ends for polarity of mutual voltage

### Long answer (7 marks)

- **Q.** Explain *Series Resonance* in detail with a neat diagram.  
  **Key points:** Series RLC resonates when reactances cancel. Resonant Frequency — f0 = 1/(2π√(LC)); Q-factor — Q = ω0L/R; Bandwidth — f0 / Q.
- **Q.** Explain *Parallel Resonance* in detail with a neat diagram.  
  **Key points:** Parallel circuits show maximum impedance at resonance. Anti-resonance — parallel resonance with maximum impedance; Dynamic Resistance — L/(CR) at parallel resonance; Selectivity — ability to discriminate between nearby frequencies.
- **Q.** Explain *Passive Filters* in detail with a neat diagram.  
  **Key points:** Filters pass desired frequencies. Low-pass Filter — passes frequencies below cut-off; Constant-k Filter — filter with Z1·Z2 = k² independent of frequency; m-derived Filter — sharper cut-off than constant-k.
- **Q.** Explain *Attenuators & Coupled Circuits* in detail with a neat diagram.  
  **Key points:** Attenuators reduce signal level; coupled coils transfer energy. Attenuator — resistive network giving fixed loss; Mutual Inductance — M = k√(L1L2); Dot Convention — marks coil ends for polarity of mutual voltage.

