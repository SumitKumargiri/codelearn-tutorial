export const ROUTES = {
  HOME: "/",
  COURSE_DETAIL: (courseId: string) => `/course/${courseId}`,
  CATEGORY: (slug: string) => `/category/${slug}`,
  CATALOG: "/catalog",
  RESOURCES: "/resources",
  COMMUNITY: "/community",
  PLANS: "/plans",
  ABOUT: "/about",
  CAREERS: "/careers",
  PRIVACY: "/privacy",
  TERMS: "/terms",
};