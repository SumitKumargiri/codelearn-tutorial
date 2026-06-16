import { CourseData } from '../course.types';

export const htmlCourse: CourseData = {
  id: 'html-css-complete',
  title: 'HTML Complete Course',
  description: 'Learn HTML from basics to advanced web structure',
  difficulty: 'Beginner',
  duration: '18 hours',
  rating: 4.7,
  students: '2M',
  icon: '🌐',
  color: 'bg-gradient-to-br from-orange-500 to-red-500',

  overview: 'Master HTML and build the foundation of web development. Learn elements, tags, forms, media, and semantic structure used in real-world websites.',

  skills: [
    'HTML Basics',
    'Tags & Elements',
    'Forms & Inputs',
    'Semantic HTML',
    'Media Elements',
    'Tables',
    'SEO Basics'
  ],

  documents: [
    {
        id: 1,
        title: 'HTML Basic Structure Guide',
        type: 'code',
        size: '1.5 MB',
        downloadUrl: '#',
        description: 'Basic HTML page structure with essential tags',
    },
    {
      id: 2,
      title: 'HTML Forms Guide',
      type: 'notes',
      size: '2.1 MB',
      downloadUrl: '#',
      description: 'Complete guide to forms and input elements'
    },
    {
      id: 3,
      title: 'Semantic HTML Guide',
      type: 'slides',
      size: '4.5 MB',
      downloadUrl: '#',
      description: 'Understanding semantic tags for SEO'
    },
    {
      id: 4,
      title: 'HTML Examples',
      type: 'code',
      size: '1.8 MB',
      downloadUrl: '#',
      description: 'Real-world HTML code examples'
    }
  ],

  modules: [
    {
      id: 1,
      title: 'HTML Basics',
      lessons: [
        {
          id: 1,
          title: 'Introduction to HTML',
          duration: '10 min',
          type: 'video',
          completed: true,
          locked: false,
          description: 'What is HTML and how it works'
        },
        {
          id: 2,
          title: 'HTML Structure',
          duration: '20 min',
          type: 'exercise',
          completed: false,
          locked: false,
          description: 'Basic structure of an HTML page',
          content: '<!DOCTYPE html>\n<html>\n<head>\n<title>Page</title>\n</head>\n<body>\n<h1>Hello World</h1>\n</body>\n</html>'
        },
        {
          id: 3,
          title: 'Headings & Paragraphs',
          duration: '15 min',
          type: 'exercise',
          completed: false,
          locked: false,
          description: 'Using text elements'
        }
      ]
    },

    {
      id: 2,
      title: 'Forms & Inputs',
      lessons: [
        {
          id: 4,
          title: 'HTML Forms',
          duration: '25 min',
          type: 'exercise',
          completed: false,
          locked: false,
          description: 'Create forms and collect user data'
        },
        {
          id: 5,
          title: 'Input Types',
          duration: '30 min',
          type: 'exercise',
          completed: false,
          locked: false,
          description: 'Text, email, password, checkbox etc.'
        }
      ]
    },

    {
      id: 3,
      title: 'Advanced HTML',
      lessons: [
        {
          id: 6,
          title: 'Semantic Tags',
          duration: '20 min',
          type: 'exercise',
          completed: false,
          locked: false,
          description: 'header, footer, article, section'
        },
        {
          id: 7,
          title: 'Media Elements',
          duration: '25 min',
          type: 'exercise',
          completed: false,
          locked: false,
          description: 'Audio, video, iframe usage'
        },
        {
          id: 8,
          title: 'Final Project: Portfolio Page',
          duration: '60 min',
          type: 'project',
          completed: false,
          locked: false,
          description: 'Build your personal portfolio page'
        }
      ]
    }
  ]
};