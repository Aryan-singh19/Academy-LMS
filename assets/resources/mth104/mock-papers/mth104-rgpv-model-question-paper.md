# MTH-104 Computational Fluid Dynamics — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: M.Tech Thermal Sem 1: MTH-104.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Conservative Form. Explain its role in Conservation Equations with a suitable example or diagram. **[7]**

(b) Explain Classification of PDEs in detail. Differentiate between Elliptic PDE and Parabolic PDE. **[7]**

**Q2.** *(Unit 2)*

(a) Define Lax Equivalence Theorem. Explain its role in Consistency, Stability, Convergence with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Explicit & Implicit Schemes. Bring out the significance of Explicit Scheme and Crank-Nicolson Scheme. **[7]**

**Q3.** *(Unit 3)*

(a) Define Mesh Quality. Explain its role in Unstructured Meshes with a suitable example or diagram. **[7]**

(b) Explain Unsteady FVM in detail. Differentiate between Implicit Euler and Second-order Backward Scheme. **[7]**

**Q4.** *(Unit 4)*

(a) Define Density-based Solver. Explain its role in Compressible Solvers with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Incompressible Flow Challenge. Bring out the significance of Pressure-velocity Coupling and Checkerboard Pressure. **[7]**

**Q5.** *(Unit 5)*

(a) Define k-ω SST. Explain its role in RANS Models in CFD with a suitable example or diagram. **[7]**

(b) Explain LES & DNS in detail. Differentiate between DNS and LES. **[7]**

**Q6.** *(Unit 1)*

(a) Define Courant Number. Explain its role in Non-dimensionalisation with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Conservation Equations. Bring out the significance of Conservative Form and Generic Transport Equation. **[7]**

**Q7.** *(Unit 3)*

(a) Define Control Volume. Explain its role in FVM Fundamentals with a suitable example or diagram. **[7]**

(b) Explain Convection Schemes in detail. Differentiate between Upwind Scheme and QUICK Scheme. **[7]**

**Q8.** *(Unit 5)*

(a) Define LES. Explain its role in LES & DNS with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Verification & Validation. Bring out the significance of Grid Independence Study and Validation. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Parabolic PDE. Explain its role in Classification of PDEs with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Boundary Conditions. Bring out the significance of Dirichlet Condition and Neumann Condition. **[7]**

**Q2.** *(Unit 2)*

(a) Define CFL Condition. Explain its role in Explicit & Implicit Schemes with a suitable example or diagram. **[7]**

(b) Explain Solving Linear Systems in detail. Differentiate between TDMA and Gauss-Seidel Iteration. **[7]**

**Q3.** *(Unit 3)*

(a) Define Implicit Euler. Explain its role in Unsteady FVM with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss FVM Fundamentals. Bring out the significance of Control Volume and Face Flux. **[7]**

**Q4.** *(Unit 4)*

(a) Define Checkerboard Pressure. Explain its role in Incompressible Flow Challenge with a suitable example or diagram. **[7]**

(b) Explain SIMPLE Algorithm in detail. Differentiate between SIMPLE and Pressure Correction Equation. **[7]**

**Q5.** *(Unit 5)*

(a) Define Subgrid Scale Model. Explain its role in LES & DNS with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Verification & Validation. Bring out the significance of Grid Independence Study and Validation. **[7]**

**Q6.** *(Unit 2)*

(a) Define Forward Difference. Explain its role in Discretisation with a suitable example or diagram. **[7]**

(b) Explain Consistency, Stability, Convergence in detail. Differentiate between Consistency and Lax Equivalence Theorem. **[7]**

**Q7.** *(Unit 4)*

(a) Define Pressure Correction Equation. Explain its role in SIMPLE Algorithm with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss SIMPLER, SIMPLEC & PISO. Bring out the significance of SIMPLEC and PISO. **[7]**

**Q8.** *(Unit 1)*

(a) Define Robin Condition. Explain its role in Boundary Conditions with a suitable example or diagram. **[7]**

(b) Explain Non-dimensionalisation in detail. Differentiate between Reynolds Number and Peclet Number. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Conservative Form: derivatives of fluxes
- **Q1(b):** Elliptic PDE: steady diffusion, e.g. Laplace | Parabolic PDE: transient diffusion | Hyperbolic PDE: wave propagation
- **Q2(a):** Lax Equivalence Theorem: consistency + stability ⇒ convergence
- **Q2(b):** Explicit Scheme: uses known values only | Crank-Nicolson Scheme: second-order implicit average | CFL Condition: Courant number ≤ 1 for explicit schemes
- **Q3(a):** Mesh Quality: skewness and aspect ratio
- **Q3(b):** Implicit Euler: first-order stable time scheme | Second-order Backward Scheme: BDF2 | Time Step Selection: based on Courant number
- **Q4(a):** Density-based Solver: solves coupled conservation equations
- **Q4(b):** Pressure-velocity Coupling: pressure enforces continuity | Checkerboard Pressure: oscillation on collocated grids | Staggered Grid: velocities at faces
- **Q5(a):** k-ω SST: good near walls and separation
- **Q5(b):** DNS: resolves all scales | LES: resolves large eddies, models small | Subgrid Scale Model: Smagorinsky model
- **Q6(a):** Courant Number: uΔt/Δx
- **Q6(b):** Conservative Form: derivatives of fluxes | Generic Transport Equation: unsteady + convection = diffusion + source | Conservation Property: discrete fluxes balance
- **Q7(a):** Control Volume: cell around node
- **Q7(b):** Upwind Scheme: bounded but first-order, numerically diffusive | QUICK Scheme: quadratic upstream interpolation | TVD Scheme: high-order without oscillations
- **Q8(a):** LES: resolves large eddies, models small
- **Q8(b):** Grid Independence Study: results unchanged with refinement | Validation: comparison with experiments | Richardson Extrapolation: estimates discretisation error

## Recommended Books

- *Computational Fluid Dynamics* — John D. Anderson
- *An Introduction to Computational Fluid Dynamics: The Finite Volume Method* — Versteeg & Malalasekera
- *Numerical Heat Transfer and Fluid Flow* — Suhas V. Patankar
