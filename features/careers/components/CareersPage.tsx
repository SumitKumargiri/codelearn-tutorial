import { benefits, openPositions } from "@/features/careers/model/careers-data";
import { Briefcase, Clock, MapPin } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#3A10E5] to-[#5B21B6] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-4">Careers at CodeLearn</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Join us in our mission to make quality tech education accessible to everyone
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16">
          <h2 className="text-4xl mb-8 text-center text-black">Why Join Us?</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <span className="text-2xl">{benefit.split(" ")[0]}</span>
                  <span className="text-gray-700">{benefit.split(" ").slice(1).join(" ")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl mb-8 text-center text-black">Open Positions</h2>
          <p className="text-center text-gray-600 mb-8">{openPositions.length} positions available</p>

          <div className="space-y-4">
            {openPositions.map((position) => (
              <div key={position.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl mb-2 text-gray-600">{position.title}</h3>
                    <p className="text-gray-600 mb-3">{position.description}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </div>

                  <button className="bg-[#3A10E5] hover:bg-[#3A10E5]/90 text-white px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl mb-4">Don&apos;t see a position that fits?</h2>
          <p className="text-xl opacity-90 mb-8">
            We&apos;re always looking for talented people. Send us your resume!
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Submit General Application
          </button>
        </div>
      </div>
    </div>
  );
}
