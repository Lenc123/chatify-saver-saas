import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedCard from '@/components/ui/AnimatedCard';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  cta: string;
  delay?: number;
}

const PricingTier: React.FC<PricingTierProps> = ({ 
  name, 
  price, 
  description, 
  features, 
  isPopular = false,
  cta,
  delay = 0
}) => {
  return (
    <AnimatedCard delay={delay}>
      <div className={`h-full flex flex-col rounded-xl border ${isPopular ? 'border-[#008080]' : 'border-gray-200'} shadow-sm overflow-hidden bg-white`}>
        {isPopular && (
          <div className="bg-[#008080] text-white text-center text-sm font-medium py-1.5">
            Most Popular
          </div>
        )}
        
        <div className={`flex-1 p-6 sm:p-8 ${isPopular ? 'pt-6' : 'pt-8'}`}>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">{price}</span>
              {price !== 'Custom' && (
                <span className="text-gray-500 ml-2">/month</span>
              )}
            </div>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#008080]/10 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3 w-3 text-[#008080]" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-auto">
            <Button 
              variant={isPopular ? "teal" : "outline"} 
              className={`w-full ${isPopular ? 'shadow-lg hover:shadow-xl transition-shadow' : ''}`}
              size="lg"
            >
              {cta}
            </Button>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const pricingTiers = [
    {
      name: "Starter",
      price: isAnnual ? "$49" : "$79",
      description: "Perfect for small online stores just getting started with AI support.",
      features: [
        "Up to 500 AI-handled support inquiries/mo",
        "Email & chat support channels",
        "Basic store integrations",
        "Standard response templates",
        "24-hour support ticket resolution"
      ],
      cta: "Start Free Trial",
      delay: 0
    },
    {
      name: "Growth",
      price: isAnnual ? "$149" : "$199",
      description: "Ideal for growing e-commerce businesses with increasing support needs.",
      features: [
        "Up to 2,500 AI-handled support inquiries/mo",
        "All channels including social media",
        "Premium store & CRM integrations",
        "Custom response templates",
        "8-hour support ticket resolution",
        "Priority support"
      ],
      isPopular: true,
      cta: "Start Free Trial",
      delay: 100
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large e-commerce operations with complex needs.",
      features: [
        "Unlimited AI-handled support inquiries",
        "All channels with custom integrations",
        "Advanced analytics & reporting",
        "AI training with your historical data",
        "4-hour support ticket resolution",
        "Dedicated account manager",
        "Custom AI model fine-tuning"
      ],
      cta: "Contact Sales",
      delay: 200
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-[#F9FAFF]">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-60 h-60 bg-[#008080]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#008080]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="turso-container">
        <AnimatedCard className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-block px-3 py-1 bg-[#008080]/10 text-[#008080] rounded-full mb-4 font-medium text-sm">
            Simple Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">Choose the Perfect <span className="text-[#008080]">Plan</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. All plans include our core AI support platform with a 14-day free trial.
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="bg-white p-1 rounded-lg shadow-sm inline-flex border border-gray-200">
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isAnnual 
                    ? 'bg-[#008080] text-white' 
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                Annual (20% off)
              </button>
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  !isAnnual 
                    ? 'bg-[#008080] text-white' 
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                Monthly
              </button>
            </div>
          </div>
        </AnimatedCard>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              isPopular={tier.isPopular}
              cta={tier.cta}
              delay={tier.delay}
            />
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          <AnimatedCard delay={300} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Need a custom solution?</h3>
            <p className="text-gray-600 mb-6">
              Our enterprise plans can be tailored to your specific needs. Contact our sales team for a personalized demo and quote.
            </p>
            <Button variant="outline" className="min-w-[200px]">
              Contact Sales Team
            </Button>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
