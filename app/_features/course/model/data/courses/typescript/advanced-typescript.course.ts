import { CourseData } from '../course.types';

export const advancedTypescript: CourseData = {
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
    documents: [
      {
        id: 1,
        title: 'TypeScript Advanced Patterns',
        type: 'pdf',
        size: '3.7 MB',
        downloadUrl: '#',
        description: 'Deep dive into advanced TypeScript patterns'
      },
      {
        id: 2,
        title: 'Basic Types',
        type: 'slides',
        size: '4.9 MB',
        downloadUrl: '#',
        description: 'Comprehensive presentation on TypeScript generics'
      },
      {
        id: 3,
        title: 'Type System Examples',
        type: 'code',
        size: '1.5 MB',
        downloadUrl: '#',
        description: 'Real-world type system implementation examples'
      },
      {
        id: 4,
        title: 'Utility Types Cheat Sheet',
        type: 'notes',
        size: '780 KB',
        downloadUrl: '#',
        description: 'Quick reference for TypeScript utility types'
      }
    ],
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
};