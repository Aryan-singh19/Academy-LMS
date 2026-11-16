# MTH-104 Computational Fluid Dynamics — Unit-wise Study Notes

> Governing equations, discretisation, finite difference and finite volume methods, pressure-velocity coupling, turbulence modelling and CFD practice.

## Unit 1: Governing Equations

### Conservation Equations

CFD solves conservation laws.

- **Conservative Form:** derivatives of fluxes
- **Generic Transport Equation:** unsteady + convection = diffusion + source
- **Conservation Property:** discrete fluxes balance

### Classification of PDEs

PDE type sets solution method.

- **Elliptic PDE:** steady diffusion, e.g. Laplace
- **Parabolic PDE:** transient diffusion
- **Hyperbolic PDE:** wave propagation

### Boundary Conditions

Conditions define the problem.

- **Dirichlet Condition:** specified value
- **Neumann Condition:** specified gradient
- **Robin Condition:** mixed condition

### Non-dimensionalisation

Scaling reveals key parameters.

- **Reynolds Number:** inertia / viscous forces
- **Peclet Number:** convection / diffusion
- **Courant Number:** uΔt/Δx

## Unit 2: Finite Difference Method

### Discretisation

Derivatives approximated by differences.

- **Forward Difference:** first-order accurate
- **Central Difference:** second-order accurate
- **Truncation Error:** terms dropped from Taylor series

### Consistency, Stability, Convergence

Properties of numerical schemes.

- **Consistency:** discrete equations approach PDE
- **Lax Equivalence Theorem:** consistency + stability ⇒ convergence
- **Von Neumann Analysis:** Fourier stability analysis

### Explicit & Implicit Schemes

Time integration schemes.

- **Explicit Scheme:** uses known values only
- **Crank-Nicolson Scheme:** second-order implicit average
- **CFL Condition:** Courant number ≤ 1 for explicit schemes

### Solving Linear Systems

Algebraic equations from discretisation.

- **TDMA:** tridiagonal matrix algorithm
- **Gauss-Seidel Iteration:** iterative solver
- **Multigrid:** accelerates convergence using coarse grids

## Unit 3: Finite Volume Method

### FVM Fundamentals

Integrate over control volumes.

- **Control Volume:** cell around node
- **Face Flux:** convective and diffusive transport across faces
- **Conservation:** exact discrete conservation

### Convection Schemes

Interpolating face values.

- **Upwind Scheme:** bounded but first-order, numerically diffusive
- **QUICK Scheme:** quadratic upstream interpolation
- **TVD Scheme:** high-order without oscillations

### Unstructured Meshes

Complex geometries.

- **Unstructured Mesh:** arbitrary polyhedral cells
- **Non-orthogonal Correction:** accounts for skewed faces
- **Mesh Quality:** skewness and aspect ratio

### Unsteady FVM

Time-dependent problems.

- **Implicit Euler:** first-order stable time scheme
- **Second-order Backward Scheme:** BDF2
- **Time Step Selection:** based on Courant number

## Unit 4: Pressure-Velocity Coupling

### Incompressible Flow Challenge

Pressure has no own equation.

- **Pressure-velocity Coupling:** pressure enforces continuity
- **Checkerboard Pressure:** oscillation on collocated grids
- **Staggered Grid:** velocities at faces

### SIMPLE Algorithm

Iterative pressure correction.

- **SIMPLE:** semi-implicit method for pressure-linked equations
- **Pressure Correction Equation:** derived from continuity
- **Under-relaxation:** stabilises iterations

### SIMPLER, SIMPLEC & PISO

Improved algorithms.

- **SIMPLEC:** consistent variant with better convergence
- **PISO:** pressure implicit with splitting, good for transient
- **Rhie-Chow Interpolation:** avoids checkerboard on collocated grids

### Compressible Solvers

Density-based methods.

- **Density-based Solver:** solves coupled conservation equations
- **Roe Scheme:** approximate Riemann solver
- **Shock Capturing:** resolving shocks without oscillation

## Unit 5: Turbulence & CFD Practice

### RANS Models in CFD

Practical turbulence models.

- **k-ε Model:** robust for free shear flows
- **k-ω SST:** good near walls and separation
- **Wall Functions:** log law near wall

### LES & DNS

Resolving turbulence.

- **DNS:** resolves all scales
- **LES:** resolves large eddies, models small
- **Subgrid Scale Model:** Smagorinsky model

### Verification & Validation

Trusting CFD results.

- **Grid Independence Study:** results unchanged with refinement
- **Validation:** comparison with experiments
- **Richardson Extrapolation:** estimates discretisation error

### CFD Tools & Workflow

Practical CFD process.

- **Pre-processing:** geometry and meshing
- **Solver:** numerical solution
- **Post-processing:** contours, vectors and streamlines

## Standard Textbooks

- *Computational Fluid Dynamics* — John D. Anderson
- *An Introduction to Computational Fluid Dynamics: The Finite Volume Method* — Versteeg & Malalasekera
- *Numerical Heat Transfer and Fluid Flow* — Suhas V. Patankar

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
