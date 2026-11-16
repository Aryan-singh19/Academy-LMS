# ME-502 Mechanical Vibrations — Unit-wise Study Notes

> Free and forced vibration, damping, two-degree and multi-degree systems, vibration isolation, measurement and noise.

## Unit 1: Fundamentals of Vibration

### Vibration Basics

Vibration is oscillatory motion about equilibrium.

- **Free Vibration:** vibration after initial disturbance with no external force
- **Forced Vibration:** vibration under external periodic force
- **Degree of Freedom:** number of independent coordinates to describe motion

### Simple Harmonic Motion

SHM is the simplest periodic motion.

- **SHM:** acceleration proportional to displacement and directed towards mean
- **Amplitude:** maximum displacement
- **Time Period:** time for one complete cycle

### Elements of Vibrating Systems

Mass, spring and damper form the model.

- **Spring Stiffness:** force per unit deflection
- **Springs in Series:** 1/k = 1/k1 + 1/k2
- **Springs in Parallel:** k = k1 + k2

### Harmonic Analysis

Periodic vibration is analysed by Fourier series.

- **Fourier Analysis:** expresses periodic motion as harmonics
- **Beats:** periodic amplitude variation from close frequencies
- **Phase Angle:** lead or lag between motions

## Unit 2: Undamped Free Vibration

### Natural Frequency

Natural frequency depends on stiffness and mass.

- **Natural Frequency:** ωn = √(k/m)
- **Static Deflection Relation:** fn = (1/2π)√(g/δ)
- **Equation of Motion:** mẍ + kx = 0

### Energy & Rayleigh's Methods

Energy methods give natural frequency quickly.

- **Energy Method:** total energy constant; d/dt(T + U) = 0
- **Rayleigh's Method:** max kinetic energy equals max potential energy
- **Effect of Spring Mass:** add one-third of spring mass

### Torsional Vibration

Shafts with rotors vibrate torsionally.

- **Torsional Natural Frequency:** ωn = √(kt/I)
- **Two-rotor System:** node exists between rotors
- **Equivalent Shaft:** stepped shaft reduced to uniform equivalent

### Transverse Vibration & Whirling

Beams and shafts vibrate transversely.

- **Dunkerley's Method:** 1/fn² = Σ 1/fni²
- **Whirling Speed:** critical speed equal to transverse natural frequency
- **Critical Speed:** speed at which shaft deflection becomes large

## Unit 3: Damped & Forced Vibration

### Damped Free Vibration

Damping dissipates energy.

- **Damping Ratio:** ζ = c/cc
- **Critical Damping:** cc = 2√(km)
- **Logarithmic Decrement:** δ = ln(x1/x2) = 2πζ/√(1 − ζ²)

### Forced Vibration & Resonance

External forcing at natural frequency causes resonance.

- **Magnification Factor:** ratio of dynamic to static amplitude
- **Resonance:** forcing frequency equals natural frequency
- **Frequency Ratio:** r = ω/ωn

### Rotating & Reciprocating Unbalance

Unbalanced masses excite vibration.

- **Rotating Unbalance:** force meω² rotating with the shaft
- **Support Motion:** vibration excited by base movement
- **Half-power Bandwidth:** measures damping near resonance

### Vibration Isolation & Transmissibility

Isolators reduce transmitted force.

- **Transmissibility:** transmitted force / applied force
- **Isolation Condition:** r > √2 for effective isolation
- **Isolator Materials:** rubber pads, springs and cork

## Unit 4: Multi-degree of Freedom Systems

### Two-degree of Freedom Systems

Two masses give two natural frequencies.

- **Principal Modes:** natural modes of vibration
- **Mode Shape:** relative amplitudes in a mode
- **Coupled Coordinates:** coordinates linked through stiffness or mass

### Vibration Absorber

Auxiliary mass cancels vibration.

- **Dynamic Vibration Absorber:** tuned auxiliary mass-spring
- **Tuning Condition:** absorber natural frequency equals forcing frequency
- **Centrifugal Pendulum Absorber:** absorber for torsional vibration

### Holzer's Method

Iterative method for multi-rotor systems.

- **Holzer's Method:** trial frequencies until residual torque is zero
- **Multi-rotor System:** shafts with many discs
- **Node:** point of zero amplitude

### Matrix Methods

Matrix methods solve many DOF systems.

- **Eigenvalue Problem:** [K − ω²M]{X} = 0
- **Stiffness Matrix:** matrix of spring coefficients
- **Orthogonality of Modes:** mode shapes are orthogonal w.r.t. M and K

## Unit 5: Vibration Measurement & Noise

### Vibration Measuring Instruments

Transducers measure displacement, velocity and acceleration.

- **Seismic Instrument:** mass-spring device measuring vibration
- **Accelerometer:** high natural frequency seismic instrument
- **Vibrometer:** low natural frequency instrument measuring displacement

### Condition Monitoring

Vibration indicates machine health.

- **Condition Monitoring:** tracking machine health from signals
- **FFT Analyser:** displays vibration spectrum
- **Predictive Maintenance:** maintenance based on measured condition

### Fundamentals of Noise

Noise is unwanted sound.

- **Sound Pressure Level:** SPL = 20 log(p/p0) dB
- **Decibel Addition:** levels add logarithmically
- **Frequency Weighting:** A-weighting mimics human hearing

### Noise Control

Noise is reduced at source, path or receiver.

- **Source Control:** quieter machines and damping
- **Sound Absorption:** porous materials absorb sound
- **Enclosure:** barrier around noisy equipment

## Standard Textbooks

- *Mechanical Vibrations* — S. S. Rao
- *Mechanical Vibrations* — G. K. Grover
- *Theory of Vibration with Applications* — W. T. Thomson

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
