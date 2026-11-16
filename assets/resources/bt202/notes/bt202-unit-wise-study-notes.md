# BT-202 Mathematics-II — Unit-wise Study Notes

> Ordinary differential equations, partial differential equations, complex variables and vector calculus.

## Unit 1: First Order ODEs

### Exact Differential Equations

Exact equations come from a total differential.

- **Exactness Condition:** ∂M/∂y = ∂N/∂x
- **Integrating Factor:** multiplier making equation exact
- **Solution:** ∫M dx + ∫(terms of N without x) dy = c

### Linear & Bernoulli Equations

Linear first-order equations have closed forms.

- **Linear Equation:** dy/dx + Py = Q
- **Integrating Factor of Linear:** e^(∫P dx)
- **Bernoulli Equation:** dy/dx + Py = Qy^n

### Equations of Higher Degree

Equations solvable for p, x or y.

- **Clairaut's Equation:** y = px + f(p)
- **Singular Solution:** solution not obtained from general solution
- **Solvable for p:** factorise in p = dy/dx

### Applications of First Order ODEs

ODEs model growth, cooling and circuits.

- **Newton's Law of Cooling:** dT/dt = −k(T − Ts)
- **Exponential Growth:** dN/dt = kN
- **RL Circuit:** L di/dt + Ri = E

## Unit 2: Higher Order Linear ODEs

### Homogeneous Equations

Solution uses the auxiliary equation.

- **Auxiliary Equation:** replace D by m and solve
- **Distinct Roots:** y = c1e^(m1x) + c2e^(m2x)
- **Complex Roots:** y = e^(αx)(c1 cos βx + c2 sin βx)

### Particular Integral

PI handles the non-homogeneous term.

- **Complete Solution:** CF + PI
- **PI for e^(ax):** e^(ax)/f(a) if f(a) ≠ 0
- **PI for sin ax:** replace D² by −a²

### Variation of Parameters

General method for PI.

- **Variation of Parameters:** uses Wronskian to find PI
- **Wronskian:** W = y1y2' − y2y1'
- **Method of Undetermined Coefficients:** guess PI form

### Cauchy-Euler Equations

Variable coefficient equations reduce to constant.

- **Cauchy-Euler Equation:** x²y'' + axy' + by = f(x)
- **Substitution:** x = e^z converts to constant coefficients
- **Legendre's Equation:** (ax + b) form generalisation

## Unit 3: Partial Differential Equations

### Formation of PDEs

PDEs arise by eliminating constants or functions.

- **PDE:** equation with partial derivatives
- **Order:** highest derivative order
- **Eliminating Arbitrary Functions:** forms PDE from relation

### Lagrange's Linear Equation

First order linear PDEs.

- **Lagrange's Equation:** Pp + Qq = R
- **Subsidiary Equations:** dx/P = dy/Q = dz/R
- **General Solution:** φ(u, v) = 0

### Non-linear First Order PDEs

Standard forms have known solutions.

- **Charpit's Method:** general method for non-linear PDEs
- **Complete Integral:** solution with arbitrary constants
- **Standard Form f(p,q):** 0 = z = ax + by + c

### Method of Separation of Variables

PDEs are separated into ODEs.

- **Separation of Variables:** assume u = X(x)T(t)
- **Heat Equation:** ∂u/∂t = c²∂²u/∂x²
- **Wave Equation:** ∂²u/∂t² = c²∂²u/∂x²

## Unit 4: Complex Variables

### Analytic Functions

Analytic functions are complex differentiable.

- **Analytic Function:** differentiable in a neighbourhood
- **Cauchy-Riemann Equations:** ux = vy, uy = −vx
- **Harmonic Function:** satisfies Laplace's equation

### Complex Integration

Integrals in the complex plane.

- **Cauchy's Integral Theorem:** integral of analytic f over closed curve is zero
- **Cauchy's Integral Formula:** f(a) = (1/2πi)∮ f(z)/(z − a) dz
- **Contour:** path of integration

### Series & Singularities

Laurent series reveal singularities.

- **Taylor Series (complex):** expansion around analytic point
- **Laurent Series:** includes negative powers
- **Pole:** singularity of finite order

### Residue Theorem

Residues evaluate integrals.

- **Residue:** coefficient of 1/(z − a) in Laurent series
- **Residue Theorem:** ∮ f dz = 2πi × sum of residues
- **Real Integral Evaluation:** using contour integration

## Unit 5: Vector Calculus

### Gradient, Divergence & Curl

Differential operators on fields.

- **Gradient:** ∇φ, normal to level surface
- **Divergence:** ∇·F, measures outflow
- **Curl:** ∇ × F, measures rotation

### Directional Derivative

Rate of change along a direction.

- **Directional Derivative:** ∇φ·â
- **Maximum Directional Derivative:** magnitude of gradient
- **Solenoidal Field:** divergence zero

### Line & Surface Integrals

Integrals along curves and surfaces.

- **Line Integral:** ∫ F·dr
- **Work Done:** line integral of force
- **Conservative Field:** curl F = 0

### Integral Theorems

Theorems relate integrals of different dimensions.

- **Green's Theorem:** relates line integral to double integral in plane
- **Stokes' Theorem:** ∮ F·dr = ∫∫ (curl F)·n dS
- **Gauss Divergence Theorem:** ∫∫ F·n dS = ∫∫∫ div F dV

## Standard Textbooks

- *Higher Engineering Mathematics* — B. S. Grewal
- *Advanced Engineering Mathematics* — Erwin Kreyszig
- *Complex Variables and Applications* — Churchill & Brown

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
