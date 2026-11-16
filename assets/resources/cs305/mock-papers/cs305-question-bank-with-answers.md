# CS-305 Object Oriented Programming & Methodology — Question Bank with Answer Hints

## Unit 1: OOP Concepts & Classes

### Short answer (2-3 marks)

- **Q.** Define *Object*.  
  **Ans.** instance of a class with state and behaviour
- **Q.** Define *Class*.  
  **Ans.** blueprint defining attributes and methods
- **Q.** Define *Procedural Programming*.  
  **Ans.** program organised as functions acting on shared data
- **Q.** Define *Encapsulation*.  
  **Ans.** wrapping data and functions into a single unit
- **Q.** Define *Access Specifier*.  
  **Ans.** private, protected or public visibility control
- **Q.** Define *Getter and Setter*.  
  **Ans.** methods giving controlled access to private fields
- **Q.** Define *Constructor*.  
  **Ans.** method with the class name called automatically at creation
- **Q.** Define *Copy Constructor*.  
  **Ans.** creates an object as a copy of another object
- **Q.** Define *Destructor*.  
  **Ans.** called when an object is destroyed to release resources
- **Q.** Define *Static Data Member*.  
  **Ans.** single copy shared by all objects of a class
- **Q.** Define *Friend Function*.  
  **Ans.** non-member function allowed to access private members
- **Q.** Define *this Pointer*.  
  **Ans.** implicit pointer to the object invoking a member function

### Long answer (7 marks)

- **Q.** Explain *Procedural vs Object-Oriented Programming* in detail with a neat diagram.  
  **Key points:** OOP organises programs around objects that combine data and behaviour. Object — instance of a class with state and behaviour; Class — blueprint defining attributes and methods; Procedural Programming — program organised as functions acting on shared data.
- **Q.** Explain *Encapsulation & Data Hiding* in detail with a neat diagram.  
  **Key points:** Encapsulation bundles data with methods and restricts direct access. Encapsulation — wrapping data and functions into a single unit; Access Specifier — private, protected or public visibility control; Getter and Setter — methods giving controlled access to private fields.
- **Q.** Explain *Constructors & Destructors* in detail with a neat diagram.  
  **Key points:** Special member functions manage object lifetime. Constructor — method with the class name called automatically at creation; Copy Constructor — creates an object as a copy of another object; Destructor — called when an object is destroyed to release resources.
- **Q.** Explain *Static Members & Friend Functions* in detail with a neat diagram.  
  **Key points:** Some members belong to the class rather than objects. Static Data Member — single copy shared by all objects of a class; Friend Function — non-member function allowed to access private members; this Pointer — implicit pointer to the object invoking a member function.

## Unit 2: Inheritance

### Short answer (2-3 marks)

- **Q.** Define *Base Class*.  
  **Ans.** class whose members are inherited
- **Q.** Define *Derived Class*.  
  **Ans.** class that inherits and adds members
- **Q.** Define *IS-A Relationship*.  
  **Ans.** inheritance models that a derived object is a kind of base
- **Q.** Define *Multilevel Inheritance*.  
  **Ans.** class derived from another derived class
- **Q.** Define *Multiple Inheritance*.  
  **Ans.** class derived from more than one base class
- **Q.** Define *Hierarchical Inheritance*.  
  **Ans.** many classes derived from one base
- **Q.** Define *Diamond Problem*.  
  **Ans.** ambiguity when two parents share a base class
- **Q.** Define *Virtual Base Class*.  
  **Ans.** ensures only one copy of the shared base
- **Q.** Define *Constructor Order*.  
  **Ans.** base constructors run before derived constructors
- **Q.** Define *Composition*.  
  **Ans.** HAS-A relationship where an object contains others
- **Q.** Define *Aggregation*.  
  **Ans.** weak HAS-A where parts can exist independently
- **Q.** Define *Liskov Substitution*.  
  **Ans.** derived objects must be usable wherever base objects are

### Long answer (7 marks)

- **Q.** Explain *Inheritance Basics* in detail with a neat diagram.  
  **Key points:** A derived class reuses and extends a base class. Base Class — class whose members are inherited; Derived Class — class that inherits and adds members; IS-A Relationship — inheritance models that a derived object is a kind of base.
- **Q.** Explain *Types of Inheritance* in detail with a neat diagram.  
  **Key points:** Classes can be combined in several hierarchies. Multilevel Inheritance — class derived from another derived class; Multiple Inheritance — class derived from more than one base class; Hierarchical Inheritance — many classes derived from one base.
- **Q.** Explain *Diamond Problem & Virtual Base Class* in detail with a neat diagram.  
  **Key points:** Multiple inheritance can duplicate a common ancestor. Diamond Problem — ambiguity when two parents share a base class; Virtual Base Class — ensures only one copy of the shared base; Constructor Order — base constructors run before derived constructors.
- **Q.** Explain *Composition vs Inheritance* in detail with a neat diagram.  
  **Key points:** Objects can also be built from other objects. Composition — HAS-A relationship where an object contains others; Aggregation — weak HAS-A where parts can exist independently; Liskov Substitution — derived objects must be usable wherever base objects are.

## Unit 3: Polymorphism

### Short answer (2-3 marks)

- **Q.** Define *Function Overloading*.  
  **Ans.** multiple functions sharing a name with different signatures
- **Q.** Define *Compile-time Polymorphism*.  
  **Ans.** binding decided by the compiler
- **Q.** Define *Default Arguments*.  
  **Ans.** parameters given values when the caller omits them
- **Q.** Define *Operator Overloading*.  
  **Ans.** giving an operator a meaning for class objects
- **Q.** Define *Unary Operator Overload*.  
  **Ans.** operator function with no explicit argument as a member
- **Q.** Define *Non-overloadable Operators*.  
  **Ans.** scope ::, member access ., sizeof and ?:
- **Q.** Define *Virtual Function*.  
  **Ans.** member function resolved at runtime through a base pointer
- **Q.** Define *Late Binding*.  
  **Ans.** function call bound during execution
- **Q.** Define *vtable*.  
  **Ans.** table of virtual function pointers kept per class
- **Q.** Define *Pure Virtual Function*.  
  **Ans.** virtual function declared = 0 with no body
- **Q.** Define *Abstract Class*.  
  **Ans.** class with at least one pure virtual function; cannot be instantiated
- **Q.** Define *Interface*.  
  **Ans.** class containing only abstract methods, defining a contract

### Long answer (7 marks)

- **Q.** Explain *Function Overloading* in detail with a neat diagram.  
  **Key points:** Same name, different parameter lists, resolved at compile time. Function Overloading — multiple functions sharing a name with different signatures; Compile-time Polymorphism — binding decided by the compiler; Default Arguments — parameters given values when the caller omits them.
- **Q.** Explain *Operator Overloading* in detail with a neat diagram.  
  **Key points:** Operators can be redefined for user-defined types. Operator Overloading — giving an operator a meaning for class objects; Unary Operator Overload — operator function with no explicit argument as a member; Non-overloadable Operators — scope ::, member access ., sizeof and ?:.
- **Q.** Explain *Virtual Functions & Runtime Polymorphism* in detail with a neat diagram.  
  **Key points:** Dynamic binding chooses the method from the object type. Virtual Function — member function resolved at runtime through a base pointer; Late Binding — function call bound during execution; vtable — table of virtual function pointers kept per class.
- **Q.** Explain *Abstract Classes & Interfaces* in detail with a neat diagram.  
  **Key points:** Abstract classes define contracts for subclasses. Pure Virtual Function — virtual function declared = 0 with no body; Abstract Class — class with at least one pure virtual function; cannot be instantiated; Interface — class containing only abstract methods, defining a contract.

## Unit 4: Exceptions, Templates & I/O

### Short answer (2-3 marks)

- **Q.** Define *try Block*.  
  **Ans.** code that may throw an exception
- **Q.** Define *catch Block*.  
  **Ans.** handler that receives a thrown exception
- **Q.** Define *finally or Cleanup*.  
  **Ans.** code that always runs, e.g. to release resources
- **Q.** Define *Function Template*.  
  **Ans.** generic function parameterised by type
- **Q.** Define *Class Template*.  
  **Ans.** generic class such as a container of any type
- **Q.** Define *STL*.  
  **Ans.** standard template library of containers, iterators and algorithms
- **Q.** Define *Stream*.  
  **Ans.** sequence of bytes flowing to or from a device
- **Q.** Define *ifstream and ofstream*.  
  **Ans.** classes for reading and writing files
- **Q.** Define *File Modes*.  
  **Ans.** flags such as ios::in, ios::out and ios::app
- **Q.** Define *JVM*.  
  **Ans.** Java virtual machine executing platform-independent bytecode
- **Q.** Define *Garbage Collector*.  
  **Ans.** automatically frees unreachable objects
- **Q.** Define *Interface in Java*.  
  **Ans.** type declaring methods a class must implement

### Long answer (7 marks)

- **Q.** Explain *Exception Handling* in detail with a neat diagram.  
  **Key points:** Exceptions separate error handling from normal logic. try Block — code that may throw an exception; catch Block — handler that receives a thrown exception; finally or Cleanup — code that always runs, e.g. to release resources.
- **Q.** Explain *Templates & Generic Programming* in detail with a neat diagram.  
  **Key points:** Templates write type-independent code. Function Template — generic function parameterised by type; Class Template — generic class such as a container of any type; STL — standard template library of containers, iterators and algorithms.
- **Q.** Explain *Streams & File Handling* in detail with a neat diagram.  
  **Key points:** Streams abstract input and output devices. Stream — sequence of bytes flowing to or from a device; ifstream and ofstream — classes for reading and writing files; File Modes — flags such as ios::in, ios::out and ios::app.
- **Q.** Explain *Java Basics for OOP* in detail with a neat diagram.  
  **Key points:** Java enforces object orientation with a managed runtime. JVM — Java virtual machine executing platform-independent bytecode; Garbage Collector — automatically frees unreachable objects; Interface in Java — type declaring methods a class must implement.

## Unit 5: Object-Oriented Design & UML

### Short answer (2-3 marks)

- **Q.** Define *OOA*.  
  **Ans.** analysis modelling the problem domain as objects
- **Q.** Define *OOD*.  
  **Ans.** design defining classes, interfaces and collaborations
- **Q.** Define *Cohesion and Coupling*.  
  **Ans.** good design has high cohesion and low coupling
- **Q.** Define *Class Diagram*.  
  **Ans.** shows classes, attributes, methods and associations
- **Q.** Define *Multiplicity*.  
  **Ans.** number of instances participating in an association, e.g. 1..*
- **Q.** Define *Generalisation*.  
  **Ans.** UML arrow showing inheritance
- **Q.** Define *Use Case Diagram*.  
  **Ans.** actors and the services the system provides
- **Q.** Define *Sequence Diagram*.  
  **Ans.** ordered message exchange between objects over time
- **Q.** Define *State Chart Diagram*.  
  **Ans.** states of an object and transitions between them
- **Q.** Define *Singleton Pattern*.  
  **Ans.** ensures a class has only one instance
- **Q.** Define *Factory Pattern*.  
  **Ans.** creates objects without exposing creation logic
- **Q.** Define *Observer Pattern*.  
  **Ans.** notifies dependents automatically when a subject changes

### Long answer (7 marks)

- **Q.** Explain *Object-Oriented Analysis & Design* in detail with a neat diagram.  
  **Key points:** OOAD identifies objects and their responsibilities from requirements. OOA — analysis modelling the problem domain as objects; OOD — design defining classes, interfaces and collaborations; Cohesion and Coupling — good design has high cohesion and low coupling.
- **Q.** Explain *UML Class & Object Diagrams* in detail with a neat diagram.  
  **Key points:** Structural diagrams show classes and relationships. Class Diagram — shows classes, attributes, methods and associations; Multiplicity — number of instances participating in an association, e.g. 1..*; Generalisation — UML arrow showing inheritance.
- **Q.** Explain *UML Behavioural Diagrams* in detail with a neat diagram.  
  **Key points:** Dynamic diagrams show interactions and states. Use Case Diagram — actors and the services the system provides; Sequence Diagram — ordered message exchange between objects over time; State Chart Diagram — states of an object and transitions between them.
- **Q.** Explain *Design Patterns Overview* in detail with a neat diagram.  
  **Key points:** Patterns are reusable solutions to recurring design problems. Singleton Pattern — ensures a class has only one instance; Factory Pattern — creates objects without exposing creation logic; Observer Pattern — notifies dependents automatically when a subject changes.

