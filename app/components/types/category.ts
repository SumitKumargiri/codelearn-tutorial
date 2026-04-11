import { LucideIcon } from "lucide-react";
import { Course } from "./course"; 

export interface Category {
  name: string;
  icon: LucideIcon;
  color: string;
  description: string;
  courses: Course[];
}

// slug based record
export type CategoryData = Record<string, Category>;