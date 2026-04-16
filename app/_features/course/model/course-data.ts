export interface Lesson {
  id: number;
  title: string;
  duration: string;
  type: 'video' | 'exercise' | 'quiz' | 'project';
  completed: boolean;
  locked: boolean;
  description: string;
  content?: string;
}

export interface Module {
  id: number;
  title: string;
  lessons: Lesson[];
}

export interface CourseData {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  rating: number;
  students: string;
  icon: string;
  color: string;
  overview: string;
  skills: string[];
  modules: Module[];
}

export const coursesData: Record<string, CourseData> = {
  'javascript-fundamentals': {
    id: 'javascript-fundamentals',
    title: 'JavaScript Fundamentals',
    description: 'Master the building blocks of JavaScript programming',
    difficulty: 'Beginner',
    duration: '20 hours',
    rating: 4.8,
    students: '2.5M',
    icon: '{ }',
    color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    overview: 'This comprehensive course will teach you JavaScript from the ground up. You\'ll learn core concepts through interactive exercises and real-world projects. Perfect for absolute beginners with no prior programming experience.',
    skills: ['Variables & Data Types', 'Functions', 'Arrays & Objects', 'DOM Manipulation', 'ES6+ Features', 'Async Programming'],
    modules: [
      {
        id: 1,
        title: 'Getting Started with JavaScript',
        lessons: [
          {
            id: 1,
            title: 'Introduction to JavaScript',
            duration: '10 min',
            type: 'video',
            completed: true,
            locked: false,
            description: 'Learn what JavaScript is and why it\'s important'
          },
          {
            id: 2,
            title: 'Your First JavaScript Program',
            duration: '15 min',
            type: 'exercise',
            completed: true,
            locked: false,
            description: 'Write your first "Hello World" program',
            content: 'console.log("Hello World!");'
          },
          {
            id: 3,
            title: 'Variables and Constants',
            duration: '20 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Learn about let, const, and var',
            content: 'let name = "John";\nconst age = 25;\nconsole.log(name, age);'
          },
          {
            id: 4,
            title: 'Data Types Quiz',
            duration: '10 min',
            type: 'quiz',
            completed: false,
            locked: false,
            description: 'Test your knowledge of JavaScript data types'
          }
        ]
      },
      {
        id: 2,
        title: 'Working with Functions',
        lessons: [
          {
            id: 5,
            title: 'Function Basics',
            duration: '15 min',
            type: 'video',
            completed: false,
            locked: false,
            description: 'Understanding functions and how to create them'
          },
          {
            id: 6,
            title: 'Function Parameters',
            duration: '20 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Learn to pass data to functions',
            content: 'function greet(name) {\n  return "Hello, " + name;\n}\nconsole.log(greet("Alice"));'
          },
          {
            id: 7,
            title: 'Arrow Functions',
            duration: '15 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Modern arrow function syntax',
            content: 'const add = (a, b) => a + b;\nconsole.log(add(5, 3));'
          }
        ]
      },
      {
        id: 3,
        title: 'Arrays and Objects',
        lessons: [
          {
            id: 8,
            title: 'Working with Arrays',
            duration: '25 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Learn array methods like map, filter, reduce'
          },
          {
            id: 9,
            title: 'Object Fundamentals',
            duration: '20 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Create and manipulate JavaScript objects'
          },
          {
            id: 10,
            title: 'Final Project: Todo List',
            duration: '60 min',
            type: 'project',
            completed: false,
            locked: false,
            description: 'Build a complete todo list application'
          }
        ]
      }
    ]
  },
  'react-beginners': {
    id: 'react-beginners',
    title: 'React for Beginners',
    description: 'Build modern web applications with React',
    difficulty: 'Intermediate',
    duration: '25 hours',
    rating: 4.9,
    students: '1.8M',
    icon: '⚛️',
    color: 'bg-gradient-to-br from-cyan-400 to-blue-500',
    overview: 'Learn React from scratch and build real-world applications. This course covers components, hooks, state management, and modern React patterns. Prerequisites: JavaScript fundamentals.',
    skills: ['Components', 'JSX', 'Hooks', 'State Management', 'Props', 'React Router', 'API Integration'],
    modules: [
      {
        id: 1,
        title: 'React Basics',
        lessons: [
          {
            id: 1,
            title: 'What is React?',
            duration: '12 min',
            type: 'video',
            completed: true,
            locked: false,
            description: 'Introduction to React and component-based architecture'
          },
          {
            id: 2,
            title: 'Your First Component',
            duration: '20 min',
            type: 'exercise',
            completed: true,
            locked: false,
            description: 'Create a simple React component',
            content: 'function Welcome() {\n  return <h1>Hello, React!</h1>;\n}\n\nexport default Welcome;'
          },
          {
            id: 3,
            title: 'JSX Syntax',
            duration: '18 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Learn JSX and how to write HTML in JavaScript'
          }
        ]
      },
      {
        id: 2,
        title: 'Hooks and State',
        lessons: [
          {
            id: 4,
            title: 'useState Hook',
            duration: '25 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Manage component state with useState',
            content: 'const [count, setCount] = useState(0);\n\nfunction increment() {\n  setCount(count + 1);\n}'
          },
          {
            id: 5,
            title: 'useEffect Hook',
            duration: '30 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Handle side effects with useEffect'
          },
          {
            id: 6,
            title: 'Custom Hooks',
            duration: '35 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Create reusable custom hooks'
          }
        ]
      },
      {
        id: 3,
        title: 'Building Real Apps',
        lessons: [
          {
            id: 7,
            title: 'API Integration',
            duration: '40 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Fetch data from external APIs'
          },
          {
            id: 8,
            title: 'Routing with React Router',
            duration: '35 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Add navigation to your React app'
          },
          {
            id: 9,
            title: 'Final Project: Blog App',
            duration: '90 min',
            type: 'project',
            completed: false,
            locked: false,
            description: 'Build a complete blog application with React'
          }
        ]
      }
    ]
  },
  'advanced-typescript': {
    id: 'advanced-typescript',
    title: 'Advanced TypeScript',
    description: 'Master TypeScript for large-scale applications',
    difficulty: 'Advanced',
    duration: '30 hours',
    rating: 4.7,
    students: '850K',
    icon: 'TS',
    color: 'bg-gradient-to-br from-blue-600 to-blue-800',
    overview: 'Take your TypeScript skills to the next level. This advanced course covers complex type systems, generics, decorators, and architectural patterns. Prerequisites: Strong JavaScript and basic TypeScript knowledge.',
    skills: ['Advanced Types', 'Generics', 'Decorators', 'Type Guards', 'Utility Types', 'Design Patterns', 'Performance'],
    modules: [
      {
        id: 1,
        title: 'Advanced Type System',
        lessons: [
          {
            id: 1,
            title: 'Union and Intersection Types',
            duration: '25 min',
            type: 'video',
            completed: true,
            locked: false,
            description: 'Master complex type combinations'
          },
          {
            id: 2,
            title: 'Type Guards and Narrowing',
            duration: '30 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Implement custom type guards',
            content: 'function isString(value: unknown): value is string {\n  return typeof value === "string";\n}'
          },
          {
            id: 3,
            title: 'Conditional Types',
            duration: '35 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Create types that adapt based on conditions'
          }
        ]
      },
      {
        id: 2,
        title: 'Generics Mastery',
        lessons: [
          {
            id: 4,
            title: 'Generic Functions',
            duration: '30 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Build type-safe reusable functions',
            content: 'function identity<T>(value: T): T {\n  return value;\n}'
          },
          {
            id: 5,
            title: 'Generic Constraints',
            duration: '35 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Apply constraints to generic parameters'
          },
          {
            id: 6,
            title: 'Mapped Types',
            duration: '40 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Transform types programmatically'
          }
        ]
      },
      {
        id: 3,
        title: 'Enterprise Patterns',
        lessons: [
          {
            id: 7,
            title: 'Decorator Pattern',
            duration: '45 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Implement decorators for classes and methods'
          },
          {
            id: 8,
            title: 'Type-Safe API Client',
            duration: '60 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Build a fully type-safe API client'
          },
          {
            id: 9,
            title: 'Final Project: TypeScript Framework',
            duration: '120 min',
            type: 'project',
            completed: false,
            locked: false,
            description: 'Create a mini-framework with advanced TS features'
          }
        ]
      }
    ]
  },
  'python-programming': {
    id: 'python-programming',
    title: 'Python Programming',
    description: 'Master Python from scratch',
    difficulty: 'Beginner',
    duration: '35 hours',
    rating: 4.9,
    students: '3.2M',
    icon: '🐍',
    color: 'bg-gradient-to-br from-blue-500 to-yellow-400',
    overview: 'Learn Python programming from the ground up. This comprehensive course covers everything from basic syntax to advanced topics like OOP and file handling. No prior experience required.',
    skills: ['Python Basics', 'Data Structures', 'OOP', 'File Handling', 'Error Handling', 'Modules', 'Testing'],
    modules: [
      {
        id: 1,
        title: 'Python Fundamentals',
        lessons: [
          {
            id: 1,
            title: 'Introduction to Python',
            duration: '15 min',
            type: 'video',
            completed: true,
            locked: false,
            description: 'What is Python and why learn it?'
          },
          {
            id: 2,
            title: 'Variables and Data Types',
            duration: '20 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Learn Python data types and variables',
            content: 'name = "Python"\nversion = 3.12\nprint(f"Welcome to {name} {version}")'
          },
          {
            id: 3,
            title: 'Control Flow',
            duration: '25 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'If statements, loops, and conditions'
          }
        ]
      },
      {
        id: 2,
        title: 'Data Structures',
        lessons: [
          {
            id: 4,
            title: 'Lists and Tuples',
            duration: '30 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Working with Python lists and tuples'
          },
          {
            id: 5,
            title: 'Dictionaries and Sets',
            duration: '30 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Master Python dictionaries and sets'
          }
        ]
      },
      {
        id: 3,
        title: 'Object-Oriented Python',
        lessons: [
          {
            id: 6,
            title: 'Classes and Objects',
            duration: '40 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Create classes and objects in Python'
          },
          {
            id: 7,
            title: 'Inheritance',
            duration: '35 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Implement inheritance and polymorphism'
          },
          {
            id: 8,
            title: 'Final Project: Library System',
            duration: '90 min',
            type: 'project',
            completed: false,
            locked: false,
            description: 'Build a complete library management system'
          }
        ]
      }
    ]
  },
  'nodejs-express': {
    id: 'nodejs-express',
    title: 'Node.js & Express',
    description: 'Create powerful backend APIs with Node.js and Express',
    difficulty: 'Intermediate',
    duration: '28 hours',
    rating: 4.8,
    students: '1.2M',
    icon: '⚙️',
    color: 'bg-gradient-to-br from-green-500 to-emerald-600',
    overview: 'Learn to build scalable backend applications with Node.js and Express. This course covers REST APIs, middleware, authentication, and database integration. Prerequisites: JavaScript fundamentals.',
    skills: ['Node.js Basics', 'Express Framework', 'REST APIs', 'Middleware', 'Authentication', 'Database Integration', 'Error Handling'],
    modules: [
      {
        id: 1,
        title: 'Node.js Fundamentals',
        lessons: [
          {
            id: 1,
            title: 'Introduction to Node.js',
            duration: '15 min',
            type: 'video',
            completed: true,
            locked: false,
            description: 'Understanding Node.js and its ecosystem'
          },
          {
            id: 2,
            title: 'Working with Modules',
            duration: '20 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Learn about CommonJS and ES modules',
            content: 'const express = require("express");\nconst app = express();\n\napp.get("/", (req, res) => {\n  res.send("Hello Node!");\n});'
          },
          {
            id: 3,
            title: 'File System Operations',
            duration: '25 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Read and write files with Node.js'
          }
        ]
      },
      {
        id: 2,
        title: 'Express Framework',
        lessons: [
          {
            id: 4,
            title: 'Setting up Express',
            duration: '20 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Create your first Express server'
          },
          {
            id: 5,
            title: 'Routing and Middleware',
            duration: '30 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Build routes and use middleware'
          },
          {
            id: 6,
            title: 'REST API Design',
            duration: '35 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Design RESTful APIs following best practices'
          }
        ]
      },
      {
        id: 3,
        title: 'Advanced Backend',
        lessons: [
          {
            id: 7,
            title: 'Authentication & JWT',
            duration: '40 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Implement JWT-based authentication'
          },
          {
            id: 8,
            title: 'Database Integration',
            duration: '45 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Connect to MongoDB and PostgreSQL'
          },
          {
            id: 9,
            title: 'Final Project: E-commerce API',
            duration: '120 min',
            type: 'project',
            completed: false,
            locked: false,
            description: 'Build a complete e-commerce REST API'
          }
        ]
      }
    ]
  },
  'sql-database': {
    id: 'sql-database',
    title: 'SQL Database Design',
    description: 'Master database design and SQL queries',
    difficulty: 'Intermediate',
    duration: '22 hours',
    rating: 4.6,
    students: '1.5M',
    icon: '🗄️',
    color: 'bg-gradient-to-br from-purple-500 to-pink-500',
    overview: 'Learn SQL from the ground up and master database design. This course covers everything from basic queries to advanced optimization techniques. Work with MySQL, PostgreSQL, and SQLite.',
    skills: ['SQL Basics', 'Database Design', 'Joins & Relationships', 'Indexes', 'Query Optimization', 'Transactions', 'Stored Procedures'],
    modules: [
      {
        id: 1,
        title: 'SQL Basics',
        lessons: [
          {
            id: 1,
            title: 'Introduction to Databases',
            duration: '12 min',
            type: 'video',
            completed: true,
            locked: false,
            description: 'Understanding relational databases'
          },
          {
            id: 2,
            title: 'SELECT Statements',
            duration: '20 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Query data with SELECT',
            content: 'SELECT * FROM users\nWHERE age > 18\nORDER BY created_at DESC;'
          },
          {
            id: 3,
            title: 'INSERT, UPDATE, DELETE',
            duration: '25 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Modify data in your database'
          }
        ]
      },
      {
        id: 2,
        title: 'Advanced Queries',
        lessons: [
          {
            id: 4,
            title: 'Joins and Relationships',
            duration: '30 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Master INNER, LEFT, and RIGHT joins'
          },
          {
            id: 5,
            title: 'Subqueries and CTEs',
            duration: '35 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Write complex nested queries'
          },
          {
            id: 6,
            title: 'Aggregate Functions',
            duration: '25 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Use COUNT, SUM, AVG, GROUP BY'
          }
        ]
      },
      {
        id: 3,
        title: 'Database Design',
        lessons: [
          {
            id: 7,
            title: 'Normalization',
            duration: '40 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Design efficient database schemas'
          },
          {
            id: 8,
            title: 'Indexes and Performance',
            duration: '35 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Optimize query performance with indexes'
          },
          {
            id: 9,
            title: 'Final Project: Library Database',
            duration: '90 min',
            type: 'project',
            completed: false,
            locked: false,
            description: 'Design and implement a complete library system'
          }
        ]
      }
    ]
  }
};
