# MST-102 Theory of Elasticity & Plasticity — Unit-wise Study Notes

> Stress and strain analysis, compatibility, 2D elasticity, torsion, plasticity theories and yield criteria.

## Unit 1: Analysis of Stress

### Stress at a Point

Stress is a tensor.

- **Stress Tensor:** nine components at a point
- **Cauchy's Formula:** traction = stress tensor × normal
- **Symmetry of Stress:** τxy = τyx

### Principal Stresses

Extreme normal stresses.

- **Principal Stress:** normal stress on plane with zero shear
- **Stress Invariants:** I1, I2, I3 independent of axes
- **Characteristic Equation:** σ³ − I1σ² + I2σ − I3 = 0

### Equilibrium Equations

Differential equilibrium.

- **Equilibrium Equation:** ∂σx/∂x + ∂τxy/∂y + ∂τxz/∂z + Bx = 0
- **Body Force:** force per unit volume
- **Mohr's Circle in 3D:** three circles for principal stresses

### Octahedral & Deviatoric Stress

Stress decomposition.

- **Hydrostatic Stress:** mean normal stress
- **Deviatoric Stress:** total minus hydrostatic
- **Octahedral Shear Stress:** related to distortion energy

## Unit 2: Analysis of Strain & Constitutive Relations

### Strain at a Point

Strain is also a tensor.

- **Strain-displacement Relations:** εx = ∂u/∂x, γxy = ∂u/∂y + ∂v/∂x
- **Principal Strains:** extreme normal strains
- **Volumetric Strain:** sum of normal strains

### Compatibility Equations

Strains must fit together.

- **Compatibility Equation:** ∂²εx/∂y² + ∂²εy/∂x² = ∂²γxy/∂x∂y
- **Saint-Venant Compatibility:** six compatibility equations
- **Single-valued Displacements:** ensured by compatibility

### Generalised Hooke's Law

Linear elastic constitutive law.

- **Generalised Hooke's Law:** stress linearly related to strain
- **Isotropic Material:** two independent constants
- **Lame's Constants:** λ and μ

### Strain Energy

Energy stored in elastic bodies.

- **Strain Energy Density:** ½ σij εij
- **Clapeyron's Theorem:** strain energy equals half work of loads
- **Uniqueness Theorem:** elasticity solution is unique

## Unit 3: Two-dimensional Elasticity

### Plane Stress & Plane Strain

2D idealisations.

- **Plane Stress:** σz = 0 for thin plates
- **Plane Strain:** εz = 0 for long bodies
- **Conversion:** by modifying elastic constants

### Airy Stress Function

Solving 2D problems.

- **Airy Stress Function:** σx = ∂²φ/∂y²
- **Biharmonic Equation:** ∇⁴φ = 0
- **Polynomial Solutions:** for beams

### Polar Coordinates

Problems with circular geometry.

- **Thick Cylinder:** Lame's solution
- **Stress Concentration at Hole:** Kirsch solution, factor 3
- **Rotating Disc:** centrifugal stresses

### Saint-Venant's Principle

Local effects decay.

- **Saint-Venant's Principle:** statically equivalent loads give same distant stresses
- **Semi-inverse Method:** assume part of solution
- **Boussinesq Problem:** point load on half-space

## Unit 4: Torsion of Non-circular Sections

### Torsion Fundamentals

Warping of non-circular shafts.

- **Warping:** out-of-plane displacement of cross-section
- **Prandtl Stress Function:** φ for torsion
- **Torsion Equation:** ∇²φ = −2Gθ

### Membrane Analogy

Visualising torsional stress.

- **Membrane Analogy:** stress function like soap film deflection
- **Shear Stress:** slope of membrane
- **Torque:** twice volume under membrane

### Torsion of Thin Sections

Open and closed thin-walled sections.

- **Thin Rectangular Section:** J = bt³/3
- **Closed Thin-walled Section:** Bredt-Batho formula
- **Shear Flow:** q = T/(2A)

### Torsion of Standard Shapes

Known solutions.

- **Elliptical Section:** exact Prandtl solution
- **Equilateral Triangle:** exact solution
- **Rectangular Section:** series solution

## Unit 5: Plasticity

### Plastic Behaviour

Permanent deformation after yield.

- **Yield Point:** start of plastic deformation
- **Strain Hardening:** increase of yield stress with plastic strain
- **Bauschinger Effect:** reduced yield on load reversal

### Yield Criteria

When yielding starts.

- **Tresca Criterion:** maximum shear stress
- **von Mises Criterion:** distortion energy
- **Yield Surface:** boundary of elastic region in stress space

### Flow Rules

Plastic strain direction.

- **Normality Rule:** plastic strain normal to yield surface
- **Levy-Mises Equations:** rigid-plastic flow rule
- **Prandtl-Reuss Equations:** elastic-plastic flow rule

### Limit Analysis

Collapse by plastic theorems.

- **Lower Bound Theorem:** statically admissible field gives lower bound
- **Upper Bound Theorem:** kinematically admissible mechanism gives upper bound
- **Slip Line Field:** plane strain plasticity

## Standard Textbooks

- *Theory of Elasticity* — Timoshenko & Goodier
- *Advanced Mechanics of Solids* — L. S. Srinath
- *Theory of Plasticity* — J. Chakrabarty

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
