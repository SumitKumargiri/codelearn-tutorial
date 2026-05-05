'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { coursesData } from '@/features/course/model/course-data';
import { CourseDetailTopBar } from './course-detail/CourseDetailTopBar';
import { CourseSummaryCard } from './course-detail/CourseSummaryCard';
import { CourseContentSidebar } from './course-detail/CourseContentSidebar';
import { LessonContent } from './course-detail/LessonContent';
import { getDifficultyColor, getLessonIcon } from './course-detail/course-detail-ui';
import { BookOpen, FileCode, FileSpreadsheet, FileText, Presentation, StickyNote } from 'lucide-react';
import { Lesson } from '../model/data/courses/course.types';
import ComingSoonPage from '@/features/coming-soon/components/ComingSoonPage';

type Props = {
  courseId?: string;
};

export default function CourseDetail({ courseId: propCourseId }: Props) {
   const courseId = propCourseId;
  const course = coursesData?.[courseId as string] ?? null;
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  if (!course) {
    return (
      <ComingSoonPage />
    );
  }

  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = course.modules.reduce(
    (acc, module) => acc + module.lessons.filter((l) => l.completed).length,
    0
  );
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);

  const handleLessonClick = (lesson: Lesson) => {
    if (!lesson.locked) {
      setSelectedLesson(lesson);
      setCode(lesson.content || '');
      setOutput('');
    }
  };

  const runCode = () => {
    try {
      const logs: string[] = [];
      const originalLog = console.log;
      console.log = (...args: unknown[]) => {
        logs.push(args.map((x) => String(x)).join(' '));
      };
      // eslint-disable-next-line react-hooks/unsupported-syntax
      eval(code);
      console.log = originalLog;
      setOutput(logs.join('\n') || 'Code executed successfully');
    } catch (err: unknown) {
      setOutput(err instanceof Error ? err.message : String(err));
    }
  };

  const getDocumentColor = (type: string) => {
    switch (type) {
      case 'pdf':
        return 'bg-red-50 text-red-600 border-red-200';
      case 'slides':
        return 'bg-orange-50 text-orange-600 border-orange-200';
      case 'code':
        return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'notes':
        return 'bg-green-50 text-green-600 border-green-200';
      case 'worksheet':
        return 'bg-purple-50 text-purple-600 border-purple-200';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-5 h-5" />;
      case 'slides':
        return <Presentation className="w-5 h-5" />;
      case 'code':
        return <FileCode className="w-5 h-5" />;
      case 'notes':
        return <StickyNote className="w-5 h-5" />;
      case 'worksheet':
        return <FileSpreadsheet className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <CourseDetailTopBar progressPercentage={progressPercentage} />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CourseSummaryCard course={course} difficultyColor={getDifficultyColor(course.difficulty)} />

         {/* Course Documents Section */}
        {course.documents && course.documents.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl mb-6">Course Documents</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {course.documents.map((doc) => (
                <Link
                  key={doc.id}
                  href={`/course/${courseId}/document/${doc.id}`}
                  className={`border rounded-xl p-4 hover:shadow-md transition-all group ${getDocumentColor(doc.type)}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 mt-1">
                      {getDocumentIcon(doc.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold mb-1 group-hover:underline line-clamp-2">
                        {doc.title}
                      </h3>
                      <p className="text-sm opacity-80 mb-2 line-clamp-2">
                        {doc.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs opacity-70">{doc.size}</span>
                        <BookOpen className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <CourseContentSidebar
              totalLessons={totalLessons}
              modules={course.modules}
              selectedLessonId={selectedLesson?.id}
              onLessonClick={handleLessonClick}
              getLessonIcon={getLessonIcon}
            />
          </div>

          <div className="lg:col-span-2">
            <LessonContent
              selectedLesson={selectedLesson}
              code={code}
              onCodeChange={setCode}
              output={output}
              onRunCode={runCode}
              getLessonIcon={getLessonIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
