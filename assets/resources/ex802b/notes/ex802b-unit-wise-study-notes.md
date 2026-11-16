# EX-802(B) Special Electrical Machines — Unit-wise Study Notes

> Stepper, switched reluctance, BLDC, PMSM, linear induction and other special purpose machines.

## Unit 1: Stepper Motors

### Stepper Motor Principle

Steppers move in discrete steps.

- **Stepper Motor:** converts pulses into steps
- **Step Angle:** 360°/(steps per revolution)
- **Holding Torque:** torque at standstill when energised

### Types of Stepper Motors

Construction varies.

- **Variable Reluctance Stepper:** toothed soft-iron rotor
- **Permanent Magnet Stepper:** magnet rotor
- **Hybrid Stepper:** combines both

### Drive Modes

Excitation modes change performance.

- **Full Step:** one or two phases energised
- **Half Step:** alternates one and two phases
- **Microstepping:** proportional currents for small steps

### Characteristics

Performance curves.

- **Pull-in Torque:** maximum torque to start in step
- **Pull-out Torque:** maximum torque while running
- **Resonance:** vibration at certain step rates

## Unit 2: Switched Reluctance Motors

### SRM Construction

Doubly salient structure.

- **SRM:** salient stator and rotor, no windings on rotor
- **Stator Phases:** concentrated windings
- **Rotor Position:** determines phase switching

### Torque Production

Torque from reluctance variation.

- **Reluctance Torque:** T = ½ i² dL/dθ
- **Aligned Position:** minimum reluctance
- **Unaligned Position:** maximum reluctance

### SRM Converters

Converters energise phases.

- **Asymmetric Bridge Converter:** two switches per phase
- **Commutation:** switching phases in sequence
- **Current Chopping:** controls phase current

### SRM Applications

Rugged motors for harsh conditions.

- **Advantages:** robust, low cost
- **Torque Ripple:** main drawback
- **Applications:** EVs, aerospace, appliances

## Unit 3: Permanent Magnet Machines

### Permanent Magnet Materials

Magnets provide excitation.

- **NdFeB Magnet:** high energy rare-earth magnet
- **Ferrite Magnet:** low-cost magnet
- **Demagnetisation:** loss of magnetism by heat or field

### BLDC Motor

Electronic commutation replaces brushes.

- **BLDC Motor:** trapezoidal back EMF
- **Hall Sensor:** detects rotor position
- **Six-step Commutation:** switching sequence

### PMSM

Sinusoidal PM machines.

- **PMSM:** sinusoidal back EMF
- **Surface Mounted PM:** magnets on rotor surface
- **Interior PM:** magnets embedded, adds reluctance torque

### PM Generators

PM machines generate power.

- **PMSG:** wind turbine generator
- **Axial Flux Machine:** disc-shaped machine
- **Cogging Torque:** torque ripple from slotting

## Unit 4: Linear & Other Machines

### Linear Induction Motor

Linear motion directly.

- **LIM:** unrolled induction motor
- **End Effect:** losses at entry and exit
- **Applications:** maglev and conveyors

### Synchronous Reluctance Motor

Reluctance with distributed winding.

- **SynRM:** synchronous reluctance motor
- **Saliency Ratio:** Ld/Lq
- **Advantages:** no magnets, efficient

### Hysteresis & Universal Motors

Small special motors.

- **Hysteresis Motor:** constant torque from hysteresis
- **Universal Motor:** runs on AC and DC
- **Applications:** clocks and appliances

### Servo Motors & Tachogenerators

Control machines.

- **AC Servo Motor:** two-phase control motor
- **DC Servo Motor:** precise position control
- **Tachogenerator:** speed sensor

## Unit 5: Control & Applications

### Sensorless Control

Position estimation without sensors.

- **Back EMF Sensing:** detects zero crossings
- **Observer:** estimates rotor position
- **Applications:** fans and compressors

### Electric Vehicle Motors

EVs use special machines.

- **Traction Motor:** PMSM or induction motor
- **Field Weakening:** extends speed range
- **In-wheel Motor:** motor inside wheel

### Aerospace & Medical Machines

Special applications.

- **More Electric Aircraft:** electric actuators
- **Fault-tolerant Machine:** continues operating with faults
- **Medical Drives:** precision motors

### Machine Design Considerations

Design for performance.

- **Thermal Design:** cooling of machine
- **Efficiency Classes:** IE standards
- **Material Selection:** laminations and magnets

## Standard Textbooks

- *Special Electrical Machines* — E. G. Janardanan
- *Brushless Permanent Magnet and Reluctance Motor Drives* — T. J. E. Miller
- *Switched Reluctance Motor Drives* — R. Krishnan

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
