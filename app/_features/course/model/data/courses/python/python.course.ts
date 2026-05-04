import { CourseData } from '../course.types';

export const pythonProgramming: CourseData = {
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
    documents: [
      {
        id: 1,
        title: 'Python Complete Documentation',
        type: 'pdf',
        size: '5.3 MB',
        downloadUrl: '#',
        description: 'Full course documentation and reference guide'
      },
      {
        id: 2,
        title: 'Python OOP Presentation',
        type: 'slides',
        size: '7.2 MB',
        downloadUrl: '#',
        description: 'Object-oriented programming in Python'
      },
      {
        id: 3,
        title: 'Python Projects Pack',
        type: 'code',
        size: '3.8 MB',
        downloadUrl: '#',
        description: '10 complete Python projects with source code'
      },
      {
        id: 4,
        title: 'Data Structures Study Guide',
        type: 'notes',
        size: '1.4 MB',
        downloadUrl: '#',
        description: 'Python data structures explained with examples'
      },
      {
        id: 5,
        title: 'Practice Problems Workbook',
        type: 'worksheet',
        size: '2.9 MB',
        downloadUrl: '#',
        description: '100+ coding challenges with solutions'
      }
    ],
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
};