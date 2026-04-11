
import { useState } from 'react';
import { coursesData } from '../../data/courseData';
import { ChevronLeft, Clock, Users, Star, BookOpen, Play, Code, CheckCircle2, Lock, Trophy } from 'lucide-react';
import type { Lesson } from '../../data/courseData';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courseId ? coursesData[courseId] : null;
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [code, setCode] = useState('');

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4">Course not found</h1>
          <Link href="/" className="text-[#3A10E5] hover:underline">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = course.modules.reduce(
    (acc, module) => acc + module.lessons.filter(l => l.completed).length,
    0
  );
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);

  const handleLessonClick = (lesson: Lesson) => {
    if (!lesson.locked) {
      setSelectedLesson(lesson);
      setCode(lesson.content || '');
    }
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Play className="w-4 h-4" />;
      case 'exercise':
        return <Code className="w-4 h-4" />;
      case 'quiz':
        return <BookOpen className="w-4 h-4" />;
      case 'project':
        return <Trophy className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-700';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-700';
      case 'Advanced':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-[#3A10E5] transition-colors">
              <ChevronLeft className="w-5 h-5" />
              <span>Back to Courses</span>
            </Link>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                Progress: <span className="font-semibold text-[#3A10E5]">{progressPercentage}%</span>
              </div>
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#3A10E5] transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Course Info Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex items-start gap-6">
            <div className={`w-20 h-20 ${course.color} rounded-2xl flex items-center justify-center text-3xl flex-shrink-0`}>
              {course.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-4xl">{course.title}</h1>
                <span className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(course.difficulty)}`}>
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
                <h3 className="font-semibold mb-3">What you'll learn:</h3>
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Course Content Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h2 className="text-2xl mb-4">Course Content</h2>
              <p className="text-gray-600 mb-4">{totalLessons} lessons</p>

              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {course.modules.map((module) => (
                  <div key={module.id} className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <h3 className="font-semibold">{module.title}</h3>
                      <p className="text-sm text-gray-600">{module.lessons.length} lessons</p>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {module.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          onClick={() => handleLessonClick(lesson)}
                          disabled={lesson.locked}
                          className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left ${
                            lesson.locked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                          } ${
                            selectedLesson?.id === lesson.id ? 'bg-[#3A10E5]/5 border-l-4 border-[#3A10E5]' : ''
                          }`}
                        >
                          <div className={`flex-shrink-0 ${lesson.completed ? 'text-green-500' : 'text-gray-400'}`}>
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
                          {lesson.type === 'project' && (
                            <Trophy className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lesson Content Area */}
          <div className="lg:col-span-2">
            {selectedLesson ? (
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-[#3A10E5] to-[#5B21B6] p-8 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    {getLessonIcon(selectedLesson.type)}
                    <span className="text-sm uppercase tracking-wide opacity-90">
                      {selectedLesson.type}
                    </span>
                  </div>
                  <h2 className="text-3xl mb-2">{selectedLesson.title}</h2>
                  <p className="text-lg opacity-90">{selectedLesson.description}</p>
                </div>

                <div className="p-8">
                  {selectedLesson.type === 'video' && (
                    <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                      <div className="text-center text-white">
                        <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="text-gray-400">Video player would be here</p>
                      </div>
                    </div>
                  )}

                  {selectedLesson.type === 'exercise' && selectedLesson.content && (
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-semibold mb-3">Instructions:</h3>
                        <p className="text-gray-600 mb-6">{selectedLesson.description}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Code Editor:</h3>
                        <div className="border border-gray-300 rounded-xl overflow-hidden">
                          <div className="bg-gray-800 px-4 py-2 text-white text-sm flex items-center justify-between">
                            <span>script.js</span>
                            <button className="text-green-400 hover:text-green-300">
                              Run Code
                            </button>
                          </div>
                          <textarea
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="w-full p-4 font-mono text-sm bg-gray-900 text-white min-h-[300px] focus:outline-none"
                            spellCheck={false}
                          />
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4">
                        <h3 className="font-semibold mb-2">Console Output:</h3>
                        <div className="font-mono text-sm text-gray-600">
                          Ready to run your code...
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedLesson.type === 'quiz' && (
                    <div className="space-y-6">
                      <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl">
                        <h3 className="font-semibold mb-4">Quiz Question 1:</h3>
                        <p className="mb-4">What is the correct way to declare a variable in JavaScript?</p>
                        <div className="space-y-2">
                          {['let name = "John";', 'variable name = "John";', 'var := "John";', 'declare name = "John";'].map((option, i) => (
                            <button
                              key={i}
                              className="w-full text-left p-3 border border-gray-300 rounded-lg hover:border-[#3A10E5] hover:bg-white transition-colors"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedLesson.type === 'project' && (
                    <div className="space-y-6">
                      <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
                        <div className="flex items-start gap-3">
                          <Trophy className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold mb-2">Final Project Challenge</h3>
                            <p className="text-gray-700">{selectedLesson.description}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Project Requirements:</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-[#3A10E5]">•</span>
                            <span>Implement all core features discussed in the module</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#3A10E5]">•</span>
                            <span>Add proper error handling</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#3A10E5]">•</span>
                            <span>Write clean, readable code with comments</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#3A10E5]">•</span>
                            <span>Test your implementation thoroughly</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Lesson Navigation */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-8">
                    <button className="px-6 py-3 border border-gray-300 rounded-lg hover:border-[#3A10E5] hover:text-[#3A10E5] transition-colors">
                      Previous Lesson
                    </button>
                    <button className="px-6 py-3 bg-[#3A10E5] text-white rounded-lg hover:bg-[#3A10E5]/90 transition-colors">
                      {selectedLesson.completed ? 'Next Lesson' : 'Mark Complete & Continue'}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-2xl mb-2">Select a lesson to begin</h3>
                <p className="text-gray-600">Choose any lesson from the course content to start learning</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
