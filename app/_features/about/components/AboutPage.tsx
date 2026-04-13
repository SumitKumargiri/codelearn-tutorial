import { stats, values } from "@/features/about/model/about-data";


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#3A10E5] to-[#5B21B6] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-4">About CodeLearn</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            We&apos;re on a mission to make quality tech education accessible to everyone, everywhere.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <Icon className="w-8 h-8 mx-auto mb-3 text-[#3A10E5]" />
                <div className="text-3xl mb-1 text-gray-600">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Mission */}
        <div className="mb-16">
          <h2 className="text-4xl mb-8 text-center text-black">Our Mission</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              CodeLearn was founded in 2020 with a simple yet powerful vision: to democratize tech education
              and empower individuals to achieve their career goals through accessible, high-quality learning experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we serve millions of learners across 180+ countries, offering interactive courses in
              programming, data science, web development, and more. Our platform combines engaging content
              with hands-on practice to ensure learners gain practical skills they can apply immediately.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-4xl mb-8 text-center text-black">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl mb-3 text-gray-600">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#3A10E5] to-[#5B21B6] rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl mb-4">Join Our Journey</h2>
          <p className="text-xl opacity-90 mb-8">
            Be part of a global community transforming lives through education
          </p>
          <button className="bg-white text-[#3A10E5] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Start Learning Today
          </button>
        </div>
      </div>

    </div>
  );
}


