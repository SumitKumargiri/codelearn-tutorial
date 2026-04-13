"use client";

import { useParams } from "next/navigation";
import { ChevronLeft } from 'lucide-react';
import { CourseCard } from "@/features/course/components/CourseCard";
import Link from 'next/link';
import { categoryData } from "@/features/category/model/category-data";


export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? categoryData[slug] : null;

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl mb-4">Category not found</h1>
          <Link href="/" className="text-[#3A10E5] hover:underline">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = category.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-[#3A10E5] transition-colors w-fit">
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Category Header */}
      <div className="bg-gradient-to-r from-[#3A10E5] to-[#5B21B6] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <div className={`${category.color} w-20 h-20 rounded-2xl flex items-center justify-center`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl mb-3">{category.name}</h1>
              <p className="text-xl opacity-90">{category.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl">Available Courses</h2>
          <p className="text-gray-600">{category.courses.length} courses</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

    </div>
  );
}
