import { CourseData } from '../course.types';

export const dotnetDevelopment: CourseData = {
  id: 'dotnet-development',
  title: '.NET Development',
  description: 'Build scalable backend applications using .NET and C#',
  difficulty: 'Intermediate',
  duration: '30 hours',
  rating: 4.8,
  students: '1.1M',
  icon: '🟣',
  color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
  overview:
    'Learn .NET from the ground up. This course covers C#, ASP.NET Core, Web APIs, Entity Framework, and real-world backend development. Perfect for developers who want to build scalable and high-performance applications.',
  skills: [
    'C# Fundamentals',
    'ASP.NET Core',
    'Web API Development',
    'Entity Framework Core',
    'LINQ',
    'Authentication & Authorization'
  ],

  documents: [
    {
      id: 1,
      title: 'Basics of .NET',
      type: 'pdf',
      size: '3.0 MB',
      downloadUrl: '#',
      description: 'Covers fundamentals of .NET including runtime, architecture, and key components'
    },
    {
      id: 2,
      title: 'C# Basics Cheat Sheet',
      type: 'pdf',
      size: '1.5 MB',
      downloadUrl: '#',
      description: 'Quick reference for C# syntax and concepts'
    },
    {
      id: 3,
      title: 'ASP.NET Core Slides',
      type: 'slides',
      size: '6.2 MB',
      downloadUrl: '#',
      description: 'Presentation on ASP.NET Core fundamentals'
    },
    {
      id: 4,
      title: 'API Code Examples',
      type: 'code',
      size: '1.2 MB',
      downloadUrl: '#',
      description: 'Sample Web API projects'
    },
    {
      id: 5,
      title: 'Practice Workbook',
      type: 'worksheet',
      size: '3.5 MB',
      downloadUrl: '#',
      description: 'Hands-on exercises with solutions'
    },
    {
      id: 6,
      title: 'Entity Framework Notes',
      type: 'notes',
      size: '1.1 MB',
      downloadUrl: '#',
      description: 'Detailed notes on EF Core'
    }
  ],

  modules: [
    {
      id: 1,
      title: 'Getting Started with .NET',
      lessons: [
        {
          id: 1,
          title: 'Introduction to .NET',
          duration: '12 min',
          type: 'video',
          completed: true,
          locked: false,
          description: 'Overview of .NET platform and ecosystem'
        },
        {
          id: 2,
          title: 'Your First C# Program',
          duration: '20 min',
          type: 'exercise',
          completed: true,
          locked: false,
          description: 'Write your first C# console application',
          content: 'Console.WriteLine("Hello, .NET!");'
        },
        {
          id: 3,
          title: 'Variables and Data Types in C#',
          duration: '25 min',
          type: 'exercise',
          completed: false,
          locked: false,
          description: 'Learn variables and data types in C#',
          Instructions: `1. Declare variables using int, string, and bool.
2. Assign values to them.
3. Print values using Console.WriteLine().`,
          content: 'int age = 25;\nstring name = "John";\nConsole.WriteLine(name + " " + age);'
        }
      ]
    },

    {
      id: 2,
      title: 'Working with ASP.NET Core',
      lessons: [
        {
          id: 4,
          title: 'Introduction to ASP.NET Core',
          duration: '20 min',
          type: 'video',
          completed: false,
          locked: false,
          description: 'Understand ASP.NET Core basics'
        },
        {
          id: 5,
          title: 'Creating Your First Web API',
          duration: '30 min',
          type: 'exercise',
          completed: false,
          locked: false,
          description: 'Build your first API using ASP.NET Core',
          content: `var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();`
        },
        {
          id: 6,
          title: 'Routing and Controllers',
          duration: '25 min',
          type: 'exercise',
          completed: false,
          locked: false,
          description: 'Learn routing and controllers in ASP.NET Core'
        }
      ]
    },

    {
      id: 3,
      title: 'Database and Entity Framework',
      lessons: [
        {
          id: 7,
          title: 'Introduction to Entity Framework Core',
          duration: '25 min',
          type: 'video',
          completed: false,
          locked: false,
          description: 'Understand ORM and EF Core basics'
        },
        {
          id: 8,
          title: 'CRUD Operations with EF Core',
          duration: '35 min',
          type: 'exercise',
          completed: false,
          locked: false,
          description: 'Perform Create, Read, Update, Delete operations'
        },
        {
          id: 9,
          title: 'Final Project: REST API with Database',
          duration: '90 min',
          type: 'project',
          completed: false,
          locked: false,
          description: 'Build a complete REST API with database integration'
        }
      ]
    }
  ]
};