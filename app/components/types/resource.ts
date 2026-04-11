
import { LucideIcon } from "lucide-react";

export interface ResourceItem {
  title: string;
  description: string;
  link: string;
}

export interface ResourceCategory {
  category: string;
  icon: LucideIcon; 
  color: string;
  items: ResourceItem[];
}