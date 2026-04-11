import { ArrowRight, Code, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#10162F] via-[#1A1F3A] to-[#10162F] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#3A10E5]/20 border border-[#3A10E5]/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#FFD300]" />
              <span className="text-sm">Learn by doing with hands-on projects</span>
            </div>

            <h1 className="text-5xl lg:text-6xl mb-6">
              Learn JavaScript from scratch
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Master the fundamentals of JavaScript through interactive lessons,
              real-world projects, and personalized guidance. Start coding in minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#3A10E5] hover:bg-[#3A10E5]/90 px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105">
                Start Learning - It's Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-lg transition-colors">
                View Course Syllabus
              </button>
            </div>

            <div className="flex items-center gap-8 mt-8 text-sm">
              <div>
                <div className="text-2xl font-semibold text-[#FFD300]">50M+</div>
                <div className="text-gray-400">Learners</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-[#FFD300]">190+</div>
                <div className="text-gray-400">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-[#FFD300]">5000+</div>
                <div className="text-gray-400">Companies</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="bg-[#1E1E2E] rounded-2xl p-6 shadow-2xl border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="font-mono text-sm space-y-2">
                <div className="text-purple-400">{'// Your first JavaScript program'}</div>
                <div>
                  <span className="text-pink-400">function</span>{' '}
                  <span className="text-yellow-300">greet</span>
                  <span className="text-white">() {'{'}</span>
                </div>
                <div className="pl-4">
                  <span className="text-pink-400">const</span>{' '}
                  <span className="text-white">message</span>{' '}
                  <span className="text-pink-400">=</span>{' '}
                  <span className="text-green-400">"Hello, World!"</span>
                  <span className="text-white">;</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">console</span>
                  <span className="text-white">.</span>
                  <span className="text-yellow-300">log</span>
                  <span className="text-white">(message);</span>
                </div>
                <div>
                  <span className="text-white">{'}'}</span>
                </div>
                <div className="mt-4">
                  <span className="text-yellow-300">greet</span>
                  <span className="text-white">();</span>
                </div>
                <div className="mt-4 text-green-400">{'> Hello, World!'}</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#3A10E5] rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#FFD300] rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
