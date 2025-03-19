import React, { useState } from 'react';
import { Check } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type PricingPlan = {
  title: string;
  description: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  ctaButtonClassName?: string;
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const pricingPlans: PricingPlan[] = [
    {
      title: 'Starter',
      description: 'Perfect for new stores with growing support needs',
      price: billingCycle === 'monthly' ? '$49' : '$39',
      features: [
        'AI support bot',
        'Up to 500 conversations/month',
        'Basic analytics',
        'Email integration',
        '8-hour support'
      ]
    },
    {
      title: 'Growth',
      description: 'Ideal for established stores looking to scale',
      price: billingCycle === 'monthly' ? '$99' : '$79',
      features: [
        'Everything in Starter',
        'Up to 2,000 conversations/month',
        'Advanced analytics',
        'Shopify/WooCommerce integration',
        'Custom training',
        'Priority support'
      ],
      isPopular: true,
      ctaButtonClassName: 'bg-brand-secondary text-white hover:bg-brand-secondary/90'
    },
    {
      title: 'Pro',
      description: 'For high-volume stores with complex needs',
      price: billingCycle === 'monthly' ? '$199' : '$159',
      features: [
        'Everything in Growth',
        'Unlimited conversations',
        'Advanced integrations',
        'Custom AI training',
        'Dedicated account manager',
        '24/7 priority support'
      ]
    }
  ];

  return (
    <section id="pricing" className="turso-section bg-white">
      <div className="turso-container">
        <AnimatedCard className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-brand-secondary/10 text-brand-secondary rounded-full mb-4 font-medium text-sm">
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your business. All plans come with a 14-day free trial.
          </p>
          
          <div className="flex items-center justify-center mt-8 bg-gray-100 inline-flex p-1 rounded-full">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                billingCycle === 'monthly' 
                  ? 'bg-white shadow-sm text-brand-text' 
                  : 'text-gray-500 hover:text-gray-700'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2",
                billingCycle === 'annual' 
                  ? 'bg-white shadow-sm text-brand-text' 
                  : 'text-gray-500 hover:text-gray-700'
              )}
            >
              Annual <span className="text-brand-secondary font-semibold text-xs">Save 20%</span>
            </button>
          </div>
        </AnimatedCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <AnimatedCard 
              key={index} 
              delay={index * 100}
              className={cn(
                "rounded-2xl border",
                plan.isPopular 
                  ? "border-brand-secondary relative overflow-hidden" 
                  : "border-gray-200"
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-brand-secondary text-white py-1 px-4 text-sm font-medium">
                    Popular
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold">{plan.title}</h3>
                <p className="text-gray-600 mt-2 h-12">{plan.description}</p>
                
                <div className="mt-6 mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                
                <Button 
                  variant="amber"
                  size="xl" 
                  className="w-full mb-6"
                >
                  Start Free Trial
                </Button>
                
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={18} className="text-brand-secondary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
