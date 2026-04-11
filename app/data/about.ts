import { Target, Users, Award, Globe } from "lucide-react";
import { Stat, Value } from "../components/types/about";

export const stats: Stat[] = [
  { label: 'Active Learners', value: '5M+', icon: Users },
  { label: 'Courses Available', value: '500+', icon: Target },
  { label: 'Certifications Issued', value: '2M+', icon: Award },
  { label: 'Countries Reached', value: '180+', icon: Globe }
];

export const values: Value[] = [
  {
    title: 'Accessible Education',
    description: 'We believe quality education should be accessible to everyone, everywhere.',
    icon: '🌍'
  },
  {
    title: 'Hands-on Learning',
    description: 'Learn by doing with interactive exercises and real-world projects.',
    icon: '💻'
  },
  {
    title: 'Community Driven',
    description: 'Build connections and learn together with millions of peers worldwide.',
    icon: '🤝'
  },
  {
    title: 'Career Focused',
    description: 'Gain skills that directly translate to career opportunities.',
    icon: '🎯'
  }
];