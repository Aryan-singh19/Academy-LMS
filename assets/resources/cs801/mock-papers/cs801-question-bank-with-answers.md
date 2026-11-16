# CS-801 Internet of Things — Question Bank with Answer Hints

## Unit 1: IoT Fundamentals & Architecture

### Short answer (2-3 marks)

- **Q.** Define *Internet of Things*.  
  **Ans.** network of physical objects with sensors, software and connectivity
- **Q.** Define *Interoperability*.  
  **Ans.** ability of heterogeneous devices to work together
- **Q.** Define *Self-configuring*.  
  **Ans.** devices discover and configure themselves with minimal human input
- **Q.** Define *Three-layer Architecture*.  
  **Ans.** perception, network and application layers
- **Q.** Define *Physical Design of IoT*.  
  **Ans.** the things, their interfaces and protocols
- **Q.** Define *Logical Design of IoT*.  
  **Ans.** functional blocks and communication models
- **Q.** Define *M2M*.  
  **Ans.** direct point-to-point communication between machines
- **Q.** Define *IoT Ecosystem*.  
  **Ans.** devices, gateways, cloud, analytics and users
- **Q.** Define *Gateway*.  
  **Ans.** device bridging local sensor networks to the Internet
- **Q.** Define *Request-Response Model*.  
  **Ans.** client requests, server replies
- **Q.** Define *Publish-Subscribe Model*.  
  **Ans.** publishers send to topics, subscribers receive via a broker
- **Q.** Define *Push-Pull Model*.  
  **Ans.** producers push to queues, consumers pull from them

### Long answer (7 marks)

- **Q.** Explain *IoT Definition & Characteristics* in detail with a neat diagram.  
  **Key points:** IoT connects physical things to the Internet to sense, decide and act. Internet of Things — network of physical objects with sensors, software and connectivity; Interoperability — ability of heterogeneous devices to work together; Self-configuring — devices discover and configure themselves with minimal human input.
- **Q.** Explain *IoT Conceptual & Architectural Framework* in detail with a neat diagram.  
  **Key points:** Layered architectures organise devices, networks and applications. Three-layer Architecture — perception, network and application layers; Physical Design of IoT — the things, their interfaces and protocols; Logical Design of IoT — functional blocks and communication models.
- **Q.** Explain *M2M vs IoT* in detail with a neat diagram.  
  **Key points:** IoT extends machine-to-machine links with cloud and analytics. M2M — direct point-to-point communication between machines; IoT Ecosystem — devices, gateways, cloud, analytics and users; Gateway — device bridging local sensor networks to the Internet.
- **Q.** Explain *IoT Communication Models* in detail with a neat diagram.  
  **Key points:** Devices exchange data using standard interaction patterns. Request-Response Model — client requests, server replies; Publish-Subscribe Model — publishers send to topics, subscribers receive via a broker; Push-Pull Model — producers push to queues, consumers pull from them.

## Unit 2: Sensors, Actuators & Hardware

### Short answer (2-3 marks)

- **Q.** Define *Sensor*.  
  **Ans.** device that detects a physical quantity and outputs a signal
- **Q.** Define *Analog Sensor*.  
  **Ans.** produces a continuous output, e.g. thermistor
- **Q.** Define *Digital Sensor*.  
  **Ans.** produces discrete output, e.g. DHT11 temperature-humidity sensor
- **Q.** Define *Actuator*.  
  **Ans.** device that moves or controls a mechanism
- **Q.** Define *Servo Motor*.  
  **Ans.** motor with feedback for precise angular position
- **Q.** Define *Relay*.  
  **Ans.** electrically operated switch for high-power loads
- **Q.** Define *Arduino*.  
  **Ans.** open-source microcontroller board based on ATmega chips
- **Q.** Define *Raspberry Pi*.  
  **Ans.** single-board Linux computer for gateways and edge tasks
- **Q.** Define *ESP32*.  
  **Ans.** low-cost microcontroller with built-in Wi-Fi and Bluetooth
- **Q.** Define *Embedded System*.  
  **Ans.** computer system dedicated to a specific function
- **Q.** Define *Duty Cycling*.  
  **Ans.** sleeping most of the time to save energy
- **Q.** Define *GPIO*.  
  **Ans.** general-purpose input/output pins

### Long answer (7 marks)

- **Q.** Explain *Sensors & Their Classification* in detail with a neat diagram.  
  **Key points:** Sensors convert physical quantities into electrical signals. Sensor — device that detects a physical quantity and outputs a signal; Analog Sensor — produces a continuous output, e.g. thermistor; Digital Sensor — produces discrete output, e.g. DHT11 temperature-humidity sensor.
- **Q.** Explain *Actuators* in detail with a neat diagram.  
  **Key points:** Actuators convert control signals into physical action. Actuator — device that moves or controls a mechanism; Servo Motor — motor with feedback for precise angular position; Relay — electrically operated switch for high-power loads.
- **Q.** Explain *Microcontrollers & Development Boards* in detail with a neat diagram.  
  **Key points:** Embedded boards run IoT device logic. Arduino — open-source microcontroller board based on ATmega chips; Raspberry Pi — single-board Linux computer for gateways and edge tasks; ESP32 — low-cost microcontroller with built-in Wi-Fi and Bluetooth.
- **Q.** Explain *Embedded System Basics* in detail with a neat diagram.  
  **Key points:** IoT nodes are resource-constrained embedded systems. Embedded System — computer system dedicated to a specific function; Duty Cycling — sleeping most of the time to save energy; GPIO — general-purpose input/output pins.

## Unit 3: IoT Networking & Protocols

### Short answer (2-3 marks)

- **Q.** Define *Zigbee*.  
  **Ans.** low-power mesh networking on IEEE 802.15.4
- **Q.** Define *LoRaWAN*.  
  **Ans.** long-range, low-power wide-area network protocol
- **Q.** Define *BLE*.  
  **Ans.** Bluetooth Low Energy for short-range low-power links
- **Q.** Define *MQTT*.  
  **Ans.** publish-subscribe protocol over TCP using a broker
- **Q.** Define *QoS Levels*.  
  **Ans.** MQTT offers 0 at most once, 1 at least once, 2 exactly once
- **Q.** Define *Topic*.  
  **Ans.** hierarchical string to which messages are published
- **Q.** Define *CoAP*.  
  **Ans.** RESTful protocol over UDP for constrained networks
- **Q.** Define *XMPP*.  
  **Ans.** XML-based messaging protocol for real-time communication
- **Q.** Define *AMQP*.  
  **Ans.** message-queue protocol with reliable delivery and routing
- **Q.** Define *6LoWPAN*.  
  **Ans.** IPv6 over low-power wireless personal area networks
- **Q.** Define *IPv6 Address Space*.  
  **Ans.** 128-bit addresses, enough for billions of devices
- **Q.** Define *RPL*.  
  **Ans.** routing protocol for low-power and lossy networks

### Long answer (7 marks)

- **Q.** Explain *IoT Network Technologies* in detail with a neat diagram.  
  **Key points:** Short- and long-range radios connect IoT devices. Zigbee — low-power mesh networking on IEEE 802.15.4; LoRaWAN — long-range, low-power wide-area network protocol; BLE — Bluetooth Low Energy for short-range low-power links.
- **Q.** Explain *MQTT* in detail with a neat diagram.  
  **Key points:** A lightweight publish-subscribe messaging protocol for constrained devices. MQTT — publish-subscribe protocol over TCP using a broker; QoS Levels — MQTT offers 0 at most once, 1 at least once, 2 exactly once; Topic — hierarchical string to which messages are published.
- **Q.** Explain *CoAP, XMPP & AMQP* in detail with a neat diagram.  
  **Key points:** Other application protocols suit different IoT needs. CoAP — RESTful protocol over UDP for constrained networks; XMPP — XML-based messaging protocol for real-time communication; AMQP — message-queue protocol with reliable delivery and routing.
- **Q.** Explain *6LoWPAN & IPv6 for IoT* in detail with a neat diagram.  
  **Key points:** IPv6 gives every device an address. 6LoWPAN — IPv6 over low-power wireless personal area networks; IPv6 Address Space — 128-bit addresses, enough for billions of devices; RPL — routing protocol for low-power and lossy networks.

## Unit 4: IoT Platforms, Cloud & Data

### Short answer (2-3 marks)

- **Q.** Define *Cloud Computing for IoT*.  
  **Ans.** remote storage and analytics for device data
- **Q.** Define *Edge Computing*.  
  **Ans.** processing data near its source to cut latency
- **Q.** Define *Fog Computing*.  
  **Ans.** intermediate layer between edge devices and cloud
- **Q.** Define *AWS IoT Core*.  
  **Ans.** managed cloud service to connect and manage devices
- **Q.** Define *Device Shadow*.  
  **Ans.** cloud copy of a device's last reported state
- **Q.** Define *ThingSpeak*.  
  **Ans.** IoT analytics platform for collecting and visualising sensor data
- **Q.** Define *Stream Processing*.  
  **Ans.** analysing data continuously as it arrives
- **Q.** Define *Time-series Data*.  
  **Ans.** measurements indexed by time
- **Q.** Define *Digital Twin*.  
  **Ans.** virtual model mirroring a physical asset in real time
- **Q.** Define *SDN*.  
  **Ans.** separates control plane from data plane
- **Q.** Define *NFV*.  
  **Ans.** network functions run as software on standard servers
- **Q.** Define *Controller*.  
  **Ans.** central SDN component programming the switches

### Long answer (7 marks)

- **Q.** Explain *Cloud & Edge Computing for IoT* in detail with a neat diagram.  
  **Key points:** Processing can happen in the cloud, at the edge or in between. Cloud Computing for IoT — remote storage and analytics for device data; Edge Computing — processing data near its source to cut latency; Fog Computing — intermediate layer between edge devices and cloud.
- **Q.** Explain *IoT Platforms* in detail with a neat diagram.  
  **Key points:** Platforms manage devices, data and applications. AWS IoT Core — managed cloud service to connect and manage devices; Device Shadow — cloud copy of a device's last reported state; ThingSpeak — IoT analytics platform for collecting and visualising sensor data.
- **Q.** Explain *IoT Data Analytics* in detail with a neat diagram.  
  **Key points:** Sensor data is processed to extract insight. Stream Processing — analysing data continuously as it arrives; Time-series Data — measurements indexed by time; Digital Twin — virtual model mirroring a physical asset in real time.
- **Q.** Explain *SDN & NFV for IoT* in detail with a neat diagram.  
  **Key points:** Software-defined networking simplifies large IoT networks. SDN — separates control plane from data plane; NFV — network functions run as software on standard servers; Controller — central SDN component programming the switches.

## Unit 5: IoT Security & Applications

### Short answer (2-3 marks)

- **Q.** Define *Botnet*.  
  **Ans.** network of compromised devices used for attacks such as Mirai
- **Q.** Define *Device Authentication*.  
  **Ans.** verifying a device's identity before granting access
- **Q.** Define *Secure Boot*.  
  **Ans.** verifying firmware signatures at start-up
- **Q.** Define *Data Minimisation*.  
  **Ans.** collect only data needed for the purpose
- **Q.** Define *Lightweight Cryptography*.  
  **Ans.** ciphers designed for constrained devices
- **Q.** Define *End-to-end Encryption*.  
  **Ans.** data encrypted from device to final application
- **Q.** Define *Smart Home*.  
  **Ans.** automated lighting, security and appliances controlled remotely
- **Q.** Define *Smart City*.  
  **Ans.** IoT for traffic, waste, parking and utility management
- **Q.** Define *Smart Grid*.  
  **Ans.** electricity network with sensing and two-way communication
- **Q.** Define *IIoT*.  
  **Ans.** industrial IoT for predictive maintenance and automation
- **Q.** Define *Remote Patient Monitoring*.  
  **Ans.** wearable sensors transmit vital signs to clinicians
- **Q.** Define *Smart Farming*.  
  **Ans.** soil moisture and weather sensors drive irrigation decisions

### Long answer (7 marks)

- **Q.** Explain *IoT Security Challenges* in detail with a neat diagram.  
  **Key points:** Constrained, numerous devices create a large attack surface. Botnet — network of compromised devices used for attacks such as Mirai; Device Authentication — verifying a device's identity before granting access; Secure Boot — verifying firmware signatures at start-up.
- **Q.** Explain *Privacy & Trust* in detail with a neat diagram.  
  **Key points:** IoT collects personal data that must be protected. Data Minimisation — collect only data needed for the purpose; Lightweight Cryptography — ciphers designed for constrained devices; End-to-end Encryption — data encrypted from device to final application.
- **Q.** Explain *Smart Home & Smart City* in detail with a neat diagram.  
  **Key points:** Common IoT application domains. Smart Home — automated lighting, security and appliances controlled remotely; Smart City — IoT for traffic, waste, parking and utility management; Smart Grid — electricity network with sensing and two-way communication.
- **Q.** Explain *Industrial IoT, Healthcare & Agriculture* in detail with a neat diagram.  
  **Key points:** IoT improves industry, health and farming. IIoT — industrial IoT for predictive maintenance and automation; Remote Patient Monitoring — wearable sensors transmit vital signs to clinicians; Smart Farming — soil moisture and weather sensors drive irrigation decisions.

