---
title: Clean Architecture
author: Nguyen Nang
authorImage: https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=50
coverImage: https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=50
date: 2024-11-24
draft: false
---

Clean Architecture is a software design philosophy aimed at creating systems that are flexible, maintainable, and scalable. Introduced by Robert C. Martin, it emphasizes the separation of concerns and the independence of various components within a software system. Here’s a detailed overview of its principles, structure, and benefits.

## Core Principles of Clean Architecture

1. **Separation of Concerns**: Each component in a system should have a distinct responsibility. This principle helps reduce complexity and makes the system easier to understand and modify [1](https://dev.to/sardarmudassaralikhan/clean-architecture-used-in-software-development-5gpc) [4](https://www.geeksforgeeks.org/complete-guide-to-clean-architecture/)
 
	*Definition*: Separation of Concerns (SoC) is a design principle in software engineering. It suggests that a system should be divided into distinct sections, each responsible for a specific part of the functionality.
 
	*Distinct Responsibility*: Each component or module in the system should handle a single aspect or concern. For example, in a web application, you might have separate modules for handling user input, processing data, and displaying results.

	*Reducing Complexity*: By separating concerns, you make each part of the system simpler and more focused. This reduces the overall complexity because each module can be developed, tested, and understood independently.

	*Ease of Understanding and Modification*: When concerns are separated, it's easier to understand how the system works because you can look at one part at a time. It also makes the system easier to modify. If you need to change how data is processed, you can do so without affecting the user input or display modules.

	Example: Imagine a car. The engine, transmission, and brakes are all separate components with distinct responsibilities. If you need to repair the brakes, you don't need to touch the engine. This separation makes the car easier to maintain and understand.

2. **Dependency Rule**: Dependencies should only point inward toward more abstract layers. The inner layers (like business rules) should not depend on outer layers (like UI or database), ensuring that core logic remains unaffected by changes in external components [3](https://bitloops.com/docs/bitloops-language/learning/software-architecture/clean-architecture) [5](https://bixlabs.com/clean-architecture/)

	*Definition*: The Dependency Rule is a principle in software architecture that dictates how different parts of a system should depend on each other. Specifically, it states that dependencies should only point inward toward more abstract layers.

	*Layered Architecture*: In a typical layered architecture, you have different layers with varying levels of abstraction:
	  - Outer Layers: These include the user interface (UI), database, and other external components.
	  - Inner Layers: These are more abstract and include core business logic and rules.

	*Inward Dependencies*: According to the Dependency Rule, outer layers can depend on inner layers, but not the other way around. This means:
	  - The UI can call functions from the business logic layer.
	  - The business logic layer should not call functions from the UI layer.

	*Benefits*:
	  - Isolation of Core Logic: By ensuring that core business logic does not depend on external components, you protect it from changes in those components. For example, if you change the database or UI, the core logic remains unaffected.
	  - Easier Testing: Inner layers can be tested independently of the outer layers. This makes unit testing more straightforward and reliable.
	  - Flexibility and Maintainability: You can modify or replace outer layers without impacting the core logic. This makes the system more adaptable to changes and easier to maintain.

	*Example*: Imagine you have an application with a user interface, a business logic layer, and a database. If you decide to switch from a SQL database to a NoSQL database, the business logic layer should not need any changes because it does not depend on the database directly. Instead, it interacts with an abstract data access layer that can be adapted to different databases.

3. **Single Responsibility Principle (SRP)**: Each class or module should have one reason to change, which simplifies maintenance and enhances clarity [4](https://www.geeksforgeeks.org/complete-guide-to-clean-architecture/) [5](https://bixlabs.com/clean-architecture/)

	*Definition*: SRP states that a class or module should have only one reason to change. This means that each class or module should be responsible for a single part of the functionality provided by the software.

	*One Reason to Change*: If a class has more than one responsibility, it has more than one reason to change. For example, if a class handles both user authentication and data logging, changes in either of these areas would require changes to the class. This can lead to a more complex and error-prone codebase
	
	*Simplifies Maintenance*: By ensuring that each class or module has a single responsibility, you make the system easier to maintain. When a change is needed, you know exactly where to make it, and you can do so without worrying about unintended side effects in other parts of the system.

	*Enhances Clarity*: Classes and modules with a single responsibility are easier to understand. Each one does one thing and does it well, making the overall system more comprehensible.
	
	Example: Imagine you have a class that handles both user input validation and database operations. According to SRP, you should split this into two classes: one for input validation and one for database operations. This way, if you need to change the validation logic, you only need to modify the validation class, leaving the database operations class untouched.

4. **Open-Closed Principle**: Software entities should be open for extension but closed for modification, allowing new functionality to be added without altering existing code [2](https://codilime.com/blog/clean-architecture/) [4](https://www.geeksforgeeks.org/complete-guide-to-clean-architecture/).

	*Definition*: OCP states that software entities (such as classes, modules, and functions) should be open for extension but closed for modification. This means you should be able to add new functionality to a system without changing existing code.

	*Open for Extension*: You can extend the behavior of a system by adding new code. For example, you might add new classes or methods to introduce new features or capabilities

	*Closed for Modification*: Existing code should not be changed when adding new functionality. This helps to prevent introducing bugs into the system and ensures that existing functionality remains stable.

	*Benefits*:
	  - Stability: By not modifying existing code, you reduce the risk of breaking existing functionality.
	  - Maintainability: The system becomes easier to maintain because new features can be added without altering the core codebase.
	  - Scalability: It allows the system to grow and evolve over time without requiring significant rewrites.

	Example: Imagine you have a class that calculates discounts for a shopping cart. Initially, it only supports a percentage discount. Later, you want to add support for a fixed amount discount. Instead of modifying the existing class, you can extend it by creating a new class that handles the fixed amount discount. The original class remains unchanged, adhering to the OCP.

5. **Interface Segregation Principle**: Clients should not be forced to depend on interfaces they do not use, promoting more focused and manageable interfaces [2](https://codilime.com/blog/clean-architecture/).

	 *Definition*: ISP states that clients (i.e., classes or modules that use interfaces) should not be forced to depend on interfaces they do not use. This means that interfaces should be specific and focused, rather than large and general.

	*Focused Interfaces*: Instead of having one large interface with many methods, it's better to have several smaller, more specific interfaces. Each interface should contain only the methods that are relevant to a particular client

	*Benefits*:
	  - Manageability: Smaller, focused interfaces are easier to understand and manage. Clients only need to implement the methods they actually use.
	  - Flexibility: Changes to an interface are less likely to affect clients that do not use the modified methods. This reduces the risk of breaking existing code.
	  - Decoupling: By using specific interfaces, you decouple clients from unnecessary functionality, making the system more modular and easier to maintain.

	Example: Imagine you have a large interface called IWorker with methods like StartWork(), StopWork(), PauseWork(), and ResumeWork(). Not all clients need all these methods. According to ISP, you should split this into smaller interfaces, such as IStartable, IStoppable, IPausable, and IResumable. Clients can then implement only the interfaces they need.

## Structure of Clean Architecture

Clean Architecture is typically represented as concentric circles or layers, each serving a specific role:

- **Entities**: The innermost layer contains business rules and domain logic that define the core functionality of the application. Entities are independent of any external factors [3](https://bitloops.com/docs/bitloops-language/learning/software-architecture/clean-architecture) [5](https://bixlabs.com/clean-architecture/).
- **Use Cases**: This layer describes the interactions users can have with the system, encapsulating the application-specific business rules. Use cases interact with entities but remain agnostic of how data is presented or stored [5](https://bixlabs.com/clean-architecture/).
- **Interface Adapters**: This layer translates data between the format used by the use cases and that used by external agents like databases or user interfaces. It acts as a bridge between the inner business logic and outer technical details [2](https://codilime.com/blog/clean-architecture/) [4](https://www.geeksforgeeks.org/complete-guide-to-clean-architecture/).
- **Frameworks and Drivers**: The outermost layer includes all external tools and frameworks (e.g., web frameworks, databases). This layer is subject to change without impacting the core business logic [2](https://codilime.com/blog/clean-architecture/) [4](https://www.geeksforgeeks.org/complete-guide-to-clean-architecture/).

![[Clean Architecture Image 1.png]]

![[Clean Architecture Image 2.png]]
![[Clean Architecture Image 3.png]]

## Benefits of Clean Architecture

1. **Maintainability**: By isolating components and defining clear interfaces, developers can make changes with minimal risk of introducing errors into other parts of the system [1](https://dev.to/sardarmudassaralikhan/clean-architecture-used-in-software-development-5gpc) [4](https://www.geeksforgeeks.org/complete-guide-to-clean-architecture/).
2. **Testability**: The separation of concerns allows for easier unit testing as components can be tested independently without requiring the entire system to be operational [3](https://bitloops.com/docs/bitloops-language/learning/software-architecture/clean-architecture) [4](https://www.geeksforgeeks.org/complete-guide-to-clean-architecture/).
3. **Scalability**: Clean architecture supports adding new features or modifying existing ones without significant rework, making it easier to evolve systems over time [1](https://dev.to/sardarmudassaralikhan/clean-architecture-used-in-software-development-5gpc) [2](https://codilime.com/blog/clean-architecture/).
4. **Independence from Frameworks**: Applications built using clean architecture can switch frameworks or libraries with minimal impact on the overall system, facilitating long-term adaptability to new technologies [2](https://codilime.com/blog/clean-architecture/) [4](https://www.geeksforgeeks.org/complete-guide-to-clean-architecture/).
5. **Flexibility**: The architecture allows changes in user interface or database technology without affecting core business rules, making it suitable for applications that need to adapt to changing requirements [3](https://bitloops.com/docs/bitloops-language/learning/software-architecture/clean-architecture) [5](https://bixlabs.com/clean-architecture/).

In summary, Clean Architecture provides a robust framework for developing software systems that are modular, maintainable, and adaptable to change, ultimately improving developer productivity and reducing long-term costs associated with software maintenance.