# EX-801 Electrical Drives — Unit-wise Study Notes

> Drive dynamics, DC drives, induction motor drives, synchronous motor drives, braking and digital control.

## Unit 1: Electric Drive Fundamentals

### Elements of Electric Drive

Drives control motion of machines.

- **Electric Drive:** motor, converter and controller
- **Load Torque:** torque required by load
- **Four-quadrant Operation:** forward/reverse motoring and braking

### Dynamics of Drives

Motion follows torque balance.

- **Fundamental Torque Equation:** T − TL = J dω/dt
- **Equivalent Inertia:** referred to motor shaft
- **Steady-state Stability:** slope condition of torque curves

### Load Characteristics

Loads have different torque-speed profiles.

- **Constant Torque Load:** conveyors and hoists
- **Fan Load:** torque ∝ speed²
- **Constant Power Load:** machine tool spindles

### Motor Rating

Motors are rated thermally.

- **Continuous Duty:** runs at constant load
- **Intermittent Duty:** alternating load and rest
- **Heating Time Constant:** governs temperature rise

## Unit 2: DC Drives

### Single-phase Converter Drives

Phase control feeds DC motors.

- **Half-controlled Converter Drive:** semi converter feeding armature
- **Fully Controlled Drive:** allows regenerative braking
- **Continuous Conduction:** smooth armature current

### Three-phase Converter Drives

Higher power DC drives.

- **Three-phase Fully Controlled Drive:** for large motors
- **Dual Converter Drive:** four-quadrant operation
- **Circulating Current Mode:** both converters conduct

### Chopper-fed DC Drives

Choppers give fast control.

- **Chopper Drive:** DC-DC converter control
- **Regenerative Chopper:** returns energy
- **Multi-quadrant Chopper:** four-quadrant operation

### Closed-loop DC Drives

Feedback ensures accuracy.

- **Speed Loop:** outer control loop
- **Current Loop:** inner control loop
- **PI Controller:** common drive controller

## Unit 3: Induction Motor Drives

### Stator Voltage Control

Simple speed control.

- **Stator Voltage Control:** AC voltage controller
- **Applications:** fan and pump drives
- **Limitation:** poor efficiency at low speed

### V/f Control

Constant flux control.

- **V/f Control:** voltage proportional to frequency
- **VSI-fed Drive:** voltage source inverter drive
- **CSI-fed Drive:** current source inverter drive

### Rotor Resistance & Slip Power Recovery

Slip ring motor control.

- **Rotor Resistance Control:** chopper-controlled resistance
- **Static Kramer Drive:** recovers slip power to mechanical
- **Static Scherbius Drive:** recovers slip power to supply

### Vector Control

High-performance control.

- **Field Oriented Control:** decouples flux and torque
- **DTC:** direct torque control
- **Sensorless Control:** speed estimated without sensor

## Unit 4: Synchronous & Special Motor Drives

### Synchronous Motor Drives

Synchronous drives run at exact speeds.

- **Open-loop Control:** frequency control
- **Self-controlled Mode:** load commutated inverter
- **LCI Drive:** for large synchronous motors

### BLDC & PMSM Drives

Permanent magnet drives are efficient.

- **BLDC Drive:** trapezoidal back EMF
- **PMSM Drive:** sinusoidal back EMF with vector control
- **Hall Sensors:** rotor position detection

### Stepper Motor Drives

Open-loop positioning.

- **Stepper Drive:** sequences phase currents
- **Microstepping:** fine resolution
- **Load Angle Control:** keeps rotor synchronised

### Switched Reluctance Drives

Rugged drives.

- **SRM Drive:** asymmetric bridge converter
- **Torque Ripple:** drawback of SRM
- **Applications:** EVs and appliances

## Unit 5: Braking & Digital Control

### Electric Braking

Motors decelerate electrically.

- **Regenerative Braking:** returns energy to source
- **Dynamic Braking:** dissipates in resistor
- **Plugging:** reverses supply

### Energy Recovery

Recovering kinetic energy.

- **Energy Recovery System:** stores or returns braking energy
- **Traction Applications:** trains and EVs
- **Lift Drives:** regenerative elevators

### Digital Control of Drives

Microcontrollers control drives.

- **DSP-based Drive:** digital signal processor control
- **PWM Generation:** digital modulation
- **Encoder Interface:** position feedback

### Drive Applications

Drives power industry.

- **Rolling Mill Drive:** high power DC or AC drive
- **Electric Traction Drive:** locomotive drives
- **Pump and Fan Drive:** VFD energy savings

## Standard Textbooks

- *Fundamentals of Electrical Drives* — G. K. Dubey
- *Electric Motor Drives* — R. Krishnan
- *Modern Power Electronics and AC Drives* — B. K. Bose

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
