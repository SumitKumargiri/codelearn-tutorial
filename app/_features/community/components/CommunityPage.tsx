import { communityStats, discussions, upcomingEvents } from "@/features/community/model/community-data";
import { Users, MessageCircle, Trophy, Calendar, Heart } from 'lucide-react';


export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#3A10E5] to-[#5B21B6] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-4">Join Our Community</h1>
          <p className="text-xl opacity-90 mb-8">Connect with millions of learners worldwide</p>
          <button className="bg-white text-[#3A10E5] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Start a Discussion
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {communityStats.map((stat) => {
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Discussions */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl text-black">Trending Discussions</h2>
              <button className="text-[#3A10E5] hover:underline">View All</button>
            </div>

            <div className="space-y-4">
              {discussions.map((discussion) => (
                <div
                  key={discussion.title}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <span className="text-xs px-3 py-1 bg-[#3A10E5]/10 text-[#3A10E5] rounded-full">
                        {discussion.category}
                      </span>
                      <h3 className="text-lg mt-2 text-[#3613c1] hover:text-[#3A10E5] transition-colors">
                        {discussion.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                      <span>by {discussion.author}</span>
                      <span>{discussion.time}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{discussion.replies}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{discussion.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl mb-6 text-black">Upcoming Events</h2>

            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-[#3A10E5] text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-[#3613c1]">{event.title}</h3>
                      <p className="text-sm text-gray-600">{event.date}</p>
                      <p className="text-sm text-gray-600">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attending</span>
                    </div>
                    <button className="text-[#3A10E5] hover:underline text-sm">RSVP</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievement Highlight */}
            <div className="mt-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-6 text-white">
              <Trophy className="w-12 h-12 mb-4" />
              <h3 className="text-xl mb-2">Community Champions</h3>
              <p className="text-sm opacity-90 mb-4">
                Top contributors this month get special badges and recognition!
              </p>
              <button className="bg-white text-orange-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                View Leaderboard
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}


