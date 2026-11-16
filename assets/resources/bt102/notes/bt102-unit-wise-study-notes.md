# BT-102 Mathematics-I — Unit-wise Study Notes

> Calculus, sequences and series, matrices, multivariable calculus and multiple integrals.

## Unit 1: Calculus

### Rolle's & Mean Value Theorems

Mean value theorems link function values and derivatives.

- **Rolle's Theorem:** f(a) = f(b) implies f'(c) = 0 for some c in (a,b)
- **Lagrange MVT:** f'(c) = (f(b) − f(a))/(b − a)
- **Cauchy MVT:** generalisation using two functions

### Taylor & Maclaurin Series

Functions are expanded as power series.

- **Taylor Series:** f(a + h) = f(a) + hf'(a) + h²f''(a)/2! + …
- **Maclaurin Series:** Taylor series about 0
- **Series of e^x:** 1 + x + x²/2! + x³/3! + …

### Indeterminate Forms

Limits of forms like 0/0 are evaluated.

- **L'Hospital's Rule:** limit of f/g equals limit of f'/g' for 0/0 or ∞/∞
- **Indeterminate Forms:** 0/0, ∞/∞, 0·∞, ∞ − ∞, 1^∞
- **Logarithmic Method:** handles 1^∞ and 0^0 forms

### Maxima & Minima

Extreme values are found from derivatives.

- **Stationary Point:** f'(x) = 0
- **Second Derivative Test:** f''(x) < 0 gives maximum
- **Point of Inflection:** curvature changes sign

## Unit 2: Sequences & Series

### Sequences

Sequences are ordered lists with limits.

- **Convergent Sequence:** approaches a finite limit
- **Monotonic Sequence:** always increasing or always decreasing
- **Bounded Sequence:** all terms lie within a fixed range

### Tests for Convergence

Tests decide whether series converge.

- **Comparison Test:** compare with a known series
- **D'Alembert's Ratio Test:** converges if limit of a(n+1)/a(n) < 1
- **Cauchy's Root Test:** converges if nth root of a(n) tends to below 1

### p-series & Alternating Series

Standard series aid testing.

- **p-series:** Σ 1/n^p converges for p > 1
- **Leibniz Test:** alternating series converges if terms decrease to zero
- **Absolute Convergence:** convergence of series of absolute values

### Fourier Series Basics

Periodic functions as sine-cosine sums.

- **Fourier Coefficients:** a0, an and bn computed by integration
- **Half-range Series:** sine or cosine series over half period
- **Even Function Series:** contains only cosine terms

## Unit 3: Matrices

### Rank of a Matrix

Rank measures independent rows.

- **Rank:** order of largest non-zero minor
- **Echelon Form:** row-reduced form revealing rank
- **Normal Form:** [I 0; 0 0] form via elementary operations

### System of Linear Equations

Consistency is decided by ranks.

- **Consistent System:** rank of A equals rank of augmented matrix
- **Unique Solution:** rank equals number of unknowns
- **Homogeneous System:** AX = 0 always has trivial solution

### Eigenvalues & Eigenvectors

Eigen-analysis finds invariant directions.

- **Characteristic Equation:** det(A − λI) = 0
- **Eigenvector:** non-zero X with AX = λX
- **Sum of Eigenvalues:** trace of A

### Cayley-Hamilton & Diagonalisation

Matrices satisfy their characteristic equation.

- **Cayley-Hamilton Theorem:** every square matrix satisfies its characteristic equation
- **Diagonalisation:** P⁻¹AP = D using eigenvectors
- **Inverse by Cayley-Hamilton:** A⁻¹ from the characteristic polynomial

## Unit 4: Multivariable Calculus

### Partial Differentiation

Derivatives with respect to one variable at a time.

- **Partial Derivative:** rate of change keeping other variables constant
- **Euler's Theorem:** x∂u/∂x + y∂u/∂y = nu for homogeneous u
- **Total Derivative:** du = (∂u/∂x)dx + (∂u/∂y)dy

### Jacobians

Jacobians relate variable transformations.

- **Jacobian:** determinant of partial derivatives ∂(u,v)/∂(x,y)
- **Functional Dependence:** Jacobian zero implies dependence
- **Chain Property:** J·J' = 1 for inverse transformations

### Maxima & Minima of Two Variables

Extrema use second partial derivatives.

- **Condition for Extremum:** fx = fy = 0
- **rt − s² Test:** maximum if rt − s² > 0 and r < 0
- **Saddle Point:** rt − s² < 0

### Lagrange Multipliers

Constrained optimisation.

- **Lagrange Multiplier Method:** extremise f subject to g = 0 using F = f + λg
- **Constraint:** condition the variables must satisfy
- **Stationary Conditions:** ∂F/∂x = ∂F/∂y = ∂F/∂λ = 0

## Unit 5: Multiple Integrals

### Double Integrals

Area and volume via double integration.

- **Double Integral:** ∫∫ f(x,y) dx dy over a region
- **Change of Order:** swapping integration order with new limits
- **Area by Double Integral:** ∫∫ dx dy

### Polar Coordinates in Integration

Circular regions use polar form.

- **Polar Element:** dx dy = r dr dθ
- **Change of Variables:** uses Jacobian
- **Area in Polar:** ∫∫ r dr dθ

### Triple Integrals

Volume integration in three dimensions.

- **Triple Integral:** ∫∫∫ f dx dy dz
- **Volume:** ∫∫∫ dV
- **Spherical Coordinates:** dV = r² sin θ dr dθ dφ

### Beta & Gamma Functions

Special functions evaluate integrals.

- **Gamma Function:** Γ(n) = ∫0^∞ e^(−x) x^(n−1) dx
- **Beta Function:** B(m,n) = Γ(m)Γ(n)/Γ(m + n)
- **Γ(1/2):** √π

## Standard Textbooks

- *Higher Engineering Mathematics* — B. S. Grewal
- *Advanced Engineering Mathematics* — Erwin Kreyszig
- *Engineering Mathematics* — H. K. Dass

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
