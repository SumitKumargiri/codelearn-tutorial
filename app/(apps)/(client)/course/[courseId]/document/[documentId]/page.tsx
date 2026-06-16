import { DocumentViewer } from '@/features/course/components/DocumentViewer';
import { coursesData } from '@/features/course/model/course-data';

export async function generateStaticParams() {
  const paths: { courseId: string; documentId: string }[] = [];

  Object.entries(coursesData).forEach(([courseId, course]) => {
    if (course.documents) {
      course.documents.forEach((doc) => {
        paths.push({
          courseId,
          documentId: String(doc.id),   
        });
      });
    }
  });

  return paths;
}

export default function Page({
  params,
}: {
  params: { courseId: string; documentId: string };
}) {
  return (
    <DocumentViewer
      courseId={params.courseId}
      documentId={params.documentId}
    />
  );
}