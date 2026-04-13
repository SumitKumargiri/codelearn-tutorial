import { Code, Database, Layout, Palette, Shield, Smartphone, Server, Brain } from 'lucide-react';
import Link from 'next/link';

const categories = [
  { name: 'Web Development', slug: 'web-development', icon: Layout, color: 'bg-blue-500', count: 45 },
  { name: 'Programming', slug: 'programming', icon: Code, color: 'bg-purple-500', count: 38 },
  { name: 'Data Science', slug: 'data-science', icon: Database, color: 'bg-green-500', count: 32 },
  { name: 'Design', slug: 'design', icon: Palette, color: 'bg-pink-500', count: 28 },
  { name: 'Mobile Dev', slug: 'mobile-dev', icon: Smartphone, color: 'bg-orange-500', count: 25 },
  { name: 'Cybersecurity', slug: 'cybersecurity', icon: Shield, color: 'bg-red-500', count: 22 },
  { name: 'Backend', slug: 'backend', icon: Server, color: 'bg-indigo-500', count: 30 },
  { name: 'AI & ML', slug: 'ai-ml', icon: Brain, color: 'bg-teal-500', count: 18 }
];


export function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-black">Explore by Category</h2>
          <p className="text-gray-600 text-lg">Choose from hundreds of courses across different technologies</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href={`/category/${category.slug}`}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer border border-gray-200 hover:border-[#3A10E5]/50 hover:-translate-y-1 block"
              >
                <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-1 text-black">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} courses</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
