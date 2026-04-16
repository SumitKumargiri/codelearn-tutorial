export interface Lesson {
  id: number;
  title: string;
  duration: string;
  type: 'video' | 'exercise' | 'quiz' | 'project';
  completed: boolean;
  locked: boolean;
  description: string;
  Instructions?: string;
  content?: string;
}

export interface Module {
  id: number;
  title: string;
  lessons: Lesson[];
}

export interface Document {
  id: number;
  title: string;
  type: 'pdf' | 'slides' | 'code' | 'notes' | 'worksheet';
  size: string;
  downloadUrl: string;
  description: string;
}

export interface CourseData {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  rating: number;
  students: string;
  icon: string;
  color: string;
  overview: string;
  skills: string[];
  modules: Module[];
  documents: Document[];
}