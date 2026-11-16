# CS-801 Internet of Things — Unit-wise Study Notes

> IoT architecture, sensors and actuators, networking, protocols (MQTT, CoAP), platforms, security and case studies.

## Unit 1: IoT Fundamentals & Architecture

### IoT Definition & Characteristics

IoT connects physical things to the Internet to sense, decide and act.

- **Internet of Things:** network of physical objects with sensors, software and connectivity
- **Interoperability:** ability of heterogeneous devices to work together
- **Self-configuring:** devices discover and configure themselves with minimal human input

### IoT Conceptual & Architectural Framework

Layered architectures organise devices, networks and applications.

- **Three-layer Architecture:** perception, network and application layers
- **Physical Design of IoT:** the things, their interfaces and protocols
- **Logical Design of IoT:** functional blocks and communication models

### M2M vs IoT

IoT extends machine-to-machine links with cloud and analytics.

- **M2M:** direct point-to-point communication between machines
- **IoT Ecosystem:** devices, gateways, cloud, analytics and users
- **Gateway:** device bridging local sensor networks to the Internet

### IoT Communication Models

Devices exchange data using standard interaction patterns.

- **Request-Response Model:** client requests, server replies
- **Publish-Subscribe Model:** publishers send to topics, subscribers receive via a broker
- **Push-Pull Model:** producers push to queues, consumers pull from them

## Unit 2: Sensors, Actuators & Hardware

### Sensors & Their Classification

Sensors convert physical quantities into electrical signals.

- **Sensor:** device that detects a physical quantity and outputs a signal
- **Analog Sensor:** produces a continuous output, e.g. thermistor
- **Digital Sensor:** produces discrete output, e.g. DHT11 temperature-humidity sensor

### Actuators

Actuators convert control signals into physical action.

- **Actuator:** device that moves or controls a mechanism
- **Servo Motor:** motor with feedback for precise angular position
- **Relay:** electrically operated switch for high-power loads

### Microcontrollers & Development Boards

Embedded boards run IoT device logic.

- **Arduino:** open-source microcontroller board based on ATmega chips
- **Raspberry Pi:** single-board Linux computer for gateways and edge tasks
- **ESP32:** low-cost microcontroller with built-in Wi-Fi and Bluetooth

### Embedded System Basics

IoT nodes are resource-constrained embedded systems.

- **Embedded System:** computer system dedicated to a specific function
- **Duty Cycling:** sleeping most of the time to save energy
- **GPIO:** general-purpose input/output pins

## Unit 3: IoT Networking & Protocols

### IoT Network Technologies

Short- and long-range radios connect IoT devices.

- **Zigbee:** low-power mesh networking on IEEE 802.15.4
- **LoRaWAN:** long-range, low-power wide-area network protocol
- **BLE:** Bluetooth Low Energy for short-range low-power links

### MQTT

A lightweight publish-subscribe messaging protocol for constrained devices.

- **MQTT:** publish-subscribe protocol over TCP using a broker
- **QoS Levels:** MQTT offers 0 at most once, 1 at least once, 2 exactly once
- **Topic:** hierarchical string to which messages are published

### CoAP, XMPP & AMQP

Other application protocols suit different IoT needs.

- **CoAP:** RESTful protocol over UDP for constrained networks
- **XMPP:** XML-based messaging protocol for real-time communication
- **AMQP:** message-queue protocol with reliable delivery and routing

### 6LoWPAN & IPv6 for IoT

IPv6 gives every device an address.

- **6LoWPAN:** IPv6 over low-power wireless personal area networks
- **IPv6 Address Space:** 128-bit addresses, enough for billions of devices
- **RPL:** routing protocol for low-power and lossy networks

## Unit 4: IoT Platforms, Cloud & Data

### Cloud & Edge Computing for IoT

Processing can happen in the cloud, at the edge or in between.

- **Cloud Computing for IoT:** remote storage and analytics for device data
- **Edge Computing:** processing data near its source to cut latency
- **Fog Computing:** intermediate layer between edge devices and cloud

### IoT Platforms

Platforms manage devices, data and applications.

- **AWS IoT Core:** managed cloud service to connect and manage devices
- **Device Shadow:** cloud copy of a device's last reported state
- **ThingSpeak:** IoT analytics platform for collecting and visualising sensor data

### IoT Data Analytics

Sensor data is processed to extract insight.

- **Stream Processing:** analysing data continuously as it arrives
- **Time-series Data:** measurements indexed by time
- **Digital Twin:** virtual model mirroring a physical asset in real time

### SDN & NFV for IoT

Software-defined networking simplifies large IoT networks.

- **SDN:** separates control plane from data plane
- **NFV:** network functions run as software on standard servers
- **Controller:** central SDN component programming the switches

## Unit 5: IoT Security & Applications

### IoT Security Challenges

Constrained, numerous devices create a large attack surface.

- **Botnet:** network of compromised devices used for attacks such as Mirai
- **Device Authentication:** verifying a device's identity before granting access
- **Secure Boot:** verifying firmware signatures at start-up

### Privacy & Trust

IoT collects personal data that must be protected.

- **Data Minimisation:** collect only data needed for the purpose
- **Lightweight Cryptography:** ciphers designed for constrained devices
- **End-to-end Encryption:** data encrypted from device to final application

### Smart Home & Smart City

Common IoT application domains.

- **Smart Home:** automated lighting, security and appliances controlled remotely
- **Smart City:** IoT for traffic, waste, parking and utility management
- **Smart Grid:** electricity network with sensing and two-way communication

### Industrial IoT, Healthcare & Agriculture

IoT improves industry, health and farming.

- **IIoT:** industrial IoT for predictive maintenance and automation
- **Remote Patient Monitoring:** wearable sensors transmit vital signs to clinicians
- **Smart Farming:** soil moisture and weather sensors drive irrigation decisions

## Standard Textbooks

- *Internet of Things: A Hands-On Approach* — Arshdeep Bahga & Vijay Madisetti
- *Introduction to IoT* — Sudip Misra, Anandarup Mukherjee & Arijit Roy
- *IoT Fundamentals* — Hanes, Salgueiro et al. (Cisco Press)

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
