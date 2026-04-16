import type { Course } from "./types";

export const catalogCourses: Course[] = [
  {
    id: "javascript-fundamentals",
    title: "JavaScript Fundamentals",
    description:
      "Learn the basics of JavaScript including variables, functions, loops, and more through interactive coding exercises.",
    duration: "20 hours",
    difficulty: "Beginner",
    rating: 4.8,
    students: "2.5M",
    progress: 35,
    icon: "{ }",
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    id: "dotnet-development",
    title: ".NET Development",
    description:
      "Master .NET from scratch. Learn C#, ASP.NET Core, Web APIs, Entity Framework, and build scalable backend applications.",
    duration: "30 hours",
    difficulty: "Intermediate",
    rating: 4.8,
    students: "1.1M",
    progress: 10,
    icon: "🟣",
    color: "bg-gradient-to-br from-purple-500 to-indigo-600",
  },
  {
    id: "react-beginners",
    title: "React for Beginners",
    description:
      "Build modern web applications with React. Master components, hooks, state management, and more.",
    duration: "25 hours",
    difficulty: "Intermediate",
    rating: 4.9,
    students: "1.8M",
    progress: 60,
    icon: "âš›ï¸",
    color: "bg-gradient-to-br from-cyan-400 to-blue-500",
  },
  {
    id: "advanced-typescript",
    title: "Advanced TypeScript",
    description:
      "Deep dive into TypeScript with advanced types, generics, decorators, and building type-safe applications.",
    duration: "30 hours",
    difficulty: "Advanced",
    rating: 4.7,
    students: "850K",
    icon: "TS",
    color: "bg-gradient-to-br from-blue-600 to-blue-800",
  },
  {
    id: "nodejs-express",
    title: "Node.js & Express",
    description:
      "Create powerful backend APIs with Node.js and Express. Learn REST APIs, middleware, and database integration.",
    duration: "28 hours",
    difficulty: "Intermediate",
    rating: 4.8,
    students: "1.2M",
    icon: "âš™ï¸",
    color: "bg-gradient-to-br from-green-500 to-emerald-600",
  },
  // {
  //   id: "python-programming",
  //   title: "Python Programming",
  //   description:
  //     "Master Python from scratch. Learn syntax, data structures, OOP, and build real-world applications.",
  //   duration: "35 hours",
  //   difficulty: "Beginner",
  //   rating: 4.9,
  //   students: "3.2M",
  //   progress: 15,
  //   icon: "ðŸ",
  //   color: "bg-gradient-to-br from-blue-500 to-yellow-400",
  // },
  {
    id: "sql-database",
    title: "SQL Database Design",
    description:
      "Learn database design, queries, joins, and optimization. Work with MySQL, PostgreSQL, and more.",
    duration: "22 hours",
    difficulty: "Intermediate",
    rating: 4.6,
    students: "1.5M",
    icon: "ðŸ—„ï¸",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
];
