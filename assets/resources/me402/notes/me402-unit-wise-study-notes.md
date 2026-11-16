# ME-402 Instrumentation & Control — Unit-wise Study Notes

> Measurement system characteristics, transducers for displacement, force, pressure, flow and temperature, and control systems.

## Unit 1: Measurement Systems

### Generalised Measurement System

Instruments have sensing, conditioning and readout stages.

- **Primary Sensing Element:** first element receiving the measurand
- **Signal Conditioning:** amplifying and filtering the signal
- **Data Presentation:** display or record of the measurement

### Static Characteristics

Static behaviour describes steady inputs.

- **Sensitivity:** output change per unit input change
- **Linearity:** closeness of calibration curve to a straight line
- **Hysteresis:** different output for increasing and decreasing input

### Dynamic Characteristics

Dynamic behaviour describes changing inputs.

- **Speed of Response:** rapidity with which instrument responds
- **Time Lag:** delay in instrument response
- **Dynamic Error:** difference between true and indicated value with time

### Errors & Uncertainty

All measurements carry error.

- **Systematic Error:** consistent error from instrument or method
- **Random Error:** unpredictable variation
- **Uncertainty Analysis:** combining errors to estimate overall uncertainty

## Unit 2: Displacement, Force & Torque Measurement

### Displacement Measurement

Displacement transducers convert motion to signal.

- **LVDT:** transformer with movable core for linear displacement
- **Potentiometer:** sliding contact giving resistance proportional to position
- **Capacitive Transducer:** capacitance changes with gap or area

### Strain Measurement

Strain gauges measure surface strain.

- **Strain Gauge:** resistance changes with strain
- **Wheatstone Bridge Circuit:** converts resistance change to voltage
- **Gauge Factor:** (ΔR/R)/ε, about 2 for metal gauges

### Force Measurement

Load cells measure force.

- **Load Cell:** elastic element with strain gauges
- **Proving Ring:** elastic ring used to calibrate force
- **Hydraulic Load Cell:** force measured by fluid pressure

### Torque & Speed Measurement

Shaft output is measured with dynamometers and tachometers.

- **Dynamometer:** device measuring torque and power
- **Stroboscope:** measures speed by apparently freezing motion
- **Tachogenerator:** generator producing voltage proportional to speed

## Unit 3: Pressure & Flow Measurement

### Pressure Gauges

Pressure is measured relative to atmosphere or vacuum.

- **Manometer:** liquid column measuring pressure difference
- **Bourdon Tube:** curved tube that straightens with pressure
- **Gauge Pressure:** absolute pressure minus atmospheric pressure

### Low Pressure Measurement

Vacuum gauges measure low pressure.

- **McLeod Gauge:** compresses gas to measure vacuum
- **Pirani Gauge:** thermal conductivity vacuum gauge
- **Ionisation Gauge:** measures very high vacuum

### Obstruction Flow Meters

Flow is inferred from pressure drop.

- **Venturimeter:** converging-diverging tube measuring flow
- **Orifice Meter:** plate with hole; cheap but higher loss
- **Coefficient of Discharge:** actual flow / theoretical flow

### Other Flow Meters

Various principles measure flow.

- **Rotameter:** variable-area meter with float
- **Hot-wire Anemometer:** measures velocity by heat loss
- **Electromagnetic Flowmeter:** measures conductive fluid flow by induced emf

## Unit 4: Temperature Measurement

### Expansion Thermometers

Expansion of materials indicates temperature.

- **Bimetallic Strip:** two metals bend differently with temperature
- **Liquid-in-glass Thermometer:** liquid expands in a capillary
- **Pressure Thermometer:** gas or liquid pressure in a bulb

### Thermocouples

Thermocouples generate voltage from temperature difference.

- **Seebeck Effect:** emf generated in a junction of dissimilar metals
- **Law of Intermediate Metals:** third metal at same temperature adds no emf
- **K-type Thermocouple:** chromel-alumel, widely used

### Resistance Thermometers

Resistance varies with temperature.

- **RTD:** platinum resistance thermometer
- **Thermistor:** semiconductor with high temperature sensitivity
- **PT100:** platinum RTD with 100 Ω at 0 °C

### Pyrometers

Non-contact methods measure high temperature.

- **Radiation Pyrometer:** measures emitted thermal radiation
- **Optical Pyrometer:** compares brightness with a calibrated filament
- **Emissivity:** ratio of emitted radiation to black body radiation

## Unit 5: Control Systems

### Open & Closed Loop Control

Feedback improves accuracy.

- **Open-loop Control:** no feedback of output
- **Closed-loop Control:** output compared with set point
- **Error Signal:** set point minus measured value

### Transfer Function & Block Diagrams

Systems are modelled mathematically.

- **Transfer Function:** Laplace output / input
- **Block Diagram:** graphical representation of system
- **Closed-loop Gain:** G/(1 + GH)

### Controller Modes

Controllers act on error in different ways.

- **On-Off Control:** two-position control with differential gap
- **Proportional Control:** output proportional to error, leaves offset
- **PID Control:** proportional, integral and derivative actions combined

### Hydraulic & Pneumatic Control

Fluid power actuates industrial systems.

- **Hydraulic Actuator:** uses pressurised oil for large forces
- **Pneumatic Control:** uses compressed air
- **Servo Valve:** valve controlling flow in proportion to signal

## Standard Textbooks

- *Mechanical Measurements* — Beckwith, Marangoni & Lienhard
- *Mechanical Measurements and Control* — D. S. Kumar
- *Instrumentation, Measurement and Analysis* — Nakra & Chaudhry

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
