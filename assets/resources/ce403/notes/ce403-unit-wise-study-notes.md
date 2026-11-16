# CE-403 Structural Analysis-I — Unit-wise Study Notes

> Determinacy, deflection methods, energy principles, arches, cables, influence lines and indeterminate beams.

## Unit 1: Fundamentals of Structural Analysis

### Structures & Supports

Analysis predicts internal forces and deflections.

- **Determinate Structure:** solvable by equilibrium alone
- **Indeterminate Structure:** needs compatibility in addition to equilibrium
- **Degree of Indeterminacy:** unknown reactions minus equilibrium equations

### Static & Kinematic Indeterminacy

Two measures characterise structures.

- **Static Indeterminacy:** excess unknown forces
- **Kinematic Indeterminacy:** unknown joint displacements
- **Stability:** structure resists loads without collapse

### Analysis of Trusses

Truss members carry axial forces.

- **Method of Joints:** equilibrium at each joint
- **Method of Sections:** cut through members to find forces
- **Zero Force Member:** member carrying no load under given loading

### Principle of Superposition

Linear structures allow superposition.

- **Superposition:** total response equals sum of individual responses
- **Linearity:** displacements proportional to loads
- **Small Deflection Assumption:** geometry unchanged by loading

## Unit 2: Deflection of Beams

### Double Integration Method

Elastic curve gives deflection.

- **Elastic Curve:** EI d²y/dx² = M
- **Boundary Conditions:** known slopes and deflections at supports
- **Macaulay's Method:** single equation with brackets

### Moment Area Method

Areas of M/EI diagram give slope and deflection.

- **First Moment Area Theorem:** slope change equals area of M/EI
- **Second Theorem:** deflection equals moment of M/EI area
- **Application:** cantilevers and symmetric beams

### Conjugate Beam Method

Fictitious beam loaded with M/EI.

- **Conjugate Beam:** beam loaded by M/EI diagram
- **Shear in Conjugate Beam:** slope in real beam
- **Moment in Conjugate Beam:** deflection in real beam

### Standard Deflections

Common results are memorised.

- **Cantilever End Load:** WL³/(3EI)
- **SSB Central Load:** WL³/(48EI)
- **SSB UDL:** 5wL⁴/(384EI)

## Unit 3: Energy Methods

### Strain Energy

Work done is stored as strain energy.

- **Strain Energy in Bending:** ∫ M²/(2EI) dx
- **Strain Energy in Axial Load:** P²L/(2AE)
- **Complementary Energy:** energy used in non-linear analysis

### Castigliano's Theorems

Derivatives of strain energy give deflections.

- **Castigliano's First Theorem:** ∂U/∂Δ = P
- **Castigliano's Second Theorem:** ∂U/∂P = Δ
- **Dummy Load Method:** apply fictitious load to find deflection

### Unit Load Method

Virtual work finds deflections.

- **Virtual Work Principle:** external virtual work equals internal virtual work
- **Unit Load Method:** δ = ∫ Mm/(EI) dx
- **Truss Deflection:** δ = Σ PuL/(AE)

### Maxwell & Betti Theorems

Reciprocal theorems relate deflections.

- **Maxwell's Reciprocal Theorem:** deflection at A due to load at B equals deflection at B due to load at A
- **Betti's Theorem:** generalised reciprocal work theorem
- **Application:** influence lines by Müller-Breslau

## Unit 4: Arches & Cables

### Three-hinged Arches

Determinate arches carry loads by thrust.

- **Three-hinged Arch:** determinate with hinge at crown
- **Horizontal Thrust:** H = wL²/(8h) for parabolic arch under UDL
- **Normal Thrust:** axial force along arch

### Two-hinged Arches

Indeterminate arches need compatibility.

- **Two-hinged Arch:** one degree indeterminate
- **Rib Shortening:** effect of axial deformation
- **Temperature Effect:** changes horizontal thrust

### Cables

Cables carry loads in tension.

- **Cable Equation:** parabolic shape under uniform horizontal load
- **Maximum Tension:** at supports
- **Suspension Bridge:** cable-supported deck

### Stiffening Girders

Girders distribute loads to cables.

- **Stiffening Girder:** spreads loads in suspension bridges
- **Two-hinged Stiffening Girder:** common arrangement
- **Tension Coefficient Method:** analyses space trusses

## Unit 5: Influence Lines & Rolling Loads

### Influence Lines

ILs show effect of a moving unit load.

- **Influence Line:** response at a point as unit load moves
- **IL for Reaction:** straight line for simply supported beam
- **Müller-Breslau Principle:** IL shape equals deflected shape from released constraint

### Rolling Loads

Moving loads produce maximum effects.

- **Single Concentrated Load:** maximum moment when load is at section
- **UDL Longer than Span:** covers whole span for maximum
- **Maximum Bending Moment:** occurs under a load near mid-span

### Absolute Maximum Moment

Moving load trains create peak effects.

- **Absolute Maximum Moment:** largest moment anywhere in span
- **Resultant Rule:** centre of span bisects distance between resultant and nearest load
- **Equivalent UDL:** uniform load giving same maximum effect

### Indeterminate Beams

Propped and fixed beams.

- **Propped Cantilever:** one degree indeterminate
- **Fixed Beam:** fixing moments at both ends; wL²/12 for UDL
- **Clapeyron's Three Moment Equation:** analyses continuous beams

## Standard Textbooks

- *Structural Analysis Vol. 1* — S. S. Bhavikatti
- *Theory of Structures* — S. Ramamrutham
- *Structural Analysis* — R. C. Hibbeler

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
