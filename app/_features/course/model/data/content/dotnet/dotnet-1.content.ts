import { DocumentContent } from "../content.types";

export const dotnetSyllabus : DocumentContent = {
  title: 'Basics of .NET',
  description: 'Introduction to .NET fundamentals',
  sections: [
    {
      title: 'Introduction',
      description: 'Overview of .NET',
      content: [
        {
          type: 'heading',
          text: 'Welcome to .NET'
        },
        {
          type: 'paragraph',
          text: '.NET is a software development platform created by Microsoft that allows developers to build, run, and manage applications for web, desktop, mobile, and cloud environments.'
                + 'The first version of .NET was released in 2002.'
        },
        {
          type:'subheading',
          text:'🔧 Main Tools for .NET Development'
        },
        {
          type:'list',
          items:[
            'Visual Studio: A powerful integrated development environment (IDE) for .NET development.',
            'Visual Studio Code: A lightweight code editor that supports .NET development with extensions.',
            'Command Line Interface (CLI): A set of tools for building and managing .NET applications from the command line.',
            'NuGet: A package manager for .NET that allows developers to easily add libraries and dependencies to their projects.',
            'SQL Server Management Studio: A tool for managing SQL Server databases, often used in conjunction with Entity Framework Core for data access in .NET applications.'
          ]
        },
        {
          type:'subheading',
          text:'💡 Why Learn .NET?'
        },
        {
          type:'paragraph',
          text:'Learning .NET opens up a wide range of opportunities for developers, as it is a versatile and widely-used platform for building various types of applications. With .NET, you can create web applications, desktop applications, mobile apps, games, and more. Additionally, .NET has a large and active community, which means there are plenty of resources and support available for developers.'
        },
        {
          type: 'subheading',
          text: 'Key Features of .NET'
        },
        {
          type: 'list',
          items: [
            'Cross-platform: .NET Core allows developers to build applications that can run on Windows, Linux, and macOS.',
            'Performance: .NET is known for its high performance and scalability, making it suitable for building large-scale applications.',
            'Language Support: .NET supports multiple programming languages, including C#, F#, and Visual Basic.',
            'Rich Libraries: .NET provides a vast library of pre-built components and frameworks that can be used to accelerate development.',
            'Community and Ecosystem: .NET has a large and active community, which means there are plenty of resources, tools, and third-party libraries available for developers.',
            'Integration with Microsoft Products: .NET integrates seamlessly with other Microsoft products and services, such as Azure, SQL Server, and Visual Studio, making it a popular choice for enterprise development.',
            'Open Source: .NET Core is open source, which allows developers to contribute to the platform and benefit from community-driven improvements and innovations.',
            'Versatility: .NET can be used to build a wide range of applications, including web applications, desktop applications, mobile apps, games, and more.',
            
            'Type Safety: C# provides strong type checking at compile time, reducing runtime errors and improving code reliability.',
            'Memory Management: .NET includes automatic garbage collection that efficiently manages memory, reducing memory leaks and improving application stability.',
            'ASP.NET Framework: Powerful framework for building dynamic web applications, REST APIs, and real-time applications using SignalR.',
            'Entity Framework: Object-Relational Mapping (ORM) tool that simplifies database operations and allows developers to work with data using C# objects instead of SQL queries.',
            'LINQ (Language Integrated Query): Enables developers to query data from various sources (databases, collections, XML, etc.) using a unified, type-safe syntax directly in C#.',
            'Dependency Injection: Built-in IoC (Inversion of Control) container for managing dependencies, promoting loose coupling and better testability.',
            'Unit Testing Support: Integrated testing frameworks like xUnit, NUnit, and MSTest make it easy to write and run unit tests.',
            'Security Features: Includes built-in support for authentication, authorization, encryption, and protection against common security vulnerabilities.',
            'Async/Await: Native support for asynchronous programming, making it easier to write non-blocking, responsive applications.',
            'Docker Support: .NET applications can be easily containerized using Docker, enabling consistent deployment across different environments.',
            'Cloud-Ready: Seamless integration with cloud platforms like Azure, AWS, and Google Cloud, making it ideal for cloud-native applications.',
            'Microservices Architecture: .NET framework supports building microservices-based applications, enabling better scalability and maintainability.',
            'RESTful API Development: Built-in support for creating RESTful services with proper HTTP verb handling and content negotiation.',
            'Real-time Communication: SignalR enables real-time, bi-directional communication between server and clients, useful for chat applications and live notifications.',
            'NuGet Package Manager: Extensive package manager with thousands of pre-built libraries and tools available for quick integration.',
            'Cross-version Compatibility: .NET allows running different versions side-by-side without conflicts, supporting long-term support (LTS) versions.',
            'Configuration Management: Built-in configuration providers for managing different settings across development, staging, and production environments.',
            'Logging and Diagnostics: Comprehensive logging framework and diagnostic tools for monitoring application performance and troubleshooting issues.'
          ]
        },
        {
          type: 'subheading',
          text:'What is CLR and Why Does It Matter?'
        },
        {
          type:'paragraph',
          text:'The Common Language Runtime is the execution environment and virtual machine for .NET applications. It abstracts away platform-specific details, allowing code to run across different operating systems.'
        },
        {
          type:'subheading',
          text:' CLR EXECUTION MODEL'
        },
        {
          type:'example',
          text:'The Compilation Pipeline',
          description:'C# Code → Compiler → IL (Intermediate Language) → CLR JIT → Native Machine Code'
        },
        {
          type:'subheading',
          text:'CLR Generational Garbage Collection Model'
        },
        {
          type:'paragraph',
          text:'You are absolutely right! The CLR (Common Language Runtime) used by .NET implements a generational garbage collection model. Let me break this down: '
        },
        {
          type:'subheading',
          text:'CLR Generational GC Structure'
        },
        {
            type: 'grid',
            columns: 2,
            gridItems: [
              {
                id: 'gen0',
                title: 'Generation 0',
                icon: '⚡',
                description: 'Recently allocated objects',
                detail: 'Collected MOST frequently (~256KB)',
                color: '#ff6b6b',
                metadata: {
                  frequency: 'Very High',
                  size: '~256KB'
                }
              },
              {
                id: 'gen1',
                title: 'Generation 1',
                icon: '⏱️',
                description: 'Survivor objects',
                detail: 'Collected less frequently (~4-8MB)',
                color: '#ffd43b',
                metadata: {
                  frequency: 'Medium',
                  size: '~4-8MB'
                }
              },
              {
                id: 'gen2',
                title: 'Generation 2',
                icon: '📦',
                description: 'Long-lived objects',
                detail: 'Collected LEAST frequently',
                color: '#51cf66',
                metadata: {
                  frequency: 'Low',
                  size: 'Large'
                }
              },
              {
                id: 'loh',
                title: 'Large Object Heap (LOH)',
                icon: '🗂️',
                description: 'Objects > 85KB',
                detail: 'Collected with Gen 2',
                color: '#748ffc',
                metadata: {
                  frequency: 'With Gen 2',
                  size: 'Variable'
                }
              }
            ]
          },
        {
          type:'subheading',
          text:' MEMORY MANAGEMENT'
        },
        {
          type:'subheading',
          text:'GARBAGE COLLECTION(GC)'
        },
        {
          type:'paragraph',
          text:'GC is a form of automatic memory management that identifies and frees memory allocated to objects that are no longer reachable or in use. Instead of requiring programmers to manually deallocate memory, the garbage collector handles this automatically.'
        },
        {
          type:'paragraph',
          text:'Types of Garbage Collection'
        },
        {
          type:'list',
          items:[
            'Generational GC: Objects are categorized into generations based on their lifespan. New objects are allocated in Generation 0, and if they survive multiple GC cycles, they are promoted to higher generations (Generation 1 and Generation 2). This approach optimizes performance by focusing on collecting short-lived objects more frequently.',
            'Concurrent GC: Allows the garbage collection process to run concurrently with the application, minimizing pause times and improving responsiveness.',
            'Server GC: Optimized for server applications, it uses multiple threads to perform garbage collection in parallel, improving throughput and scalability.',
            'Workstation GC: Designed for desktop applications, it focuses on minimizing pause times to provide a responsive user experience.',
            'Background GC: Runs in the background while the application is running, allowing for more efficient memory management without impacting application performance.',
            'Low Latency GC: A specialized mode of garbage collection that minimizes pause times, making it suitable for real-time applications or scenarios where low latency is critical.',
            'Ephemeral GC: A lightweight garbage collection mode that focuses on collecting short-lived objects quickly, reducing overhead and improving performance for applications with high object allocation rates.',
            'Non-Blocking GC: A garbage collection mode that allows the application to continue running while garbage collection is in progress, minimizing disruptions and improving overall performance.',
          ]
        }

      ]
    },
    {
      title: 'Environment Setup',
      content: [
        {
          type: 'list',
          items: [ 
            'Visual Studio ',
            'Microsoft .NET Core latest - VS Tooling Preview 2',
          ]
        },
        {
          type:'subheading',
          text:'Installation of Visual Studio'
        },
        {
          type:'paragraph',
          text:'To install Visual Studio, follow these steps:'
        },
        {
          type:'list',
          items: [
            '1. Go to the Visual Studio website: https://visualstudio.microsoft.com/downloads/',
            '2. Choose the edition of Visual Studio that best suits your needs (Community, Professional, or Enterprise) and click on the "Download" button.',
            '3. Once the installer is downloaded, run it and follow the on-screen instructions to complete the installation process.',
            '4. During installation, you can select the workloads and components you want to install based on your development needs (e.g., .NET desktop development, ASP.NET and web development, etc.).',
            '5. After installation is complete, launch Visual Studio and sign in with your Microsoft account if prompted.'
          ]
        },
        

      ]
    }
  ]
};