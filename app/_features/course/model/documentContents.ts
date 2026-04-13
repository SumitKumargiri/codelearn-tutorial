interface ContentBlock {
  type: 'paragraph' | 'heading' | 'subheading' | 'code' | 'list' | 'note' | 'example';
  text?: string;
  code?: string;
  language?: string;
  items?: string[];
  description?: string;
}

interface Section {
  title: string;
  description?: string;
  subsections?: string[];
  content: ContentBlock[];
}

interface DocumentContent {
  title: string;
  description: string;
  sections: Section[];
}

export const documentContents: Record<string, DocumentContent> = {
  'javascript-fundamentals-1': {
    title: 'JavaScript Fundamentals - Course Syllabus',
    description: 'Complete course outline and learning objectives',
    sections: [
      {
        title: 'Course Overview',
        description: 'Introduction to the JavaScript Fundamentals course',
        content: [
          {
            type: 'paragraph',
            text: 'Welcome to JavaScript Fundamentals! This comprehensive course is designed to take you from a complete beginner to a confident JavaScript developer. Whether you\'re new to programming or coming from another language, this course will provide you with a solid foundation in JavaScript.'
          },
          {
            type: 'heading',
            text: 'What is JavaScript?'
          },
          {
            type: 'paragraph',
            text: 'JavaScript is a high-level, interpreted programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. It enables interactive web pages and is an essential part of web applications.'
          },
          {
            type: 'list',
            items: [
              'Runs in the browser (client-side)',
              'Can also run on servers (Node.js)',
              'Dynamic and weakly typed',
              'Multi-paradigm: supports object-oriented, imperative, and functional programming'
            ]
          },
          {
            type: 'note',
            text: 'JavaScript was created in just 10 days by Brendan Eich in 1995 and has since become one of the most popular programming languages in the world!'
          }
        ]
      },
      {
        title: 'Learning Objectives',
        description: 'What you will achieve by completing this course',
        content: [
          {
            type: 'paragraph',
            text: 'By the end of this course, you will have mastered the fundamental concepts of JavaScript programming and be ready to build real-world applications.'
          },
          {
            type: 'heading',
            text: 'Core Skills You Will Learn'
          },
          {
            type: 'list',
            items: [
              'Understand JavaScript syntax and basic programming concepts',
              'Work with variables, data types, and operators',
              'Write and use functions effectively',
              'Manipulate arrays and objects',
              'Understand scope and closures',
              'Work with the Document Object Model (DOM)',
              'Handle asynchronous operations',
              'Apply modern ES6+ features'
            ]
          },
          {
            type: 'heading',
            text: 'Practical Applications'
          },
          {
            type: 'paragraph',
            text: 'Throughout the course, you will build several projects including:'
          },
          {
            type: 'list',
            items: [
              'Interactive calculator',
              'Todo list application',
              'Dynamic form validator',
              'API-powered weather app',
              'Browser-based game'
            ]
          }
        ]
      },
      {
        title: 'Prerequisites',
        description: 'What you need before starting',
        content: [
          {
            type: 'paragraph',
            text: 'This course is designed for absolute beginners, so no prior programming experience is required. However, familiarity with basic computer operations and web browsing will be helpful.'
          },
          {
            type: 'heading',
            text: 'Required Tools'
          },
          {
            type: 'list',
            items: [
              'A modern web browser (Chrome, Firefox, Safari, or Edge)',
              'A text editor or IDE (VS Code recommended)',
              'Internet connection for accessing resources',
              'Basic understanding of HTML and CSS (helpful but not required)'
            ]
          },
          {
            type: 'note',
            text: 'We recommend using Visual Studio Code as your code editor. It\'s free, powerful, and has excellent JavaScript support out of the box.'
          }
        ]
      },
      {
        title: 'Course Structure',
        description: 'How the course is organized',
        content: [
          {
            type: 'paragraph',
            text: 'The course is divided into three main modules, each focusing on different aspects of JavaScript programming. Each module contains video lessons, interactive exercises, quizzes, and hands-on projects.'
          },
          {
            type: 'heading',
            text: 'Module 1: Getting Started with JavaScript'
          },
          {
            type: 'paragraph',
            text: 'Duration: 6 hours'
          },
          {
            type: 'list',
            items: [
              'Introduction to JavaScript and its history',
              'Setting up your development environment',
              'Your first JavaScript program',
              'Variables and constants (let, const, var)',
              'Data types and type conversion',
              'Operators and expressions',
              'Control flow (if/else, switch)',
              'Loops (for, while, do-while)'
            ]
          },
          {
            type: 'heading',
            text: 'Module 2: Functions and Data Structures'
          },
          {
            type: 'paragraph',
            text: 'Duration: 8 hours'
          },
          {
            type: 'list',
            items: [
              'Function declarations and expressions',
              'Arrow functions',
              'Parameters and arguments',
              'Return values and scope',
              'Arrays and array methods',
              'Objects and properties',
              'Object methods and this keyword',
              'Destructuring and spread operator'
            ]
          },
          {
            type: 'heading',
            text: 'Module 3: Advanced Concepts'
          },
          {
            type: 'paragraph',
            text: 'Duration: 6 hours'
          },
          {
            type: 'list',
            items: [
              'DOM manipulation',
              'Event handling',
              'Asynchronous JavaScript',
              'Promises and async/await',
              'Fetch API and AJAX',
              'Error handling',
              'ES6+ features',
              'Final project: Todo List application'
            ]
          }
        ]
      },
      {
        title: 'Assessment & Certification',
        description: 'How you will be evaluated',
        content: [
          {
            type: 'paragraph',
            text: 'Your progress will be assessed through various methods to ensure you have a solid understanding of the material.'
          },
          {
            type: 'heading',
            text: 'Assessment Methods'
          },
          {
            type: 'list',
            items: [
              'Interactive coding exercises after each lesson',
              'Multiple-choice quizzes at the end of each module',
              'Hands-on projects to demonstrate practical skills',
              'Code review and feedback on project submissions',
              'Final capstone project'
            ]
          },
          {
            type: 'heading',
            text: 'Certification Requirements'
          },
          {
            type: 'paragraph',
            text: 'To receive your course completion certificate, you must:'
          },
          {
            type: 'list',
            items: [
              'Complete all video lessons and exercises',
              'Score at least 80% on all quizzes',
              'Submit all required projects',
              'Complete the final capstone project',
              'Pass the final assessment with 80% or higher'
            ]
          },
          {
            type: 'note',
            text: 'Your certificate will be available for download immediately upon course completion and can be shared on LinkedIn or added to your resume.'
          }
        ]
      },
      {
        title: 'Resources & Support',
        description: 'Additional help and materials',
        content: [
          {
            type: 'paragraph',
            text: 'We provide comprehensive support and resources to help you succeed in this course.'
          },
          {
            type: 'heading',
            text: 'Learning Resources'
          },
          {
            type: 'list',
            items: [
              'Downloadable code examples for all lessons',
              'PDF cheat sheets and quick reference guides',
              'External reading materials and documentation links',
              'Recommended books and online resources',
              'Practice problem sets with solutions'
            ]
          },
          {
            type: 'heading',
            text: 'Getting Help'
          },
          {
            type: 'list',
            items: [
              'Discussion forums for each lesson and module',
              'Live Q&A sessions every week',
              'Teaching assistant support via chat',
              'Peer study groups and code reviews',
              'Office hours with instructors'
            ]
          },
          {
            type: 'example',
            description: 'Join our active community of learners! Post your questions, share your projects, and learn from others. Remember, there are no "stupid questions" - we\'re all here to learn together.',
            code: '// Example: How to ask for help effectively\n\n// ✅ Good question:\n// "I\'m trying to loop through an array and display each item,\n// but I\'m getting \'undefined\'. Here\'s my code: [code]\n// What am I doing wrong?"\n\n// ❌ Less helpful question:\n// "My code doesn\'t work. Help!"'
          }
        ]
      }
    ]
  },
  'javascript-fundamentals-2': {
    title: 'ES6 Features Cheat Sheet',
    description: 'Quick reference guide for modern JavaScript features',
    sections: [
      {
        title: 'Introduction to ES6',
        description: 'Overview of modern JavaScript features',
        content: [
          {
            type: 'paragraph',
            text: 'ES6 (ECMAScript 2015) introduced many powerful features that make JavaScript more expressive and easier to work with. This guide covers the most important ES6+ features that every modern JavaScript developer should know.'
          },
          {
            type: 'note',
            text: 'ES6 is fully supported in all modern browsers. However, if you need to support older browsers, you may need to use a transpiler like Babel.'
          }
        ]
      },
      {
        title: 'Let and Const',
        description: 'Block-scoped variable declarations',
        content: [
          {
            type: 'paragraph',
            text: 'ES6 introduced two new ways to declare variables: let and const. Unlike var, these create block-scoped variables.'
          },
          {
            type: 'subheading',
            text: 'let - Block-scoped variable'
          },
          {
            type: 'code',
            language: 'javascript',
            code: 'let count = 0;\ncount = 1; // ✅ Can be reassigned\n\nif (true) {\n  let message = "Hello";\n  console.log(message); // ✅ "Hello"\n}\n// console.log(message); // ❌ Error: message is not defined'
          },
          {
            type: 'subheading',
            text: 'const - Block-scoped constant'
          },
          {
            type: 'code',
            language: 'javascript',
            code: 'const PI = 3.14159;\n// PI = 3.14; // ❌ Error: Assignment to constant variable\n\nconst user = { name: "John" };\nuser.name = "Jane"; // ✅ Can modify properties\n// user = {}; // ❌ Cannot reassign the reference'
          },
          {
            type: 'note',
            text: 'Use const by default, and only use let when you know the variable will be reassigned. Avoid using var in modern JavaScript.'
          }
        ]
      },
      {
        title: 'Arrow Functions',
        description: 'Shorter syntax for function expressions',
        content: [
          {
            type: 'paragraph',
            text: 'Arrow functions provide a more concise syntax for writing functions and have different behavior with the this keyword.'
          },
          {
            type: 'subheading',
            text: 'Basic Syntax'
          },
          {
            type: 'code',
            language: 'javascript',
            code: '// Traditional function\nconst add = function(a, b) {\n  return a + b;\n};\n\n// Arrow function\nconst add = (a, b) => {\n  return a + b;\n};\n\n// Shorter: implicit return\nconst add = (a, b) => a + b;\n\n// Single parameter: parentheses optional\nconst double = x => x * 2;\n\n// No parameters: parentheses required\nconst greet = () => "Hello!";\n\n// Returning object: wrap in parentheses\nconst makePerson = (name, age) => ({ name, age });'
          },
          {
            type: 'example',
            description: 'Arrow functions are especially useful for array methods:',
            code: 'const numbers = [1, 2, 3, 4, 5];\n\n// Filter even numbers\nconst evens = numbers.filter(n => n % 2 === 0);\n// [2, 4]\n\n// Double each number\nconst doubled = numbers.map(n => n * 2);\n// [2, 4, 6, 8, 10]\n\n// Sum all numbers\nconst sum = numbers.reduce((acc, n) => acc + n, 0);\n// 15'
          }
        ]
      },
      {
        title: 'Template Literals',
        description: 'String interpolation and multi-line strings',
        content: [
          {
            type: 'paragraph',
            text: 'Template literals (template strings) make it easy to embed expressions in strings and create multi-line strings.'
          },
          {
            type: 'code',
            language: 'javascript',
            code: 'const name = "Alice";\nconst age = 25;\n\n// String concatenation (old way)\nconst message1 = "Hello, my name is " + name + " and I am " + age + " years old.";\n\n// Template literal (ES6)\nconst message2 = `Hello, my name is ${name} and I am ${age} years old.`;\n\n// Multi-line strings\nconst html = `\n  <div>\n    <h1>Welcome, ${name}!</h1>\n    <p>You are ${age} years old.</p>\n  </div>\n`;\n\n// Expression evaluation\nconst price = 19.99;\nconst quantity = 3;\nconst total = `Total: $${(price * quantity).toFixed(2)}`;\n// "Total: $59.97"'
          }
        ]
      },
      {
        title: 'Destructuring',
        description: 'Extract values from arrays and objects',
        content: [
          {
            type: 'paragraph',
            text: 'Destructuring allows you to extract values from arrays or properties from objects into distinct variables.'
          },
          {
            type: 'subheading',
            text: 'Array Destructuring'
          },
          {
            type: 'code',
            language: 'javascript',
            code: 'const colors = ["red", "green", "blue"];\n\n// Old way\nconst first = colors[0];\nconst second = colors[1];\n\n// Destructuring\nconst [first, second] = colors;\n// first = "red", second = "green"\n\n// Skip elements\nconst [, , third] = colors;\n// third = "blue"\n\n// Rest operator\nconst [primary, ...others] = colors;\n// primary = "red", others = ["green", "blue"]\n\n// Default values\nconst [a, b, c, d = "yellow"] = colors;\n// d = "yellow"'
          },
          {
            type: 'subheading',
            text: 'Object Destructuring'
          },
          {
            type: 'code',
            language: 'javascript',
            code: 'const user = {\n  name: "John",\n  age: 30,\n  email: "john@example.com"\n};\n\n// Old way\nconst name = user.name;\nconst age = user.age;\n\n// Destructuring\nconst { name, age } = user;\n\n// Rename variables\nconst { name: userName, age: userAge } = user;\n\n// Default values\nconst { name, country = "USA" } = user;\n\n// Nested destructuring\nconst person = {\n  name: "Alice",\n  address: {\n    city: "New York",\n    country: "USA"\n  }\n};\n\nconst { address: { city } } = person;\n// city = "New York"'
          }
        ]
      },
      {
        title: 'Spread and Rest Operators',
        description: 'Working with multiple values using ...',
        content: [
          {
            type: 'paragraph',
            text: 'The spread (...) operator allows you to expand arrays or objects, while the rest operator collects multiple elements into an array.'
          },
          {
            type: 'subheading',
            text: 'Spread Operator - Arrays'
          },
          {
            type: 'code',
            language: 'javascript',
            code: '// Copy array\nconst arr1 = [1, 2, 3];\nconst arr2 = [...arr1];\n\n// Combine arrays\nconst arr3 = [...arr1, 4, 5];\nconst combined = [...arr1, ...arr2];\n\n// Pass array as function arguments\nconst numbers = [1, 2, 3];\nMath.max(...numbers); // 3\n\n// Convert string to array\nconst chars = [..."Hello"];\n// ["H", "e", "l", "l", "o"]'
          },
          {
            type: 'subheading',
            text: 'Spread Operator - Objects'
          },
          {
            type: 'code',
            language: 'javascript',
            code: '// Copy object\nconst user = { name: "John", age: 30 };\nconst userCopy = { ...user };\n\n// Merge objects\nconst defaults = { theme: "light", lang: "en" };\nconst settings = { theme: "dark" };\nconst config = { ...defaults, ...settings };\n// { theme: "dark", lang: "en" }\n\n// Add/override properties\nconst updatedUser = {\n  ...user,\n  age: 31,\n  email: "john@example.com"\n};'
          },
          {
            type: 'subheading',
            text: 'Rest Operator'
          },
          {
            type: 'code',
            language: 'javascript',
            code: '// Function with variable arguments\nfunction sum(...numbers) {\n  return numbers.reduce((acc, n) => acc + n, 0);\n}\n\nsum(1, 2, 3); // 6\nsum(1, 2, 3, 4, 5); // 15\n\n// Collect remaining properties\nconst { name, ...rest } = { name: "John", age: 30, city: "NYC" };\n// rest = { age: 30, city: "NYC" }'
          }
        ]
      },
      {
        title: 'Enhanced Object Literals',
        description: 'Shorthand syntax for objects',
        content: [
          {
            type: 'paragraph',
            text: 'ES6 introduced several enhancements to object literal syntax, making objects more concise and powerful.'
          },
          {
            type: 'code',
            language: 'javascript',
            code: 'const name = "Alice";\nconst age = 25;\n\n// Property shorthand\nconst user = { name, age };\n// Same as: { name: name, age: age }\n\n// Method shorthand\nconst obj = {\n  // Old way\n  greet: function() {\n    return "Hello";\n  },\n  // New way\n  greet() {\n    return "Hello";\n  }\n};\n\n// Computed property names\nconst prop = "email";\nconst user2 = {\n  name: "John",\n  [prop]: "john@example.com",\n  [`${prop}Verified`]: true\n};\n// { name: "John", email: "john@example.com", emailVerified: true }'
          }
        ]
      },
      {
        title: 'Default Parameters',
        description: 'Set default values for function parameters',
        content: [
          {
            type: 'paragraph',
            text: 'ES6 allows you to specify default values for function parameters, making functions more flexible and reducing the need for parameter checks.'
          },
          {
            type: 'code',
            language: 'javascript',
            code: '// Basic default parameters\nfunction greet(name = "Guest") {\n  return `Hello, ${name}!`;\n}\n\ngreet(); // "Hello, Guest!"\ngreet("Alice"); // "Hello, Alice!"\n\n// Multiple defaults\nfunction createUser(name = "Anonymous", role = "user") {\n  return { name, role };\n}\n\n// Expression as default\nfunction add(a, b = a) {\n  return a + b;\n}\n\nadd(5); // 10\nadd(5, 3); // 8\n\n// Function call as default\nfunction getDefaultValue() {\n  return 42;\n}\n\nfunction process(value = getDefaultValue()) {\n  return value;\n}'
          }
        ]
      }
    ]
  }
};
