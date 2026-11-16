# MTH-103 Advanced Heat & Mass Transfer — Unit-wise Study Notes

> Multidimensional and transient conduction, convection analysis, boiling and condensation, radiation exchange and mass transfer.

## Unit 1: Advanced Conduction

### Multidimensional Steady Conduction

Conduction in 2D and 3D.

- **Laplace Equation for Temperature:** ∇²T = 0
- **Separation of Variables:** analytical 2D solution
- **Shape Factor:** q = Sk ΔT

### Transient Conduction

Time-dependent conduction.

- **Biot Number:** hL/k
- **Fourier Number:** αt/L²
- **Semi-infinite Solid:** erf solution for surface temperature change

### Numerical Conduction

Finite difference methods.

- **Finite Difference Method:** discretise derivatives
- **Explicit Scheme:** stability requires Fo ≤ 1/2 in 1D
- **Implicit Scheme:** unconditionally stable

### Extended Surfaces Advanced

Fin arrays and optimisation.

- **Fin Efficiency:** actual / ideal heat transfer
- **Optimum Fin Profile:** minimum mass for given heat
- **Overall Surface Efficiency:** includes fin and base

## Unit 2: Convection

### Convection Equations

Boundary layer energy equation.

- **Energy Equation:** u∂T/∂x + v∂T/∂y = α∂²T/∂y²
- **Nusselt Number:** hL/k
- **Similarity Solution:** Pohlhausen solution for flat plate

### Internal Forced Convection

Flow in ducts.

- **Hydrodynamic Entry Length:** about 0.05 Re D for laminar
- **Fully Developed Laminar Flow Nu:** 3.66 constant wall temperature
- **Gnielinski Correlation:** turbulent pipe flow Nusselt number

### Natural Convection

Buoyancy-driven flow.

- **Rayleigh Number:** Ra = Gr Pr
- **Boussinesq Approximation:** density varies only in buoyancy term
- **Enclosure Convection:** cavities heated from side or below

### Convection Enhancement

Techniques increase h.

- **Twisted Tape Insert:** swirl flow enhancement
- **Nanofluid:** fluid with suspended nanoparticles
- **Microchannel:** high surface-to-volume cooling

## Unit 3: Boiling & Condensation

### Pool Boiling

Boiling regimes.

- **Nukiyama Curve:** boiling curve of heat flux versus superheat
- **Nucleate Boiling:** bubbles form at sites
- **Critical Heat Flux:** Zuber correlation maximum flux

### Flow Boiling

Boiling in tubes.

- **Flow Patterns:** bubbly, slug, annular flow
- **Dryout:** liquid film disappears
- **Two-phase Multiplier:** pressure drop enhancement

### Film Condensation

Condensate film resists heat transfer.

- **Nusselt Film Condensation:** laminar film analysis
- **Condensation on Tubes:** horizontal tube correlation
- **Non-condensable Gases:** reduce condensation

### Heat Pipes

Passive two-phase devices.

- **Heat Pipe:** evaporator, adiabatic and condenser sections
- **Wick:** returns liquid by capillarity
- **Capillary Limit:** maximum heat transport

## Unit 4: Radiation

### Radiation Properties

Surfaces emit and absorb.

- **Spectral Emissivity:** emissivity at given wavelength
- **Grey Surface:** emissivity independent of wavelength
- **Kirchhoff's Law:** ελ = αλ at equilibrium

### Radiation Exchange

Exchange between surfaces.

- **Radiosity:** total radiation leaving surface
- **Network Method:** surface and space resistances
- **Enclosure Analysis:** N-surface exchange

### Gas Radiation

Participating media.

- **Gas Emissivity:** depends on partial pressure and path length
- **Beer's Law:** I = I0 e^(−κx)
- **Hottel Charts:** emissivity of CO2 and H2O

### Solar Radiation

Solar energy heat transfer.

- **Solar Irradiance:** flux reaching surface
- **Selective Surface:** high absorptance, low emittance
- **Greenhouse Effect:** glazing traps infrared

## Unit 5: Mass Transfer & Heat Exchangers

### Diffusion Mass Transfer

Concentration gradients drive diffusion.

- **Fick's Law:** J = −D dC/dx
- **Equimolar Counter Diffusion:** equal opposite fluxes
- **Stefan Flow:** diffusion through stagnant gas

### Convective Mass Transfer

Analogy with heat transfer.

- **Sherwood Number:** hm L/D
- **Schmidt Number:** ν/D
- **Chilton-Colburn Analogy:** jH = jD

### Heat Exchanger Design

Sizing and rating exchangers.

- **ε-NTU Method:** effectiveness from NTU and capacity ratio
- **Fouling Factor:** resistance from deposits
- **Kern Method:** shell-side design method

### Compact Heat Exchangers

High area density exchangers.

- **Compact Heat Exchanger:** area density above 700 m²/m³
- **Plate-fin Exchanger:** fins between plates
- **Colburn j-factor:** heat transfer correlation parameter

## Standard Textbooks

- *Fundamentals of Heat and Mass Transfer* — Incropera & DeWitt
- *Heat Transfer* — Adrian Bejan
- *Radiative Heat Transfer* — Michael F. Modest

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
