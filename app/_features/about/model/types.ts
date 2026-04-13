import { LucideIcon } from "lucide-react";

export interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}