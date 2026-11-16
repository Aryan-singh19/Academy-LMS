# EC-504(A) Electromagnetic Theory — Unit-wise Study Notes

> Vector analysis, electrostatics, magnetostatics, Maxwell's equations, plane waves and transmission lines.

## Unit 1: Vector Analysis & Electrostatics

### Vector Calculus

Fields are described with gradient, divergence and curl.

- **Gradient:** vector of maximum rate of increase of a scalar
- **Divergence:** net outward flux per unit volume
- **Curl:** circulation per unit area

### Coordinate Systems

Problems use the most convenient coordinates.

- **Cartesian Coordinates:** x, y, z
- **Cylindrical Coordinates:** ρ, φ, z
- **Spherical Coordinates:** r, θ, φ

### Coulomb's Law & Electric Field

Charges exert forces and create fields.

- **Coulomb's Law:** F = Q1Q2/(4πε0R²)
- **Electric Field Intensity:** force per unit charge
- **Electric Flux Density:** D = εE

### Gauss's Law & Potential

Symmetric charge distributions are solved with Gauss's law.

- **Gauss's Law:** net flux through closed surface equals enclosed charge
- **Electric Potential:** work per unit charge to bring charge from infinity
- **E:** −∇V = field is the negative gradient of potential

## Unit 2: Dielectrics, Capacitance & Boundary Conditions

### Conductors & Dielectrics

Materials respond differently to fields.

- **Polarisation:** alignment of dipoles in a dielectric
- **Relative Permittivity:** εr = ε/ε0
- **Conductor in Static Field:** E inside is zero

### Capacitance

Capacitance stores electric energy.

- **Parallel Plate Capacitance:** C = εA/d
- **Energy Stored:** W = ½CV²
- **Coaxial Capacitance:** C = 2πεL / ln(b/a)

### Boundary Conditions

Fields obey rules at material interfaces.

- **Tangential E:** continuous across a dielectric boundary
- **Normal D:** differs by surface charge density
- **Perfect Conductor Boundary:** tangential E is zero

### Poisson's & Laplace's Equations

Potential satisfies differential equations.

- **Poisson's Equation:** ∇²V = −ρv/ε
- **Laplace's Equation:** ∇²V = 0 in charge-free regions
- **Uniqueness Theorem:** solution satisfying boundary conditions is unique

## Unit 3: Magnetostatics

### Biot-Savart Law

Currents produce magnetic fields.

- **Biot-Savart Law:** dH = I dl × aR / (4πR²)
- **Field of Infinite Wire:** H = I/(2πρ)
- **Magnetic Field Intensity:** H in amperes per metre

### Ampere's Circuital Law

Line integral of H equals enclosed current.

- **Ampere's Law:** closed line integral of H·dl = Ienc
- **Point Form:** ∇ × H = J
- **Solenoid Field:** H = nI inside a long solenoid

### Magnetic Flux & Vector Potential

Flux density and potentials describe magnetic fields.

- **Magnetic Flux Density:** B = μH
- **No Magnetic Monopoles:** ∇·B = 0
- **Vector Magnetic Potential:** B = ∇ × A

### Magnetic Forces & Inductance

Fields exert forces and store energy.

- **Lorentz Force:** F = q(E + v × B)
- **Inductance:** L = NΦ/I
- **Magnetic Energy:** W = ½LI²

## Unit 4: Maxwell's Equations & Plane Waves

### Faraday's Law & Displacement Current

Time-varying fields complete Maxwell's equations.

- **Faraday's Law:** emf = −dΦ/dt
- **Displacement Current Density:** Jd = ∂D/∂t
- **Lenz's Law:** induced current opposes the change causing it

### Maxwell's Equations

Four equations govern all electromagnetic fields.

- **Maxwell's Equations:** Gauss's laws for D and B, Faraday's law, Ampere-Maxwell law
- **Integral Form:** equations over surfaces and contours
- **Time-harmonic Form:** phasor form with ∂/∂t replaced by jω

### Uniform Plane Waves

Waves propagate in free space and media.

- **Wave Equation:** ∇²E = με ∂²E/∂t²
- **Intrinsic Impedance:** η = √(μ/ε); 377 Ω in free space
- **Propagation Constant:** γ = α + jβ

### Wave Propagation in Media

Losses, skin effect and polarisation.

- **Skin Depth:** δ = 1/√(πfμσ)
- **Poynting Vector:** P = E × H, power flow density
- **Polarisation:** orientation of the E field: linear, circular, elliptical

## Unit 5: Transmission Lines

### Transmission Line Parameters

Lines are modelled by distributed R, L, G, C.

- **Characteristic Impedance:** Z0 = √((R + jωL)/(G + jωC))
- **Lossless Line:** R = G = 0, Z0 = √(L/C)
- **Velocity of Propagation:** v = 1/√(LC)

### Reflection & Standing Waves

Mismatched loads cause reflections.

- **Reflection Coefficient:** Γ = (ZL − Z0)/(ZL + Z0)
- **VSWR:** (1 + magnitude of Γ)/(1 − magnitude of Γ)
- **Standing Wave:** pattern of maxima and minima from reflected waves

### Input Impedance & Special Lines

Line length transforms impedance.

- **Input Impedance:** depends on load, Z0 and electrical length
- **Quarter-wave Transformer:** Zin = Z0²/ZL
- **Half-wave Line:** repeats the load impedance

### Smith Chart & Matching

Graphical tools design matching networks.

- **Smith Chart:** graphical plot of normalised impedance and reflection
- **Single Stub Matching:** short-circuited stub cancels susceptance
- **Impedance Matching:** making load equal Z0 to stop reflections

## Standard Textbooks

- *Elements of Electromagnetics* — Matthew N. O. Sadiku
- *Engineering Electromagnetics* — Hayt & Buck
- *Electromagnetic Waves and Radiating Systems* — Jordan & Balmain

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
