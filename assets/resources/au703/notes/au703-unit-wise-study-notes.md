# AU-704 Electric & Hybrid Vehicles — Unit-wise Study Notes

> EV architecture, motors, batteries, power electronics, charging and hybrid configurations.

## Unit 1: Introduction to Electric Vehicles

### History & Need for EVs

EVs reduce emissions and oil dependence.

- **Electric Vehicle:** vehicle propelled by electric motor from battery
- **Zero Tailpipe Emission:** EVs emit no exhaust
- **Well-to-wheel Efficiency:** efficiency from energy source to wheels

### EV Architecture

EV main components.

- **Battery Pack:** energy storage
- **Traction Motor:** drives wheels
- **Power Electronics Controller:** controls motor power

### EV Types

Electrified vehicles vary.

- **BEV:** battery electric vehicle
- **PHEV:** plug-in hybrid electric vehicle
- **FCEV:** fuel cell electric vehicle

### Vehicle Performance

EV dynamics follow road load.

- **Regenerative Braking:** motor recovers energy during braking
- **Range:** distance per full charge
- **Energy Consumption:** Wh per km

## Unit 2: Electric Motors for EVs

### DC Motors

DC motors were used in early EVs.

- **DC Series Motor:** high starting torque
- **Brushed DC Motor:** commutator and brushes
- **Speed Control:** varying armature voltage

### Induction Motors

Induction motors are rugged.

- **Induction Motor:** rotor current induced by stator field
- **Slip:** (Ns − N)/Ns
- **Field-oriented Control:** vector control of induction motors

### Permanent Magnet Motors

PM motors are efficient and compact.

- **PMSM:** permanent magnet synchronous motor
- **BLDC Motor:** brushless DC motor with electronic commutation
- **Rare Earth Magnets:** neodymium magnets used in PM motors

### Switched Reluctance Motors

SRM avoids magnets.

- **SRM:** switched reluctance motor
- **Torque Ripple:** drawback of SRM
- **Rugged Rotor:** no windings or magnets on rotor

## Unit 3: Batteries & Energy Storage

### Battery Types

Battery chemistry decides performance.

- **Li-ion Battery:** high energy density; common in EVs
- **LFP:** lithium iron phosphate; safe and long life
- **NMC:** nickel manganese cobalt with high energy density

### Battery Parameters

Parameters describe batteries.

- **State of Charge:** remaining capacity as percentage
- **Depth of Discharge:** fraction of capacity used
- **C-rate:** charge or discharge current relative to capacity

### Battery Management System

BMS protects and balances cells.

- **BMS:** monitors voltage, current and temperature
- **Cell Balancing:** equalises cell charge
- **Thermal Runaway:** uncontrolled heating leading to fire

### Other Storage Devices

Supplementary storage.

- **Supercapacitor:** high power density storage
- **Flywheel Storage:** kinetic energy storage
- **Hybrid Energy Storage:** battery with supercapacitor

## Unit 4: Power Electronics & Charging

### Power Converters

Converters manage power flow.

- **DC-DC Converter:** changes DC voltage levels
- **Inverter:** converts DC to AC for motor
- **Bidirectional Converter:** allows regenerative flow

### Motor Drives

Drives control motor torque and speed.

- **PWM Inverter:** controls AC output by pulse width
- **IGBT:** power switch used in inverters
- **SiC MOSFET:** wide-bandgap switch with lower losses

### EV Charging

Charging levels differ in power.

- **AC Charging:** on-board charger converts AC to DC
- **DC Fast Charging:** off-board charger supplies DC directly
- **Charging Connector:** e.g. CCS2 and Type 2

### Charging Infrastructure

Infrastructure supports EV adoption.

- **Charging Station:** public EV charging point
- **Battery Swapping:** replacing depleted battery quickly
- **Vehicle-to-Grid:** EV feeds power back to grid

## Unit 5: Hybrid Vehicles

### Hybrid Concepts

Hybrids combine engine and motor.

- **HEV:** hybrid electric vehicle
- **Degree of Hybridisation:** motor power / total power
- **Mild Hybrid:** small motor assisting engine

### Series Hybrid

Engine drives generator only.

- **Series Hybrid:** engine charges battery; motor drives wheels
- **Range Extender:** small engine generating electricity
- **Advantage:** engine runs at optimal point

### Parallel Hybrid

Engine and motor both drive wheels.

- **Parallel Hybrid:** mechanical coupling of engine and motor
- **Torque Coupling:** combining torque from both sources
- **Advantage:** fewer energy conversions

### Series-Parallel Hybrid & Control

Power-split systems combine both.

- **Power-split Hybrid:** planetary gear splits engine power
- **Energy Management Strategy:** decides power split
- **Toyota Hybrid System:** well-known power-split design

## Standard Textbooks

- *Modern Electric, Hybrid Electric and Fuel Cell Vehicles* — Ehsani, Gao & Emadi
- *Electric and Hybrid Vehicles* — Tom Denton
- *Electric Vehicle Technology Explained* — James Larminie & John Lowry

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
