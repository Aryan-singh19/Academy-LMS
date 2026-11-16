# ME-503(A) Mechatronics — Unit-wise Study Notes

> Sensors, actuators, signal conditioning, microcontrollers, PLCs and mechatronic system design.

## Unit 1: Introduction to Mechatronics

### Mechatronics Concept

Mechatronics integrates mechanics, electronics and computing.

- **Mechatronics:** synergistic integration of mechanical, electrical and computer engineering
- **Mechatronic System:** sensors, actuators, controller and mechanical structure
- **Examples:** washing machine, ABS brakes, robots

### Measurement Systems

Mechatronic systems sense and process signals.

- **Sensor:** element producing a signal related to the measured quantity
- **Transducer:** converts one energy form into another
- **Signal Processor:** conditions signals for display or control

### Control Systems in Mechatronics

Control systems decide actuator commands.

- **Closed-loop Control:** feedback compares output with reference
- **Sequential Control:** steps executed in sequence, e.g. washing cycle
- **Embedded Controller:** microcontroller controlling the system

### Design Process

Mechatronic design is integrated and concurrent.

- **Concurrent Design:** disciplines designed together
- **Traditional vs Mechatronic Design:** mechanical solutions replaced by electronics
- **Modelling and Simulation:** predicting behaviour before building

## Unit 2: Sensors & Transducers

### Displacement & Position Sensors

Position is sensed in many ways.

- **Optical Encoder:** disk with slots giving digital position
- **Incremental Encoder:** pulses for relative motion
- **Absolute Encoder:** unique code for each position

### Proximity & Velocity Sensors

Non-contact sensing of presence and speed.

- **Inductive Proximity Sensor:** detects metal objects
- **Hall Effect Sensor:** senses magnetic field
- **Tachogenerator:** voltage proportional to speed

### Force, Pressure & Temperature Sensors

Common physical quantities are sensed.

- **Piezoelectric Sensor:** charge produced by force
- **Strain Gauge Load Cell:** measures force
- **Thermocouple:** temperature sensor based on Seebeck effect

### Selection of Sensors

Sensors are chosen by specifications.

- **Range:** limits of measurable input
- **Response Time:** time to reach a stated output
- **Repeatability:** consistency of output for same input

## Unit 3: Signal Conditioning & Data Acquisition

### Operational Amplifier Circuits

Op-amps condition sensor signals.

- **Inverting Amplifier:** gain −Rf/Rin
- **Differential Amplifier:** amplifies difference of two inputs
- **Instrumentation Amplifier:** high CMRR for small signals

### Filtering & Protection

Filters remove noise; protection prevents damage.

- **Low-pass Filter:** removes high-frequency noise
- **Optical Isolation:** optocoupler separates circuits
- **Wheatstone Bridge:** converts resistance change to voltage

### ADC & DAC

Converters link analog and digital domains.

- **ADC:** converts analog signal into digital value
- **Resolution:** smallest change detectable, Vref/2^n
- **DAC:** converts digital value into analog signal

### Data Acquisition Systems

DAQ systems gather data for computers.

- **DAQ:** hardware and software acquiring signals
- **Sampling Rate:** samples per second
- **Multiplexer:** selects one of several channels

## Unit 4: Actuators

### Electrical Actuators

Motors convert electrical to mechanical energy.

- **DC Motor:** speed varies with armature voltage
- **Stepper Motor:** moves in discrete steps
- **Servo Motor:** closed-loop motor for precise positioning

### Hydraulic & Pneumatic Actuators

Fluid power provides large forces.

- **Hydraulic Cylinder:** linear actuator using oil pressure
- **Pneumatic Cylinder:** actuator using compressed air
- **Directional Control Valve:** controls flow direction

### Mechanical Actuation Systems

Mechanisms transmit actuator motion.

- **Ball Screw:** converts rotation into linear motion with low friction
- **Gear Train:** changes speed and torque
- **Cam:** converts rotary to reciprocating motion

### Solenoids & Smart Actuators

Simple and smart actuators.

- **Solenoid:** electromagnet producing linear motion
- **Piezo Actuator:** small precise motion from voltage
- **Shape Memory Alloy:** returns to shape when heated

## Unit 5: Controllers & PLC

### Microcontrollers in Mechatronics

MCUs run control algorithms.

- **Microcontroller:** CPU, memory and I/O on one chip
- **PWM:** pulse-width modulation for motor speed
- **Interrupt:** event-driven response

### Programmable Logic Controllers

PLCs control industrial processes.

- **PLC:** rugged computer for industrial control
- **Scan Cycle:** read inputs, execute program, update outputs
- **I/O Module:** interfaces field devices to PLC

### Ladder Logic Programming

PLC programs use ladder diagrams.

- **Ladder Diagram:** graphical PLC programming language
- **Timer Instruction:** delays an output
- **Latching:** output held on after input removed

### Mechatronic System Case Studies

Examples integrate all elements.

- **Automatic Camera:** autofocus and exposure control
- **Engine Management System:** ECU controls fuel and ignition
- **Pick-and-Place Robot:** sensors, actuators and controller automate handling

## Standard Textbooks

- *Mechatronics* — W. Bolton
- *Mechatronics: Principles, Concepts and Applications* — Mahalik
- *Introduction to Mechatronics and Measurement Systems* — Alciatore & Histand

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
