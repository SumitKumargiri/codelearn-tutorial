import type { FAQ, Plan } from "./types";


export const plans: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      'Access to basic courses',
      'Community forum access',
      'Code playground',
      'Mobile app access',
      'Progress tracking'
    ],
    limitations: [
      'Limited to 5 courses per month',
      'No certificates',
      'Standard support'
    ],
    buttonText: 'Get Started Free',
    buttonStyle: 'border border-gray-300 hover:border-[#3A10E5] text-gray-900',
    popular: false
  },
  {
    name: 'Plus',
    price: '$19.99',
    period: 'per month',
    description: 'Best for serious learners',
    features: [
      'Unlimited access to all courses',
      'Completion certificates',
      'Priority support',
      'Offline mode',
      'Advanced projects',
      'Career resources',
      'Interview prep',
      'No ads'
    ],
    buttonText: 'Start Free Trial',
    buttonStyle: 'bg-[#3A10E5] hover:bg-[#3A10E5]/90 text-white',
    popular: true
  },
  {
    name: 'Pro',
    price: '$39.99',
    period: 'per month',
    description: 'For professionals and teams',
    features: [
      'Everything in Plus',
      'Live mentorship sessions',
      'Personalized learning path',
      'Job placement assistance',
      'Team collaboration tools',
      'Custom course requests',
      'API access',
      'Priority course updates'
    ],
    buttonText: 'Contact Sales',
    buttonStyle: 'border border-gray-300 hover:border-[#3A10E5] text-gray-900',
    popular: false
  }
];

export const faqs: FAQ[] = [
  {
    question: 'Can I switch plans anytime?',
    answer: 'Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we offer a 7-day free trial for the Plus plan. No credit card required to start.'
  },
  {
    question: 'Do you offer student discounts?',
    answer: 'Yes! Students get 50% off on all paid plans. Verify your student status to unlock the discount.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and offer annual billing options for additional savings.'
  }
];
