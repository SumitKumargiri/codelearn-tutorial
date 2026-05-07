import { CheckCircle2, Lock, Trophy } from "lucide-react";
import type { LessonType } from "./course-detail-ui";
import type { ReactNode } from "react";
import { Lesson, Module } from "../../model/data/courses/course.types";

type Props = {
  totalLessons: number;
  modules: Module[];
  selectedLessonId?: number;
  onLessonClick: (lesson: Lesson) => void;
  getLessonIcon: (type: LessonType) => ReactNode;
};

export function CourseContentSidebar({
  totalLessons,
  modules,
  selectedLessonId,
  onLessonClick,
  getLessonIcon,
}: Props) {
  return (
    
    <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
      <h2 className="text-2xl mb-4">Course Content</h2>
      <p className="text-gray-600 mb-4">{totalLessons} lessons</p>

      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
        {modules.map((module) => (
          <div key={module.id} className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <h3 className="font-semibold">{module.title}</h3>
              <p className="text-sm text-gray-600">{module.lessons.length} lessons</p>
            </div>
            <div className="divide-y divide-gray-100">
              {module.lessons.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => onLessonClick(lesson)}
                  disabled={lesson.locked}
                  className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left ${
                    lesson.locked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                  } ${
                    selectedLessonId === lesson.id ? "bg-[#3A10E5]/5 border-l-4 border-[#3A10E5]" : ""
                  }`}
                >
                  <div
                    className={`flex-shrink-0 ${
                      lesson.completed ? "text-green-500" : "text-gray-400"
                    }`}
                  >
                    {lesson.locked ? (
                      <Lock className="w-4 h-4" />
                    ) : lesson.completed ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      getLessonIcon(lesson.type)
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm truncate">{lesson.title}</div>
                    <div className="text-xs text-gray-500">{lesson.duration}</div>
                  </div>
                  {lesson.type === "project" && (
                    <Trophy className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

