import { TrendingUp, Award, Target, Zap } from 'lucide-react';

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#3A10E5] to-[#6C5CE7] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Why Learners Love CodeLearn</h2>
          <p className="text-white/80 text-lg">Join millions of students mastering tech skills</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div className="text-3xl font-semibold mb-2">95%</div>
            <div className="text-white/80">Completion Rate</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>
            <div className="text-3xl font-semibold mb-2">10M+</div>
            <div className="text-white/80">Certificates Earned</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8" />
            </div>
            <div className="text-3xl font-semibold mb-2">300+</div>
            <div className="text-white/80">Skill Paths</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8" />
            </div>
            <div className="text-3xl font-semibold mb-2">24/7</div>
            <div className="text-white/80">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
