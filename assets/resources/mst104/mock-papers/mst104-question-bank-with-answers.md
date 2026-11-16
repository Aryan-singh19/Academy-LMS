# MST-104 Structural Dynamics — Question Bank with Answer Hints

## Unit 1: SDOF Free Vibration

### Short answer (2-3 marks)

- **Q.** Define *D'Alembert's Principle*.  
  **Ans.** inertia force in equilibrium
- **Q.** Define *SDOF Equation*.  
  **Ans.** mü + cu̇ + ku = p(t)
- **Q.** Define *Natural Frequency*.  
  **Ans.** ωn = √(k/m)
- **Q.** Define *Free Vibration Response*.  
  **Ans.** u(t) = u0 cos ωnt + (v0/ωn) sin ωnt
- **Q.** Define *Natural Period*.  
  **Ans.** Tn = 2π/ωn
- **Q.** Define *Amplitude*.  
  **Ans.** √(u0² + (v0/ωn)²)
- **Q.** Define *Damping Ratio*.  
  **Ans.** ζ = c/(2mωn)
- **Q.** Define *Damped Frequency*.  
  **Ans.** ωD = ωn√(1 − ζ²)
- **Q.** Define *Logarithmic Decrement*.  
  **Ans.** δ = ln(ui/ui+1) ≈ 2πζ
- **Q.** Define *Viscous Damping*.  
  **Ans.** force proportional to velocity
- **Q.** Define *Coulomb Damping*.  
  **Ans.** friction damping
- **Q.** Define *Hysteretic Damping*.  
  **Ans.** energy loss in material

### Long answer (7 marks)

- **Q.** Explain *Equation of Motion* in detail with a neat diagram.  
  **Key points:** Dynamic equilibrium. D'Alembert's Principle — inertia force in equilibrium; SDOF Equation — mü + cu̇ + ku = p(t); Natural Frequency — ωn = √(k/m).
- **Q.** Explain *Undamped Free Vibration* in detail with a neat diagram.  
  **Key points:** Harmonic motion. Free Vibration Response — u(t) = u0 cos ωnt + (v0/ωn) sin ωnt; Natural Period — Tn = 2π/ωn; Amplitude — √(u0² + (v0/ωn)²).
- **Q.** Explain *Damped Free Vibration* in detail with a neat diagram.  
  **Key points:** Damping decays motion. Damping Ratio — ζ = c/(2mωn); Damped Frequency — ωD = ωn√(1 − ζ²); Logarithmic Decrement — δ = ln(ui/ui+1) ≈ 2πζ.
- **Q.** Explain *Damping Mechanisms* in detail with a neat diagram.  
  **Key points:** Energy dissipation sources. Viscous Damping — force proportional to velocity; Coulomb Damping — friction damping; Hysteretic Damping — energy loss in material.

## Unit 2: SDOF Forced Vibration

### Short answer (2-3 marks)

- **Q.** Define *Dynamic Amplification Factor*.  
  **Ans.** Rd = 1/√((1 − r²)² + (2ζr)²)
- **Q.** Define *Resonance*.  
  **Ans.** r = 1 gives Rd = 1/(2ζ)
- **Q.** Define *Phase Angle*.  
  **Ans.** lag of response
- **Q.** Define *Transmissibility*.  
  **Ans.** transmitted force / applied force
- **Q.** Define *Isolation Region*.  
  **Ans.** r > √2
- **Q.** Define *Base Excitation*.  
  **Ans.** support motion response
- **Q.** Define *Duhamel's Integral*.  
  **Ans.** convolution with impulse response
- **Q.** Define *Impulse Response*.  
  **Ans.** h(t) = (1/mωD) e^(−ζωnt) sin ωDt
- **Q.** Define *Step Load*.  
  **Ans.** dynamic factor of 2 for undamped system
- **Q.** Define *Relative Displacement Equation*.  
  **Ans.** mü + cu̇ + ku = −mü_g
- **Q.** Define *Pseudo-acceleration*.  
  **Ans.** A = ωn² D
- **Q.** Define *Response Spectrum*.  
  **Ans.** peak response versus period

### Long answer (7 marks)

- **Q.** Explain *Harmonic Excitation* in detail with a neat diagram.  
  **Key points:** Steady-state response. Dynamic Amplification Factor — Rd = 1/√((1 − r²)² + (2ζr)²); Resonance — r = 1 gives Rd = 1/(2ζ); Phase Angle — lag of response.
- **Q.** Explain *Transmissibility & Isolation* in detail with a neat diagram.  
  **Key points:** Reducing transmitted force. Transmissibility — transmitted force / applied force; Isolation Region — r > √2; Base Excitation — support motion response.
- **Q.** Explain *Arbitrary Excitation* in detail with a neat diagram.  
  **Key points:** General loading. Duhamel's Integral — convolution with impulse response; Impulse Response — h(t) = (1/mωD) e^(−ζωnt) sin ωDt; Step Load — dynamic factor of 2 for undamped system.
- **Q.** Explain *Earthquake Response* in detail with a neat diagram.  
  **Key points:** Response to ground motion. Relative Displacement Equation — mü + cu̇ + ku = −mü_g; Pseudo-acceleration — A = ωn² D; Response Spectrum — peak response versus period.

## Unit 3: MDOF Systems

### Short answer (2-3 marks)

- **Q.** Define *MDOF Equation*.  
  **Ans.** [M]{ü} + [C]{u̇} + [K]{u} = {p}
- **Q.** Define *Shear Building*.  
  **Ans.** lumped mass at floors
- **Q.** Define *Coupling*.  
  **Ans.** through stiffness or mass
- **Q.** Define *Frequency Equation*.  
  **Ans.** det([K] − ω²[M]) = 0
- **Q.** Define *Mode Shape*.  
  **Ans.** eigenvector
- **Q.** Define *Orthogonality*.  
  **Ans.** modes orthogonal with respect to M and K
- **Q.** Define *Modal Superposition*.  
  **Ans.** response as sum of modes
- **Q.** Define *Modal Participation Factor*.  
  **Ans.** contribution of mode to excitation
- **Q.** Define *Effective Modal Mass*.  
  **Ans.** mass participating in mode
- **Q.** Define *Rayleigh Damping*.  
  **Ans.** C = αM + βK
- **Q.** Define *Modal Damping*.  
  **Ans.** damping ratio per mode
- **Q.** Define *Non-classical Damping*.  
  **Ans.** cannot be diagonalised

### Long answer (7 marks)

- **Q.** Explain *Equations of Motion* in detail with a neat diagram.  
  **Key points:** Matrix form. MDOF Equation — [M]{ü} + [C]{u̇} + [K]{u} = {p}; Shear Building — lumped mass at floors; Coupling — through stiffness or mass.
- **Q.** Explain *Natural Frequencies & Modes* in detail with a neat diagram.  
  **Key points:** Eigenvalue analysis. Frequency Equation — det([K] − ω²[M]) = 0; Mode Shape — eigenvector; Orthogonality — modes orthogonal with respect to M and K.
- **Q.** Explain *Modal Analysis* in detail with a neat diagram.  
  **Key points:** Decoupling equations. Modal Superposition — response as sum of modes; Modal Participation Factor — contribution of mode to excitation; Effective Modal Mass — mass participating in mode.
- **Q.** Explain *Damping in MDOF* in detail with a neat diagram.  
  **Key points:** Classical damping. Rayleigh Damping — C = αM + βK; Modal Damping — damping ratio per mode; Non-classical Damping — cannot be diagonalised.

## Unit 4: Earthquake Analysis of MDOF

### Short answer (2-3 marks)

- **Q.** Define *RSA*.  
  **Ans.** modal peak responses from spectrum
- **Q.** Define *SRSS*.  
  **Ans.** square root of sum of squares
- **Q.** Define *CQC*.  
  **Ans.** complete quadratic combination for close modes
- **Q.** Define *Time History Analysis*.  
  **Ans.** step-by-step integration
- **Q.** Define *Ground Motion Scaling*.  
  **Ans.** matching target spectrum
- **Q.** Define *Non-linear Time History*.  
  **Ans.** includes inelastic behaviour
- **Q.** Define *Centre of Mass*.  
  **Ans.** point of inertia force
- **Q.** Define *Centre of Rigidity*.  
  **Ans.** point of stiffness resultant
- **Q.** Define *Eccentricity*.  
  **Ans.** distance between CM and CR
- **Q.** Define *SSI*.  
  **Ans.** interaction between structure and soil
- **Q.** Define *Foundation Impedance*.  
  **Ans.** stiffness and damping of soil
- **Q.** Define *Period Lengthening*.  
  **Ans.** effect of flexible base

### Long answer (7 marks)

- **Q.** Explain *Response Spectrum Analysis* in detail with a neat diagram.  
  **Key points:** Peak response estimation. RSA — modal peak responses from spectrum; SRSS — square root of sum of squares; CQC — complete quadratic combination for close modes.
- **Q.** Explain *Time History Analysis* in detail with a neat diagram.  
  **Key points:** Response to recorded ground motion. Time History Analysis — step-by-step integration; Ground Motion Scaling — matching target spectrum; Non-linear Time History — includes inelastic behaviour.
- **Q.** Explain *Torsional Response* in detail with a neat diagram.  
  **Key points:** Asymmetric buildings twist. Centre of Mass — point of inertia force; Centre of Rigidity — point of stiffness resultant; Eccentricity — distance between CM and CR.
- **Q.** Explain *Soil-Structure Interaction* in detail with a neat diagram.  
  **Key points:** Flexible foundations alter response. SSI — interaction between structure and soil; Foundation Impedance — stiffness and damping of soil; Period Lengthening — effect of flexible base.

## Unit 5: Continuous Systems & Numerical Methods

### Short answer (2-3 marks)

- **Q.** Define *Euler-Bernoulli Beam Vibration*.  
  **Ans.** EI ∂⁴u/∂x⁴ + m ∂²u/∂t² = 0
- **Q.** Define *Natural Frequencies of Simply Supported Beam*.  
  **Ans.** ωn = (nπ)² √(EI/(mL⁴))
- **Q.** Define *Infinite DOF*.  
  **Ans.** continuous systems have infinite modes
- **Q.** Define *Rayleigh's Method*.  
  **Ans.** energy-based frequency estimate
- **Q.** Define *Rayleigh-Ritz Method*.  
  **Ans.** assumed mode shapes
- **Q.** Define *Stodola Method*.  
  **Ans.** iterative fundamental mode
- **Q.** Define *Central Difference Method*.  
  **Ans.** explicit conditionally stable
- **Q.** Define *Newmark-β Method*.  
  **Ans.** average acceleration unconditionally stable
- **Q.** Define *Wilson-θ Method*.  
  **Ans.** extended interval method
- **Q.** Define *Machine Foundation*.  
  **Ans.** designed to avoid resonance
- **Q.** Define *Vortex Shedding*.  
  **Ans.** periodic wind-induced forces
- **Q.** Define *Tuned Mass Damper*.  
  **Ans.** reduces tall building vibration

### Long answer (7 marks)

- **Q.** Explain *Vibration of Beams* in detail with a neat diagram.  
  **Key points:** Distributed mass systems. Euler-Bernoulli Beam Vibration — EI ∂⁴u/∂x⁴ + m ∂²u/∂t² = 0; Natural Frequencies of Simply Supported Beam — ωn = (nπ)² √(EI/(mL⁴)); Infinite DOF — continuous systems have infinite modes.
- **Q.** Explain *Approximate Methods* in detail with a neat diagram.  
  **Key points:** Estimating fundamental frequency. Rayleigh's Method — energy-based frequency estimate; Rayleigh-Ritz Method — assumed mode shapes; Stodola Method — iterative fundamental mode.
- **Q.** Explain *Numerical Integration* in detail with a neat diagram.  
  **Key points:** Time stepping methods. Central Difference Method — explicit conditionally stable; Newmark-β Method — average acceleration unconditionally stable; Wilson-θ Method — extended interval method.
- **Q.** Explain *Machine Foundations & Wind* in detail with a neat diagram.  
  **Key points:** Other dynamic loads. Machine Foundation — designed to avoid resonance; Vortex Shedding — periodic wind-induced forces; Tuned Mass Damper — reduces tall building vibration.

