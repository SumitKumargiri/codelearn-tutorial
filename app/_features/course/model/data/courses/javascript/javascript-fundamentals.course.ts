import { CourseData } from '../course.types';

export const javascriptFundamentals: CourseData = {
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
    documents: [
      {
        id: 1,
        title: 'JavaScript Fundamentals - Course Syllabus',
        type: 'pdf',
        size: '2.5 MB',
        downloadUrl: '#',
        description: 'Complete course outline and learning objectives'
      },
      {
        id: 2,
        title: 'ES6 Features Cheat Sheet',
        type: 'pdf',
        size: '1.2 MB',
        downloadUrl: '#',
        description: 'Quick reference guide for modern JavaScript features'
      },
      {
        id: 3,
        title: 'JavaScript Basics Presentation',
        type: 'slides',
        size: '5.8 MB',
        downloadUrl: '#',
        description: 'Slide deck covering variables, functions, and data types'
      },
      {
        id: 4,
        title: 'Code Examples Repository',
        type: 'code',
        size: '850 KB',
        downloadUrl: '#',
        description: 'All code examples from the course in one place'
      },
      {
        id: 5,
        title: 'Practice Exercises Workbook',
        type: 'worksheet',
        size: '3.1 MB',
        downloadUrl: '#',
        description: '50+ practice problems with solutions'
      },
      {
        id: 6,
        title: 'Array Methods Study Notes',
        type: 'notes',
        size: '950 KB',
        downloadUrl: '#',
        description: 'Detailed notes on map, filter, reduce, and more'
      }
    ],
    modules: [
      {
        id: 1,
        title: 'Getting Started with JavaScript',
        lessons: [
// ------------- javascript fundamentals course data -------------

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
            description: 'In this exercise, you will learn how to declare variables using var, let, and const in JavaScript.',
            Instructions: `1. Create a variable using var and assign your name. 
                          2. Create a variable using let and assign your age.
                          3. Create a constant using const and assign your country. 
                          4. Print all values using console.log().`,
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
            Instructions: `1. Create a function named greet that takes a name as a parameter and returns a greeting message.
                          2. Call the function with different names and print the results.`,  
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
            Instructions: `1. Create an arrow function named add that takes two parameters a and b.
                          2. The function should return the sum of a and b.
                          3. Call the add function with any two numbers.
                          4. Print the result using console.log().`,
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
            description: 'Learn array methods like map, filter, and reduce',
            Instructions: `1. Create an array of numbers.
                          2. Use the map() method to create a new array with each number doubled.
                          3. Use the filter() method to get only numbers greater than 5.
                          4. Print both results using console.log().`,
            content: `const numbers = [1, 2, 3, 4, 5, 6];

                      const doubled = numbers.map(num => num * 2);
                      console.log(doubled);

                      const filtered = numbers.filter(num => num > 5);
                      console.log(filtered);`
          },
          {
            id: 9,
            title: 'Object Fundamentals',
            duration: '20 min',
            type: 'exercise',
            completed: false,
            locked: false,
            description: 'Create and manipulate JavaScript objects',
            Instructions: `1. Create an object named person with properties: name, age, and country.
                          2. Access and print each property using console.log().
                          3. Add a new property called profession to the object.
                          4. Print the updated object.`,
            content: `const person = {
                      name: "John",
                      age: 25,
                      country: "USA"
                    };

                    console.log(person.name);
                    console.log(person.age);
                    console.log(person.country);

                    person.profession = "Developer";
                    console.log(person);`
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
};