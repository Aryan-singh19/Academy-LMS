# ME-604(A) Robotics — Question Bank with Answer Hints

## Unit 1: Introduction to Robotics

### Short answer (2-3 marks)

- **Q.** Define *Industrial Robot*.  
  **Ans.** reprogrammable multifunctional manipulator
- **Q.** Define *Degrees of Freedom*.  
  **Ans.** number of independent joint motions
- **Q.** Define *Work Envelope*.  
  **Ans.** space reachable by the end effector
- **Q.** Define *Cartesian Robot*.  
  **Ans.** three linear joints
- **Q.** Define *SCARA*.  
  **Ans.** selective compliance robot arm for assembly
- **Q.** Define *Articulated Robot*.  
  **Ans.** rotary joints like a human arm
- **Q.** Define *Payload*.  
  **Ans.** maximum load robot can carry
- **Q.** Define *Repeatability*.  
  **Ans.** ability to return to the same point
- **Q.** Define *Accuracy*.  
  **Ans.** ability to reach a commanded point
- **Q.** Define *Gripper*.  
  **Ans.** end effector for grasping
- **Q.** Define *Vacuum Gripper*.  
  **Ans.** uses suction cups
- **Q.** Define *Tool Changer*.  
  **Ans.** allows automatic tool swapping

### Long answer (7 marks)

- **Q.** Explain *Robot Anatomy* in detail with a neat diagram.  
  **Key points:** Robots are programmable manipulators. Industrial Robot — reprogrammable multifunctional manipulator; Degrees of Freedom — number of independent joint motions; Work Envelope — space reachable by the end effector.
- **Q.** Explain *Robot Configurations* in detail with a neat diagram.  
  **Key points:** Coordinate systems classify robots. Cartesian Robot — three linear joints; SCARA — selective compliance robot arm for assembly; Articulated Robot — rotary joints like a human arm.
- **Q.** Explain *Robot Specifications* in detail with a neat diagram.  
  **Key points:** Specifications describe capability. Payload — maximum load robot can carry; Repeatability — ability to return to the same point; Accuracy — ability to reach a commanded point.
- **Q.** Explain *End Effectors* in detail with a neat diagram.  
  **Key points:** Tools at the robot wrist interact with work. Gripper — end effector for grasping; Vacuum Gripper — uses suction cups; Tool Changer — allows automatic tool swapping.

## Unit 2: Robot Kinematics

### Short answer (2-3 marks)

- **Q.** Define *Homogeneous Transformation*.  
  **Ans.** combines rotation and translation in 4×4 matrix
- **Q.** Define *Rotation Matrix*.  
  **Ans.** 3×3 orthonormal matrix
- **Q.** Define *Frame*.  
  **Ans.** coordinate system attached to a link
- **Q.** Define *Forward Kinematics*.  
  **Ans.** computing pose from joint variables
- **Q.** Define *DH Parameters*.  
  **Ans.** link length, twist, offset and joint angle
- **Q.** Define *DH Convention*.  
  **Ans.** systematic assignment of link frames
- **Q.** Define *Inverse Kinematics*.  
  **Ans.** finding joint variables for a desired pose
- **Q.** Define *Multiple Solutions*.  
  **Ans.** several joint sets may reach the same pose
- **Q.** Define *Singularity*.  
  **Ans.** configuration losing a degree of freedom
- **Q.** Define *Jacobian*.  
  **Ans.** matrix relating joint velocities to end-effector velocities
- **Q.** Define *Singular Jacobian*.  
  **Ans.** determinant zero at singularity
- **Q.** Define *Static Force Relation*.  
  **Ans.** τ = J^T F

### Long answer (7 marks)

- **Q.** Explain *Homogeneous Transformations* in detail with a neat diagram.  
  **Key points:** 4×4 matrices represent position and orientation. Homogeneous Transformation — combines rotation and translation in 4×4 matrix; Rotation Matrix — 3×3 orthonormal matrix; Frame — coordinate system attached to a link.
- **Q.** Explain *Forward Kinematics* in detail with a neat diagram.  
  **Key points:** Joint values give end-effector pose. Forward Kinematics — computing pose from joint variables; DH Parameters — link length, twist, offset and joint angle; DH Convention — systematic assignment of link frames.
- **Q.** Explain *Inverse Kinematics* in detail with a neat diagram.  
  **Key points:** Pose gives required joint values. Inverse Kinematics — finding joint variables for a desired pose; Multiple Solutions — several joint sets may reach the same pose; Singularity — configuration losing a degree of freedom.
- **Q.** Explain *Jacobian & Velocity Kinematics* in detail with a neat diagram.  
  **Key points:** Jacobian maps joint rates to end-effector velocity. Jacobian — matrix relating joint velocities to end-effector velocities; Singular Jacobian — determinant zero at singularity; Static Force Relation — τ = J^T F.

## Unit 3: Dynamics & Trajectory Planning

### Short answer (2-3 marks)

- **Q.** Define *Lagrange-Euler Formulation*.  
  **Ans.** dynamics from kinetic and potential energy
- **Q.** Define *Newton-Euler Formulation*.  
  **Ans.** recursive force and moment balance
- **Q.** Define *Inertia Matrix*.  
  **Ans.** joint-space mass matrix
- **Q.** Define *Joint-space Trajectory*.  
  **Ans.** interpolating joint angles
- **Q.** Define *Cubic Polynomial Trajectory*.  
  **Ans.** satisfies position and velocity at ends
- **Q.** Define *Via Points*.  
  **Ans.** intermediate points along a path
- **Q.** Define *Configuration Space*.  
  **Ans.** space of all joint configurations
- **Q.** Define *Potential Field Method*.  
  **Ans.** attractive goal and repulsive obstacles
- **Q.** Define *Path vs Trajectory*.  
  **Ans.** path is geometric, trajectory adds timing
- **Q.** Define *PID Joint Control*.  
  **Ans.** independent joint control
- **Q.** Define *Computed Torque Control*.  
  **Ans.** cancels non-linear dynamics
- **Q.** Define *Force Control*.  
  **Ans.** regulates contact forces

### Long answer (7 marks)

- **Q.** Explain *Robot Dynamics* in detail with a neat diagram.  
  **Key points:** Dynamics relates torques to motion. Lagrange-Euler Formulation — dynamics from kinetic and potential energy; Newton-Euler Formulation — recursive force and moment balance; Inertia Matrix — joint-space mass matrix.
- **Q.** Explain *Trajectory Planning* in detail with a neat diagram.  
  **Key points:** Planned paths are smooth in time. Joint-space Trajectory — interpolating joint angles; Cubic Polynomial Trajectory — satisfies position and velocity at ends; Via Points — intermediate points along a path.
- **Q.** Explain *Path Planning* in detail with a neat diagram.  
  **Key points:** Robots avoid obstacles. Configuration Space — space of all joint configurations; Potential Field Method — attractive goal and repulsive obstacles; Path vs Trajectory — path is geometric, trajectory adds timing.
- **Q.** Explain *Robot Control* in detail with a neat diagram.  
  **Key points:** Controllers make robots follow trajectories. PID Joint Control — independent joint control; Computed Torque Control — cancels non-linear dynamics; Force Control — regulates contact forces.

## Unit 4: Sensors & Actuators

### Short answer (2-3 marks)

- **Q.** Define *Encoder*.  
  **Ans.** measures joint position
- **Q.** Define *Resolver*.  
  **Ans.** analog angular position sensor
- **Q.** Define *Tachometer*.  
  **Ans.** measures joint velocity
- **Q.** Define *Proximity Sensor*.  
  **Ans.** detects nearby objects
- **Q.** Define *Force-Torque Sensor*.  
  **Ans.** measures forces at the wrist
- **Q.** Define *Tactile Sensor*.  
  **Ans.** senses touch and pressure
- **Q.** Define *Machine Vision*.  
  **Ans.** image acquisition and analysis for robots
- **Q.** Define *Image Segmentation*.  
  **Ans.** separating objects from background
- **Q.** Define *Camera Calibration*.  
  **Ans.** finding camera parameters
- **Q.** Define *Servo Motor*.  
  **Ans.** closed-loop motor for joints
- **Q.** Define *Stepper Motor*.  
  **Ans.** open-loop position control
- **Q.** Define *Harmonic Drive*.  
  **Ans.** compact high-ratio gearing for joints

### Long answer (7 marks)

- **Q.** Explain *Internal Sensors* in detail with a neat diagram.  
  **Key points:** Sensors measure robot state. Encoder — measures joint position; Resolver — analog angular position sensor; Tachometer — measures joint velocity.
- **Q.** Explain *External Sensors* in detail with a neat diagram.  
  **Key points:** Sensors perceive the environment. Proximity Sensor — detects nearby objects; Force-Torque Sensor — measures forces at the wrist; Tactile Sensor — senses touch and pressure.
- **Q.** Explain *Robot Vision* in detail with a neat diagram.  
  **Key points:** Cameras give rich information. Machine Vision — image acquisition and analysis for robots; Image Segmentation — separating objects from background; Camera Calibration — finding camera parameters.
- **Q.** Explain *Robot Actuators* in detail with a neat diagram.  
  **Key points:** Robots are driven by motors or fluid power. Servo Motor — closed-loop motor for joints; Stepper Motor — open-loop position control; Harmonic Drive — compact high-ratio gearing for joints.

## Unit 5: Programming & Applications

### Short answer (2-3 marks)

- **Q.** Define *Lead-through Programming*.  
  **Ans.** operator moves robot to teach points
- **Q.** Define *Teach Pendant*.  
  **Ans.** handheld device for programming
- **Q.** Define *Offline Programming*.  
  **Ans.** programs created in simulation
- **Q.** Define *VAL*.  
  **Ans.** early robot programming language
- **Q.** Define *Motion Commands*.  
  **Ans.** MOVE, APPROACH and DEPART
- **Q.** Define *ROS*.  
  **Ans.** robot operating system framework
- **Q.** Define *Spot Welding Robots*.  
  **Ans.** used in automobile body shops
- **Q.** Define *Painting Robots*.  
  **Ans.** spray painting with consistent quality
- **Q.** Define *Material Handling*.  
  **Ans.** pick-and-place and palletising
- **Q.** Define *Mobile Robot*.  
  **Ans.** wheeled or legged robot that navigates
- **Q.** Define *Cobot*.  
  **Ans.** collaborative robot working safely with humans
- **Q.** Define *Robot Safety*.  
  **Ans.** guarding, sensors and emergency stops

### Long answer (7 marks)

- **Q.** Explain *Robot Programming Methods* in detail with a neat diagram.  
  **Key points:** Robots are taught or programmed. Lead-through Programming — operator moves robot to teach points; Teach Pendant — handheld device for programming; Offline Programming — programs created in simulation.
- **Q.** Explain *Robot Languages* in detail with a neat diagram.  
  **Key points:** Languages express robot tasks. VAL — early robot programming language; Motion Commands — MOVE, APPROACH and DEPART; ROS — robot operating system framework.
- **Q.** Explain *Industrial Applications* in detail with a neat diagram.  
  **Key points:** Robots automate manufacturing. Spot Welding Robots — used in automobile body shops; Painting Robots — spray painting with consistent quality; Material Handling — pick-and-place and palletising.
- **Q.** Explain *Mobile Robots & Safety* in detail with a neat diagram.  
  **Key points:** Robots move and work with humans. Mobile Robot — wheeled or legged robot that navigates; Cobot — collaborative robot working safely with humans; Robot Safety — guarding, sensors and emergency stops.

