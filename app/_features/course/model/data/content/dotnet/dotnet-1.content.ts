import { DocumentContent } from "../content.types";

export const dotnetSyllabus : DocumentContent = {
  title: '.NET Course Syllabus',
  description: 'Complete roadmap of .NET course',
  sections: [
    {
      title: 'Introduction',
      description: 'Overview of .NET',
      content: [
        {
          type: 'heading',
          text: 'Welcome to .NET'
        },
        {
          type: 'paragraph',
          text: '.NET is a powerful framework developed by Microsoft for building web, desktop, and cloud applications.'
        }
      ]
    },
    {
      title: 'Course Structure',
      description: 'What you will learn',
      content: [
        {
          type: 'list',
          items: [
            'C# Basics',
            'ASP.NET Core',
            'Web API Development',
            'Entity Framework Core'
          ]
        }
      ]
    }
  ]
};