import { Users, MessageCircle, Share2, Calendar } from "lucide-react";
import type { CommunityStat, Discussion, Event } from "./types";

export const communityStats: CommunityStat[] = [
  { label: 'Active Members', value: '5M+', icon: Users },
  { label: 'Discussions', value: '250K+', icon: MessageCircle },
  { label: 'Projects Shared', value: '100K+', icon: Share2 },
  { label: 'Events per Month', value: '50+', icon: Calendar }
];

export const discussions: Discussion[] = [
  {
    title: 'How to master React hooks?',
    author: 'Sarah Chen',
    replies: 45,
    likes: 128,
    category: 'Web Development',
    time: '2 hours ago'
  },
  {
    title: 'Best practices for Python async programming',
    author: 'Mike Johnson',
    replies: 32,
    likes: 94,
    category: 'Programming',
    time: '5 hours ago'
  },
  {
    title: 'My journey from beginner to full-stack developer',
    author: 'Emily Rodriguez',
    replies: 67,
    likes: 245,
    category: 'Career',
    time: '1 day ago'
  },
  {
    title: 'Free resources for learning TypeScript',
    author: 'David Kim',
    replies: 28,
    likes: 156,
    category: 'Resources',
    time: '2 days ago'
  }
];

export const upcomingEvents: Event[] = [
  {
    title: 'JavaScript Workshop: Build a Todo App',
    date: 'April 15, 2026',
    time: '2:00 PM EST',
    attendees: 234
  },
  {
    title: 'Python Career Panel Discussion',
    date: 'April 18, 2026',
    time: '6:00 PM EST',
    attendees: 567
  },
  {
    title: 'AI & Machine Learning Meetup',
    date: 'April 22, 2026',
    time: '4:00 PM EST',
    attendees: 432
  }
];
