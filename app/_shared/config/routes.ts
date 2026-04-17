import ComingSoonPage from "@/features/coming-soon/components/ComingSoonPage";

export const ROUTES = {
  HOME: "/",
  COURSE_DETAIL: (courseId: string) => `/course/${courseId}`,
  DOCUMENT_VIEWER: (courseId: string, documentId: string) => `/course/${courseId}/document/${documentId}`,
  CATEGORY: (slug: string) => `/category/${slug}`,
  CATALOG: "/catalog",
  RESOURCES: "/resources",
  COMMUNITY: "/community",
  PLANS: "/plans",
  ABOUT: "/about",
  CAREERS: "/careers",
  PRIVACY: "/privacy",
  TERMS: "/terms",
  ComingSoon: "/coming-soon",
};