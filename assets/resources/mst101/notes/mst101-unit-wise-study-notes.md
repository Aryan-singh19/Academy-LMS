# MST-101 Advanced Structural Analysis — Unit-wise Study Notes

> Matrix methods, direct stiffness method for trusses, beams, frames and grids, non-linear and stability analysis.

## Unit 1: Matrix Methods Fundamentals

### Flexibility & Stiffness Concepts

Two complementary matrix approaches.

- **Flexibility Coefficient:** displacement due to unit force
- **Stiffness Coefficient:** force due to unit displacement
- **Relation:** stiffness matrix is inverse of flexibility matrix

### Degrees of Freedom

Unknown displacements define the problem.

- **Kinematic Indeterminacy:** number of unknown joint displacements
- **Static Indeterminacy:** number of redundant forces
- **Restrained DOF:** displacement known at supports

### Coordinate Systems

Local and global coordinates.

- **Local Coordinates:** along member axes
- **Global Coordinates:** structure reference axes
- **Transformation Matrix:** [T] relating local and global

### Energy Principles

Matrix methods rest on energy theorems.

- **Principle of Virtual Work:** basis of stiffness formulation
- **Castigliano's Theorem:** derivative of strain energy
- **Minimum Potential Energy:** equilibrium condition

## Unit 2: Direct Stiffness Method

### Truss Element

Axial member stiffness.

- **Truss Element Stiffness:** (AE/L)[1 −1; −1 1] in local axes
- **Global Truss Matrix:** transformed with direction cosines
- **Member Force:** from nodal displacements

### Beam Element

Bending member stiffness.

- **Beam Stiffness Matrix:** 4×4 with EI/L³ terms
- **Fixed End Actions:** equivalent nodal loads
- **Member End Moments:** from displacements and fixed-end actions

### Assembly & Boundary Conditions

Global system assembly.

- **Assembly:** adding element matrices to global matrix
- **Boundary Condition Imposition:** removing restrained DOF
- **Banded Matrix:** efficient storage

### Solution & Post-processing

Solving for displacements and forces.

- **Gaussian Elimination:** solves [K]{D} = {P}
- **Support Reactions:** from restrained equations
- **Member Forces:** recovered element by element

## Unit 3: Frames & Grids

### Plane Frames

Combined axial and bending.

- **Plane Frame Element:** 6×6 stiffness matrix
- **Axial-flexural Coupling:** through transformation
- **Sway Frames:** lateral DOF included

### Space Frames

Three-dimensional frames.

- **Space Frame Element:** 12×12 stiffness matrix
- **Torsional Stiffness:** GJ/L
- **Member Orientation:** defined by reference vector

### Grids

Floor systems under transverse loads.

- **Grid Element:** bending and torsion DOF
- **Grillage Analysis:** bridge deck modelling
- **Torsion in Grids:** significant in grid behaviour

### Special Effects

Additional loading effects.

- **Temperature Loads:** equivalent nodal forces
- **Support Settlement:** prescribed displacement
- **Elastic Supports:** spring stiffness added to diagonal

## Unit 4: Non-linear Analysis

### Sources of Non-linearity

Structures may behave non-linearly.

- **Geometric Non-linearity:** large displacements
- **Material Non-linearity:** plasticity
- **P-Delta Effect:** secondary moments from axial load and sway

### Geometric Stiffness

Axial force changes stiffness.

- **Geometric Stiffness Matrix:** depends on axial force
- **Second-order Analysis:** includes deformed geometry
- **Newton-Raphson Iteration:** solves non-linear equations

### Material Non-linearity

Plastic behaviour.

- **Plastic Hinge Analysis:** hinges form at Mp
- **Pushover Analysis:** incremental lateral load to collapse
- **Incremental-iterative Solution:** load steps with iterations

### Collapse Analysis

Ultimate capacity.

- **Collapse Load:** load causing mechanism
- **Load Factor:** collapse load / working load
- **Shakedown:** repeated loading stability

## Unit 5: Stability & Dynamic Analysis

### Elastic Stability

Buckling of structures.

- **Eigenvalue Buckling:** det([K] + λ[Kg]) = 0
- **Critical Load Factor:** lowest eigenvalue
- **Buckling Mode:** eigenvector shape

### Frame Stability

Buckling of frames.

- **Effective Length Factor:** from stability analysis
- **Sway Buckling:** frames without bracing
- **Non-sway Buckling:** braced frames

### Structural Dynamics Matrices

Mass and stiffness for vibrations.

- **Consistent Mass Matrix:** derived from shape functions
- **Lumped Mass Matrix:** masses at nodes
- **Eigenvalue Problem:** [K − ω²M]{φ} = 0

### Computer Implementation

Software practice.

- **Program Flow:** input, assembly, solution, output
- **Bandwidth Minimisation:** node renumbering
- **Commercial Software:** STAAD.Pro, SAP2000, ETABS

## Standard Textbooks

- *Matrix Analysis of Framed Structures* — Weaver & Gere
- *Matrix Methods of Structural Analysis* — P. N. Godbole et al.
- *Advanced Structural Analysis* — Devdas Menon

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
