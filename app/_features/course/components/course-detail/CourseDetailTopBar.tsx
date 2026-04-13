import Link from "next/link";
import { ChevronLeft } from "lucide-react";

type Props = {
  progressPercentage: number;
};

export function CourseDetailTopBar({ progressPercentage }: Props) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-[#3A10E5] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Courses</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              Progress:{" "}
              <span className="font-semibold text-[#3A10E5]">
                {progressPercentage}%
              </span>
            </div>
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#3A10E5] transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

