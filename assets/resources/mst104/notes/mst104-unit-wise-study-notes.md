# MST-104 Structural Dynamics — Unit-wise Study Notes

> SDOF and MDOF vibration, modal analysis, response spectrum, continuous systems and numerical methods for dynamic response.

## Unit 1: SDOF Free Vibration

### Equation of Motion

Dynamic equilibrium.

- **D'Alembert's Principle:** inertia force in equilibrium
- **SDOF Equation:** mü + cu̇ + ku = p(t)
- **Natural Frequency:** ωn = √(k/m)

### Undamped Free Vibration

Harmonic motion.

- **Free Vibration Response:** u(t) = u0 cos ωnt + (v0/ωn) sin ωnt
- **Natural Period:** Tn = 2π/ωn
- **Amplitude:** √(u0² + (v0/ωn)²)

### Damped Free Vibration

Damping decays motion.

- **Damping Ratio:** ζ = c/(2mωn)
- **Damped Frequency:** ωD = ωn√(1 − ζ²)
- **Logarithmic Decrement:** δ = ln(ui/ui+1) ≈ 2πζ

### Damping Mechanisms

Energy dissipation sources.

- **Viscous Damping:** force proportional to velocity
- **Coulomb Damping:** friction damping
- **Hysteretic Damping:** energy loss in material

## Unit 2: SDOF Forced Vibration

### Harmonic Excitation

Steady-state response.

- **Dynamic Amplification Factor:** Rd = 1/√((1 − r²)² + (2ζr)²)
- **Resonance:** r = 1 gives Rd = 1/(2ζ)
- **Phase Angle:** lag of response

### Transmissibility & Isolation

Reducing transmitted force.

- **Transmissibility:** transmitted force / applied force
- **Isolation Region:** r > √2
- **Base Excitation:** support motion response

### Arbitrary Excitation

General loading.

- **Duhamel's Integral:** convolution with impulse response
- **Impulse Response:** h(t) = (1/mωD) e^(−ζωnt) sin ωDt
- **Step Load:** dynamic factor of 2 for undamped system

### Earthquake Response

Response to ground motion.

- **Relative Displacement Equation:** mü + cu̇ + ku = −mü_g
- **Pseudo-acceleration:** A = ωn² D
- **Response Spectrum:** peak response versus period

## Unit 3: MDOF Systems

### Equations of Motion

Matrix form.

- **MDOF Equation:** [M]{ü} + [C]{u̇} + [K]{u} = {p}
- **Shear Building:** lumped mass at floors
- **Coupling:** through stiffness or mass

### Natural Frequencies & Modes

Eigenvalue analysis.

- **Frequency Equation:** det([K] − ω²[M]) = 0
- **Mode Shape:** eigenvector
- **Orthogonality:** modes orthogonal with respect to M and K

### Modal Analysis

Decoupling equations.

- **Modal Superposition:** response as sum of modes
- **Modal Participation Factor:** contribution of mode to excitation
- **Effective Modal Mass:** mass participating in mode

### Damping in MDOF

Classical damping.

- **Rayleigh Damping:** C = αM + βK
- **Modal Damping:** damping ratio per mode
- **Non-classical Damping:** cannot be diagonalised

## Unit 4: Earthquake Analysis of MDOF

### Response Spectrum Analysis

Peak response estimation.

- **RSA:** modal peak responses from spectrum
- **SRSS:** square root of sum of squares
- **CQC:** complete quadratic combination for close modes

### Time History Analysis

Response to recorded ground motion.

- **Time History Analysis:** step-by-step integration
- **Ground Motion Scaling:** matching target spectrum
- **Non-linear Time History:** includes inelastic behaviour

### Torsional Response

Asymmetric buildings twist.

- **Centre of Mass:** point of inertia force
- **Centre of Rigidity:** point of stiffness resultant
- **Eccentricity:** distance between CM and CR

### Soil-Structure Interaction

Flexible foundations alter response.

- **SSI:** interaction between structure and soil
- **Foundation Impedance:** stiffness and damping of soil
- **Period Lengthening:** effect of flexible base

## Unit 5: Continuous Systems & Numerical Methods

### Vibration of Beams

Distributed mass systems.

- **Euler-Bernoulli Beam Vibration:** EI ∂⁴u/∂x⁴ + m ∂²u/∂t² = 0
- **Natural Frequencies of Simply Supported Beam:** ωn = (nπ)² √(EI/(mL⁴))
- **Infinite DOF:** continuous systems have infinite modes

### Approximate Methods

Estimating fundamental frequency.

- **Rayleigh's Method:** energy-based frequency estimate
- **Rayleigh-Ritz Method:** assumed mode shapes
- **Stodola Method:** iterative fundamental mode

### Numerical Integration

Time stepping methods.

- **Central Difference Method:** explicit conditionally stable
- **Newmark-β Method:** average acceleration unconditionally stable
- **Wilson-θ Method:** extended interval method

### Machine Foundations & Wind

Other dynamic loads.

- **Machine Foundation:** designed to avoid resonance
- **Vortex Shedding:** periodic wind-induced forces
- **Tuned Mass Damper:** reduces tall building vibration

## Standard Textbooks

- *Dynamics of Structures* — Anil K. Chopra
- *Dynamics of Structures* — Clough & Penzien
- *Structural Dynamics* — Mario Paz

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
