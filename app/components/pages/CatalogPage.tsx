"use client";

import { CourseCard } from '../CourseCard';
import { Search } from 'lucide-react';
import { useState } from 'react';

const allCourses = [
  {
    id: 'javascript-fundamentals',
    title: 'JavaScript Fundamentals',
    description: 'Learn the basics of JavaScript including variables, functions, loops, and more through interactive coding exercises.',
    duration: '20 hours',
    difficulty: 'Beginner' as const,
    rating: 4.8,
    students: '2.5M',
    progress: 35,
    icon: '{ }',
    color: 'bg-gradient-to-br from-yellow-400 to-orange-500'
  },
  {
    id: 'react-beginners',
    title: 'React for Beginners',
    description: 'Build modern web applications with React. Master components, hooks, state management, and more.',
    duration: '25 hours',
    difficulty: 'Intermediate' as const,
    rating: 4.9,
    students: '1.8M',
    progress: 60,
    icon: '⚛️',
    color: 'bg-gradient-to-br from-cyan-400 to-blue-500'
  },
  {
    id: 'advanced-typescript',
    title: 'Advanced TypeScript',
    description: 'Deep dive into TypeScript with advanced types, generics, decorators, and building type-safe applications.',
    duration: '30 hours',
    difficulty: 'Advanced' as const,
    rating: 4.7,
    students: '850K',
    icon: 'TS',
    color: 'bg-gradient-to-br from-blue-600 to-blue-800'
  },
  {
    id: 'nodejs-express',
    title: 'Node.js & Express',
    description: 'Create powerful backend APIs with Node.js and Express. Learn REST APIs, middleware, and database integration.',
    duration: '28 hours',
    difficulty: 'Intermediate' as const,
    rating: 4.8,
    students: '1.2M',
    icon: '⚙️',
    color: 'bg-gradient-to-br from-green-500 to-emerald-600'
  },
  {
    id: 'python-programming',
    title: 'Python Programming',
    description: 'Master Python from scratch. Learn syntax, data structures, OOP, and build real-world applications.',
    duration: '35 hours',
    difficulty: 'Beginner' as const,
    rating: 4.9,
    students: '3.2M',
    progress: 15,
    icon: '🐍',
    color: 'bg-gradient-to-br from-blue-500 to-yellow-400'
  },
  {
    id: 'sql-database',
    title: 'SQL Database Design',
    description: 'Learn database design, queries, joins, and optimization. Work with MySQL, PostgreSQL, and more.',
    duration: '22 hours',
    difficulty: 'Intermediate' as const,
    rating: 4.6,
    students: '1.5M',
    icon: '🗄️',
    color: 'bg-gradient-to-br from-purple-500 to-pink-500'
  }
];

export default function CatalogPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const filteredCourses = selectedDifficulty === 'All'
    ? allCourses
    : allCourses.filter(course => course.difficulty === selectedDifficulty);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#3A10E5] to-[#5B21B6] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-4">Course Catalog</h1>
          <p className="text-xl opacity-90 mb-8">Explore all our courses and start learning today</p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for courses..."
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-8 flex items-center gap-4">
          <span className="font-semibold">Filter by:</span>
          <div className="flex gap-2">
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
              <button
                key={level}
                onClick={() => setSelectedDifficulty(level)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedDifficulty === level
                    ? 'bg-[#3A10E5] text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#3A10E5]'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="mb-6">
          <p className="text-gray-600">{filteredCourses.length} courses found</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

    </div>
  );
}
