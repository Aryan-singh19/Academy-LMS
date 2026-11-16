# ME-504(C) Finite Element Method — Question Bank with Answer Hints

## Unit 1: Introduction to FEM

### Short answer (2-3 marks)

- **Q.** Define *Finite Element Method*.  
  **Ans.** numerical technique solving PDEs by discretisation
- **Q.** Define *Element*.  
  **Ans.** small subdomain with nodes
- **Q.** Define *Node*.  
  **Ans.** point where unknowns are computed
- **Q.** Define *Discretisation*.  
  **Ans.** dividing domain into elements
- **Q.** Define *Assembly*.  
  **Ans.** combining element matrices into global matrix
- **Q.** Define *Boundary Conditions*.  
  **Ans.** known displacements or forces applied
- **Q.** Define *Rayleigh-Ritz Method*.  
  **Ans.** minimises total potential energy
- **Q.** Define *Total Potential Energy*.  
  **Ans.** strain energy minus work of loads
- **Q.** Define *Principle of Minimum Potential Energy*.  
  **Ans.** equilibrium at minimum potential
- **Q.** Define *Galerkin Method*.  
  **Ans.** weight functions equal to trial functions
- **Q.** Define *Residual*.  
  **Ans.** error from approximate solution in governing equation
- **Q.** Define *Collocation Method*.  
  **Ans.** residual zero at chosen points

### Long answer (7 marks)

- **Q.** Explain *Basics of FEM* in detail with a neat diagram.  
  **Key points:** FEM divides a domain into small elements. Finite Element Method — numerical technique solving PDEs by discretisation; Element — small subdomain with nodes; Node — point where unknowns are computed.
- **Q.** Explain *Steps in FEM* in detail with a neat diagram.  
  **Key points:** FEM follows a standard procedure. Discretisation — dividing domain into elements; Assembly — combining element matrices into global matrix; Boundary Conditions — known displacements or forces applied.
- **Q.** Explain *Variational Methods* in detail with a neat diagram.  
  **Key points:** Energy principles yield FE equations. Rayleigh-Ritz Method — minimises total potential energy; Total Potential Energy — strain energy minus work of loads; Principle of Minimum Potential Energy — equilibrium at minimum potential.
- **Q.** Explain *Weighted Residual Methods* in detail with a neat diagram.  
  **Key points:** Residual methods minimise errors. Galerkin Method — weight functions equal to trial functions; Residual — error from approximate solution in governing equation; Collocation Method — residual zero at chosen points.

## Unit 2: One-dimensional Elements

### Short answer (2-3 marks)

- **Q.** Define *Bar Element Stiffness*.  
  **Ans.** k = (AE/L)[1 −1; −1 1]
- **Q.** Define *Shape Function*.  
  **Ans.** interpolates displacement within element
- **Q.** Define *Linear Element*.  
  **Ans.** two nodes, linear displacement
- **Q.** Define *Truss Element*.  
  **Ans.** bar with arbitrary orientation in 2D
- **Q.** Define *Transformation Matrix*.  
  **Ans.** converts local to global coordinates
- **Q.** Define *Member Force*.  
  **Ans.** computed from nodal displacements
- **Q.** Define *Beam Element DOF*.  
  **Ans.** transverse displacement and rotation at each node
- **Q.** Define *Hermite Shape Functions*.  
  **Ans.** cubic functions for beam elements
- **Q.** Define *Beam Stiffness*.  
  **Ans.** depends on EI/L³
- **Q.** Define *Quadratic Element*.  
  **Ans.** three nodes, quadratic displacement
- **Q.** Define *Convergence*.  
  **Ans.** solution approaches exact as mesh refines
- **Q.** Define *h-refinement*.  
  **Ans.** increasing number of elements

### Long answer (7 marks)

- **Q.** Explain *Bar Element* in detail with a neat diagram.  
  **Key points:** Bar elements carry axial loads. Bar Element Stiffness — k = (AE/L)[1 −1; −1 1]; Shape Function — interpolates displacement within element; Linear Element — two nodes, linear displacement.
- **Q.** Explain *Truss Analysis* in detail with a neat diagram.  
  **Key points:** Trusses are assemblies of bar elements. Truss Element — bar with arbitrary orientation in 2D; Transformation Matrix — converts local to global coordinates; Member Force — computed from nodal displacements.
- **Q.** Explain *Beam Element* in detail with a neat diagram.  
  **Key points:** Beam elements carry bending. Beam Element DOF — transverse displacement and rotation at each node; Hermite Shape Functions — cubic functions for beam elements; Beam Stiffness — depends on EI/L³.
- **Q.** Explain *Quadratic Elements* in detail with a neat diagram.  
  **Key points:** Higher order elements improve accuracy. Quadratic Element — three nodes, quadratic displacement; Convergence — solution approaches exact as mesh refines; h-refinement — increasing number of elements.

## Unit 3: Two-dimensional Elements

### Short answer (2-3 marks)

- **Q.** Define *Plane Stress*.  
  **Ans.** thin plates with σz = 0
- **Q.** Define *Plane Strain*.  
  **Ans.** long bodies with εz = 0
- **Q.** Define *Constitutive Matrix*.  
  **Ans.** [D] relates stress and strain
- **Q.** Define *CST*.  
  **Ans.** 3-node triangle with constant strain
- **Q.** Define *B Matrix*.  
  **Ans.** strain-displacement matrix
- **Q.** Define *Element Stiffness*.  
  **Ans.** [k] = t·A·[B]^T[D][B]
- **Q.** Define *Q4 Element*.  
  **Ans.** 4-node bilinear quadrilateral
- **Q.** Define *LST*.  
  **Ans.** linear strain triangle with 6 nodes
- **Q.** Define *Axisymmetric Element*.  
  **Ans.** for bodies of revolution
- **Q.** Define *Mesh*.  
  **Ans.** arrangement of elements
- **Q.** Define *Aspect Ratio*.  
  **Ans.** longest to shortest side; should be near 1
- **Q.** Define *Mesh Refinement*.  
  **Ans.** finer elements at stress concentrations

### Long answer (7 marks)

- **Q.** Explain *Plane Stress & Plane Strain* in detail with a neat diagram.  
  **Key points:** 2D problems use simplifying assumptions. Plane Stress — thin plates with σz = 0; Plane Strain — long bodies with εz = 0; Constitutive Matrix — [D] relates stress and strain.
- **Q.** Explain *CST Element* in detail with a neat diagram.  
  **Key points:** Constant strain triangle is the simplest 2D element. CST — 3-node triangle with constant strain; B Matrix — strain-displacement matrix; Element Stiffness — [k] = t·A·[B]^T[D][B].
- **Q.** Explain *Quadrilateral & Higher Elements* in detail with a neat diagram.  
  **Key points:** Quadrilaterals give better accuracy. Q4 Element — 4-node bilinear quadrilateral; LST — linear strain triangle with 6 nodes; Axisymmetric Element — for bodies of revolution.
- **Q.** Explain *Mesh Generation* in detail with a neat diagram.  
  **Key points:** Meshing affects accuracy and cost. Mesh — arrangement of elements; Aspect Ratio — longest to shortest side; should be near 1; Mesh Refinement — finer elements at stress concentrations.

## Unit 4: Isoparametric Formulation & Integration

### Short answer (2-3 marks)

- **Q.** Define *Isoparametric Element*.  
  **Ans.** geometry and field use same shape functions
- **Q.** Define *Natural Coordinates*.  
  **Ans.** ξ, η ranging from −1 to 1
- **Q.** Define *Jacobian*.  
  **Ans.** maps natural to global coordinates
- **Q.** Define *Gauss Quadrature*.  
  **Ans.** integration using optimal points and weights
- **Q.** Define *Two-point Rule*.  
  **Ans.** exact for cubic polynomials
- **Q.** Define *Reduced Integration*.  
  **Ans.** fewer points to avoid locking
- **Q.** Define *Completeness*.  
  **Ans.** rigid body motion and constant strain represented
- **Q.** Define *Compatibility*.  
  **Ans.** displacements continuous across elements
- **Q.** Define *Patch Test*.  
  **Ans.** checks convergence of element formulation
- **Q.** Define *Discretisation Error*.  
  **Ans.** error from finite element approximation
- **Q.** Define *Stress Smoothing*.  
  **Ans.** averaging stresses at nodes
- **Q.** Define *Adaptive Meshing*.  
  **Ans.** refining mesh where error is high

### Long answer (7 marks)

- **Q.** Explain *Isoparametric Elements* in detail with a neat diagram.  
  **Key points:** Same functions describe geometry and displacement. Isoparametric Element — geometry and field use same shape functions; Natural Coordinates — ξ, η ranging from −1 to 1; Jacobian — maps natural to global coordinates.
- **Q.** Explain *Numerical Integration* in detail with a neat diagram.  
  **Key points:** Gauss quadrature evaluates element integrals. Gauss Quadrature — integration using optimal points and weights; Two-point Rule — exact for cubic polynomials; Reduced Integration — fewer points to avoid locking.
- **Q.** Explain *Convergence Requirements* in detail with a neat diagram.  
  **Key points:** Elements must satisfy criteria. Completeness — rigid body motion and constant strain represented; Compatibility — displacements continuous across elements; Patch Test — checks convergence of element formulation.
- **Q.** Explain *Error Estimation* in detail with a neat diagram.  
  **Key points:** Results must be checked. Discretisation Error — error from finite element approximation; Stress Smoothing — averaging stresses at nodes; Adaptive Meshing — refining mesh where error is high.

## Unit 5: Applications

### Short answer (2-3 marks)

- **Q.** Define *Thermal Conductivity Matrix*.  
  **Ans.** analogous to stiffness matrix
- **Q.** Define *1D Heat Conduction*.  
  **Ans.** element matrix kA/L
- **Q.** Define *Convection Boundary*.  
  **Ans.** adds terms to matrix and load
- **Q.** Define *Mass Matrix*.  
  **Ans.** consistent or lumped
- **Q.** Define *Eigenvalue Analysis*.  
  **Ans.** [K − ω²M]{u} = 0
- **Q.** Define *Mode Shapes*.  
  **Ans.** deformation patterns at natural frequencies
- **Q.** Define *Potential Flow*.  
  **Ans.** Laplace equation solved by FEM
- **Q.** Define *Torsion Problem*.  
  **Ans.** Prandtl stress function
- **Q.** Define *Field Problem*.  
  **Ans.** governed by Poisson-type equations
- **Q.** Define *ANSYS*.  
  **Ans.** general-purpose FEA software
- **Q.** Define *Pre-processing*.  
  **Ans.** geometry, meshing and boundary conditions
- **Q.** Define *Post-processing*.  
  **Ans.** viewing stresses and displacements

### Long answer (7 marks)

- **Q.** Explain *Heat Transfer Analysis* in detail with a neat diagram.  
  **Key points:** FEM solves conduction problems. Thermal Conductivity Matrix — analogous to stiffness matrix; 1D Heat Conduction — element matrix kA/L; Convection Boundary — adds terms to matrix and load.
- **Q.** Explain *Dynamic Analysis* in detail with a neat diagram.  
  **Key points:** FEM finds natural frequencies. Mass Matrix — consistent or lumped; Eigenvalue Analysis — [K − ω²M]{u} = 0; Mode Shapes — deformation patterns at natural frequencies.
- **Q.** Explain *Fluid Flow & Torsion* in detail with a neat diagram.  
  **Key points:** Field problems share FE formulation. Potential Flow — Laplace equation solved by FEM; Torsion Problem — Prandtl stress function; Field Problem — governed by Poisson-type equations.
- **Q.** Explain *FEA Software* in detail with a neat diagram.  
  **Key points:** Commercial tools automate FEM. ANSYS — general-purpose FEA software; Pre-processing — geometry, meshing and boundary conditions; Post-processing — viewing stresses and displacements.

