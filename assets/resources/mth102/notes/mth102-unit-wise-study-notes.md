# MTH-102 Advanced Fluid Mechanics — Unit-wise Study Notes

> Kinematics, Navier-Stokes equations, exact solutions, boundary layers, turbulence and compressible flow.

## Unit 1: Fluid Kinematics & Conservation Laws

### Description of Flow

Lagrangian and Eulerian views.

- **Lagrangian Description:** follows fluid particles
- **Eulerian Description:** observes fixed points
- **Material Derivative:** D/Dt = ∂/∂t + V·∇

### Strain Rate & Vorticity

Deformation of fluid elements.

- **Strain Rate Tensor:** symmetric part of velocity gradient
- **Vorticity:** ω = ∇ × V
- **Circulation:** line integral of velocity

### Reynolds Transport Theorem

Links system and control volume.

- **Reynolds Transport Theorem:** converts system laws to control volume
- **Continuity Equation:** ∂ρ/∂t + ∇·(ρV) = 0
- **Momentum Equation:** Newton's second law for fluids

### Energy Equation

Conservation of energy in flow.

- **Energy Equation:** first law for flowing fluid
- **Viscous Dissipation:** conversion of work to heat
- **Stream Function:** satisfies continuity for 2D flow

## Unit 2: Navier-Stokes Equations & Exact Solutions

### Navier-Stokes Equations

Momentum for viscous fluids.

- **Navier-Stokes Equation:** ρ DV/Dt = −∇p + μ∇²V + ρg
- **Newtonian Constitutive Law:** stress linear in strain rate
- **Non-dimensional Form:** reveals Reynolds number

### Couette & Poiseuille Flow

Classical exact solutions.

- **Couette Flow:** linear profile between moving plates
- **Plane Poiseuille Flow:** parabolic profile in channel
- **Hagen-Poiseuille Flow:** parabolic profile in pipe

### Unsteady Exact Solutions

Time-dependent viscous flows.

- **Stokes' First Problem:** suddenly started plate
- **Stokes' Second Problem:** oscillating plate
- **Penetration Depth:** grows as √(νt)

### Creeping Flow

Very low Reynolds number flows.

- **Stokes Flow:** inertia negligible
- **Stokes Drag:** F = 3πμDV on sphere
- **Lubrication Theory:** thin film flows

## Unit 3: Boundary Layer Theory

### Boundary Layer Equations

Prandtl simplified Navier-Stokes.

- **Prandtl Boundary Layer Equations:** thin layer approximations
- **Blasius Solution:** laminar flat plate similarity solution
- **Thickness:** δ ≈ 5x/√Rex

### Integral Methods

Approximate boundary layer solutions.

- **Von Karman Momentum Integral:** relates wall shear to momentum thickness
- **Momentum Thickness:** loss of momentum flux
- **Shape Factor:** displacement / momentum thickness

### Separation

Adverse pressure gradient detaches flow.

- **Flow Separation:** wall shear becomes zero
- **Adverse Pressure Gradient:** pressure rising downstream
- **Separation Control:** suction or vortex generators

### Thermal Boundary Layer

Heat transfer near walls.

- **Thermal Boundary Layer:** temperature varies near wall
- **Prandtl Number Effect:** ratio of momentum to thermal diffusivity
- **Reynolds Analogy:** links friction and heat transfer

## Unit 4: Turbulence

### Nature of Turbulence

Chaotic, three-dimensional flow.

- **Turbulence:** irregular, diffusive, dissipative flow
- **Transition:** laminar to turbulent change
- **Energy Cascade:** energy passes from large to small eddies

### Reynolds Averaging

Mean and fluctuating components.

- **Reynolds Decomposition:** u = ū + u'
- **Reynolds Stress:** −ρ u'v'
- **Closure Problem:** more unknowns than equations

### Turbulence Models

Models close RANS equations.

- **Mixing Length Model:** Prandtl's algebraic model
- **k-ε Model:** two-equation turbulence model
- **k-ω SST:** blends near-wall and free-stream models

### Wall Turbulence

Near-wall structure.

- **Law of the Wall:** u⁺ = (1/κ) ln y⁺ + B
- **Viscous Sublayer:** u⁺ = y⁺
- **Kolmogorov Scale:** smallest turbulent eddies

## Unit 5: Compressible & Potential Flow

### Potential Flow

Inviscid irrotational flow.

- **Velocity Potential:** V = ∇φ
- **Laplace Equation:** ∇²φ = 0
- **Superposition:** combining elementary flows

### Elementary Potential Flows

Building blocks of potential flow.

- **Source and Sink:** radial flows
- **Doublet:** source-sink limit
- **Flow Past Cylinder:** uniform flow plus doublet

### Compressible Flow

Density changes at high Mach.

- **Mach Number:** V/a
- **Isentropic Relations:** T0/T = 1 + (γ − 1)M²/2
- **Normal Shock:** abrupt compression to subsonic

### Oblique Shocks & Expansion

Supersonic turning flows.

- **Oblique Shock:** inclined shock wave
- **Prandtl-Meyer Expansion:** isentropic turning of supersonic flow
- **θ-β-M Relation:** links deflection, shock angle and Mach

## Standard Textbooks

- *Viscous Fluid Flow* — Frank M. White
- *Boundary Layer Theory* — Schlichting & Gersten
- *Turbulent Flows* — Stephen B. Pope

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
