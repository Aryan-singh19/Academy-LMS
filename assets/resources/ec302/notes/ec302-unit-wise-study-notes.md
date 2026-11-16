# EC-302 Electronic Measurement & Instrumentation — Unit-wise Study Notes

> Measurement errors, analog and digital meters, bridges, oscilloscopes, transducers and data acquisition.

## Unit 1: Measurement Fundamentals

### Characteristics of Instruments

Instruments are judged by static and dynamic characteristics.

- **Accuracy:** closeness of a reading to the true value
- **Precision:** closeness of repeated readings to each other
- **Resolution:** smallest input change an instrument can detect

### Errors in Measurement

Every measurement contains some error.

- **Gross Error:** human mistake in reading or recording
- **Systematic Error:** repeatable error from instrument or environment
- **Random Error:** unpredictable error reduced by averaging

### Standards & Calibration

Instruments are calibrated against standards.

- **Calibration:** comparing an instrument with a known standard
- **Primary Standard:** highest accuracy standard kept by national labs
- **Traceability:** unbroken chain of calibrations to national standards

### Statistical Analysis of Data

Statistics quantify uncertainty in readings.

- **Arithmetic Mean:** best estimate of the true value from many readings
- **Standard Deviation:** spread of readings about the mean
- **Probable Error:** 0.6745 × standard deviation

## Unit 2: Analog & Digital Meters

### PMMC Instruments

Moving-coil meters measure DC current and voltage.

- **PMMC:** permanent magnet moving coil instrument with linear scale
- **Shunt:** low resistance in parallel to extend ammeter range
- **Multiplier:** high series resistance to extend voltmeter range

### Moving Iron & Electrodynamometer Instruments

These meters measure AC and DC quantities.

- **Moving Iron Instrument:** works on AC and DC with a non-linear scale
- **Electrodynamometer:** fixed and moving coils used as a wattmeter
- **Loading Effect:** meter draws current and alters the measured circuit

### Digital Voltmeters

DVMs convert analog voltage to digital readings.

- **Ramp-type DVM:** counts clock pulses during a linear ramp
- **Dual-slope DVM:** integrating converter with good noise rejection
- **Successive Approximation DVM:** binary search conversion

### Digital Multimeter & Frequency Counter

Digital meters measure many quantities.

- **Digital Multimeter:** measures voltage, current and resistance digitally
- **3½ Digit Display:** maximum reading 1999
- **Frequency Counter:** counts cycles in a precise time gate

## Unit 3: Bridges

### DC Bridges

Bridges measure resistance by null balance.

- **Wheatstone Bridge:** balance condition R1·R4 = R2·R3 for medium resistance
- **Kelvin Double Bridge:** measures low resistance, removing lead resistance
- **Null Detection:** galvanometer shows zero at balance

### AC Bridges for Inductance

AC bridges balance both magnitude and phase.

- **Maxwell Bridge:** measures medium-Q inductance with a capacitor
- **Hay's Bridge:** suits high-Q coils
- **Anderson Bridge:** accurate inductance measurement using a modified Maxwell bridge

### AC Bridges for Capacitance & Frequency

Other bridges measure capacitance and frequency.

- **Schering Bridge:** measures capacitance and dissipation factor
- **Wien Bridge:** frequency-dependent bridge used in oscillators
- **De Sauty Bridge:** simple capacitance comparison bridge

### Q-meter

The Q-meter measures coil quality factor.

- **Q-meter:** measures Q using series resonance
- **Quality Factor:** Q = ωL/R
- **Distributed Capacitance:** self-capacitance of a coil found with a Q-meter

## Unit 4: Oscilloscopes & Signal Generators

### Cathode Ray Oscilloscope

The CRO displays voltage against time.

- **CRT:** cathode ray tube with electron gun, deflection plates and screen
- **Time Base:** sawtooth sweep moving the beam horizontally
- **Deflection Sensitivity:** beam deflection per volt

### Lissajous Patterns & Measurements

CROs measure phase and frequency.

- **Lissajous Figure:** pattern from two sinusoids on X and Y plates
- **Frequency Ratio:** fy/fx = horizontal tangencies / vertical tangencies
- **Phase Angle:** sin φ = Y-intercept / Y-max for an ellipse

### Digital Storage Oscilloscope

DSOs sample and store waveforms.

- **DSO:** digitises and stores waveforms in memory
- **Sampling Rate:** samples per second taken by the scope
- **Pre-trigger View:** shows events before the trigger point

### Signal Generators & Analysers

Generators supply test signals; analysers study spectra.

- **Function Generator:** produces sine, square and triangular waves
- **Spectrum Analyser:** displays signal amplitude versus frequency
- **Wave Analyser:** measures amplitude of individual harmonics

## Unit 5: Transducers & Data Acquisition

### Transducer Classification

Transducers convert physical quantities to electrical signals.

- **Active Transducer:** generates its own output, e.g. thermocouple
- **Passive Transducer:** needs external excitation, e.g. strain gauge
- **Inverse Transducer:** converts electrical signal into physical quantity

### Strain Gauges & LVDT

Displacement and strain are measured electrically.

- **Strain Gauge:** resistance changes with strain
- **Gauge Factor:** (ΔR/R)/(Δl/l)
- **LVDT:** linear variable differential transformer for displacement

### Temperature & Pressure Transducers

Common sensors measure temperature and pressure.

- **Thermocouple:** Seebeck-effect sensor generating voltage with temperature
- **RTD:** resistance temperature detector, usually platinum
- **Thermistor:** semiconductor with large negative temperature coefficient

### Data Acquisition Systems

DAQ systems condition, convert and record signals.

- **Signal Conditioning:** amplification, filtering and isolation
- **Sample-and-Hold:** holds the input steady during conversion
- **Telemetry:** measuring and transmitting data from remote points

## Standard Textbooks

- *Electronic Instrumentation* — H. S. Kalsi
- *A Course in Electrical and Electronic Measurements and Instrumentation* — A. K. Sawhney
- *Modern Electronic Instrumentation and Measurement Techniques* — Helfrick & Cooper

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
