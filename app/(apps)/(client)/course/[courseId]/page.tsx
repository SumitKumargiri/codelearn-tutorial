// import CourseDetailPage from "@/features/course/components/CourseDetailPage";

// export default function Page() {
//   return <CourseDetailPage />;
// }


import CourseDetailPage from "@/features/course/components/CourseDetailPage";
import { coursesData } from "@/features/course/model/course-data";

export function generateStaticParams() {
  return Object.keys(coursesData).map((courseId) => ({
    courseId,
  }));
}

// ✅ MAKE PAGE ASYNC
export default async function Page({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;

  return <CourseDetailPage courseId={courseId} />;
}