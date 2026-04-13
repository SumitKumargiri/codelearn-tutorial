import { faqs, plans } from '@/features/plans/model/plans-data';
import { Check, Zap } from 'lucide-react';

export default function PlansPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#3A10E5] to-[#5B21B6] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-4">Choose Your Plan</h1>
          <p className="text-xl opacity-90">Start learning for free, upgrade when you&apos;re ready</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl p-8 shadow-sm relative ${
                plan.popular ? 'ring-2 ring-[#3A10E5] shadow-xl' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-[#3A10E5] text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl mb-2 text-black">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl text-gray-600">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/ {plan.period}</span>
                </div>
              </div>

              <button className={`w-full py-3 rounded-lg transition-all mb-6 ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>

              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
                {plan.limitations?.map((limitation) => (
                  <div key={limitation} className="flex items-start gap-3">
                    <div className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-400">Ã—</div>
                    <span className="text-sm text-gray-500">{limitation}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-12 mb-16 text-center">
          <h2 className="text-3xl mb-4">Enterprise Solutions</h2>
          <p className="text-xl opacity-90 mb-8">
            Custom solutions for organizations with 50+ team members
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Contact Sales
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-3xl text-center mb-12 text-black">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg mb-2 text-gray-600">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}


