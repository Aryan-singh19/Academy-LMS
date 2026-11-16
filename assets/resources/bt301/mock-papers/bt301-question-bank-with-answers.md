# BT-301 Mathematics-III — Question Bank with Answer Hints

## Unit 1: Numerical Solution of Equations

### Short answer (2-3 marks)

- **Q.** Define *Bisection Method*.  
  **Ans.** halves the interval [a,b] each step; always converges, but linearly
- **Q.** Define *Regula-Falsi*.  
  **Ans.** joins f(a) and f(b) with a chord and uses its x-intercept as the next guess
- **Q.** Define *Intermediate Value Theorem*.  
  **Ans.** if f(a)·f(b) < 0 a continuous f has a root in (a,b)
- **Q.** Define *Newton-Raphson Formula*.  
  **Ans.** x(n+1) = x(n) − f(x(n))/f'(x(n))
- **Q.** Define *Quadratic Convergence*.  
  **Ans.** error roughly squares each iteration near the root
- **Q.** Define *Failure Case*.  
  **Ans.** method breaks down when f'(x) is zero or near zero
- **Q.** Define *Gauss Elimination*.  
  **Ans.** reduces the system to upper-triangular form then back-substitutes
- **Q.** Define *Gauss-Seidel Method*.  
  **Ans.** iterative method using latest updated values immediately
- **Q.** Define *Diagonal Dominance*.  
  **Ans.** each diagonal element's magnitude is at least the sum of the other magnitudes in its row; guarantees iterative convergence
- **Q.** Define *Absolute Error*.  
  **Ans.** magnitude of (true value − approximate value)
- **Q.** Define *Relative Error*.  
  **Ans.** absolute error divided by the true value
- **Q.** Define *Truncation Error*.  
  **Ans.** error from cutting off an infinite process such as a series

### Long answer (7 marks)

- **Q.** Explain *Bisection & Regula-Falsi Methods* in detail with a neat diagram.  
  **Key points:** Bracketing methods trap a root between two points with opposite function signs. Bisection Method — halves the interval [a,b] each step; always converges, but linearly; Regula-Falsi — joins f(a) and f(b) with a chord and uses its x-intercept as the next guess; Intermediate Value Theorem — if f(a)·f(b) < 0 a continuous f has a root in (a,b).
- **Q.** Explain *Newton-Raphson Method* in detail with a neat diagram.  
  **Key points:** An open method using the tangent line for fast convergence. Newton-Raphson Formula — x(n+1) = x(n) − f(x(n))/f'(x(n)); Quadratic Convergence — error roughly squares each iteration near the root; Failure Case — method breaks down when f'(x) is zero or near zero.
- **Q.** Explain *Solution of Linear Systems* in detail with a neat diagram.  
  **Key points:** Direct and iterative methods solve AX = B. Gauss Elimination — reduces the system to upper-triangular form then back-substitutes; Gauss-Seidel Method — iterative method using latest updated values immediately; Diagonal Dominance — each diagonal element's magnitude is at least the sum of the other magnitudes in its row; guarantees iterative convergence.
- **Q.** Explain *Errors in Numerical Computation* in detail with a neat diagram.  
  **Key points:** Every numerical answer carries rounding and truncation error. Absolute Error — magnitude of (true value − approximate value); Relative Error — absolute error divided by the true value; Truncation Error — error from cutting off an infinite process such as a series.

## Unit 2: Interpolation & Finite Differences

### Short answer (2-3 marks)

- **Q.** Define *Forward Difference*.  
  **Ans.** Δf(x) = f(x+h) − f(x)
- **Q.** Define *Backward Difference*.  
  **Ans.** ∇f(x) = f(x) − f(x−h)
- **Q.** Define *Shift Operator*.  
  **Ans.** E f(x) = f(x+h), with E = 1 + Δ
- **Q.** Define *Newton Forward Formula*.  
  **Ans.** used to interpolate near the beginning of a table
- **Q.** Define *Newton Backward Formula*.  
  **Ans.** used to interpolate near the end of a table
- **Q.** Define *Phase Variable u*.  
  **Ans.** (x − x0)/h used inside the formulae
- **Q.** Define *Lagrange Interpolation*.  
  **Ans.** weighted sum of y-values using basis polynomials L_i(x)
- **Q.** Define *Divided Difference*.  
  **Ans.** [x0,x1] = (y1 − y0)/(x1 − x0), generalised recursively
- **Q.** Define *Newton Divided Difference Formula*.  
  **Ans.** interpolation for unequal intervals built from divided differences
- **Q.** Define *Central Difference*.  
  **Ans.** δf(x) = f(x + h/2) − f(x − h/2)
- **Q.** Define *Stirling Formula*.  
  **Ans.** average of Gauss forward and backward formulae
- **Q.** Define *Bessel Formula*.  
  **Ans.** central formula best when u is near 1/2

### Long answer (7 marks)

- **Q.** Explain *Finite Difference Operators* in detail with a neat diagram.  
  **Key points:** Operators relate tabulated values at equal spacing h. Forward Difference — Δf(x) = f(x+h) − f(x); Backward Difference — ∇f(x) = f(x) − f(x−h); Shift Operator — E f(x) = f(x+h), with E = 1 + Δ.
- **Q.** Explain *Newton's Interpolation Formulae* in detail with a neat diagram.  
  **Key points:** Polynomials through equally spaced points estimate intermediate values. Newton Forward Formula — used to interpolate near the beginning of a table; Newton Backward Formula — used to interpolate near the end of a table; Phase Variable u — (x − x0)/h used inside the formulae.
- **Q.** Explain *Lagrange & Divided Differences* in detail with a neat diagram.  
  **Key points:** Unequally spaced data need different interpolation formulas. Lagrange Interpolation — weighted sum of y-values using basis polynomials L_i(x); Divided Difference — [x0,x1] = (y1 − y0)/(x1 − x0), generalised recursively; Newton Divided Difference Formula — interpolation for unequal intervals built from divided differences.
- **Q.** Explain *Central Difference Formulae* in detail with a neat diagram.  
  **Key points:** Central formulas give better accuracy near the middle of a table. Central Difference — δf(x) = f(x + h/2) − f(x − h/2); Stirling Formula — average of Gauss forward and backward formulae; Bessel Formula — central formula best when u is near 1/2.

## Unit 3: Numerical Differentiation & Integration

### Short answer (2-3 marks)

- **Q.** Define *Forward Derivative Formula*.  
  **Ans.** dy/dx at x0 ≈ (1/h)(Δy0 − Δ²y0/2 + Δ³y0/3 …)
- **Q.** Define *Backward Derivative Formula*.  
  **Ans.** used for derivatives near the end of a table
- **Q.** Define *Step Size h*.  
  **Ans.** smaller h lowers truncation error but raises round-off error
- **Q.** Define *Trapezoidal Rule*.  
  **Ans.** ∫ ≈ (h/2)[y0 + 2(y1 + … + y(n−1)) + yn]
- **Q.** Define *Error Order*.  
  **Ans.** global error proportional to h²
- **Q.** Define *Applicability*.  
  **Ans.** works for any number of intervals
- **Q.** Define *Simpson 1/3 Rule*.  
  **Ans.** (h/3)[y0 + 4(odd ordinates) + 2(even ordinates) + yn]; n must be even
- **Q.** Define *Simpson 3/8 Rule*.  
  **Ans.** (3h/8)[y0 + 3y1 + 3y2 + 2y3 + …]; n a multiple of 3
- **Q.** Define *Accuracy*.  
  **Ans.** Simpson 1/3 error is of order h⁴
- **Q.** Define *Gauss-Legendre Quadrature*.  
  **Ans.** uses roots of Legendre polynomials on [−1,1]
- **Q.** Define *Two-Point Rule*.  
  **Ans.** exact for polynomials up to degree 3
- **Q.** Define *Weight Function*.  
  **Ans.** coefficient multiplying each sampled function value

### Long answer (7 marks)

- **Q.** Explain *Numerical Differentiation* in detail with a neat diagram.  
  **Key points:** Derivatives are estimated from interpolating polynomials. Forward Derivative Formula — dy/dx at x0 ≈ (1/h)(Δy0 − Δ²y0/2 + Δ³y0/3 …); Backward Derivative Formula — used for derivatives near the end of a table; Step Size h — smaller h lowers truncation error but raises round-off error.
- **Q.** Explain *Trapezoidal Rule* in detail with a neat diagram.  
  **Key points:** Area under a curve approximated by trapezoids. Trapezoidal Rule — ∫ ≈ (h/2)[y0 + 2(y1 + … + y(n−1)) + yn]; Error Order — global error proportional to h²; Applicability — works for any number of intervals.
- **Q.** Explain *Simpson's Rules* in detail with a neat diagram.  
  **Key points:** Parabolic and cubic fits give higher accuracy. Simpson 1/3 Rule — (h/3)[y0 + 4(odd ordinates) + 2(even ordinates) + yn]; n must be even; Simpson 3/8 Rule — (3h/8)[y0 + 3y1 + 3y2 + 2y3 + …]; n a multiple of 3; Accuracy — Simpson 1/3 error is of order h⁴.
- **Q.** Explain *Gaussian Quadrature* in detail with a neat diagram.  
  **Key points:** Optimally placed points integrate polynomials exactly with few evaluations. Gauss-Legendre Quadrature — uses roots of Legendre polynomials on [−1,1]; Two-Point Rule — exact for polynomials up to degree 3; Weight Function — coefficient multiplying each sampled function value.

## Unit 4: Numerical Solution of ODEs

### Short answer (2-3 marks)

- **Q.** Define *Taylor Series Method*.  
  **Ans.** expands y about x0 using successive derivatives
- **Q.** Define *Picard's Method*.  
  **Ans.** successive approximation by integrating y(n+1) = y0 + ∫ f(x, y(n)) dx
- **Q.** Define *Initial Value Problem*.  
  **Ans.** ODE with y specified at a starting point x0
- **Q.** Define *Euler Method*.  
  **Ans.** y(n+1) = y(n) + h·f(x(n), y(n))
- **Q.** Define *Modified Euler*.  
  **Ans.** averages slopes at both ends of the step for better accuracy
- **Q.** Define *Local Error*.  
  **Ans.** Euler error per step is of order h²
- **Q.** Define *RK4 Formula*.  
  **Ans.** y(n+1) = y(n) + (k1 + 2k2 + 2k3 + k4)/6
- **Q.** Define *Fourth-Order Accuracy*.  
  **Ans.** global error of order h⁴
- **Q.** Define *Self-starting*.  
  **Ans.** needs only the previous value, not past history
- **Q.** Define *Milne's Method*.  
  **Ans.** predictor-corrector using four previous values
- **Q.** Define *Adams-Bashforth Method*.  
  **Ans.** explicit multistep predictor
- **Q.** Define *Corrector*.  
  **Ans.** formula that refines the predicted value iteratively

### Long answer (7 marks)

- **Q.** Explain *Taylor Series & Picard's Method* in detail with a neat diagram.  
  **Key points:** Series-based methods approximate the solution of y' = f(x,y). Taylor Series Method — expands y about x0 using successive derivatives; Picard's Method — successive approximation by integrating y(n+1) = y0 + ∫ f(x, y(n)) dx; Initial Value Problem — ODE with y specified at a starting point x0.
- **Q.** Explain *Euler & Modified Euler Methods* in detail with a neat diagram.  
  **Key points:** Step-by-step methods march along small increments h. Euler Method — y(n+1) = y(n) + h·f(x(n), y(n)); Modified Euler — averages slopes at both ends of the step for better accuracy; Local Error — Euler error per step is of order h².
- **Q.** Explain *Runge-Kutta Methods* in detail with a neat diagram.  
  **Key points:** RK methods use weighted slopes inside each step. RK4 Formula — y(n+1) = y(n) + (k1 + 2k2 + 2k3 + k4)/6; Fourth-Order Accuracy — global error of order h⁴; Self-starting — needs only the previous value, not past history.
- **Q.** Explain *Predictor-Corrector Methods* in detail with a neat diagram.  
  **Key points:** Multistep methods predict and then correct each new value. Milne's Method — predictor-corrector using four previous values; Adams-Bashforth Method — explicit multistep predictor; Corrector — formula that refines the predicted value iteratively.

## Unit 5: Transforms & Probability

### Short answer (2-3 marks)

- **Q.** Define *Laplace Transform*.  
  **Ans.** L{f(t)} = ∫0^∞ e^(−st) f(t) dt
- **Q.** Define *First Shifting Theorem*.  
  **Ans.** L{e^(at) f(t)} = F(s − a)
- **Q.** Define *Inverse Laplace*.  
  **Ans.** recovering f(t) from F(s), often via partial fractions
- **Q.** Define *Fourier Series*.  
  **Ans.** periodic function as a0/2 + Σ(an cos nx + bn sin nx)
- **Q.** Define *Dirichlet Conditions*.  
  **Ans.** sufficient conditions for convergence of a Fourier series
- **Q.** Define *Fourier Transform*.  
  **Ans.** F(ω) = ∫ f(t) e^(−iωt) dt for non-periodic signals
- **Q.** Define *Binomial Distribution*.  
  **Ans.** P(X = r) = nCr p^r q^(n−r); mean np
- **Q.** Define *Poisson Distribution*.  
  **Ans.** P(X = r) = e^(−λ) λ^r / r!; mean = variance = λ
- **Q.** Define *Normal Distribution*.  
  **Ans.** bell-shaped continuous distribution defined by mean μ and σ
- **Q.** Define *Karl Pearson Coefficient*.  
  **Ans.** r = cov(x,y)/(σx σy), between −1 and +1
- **Q.** Define *Regression Line*.  
  **Ans.** best-fit line predicting y from x by least squares
- **Q.** Define *Chi-square Test*.  
  **Ans.** tests goodness of fit or independence of attributes

### Long answer (7 marks)

- **Q.** Explain *Laplace Transform* in detail with a neat diagram.  
  **Key points:** Converts linear ODEs into algebraic equations. Laplace Transform — L{f(t)} = ∫0^∞ e^(−st) f(t) dt; First Shifting Theorem — L{e^(at) f(t)} = F(s − a); Inverse Laplace — recovering f(t) from F(s), often via partial fractions.
- **Q.** Explain *Fourier Series & Transform* in detail with a neat diagram.  
  **Key points:** Periodic and aperiodic signals expressed through sinusoids. Fourier Series — periodic function as a0/2 + Σ(an cos nx + bn sin nx); Dirichlet Conditions — sufficient conditions for convergence of a Fourier series; Fourier Transform — F(ω) = ∫ f(t) e^(−iωt) dt for non-periodic signals.
- **Q.** Explain *Probability Distributions* in detail with a neat diagram.  
  **Key points:** Discrete and continuous models describe random variables. Binomial Distribution — P(X = r) = nCr p^r q^(n−r); mean np; Poisson Distribution — P(X = r) = e^(−λ) λ^r / r!; mean = variance = λ; Normal Distribution — bell-shaped continuous distribution defined by mean μ and σ.
- **Q.** Explain *Correlation, Regression & Hypothesis Tests* in detail with a neat diagram.  
  **Key points:** Statistical tools measure relationships and test claims. Karl Pearson Coefficient — r = cov(x,y)/(σx σy), between −1 and +1; Regression Line — best-fit line predicting y from x by least squares; Chi-square Test — tests goodness of fit or independence of attributes.

