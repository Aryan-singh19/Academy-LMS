# EC-503(B) Mobile Communication — Question Bank with Answer Hints

## Unit 1: Cellular Concept

### Short answer (2-3 marks)

- **Q.** Define *1G*.  
  **Ans.** analog voice systems such as AMPS
- **Q.** Define *2G*.  
  **Ans.** digital voice systems such as GSM and IS-95
- **Q.** Define *4G LTE*.  
  **Ans.** all-IP broadband using OFDMA
- **Q.** Define *Cell*.  
  **Ans.** geographic area served by one base station
- **Q.** Define *Cluster Size*.  
  **Ans.** N = i² + ij + j²
- **Q.** Define *Co-channel Reuse Ratio*.  
  **Ans.** Q = D/R = √(3N)
- **Q.** Define *Fixed Channel Assignment*.  
  **Ans.** each cell gets a fixed set of channels
- **Q.** Define *Handoff*.  
  **Ans.** transferring an ongoing call to another cell
- **Q.** Define *Hysteresis Margin*.  
  **Ans.** threshold preventing rapid ping-pong handoffs
- **Q.** Define *Cell Splitting*.  
  **Ans.** dividing cells into smaller ones
- **Q.** Define *Sectoring*.  
  **Ans.** directional antennas reduce co-channel interference
- **Q.** Define *Microcell Zone Concept*.  
  **Ans.** zones under one base station reduce handoffs

### Long answer (7 marks)

- **Q.** Explain *Evolution of Mobile Systems* in detail with a neat diagram.  
  **Key points:** Mobile systems evolved from analog to broadband. 1G — analog voice systems such as AMPS; 2G — digital voice systems such as GSM and IS-95; 4G LTE — all-IP broadband using OFDMA.
- **Q.** Explain *Frequency Reuse* in detail with a neat diagram.  
  **Key points:** Reuse lets limited spectrum serve many users. Cell — geographic area served by one base station; Cluster Size — N = i² + ij + j²; Co-channel Reuse Ratio — Q = D/R = √(3N).
- **Q.** Explain *Channel Assignment & Handoff* in detail with a neat diagram.  
  **Key points:** Channels are assigned and calls handed over. Fixed Channel Assignment — each cell gets a fixed set of channels; Handoff — transferring an ongoing call to another cell; Hysteresis Margin — threshold preventing rapid ping-pong handoffs.
- **Q.** Explain *Capacity Improvement* in detail with a neat diagram.  
  **Key points:** Techniques increase cellular capacity. Cell Splitting — dividing cells into smaller ones; Sectoring — directional antennas reduce co-channel interference; Microcell Zone Concept — zones under one base station reduce handoffs.

## Unit 2: Mobile Radio Propagation

### Short answer (2-3 marks)

- **Q.** Define *Free-space Path Loss*.  
  **Ans.** proportional to (4πd/λ)²
- **Q.** Define *Path Loss Exponent*.  
  **Ans.** n, 2 in free space, larger in cities
- **Q.** Define *Okumura-Hata Model*.  
  **Ans.** empirical urban path loss model
- **Q.** Define *Two-ray Ground Model*.  
  **Ans.** direct and ground-reflected paths
- **Q.** Define *Knife-edge Diffraction*.  
  **Ans.** bending over obstacles
- **Q.** Define *Scattering*.  
  **Ans.** reflection from rough surfaces and small objects
- **Q.** Define *Multipath Fading*.  
  **Ans.** constructive and destructive interference of paths
- **Q.** Define *Rayleigh Fading*.  
  **Ans.** fading with no line-of-sight component
- **Q.** Define *Rician Fading*.  
  **Ans.** fading with a dominant line-of-sight path
- **Q.** Define *Doppler Shift*.  
  **Ans.** fd = v/λ cos θ
- **Q.** Define *Coherence Bandwidth*.  
  **Ans.** range over which channel is flat; about 1/delay spread
- **Q.** Define *Coherence Time*.  
  **Ans.** time over which channel is constant

### Long answer (7 marks)

- **Q.** Explain *Large-scale Path Loss* in detail with a neat diagram.  
  **Key points:** Average received power falls with distance. Free-space Path Loss — proportional to (4πd/λ)²; Path Loss Exponent — n, 2 in free space, larger in cities; Okumura-Hata Model — empirical urban path loss model.
- **Q.** Explain *Reflection, Diffraction & Scattering* in detail with a neat diagram.  
  **Key points:** Mechanisms let signals reach shadowed areas. Two-ray Ground Model — direct and ground-reflected paths; Knife-edge Diffraction — bending over obstacles; Scattering — reflection from rough surfaces and small objects.
- **Q.** Explain *Small-scale Fading* in detail with a neat diagram.  
  **Key points:** Multipath causes rapid fluctuations. Multipath Fading — constructive and destructive interference of paths; Rayleigh Fading — fading with no line-of-sight component; Rician Fading — fading with a dominant line-of-sight path.
- **Q.** Explain *Doppler & Delay Spread* in detail with a neat diagram.  
  **Key points:** Motion and multipath set channel parameters. Doppler Shift — fd = v/λ cos θ; Coherence Bandwidth — range over which channel is flat; about 1/delay spread; Coherence Time — time over which channel is constant.

## Unit 3: Multiple Access & Diversity

### Short answer (2-3 marks)

- **Q.** Define *FDMA*.  
  **Ans.** each user gets a separate frequency band
- **Q.** Define *TDMA*.  
  **Ans.** users share a channel in time slots
- **Q.** Define *Guard Time*.  
  **Ans.** gap preventing slot overlap
- **Q.** Define *CDMA*.  
  **Ans.** users separated by orthogonal spreading codes
- **Q.** Define *Near-far Problem*.  
  **Ans.** strong nearby users swamp distant ones; solved by power control
- **Q.** Define *OFDMA*.  
  **Ans.** users assigned groups of orthogonal subcarriers
- **Q.** Define *Space Diversity*.  
  **Ans.** multiple antennas separated in space
- **Q.** Define *Maximal Ratio Combining*.  
  **Ans.** weights branches by SNR
- **Q.** Define *RAKE Receiver*.  
  **Ans.** combines multipath components in CDMA
- **Q.** Define *MIMO*.  
  **Ans.** multiple-input multiple-output antenna systems
- **Q.** Define *Spatial Multiplexing*.  
  **Ans.** independent streams on different antennas
- **Q.** Define *Beamforming*.  
  **Ans.** steering energy towards a user

### Long answer (7 marks)

- **Q.** Explain *FDMA & TDMA* in detail with a neat diagram.  
  **Key points:** Users share by frequency or time. FDMA — each user gets a separate frequency band; TDMA — users share a channel in time slots; Guard Time — gap preventing slot overlap.
- **Q.** Explain *CDMA & OFDMA* in detail with a neat diagram.  
  **Key points:** Codes or subcarriers separate users. CDMA — users separated by orthogonal spreading codes; Near-far Problem — strong nearby users swamp distant ones; solved by power control; OFDMA — users assigned groups of orthogonal subcarriers.
- **Q.** Explain *Diversity Techniques* in detail with a neat diagram.  
  **Key points:** Diversity combats fading. Space Diversity — multiple antennas separated in space; Maximal Ratio Combining — weights branches by SNR; RAKE Receiver — combines multipath components in CDMA.
- **Q.** Explain *MIMO Basics* in detail with a neat diagram.  
  **Key points:** Multiple antennas increase capacity. MIMO — multiple-input multiple-output antenna systems; Spatial Multiplexing — independent streams on different antennas; Beamforming — steering energy towards a user.

## Unit 4: GSM & CDMA Systems

### Short answer (2-3 marks)

- **Q.** Define *BTS*.  
  **Ans.** base transceiver station
- **Q.** Define *MSC*.  
  **Ans.** mobile switching centre routing calls
- **Q.** Define *HLR and VLR*.  
  **Ans.** home and visitor location registers
- **Q.** Define *TDMA Frame*.  
  **Ans.** 8 time slots on each carrier
- **Q.** Define *Traffic Channel*.  
  **Ans.** carries speech or data
- **Q.** Define *Control Channel*.  
  **Ans.** carries signalling, e.g. BCCH
- **Q.** Define *GPRS*.  
  **Ans.** general packet radio service over GSM
- **Q.** Define *EDGE*.  
  **Ans.** enhanced data rates using 8-PSK
- **Q.** Define *SGSN*.  
  **Ans.** serving GPRS support node
- **Q.** Define *IS-95*.  
  **Ans.** first CDMA cellular standard
- **Q.** Define *Soft Handoff*.  
  **Ans.** mobile connected to two base stations at once
- **Q.** Define *Walsh Codes*.  
  **Ans.** orthogonal codes separating channels

### Long answer (7 marks)

- **Q.** Explain *GSM Architecture* in detail with a neat diagram.  
  **Key points:** GSM is the widely used 2G standard. BTS — base transceiver station; MSC — mobile switching centre routing calls; HLR and VLR — home and visitor location registers.
- **Q.** Explain *GSM Channels & Frame Structure* in detail with a neat diagram.  
  **Key points:** GSM uses TDMA frames on 200 kHz carriers. TDMA Frame — 8 time slots on each carrier; Traffic Channel — carries speech or data; Control Channel — carries signalling, e.g. BCCH.
- **Q.** Explain *GPRS & EDGE* in detail with a neat diagram.  
  **Key points:** 2.5G added packet data. GPRS — general packet radio service over GSM; EDGE — enhanced data rates using 8-PSK; SGSN — serving GPRS support node.
- **Q.** Explain *IS-95 & CDMA2000* in detail with a neat diagram.  
  **Key points:** CDMA standards use spread spectrum. IS-95 — first CDMA cellular standard; Soft Handoff — mobile connected to two base stations at once; Walsh Codes — orthogonal codes separating channels.

## Unit 5: 3G, 4G & 5G

### Short answer (2-3 marks)

- **Q.** Define *UMTS*.  
  **Ans.** universal mobile telecommunication system
- **Q.** Define *WCDMA*.  
  **Ans.** 5 MHz wideband CDMA air interface
- **Q.** Define *HSPA*.  
  **Ans.** high-speed packet access improving 3G data rates
- **Q.** Define *eNodeB*.  
  **Ans.** LTE base station
- **Q.** Define *EPC*.  
  **Ans.** evolved packet core
- **Q.** Define *OFDMA Downlink*.  
  **Ans.** LTE downlink multiple access
- **Q.** Define *eMBB*.  
  **Ans.** enhanced mobile broadband
- **Q.** Define *URLLC*.  
  **Ans.** ultra-reliable low-latency communication
- **Q.** Define *mmWave*.  
  **Ans.** millimetre-wave bands for very high capacity
- **Q.** Define *Mobile IP*.  
  **Ans.** keeps IP address while moving between networks
- **Q.** Define *Wi-Fi 802.11*.  
  **Ans.** wireless LAN standard family
- **Q.** Define *Bluetooth*.  
  **Ans.** short-range wireless personal area network

### Long answer (7 marks)

- **Q.** Explain *UMTS & WCDMA* in detail with a neat diagram.  
  **Key points:** 3G introduced wideband CDMA. UMTS — universal mobile telecommunication system; WCDMA — 5 MHz wideband CDMA air interface; HSPA — high-speed packet access improving 3G data rates.
- **Q.** Explain *LTE Architecture* in detail with a neat diagram.  
  **Key points:** LTE is an all-IP network. eNodeB — LTE base station; EPC — evolved packet core; OFDMA Downlink — LTE downlink multiple access.
- **Q.** Explain *5G Technologies* in detail with a neat diagram.  
  **Key points:** 5G targets higher speed, lower latency and massive connectivity. eMBB — enhanced mobile broadband; URLLC — ultra-reliable low-latency communication; mmWave — millimetre-wave bands for very high capacity.
- **Q.** Explain *Mobile IP & Wireless Standards* in detail with a neat diagram.  
  **Key points:** Supporting protocols and standards. Mobile IP — keeps IP address while moving between networks; Wi-Fi 802.11 — wireless LAN standard family; Bluetooth — short-range wireless personal area network.

