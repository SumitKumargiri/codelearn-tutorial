import { Categories } from "./components/Categories";
import { CourseCard } from "./components/CourseCard";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";

const courses = [
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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />

      {/* Course Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl mb-2 text-black">Popular Courses</h2>
              <p className="text-gray-600 text-lg">Start your learning journey with our most loved courses</p>
            </div>
            <button className="hidden md:block px-6 py-3 border border-gray-300 rounded-lg hover:border-[#3A10E5] hover:text-[#3A10E5] transition-colors">
              View All Courses
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <Categories />
      <Stats />

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6 text-black">Ready to start your coding journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join millions of learners and start building your future today. Free to get started, upgrade anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#3A10E5] hover:bg-[#3A10E5]/90 text-white px-8 py-4 rounded-lg transition-all hover:scale-105">
              Get Started for Free
            </button>
            <button className="border border-gray-300 hover:border-[#3A10E5] hover:text-[#3A10E5] px-8 py-4 rounded-lg transition-colors text-black">
              Explore Plans
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
