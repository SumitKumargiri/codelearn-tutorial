import { Clock, BarChart3, Star, Users } from 'lucide-react';
import Link from 'next/link';
import { Course } from './types/course';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const difficultyColors = {
    Beginner: 'bg-green-500/10 text-green-500 border-green-500/30',
    Intermediate: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30',
    Advanced: 'bg-red-500/10 text-red-500 border-red-500/30'
  };

  return (
    <Link href={`/course/${course.id}`} className="block bg-white rounded-xl border border-gray-200 hover:border-[#3A10E5]/50 hover:shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden">
      {/* Course Header */}
      <div className={`${course.color} p-6 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 text-6xl opacity-10">{course.icon}</div>
        <h3 className="relative z-10 mb-2">{course.title}</h3>
      </div>

      {/* Course Body */}
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

        {/* Course Meta */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.students}</span>
          </div>
        </div>

        {/* Rating and Difficulty */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-black">{course.rating}</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs border ${difficultyColors[course.difficulty]}`}>
            {course.difficulty}
          </span>
        </div>

        {/* Progress Bar (if exists) */}
        {/* {course.progress !== undefined && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-600">Progress</span>
              <span className="font-medium text-[#3A10E5]">{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#3A10E5] to-[#6C5CE7] h-full rounded-full transition-all duration-500"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        )} */}

        {/* Action Button */}
        <div className="w-full bg-[#3A10E5] hover:bg-[#3A10E5]/90 text-white py-3 rounded-lg transition-all group-hover:scale-105 text-center">
          {course.progress !== undefined && course.progress > 0 ? 'Continue Learning' : 'Start Course'}
        </div>
      </div>
    </Link>
  );
}
