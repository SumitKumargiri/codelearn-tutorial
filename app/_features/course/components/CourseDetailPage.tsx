'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

import { coursesData } from '@/features/course/model/course-data';
import type { Lesson } from '@/features/course/model/course-data';

import { CourseDetailTopBar } from './course-detail/CourseDetailTopBar';
import { CourseSummaryCard } from './course-detail/CourseSummaryCard';
import { CourseContentSidebar } from './course-detail/CourseContentSidebar';
import { LessonContent } from './course-detail/LessonContent';
import { getDifficultyColor, getLessonIcon } from './course-detail/course-detail-ui';

export default function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courseId ? coursesData[courseId] : null;
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

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

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseDetailTopBar progressPercentage={progressPercentage} />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CourseSummaryCard course={course} difficultyColor={getDifficultyColor(course.difficulty)} />

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
