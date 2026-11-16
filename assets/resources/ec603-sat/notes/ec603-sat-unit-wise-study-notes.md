# EC-603(C) Satellite Communication — Unit-wise Study Notes

> Orbital mechanics, satellite subsystems, link budget, multiple access, earth stations and satellite services.

## Unit 1: Orbital Mechanics

### Kepler's Laws

Satellite motion obeys Kepler's laws.

- **Kepler's First Law:** orbit is an ellipse with Earth at one focus
- **Kepler's Third Law:** T² proportional to a³
- **Orbital Period:** T = 2π√(a³/μ)

### Types of Orbits

Orbits suit different missions.

- **GEO:** geostationary orbit at about 35,786 km
- **LEO:** low Earth orbit, 500-2000 km
- **MEO:** medium Earth orbit used by GPS

### Orbital Elements & Perturbations

Parameters fix an orbit; forces disturb it.

- **Apogee:** farthest point from Earth
- **Perigee:** closest point to Earth
- **Orbital Perturbation:** drift due to Earth oblateness, Sun and Moon

### Look Angles & Launch

Ground antennas point using azimuth and elevation.

- **Azimuth:** horizontal pointing angle
- **Elevation Angle:** angle above the horizon
- **Launch Vehicle:** rocket placing satellite into orbit, e.g. PSLV, GSLV

## Unit 2: Satellite Subsystems

### Space Segment Overview

Satellites have bus and payload.

- **Payload:** transponders and antennas performing the mission
- **Bus:** power, attitude, thermal and propulsion subsystems
- **Spacecraft Lifetime:** limited by station-keeping fuel

### Attitude & Orbit Control

Satellites must point accurately and hold position.

- **AOCS:** attitude and orbit control system
- **Spin Stabilisation:** spinning body gives gyroscopic stability
- **Three-axis Stabilisation:** momentum wheels hold orientation

### Power & Thermal Subsystems

Energy and temperature are managed carefully.

- **Solar Panels:** primary power source
- **Batteries:** power during eclipse
- **Thermal Control:** keeps components within temperature limits

### Transponders & TTC

Transponders relay signals; TTC monitors the satellite.

- **Transponder:** receive, frequency-translate, amplify and retransmit
- **TWTA:** travelling wave tube amplifier for high power
- **TTC:** telemetry, tracking and command subsystem

## Unit 3: Link Design

### Frequency Bands

Satellite services use designated bands.

- **C-band:** 6 GHz uplink, 4 GHz downlink
- **Ku-band:** 14 GHz uplink, 12 GHz downlink
- **Ka-band:** 30/20 GHz with high capacity but rain fade

### Link Budget

Link budget accounts for all gains and losses.

- **EIRP:** Pt + Gt in dBW
- **Free Space Loss:** 20 log(4πd/λ) dB
- **Carrier-to-Noise Ratio:** C/N = EIRP + Gr − losses − N

### G/T & System Noise

Receive performance uses G/T.

- **G/T:** figure of merit of receiving station
- **System Noise Temperature:** antenna plus receiver noise temperature
- **Uplink vs Downlink:** overall C/N combines both links

### Atmospheric Effects

Propagation impairs higher bands.

- **Rain Attenuation:** signal loss from rain, severe above 10 GHz
- **Faraday Rotation:** rotation of polarisation in ionosphere
- **Scintillation:** rapid fluctuation due to atmospheric turbulence

## Unit 4: Multiple Access

### FDMA in Satellites

Carriers share transponder by frequency.

- **FDMA:** each earth station gets a frequency slot
- **Intermodulation:** products generated in non-linear amplifiers
- **Back-off:** reducing drive to keep amplifier linear

### TDMA in Satellites

Stations share by time bursts.

- **TDMA:** stations transmit in assigned time slots
- **Reference Burst:** timing reference for the frame
- **Preamble:** synchronisation bits at start of each burst

### CDMA & DAMA

Codes or demand assignment improve efficiency.

- **CDMA:** stations separated by spreading codes
- **DAMA:** demand assigned multiple access
- **SPADE:** early DAMA system for voice channels

### VSAT Networks

Small terminals connect to a hub.

- **VSAT:** very small aperture terminal
- **Star Topology:** all VSATs communicate via a hub
- **Mesh Topology:** VSATs communicate directly

## Unit 5: Earth Stations & Applications

### Earth Station Design

Earth stations transmit and receive.

- **Earth Station:** ground terminal with antenna and RF equipment
- **LNA:** low-noise amplifier at the receiver front end
- **Tracking:** keeping the antenna pointed at the satellite

### Satellite Broadcasting

Satellites deliver TV and radio.

- **DTH:** direct-to-home television
- **DVB-S2:** digital video broadcasting standard for satellite
- **Footprint:** coverage area on Earth

### Navigation Satellites

Constellations provide positioning.

- **GPS:** US global positioning system
- **NavIC:** Indian regional navigation satellite system
- **Trilateration:** position from distances to several satellites

### Remote Sensing & Mobile Satellite Services

Satellites observe Earth and serve mobile users.

- **Remote Sensing:** imaging Earth for resources and weather
- **INSAT:** Indian national satellite system
- **LEO Constellation:** many LEO satellites for global internet, e.g. Starlink

## Standard Textbooks

- *Satellite Communications* — Timothy Pratt, Charles Bostian & Jeremy Allnutt
- *Satellite Communication* — Dennis Roddy
- *Satellite Communications Systems* — Maral & Bousquet

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
