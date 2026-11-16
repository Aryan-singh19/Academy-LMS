# EC-304 Electronic Devices — Unit-wise Study Notes

> Semiconductor physics, PN junction, BJT, FET and MOSFET, special diodes and optoelectronic devices.

## Unit 1: Semiconductor Material Properties

### Energy Bands & Carriers

Band theory explains conductors, insulators and semiconductors.

- **Energy Band Gap:** energy gap between valence and conduction bands; about 1.1 eV for Si
- **Intrinsic Semiconductor:** pure semiconductor with equal electrons and holes
- **Fermi Level:** energy with 50% occupation probability

### Doping & Extrinsic Semiconductors

Impurities control conductivity.

- **N-type:** doped with pentavalent donors; electrons majority
- **P-type:** doped with trivalent acceptors; holes majority
- **Mass Action Law:** n·p = ni²

### Carrier Transport

Carriers move by drift and diffusion.

- **Drift Current:** carrier flow due to an electric field
- **Diffusion Current:** flow from high to low concentration
- **Mobility:** drift velocity per unit electric field

### Hall Effect & Carrier Lifetime

Measurements reveal carrier type and density.

- **Hall Effect:** transverse voltage when current flows in a magnetic field
- **Hall Coefficient:** RH = 1/(nq)
- **Recombination:** electron filling a hole, ending both carriers

## Unit 2: PN Junction Diode

### PN Junction Formation

A depletion region forms at the junction.

- **Depletion Region:** region empty of mobile carriers near the junction
- **Barrier Potential:** about 0.7 V for Si and 0.3 V for Ge
- **Built-in Field:** field opposing further diffusion

### Diode Characteristics

Forward and reverse bias give rectifying behaviour.

- **Diode Equation:** I = Is(e^(V/ηVT) − 1)
- **Reverse Saturation Current:** small current under reverse bias
- **Dynamic Resistance:** rd = ηVT/I

### Diode Capacitances & Breakdown

Junctions store charge and break down at high reverse voltage.

- **Transition Capacitance:** depletion capacitance under reverse bias
- **Diffusion Capacitance:** dominant capacitance under forward bias
- **Avalanche Breakdown:** carrier multiplication at high reverse voltage

### Rectifiers & Clippers

Diodes convert AC to DC and shape waveforms.

- **Half-wave Rectifier:** ripple factor 1.21, efficiency 40.6%
- **Bridge Rectifier:** full-wave with four diodes; efficiency 81.2%
- **Clipper:** circuit removing part of a waveform

## Unit 3: Bipolar Junction Transistor

### BJT Construction & Operation

A BJT is two back-to-back junctions controlled by base current.

- **BJT:** three-terminal current-controlled device
- **Current Gain β:** IC/IB
- **Alpha α:** IC/IE = β/(1 + β)

### BJT Configurations

Each configuration offers different gains and impedances.

- **Common Emitter:** high voltage and current gain; phase inversion
- **Common Base:** low input impedance; current gain near 1
- **Common Collector:** emitter follower with voltage gain near 1

### BJT Biasing

Biasing fixes a stable operating point.

- **Q-point:** DC operating point on the load line
- **Voltage Divider Bias:** most stable common biasing method
- **Stability Factor:** S = ∂IC/∂ICO

### BJT Small-signal Models

Models analyse amplifier behaviour.

- **h-parameter Model:** hybrid parameters hie, hfe, hre, hoe
- **re Model:** small-signal model with re = 26 mV/IE
- **Early Effect:** base-width modulation with collector voltage

## Unit 4: Field Effect Transistors

### JFET

Junction FETs are voltage-controlled.

- **JFET:** field effect transistor controlled by gate-junction reverse bias
- **Pinch-off Voltage:** VGS at which the channel closes
- **Shockley Equation:** ID = IDSS(1 − VGS/VP)²

### MOSFET

MOSFETs use an insulated gate.

- **Enhancement MOSFET:** channel induced when VGS exceeds threshold
- **Depletion MOSFET:** channel exists at VGS = 0
- **Threshold Voltage:** minimum VGS to form an inversion channel

### FET Biasing & Small-signal Model

FET amplifiers are biased and modelled like BJTs.

- **Self Bias:** source resistor sets VGS
- **Transconductance:** gm = ΔID/ΔVGS
- **Common Source Amplifier:** FET amplifier with gain −gm·RD

### CMOS & Comparison of Devices

CMOS pairs NMOS and PMOS devices.

- **CMOS Inverter:** complementary pair with negligible static current
- **BJT vs FET:** BJT current controlled, FET voltage controlled
- **Channel Length Modulation:** ID increases slightly with VDS in saturation

## Unit 5: Special Semiconductor Devices

### Zener Diode & Regulators

Zener breakdown provides voltage regulation.

- **Zener Diode:** heavily doped diode operating in reverse breakdown
- **Zener Regulator:** keeps load voltage constant
- **Zener Breakdown:** tunnelling breakdown below about 5 V

### Tunnel & Varactor Diodes

Special diodes exploit unusual characteristics.

- **Tunnel Diode:** negative resistance region from quantum tunnelling
- **Varactor Diode:** capacitance varies with reverse voltage
- **Schottky Diode:** metal-semiconductor diode with fast switching

### Optoelectronic Devices

Devices convert light and electricity.

- **LED:** emits light when forward biased
- **Photodiode:** generates current proportional to light
- **Solar Cell:** large-area PN junction producing power from light

### Thyristors

PNPN devices switch large power.

- **SCR:** silicon controlled rectifier turned on by a gate pulse
- **UJT:** unijunction transistor used in relaxation oscillators
- **DIAC and TRIAC:** bidirectional switching devices for AC control

## Standard Textbooks

- *Solid State Electronic Devices* — Streetman & Banerjee
- *Electronic Devices and Circuit Theory* — Boylestad & Nashelsky
- *Integrated Electronics* — Millman & Halkias

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
