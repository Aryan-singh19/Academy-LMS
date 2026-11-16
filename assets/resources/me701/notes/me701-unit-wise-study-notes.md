# ME-701 Heat & Mass Transfer — Unit-wise Study Notes

> Conduction, extended surfaces, transient conduction, convection, radiation, heat exchangers and mass transfer.

## Unit 1: Conduction

### Modes of Heat Transfer

Heat moves by conduction, convection and radiation.

- **Fourier's Law:** q = −kA dT/dx
- **Newton's Law of Cooling:** q = hA(Ts − T∞)
- **Stefan-Boltzmann Law:** E = σT⁴

### Heat Conduction Equation

General equation governs temperature fields.

- **General Conduction Equation:** ∇²T + q/k = (1/α)∂T/∂t
- **Thermal Diffusivity:** α = k/(ρc)
- **Steady State:** temperature independent of time

### Plane Wall, Cylinder & Sphere

1D steady conduction uses thermal resistance.

- **Plane Wall Resistance:** R = L/(kA)
- **Cylinder Resistance:** R = ln(r2/r1)/(2πkL)
- **Composite Wall:** resistances in series add

### Critical Radius of Insulation

Insulation can increase heat loss below a radius.

- **Critical Radius for Cylinder:** rc = k/h
- **Critical Radius for Sphere:** rc = 2k/h
- **Overall Heat Transfer Coefficient:** U = 1/ΣR per unit area

## Unit 2: Extended Surfaces & Transient Conduction

### Fins

Fins increase surface area for heat transfer.

- **Fin:** extended surface enhancing convection
- **Fin Parameter:** m = √(hP/(kA))
- **Long Fin Heat Transfer:** q = √(hPkA)·θ0

### Fin Efficiency & Effectiveness

Measures of fin performance.

- **Fin Efficiency:** actual heat transfer / ideal heat transfer at base temperature
- **Fin Effectiveness:** heat transfer with fin / without fin
- **Fin Justification:** useful when effectiveness ≥ 2

### Lumped Capacitance Method

Small bodies have uniform temperature.

- **Biot Number:** Bi = hLc/k
- **Lumped Condition:** Bi < 0.1
- **Lumped Solution:** (T − T∞)/(Ti − T∞) = e^(−hAt/(ρVc))

### Transient Charts

Heisler charts solve larger bodies.

- **Heisler Charts:** centre temperature for slabs, cylinders and spheres
- **Fourier Number:** Fo = αt/L²
- **Semi-infinite Solid:** body extending infinitely in one direction

## Unit 3: Convection

### Convection Fundamentals

Convection combines conduction and fluid motion.

- **Forced Convection:** flow driven externally by pump or fan
- **Natural Convection:** flow driven by buoyancy
- **Thermal Boundary Layer:** region of temperature variation near a wall

### Dimensionless Numbers

Correlations use dimensionless groups.

- **Nusselt Number:** Nu = hL/k
- **Prandtl Number:** Pr = ν/α
- **Grashof Number:** Gr = gβΔTL³/ν²

### Forced Convection Correlations

Empirical correlations give h.

- **Dittus-Boelter Equation:** Nu = 0.023Re^0.8Pr^n for turbulent pipe flow
- **Laminar Flat Plate:** Nu = 0.664Re^0.5Pr^(1/3)
- **Reynolds Analogy:** relates heat transfer and friction

### Boiling & Condensation

Phase change gives high heat transfer.

- **Pool Boiling Curve:** nucleate, transition and film boiling
- **Critical Heat Flux:** maximum heat flux in nucleate boiling
- **Dropwise Condensation:** higher h than filmwise condensation

## Unit 4: Radiation

### Radiation Fundamentals

All bodies emit thermal radiation.

- **Black Body:** ideal absorber and emitter
- **Emissivity:** ratio of emission to black body emission
- **Kirchhoff's Law:** emissivity equals absorptivity at equilibrium

### Planck's & Wien's Laws

Spectral emission depends on temperature.

- **Planck's Law:** spectral distribution of black body radiation
- **Wien's Displacement Law:** λmax·T = 2898 µm·K
- **Grey Body:** emissivity independent of wavelength

### View Factors

Geometry determines radiation exchange.

- **View Factor:** fraction of radiation leaving one surface reaching another
- **Reciprocity Relation:** A1F12 = A2F21
- **Summation Rule:** sum of view factors from a surface is 1

### Radiation Exchange & Shields

Surfaces exchange radiation through networks.

- **Radiation Network:** surface and space resistances
- **Radiation Shield:** thin sheet reducing heat exchange
- **Two Parallel Plates:** q = σ(T1⁴ − T2⁴)/(1/ε1 + 1/ε2 − 1)

## Unit 5: Heat Exchangers & Mass Transfer

### Heat Exchanger Types

Exchangers transfer heat between fluids.

- **Parallel Flow:** both fluids flow in same direction
- **Counter Flow:** fluids flow in opposite directions; most effective
- **Shell and Tube Exchanger:** tubes inside a shell with baffles

### LMTD Method

Log mean temperature difference sizes exchangers.

- **LMTD:** (ΔT1 − ΔT2)/ln(ΔT1/ΔT2)
- **Heat Duty:** Q = UA·LMTD
- **Correction Factor:** applied for cross-flow and multipass exchangers

### NTU-Effectiveness Method

Effectiveness method rates exchangers.

- **Effectiveness:** actual heat transfer / maximum possible
- **NTU:** UA/Cmin
- **Capacity Ratio:** Cmin/Cmax

### Mass Transfer

Concentration differences drive mass transfer.

- **Fick's Law:** J = −D dC/dx
- **Mass Transfer Coefficient:** analogous to heat transfer coefficient
- **Schmidt Number:** Sc = ν/D

## Standard Textbooks

- *Heat and Mass Transfer* — Cengel & Ghajar
- *Fundamentals of Heat and Mass Transfer* — Incropera & DeWitt
- *Heat and Mass Transfer* — R. K. Rajput

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
