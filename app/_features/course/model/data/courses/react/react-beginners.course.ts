import { CourseData } from '../course.types';

export const reactBeginners: CourseData = {
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
    documents: [
      {
        id: 1,
        title: 'React Complete Guide',
        type: 'pdf',
        size: '4.2 MB',
        downloadUrl: '#',
        description: 'Comprehensive guide to React development'
      },
      {
        id: 2,
        title: 'React Hooks Reference',
        type: 'pdf',
        size: '1.8 MB',
        downloadUrl: '#',
        description: 'Complete reference for all React hooks'
      },
      {
        id: 3,
        title: 'Component Patterns Slides',
        type: 'slides',
        size: '6.5 MB',
        downloadUrl: '#',
        description: 'Best practices for building React components'
      },
      {
        id: 4,
        title: 'Sample React Projects',
        type: 'code',
        size: '2.3 MB',
        downloadUrl: '#',
        description: 'Starter templates and example projects'
      }
    ],
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
};