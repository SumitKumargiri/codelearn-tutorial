import { BookOpen, Video, Code, FileText } from "lucide-react";
import type { ResourceCategory } from "./types";


export const resources: ResourceCategory[] = [
  {
    category: 'Documentation',
    icon: FileText,
    color: 'bg-blue-500',
    items: [
      { title: 'Getting Started Guide', description: 'Learn how to begin your learning journey', link: '#' },
      { title: 'Course Completion Guide', description: 'Tips for completing courses efficiently', link: '#' },
      { title: 'API Documentation', description: 'Technical documentation for developers', link: '#' }
    ]
  },
  {
    category: 'Video Tutorials',
    icon: Video,
    color: 'bg-purple-500',
    items: [
      { title: 'Platform Tutorial', description: 'How to use our learning platform effectively', link: '#' },
      { title: 'Code Editor Tips', description: 'Master our interactive code editor', link: '#' },
      { title: 'Project Walkthroughs', description: 'Complete project tutorials', link: '#' }
    ]
  },
  {
    category: 'Cheat Sheets',
    icon: Code,
    color: 'bg-green-500',
    items: [
      { title: 'JavaScript Cheat Sheet', description: 'Quick reference for JavaScript syntax', link: '#' },
      { title: 'Python Cheat Sheet', description: 'Essential Python commands and methods', link: '#' },
      { title: 'Git Commands', description: 'Most used Git commands', link: '#' }
    ]
  },
  {
    category: 'E-books',
    icon: BookOpen,
    color: 'bg-orange-500',
    items: [
      { title: 'Web Development 101', description: 'Free e-book for beginners', link: '#' },
      { title: 'Advanced Programming Patterns', description: 'Design patterns guide', link: '#' },
      { title: 'Career Guide for Developers', description: 'Navigate your tech career', link: '#' }
    ]
  }
];
