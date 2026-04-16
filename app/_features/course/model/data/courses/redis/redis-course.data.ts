import { CourseData } from '../course.types';

export const redisCourse: CourseData = {
  id: 'redis',
  title: 'Redis Caching',
  description: 'Learn Redis for caching and performance optimization',
  difficulty: 'Intermediate',
  duration: '10 hours',
  rating: 4.7,
  students: '500K',
  icon: '🔥',
  color: 'bg-gradient-to-br from-red-500 to-orange-500',

  overview: 'Learn how to use Redis for caching, performance optimization, and real-time applications.',

  skills: [
    'Redis Basics',
    'Caching Strategies',
    'Data Types',
    'Pub/Sub',
    'Session Storage'
  ],

  // 🔥 DOCUMENTS (important for your viewer)
  documents: [
    {
      id: 1,
      title: 'Redis Basics Guide',
      type: 'pdf',
      size: '1.5 MB',
      downloadUrl: '#',
      description: 'Introduction to Redis and caching concepts'
    },
    {
      id: 2,
      title: 'Redis Commands Cheat Sheet',
      type: 'notes',
      size: '800 KB',
      downloadUrl: '#',
      description: 'Important Redis commands and examples'
    }
  ],

  modules: [
    {
      id: 1,
      title: 'Getting Started with Redis',
      lessons: [
        {
          id: 1,
          title: 'What is Redis?',
          duration: '10 min',
          type: 'video',
          completed: false,
          locked: false,
          description: 'Introduction to Redis and its use cases'
        },
        {
          id: 2,
          title: 'Basic Commands',
          duration: '15 min',
          type: 'exercise',
          completed: false,
          locked: false,
          description: 'Learn Redis commands',
          content: 'SET name "John"\nGET name'
        }
      ]
    }
  ]
};