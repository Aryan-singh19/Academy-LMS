# MST-101 Advanced Structural Analysis — Question Bank with Answer Hints

## Unit 1: Matrix Methods Fundamentals

### Short answer (2-3 marks)

- **Q.** Define *Flexibility Coefficient*.  
  **Ans.** displacement due to unit force
- **Q.** Define *Stiffness Coefficient*.  
  **Ans.** force due to unit displacement
- **Q.** Define *Relation*.  
  **Ans.** stiffness matrix is inverse of flexibility matrix
- **Q.** Define *Kinematic Indeterminacy*.  
  **Ans.** number of unknown joint displacements
- **Q.** Define *Static Indeterminacy*.  
  **Ans.** number of redundant forces
- **Q.** Define *Restrained DOF*.  
  **Ans.** displacement known at supports
- **Q.** Define *Local Coordinates*.  
  **Ans.** along member axes
- **Q.** Define *Global Coordinates*.  
  **Ans.** structure reference axes
- **Q.** Define *Transformation Matrix*.  
  **Ans.** [T] relating local and global
- **Q.** Define *Principle of Virtual Work*.  
  **Ans.** basis of stiffness formulation
- **Q.** Define *Castigliano's Theorem*.  
  **Ans.** derivative of strain energy
- **Q.** Define *Minimum Potential Energy*.  
  **Ans.** equilibrium condition

### Long answer (7 marks)

- **Q.** Explain *Flexibility & Stiffness Concepts* in detail with a neat diagram.  
  **Key points:** Two complementary matrix approaches. Flexibility Coefficient — displacement due to unit force; Stiffness Coefficient — force due to unit displacement; Relation — stiffness matrix is inverse of flexibility matrix.
- **Q.** Explain *Degrees of Freedom* in detail with a neat diagram.  
  **Key points:** Unknown displacements define the problem. Kinematic Indeterminacy — number of unknown joint displacements; Static Indeterminacy — number of redundant forces; Restrained DOF — displacement known at supports.
- **Q.** Explain *Coordinate Systems* in detail with a neat diagram.  
  **Key points:** Local and global coordinates. Local Coordinates — along member axes; Global Coordinates — structure reference axes; Transformation Matrix — [T] relating local and global.
- **Q.** Explain *Energy Principles* in detail with a neat diagram.  
  **Key points:** Matrix methods rest on energy theorems. Principle of Virtual Work — basis of stiffness formulation; Castigliano's Theorem — derivative of strain energy; Minimum Potential Energy — equilibrium condition.

## Unit 2: Direct Stiffness Method

### Short answer (2-3 marks)

- **Q.** Define *Truss Element Stiffness*.  
  **Ans.** (AE/L)[1 −1; −1 1] in local axes
- **Q.** Define *Global Truss Matrix*.  
  **Ans.** transformed with direction cosines
- **Q.** Define *Member Force*.  
  **Ans.** from nodal displacements
- **Q.** Define *Beam Stiffness Matrix*.  
  **Ans.** 4×4 with EI/L³ terms
- **Q.** Define *Fixed End Actions*.  
  **Ans.** equivalent nodal loads
- **Q.** Define *Member End Moments*.  
  **Ans.** from displacements and fixed-end actions
- **Q.** Define *Assembly*.  
  **Ans.** adding element matrices to global matrix
- **Q.** Define *Boundary Condition Imposition*.  
  **Ans.** removing restrained DOF
- **Q.** Define *Banded Matrix*.  
  **Ans.** efficient storage
- **Q.** Define *Gaussian Elimination*.  
  **Ans.** solves [K]{D} = {P}
- **Q.** Define *Support Reactions*.  
  **Ans.** from restrained equations
- **Q.** Define *Member Forces*.  
  **Ans.** recovered element by element

### Long answer (7 marks)

- **Q.** Explain *Truss Element* in detail with a neat diagram.  
  **Key points:** Axial member stiffness. Truss Element Stiffness — (AE/L)[1 −1; −1 1] in local axes; Global Truss Matrix — transformed with direction cosines; Member Force — from nodal displacements.
- **Q.** Explain *Beam Element* in detail with a neat diagram.  
  **Key points:** Bending member stiffness. Beam Stiffness Matrix — 4×4 with EI/L³ terms; Fixed End Actions — equivalent nodal loads; Member End Moments — from displacements and fixed-end actions.
- **Q.** Explain *Assembly & Boundary Conditions* in detail with a neat diagram.  
  **Key points:** Global system assembly. Assembly — adding element matrices to global matrix; Boundary Condition Imposition — removing restrained DOF; Banded Matrix — efficient storage.
- **Q.** Explain *Solution & Post-processing* in detail with a neat diagram.  
  **Key points:** Solving for displacements and forces. Gaussian Elimination — solves [K]{D} = {P}; Support Reactions — from restrained equations; Member Forces — recovered element by element.

## Unit 3: Frames & Grids

### Short answer (2-3 marks)

- **Q.** Define *Plane Frame Element*.  
  **Ans.** 6×6 stiffness matrix
- **Q.** Define *Axial-flexural Coupling*.  
  **Ans.** through transformation
- **Q.** Define *Sway Frames*.  
  **Ans.** lateral DOF included
- **Q.** Define *Space Frame Element*.  
  **Ans.** 12×12 stiffness matrix
- **Q.** Define *Torsional Stiffness*.  
  **Ans.** GJ/L
- **Q.** Define *Member Orientation*.  
  **Ans.** defined by reference vector
- **Q.** Define *Grid Element*.  
  **Ans.** bending and torsion DOF
- **Q.** Define *Grillage Analysis*.  
  **Ans.** bridge deck modelling
- **Q.** Define *Torsion in Grids*.  
  **Ans.** significant in grid behaviour
- **Q.** Define *Temperature Loads*.  
  **Ans.** equivalent nodal forces
- **Q.** Define *Support Settlement*.  
  **Ans.** prescribed displacement
- **Q.** Define *Elastic Supports*.  
  **Ans.** spring stiffness added to diagonal

### Long answer (7 marks)

- **Q.** Explain *Plane Frames* in detail with a neat diagram.  
  **Key points:** Combined axial and bending. Plane Frame Element — 6×6 stiffness matrix; Axial-flexural Coupling — through transformation; Sway Frames — lateral DOF included.
- **Q.** Explain *Space Frames* in detail with a neat diagram.  
  **Key points:** Three-dimensional frames. Space Frame Element — 12×12 stiffness matrix; Torsional Stiffness — GJ/L; Member Orientation — defined by reference vector.
- **Q.** Explain *Grids* in detail with a neat diagram.  
  **Key points:** Floor systems under transverse loads. Grid Element — bending and torsion DOF; Grillage Analysis — bridge deck modelling; Torsion in Grids — significant in grid behaviour.
- **Q.** Explain *Special Effects* in detail with a neat diagram.  
  **Key points:** Additional loading effects. Temperature Loads — equivalent nodal forces; Support Settlement — prescribed displacement; Elastic Supports — spring stiffness added to diagonal.

## Unit 4: Non-linear Analysis

### Short answer (2-3 marks)

- **Q.** Define *Geometric Non-linearity*.  
  **Ans.** large displacements
- **Q.** Define *Material Non-linearity*.  
  **Ans.** plasticity
- **Q.** Define *P-Delta Effect*.  
  **Ans.** secondary moments from axial load and sway
- **Q.** Define *Geometric Stiffness Matrix*.  
  **Ans.** depends on axial force
- **Q.** Define *Second-order Analysis*.  
  **Ans.** includes deformed geometry
- **Q.** Define *Newton-Raphson Iteration*.  
  **Ans.** solves non-linear equations
- **Q.** Define *Plastic Hinge Analysis*.  
  **Ans.** hinges form at Mp
- **Q.** Define *Pushover Analysis*.  
  **Ans.** incremental lateral load to collapse
- **Q.** Define *Incremental-iterative Solution*.  
  **Ans.** load steps with iterations
- **Q.** Define *Collapse Load*.  
  **Ans.** load causing mechanism
- **Q.** Define *Load Factor*.  
  **Ans.** collapse load / working load
- **Q.** Define *Shakedown*.  
  **Ans.** repeated loading stability

### Long answer (7 marks)

- **Q.** Explain *Sources of Non-linearity* in detail with a neat diagram.  
  **Key points:** Structures may behave non-linearly. Geometric Non-linearity — large displacements; Material Non-linearity — plasticity; P-Delta Effect — secondary moments from axial load and sway.
- **Q.** Explain *Geometric Stiffness* in detail with a neat diagram.  
  **Key points:** Axial force changes stiffness. Geometric Stiffness Matrix — depends on axial force; Second-order Analysis — includes deformed geometry; Newton-Raphson Iteration — solves non-linear equations.
- **Q.** Explain *Material Non-linearity* in detail with a neat diagram.  
  **Key points:** Plastic behaviour. Plastic Hinge Analysis — hinges form at Mp; Pushover Analysis — incremental lateral load to collapse; Incremental-iterative Solution — load steps with iterations.
- **Q.** Explain *Collapse Analysis* in detail with a neat diagram.  
  **Key points:** Ultimate capacity. Collapse Load — load causing mechanism; Load Factor — collapse load / working load; Shakedown — repeated loading stability.

## Unit 5: Stability & Dynamic Analysis

### Short answer (2-3 marks)

- **Q.** Define *Eigenvalue Buckling*.  
  **Ans.** det([K] + λ[Kg]) = 0
- **Q.** Define *Critical Load Factor*.  
  **Ans.** lowest eigenvalue
- **Q.** Define *Buckling Mode*.  
  **Ans.** eigenvector shape
- **Q.** Define *Effective Length Factor*.  
  **Ans.** from stability analysis
- **Q.** Define *Sway Buckling*.  
  **Ans.** frames without bracing
- **Q.** Define *Non-sway Buckling*.  
  **Ans.** braced frames
- **Q.** Define *Consistent Mass Matrix*.  
  **Ans.** derived from shape functions
- **Q.** Define *Lumped Mass Matrix*.  
  **Ans.** masses at nodes
- **Q.** Define *Eigenvalue Problem*.  
  **Ans.** [K − ω²M]{φ} = 0
- **Q.** Define *Program Flow*.  
  **Ans.** input, assembly, solution, output
- **Q.** Define *Bandwidth Minimisation*.  
  **Ans.** node renumbering
- **Q.** Define *Commercial Software*.  
  **Ans.** STAAD.Pro, SAP2000, ETABS

### Long answer (7 marks)

- **Q.** Explain *Elastic Stability* in detail with a neat diagram.  
  **Key points:** Buckling of structures. Eigenvalue Buckling — det([K] + λ[Kg]) = 0; Critical Load Factor — lowest eigenvalue; Buckling Mode — eigenvector shape.
- **Q.** Explain *Frame Stability* in detail with a neat diagram.  
  **Key points:** Buckling of frames. Effective Length Factor — from stability analysis; Sway Buckling — frames without bracing; Non-sway Buckling — braced frames.
- **Q.** Explain *Structural Dynamics Matrices* in detail with a neat diagram.  
  **Key points:** Mass and stiffness for vibrations. Consistent Mass Matrix — derived from shape functions; Lumped Mass Matrix — masses at nodes; Eigenvalue Problem — [K − ω²M]{φ} = 0.
- **Q.** Explain *Computer Implementation* in detail with a neat diagram.  
  **Key points:** Software practice. Program Flow — input, assembly, solution, output; Bandwidth Minimisation — node renumbering; Commercial Software — STAAD.Pro, SAP2000, ETABS.

