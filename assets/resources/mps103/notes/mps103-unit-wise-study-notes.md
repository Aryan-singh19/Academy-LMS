# MPS-103 Advanced Power Electronic Converters — Unit-wise Study Notes

> Switching devices, DC-DC converter design, multilevel inverters, PWM, grid-connected converters and control.

## Unit 1: Power Semiconductor Devices

### Silicon Devices

Workhorse switches.

- **IGBT:** high-voltage high-current switch
- **Power MOSFET:** fast switching at low voltage
- **Safe Operating Area:** voltage-current limits

### Wide Bandgap Devices

SiC and GaN improve efficiency.

- **SiC MOSFET:** high voltage, high temperature
- **GaN HEMT:** very fast switching
- **Switching Loss:** energy lost during transitions

### Gate Drivers

Driving switches correctly.

- **Gate Driver:** provides gate voltage and current
- **Dead Time:** prevents shoot-through
- **Isolation:** galvanic isolation of gate signals

### Thermal Management

Removing device heat.

- **Junction Temperature:** device internal temperature
- **Thermal Resistance:** °C/W from junction to ambient
- **Heat Sink Design:** based on losses

## Unit 2: DC-DC Converters

### Non-isolated Converters

Basic topologies.

- **Buck Converter:** Vo = D Vin
- **Boost Converter:** Vo = Vin/(1 − D)
- **CCM vs DCM:** continuous or discontinuous inductor current

### Isolated Converters

Transformer-isolated topologies.

- **Flyback Converter:** stores energy in coupled inductor
- **Forward Converter:** transfers energy directly
- **Full-bridge Converter:** high power isolated

### Resonant Converters

Soft switching reduces losses.

- **ZVS:** zero voltage switching
- **ZCS:** zero current switching
- **LLC Converter:** resonant converter for high efficiency

### Converter Design

Component sizing.

- **Inductor Design:** ripple current specification
- **Output Capacitor:** ripple voltage specification
- **Magnetics Design:** core selection and winding

## Unit 3: Inverters & Multilevel Converters

### Voltage Source Inverters

DC to AC conversion.

- **Three-phase VSI:** six-switch bridge
- **Sinusoidal PWM:** triangle carrier comparison
- **Overmodulation:** modulation index above 1

### Space Vector PWM

Efficient modulation.

- **Space Vector:** represents switching states
- **SVPWM:** 15% better DC bus utilisation
- **Sector Identification:** locates reference vector

### Multilevel Inverters

More levels, better waveforms.

- **NPC Inverter:** neutral point clamped
- **Cascaded H-bridge:** series H-bridge cells
- **Flying Capacitor Inverter:** capacitor-clamped levels

### MMC

Modular multilevel converter.

- **MMC:** submodules in arms
- **Submodule:** half-bridge with capacitor
- **Capacitor Voltage Balancing:** key MMC control

## Unit 4: Grid-connected Converters

### Grid Synchronisation

Converters lock to grid.

- **PLL:** phase-locked loop for grid angle
- **SRF-PLL:** synchronous reference frame PLL
- **Grid Code:** connection requirements

### Current Control

Regulating injected current.

- **dq Current Control:** PI control in rotating frame
- **Proportional-resonant Control:** tracks AC references
- **Decoupling:** cross-coupling compensation

### Filters

Reducing harmonics.

- **L Filter:** simple inductor filter
- **LCL Filter:** better attenuation, risk of resonance
- **Active Damping:** control-based resonance damping

### Grid-forming Converters

Converters that set voltage.

- **Grid-following Converter:** injects current following grid
- **Grid-forming Converter:** establishes voltage and frequency
- **Virtual Synchronous Machine:** emulates inertia

## Unit 5: Applications & Control

### Renewable Converters

Solar and wind interfaces.

- **PV Inverter:** with MPPT
- **Wind Converter:** back-to-back converter
- **Battery Converter:** bidirectional DC-DC

### Motor Drive Converters

Inverters for motors.

- **Vector Control:** field-oriented control
- **DTC:** direct torque control
- **Regenerative Drive:** returns energy to grid

### EV Chargers

Charging infrastructure converters.

- **On-board Charger:** AC to DC in vehicle
- **DC Fast Charger:** high-power off-board converter
- **Wireless Charging:** inductive power transfer

### Modelling & Simulation

Analysing converter behaviour.

- **State-space Averaging:** averaged converter model
- **Small-signal Model:** linearised around operating point
- **PLECS/MATLAB:** converter simulation tools

## Standard Textbooks

- *Power Electronics* — Mohan, Undeland & Robbins
- *Fundamentals of Power Electronics* — Erickson & Maksimovic
- *Grid Converters for Photovoltaic and Wind Power Systems* — Teodorescu, Liserre & Rodriguez

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
