import type { Metadata } from "next";
import HomePage from "@/features/home/components/HomePage";

export const metadata: Metadata = {
  title: "Learn Coding Online | JavaScript, React Courses - CodeLearn",
  description:
    "Start learning coding with free JavaScript, React, Node.js courses. Beginner to advanced tutorials with real projects.",
  keywords: [
    "learn coding",
    "javascript course",
    "react course",
    "free coding tutorials",
    "programming for beginners",
  ],
};

export default function Page() {
  return <HomePage />;
}