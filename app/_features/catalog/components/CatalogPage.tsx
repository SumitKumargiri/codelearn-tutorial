"use client";

import { CourseCard } from "@/features/course/components/CourseCard";
import { catalogCourses } from "@/features/course/model/catalog-courses";
import { Search } from "lucide-react";
import { useState } from "react";

export default function CatalogPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");

  const filteredCourses =
    selectedDifficulty === "All"
      ? catalogCourses
      : catalogCourses.filter((course) => course.difficulty === selectedDifficulty);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#3A10E5] to-[#5B21B6] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-4">Course Catalog</h1>
          <p className="text-xl opacity-90 mb-8">Explore all our courses and start learning today</p>

          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for courses..."
                className="w-full pl-12 pr-4 py-4 border-1 placeholder-white border-white rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="font-semibold">Filter by:</span>
          <div className="flex gap-2 flex-wrap sm:flex-nowrap overflow-x-auto">
            {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
              <button
                key={level}
                onClick={() => setSelectedDifficulty(level)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedDifficulty === level
                    ? "bg-[#3A10E5] text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-[#3A10E5]"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">{filteredCourses.length} courses found</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}


