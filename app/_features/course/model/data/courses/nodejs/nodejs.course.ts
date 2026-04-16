import { CourseData } from '../course.types';

export const nodejsExpress: CourseData = {
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
    documents: [
      {
        id: 1,
        title: 'Node.js & Express Guide',
        type: 'pdf',
        size: '4.6 MB',
        downloadUrl: '#',
        description: 'Complete guide to backend development'
      },
      {
        id: 2,
        title: 'REST API Design Slides',
        type: 'slides',
        size: '5.4 MB',
        downloadUrl: '#',
        description: 'Best practices for designing REST APIs'
      },
      {
        id: 3,
        title: 'Express Middleware Examples',
        type: 'code',
        size: '1.9 MB',
        downloadUrl: '#',
        description: 'Common middleware implementations'
      },
      {
        id: 4,
        title: 'Authentication Patterns',
        type: 'notes',
        size: '1.1 MB',
        downloadUrl: '#',
        description: 'JWT, OAuth, and session-based auth explained'
      }
    ],
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
};