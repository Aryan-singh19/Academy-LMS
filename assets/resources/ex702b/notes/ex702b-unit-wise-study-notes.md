# EX-702(B) HVDC & FACTS — Unit-wise Study Notes

> HVDC transmission, converters, control, and flexible AC transmission devices such as SVC, STATCOM, TCSC and UPFC.

## Unit 1: HVDC Fundamentals

### HVDC vs HVAC

DC transmission suits long distances.

- **HVDC:** high-voltage direct current transmission
- **Break-even Distance:** about 600-800 km for overhead lines
- **Asynchronous Link:** connects grids of different frequency

### HVDC Link Types

Links differ in conductor arrangement.

- **Monopolar Link:** single conductor with earth return
- **Bipolar Link:** two conductors of opposite polarity
- **Back-to-back Link:** converters at same site

### HVDC Components

Converter stations contain key equipment.

- **Converter Transformer:** feeds converters
- **Smoothing Reactor:** reduces ripple
- **AC Filters:** remove harmonics and supply reactive power

### HVDC in India

Major projects.

- **Rihand-Dadri:** early bipolar HVDC link
- **Champa-Kurukshetra:** ±800 kV UHVDC
- **Raigarh-Pugalur:** large VSC-HVDC

## Unit 2: HVDC Converters & Control

### Line Commutated Converters

Thyristor bridges convert AC-DC.

- **Six-pulse Bridge:** basic Graetz bridge
- **Twelve-pulse Converter:** reduces harmonics
- **Overlap Angle:** due to commutation reactance

### Rectifier & Inverter Operation

Firing angle sets mode.

- **Rectifier Operation:** α < 90°
- **Inverter Operation:** extinction angle γ controlled
- **Commutation Failure:** inverter fails to commutate

### HVDC Control

Controls regulate current and voltage.

- **Constant Current Control:** at rectifier
- **Constant Extinction Angle Control:** at inverter
- **Power Reversal:** by reversing DC voltage

### VSC-HVDC

Voltage source converters offer flexibility.

- **VSC-HVDC:** uses IGBTs
- **MMC:** modular multilevel converter
- **Black Start Capability:** VSC can energise dead grid

## Unit 3: Reactive Power & FACTS Concepts

### Reactive Power Control

Reactive power controls voltage.

- **Reactive Power:** Q = V I sin φ
- **Shunt Compensation:** improves voltage profile
- **Series Compensation:** increases power transfer

### FACTS Concept

FACTS devices control power flow.

- **FACTS:** flexible AC transmission systems
- **Power Transfer Equation:** P = (V1V2/X) sin δ
- **Controllable Parameters:** voltage, impedance and angle

### Shunt Devices

Shunt devices inject reactive current.

- **SVC:** static VAR compensator using TCR and TSC
- **STATCOM:** static synchronous compensator using VSC
- **TCR:** thyristor controlled reactor

### Series Devices

Series devices change line impedance.

- **TCSC:** thyristor controlled series capacitor
- **SSSC:** static synchronous series compensator
- **Subsynchronous Resonance:** risk with series compensation

## Unit 4: Advanced FACTS

### UPFC

Unified controller controls all parameters.

- **UPFC:** unified power flow controller
- **Shunt and Series Converters:** share DC link
- **Independent P and Q Control:** key UPFC feature

### IPFC & Phase Shifters

Other power flow controllers.

- **IPFC:** interline power flow controller
- **Phase Shifting Transformer:** controls angle
- **TCPAR:** thyristor controlled phase angle regulator

### Stability Enhancement

FACTS improve stability.

- **Damping of Oscillations:** power oscillation damping control
- **Transient Stability Improvement:** rapid control
- **Voltage Stability:** support during contingencies

### Harmonics & Filters

Converters generate harmonics.

- **Characteristic Harmonics:** 12k ± 1 for 12-pulse
- **Passive Filter:** tuned LC filter
- **Active Filter:** injects compensating current

## Unit 5: Applications & Grid Integration

### Renewable Integration

HVDC and FACTS support renewables.

- **Offshore Wind Connection:** VSC-HVDC links
- **Green Energy Corridor:** Indian RE transmission
- **Grid Strength:** short circuit ratio

### Multi-terminal HVDC

Several converters on one DC network.

- **MTDC:** multi-terminal DC system
- **DC Circuit Breaker:** interrupts DC fault currents
- **DC Grid:** meshed DC network

### Power Quality Applications

Custom power devices.

- **DSTATCOM:** distribution STATCOM
- **DVR:** dynamic voltage restorer
- **Custom Power:** power quality improvement devices

### Economics & Planning

Choosing technology.

- **Cost Comparison:** terminal versus line costs
- **Right of Way:** HVDC needs narrower corridor
- **Losses:** lower line losses for HVDC

## Standard Textbooks

- *HVDC Power Transmission Systems* — K. R. Padiyar
- *Understanding FACTS* — N. G. Hingorani & L. Gyugyi
- *FACTS Controllers in Power Transmission and Distribution* — K. R. Padiyar

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
