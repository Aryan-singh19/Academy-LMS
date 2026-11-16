# EC-503(B) Mobile Communication — Unit-wise Study Notes

> Cellular concepts, frequency reuse, propagation, multiple access, GSM, CDMA and 4G/5G systems.

## Unit 1: Cellular Concept

### Evolution of Mobile Systems

Mobile systems evolved from analog to broadband.

- **1G:** analog voice systems such as AMPS
- **2G:** digital voice systems such as GSM and IS-95
- **4G LTE:** all-IP broadband using OFDMA

### Frequency Reuse

Reuse lets limited spectrum serve many users.

- **Cell:** geographic area served by one base station
- **Cluster Size:** N = i² + ij + j²
- **Co-channel Reuse Ratio:** Q = D/R = √(3N)

### Channel Assignment & Handoff

Channels are assigned and calls handed over.

- **Fixed Channel Assignment:** each cell gets a fixed set of channels
- **Handoff:** transferring an ongoing call to another cell
- **Hysteresis Margin:** threshold preventing rapid ping-pong handoffs

### Capacity Improvement

Techniques increase cellular capacity.

- **Cell Splitting:** dividing cells into smaller ones
- **Sectoring:** directional antennas reduce co-channel interference
- **Microcell Zone Concept:** zones under one base station reduce handoffs

## Unit 2: Mobile Radio Propagation

### Large-scale Path Loss

Average received power falls with distance.

- **Free-space Path Loss:** proportional to (4πd/λ)²
- **Path Loss Exponent:** n, 2 in free space, larger in cities
- **Okumura-Hata Model:** empirical urban path loss model

### Reflection, Diffraction & Scattering

Mechanisms let signals reach shadowed areas.

- **Two-ray Ground Model:** direct and ground-reflected paths
- **Knife-edge Diffraction:** bending over obstacles
- **Scattering:** reflection from rough surfaces and small objects

### Small-scale Fading

Multipath causes rapid fluctuations.

- **Multipath Fading:** constructive and destructive interference of paths
- **Rayleigh Fading:** fading with no line-of-sight component
- **Rician Fading:** fading with a dominant line-of-sight path

### Doppler & Delay Spread

Motion and multipath set channel parameters.

- **Doppler Shift:** fd = v/λ cos θ
- **Coherence Bandwidth:** range over which channel is flat; about 1/delay spread
- **Coherence Time:** time over which channel is constant

## Unit 3: Multiple Access & Diversity

### FDMA & TDMA

Users share by frequency or time.

- **FDMA:** each user gets a separate frequency band
- **TDMA:** users share a channel in time slots
- **Guard Time:** gap preventing slot overlap

### CDMA & OFDMA

Codes or subcarriers separate users.

- **CDMA:** users separated by orthogonal spreading codes
- **Near-far Problem:** strong nearby users swamp distant ones; solved by power control
- **OFDMA:** users assigned groups of orthogonal subcarriers

### Diversity Techniques

Diversity combats fading.

- **Space Diversity:** multiple antennas separated in space
- **Maximal Ratio Combining:** weights branches by SNR
- **RAKE Receiver:** combines multipath components in CDMA

### MIMO Basics

Multiple antennas increase capacity.

- **MIMO:** multiple-input multiple-output antenna systems
- **Spatial Multiplexing:** independent streams on different antennas
- **Beamforming:** steering energy towards a user

## Unit 4: GSM & CDMA Systems

### GSM Architecture

GSM is the widely used 2G standard.

- **BTS:** base transceiver station
- **MSC:** mobile switching centre routing calls
- **HLR and VLR:** home and visitor location registers

### GSM Channels & Frame Structure

GSM uses TDMA frames on 200 kHz carriers.

- **TDMA Frame:** 8 time slots on each carrier
- **Traffic Channel:** carries speech or data
- **Control Channel:** carries signalling, e.g. BCCH

### GPRS & EDGE

2.5G added packet data.

- **GPRS:** general packet radio service over GSM
- **EDGE:** enhanced data rates using 8-PSK
- **SGSN:** serving GPRS support node

### IS-95 & CDMA2000

CDMA standards use spread spectrum.

- **IS-95:** first CDMA cellular standard
- **Soft Handoff:** mobile connected to two base stations at once
- **Walsh Codes:** orthogonal codes separating channels

## Unit 5: 3G, 4G & 5G

### UMTS & WCDMA

3G introduced wideband CDMA.

- **UMTS:** universal mobile telecommunication system
- **WCDMA:** 5 MHz wideband CDMA air interface
- **HSPA:** high-speed packet access improving 3G data rates

### LTE Architecture

LTE is an all-IP network.

- **eNodeB:** LTE base station
- **EPC:** evolved packet core
- **OFDMA Downlink:** LTE downlink multiple access

### 5G Technologies

5G targets higher speed, lower latency and massive connectivity.

- **eMBB:** enhanced mobile broadband
- **URLLC:** ultra-reliable low-latency communication
- **mmWave:** millimetre-wave bands for very high capacity

### Mobile IP & Wireless Standards

Supporting protocols and standards.

- **Mobile IP:** keeps IP address while moving between networks
- **Wi-Fi 802.11:** wireless LAN standard family
- **Bluetooth:** short-range wireless personal area network

## Standard Textbooks

- *Wireless Communications: Principles and Practice* — Theodore S. Rappaport
- *Mobile Cellular Telecommunications* — William C. Y. Lee
- *Wireless Communications* — Andrea Goldsmith

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
