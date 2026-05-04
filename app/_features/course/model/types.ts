
export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  students: string;
  progress?: number;
  icon: string;
  color: string;
}