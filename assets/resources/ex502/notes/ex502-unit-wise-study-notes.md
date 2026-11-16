# EX-502 Power Electronics — Unit-wise Study Notes

> Power semiconductor devices, controlled rectifiers, choppers, inverters, AC voltage controllers and cycloconverters.

## Unit 1: Power Semiconductor Devices

### Power Diodes & Thyristors

Devices switch high power.

- **Power Diode:** uncontrolled two-layer switch
- **SCR:** four-layer PNPN device turned on by gate
- **Holding Current:** minimum current to stay on

### SCR Characteristics & Turn-on

SCRs have distinct operating modes.

- **Forward Blocking Mode:** off state with forward voltage
- **Latching Current:** minimum current to latch on
- **Gate Triggering:** turning on by gate pulse

### Commutation of SCR

SCRs need external turn-off.

- **Natural Commutation:** AC supply reverses current
- **Forced Commutation:** circuit forces current to zero
- **Turn-off Time:** time to regain blocking

### Modern Power Devices

Fully controllable devices.

- **Power MOSFET:** fast switching, low voltage
- **IGBT:** combines MOSFET gate and BJT conduction
- **GTO:** gate turn-off thyristor

## Unit 2: Controlled Rectifiers

### Single-phase Half-wave Converter

Phase control varies DC output.

- **Firing Angle:** delay α before triggering
- **Average Output:** Vdc = (Vm/2π)(1 + cos α) for R load
- **Freewheeling Diode:** provides path for inductive current

### Single-phase Full Converters

Full-wave control gives higher output.

- **Full Converter:** Vdc = (2Vm/π) cos α
- **Semi Converter:** mix of SCRs and diodes
- **Inversion Mode:** α > 90° returns power to source

### Three-phase Converters

Three-phase gives smoother DC.

- **Three-phase Full Converter:** Vdc = (3√3 Vm/π) cos α
- **Six-pulse Output:** lower ripple
- **Overlap Angle:** due to source inductance

### Converter Performance

Quality of input and output.

- **Input Power Factor:** depends on firing angle
- **Harmonics:** non-sinusoidal input current
- **Dual Converter:** two converters for four-quadrant operation

## Unit 3: DC-DC Converters (Choppers)

### Chopper Principle

Choppers control DC voltage.

- **Chopper:** DC-DC switching converter
- **Duty Ratio:** D = Ton/T
- **Step-down Chopper:** Vo = D Vs

### Chopper Control Strategies

Output controlled by timing.

- **Constant Frequency:** PWM control
- **Variable Frequency:** frequency modulation
- **Current Limit Control:** switch on current limits

### Chopper Configurations

Quadrants of operation.

- **Type A Chopper:** first quadrant
- **Type E Chopper:** four-quadrant
- **Regenerative Braking:** power returned to source

### Switched-mode Supplies

SMPS convert efficiently.

- **Buck Converter:** step-down
- **Boost Converter:** Vo = Vs/(1 − D)
- **Buck-Boost Converter:** inverted output of variable magnitude

## Unit 4: Inverters

### Single-phase Inverters

Inverters convert DC to AC.

- **Half-bridge Inverter:** output ± Vs/2
- **Full-bridge Inverter:** output ± Vs
- **Square Wave Output:** contains harmonics

### Three-phase Inverters

Three-phase output for motors.

- **180° Conduction:** each switch conducts half cycle
- **120° Conduction:** two switches conduct at a time
- **Six-step Inverter:** basic three-phase inverter

### PWM Techniques

PWM reduces harmonics.

- **Sinusoidal PWM:** compares sine with triangular carrier
- **Modulation Index:** ratio of reference to carrier amplitude
- **Space Vector PWM:** better DC bus utilisation

### Current Source & Resonant Inverters

Other inverter types.

- **CSI:** current source inverter
- **Resonant Inverter:** LC circuit enables soft switching
- **Applications:** induction heating and UPS

## Unit 5: AC Voltage Controllers & Cycloconverters

### AC Voltage Controllers

Control RMS AC voltage.

- **Phase Control:** varying firing angle each half cycle
- **Integral Cycle Control:** switching whole cycles
- **TRIAC:** bidirectional thyristor for AC control

### Applications of AC Controllers

Controllers serve many loads.

- **Fan Regulator:** TRIAC-based speed control
- **Light Dimmer:** phase-controlled lamp brightness
- **Soft Starter:** reduces motor starting current

### Cycloconverters

Direct AC-AC frequency conversion.

- **Cycloconverter:** converts frequency without DC link
- **Step-down Cycloconverter:** output frequency lower than input
- **Applications:** large low-speed drives

### Protection of Devices

Devices need protection.

- **Snubber Circuit:** limits dv/dt
- **di/dt Protection:** series inductor
- **Heat Sink:** removes device heat

## Standard Textbooks

- *Power Electronics* — P. S. Bimbhra
- *Power Electronics: Circuits, Devices and Applications* — Muhammad H. Rashid
- *Power Electronics* — Mohan, Undeland & Robbins

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
