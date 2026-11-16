# ME-504(C) Finite Element Method — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: ME Sem 5: ME-504(C) · M.Tech Structural Sem 2: MST-202.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Finite Element Method. Explain its role in Basics of FEM with a suitable example or diagram. **[7]**

(b) Explain Steps in FEM in detail. Differentiate between Discretisation and Assembly. **[7]**

**Q2.** *(Unit 2)*

(a) Define Transformation Matrix. Explain its role in Truss Analysis with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Beam Element. Bring out the significance of Beam Element DOF and Hermite Shape Functions. **[7]**

**Q3.** *(Unit 3)*

(a) Define Axisymmetric Element. Explain its role in Quadrilateral & Higher Elements with a suitable example or diagram. **[7]**

(b) Explain Mesh Generation in detail. Differentiate between Mesh and Aspect Ratio. **[7]**

**Q4.** *(Unit 4)*

(a) Define Discretisation Error. Explain its role in Error Estimation with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Isoparametric Elements. Bring out the significance of Isoparametric Element and Natural Coordinates. **[7]**

**Q5.** *(Unit 5)*

(a) Define 1D Heat Conduction. Explain its role in Heat Transfer Analysis with a suitable example or diagram. **[7]**

(b) Explain Dynamic Analysis in detail. Differentiate between Mass Matrix and Eigenvalue Analysis. **[7]**

**Q6.** *(Unit 1)*

(a) Define Collocation Method. Explain its role in Weighted Residual Methods with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Basics of FEM. Bring out the significance of Finite Element Method and Element. **[7]**

**Q7.** *(Unit 3)*

(a) Define Plane Stress. Explain its role in Plane Stress & Plane Strain with a suitable example or diagram. **[7]**

(b) Explain CST Element in detail. Differentiate between CST and B Matrix. **[7]**

**Q8.** *(Unit 5)*

(a) Define Eigenvalue Analysis. Explain its role in Dynamic Analysis with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Fluid Flow & Torsion. Bring out the significance of Potential Flow and Torsion Problem. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Assembly. Explain its role in Steps in FEM with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Variational Methods. Bring out the significance of Rayleigh-Ritz Method and Total Potential Energy. **[7]**

**Q2.** *(Unit 2)*

(a) Define Beam Stiffness. Explain its role in Beam Element with a suitable example or diagram. **[7]**

(b) Explain Quadratic Elements in detail. Differentiate between Quadratic Element and Convergence. **[7]**

**Q3.** *(Unit 3)*

(a) Define Mesh. Explain its role in Mesh Generation with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Plane Stress & Plane Strain. Bring out the significance of Plane Stress and Plane Strain. **[7]**

**Q4.** *(Unit 4)*

(a) Define Natural Coordinates. Explain its role in Isoparametric Elements with a suitable example or diagram. **[7]**

(b) Explain Numerical Integration in detail. Differentiate between Gauss Quadrature and Two-point Rule. **[7]**

**Q5.** *(Unit 5)*

(a) Define Mode Shapes. Explain its role in Dynamic Analysis with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Fluid Flow & Torsion. Bring out the significance of Potential Flow and Torsion Problem. **[7]**

**Q6.** *(Unit 2)*

(a) Define Bar Element Stiffness. Explain its role in Bar Element with a suitable example or diagram. **[7]**

(b) Explain Truss Analysis in detail. Differentiate between Truss Element and Transformation Matrix. **[7]**

**Q7.** *(Unit 4)*

(a) Define Two-point Rule. Explain its role in Numerical Integration with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Convergence Requirements. Bring out the significance of Completeness and Compatibility. **[7]**

**Q8.** *(Unit 1)*

(a) Define Principle of Minimum Potential Energy. Explain its role in Variational Methods with a suitable example or diagram. **[7]**

(b) Explain Weighted Residual Methods in detail. Differentiate between Galerkin Method and Residual. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Finite Element Method: numerical technique solving PDEs by discretisation
- **Q1(b):** Discretisation: dividing domain into elements | Assembly: combining element matrices into global matrix | Boundary Conditions: known displacements or forces applied
- **Q2(a):** Transformation Matrix: converts local to global coordinates
- **Q2(b):** Beam Element DOF: transverse displacement and rotation at each node | Hermite Shape Functions: cubic functions for beam elements | Beam Stiffness: depends on EI/L³
- **Q3(a):** Axisymmetric Element: for bodies of revolution
- **Q3(b):** Mesh: arrangement of elements | Aspect Ratio: longest to shortest side; should be near 1 | Mesh Refinement: finer elements at stress concentrations
- **Q4(a):** Discretisation Error: error from finite element approximation
- **Q4(b):** Isoparametric Element: geometry and field use same shape functions | Natural Coordinates: ξ, η ranging from −1 to 1 | Jacobian: maps natural to global coordinates
- **Q5(a):** 1D Heat Conduction: element matrix kA/L
- **Q5(b):** Mass Matrix: consistent or lumped | Eigenvalue Analysis: [K − ω²M]{u} = 0 | Mode Shapes: deformation patterns at natural frequencies
- **Q6(a):** Collocation Method: residual zero at chosen points
- **Q6(b):** Finite Element Method: numerical technique solving PDEs by discretisation | Element: small subdomain with nodes | Node: point where unknowns are computed
- **Q7(a):** Plane Stress: thin plates with σz = 0
- **Q7(b):** CST: 3-node triangle with constant strain | B Matrix: strain-displacement matrix | Element Stiffness: [k] = t·A·[B]^T[D][B]
- **Q8(a):** Eigenvalue Analysis: [K − ω²M]{u} = 0
- **Q8(b):** Potential Flow: Laplace equation solved by FEM | Torsion Problem: Prandtl stress function | Field Problem: governed by Poisson-type equations

## Recommended Books

- *An Introduction to the Finite Element Method* — J. N. Reddy
- *Introduction to Finite Elements in Engineering* — Chandrupatla & Belegundu
- *The Finite Element Method* — O. C. Zienkiewicz
