import { BookOpen, Code, Play, Trophy } from "lucide-react";
import type { ReactNode } from "react";

export type LessonType = "video" | "exercise" | "quiz" | "project";

export function getLessonIcon(type: LessonType): ReactNode {
  switch (type) {
    case "video":
      return <Play className="w-4 h-4" />;
    case "exercise":
      return <Code className="w-4 h-4" />;
    case "quiz":
      return <BookOpen className="w-4 h-4" />;
    case "project":
      return <Trophy className="w-4 h-4" />;
    default:
      return <BookOpen className="w-4 h-4" />;
  }
}

export function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-700";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-700";
    case "Advanced":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

