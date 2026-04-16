import { DocumentContent } from "../content.types";

export const sqlDatabaseGuide : DocumentContent = {
  title: 'SQL Complete Reference',
  description: 'Learn SQL queries, database design, and optimization techniques',
  sections: [
    {
      title: 'Introduction to SQL',
      description: 'Basics of SQL and databases',
      content: [
        {
          type: 'paragraph' as const,
          text: 'SQL (Structured Query Language) is used to manage and manipulate relational databases.'
        }
      ]
    },
    {
      title: 'SELECT Query',
      description: 'Retrieve data from database',
      content: [
        {
          type: 'code' as const,
          language: 'sql',
          code: 'SELECT * FROM users;'
        }
      ]
    },
    {
      title: 'Filtering Data',
      description: 'Use WHERE clause',
      content: [
        {
          type: 'code' as const,
          language: 'sql',
          code: 'SELECT * FROM users WHERE age > 18;'
        }
      ]
    },
    {
      title: 'Joins',
      description: 'Combine multiple tables',
      content: [
        {
          type: 'code' as const,
          language: 'sql',
          code: `SELECT users.name, orders.amount
FROM users
INNER JOIN orders
ON users.id = orders.user_id;`
        }
      ]
    }
  ]
};