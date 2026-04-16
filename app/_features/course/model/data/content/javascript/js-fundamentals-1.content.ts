import { DocumentContent } from '../content.types';

export const jsFundamentals1: DocumentContent = {
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
};