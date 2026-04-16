import { CourseData } from '../course.types';

export const sqlDatabase: CourseData = {
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
    documents: [
      {
        id: 1,
        title: 'SQL Complete Reference',
        type: 'pdf',
        size: '6.1 MB',
        downloadUrl: '#',
        description: 'Comprehensive SQL syntax and commands reference'
      },
      {
        id: 2,
        title: 'Database Design Fundamentals',
        type: 'slides',
        size: '8.3 MB',
        downloadUrl: '#',
        description: 'Normalization, ERD, and schema design'
      },
      {
        id: 3,
        title: 'SQL Query Examples',
        type: 'code',
        size: '2.7 MB',
        downloadUrl: '#',
        description: 'Real-world SQL queries and solutions'
      },
      {
        id: 4,
        title: 'Join Operations Guide',
        type: 'notes',
        size: '1.6 MB',
        downloadUrl: '#',
        description: 'Visual guide to SQL joins with examples'
      },
      {
        id: 5,
        title: 'Optimization Techniques',
        type: 'worksheet',
        size: '2.2 MB',
        downloadUrl: '#',
        description: 'Performance tuning exercises and case studies'
      }
    ],
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
};