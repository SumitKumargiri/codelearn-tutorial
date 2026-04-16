import { DocumentContent } from "../content.types";

export const pythonGuide : DocumentContent = {
  title: 'Python Complete Documentation',
  description: 'Learn Python basics, data structures, and object-oriented programming',
  sections: [
    {
      title: 'Introduction to Python',
      description: 'Basics of Python programming',
      content: [
        {
          type: 'paragraph' as const,
          text: 'Python is a high-level, easy-to-learn programming language used in web, AI, data science, and more.'
        }
      ]
    },
    {
      title: 'Variables and Data Types',
      description: 'Understanding variables',
      content: [
        {
          type: 'code' as const,
          language: 'python',
          code: 'name = "Python"\nage = 25\nprint(name, age)'
        }
      ]
    },
    {
      title: 'Control Flow',
      description: 'If-else and loops',
      content: [
        {
          type: 'code' as const,
          language: 'python',
          code: `for i in range(5):
    print(i)`
        }
      ]
    },
    {
      title: 'Functions',
      description: 'Create reusable functions',
      content: [
        {
          type: 'code' as const,
          language: 'python',
          code: `def greet(name):
    return "Hello " + name

print(greet("Alice"))`
        }
      ]
    }
  ]
};