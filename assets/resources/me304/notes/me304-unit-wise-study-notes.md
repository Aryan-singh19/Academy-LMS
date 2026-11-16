# ME-304 Strength of Materials — Unit-wise Study Notes

> Stress and strain, SFD and BMD, bending and shear stresses, torsion, deflection, columns and principal stresses.

## Unit 1: Simple Stress & Strain

### Stress, Strain & Hooke's Law

Loads produce internal stress and deformation.

- **Normal Stress:** σ = P/A
- **Hooke's Law:** σ = Eε within the elastic limit
- **Poisson's Ratio:** lateral strain / longitudinal strain

### Elastic Constants

Material elasticity is described by related constants.

- **Young's Modulus:** ratio of normal stress to strain
- **Modulus of Rigidity:** G = shear stress / shear strain
- **Relation of Constants:** E = 2G(1 + ν) = 3K(1 − 2ν)

### Bars of Varying Section & Compound Bars

Composite and stepped bars share loads.

- **Deformation of Bar:** δ = PL/(AE)
- **Compound Bar:** bars of different materials sharing a load with equal strain
- **Thermal Stress:** σ = EαΔT when expansion is prevented

### Strain Energy

Energy is stored in deformed members.

- **Strain Energy:** U = σ²V/(2E)
- **Resilience:** strain energy stored up to elastic limit
- **Impact Loading:** suddenly applied load gives twice the static stress

## Unit 2: Shear Force & Bending Moment

### Types of Beams & Loads

Beams carry transverse loads.

- **Cantilever:** beam fixed at one end, free at the other
- **Simply Supported Beam:** supported on a pin and roller
- **UDL:** uniformly distributed load

### SFD & BMD

Diagrams show internal force variation.

- **Shear Force:** algebraic sum of forces on one side of a section
- **Bending Moment:** algebraic sum of moments on one side
- **Relation:** dM/dx = V

### Point of Contraflexure

Bending moment may change sign.

- **Point of Contraflexure:** location where bending moment is zero and changes sign
- **Maximum Bending Moment:** occurs where shear force is zero
- **Overhanging Beam:** beam extending beyond its support

### Standard Results

Common beams have standard formulae.

- **SSB Central Load:** Mmax = WL/4
- **SSB with UDL:** Mmax = wL²/8
- **Cantilever End Load:** Mmax = WL at the fixed end

## Unit 3: Bending & Shear Stresses

### Theory of Simple Bending

Bending stress varies linearly with depth.

- **Bending Equation:** M/I = σ/y = E/R
- **Neutral Axis:** layer with zero bending stress
- **Section Modulus:** Z = I/ymax

### Moment of Inertia

Section shape determines stiffness.

- **Rectangle I:** bd³/12 about centroidal axis
- **Parallel Axis Theorem:** I = Ig + Ah²
- **Circular Section I:** πd⁴/64

### Shear Stress in Beams

Shear stress varies across a section.

- **Shear Stress Formula:** τ = VAȳ/(Ib)
- **Rectangular Section:** maximum shear 1.5 times average
- **Circular Section:** maximum shear 4/3 times average

### Combined Direct & Bending Stress

Eccentric loads produce combined stresses.

- **Eccentric Load:** load offset from centroid
- **Combined Stress:** σ = P/A ± M/Z
- **Middle Third Rule:** no tension if load lies within middle third

## Unit 4: Torsion & Deflection

### Torsion of Shafts

Shafts transmit torque.

- **Torsion Equation:** T/J = τ/r = Gθ/L
- **Polar Moment of Inertia:** J = πd⁴/32 for solid shaft
- **Power Transmitted:** P = 2πNT/60

### Hollow Shafts & Combined Loading

Hollow shafts are lighter for the same strength.

- **Hollow Shaft J:** π(D⁴ − d⁴)/32
- **Equivalent Torque:** Te = √(M² + T²)
- **Equivalent Bending Moment:** Me = ½(M + √(M² + T²))

### Deflection of Beams

Deflection is found from the elastic curve.

- **Elastic Curve Equation:** EI d²y/dx² = M
- **Macaulay's Method:** single equation for beams with multiple loads
- **Cantilever End Load Deflection:** WL³/(3EI)

### Moment Area & Springs

Other methods for deflection; springs store energy.

- **Moment Area Method:** slope change equals area of M/EI diagram
- **Close-coiled Helical Spring Stiffness:** k = Gd⁴/(8D³n)
- **Leaf Spring:** laminated spring used in vehicles

## Unit 5: Columns, Cylinders & Principal Stresses

### Columns & Struts

Long compression members fail by buckling.

- **Euler's Formula:** Pcr = π²EI/Le²
- **Effective Length:** depends on end conditions; Le = L for both ends hinged
- **Slenderness Ratio:** Le/k

### Rankine's Formula

Empirical formula covers short and long columns.

- **Rankine's Formula:** 1/P = 1/Pc + 1/Pe
- **Crushing Load:** σc·A for short columns
- **Rankine Constant:** α depends on material

### Thin & Thick Cylinders

Pressure vessels carry hoop and longitudinal stress.

- **Hoop Stress:** σh = pd/(2t) for thin cylinder
- **Longitudinal Stress:** σl = pd/(4t)
- **Lame's Equations:** stresses in thick cylinders

### Principal Stresses & Mohr's Circle

Stress transformation finds extreme stresses.

- **Principal Stress:** normal stress on plane with zero shear
- **Maximum Shear Stress:** (σ1 − σ2)/2
- **Mohr's Circle:** graphical method for stress transformation

## Standard Textbooks

- *Strength of Materials* — R. K. Rajput
- *Mechanics of Materials* — Gere & Goodno
- *Strength of Materials* — S. S. Rattan

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
