# EC-802(B) Wireless Communication — Unit-wise Study Notes

> Wireless channels, fading, diversity, OFDM, MIMO, multiple access and wireless standards.

## Unit 1: Wireless Channel

### Path Loss Models

Signal power drops with distance.

- **Free Space Model:** Friis equation Pr = PtGtGrλ²/(4πd)²
- **Log-distance Model:** path loss grows with 10n log(d)
- **Shadowing:** log-normal variation due to obstacles

### Multipath Fading

Multiple paths cause rapid fades.

- **Flat Fading:** signal bandwidth smaller than coherence bandwidth
- **Frequency-selective Fading:** bandwidth larger than coherence bandwidth
- **Fast Fading:** channel changes within a symbol period

### Doppler Spread & Coherence Time

Motion causes time variation.

- **Doppler Spread:** spectral broadening due to motion
- **Coherence Time:** Tc ≈ 0.423/fm
- **Slow Fading:** channel constant over many symbols

### Channel Models

Statistical models describe fading.

- **Rayleigh Model:** no LOS, envelope Rayleigh distributed
- **Rician K-factor:** ratio of LOS power to scattered power
- **Jakes Model:** classical Doppler spectrum model

## Unit 2: Diversity & Equalisation

### Diversity Types

Diversity provides independent copies.

- **Time Diversity:** repeats or interleaves over time
- **Frequency Diversity:** sends on separated frequencies
- **Antenna Diversity:** multiple spaced antennas

### Combining Techniques

Diversity branches are combined.

- **Selection Combining:** picks the strongest branch
- **Equal Gain Combining:** co-phases and adds branches
- **Maximal Ratio Combining:** optimal SNR weighting

### Equalisation

Equalisers fight ISI in frequency-selective channels.

- **Linear Equaliser:** FIR filter reversing channel
- **Decision Feedback Equaliser:** uses past decisions to cancel ISI
- **MLSE:** maximum-likelihood sequence estimation

### Channel Estimation

Receivers estimate channel response.

- **Pilot Symbols:** known symbols for channel estimation
- **Training Sequence:** known preamble
- **Blind Estimation:** estimation without pilots

## Unit 3: OFDM & MIMO

### OFDM Principles

OFDM divides bandwidth into orthogonal subcarriers.

- **OFDM:** parallel orthogonal subcarriers implemented by IFFT/FFT
- **Subcarrier Spacing:** Δf = 1/T
- **Cyclic Prefix:** guard interval copied from symbol end to absorb delay spread

### OFDM Issues

OFDM has practical drawbacks.

- **PAPR:** high peak-to-average power ratio
- **Carrier Frequency Offset:** breaks subcarrier orthogonality
- **SC-FDMA:** lower-PAPR uplink scheme in LTE

### MIMO Channel & Capacity

Multiple antennas multiply capacity.

- **MIMO Capacity:** grows linearly with min(Nt, Nr)
- **Channel Matrix:** H describing all antenna paths
- **Spatial Multiplexing Gain:** parallel data streams

### Space-time Coding

Coding across antennas gives diversity.

- **Alamouti Code:** 2×1 space-time block code giving full diversity
- **Diversity Gain:** slope improvement of BER curve
- **Massive MIMO:** very large antenna arrays at base station

## Unit 4: Multiple Access & Spread Spectrum

### Multiple Access Techniques

Users share the spectrum.

- **FDMA:** separate frequencies
- **TDMA:** separate time slots
- **OFDMA:** separate subcarrier groups

### CDMA & Spread Spectrum

Codes separate users.

- **DSSS:** spreads data with fast PN chips
- **Processing Gain:** chip rate / bit rate
- **Power Control:** equalises received power to solve near-far problem

### Random Access

Users contend for the channel.

- **ALOHA:** transmit anytime; max throughput 18.4%
- **Slotted ALOHA:** transmissions in slots; max 36.8%
- **CSMA/CA:** carrier sense with collision avoidance used in Wi-Fi

### NOMA & Cognitive Radio

Newer access methods use spectrum efficiently.

- **NOMA:** non-orthogonal multiple access using power domain
- **Cognitive Radio:** senses and uses idle spectrum
- **Spectrum Sensing:** detecting presence of primary users

## Unit 5: Wireless Standards & Networks

### Wireless LAN

IEEE 802.11 defines Wi-Fi.

- **802.11ac:** Wi-Fi 5 with MU-MIMO in 5 GHz
- **802.11ax:** Wi-Fi 6 with OFDMA
- **Access Point:** node connecting wireless clients to the network

### WPAN Technologies

Short-range networks connect personal devices.

- **Bluetooth:** 2.4 GHz WPAN with frequency hopping
- **Zigbee:** low-power mesh networking
- **UWB:** ultra-wideband short-range high-rate radio

### Cellular Standards

Cellular generations evolved rapidly.

- **LTE:** 4G OFDMA-based standard
- **5G NR:** new radio supporting mmWave and low latency
- **Network Slicing:** virtual networks tailored to services

### Wireless Sensor Networks

Sensor nodes monitor environments.

- **WSN:** network of battery-powered sensing nodes
- **Clustering:** cluster heads aggregate data, e.g. LEACH
- **Energy Efficiency:** key design goal for long lifetime

## Standard Textbooks

- *Wireless Communications* — Andrea Goldsmith
- *Fundamentals of Wireless Communication* — Tse & Viswanath
- *Wireless Communications: Principles and Practice* — Theodore S. Rappaport

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
