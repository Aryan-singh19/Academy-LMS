# BT-301 Mathematics-III — Unit-wise Study Notes

> Numerical methods, interpolation, numerical calculus, ODE solvers, transforms and probability for engineers.

## Unit 1: Numerical Solution of Equations

### Bisection & Regula-Falsi Methods

Bracketing methods trap a root between two points with opposite function signs.

- **Bisection Method:** halves the interval [a,b] each step; always converges, but linearly
- **Regula-Falsi:** joins f(a) and f(b) with a chord and uses its x-intercept as the next guess
- **Intermediate Value Theorem:** if f(a)·f(b) < 0 a continuous f has a root in (a,b)

### Newton-Raphson Method

An open method using the tangent line for fast convergence.

- **Newton-Raphson Formula:** x(n+1) = x(n) − f(x(n))/f'(x(n))
- **Quadratic Convergence:** error roughly squares each iteration near the root
- **Failure Case:** method breaks down when f'(x) is zero or near zero

### Solution of Linear Systems

Direct and iterative methods solve AX = B.

- **Gauss Elimination:** reduces the system to upper-triangular form then back-substitutes
- **Gauss-Seidel Method:** iterative method using latest updated values immediately
- **Diagonal Dominance:** each diagonal element's magnitude is at least the sum of the other magnitudes in its row; guarantees iterative convergence

### Errors in Numerical Computation

Every numerical answer carries rounding and truncation error.

- **Absolute Error:** magnitude of (true value − approximate value)
- **Relative Error:** absolute error divided by the true value
- **Truncation Error:** error from cutting off an infinite process such as a series

## Unit 2: Interpolation & Finite Differences

### Finite Difference Operators

Operators relate tabulated values at equal spacing h.

- **Forward Difference:** Δf(x) = f(x+h) − f(x)
- **Backward Difference:** ∇f(x) = f(x) − f(x−h)
- **Shift Operator:** E f(x) = f(x+h), with E = 1 + Δ

### Newton's Interpolation Formulae

Polynomials through equally spaced points estimate intermediate values.

- **Newton Forward Formula:** used to interpolate near the beginning of a table
- **Newton Backward Formula:** used to interpolate near the end of a table
- **Phase Variable u:** (x − x0)/h used inside the formulae

### Lagrange & Divided Differences

Unequally spaced data need different interpolation formulas.

- **Lagrange Interpolation:** weighted sum of y-values using basis polynomials L_i(x)
- **Divided Difference:** [x0,x1] = (y1 − y0)/(x1 − x0), generalised recursively
- **Newton Divided Difference Formula:** interpolation for unequal intervals built from divided differences

### Central Difference Formulae

Central formulas give better accuracy near the middle of a table.

- **Central Difference:** δf(x) = f(x + h/2) − f(x − h/2)
- **Stirling Formula:** average of Gauss forward and backward formulae
- **Bessel Formula:** central formula best when u is near 1/2

## Unit 3: Numerical Differentiation & Integration

### Numerical Differentiation

Derivatives are estimated from interpolating polynomials.

- **Forward Derivative Formula:** dy/dx at x0 ≈ (1/h)(Δy0 − Δ²y0/2 + Δ³y0/3 …)
- **Backward Derivative Formula:** used for derivatives near the end of a table
- **Step Size h:** smaller h lowers truncation error but raises round-off error

### Trapezoidal Rule

Area under a curve approximated by trapezoids.

- **Trapezoidal Rule:** ∫ ≈ (h/2)[y0 + 2(y1 + … + y(n−1)) + yn]
- **Error Order:** global error proportional to h²
- **Applicability:** works for any number of intervals

### Simpson's Rules

Parabolic and cubic fits give higher accuracy.

- **Simpson 1/3 Rule:** (h/3)[y0 + 4(odd ordinates) + 2(even ordinates) + yn]; n must be even
- **Simpson 3/8 Rule:** (3h/8)[y0 + 3y1 + 3y2 + 2y3 + …]; n a multiple of 3
- **Accuracy:** Simpson 1/3 error is of order h⁴

### Gaussian Quadrature

Optimally placed points integrate polynomials exactly with few evaluations.

- **Gauss-Legendre Quadrature:** uses roots of Legendre polynomials on [−1,1]
- **Two-Point Rule:** exact for polynomials up to degree 3
- **Weight Function:** coefficient multiplying each sampled function value

## Unit 4: Numerical Solution of ODEs

### Taylor Series & Picard's Method

Series-based methods approximate the solution of y' = f(x,y).

- **Taylor Series Method:** expands y about x0 using successive derivatives
- **Picard's Method:** successive approximation by integrating y(n+1) = y0 + ∫ f(x, y(n)) dx
- **Initial Value Problem:** ODE with y specified at a starting point x0

### Euler & Modified Euler Methods

Step-by-step methods march along small increments h.

- **Euler Method:** y(n+1) = y(n) + h·f(x(n), y(n))
- **Modified Euler:** averages slopes at both ends of the step for better accuracy
- **Local Error:** Euler error per step is of order h²

### Runge-Kutta Methods

RK methods use weighted slopes inside each step.

- **RK4 Formula:** y(n+1) = y(n) + (k1 + 2k2 + 2k3 + k4)/6
- **Fourth-Order Accuracy:** global error of order h⁴
- **Self-starting:** needs only the previous value, not past history

### Predictor-Corrector Methods

Multistep methods predict and then correct each new value.

- **Milne's Method:** predictor-corrector using four previous values
- **Adams-Bashforth Method:** explicit multistep predictor
- **Corrector:** formula that refines the predicted value iteratively

## Unit 5: Transforms & Probability

### Laplace Transform

Converts linear ODEs into algebraic equations.

- **Laplace Transform:** L{f(t)} = ∫0^∞ e^(−st) f(t) dt
- **First Shifting Theorem:** L{e^(at) f(t)} = F(s − a)
- **Inverse Laplace:** recovering f(t) from F(s), often via partial fractions

### Fourier Series & Transform

Periodic and aperiodic signals expressed through sinusoids.

- **Fourier Series:** periodic function as a0/2 + Σ(an cos nx + bn sin nx)
- **Dirichlet Conditions:** sufficient conditions for convergence of a Fourier series
- **Fourier Transform:** F(ω) = ∫ f(t) e^(−iωt) dt for non-periodic signals

### Probability Distributions

Discrete and continuous models describe random variables.

- **Binomial Distribution:** P(X = r) = nCr p^r q^(n−r); mean np
- **Poisson Distribution:** P(X = r) = e^(−λ) λ^r / r!; mean = variance = λ
- **Normal Distribution:** bell-shaped continuous distribution defined by mean μ and σ

### Correlation, Regression & Hypothesis Tests

Statistical tools measure relationships and test claims.

- **Karl Pearson Coefficient:** r = cov(x,y)/(σx σy), between −1 and +1
- **Regression Line:** best-fit line predicting y from x by least squares
- **Chi-square Test:** tests goodness of fit or independence of attributes

## Standard Textbooks

- *Numerical Methods in Engineering and Science* — B. S. Grewal
- *Higher Engineering Mathematics* — B. S. Grewal
- *Introductory Methods of Numerical Analysis* — S. S. Sastry

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
