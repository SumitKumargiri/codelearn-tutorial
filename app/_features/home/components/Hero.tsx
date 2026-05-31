"use client";
import { ImageWithFallback } from '@/shared/figma/ImageWithFallback';
import { ArrowRight, BookOpen, Code2, Rocket, Sparkles } from 'lucide-react';
import hero from "@/public/Heosection2.png";

export function Hero() {
  return (
      <section className="bg-gradient-to-br from-[#10162F] via-[#1A1F3A] to-[#10162F] text-white px-6 py-2 grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <div className="inline-flex items-center px-5 py-2 rounded-xl  text-indigo-700 font-semibold mb-8">
            Learn. Code. Grow.
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight text-[#091540]">
            Learn to Code.
            <br />
            <span className="text-indigo-500">Build Your Future.</span>
          </h1>

          <p className="mt-8 text-xl text-slate-600 leading-9 max-w-2xl">
            CodeLearn Tutorial is your free resource for learning
            programming from basics to advanced with practical examples,
            real-world projects, and developer-focused learning.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center">
                <BookOpen className="text-indigo-600 w-7 h-7" />
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#091540]">
                  Beginner Friendly
                </h3>

                <p className="text-slate-500 mt-2">
                  Step-by-step tutorials for everyone
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center">
                <Code2 className="text-indigo-600 w-7 h-7" />
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#091540]">
                  Hands-on Code
                </h3>

                <p className="text-slate-500 mt-2">
                  Practice with real code examples
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center">
                <Rocket className="text-indigo-600 w-7 h-7" />
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#091540]">
                  Build Projects
                </h3>

                <p className="text-slate-500 mt-2">
                  Apply your skills with real-world projects
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 mt-14">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-lg">
              Explore Tutorials →
            </button>

            <button className="border-2 border-indigo-300 hover:bg-indigo-50 text-indigo-700 px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300">
              View Courses
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-slate-100">
            
            <div>
              <h2 className="text-5xl font-bold text-indigo-600">
                100+
              </h2>
              <p className="text-slate-500 mt-3">Tutorials</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-indigo-600">
                20+
              </h2>
              <p className="text-slate-500 mt-3">Courses</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-indigo-600">
                50+
              </h2>
              <p className="text-slate-500 mt-3">Projects</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-indigo-600">
                10K+
              </h2>
              <p className="text-slate-500 mt-3">Learners</p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative flex justify-center">
          <ImageWithFallback
             src={hero.src}
            alt="CodeLearn Banner"
            width={800}
            height={700}
            className="w-full max-w-3xl object-contain drop-shadow-2xl"
            // priority
          />
        </div>
      </section>
  );
}
