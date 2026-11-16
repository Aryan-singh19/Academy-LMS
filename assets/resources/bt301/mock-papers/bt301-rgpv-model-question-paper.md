# BT-301 Mathematics-III — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: CSE Sem 4: BT-401 · IT Sem 4: BT-401 · ECE Sem 3: BT-301 · ME Sem 3: BT-301 · AU Sem 3: BT-301.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Bisection Method. Explain its role in Bisection & Regula-Falsi Methods with a suitable example or diagram. **[7]**

(b) Explain Newton-Raphson Method in detail. Differentiate between Newton-Raphson Formula and Quadratic Convergence. **[7]**

**Q2.** *(Unit 2)*

(a) Define Newton Backward Formula. Explain its role in Newton's Interpolation Formulae with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Lagrange & Divided Differences. Bring out the significance of Lagrange Interpolation and Divided Difference. **[7]**

**Q3.** *(Unit 3)*

(a) Define Accuracy. Explain its role in Simpson's Rules with a suitable example or diagram. **[7]**

(b) Explain Gaussian Quadrature in detail. Differentiate between Gauss-Legendre Quadrature and Two-Point Rule. **[7]**

**Q4.** *(Unit 4)*

(a) Define Milne's Method. Explain its role in Predictor-Corrector Methods with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Taylor Series & Picard's Method. Bring out the significance of Taylor Series Method and Picard's Method. **[7]**

**Q5.** *(Unit 5)*

(a) Define First Shifting Theorem. Explain its role in Laplace Transform with a suitable example or diagram. **[7]**

(b) Explain Fourier Series & Transform in detail. Differentiate between Fourier Series and Dirichlet Conditions. **[7]**

**Q6.** *(Unit 1)*

(a) Define Truncation Error. Explain its role in Errors in Numerical Computation with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Bisection & Regula-Falsi Methods. Bring out the significance of Bisection Method and Regula-Falsi. **[7]**

**Q7.** *(Unit 3)*

(a) Define Forward Derivative Formula. Explain its role in Numerical Differentiation with a suitable example or diagram. **[7]**

(b) Explain Trapezoidal Rule in detail. Differentiate between Trapezoidal Rule and Error Order. **[7]**

**Q8.** *(Unit 5)*

(a) Define Dirichlet Conditions. Explain its role in Fourier Series & Transform with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Probability Distributions. Bring out the significance of Binomial Distribution and Poisson Distribution. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Quadratic Convergence. Explain its role in Newton-Raphson Method with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Solution of Linear Systems. Bring out the significance of Gauss Elimination and Gauss-Seidel Method. **[7]**

**Q2.** *(Unit 2)*

(a) Define Newton Divided Difference Formula. Explain its role in Lagrange & Divided Differences with a suitable example or diagram. **[7]**

(b) Explain Central Difference Formulae in detail. Differentiate between Central Difference and Stirling Formula. **[7]**

**Q3.** *(Unit 3)*

(a) Define Gauss-Legendre Quadrature. Explain its role in Gaussian Quadrature with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Numerical Differentiation. Bring out the significance of Forward Derivative Formula and Backward Derivative Formula. **[7]**

**Q4.** *(Unit 4)*

(a) Define Picard's Method. Explain its role in Taylor Series & Picard's Method with a suitable example or diagram. **[7]**

(b) Explain Euler & Modified Euler Methods in detail. Differentiate between Euler Method and Modified Euler. **[7]**

**Q5.** *(Unit 5)*

(a) Define Fourier Transform. Explain its role in Fourier Series & Transform with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Probability Distributions. Bring out the significance of Binomial Distribution and Poisson Distribution. **[7]**

**Q6.** *(Unit 2)*

(a) Define Forward Difference. Explain its role in Finite Difference Operators with a suitable example or diagram. **[7]**

(b) Explain Newton's Interpolation Formulae in detail. Differentiate between Newton Forward Formula and Newton Backward Formula. **[7]**

**Q7.** *(Unit 4)*

(a) Define Modified Euler. Explain its role in Euler & Modified Euler Methods with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Runge-Kutta Methods. Bring out the significance of RK4 Formula and Fourth-Order Accuracy. **[7]**

**Q8.** *(Unit 1)*

(a) Define Diagonal Dominance. Explain its role in Solution of Linear Systems with a suitable example or diagram. **[7]**

(b) Explain Errors in Numerical Computation in detail. Differentiate between Absolute Error and Relative Error. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Bisection Method: halves the interval [a,b] each step; always converges, but linearly
- **Q1(b):** Newton-Raphson Formula: x(n+1) = x(n) − f(x(n))/f'(x(n)) | Quadratic Convergence: error roughly squares each iteration near the root | Failure Case: method breaks down when f'(x) is zero or near zero
- **Q2(a):** Newton Backward Formula: used to interpolate near the end of a table
- **Q2(b):** Lagrange Interpolation: weighted sum of y-values using basis polynomials L_i(x) | Divided Difference: [x0,x1] = (y1 − y0)/(x1 − x0), generalised recursively | Newton Divided Difference Formula: interpolation for unequal intervals built from divided differences
- **Q3(a):** Accuracy: Simpson 1/3 error is of order h⁴
- **Q3(b):** Gauss-Legendre Quadrature: uses roots of Legendre polynomials on [−1,1] | Two-Point Rule: exact for polynomials up to degree 3 | Weight Function: coefficient multiplying each sampled function value
- **Q4(a):** Milne's Method: predictor-corrector using four previous values
- **Q4(b):** Taylor Series Method: expands y about x0 using successive derivatives | Picard's Method: successive approximation by integrating y(n+1) = y0 + ∫ f(x, y(n)) dx | Initial Value Problem: ODE with y specified at a starting point x0
- **Q5(a):** First Shifting Theorem: L{e^(at) f(t)} = F(s − a)
- **Q5(b):** Fourier Series: periodic function as a0/2 + Σ(an cos nx + bn sin nx) | Dirichlet Conditions: sufficient conditions for convergence of a Fourier series | Fourier Transform: F(ω) = ∫ f(t) e^(−iωt) dt for non-periodic signals
- **Q6(a):** Truncation Error: error from cutting off an infinite process such as a series
- **Q6(b):** Bisection Method: halves the interval [a,b] each step; always converges, but linearly | Regula-Falsi: joins f(a) and f(b) with a chord and uses its x-intercept as the next guess | Intermediate Value Theorem: if f(a)·f(b) < 0 a continuous f has a root in (a,b)
- **Q7(a):** Forward Derivative Formula: dy/dx at x0 ≈ (1/h)(Δy0 − Δ²y0/2 + Δ³y0/3 …)
- **Q7(b):** Trapezoidal Rule: ∫ ≈ (h/2)[y0 + 2(y1 + … + y(n−1)) + yn] | Error Order: global error proportional to h² | Applicability: works for any number of intervals
- **Q8(a):** Dirichlet Conditions: sufficient conditions for convergence of a Fourier series
- **Q8(b):** Binomial Distribution: P(X = r) = nCr p^r q^(n−r); mean np | Poisson Distribution: P(X = r) = e^(−λ) λ^r / r!; mean = variance = λ | Normal Distribution: bell-shaped continuous distribution defined by mean μ and σ

## Recommended Books

- *Numerical Methods in Engineering and Science* — B. S. Grewal
- *Higher Engineering Mathematics* — B. S. Grewal
- *Introductory Methods of Numerical Analysis* — S. S. Sastry
