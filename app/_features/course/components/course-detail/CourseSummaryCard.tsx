import { Clock, Users, Star, CheckCircle2 } from "lucide-react";
import { CourseData } from "../../model/data/courses/course.types";

type Props = {
  course: CourseData;
  difficultyColor: string;
};

export function CourseSummaryCard({ course, difficultyColor }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        <div className={`w-16 h-16 sm:w-20 sm:h-20 ${course.color} rounded-2xl flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0`}>
          {course.icon}
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
            <h1 className="text-2xl sm:text-4xl leading-tight">{course.title}</h1>
            <span className={`px-3 py-1 rounded-full text-xs sm:text-sm w-fit ${difficultyColor}`}>
              {course.difficulty}
            </span>
          </div>
          <p className="text-xl text-gray-600 mb-6">{course.overview}</p>

          <div className="flex items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>{course.students} students</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span>{course.rating} rating</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">What you&apos;ll learn:</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {course.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

