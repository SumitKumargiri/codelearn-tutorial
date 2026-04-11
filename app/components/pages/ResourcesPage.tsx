import { resources } from '@/app/data/resources';
import { Download, ExternalLink } from 'lucide-react';


export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#3A10E5] to-[#5B21B6] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-4">Learning Resources</h1>
          <p className="text-xl opacity-90">Everything you need to accelerate your learning journey</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <div key={resource.category} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${resource.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl text-black">{resource.category}</h2>
                </div>

                <div className="space-y-4">
                  {resource.items.map((item) => (
                    <a
                      key={item.title}
                      href={item.link}
                      className="block p-4 border border-gray-200 rounded-xl hover:border-[#3A10E5] hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1 text-gray-600 group-hover:text-[#3A10E5] transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#3A10E5] flex-shrink-0 ml-4" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Download Section */}
        <div className="mt-12 bg-gradient-to-r from-[#3A10E5] to-[#5B21B6] rounded-2xl p-12 text-white text-center">
          <Download className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl mb-4">Download Our Mobile App</h2>
          <p className="text-xl opacity-90 mb-8">Learn on the go with our iOS and Android apps</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#3A10E5] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Download for iOS
            </button>
            <button className="bg-white text-[#3A10E5] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Download for Android
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
