import {
  Code,
  Database,
  Layout,
  Palette,
  Shield,
  Smartphone,
  Server,
  Brain,
  Cloud
} from "lucide-react";
import type { CategoryData } from "./types";


export const categoryData: CategoryData = {
  'web-development': {
    name: 'Web Development',
    icon: Layout,
    color: 'bg-blue-500',
    description: 'Master modern web development with HTML, CSS, JavaScript, and popular frameworks',
    courses: [
      {
        id: 'javascript-fundamentals',
        title: 'JavaScript Fundamentals',
        description: 'Learn the basics of JavaScript including variables, functions, loops, and more through interactive coding exercises.',
        duration: '20 hours',
        difficulty: 'Beginner',
        rating: 4.8,
        students: '2.5M',
        icon: '{ }',
        color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
        progress: 35
      },
      {
        id: 'react-beginners',
        title: 'React for Beginners',
        description: 'Build modern web applications with React. Master components, hooks, state management, and more.',
        duration: '25 hours',
        difficulty: 'Intermediate',
        rating: 4.9,
        students: '1.8M',
        icon: '⚛️',
        color: 'bg-gradient-to-br from-cyan-400 to-blue-500',
        progress: 60
      },
      {
        id: 'html-css-complete',
        title: 'Complete HTML & CSS',
        description: 'Build beautiful responsive websites from scratch with HTML5 and CSS3.',
        duration: '18 hours',
        difficulty: 'Beginner',
        rating: 4.7,
        students: '3.5M',
        icon: '🎨',
        color: 'bg-gradient-to-br from-orange-400 to-red-500'
      },
      {
        id: 'python-programming',
        title: 'Python Programming',
        description: 'Master Python from scratch. Learn syntax, data structures, OOP, and build real-world applications.',
        duration: '35 hours',
        difficulty: 'Beginner',
        rating: 4.9,
        students: '3.2M',
        icon: '🐍',
        color: 'bg-gradient-to-br from-blue-500 to-yellow-400',
        progress: 15
      },
      {
        id: 'advanced-typescript',
        title: 'Advanced TypeScript',
        description: 'Deep dive into TypeScript with advanced types, generics, decorators, and building type-safe applications.',
        duration: '30 hours',
        difficulty: 'Advanced',
        rating: 4.7,
        students: '850K',
        icon: 'TS',
        color: 'bg-gradient-to-br from-blue-600 to-blue-800'
      },
      {
        id: 'java-masterclass',
        title: 'Java Masterclass',
        description: 'Complete Java programming from basics to advanced OOP concepts.',
        duration: '40 hours',
        difficulty: 'Beginner',
        rating: 4.6,
        students: '2.1M',
        icon: '☕',
        color: 'bg-gradient-to-br from-red-500 to-orange-600'
      }
    ]
  },
  'devops': {
      name: 'DevOps & Cloud',
      icon: Cloud,
      color: 'bg-gradient-to-br from-sky-500 to-indigo-600',
      description: 'Learn DevOps tools, cloud platforms, CI/CD pipelines, and infrastructure automation',
      courses: [
        {
          id: 'docker-kubernetes',
          title: 'Docker & Kubernetes',
          description: 'Learn containerization with Docker and orchestration with Kubernetes for scalable deployments.',
          duration: '28 hours',
          difficulty: 'Intermediate',
          rating: 4.8,
          students: '1.4M',
          icon: '🐳',
          color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
          progress: 40
        },
        {
          id: 'aws-fundamentals',
          title: 'AWS Cloud Fundamentals',
          description: 'Master AWS services like EC2, S3, Lambda, and deploy applications on the cloud.',
          duration: '30 hours',
          difficulty: 'Beginner',
          rating: 4.7,
          students: '2.2M',
          icon: '☁️',
          color: 'bg-gradient-to-br from-orange-400 to-yellow-500'
        },
        {
          id: 'ci-cd-pipelines',
          title: 'CI/CD Pipelines',
          description: 'Build automated pipelines using GitHub Actions, Jenkins, and GitLab CI/CD.',
          duration: '22 hours',
          difficulty: 'Intermediate',
          rating: 4.8,
          students: '1.1M',
          icon: '🔄',
          color: 'bg-gradient-to-br from-green-500 to-emerald-600'
        },
        {
          id: 'terraform-iac',
          title: 'Infrastructure as Code (Terraform)',
          description: 'Provision and manage infrastructure using Terraform and automate deployments.',
          duration: '24 hours',
          difficulty: 'Intermediate',
          rating: 4.7,
          students: '900K',
          icon: '🏗️',
          color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
        },
        {
          id: 'linux-devops',
          title: 'Linux for DevOps',
          description: 'Master Linux commands, shell scripting, and server management for DevOps workflows.',
          duration: '18 hours',
          difficulty: 'Beginner',
          rating: 4.6,
          students: '1.6M',
          icon: '🐧',
          color: 'bg-gradient-to-br from-gray-700 to-gray-900'
        },
        {
          id: 'monitoring-logging',
          title: 'Monitoring & Logging',
          description: 'Learn Prometheus, Grafana, and ELK stack for monitoring and logging systems.',
          duration: '20 hours',
          difficulty: 'Advanced',
          rating: 4.7,
          students: '650K',
          icon: '📊',
          color: 'bg-gradient-to-br from-pink-500 to-red-500'
        }
      ]
    },
  'data-science': {
    name: 'Data Science',
    icon: Database,
    color: 'bg-green-500',
    description: 'Dive into data analysis, machine learning, and data visualization',
    courses: [
      {
        id: 'sql-database',
        title: 'SQL Database Design',
        description: 'Learn database design, queries, joins, and optimization. Work with MySQL, PostgreSQL, and more.',
        duration: '22 hours',
        difficulty: 'Intermediate',
        rating: 4.6,
        students: '1.5M',
        icon: '🗄️',
        color: 'bg-gradient-to-br from-purple-500 to-pink-500'
      },
      {
        id: 'data-analysis-python',
        title: 'Data Analysis with Python',
        description: 'Master data analysis using pandas, NumPy, and matplotlib.',
        duration: '28 hours',
        difficulty: 'Intermediate',
        rating: 4.8,
        students: '1.2M',
        icon: '📊',
        color: 'bg-gradient-to-br from-green-400 to-blue-500'
      },
      {
        id: 'machine-learning',
        title: 'Machine Learning A-Z',
        description: 'Complete ML course covering supervised and unsupervised learning.',
        duration: '45 hours',
        difficulty: 'Advanced',
        rating: 4.9,
        students: '980K',
        icon: '🤖',
        color: 'bg-gradient-to-br from-purple-600 to-indigo-600'
      }
    ]
  },
  'design': {
    name: 'Design',
    icon: Palette,
    color: 'bg-pink-500',
    description: 'Create stunning user interfaces and beautiful user experiences',
    courses: [
      {
        id: 'ui-ux-design',
        title: 'UI/UX Design Fundamentals',
        description: 'Learn user interface and user experience design principles.',
        duration: '20 hours',
        difficulty: 'Beginner',
        rating: 4.7,
        students: '1.8M',
        icon: '🎨',
        color: 'bg-gradient-to-br from-pink-400 to-purple-500'
      },
      {
        id: 'figma-complete',
        title: 'Complete Figma Course',
        description: 'Master Figma for web and mobile design projects.',
        duration: '15 hours',
        difficulty: 'Beginner',
        rating: 4.8,
        students: '2.2M',
        icon: '🎯',
        color: 'bg-gradient-to-br from-purple-500 to-pink-600'
      }
    ]
  },
  'mobile-dev': {
    name: 'Mobile Development',
    icon: Smartphone,
    color: 'bg-orange-500',
    description: 'Build native and cross-platform mobile applications',
    courses: [
      {
        id: 'react-native',
        title: 'React Native Development',
        description: 'Build iOS and Android apps with React Native.',
        duration: '30 hours',
        difficulty: 'Intermediate',
        rating: 4.7,
        students: '1.1M',
        icon: '📱',
        color: 'bg-gradient-to-br from-blue-400 to-cyan-500'
      },
      {
        id: 'flutter-complete',
        title: 'Flutter Complete Guide',
        description: 'Master Flutter and Dart for mobile app development.',
        duration: '35 hours',
        difficulty: 'Intermediate',
        rating: 4.8,
        students: '950K',
        icon: '🦋',
        color: 'bg-gradient-to-br from-blue-500 to-blue-700'
      }
    ]
  },
  'cybersecurity': {
    name: 'Cybersecurity',
    icon: Shield,
    color: 'bg-red-500',
    description: 'Learn ethical hacking, network security, and cybersecurity fundamentals',
    courses: [
      {
        id: 'ethical-hacking',
        title: 'Ethical Hacking Complete',
        description: 'Learn penetration testing and ethical hacking techniques.',
        duration: '40 hours',
        difficulty: 'Advanced',
        rating: 4.6,
        students: '750K',
        icon: '🔒',
        color: 'bg-gradient-to-br from-red-500 to-orange-600'
      },
      {
        id: 'network-security',
        title: 'Network Security Basics',
        description: 'Understand network protocols and security measures.',
        duration: '25 hours',
        difficulty: 'Intermediate',
        rating: 4.5,
        students: '680K',
        icon: '🛡️',
        color: 'bg-gradient-to-br from-gray-700 to-red-600'
      }
    ]
  },
  'backend': {
    name: 'Backend Development',
    icon: Server,
    color: 'bg-indigo-500',
    description: 'Master server-side programming and API development',
    courses: [
        {
        id: 'dotnet-core',
        title: '.NET Core Web API',
        description: 'Build scalable backend APIs using ASP.NET Core. Learn controllers, middleware, dependency injection, and database integration.',
        duration: '30 hours',
        difficulty: 'Intermediate',
        rating: 4.8,
        students: '950K',
        icon: '🟣',
        color: 'bg-gradient-to-br from-purple-600 to-indigo-600'
      },
      {
        id: 'nodejs-express',
        title: 'Node.js & Express',
        description: 'Create powerful backend APIs with Node.js and Express. Learn REST APIs, middleware, and database integration.',
        duration: '28 hours',
        difficulty: 'Intermediate',
        rating: 4.8,
        students: '1.2M',
        icon: '⚙️',
        color: 'bg-gradient-to-br from-green-500 to-emerald-600'
      },
      {
        id: 'django-python',
        title: 'Django Web Framework',
        description: 'Build powerful web applications with Python Django.',
        duration: '32 hours',
        difficulty: 'Intermediate',
        rating: 4.7,
        students: '890K',
        icon: '🐍',
        color: 'bg-gradient-to-br from-green-600 to-teal-600'
      },
      {
        id: 'redis',
        title: 'Redis Caching',
        description: 'Learn Redis for caching and performance optimization',
        duration: '10 hours',
        difficulty: 'Intermediate',
        rating: 4.7,
        students: '500K',
        icon: '🔥',
        color: 'bg-gradient-to-br from-red-500 to-orange-500'
      },
      
    ]
  },
  'ai-ml': {
    name: 'AI & Machine Learning',
    icon: Brain,
    color: 'bg-teal-500',
    description: 'Explore artificial intelligence and machine learning technologies',
    courses: [
      {
        id: 'deep-learning',
        title: 'Deep Learning Specialization',
        description: 'Master neural networks and deep learning with TensorFlow.',
        duration: '50 hours',
        difficulty: 'Advanced',
        rating: 4.9,
        students: '650K',
        icon: '🧠',
        color: 'bg-gradient-to-br from-purple-600 to-pink-600'
      },
      {
        id: 'nlp-fundamentals',
        title: 'Natural Language Processing',
        description: 'Build NLP applications with Python and transformers.',
        duration: '35 hours',
        difficulty: 'Advanced',
        rating: 4.7,
        students: '520K',
        icon: '💬',
        color: 'bg-gradient-to-br from-indigo-500 to-purple-600'
      }
    ]
  }
};
