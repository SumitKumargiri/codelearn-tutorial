import { CourseCard } from "@/features/course/components/CourseCard";
import { catalogCourses } from "@/features/course/model/catalog-courses";
import { Categories } from "./Categories";
import { Hero } from "./Hero";
import { Stats } from "./Stats";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl mb-2 text-black">Popular Courses</h2>
              <p className="text-gray-600 text-lg">Start your learning journey with our most loved courses</p>
            </div>
            <button className="hidden md:block px-6 py-3 border border-gray-300 rounded-lg hover:border-[#3A10E5] hover:text-[#3A10E5] transition-colors">
              View All Courses
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <Categories />
      <Stats />

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Ready to start your coding journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join millions of learners and start building your future today. Free to get started, upgrade anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#3A10E5] hover:bg-[#3A10E5]/90 text-white px-8 py-4 rounded-lg transition-all hover:scale-105">
              Get Started for Free
            </button>
            <button className="border border-gray-300 hover:border-[#3A10E5] hover:text-[#3A10E5] px-8 py-4 rounded-lg transition-colors">
              Explore Plans
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


