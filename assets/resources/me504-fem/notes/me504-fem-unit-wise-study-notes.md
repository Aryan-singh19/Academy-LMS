# ME-504(C) Finite Element Method — Unit-wise Study Notes

> Variational and weighted residual methods, 1D and 2D elements, isoparametric formulation, structural and thermal analysis.

## Unit 1: Introduction to FEM

### Basics of FEM

FEM divides a domain into small elements.

- **Finite Element Method:** numerical technique solving PDEs by discretisation
- **Element:** small subdomain with nodes
- **Node:** point where unknowns are computed

### Steps in FEM

FEM follows a standard procedure.

- **Discretisation:** dividing domain into elements
- **Assembly:** combining element matrices into global matrix
- **Boundary Conditions:** known displacements or forces applied

### Variational Methods

Energy principles yield FE equations.

- **Rayleigh-Ritz Method:** minimises total potential energy
- **Total Potential Energy:** strain energy minus work of loads
- **Principle of Minimum Potential Energy:** equilibrium at minimum potential

### Weighted Residual Methods

Residual methods minimise errors.

- **Galerkin Method:** weight functions equal to trial functions
- **Residual:** error from approximate solution in governing equation
- **Collocation Method:** residual zero at chosen points

## Unit 2: One-dimensional Elements

### Bar Element

Bar elements carry axial loads.

- **Bar Element Stiffness:** k = (AE/L)[1 −1; −1 1]
- **Shape Function:** interpolates displacement within element
- **Linear Element:** two nodes, linear displacement

### Truss Analysis

Trusses are assemblies of bar elements.

- **Truss Element:** bar with arbitrary orientation in 2D
- **Transformation Matrix:** converts local to global coordinates
- **Member Force:** computed from nodal displacements

### Beam Element

Beam elements carry bending.

- **Beam Element DOF:** transverse displacement and rotation at each node
- **Hermite Shape Functions:** cubic functions for beam elements
- **Beam Stiffness:** depends on EI/L³

### Quadratic Elements

Higher order elements improve accuracy.

- **Quadratic Element:** three nodes, quadratic displacement
- **Convergence:** solution approaches exact as mesh refines
- **h-refinement:** increasing number of elements

## Unit 3: Two-dimensional Elements

### Plane Stress & Plane Strain

2D problems use simplifying assumptions.

- **Plane Stress:** thin plates with σz = 0
- **Plane Strain:** long bodies with εz = 0
- **Constitutive Matrix:** [D] relates stress and strain

### CST Element

Constant strain triangle is the simplest 2D element.

- **CST:** 3-node triangle with constant strain
- **B Matrix:** strain-displacement matrix
- **Element Stiffness:** [k] = t·A·[B]^T[D][B]

### Quadrilateral & Higher Elements

Quadrilaterals give better accuracy.

- **Q4 Element:** 4-node bilinear quadrilateral
- **LST:** linear strain triangle with 6 nodes
- **Axisymmetric Element:** for bodies of revolution

### Mesh Generation

Meshing affects accuracy and cost.

- **Mesh:** arrangement of elements
- **Aspect Ratio:** longest to shortest side; should be near 1
- **Mesh Refinement:** finer elements at stress concentrations

## Unit 4: Isoparametric Formulation & Integration

### Isoparametric Elements

Same functions describe geometry and displacement.

- **Isoparametric Element:** geometry and field use same shape functions
- **Natural Coordinates:** ξ, η ranging from −1 to 1
- **Jacobian:** maps natural to global coordinates

### Numerical Integration

Gauss quadrature evaluates element integrals.

- **Gauss Quadrature:** integration using optimal points and weights
- **Two-point Rule:** exact for cubic polynomials
- **Reduced Integration:** fewer points to avoid locking

### Convergence Requirements

Elements must satisfy criteria.

- **Completeness:** rigid body motion and constant strain represented
- **Compatibility:** displacements continuous across elements
- **Patch Test:** checks convergence of element formulation

### Error Estimation

Results must be checked.

- **Discretisation Error:** error from finite element approximation
- **Stress Smoothing:** averaging stresses at nodes
- **Adaptive Meshing:** refining mesh where error is high

## Unit 5: Applications

### Heat Transfer Analysis

FEM solves conduction problems.

- **Thermal Conductivity Matrix:** analogous to stiffness matrix
- **1D Heat Conduction:** element matrix kA/L
- **Convection Boundary:** adds terms to matrix and load

### Dynamic Analysis

FEM finds natural frequencies.

- **Mass Matrix:** consistent or lumped
- **Eigenvalue Analysis:** [K − ω²M]{u} = 0
- **Mode Shapes:** deformation patterns at natural frequencies

### Fluid Flow & Torsion

Field problems share FE formulation.

- **Potential Flow:** Laplace equation solved by FEM
- **Torsion Problem:** Prandtl stress function
- **Field Problem:** governed by Poisson-type equations

### FEA Software

Commercial tools automate FEM.

- **ANSYS:** general-purpose FEA software
- **Pre-processing:** geometry, meshing and boundary conditions
- **Post-processing:** viewing stresses and displacements

## Standard Textbooks

- *An Introduction to the Finite Element Method* — J. N. Reddy
- *Introduction to Finite Elements in Engineering* — Chandrupatla & Belegundu
- *The Finite Element Method* — O. C. Zienkiewicz

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
