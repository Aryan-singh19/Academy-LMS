# EC-702(A) Microwave Engineering — Unit-wise Study Notes

> Waveguides, microwave components, S-parameters, microwave tubes, solid-state devices and measurements.

## Unit 1: Waveguides

### Rectangular Waveguides

Waveguides carry microwaves with low loss.

- **TE Mode:** transverse electric, no E field along propagation
- **Dominant Mode:** TE10 in rectangular waveguide
- **Cut-off Wavelength:** λc = 2a for TE10

### Waveguide Parameters

Propagation depends on frequency above cut-off.

- **Guide Wavelength:** λg = λ0 / √(1 − (λ0/λc)²)
- **Phase Velocity:** greater than c in a waveguide
- **Group Velocity:** less than c; vp·vg = c²

### Circular Waveguides & Cavities

Other guides and resonators.

- **Circular Waveguide Dominant Mode:** TE11
- **Cavity Resonator:** closed waveguide section resonating at specific frequencies
- **Q of Cavity:** very high, used in filters and oscillators

### Planar Transmission Lines

Printed lines suit integrated circuits.

- **Microstrip:** strip conductor over ground plane on dielectric
- **Stripline:** conductor between two ground planes
- **Effective Permittivity:** accounts for fields in air and dielectric

## Unit 2: Microwave Components & S-parameters

### Scattering Parameters

S-parameters describe microwave networks.

- **S-parameter:** ratio of reflected or transmitted wave to incident wave
- **S11:** input reflection coefficient
- **Lossless Network:** S matrix is unitary

### Tee Junctions

Tees split or combine power.

- **E-plane Tee:** series tee; outputs out of phase
- **H-plane Tee:** shunt tee; outputs in phase
- **Magic Tee:** hybrid with isolated E and H arms

### Directional Couplers

Couplers sample power in one direction.

- **Coupling Factor:** C = 10 log(P1/P3)
- **Directivity:** 10 log(P3/P4)
- **Isolation:** coupling plus directivity

### Ferrite Devices

Ferrites provide non-reciprocal behaviour.

- **Isolator:** passes power one way, absorbs reverse
- **Circulator:** routes power port 1 to 2, 2 to 3, 3 to 1
- **Faraday Rotation:** rotation of polarisation in magnetised ferrite

## Unit 3: Microwave Tubes

### Limitations of Conventional Tubes

Ordinary tubes fail at microwave frequencies.

- **Transit Time Effect:** electron transit comparable to RF period
- **Lead Inductance:** limits high-frequency operation
- **Interelectrode Capacitance:** shunts signal at high frequency

### Klystrons

Velocity modulation and bunching amplify microwaves.

- **Two-cavity Klystron:** amplifier using buncher and catcher cavities
- **Reflex Klystron:** single-cavity oscillator with repeller
- **Velocity Modulation:** varying electron speed to form bunches

### Magnetron

Crossed-field tube for high-power oscillation.

- **Cavity Magnetron:** crossed E and B fields generate microwaves
- **π-mode:** adjacent cavities 180° out of phase
- **Application:** radar and microwave ovens

### Travelling Wave Tube

TWT gives broadband amplification.

- **TWT:** electron beam interacts with slowed wave on a helix
- **Slow-wave Structure:** helix reduces wave velocity to match beam
- **Broadband Gain:** TWT amplifies over an octave

## Unit 4: Solid-state Microwave Devices

### Microwave Transistors

Special transistors work at GHz.

- **GaAs MESFET:** metal-semiconductor FET for microwave amplifiers
- **HEMT:** high electron mobility transistor with low noise
- **HBT:** heterojunction bipolar transistor

### Transferred Electron Devices

Gunn effect gives negative resistance.

- **Gunn Diode:** uses transferred electron effect in GaAs
- **Negative Differential Resistance:** current falls as voltage rises
- **Gunn Oscillator:** microwave source using Gunn diode

### Avalanche Transit-time Devices

Avalanche and transit time give oscillation.

- **IMPATT Diode:** impact ionisation avalanche transit-time diode
- **TRAPATT:** trapped plasma mode with high efficiency
- **BARITT:** barrier injection transit time, low noise

### PIN & Varactor Applications

Diodes switch and tune microwave circuits.

- **PIN Diode:** used as microwave switch and attenuator
- **Varactor:** voltage-variable capacitance for tuning
- **Parametric Amplifier:** low-noise amplifier using a varactor

## Unit 5: Microwave Measurements & Applications

### Power Measurement

Microwave power is measured thermally.

- **Bolometer:** resistance changes with absorbed power
- **Thermistor Mount:** power meter sensor
- **Calorimetric Method:** measures heating for high power

### VSWR & Impedance Measurement

Slotted lines find standing waves.

- **Slotted Line:** probe samples standing wave along a line
- **Double Minimum Method:** measures high VSWR
- **Network Analyser:** measures S-parameters directly

### Frequency & Attenuation Measurement

Wavemeters and substitution methods.

- **Cavity Wavemeter:** absorption dip at resonance
- **Attenuation:** ratio of input to output power in dB
- **Insertion Loss:** loss when a device is inserted

### Microwave Applications

Microwaves serve communication and sensing.

- **Radar:** detects range using echo time, R = cτ/2
- **Microwave Link:** line-of-sight relay communication
- **Microwave Heating:** dielectric heating of water molecules

## Standard Textbooks

- *Microwave Engineering* — David M. Pozar
- *Microwave Devices and Circuits* — Samuel Y. Liao
- *Foundations for Microwave Engineering* — R. E. Collin

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
