# EC-802(B) Wireless Communication — Question Bank with Answer Hints

## Unit 1: Wireless Channel

### Short answer (2-3 marks)

- **Q.** Define *Free Space Model*.  
  **Ans.** Friis equation Pr = PtGtGrλ²/(4πd)²
- **Q.** Define *Log-distance Model*.  
  **Ans.** path loss grows with 10n log(d)
- **Q.** Define *Shadowing*.  
  **Ans.** log-normal variation due to obstacles
- **Q.** Define *Flat Fading*.  
  **Ans.** signal bandwidth smaller than coherence bandwidth
- **Q.** Define *Frequency-selective Fading*.  
  **Ans.** bandwidth larger than coherence bandwidth
- **Q.** Define *Fast Fading*.  
  **Ans.** channel changes within a symbol period
- **Q.** Define *Doppler Spread*.  
  **Ans.** spectral broadening due to motion
- **Q.** Define *Coherence Time*.  
  **Ans.** Tc ≈ 0.423/fm
- **Q.** Define *Slow Fading*.  
  **Ans.** channel constant over many symbols
- **Q.** Define *Rayleigh Model*.  
  **Ans.** no LOS, envelope Rayleigh distributed
- **Q.** Define *Rician K-factor*.  
  **Ans.** ratio of LOS power to scattered power
- **Q.** Define *Jakes Model*.  
  **Ans.** classical Doppler spectrum model

### Long answer (7 marks)

- **Q.** Explain *Path Loss Models* in detail with a neat diagram.  
  **Key points:** Signal power drops with distance. Free Space Model — Friis equation Pr = PtGtGrλ²/(4πd)²; Log-distance Model — path loss grows with 10n log(d); Shadowing — log-normal variation due to obstacles.
- **Q.** Explain *Multipath Fading* in detail with a neat diagram.  
  **Key points:** Multiple paths cause rapid fades. Flat Fading — signal bandwidth smaller than coherence bandwidth; Frequency-selective Fading — bandwidth larger than coherence bandwidth; Fast Fading — channel changes within a symbol period.
- **Q.** Explain *Doppler Spread & Coherence Time* in detail with a neat diagram.  
  **Key points:** Motion causes time variation. Doppler Spread — spectral broadening due to motion; Coherence Time — Tc ≈ 0.423/fm; Slow Fading — channel constant over many symbols.
- **Q.** Explain *Channel Models* in detail with a neat diagram.  
  **Key points:** Statistical models describe fading. Rayleigh Model — no LOS, envelope Rayleigh distributed; Rician K-factor — ratio of LOS power to scattered power; Jakes Model — classical Doppler spectrum model.

## Unit 2: Diversity & Equalisation

### Short answer (2-3 marks)

- **Q.** Define *Time Diversity*.  
  **Ans.** repeats or interleaves over time
- **Q.** Define *Frequency Diversity*.  
  **Ans.** sends on separated frequencies
- **Q.** Define *Antenna Diversity*.  
  **Ans.** multiple spaced antennas
- **Q.** Define *Selection Combining*.  
  **Ans.** picks the strongest branch
- **Q.** Define *Equal Gain Combining*.  
  **Ans.** co-phases and adds branches
- **Q.** Define *Maximal Ratio Combining*.  
  **Ans.** optimal SNR weighting
- **Q.** Define *Linear Equaliser*.  
  **Ans.** FIR filter reversing channel
- **Q.** Define *Decision Feedback Equaliser*.  
  **Ans.** uses past decisions to cancel ISI
- **Q.** Define *MLSE*.  
  **Ans.** maximum-likelihood sequence estimation
- **Q.** Define *Pilot Symbols*.  
  **Ans.** known symbols for channel estimation
- **Q.** Define *Training Sequence*.  
  **Ans.** known preamble
- **Q.** Define *Blind Estimation*.  
  **Ans.** estimation without pilots

### Long answer (7 marks)

- **Q.** Explain *Diversity Types* in detail with a neat diagram.  
  **Key points:** Diversity provides independent copies. Time Diversity — repeats or interleaves over time; Frequency Diversity — sends on separated frequencies; Antenna Diversity — multiple spaced antennas.
- **Q.** Explain *Combining Techniques* in detail with a neat diagram.  
  **Key points:** Diversity branches are combined. Selection Combining — picks the strongest branch; Equal Gain Combining — co-phases and adds branches; Maximal Ratio Combining — optimal SNR weighting.
- **Q.** Explain *Equalisation* in detail with a neat diagram.  
  **Key points:** Equalisers fight ISI in frequency-selective channels. Linear Equaliser — FIR filter reversing channel; Decision Feedback Equaliser — uses past decisions to cancel ISI; MLSE — maximum-likelihood sequence estimation.
- **Q.** Explain *Channel Estimation* in detail with a neat diagram.  
  **Key points:** Receivers estimate channel response. Pilot Symbols — known symbols for channel estimation; Training Sequence — known preamble; Blind Estimation — estimation without pilots.

## Unit 3: OFDM & MIMO

### Short answer (2-3 marks)

- **Q.** Define *OFDM*.  
  **Ans.** parallel orthogonal subcarriers implemented by IFFT/FFT
- **Q.** Define *Subcarrier Spacing*.  
  **Ans.** Δf = 1/T
- **Q.** Define *Cyclic Prefix*.  
  **Ans.** guard interval copied from symbol end to absorb delay spread
- **Q.** Define *PAPR*.  
  **Ans.** high peak-to-average power ratio
- **Q.** Define *Carrier Frequency Offset*.  
  **Ans.** breaks subcarrier orthogonality
- **Q.** Define *SC-FDMA*.  
  **Ans.** lower-PAPR uplink scheme in LTE
- **Q.** Define *MIMO Capacity*.  
  **Ans.** grows linearly with min(Nt, Nr)
- **Q.** Define *Channel Matrix*.  
  **Ans.** H describing all antenna paths
- **Q.** Define *Spatial Multiplexing Gain*.  
  **Ans.** parallel data streams
- **Q.** Define *Alamouti Code*.  
  **Ans.** 2×1 space-time block code giving full diversity
- **Q.** Define *Diversity Gain*.  
  **Ans.** slope improvement of BER curve
- **Q.** Define *Massive MIMO*.  
  **Ans.** very large antenna arrays at base station

### Long answer (7 marks)

- **Q.** Explain *OFDM Principles* in detail with a neat diagram.  
  **Key points:** OFDM divides bandwidth into orthogonal subcarriers. OFDM — parallel orthogonal subcarriers implemented by IFFT/FFT; Subcarrier Spacing — Δf = 1/T; Cyclic Prefix — guard interval copied from symbol end to absorb delay spread.
- **Q.** Explain *OFDM Issues* in detail with a neat diagram.  
  **Key points:** OFDM has practical drawbacks. PAPR — high peak-to-average power ratio; Carrier Frequency Offset — breaks subcarrier orthogonality; SC-FDMA — lower-PAPR uplink scheme in LTE.
- **Q.** Explain *MIMO Channel & Capacity* in detail with a neat diagram.  
  **Key points:** Multiple antennas multiply capacity. MIMO Capacity — grows linearly with min(Nt, Nr); Channel Matrix — H describing all antenna paths; Spatial Multiplexing Gain — parallel data streams.
- **Q.** Explain *Space-time Coding* in detail with a neat diagram.  
  **Key points:** Coding across antennas gives diversity. Alamouti Code — 2×1 space-time block code giving full diversity; Diversity Gain — slope improvement of BER curve; Massive MIMO — very large antenna arrays at base station.

## Unit 4: Multiple Access & Spread Spectrum

### Short answer (2-3 marks)

- **Q.** Define *FDMA*.  
  **Ans.** separate frequencies
- **Q.** Define *TDMA*.  
  **Ans.** separate time slots
- **Q.** Define *OFDMA*.  
  **Ans.** separate subcarrier groups
- **Q.** Define *DSSS*.  
  **Ans.** spreads data with fast PN chips
- **Q.** Define *Processing Gain*.  
  **Ans.** chip rate / bit rate
- **Q.** Define *Power Control*.  
  **Ans.** equalises received power to solve near-far problem
- **Q.** Define *ALOHA*.  
  **Ans.** transmit anytime; max throughput 18.4%
- **Q.** Define *Slotted ALOHA*.  
  **Ans.** transmissions in slots; max 36.8%
- **Q.** Define *CSMA/CA*.  
  **Ans.** carrier sense with collision avoidance used in Wi-Fi
- **Q.** Define *NOMA*.  
  **Ans.** non-orthogonal multiple access using power domain
- **Q.** Define *Cognitive Radio*.  
  **Ans.** senses and uses idle spectrum
- **Q.** Define *Spectrum Sensing*.  
  **Ans.** detecting presence of primary users

### Long answer (7 marks)

- **Q.** Explain *Multiple Access Techniques* in detail with a neat diagram.  
  **Key points:** Users share the spectrum. FDMA — separate frequencies; TDMA — separate time slots; OFDMA — separate subcarrier groups.
- **Q.** Explain *CDMA & Spread Spectrum* in detail with a neat diagram.  
  **Key points:** Codes separate users. DSSS — spreads data with fast PN chips; Processing Gain — chip rate / bit rate; Power Control — equalises received power to solve near-far problem.
- **Q.** Explain *Random Access* in detail with a neat diagram.  
  **Key points:** Users contend for the channel. ALOHA — transmit anytime; max throughput 18.4%; Slotted ALOHA — transmissions in slots; max 36.8%; CSMA/CA — carrier sense with collision avoidance used in Wi-Fi.
- **Q.** Explain *NOMA & Cognitive Radio* in detail with a neat diagram.  
  **Key points:** Newer access methods use spectrum efficiently. NOMA — non-orthogonal multiple access using power domain; Cognitive Radio — senses and uses idle spectrum; Spectrum Sensing — detecting presence of primary users.

## Unit 5: Wireless Standards & Networks

### Short answer (2-3 marks)

- **Q.** Define *802.11ac*.  
  **Ans.** Wi-Fi 5 with MU-MIMO in 5 GHz
- **Q.** Define *802.11ax*.  
  **Ans.** Wi-Fi 6 with OFDMA
- **Q.** Define *Access Point*.  
  **Ans.** node connecting wireless clients to the network
- **Q.** Define *Bluetooth*.  
  **Ans.** 2.4 GHz WPAN with frequency hopping
- **Q.** Define *Zigbee*.  
  **Ans.** low-power mesh networking
- **Q.** Define *UWB*.  
  **Ans.** ultra-wideband short-range high-rate radio
- **Q.** Define *LTE*.  
  **Ans.** 4G OFDMA-based standard
- **Q.** Define *5G NR*.  
  **Ans.** new radio supporting mmWave and low latency
- **Q.** Define *Network Slicing*.  
  **Ans.** virtual networks tailored to services
- **Q.** Define *WSN*.  
  **Ans.** network of battery-powered sensing nodes
- **Q.** Define *Clustering*.  
  **Ans.** cluster heads aggregate data, e.g. LEACH
- **Q.** Define *Energy Efficiency*.  
  **Ans.** key design goal for long lifetime

### Long answer (7 marks)

- **Q.** Explain *Wireless LAN* in detail with a neat diagram.  
  **Key points:** IEEE 802.11 defines Wi-Fi. 802.11ac — Wi-Fi 5 with MU-MIMO in 5 GHz; 802.11ax — Wi-Fi 6 with OFDMA; Access Point — node connecting wireless clients to the network.
- **Q.** Explain *WPAN Technologies* in detail with a neat diagram.  
  **Key points:** Short-range networks connect personal devices. Bluetooth — 2.4 GHz WPAN with frequency hopping; Zigbee — low-power mesh networking; UWB — ultra-wideband short-range high-rate radio.
- **Q.** Explain *Cellular Standards* in detail with a neat diagram.  
  **Key points:** Cellular generations evolved rapidly. LTE — 4G OFDMA-based standard; 5G NR — new radio supporting mmWave and low latency; Network Slicing — virtual networks tailored to services.
- **Q.** Explain *Wireless Sensor Networks* in detail with a neat diagram.  
  **Key points:** Sensor nodes monitor environments. WSN — network of battery-powered sensing nodes; Clustering — cluster heads aggregate data, e.g. LEACH; Energy Efficiency — key design goal for long lifetime.

