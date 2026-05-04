import { DocumentContent } from "../content.types";

export const redisBasics : DocumentContent = {
  title: 'Redis Basics',
  description: 'Learn Redis caching and performance optimization',
  sections: [
    {
      title: 'Introduction to Redis',
      description: 'What is Redis and why it is used',
      content: [
        {
          type: 'paragraph',
          text: 'Redis is an in-memory data store used for caching, real-time analytics, and fast data access.'
        },
        {
          type: 'list',
          items: [
            'In-memory database',
            'Very fast performance',
            'Used for caching'
          ]
        }
      ]
    },
    {
      title: 'Basic Commands',
      description: 'Learn Redis commands',
      content: [
        {
          type: 'code',
          language: 'bash',
          code: 'SET name "John"\nGET name'
        }
      ]
    }
  ]
};