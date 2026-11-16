# EC-602 Antennas & Wave Propagation — Unit-wise Study Notes

> Antenna parameters, radiation from dipoles, arrays, practical antennas, measurements and propagation modes.

## Unit 1: Antenna Fundamentals

### Radiation Mechanism

Accelerating charges radiate electromagnetic energy.

- **Antenna:** transducer between guided and free-space waves
- **Near Field:** reactive region close to the antenna
- **Far Field:** region beyond 2D²/λ where pattern is stable

### Radiation Pattern & Beamwidth

Patterns show how power is distributed in space.

- **Radiation Pattern:** plot of radiated power versus direction
- **HPBW:** half-power beamwidth between −3 dB points
- **Side Lobe:** minor lobe outside the main beam

### Directivity, Gain & Efficiency

Parameters quantify antenna performance.

- **Directivity:** maximum radiation intensity over average
- **Gain:** directivity × radiation efficiency
- **Effective Aperture:** Ae = Gλ²/(4π)

### Radiation Resistance & Polarisation

Antennas present resistance and polarisation.

- **Radiation Resistance:** resistance accounting for radiated power
- **Input Impedance:** impedance seen at antenna terminals
- **Polarisation:** orientation of radiated E-field

## Unit 2: Wire Antennas

### Hertzian Dipole

Infinitesimal dipole is the basic radiator.

- **Hertzian Dipole:** short current element much smaller than λ
- **Radiation Resistance of Short Dipole:** 80π²(dl/λ)²
- **Doughnut Pattern:** sin θ field pattern

### Half-wave Dipole

Most common resonant antenna.

- **Half-wave Dipole:** length λ/2, radiation resistance about 73 Ω
- **Directivity of Dipole:** 1.64 (2.15 dBi)
- **Folded Dipole:** input resistance about 292 Ω

### Monopole & Loop Antennas

Ground planes and loops give other options.

- **Quarter-wave Monopole:** λ/4 over ground, about 36.5 Ω
- **Image Theory:** ground plane creates image doubling the antenna
- **Small Loop:** magnetic-dipole-like radiator used in receivers

### Travelling Wave Antennas

Non-resonant antennas give broadband operation.

- **Rhombic Antenna:** terminated travelling-wave antenna for HF
- **Beverage Antenna:** long wire for low-frequency reception
- **Helical Antenna:** circularly polarised in axial mode

## Unit 3: Antenna Arrays

### Array Fundamentals

Arrays combine elements for higher directivity.

- **Array Factor:** pattern of isotropic elements in the array
- **Pattern Multiplication:** total pattern = element pattern × array factor
- **Uniform Linear Array:** equal amplitude and spacing elements

### Broadside & End-fire Arrays

Phasing steers the main beam.

- **Broadside Array:** maximum perpendicular to array axis; zero phase difference
- **End-fire Array:** maximum along the array axis
- **Hansen-Woodyard Condition:** increased directivity for end-fire

### Binomial & Phased Arrays

Amplitude and phase control shape the beam.

- **Binomial Array:** amplitudes follow binomial coefficients; no side lobes
- **Phased Array:** electronically steers beam by phase shifters
- **Grating Lobe:** unwanted lobe when spacing exceeds λ

### Yagi-Uda Antenna

Parasitic arrays give directional gain.

- **Yagi-Uda:** driven dipole with reflector and directors
- **Reflector:** slightly longer parasitic element behind
- **Director:** shorter elements in front increasing gain

## Unit 4: Microwave & Special Antennas

### Horn Antennas

Flared waveguides radiate efficiently.

- **Horn Antenna:** flared waveguide for microwave radiation
- **Pyramidal Horn:** flared in both planes
- **Optimum Horn:** flare chosen for maximum gain with acceptable phase error

### Parabolic Reflectors

Reflectors produce narrow high-gain beams.

- **Parabolic Reflector:** focuses waves from feed into a plane wave
- **Focal Point:** feed location
- **Cassegrain Feed:** sub-reflector folds the optics

### Microstrip Patch Antennas

Planar antennas suit modern devices.

- **Microstrip Patch:** metal patch on dielectric over ground
- **Fringing Fields:** cause radiation from patch edges
- **Bandwidth Limitation:** patches are narrowband

### Antenna Measurements

Patterns and gain are measured in ranges.

- **Anechoic Chamber:** room lined with absorber for measurement
- **Gain Comparison Method:** compare with a standard gain antenna
- **Far-field Range:** test distance at least 2D²/λ

## Unit 5: Wave Propagation

### Ground Wave Propagation

Low-frequency waves follow the Earth's surface.

- **Ground Wave:** surface wave guided along Earth, used below 2 MHz
- **Surface Wave Attenuation:** increases with frequency
- **Vertical Polarisation:** preferred for ground waves

### Sky Wave Propagation

HF waves reflect from the ionosphere.

- **Ionosphere:** ionised layers D, E, F1, F2
- **Critical Frequency:** highest frequency reflected at vertical incidence
- **MUF:** maximum usable frequency = fc / cos θ

### Space Wave Propagation

VHF and above travel by line of sight.

- **Line-of-sight Range:** d ≈ 4.12(√h1 + √h2) km with heights in metres
- **Radio Horizon:** 4/3 Earth radius model for refraction
- **Duct Propagation:** trapping in atmospheric layers

### Skip Distance & Fading

Sky waves create zones and fluctuations.

- **Skip Distance:** minimum distance where sky wave returns
- **Virtual Height:** apparent reflection height
- **Fading:** signal strength variation due to multipath and ionosphere

## Standard Textbooks

- *Antenna Theory: Analysis and Design* — Constantine A. Balanis
- *Antennas and Wave Propagation* — J. D. Kraus
- *Electromagnetic Waves and Radiating Systems* — Jordan & Balmain

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
