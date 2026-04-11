import { LucideIcon } from "lucide-react";

export interface CommunityStat {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface Discussion {
  title: string;
  author: string;
  replies: number;
  likes: number;
  category: string;
  time: string;
}

export interface Event {
  title: string;
  date: string;
  time: string;
  attendees: number;
}