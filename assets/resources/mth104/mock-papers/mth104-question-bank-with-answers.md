# MTH-104 Computational Fluid Dynamics — Question Bank with Answer Hints

## Unit 1: Governing Equations

### Short answer (2-3 marks)

- **Q.** Define *Conservative Form*.  
  **Ans.** derivatives of fluxes
- **Q.** Define *Generic Transport Equation*.  
  **Ans.** unsteady + convection = diffusion + source
- **Q.** Define *Conservation Property*.  
  **Ans.** discrete fluxes balance
- **Q.** Define *Elliptic PDE*.  
  **Ans.** steady diffusion, e.g. Laplace
- **Q.** Define *Parabolic PDE*.  
  **Ans.** transient diffusion
- **Q.** Define *Hyperbolic PDE*.  
  **Ans.** wave propagation
- **Q.** Define *Dirichlet Condition*.  
  **Ans.** specified value
- **Q.** Define *Neumann Condition*.  
  **Ans.** specified gradient
- **Q.** Define *Robin Condition*.  
  **Ans.** mixed condition
- **Q.** Define *Reynolds Number*.  
  **Ans.** inertia / viscous forces
- **Q.** Define *Peclet Number*.  
  **Ans.** convection / diffusion
- **Q.** Define *Courant Number*.  
  **Ans.** uΔt/Δx

### Long answer (7 marks)

- **Q.** Explain *Conservation Equations* in detail with a neat diagram.  
  **Key points:** CFD solves conservation laws. Conservative Form — derivatives of fluxes; Generic Transport Equation — unsteady + convection = diffusion + source; Conservation Property — discrete fluxes balance.
- **Q.** Explain *Classification of PDEs* in detail with a neat diagram.  
  **Key points:** PDE type sets solution method. Elliptic PDE — steady diffusion, e.g. Laplace; Parabolic PDE — transient diffusion; Hyperbolic PDE — wave propagation.
- **Q.** Explain *Boundary Conditions* in detail with a neat diagram.  
  **Key points:** Conditions define the problem. Dirichlet Condition — specified value; Neumann Condition — specified gradient; Robin Condition — mixed condition.
- **Q.** Explain *Non-dimensionalisation* in detail with a neat diagram.  
  **Key points:** Scaling reveals key parameters. Reynolds Number — inertia / viscous forces; Peclet Number — convection / diffusion; Courant Number — uΔt/Δx.

## Unit 2: Finite Difference Method

### Short answer (2-3 marks)

- **Q.** Define *Forward Difference*.  
  **Ans.** first-order accurate
- **Q.** Define *Central Difference*.  
  **Ans.** second-order accurate
- **Q.** Define *Truncation Error*.  
  **Ans.** terms dropped from Taylor series
- **Q.** Define *Consistency*.  
  **Ans.** discrete equations approach PDE
- **Q.** Define *Lax Equivalence Theorem*.  
  **Ans.** consistency + stability ⇒ convergence
- **Q.** Define *Von Neumann Analysis*.  
  **Ans.** Fourier stability analysis
- **Q.** Define *Explicit Scheme*.  
  **Ans.** uses known values only
- **Q.** Define *Crank-Nicolson Scheme*.  
  **Ans.** second-order implicit average
- **Q.** Define *CFL Condition*.  
  **Ans.** Courant number ≤ 1 for explicit schemes
- **Q.** Define *TDMA*.  
  **Ans.** tridiagonal matrix algorithm
- **Q.** Define *Gauss-Seidel Iteration*.  
  **Ans.** iterative solver
- **Q.** Define *Multigrid*.  
  **Ans.** accelerates convergence using coarse grids

### Long answer (7 marks)

- **Q.** Explain *Discretisation* in detail with a neat diagram.  
  **Key points:** Derivatives approximated by differences. Forward Difference — first-order accurate; Central Difference — second-order accurate; Truncation Error — terms dropped from Taylor series.
- **Q.** Explain *Consistency, Stability, Convergence* in detail with a neat diagram.  
  **Key points:** Properties of numerical schemes. Consistency — discrete equations approach PDE; Lax Equivalence Theorem — consistency + stability ⇒ convergence; Von Neumann Analysis — Fourier stability analysis.
- **Q.** Explain *Explicit & Implicit Schemes* in detail with a neat diagram.  
  **Key points:** Time integration schemes. Explicit Scheme — uses known values only; Crank-Nicolson Scheme — second-order implicit average; CFL Condition — Courant number ≤ 1 for explicit schemes.
- **Q.** Explain *Solving Linear Systems* in detail with a neat diagram.  
  **Key points:** Algebraic equations from discretisation. TDMA — tridiagonal matrix algorithm; Gauss-Seidel Iteration — iterative solver; Multigrid — accelerates convergence using coarse grids.

## Unit 3: Finite Volume Method

### Short answer (2-3 marks)

- **Q.** Define *Control Volume*.  
  **Ans.** cell around node
- **Q.** Define *Face Flux*.  
  **Ans.** convective and diffusive transport across faces
- **Q.** Define *Conservation*.  
  **Ans.** exact discrete conservation
- **Q.** Define *Upwind Scheme*.  
  **Ans.** bounded but first-order, numerically diffusive
- **Q.** Define *QUICK Scheme*.  
  **Ans.** quadratic upstream interpolation
- **Q.** Define *TVD Scheme*.  
  **Ans.** high-order without oscillations
- **Q.** Define *Unstructured Mesh*.  
  **Ans.** arbitrary polyhedral cells
- **Q.** Define *Non-orthogonal Correction*.  
  **Ans.** accounts for skewed faces
- **Q.** Define *Mesh Quality*.  
  **Ans.** skewness and aspect ratio
- **Q.** Define *Implicit Euler*.  
  **Ans.** first-order stable time scheme
- **Q.** Define *Second-order Backward Scheme*.  
  **Ans.** BDF2
- **Q.** Define *Time Step Selection*.  
  **Ans.** based on Courant number

### Long answer (7 marks)

- **Q.** Explain *FVM Fundamentals* in detail with a neat diagram.  
  **Key points:** Integrate over control volumes. Control Volume — cell around node; Face Flux — convective and diffusive transport across faces; Conservation — exact discrete conservation.
- **Q.** Explain *Convection Schemes* in detail with a neat diagram.  
  **Key points:** Interpolating face values. Upwind Scheme — bounded but first-order, numerically diffusive; QUICK Scheme — quadratic upstream interpolation; TVD Scheme — high-order without oscillations.
- **Q.** Explain *Unstructured Meshes* in detail with a neat diagram.  
  **Key points:** Complex geometries. Unstructured Mesh — arbitrary polyhedral cells; Non-orthogonal Correction — accounts for skewed faces; Mesh Quality — skewness and aspect ratio.
- **Q.** Explain *Unsteady FVM* in detail with a neat diagram.  
  **Key points:** Time-dependent problems. Implicit Euler — first-order stable time scheme; Second-order Backward Scheme — BDF2; Time Step Selection — based on Courant number.

## Unit 4: Pressure-Velocity Coupling

### Short answer (2-3 marks)

- **Q.** Define *Pressure-velocity Coupling*.  
  **Ans.** pressure enforces continuity
- **Q.** Define *Checkerboard Pressure*.  
  **Ans.** oscillation on collocated grids
- **Q.** Define *Staggered Grid*.  
  **Ans.** velocities at faces
- **Q.** Define *SIMPLE*.  
  **Ans.** semi-implicit method for pressure-linked equations
- **Q.** Define *Pressure Correction Equation*.  
  **Ans.** derived from continuity
- **Q.** Define *Under-relaxation*.  
  **Ans.** stabilises iterations
- **Q.** Define *SIMPLEC*.  
  **Ans.** consistent variant with better convergence
- **Q.** Define *PISO*.  
  **Ans.** pressure implicit with splitting, good for transient
- **Q.** Define *Rhie-Chow Interpolation*.  
  **Ans.** avoids checkerboard on collocated grids
- **Q.** Define *Density-based Solver*.  
  **Ans.** solves coupled conservation equations
- **Q.** Define *Roe Scheme*.  
  **Ans.** approximate Riemann solver
- **Q.** Define *Shock Capturing*.  
  **Ans.** resolving shocks without oscillation

### Long answer (7 marks)

- **Q.** Explain *Incompressible Flow Challenge* in detail with a neat diagram.  
  **Key points:** Pressure has no own equation. Pressure-velocity Coupling — pressure enforces continuity; Checkerboard Pressure — oscillation on collocated grids; Staggered Grid — velocities at faces.
- **Q.** Explain *SIMPLE Algorithm* in detail with a neat diagram.  
  **Key points:** Iterative pressure correction. SIMPLE — semi-implicit method for pressure-linked equations; Pressure Correction Equation — derived from continuity; Under-relaxation — stabilises iterations.
- **Q.** Explain *SIMPLER, SIMPLEC & PISO* in detail with a neat diagram.  
  **Key points:** Improved algorithms. SIMPLEC — consistent variant with better convergence; PISO — pressure implicit with splitting, good for transient; Rhie-Chow Interpolation — avoids checkerboard on collocated grids.
- **Q.** Explain *Compressible Solvers* in detail with a neat diagram.  
  **Key points:** Density-based methods. Density-based Solver — solves coupled conservation equations; Roe Scheme — approximate Riemann solver; Shock Capturing — resolving shocks without oscillation.

## Unit 5: Turbulence & CFD Practice

### Short answer (2-3 marks)

- **Q.** Define *k-ε Model*.  
  **Ans.** robust for free shear flows
- **Q.** Define *k-ω SST*.  
  **Ans.** good near walls and separation
- **Q.** Define *Wall Functions*.  
  **Ans.** log law near wall
- **Q.** Define *DNS*.  
  **Ans.** resolves all scales
- **Q.** Define *LES*.  
  **Ans.** resolves large eddies, models small
- **Q.** Define *Subgrid Scale Model*.  
  **Ans.** Smagorinsky model
- **Q.** Define *Grid Independence Study*.  
  **Ans.** results unchanged with refinement
- **Q.** Define *Validation*.  
  **Ans.** comparison with experiments
- **Q.** Define *Richardson Extrapolation*.  
  **Ans.** estimates discretisation error
- **Q.** Define *Pre-processing*.  
  **Ans.** geometry and meshing
- **Q.** Define *Solver*.  
  **Ans.** numerical solution
- **Q.** Define *Post-processing*.  
  **Ans.** contours, vectors and streamlines

### Long answer (7 marks)

- **Q.** Explain *RANS Models in CFD* in detail with a neat diagram.  
  **Key points:** Practical turbulence models. k-ε Model — robust for free shear flows; k-ω SST — good near walls and separation; Wall Functions — log law near wall.
- **Q.** Explain *LES & DNS* in detail with a neat diagram.  
  **Key points:** Resolving turbulence. DNS — resolves all scales; LES — resolves large eddies, models small; Subgrid Scale Model — Smagorinsky model.
- **Q.** Explain *Verification & Validation* in detail with a neat diagram.  
  **Key points:** Trusting CFD results. Grid Independence Study — results unchanged with refinement; Validation — comparison with experiments; Richardson Extrapolation — estimates discretisation error.
- **Q.** Explain *CFD Tools & Workflow* in detail with a neat diagram.  
  **Key points:** Practical CFD process. Pre-processing — geometry and meshing; Solver — numerical solution; Post-processing — contours, vectors and streamlines.

