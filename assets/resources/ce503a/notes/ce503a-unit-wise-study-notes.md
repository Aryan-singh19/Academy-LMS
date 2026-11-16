# CE-503(A) Structural Analysis-II — Unit-wise Study Notes

> Slope deflection, moment distribution, Kani's method, column analogy, matrix methods and plastic analysis.

## Unit 1: Slope Deflection Method

### Basics of Slope Deflection

Joint rotations are unknowns.

- **Slope Deflection Equation:** M = Mf + (2EI/L)(2θa + θb − 3Δ/L)
- **Fixed End Moment:** moment in fully fixed beam
- **Joint Equilibrium:** sum of moments at joint is zero

### Continuous Beams

Slope deflection solves continuous beams.

- **Continuous Beam:** beam over more than two supports
- **Support Settlement:** adds sway term in equations
- **Unknown Rotations:** solved from joint equations

### Portal Frames without Sway

Symmetric frames have no sway.

- **Non-sway Frame:** no lateral displacement
- **Symmetry:** reduces unknowns
- **Frame Joint:** rigid connection

### Frames with Sway

Unsymmetric frames sway sideways.

- **Sway:** lateral displacement of frame
- **Shear Equation:** additional equation for sway
- **Sidesway Correction:** accounts for lateral movement

## Unit 2: Moment Distribution Method

### Concepts of Moment Distribution

Iterative balancing of moments.

- **Stiffness Factor:** 4EI/L for far end fixed
- **Distribution Factor:** member stiffness / total joint stiffness
- **Carry Over Factor:** 1/2 for far end fixed

### Continuous Beams by MDM

Hardy Cross method distributes unbalanced moments.

- **Hardy Cross Method:** moment distribution method
- **Balancing:** distributing unbalanced moments
- **Modified Stiffness:** 3EI/L for far end pinned

### Frames by MDM

Non-sway and sway frames.

- **Sway Correction:** separate analysis for sway
- **Shear Condition:** horizontal equilibrium of frame
- **Final Moments:** sum of non-sway and sway moments

### Kani's Method

Rotation contributions are iterated.

- **Kani's Method:** iterative method using rotation factors
- **Rotation Factor:** −1/2 × distribution factor
- **Displacement Factor:** for sway in Kani's method

## Unit 3: Column Analogy & Approximate Methods

### Column Analogy

Analogy treats a fixed structure as a column.

- **Column Analogy:** analogous column loaded by M/EI
- **Elastic Centre:** centroid of analogous column
- **Indeterminate Moment:** found like column stress

### Approximate Methods for Frames

Quick methods for preliminary design.

- **Portal Method:** assumes inflection points at mid-height
- **Cantilever Method:** axial forces proportional to distance from centroid
- **Substitute Frame:** analyses a floor separately

### Analysis for Vertical Loads

Building frames under gravity.

- **Two-cycle Method:** approximate moment distribution
- **Load Patterns:** alternate span loading for maximum moments
- **Inflection Point:** point of zero moment

### Influence Lines for Indeterminate Beams

Müller-Breslau for indeterminate structures.

- **Müller-Breslau Principle:** IL equals deflected shape
- **Qualitative IL:** sketches for loading patterns
- **Propped Cantilever IL:** curved influence line

## Unit 4: Matrix Methods

### Flexibility Method

Forces are unknowns.

- **Flexibility Matrix:** displacements due to unit forces
- **Compatibility Equation:** [F]{X} = {Δ}
- **Redundant:** chosen extra unknown force

### Stiffness Method

Displacements are unknowns.

- **Stiffness Matrix:** forces due to unit displacements
- **Equilibrium Equation:** [K]{D} = {P}
- **Direct Stiffness Method:** assembles global stiffness matrix

### Member Stiffness Matrices

Elements have standard matrices.

- **Beam Element Matrix:** 4×4 relating end forces and displacements
- **Truss Element Matrix:** axial stiffness AE/L
- **Transformation Matrix:** local to global coordinates

### Computer Analysis

Software implements matrix methods.

- **STAAD Pro:** structural analysis software
- **ETABS:** building analysis software
- **Bandwidth:** sparsity reduces computation

## Unit 5: Plastic Analysis

### Plastic Theory

Steel structures redistribute moments.

- **Plastic Hinge:** section yielding fully
- **Plastic Moment:** Mp = fy × Zp
- **Shape Factor:** Zp/Ze; 1.5 for rectangle

### Collapse Mechanisms

Structures fail by mechanisms.

- **Beam Mechanism:** hinges in a single span
- **Sway Mechanism:** hinges in columns
- **Combined Mechanism:** beam and sway together

### Methods of Plastic Analysis

Collapse load is found by theorems.

- **Static Theorem:** lower bound on collapse load
- **Kinematic Theorem:** upper bound on collapse load
- **Uniqueness Theorem:** satisfies equilibrium, mechanism and yield

### Load Factor

Plastic design uses load factors.

- **Load Factor:** collapse load / working load
- **Plastic Design:** design based on collapse
- **Moment Redistribution:** moments shift as hinges form

## Standard Textbooks

- *Structural Analysis Vol. 2* — S. S. Bhavikatti
- *Indeterminate Structural Analysis* — C. K. Wang
- *Matrix Analysis of Framed Structures* — Weaver & Gere

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
