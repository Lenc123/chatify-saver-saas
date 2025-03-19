
import React from 'react';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Connect your store",
    description: "Seamlessly connect your Shopify or WooCommerce store with just a few clicks.",
    delay: 0
  },
  {
    number: "02",
    title: "Customize your policies",
    description: "Configure your support policies, FAQs, and AI response tone to match your brand.",
    delay: 150
  },
  {
    number: "03",
    title: "Launch & start saving",
    description: "Activate your AI support assistant and watch the cost savings roll in immediately.",
    delay: 300
  }
];

const integrations = [
  {
    name: "Shopify",
    features: ["Product catalog sync", "Order management", "Customer profiles", "Automated notifications"]
  },
  {
    name: "WooCommerce",
    features: ["WordPress integration", "Custom field support", "Multi-vendor ready", "Subscription management"]
  }
];

const Integration = () => {
  return (
    <section id="integrations" className="turso-section">
      <div className="turso-container">
        <AnimatedCard className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-brand-secondary/10 text-brand-secondary rounded-full mb-4 font-medium text-sm">
            Easy Setup
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Integrate With Your Store in Under 2 Minutes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            No coding required. Start automating your customer support with a simple integration process.
          </p>
        </AnimatedCard>

        {/* Integration steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <AnimatedCard 
              key={index} 
              delay={step.delay}
              className="relative"
            >
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 h-full hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
                <div className="text-6xl font-bold text-brand-secondary/10 mb-6">{step.number}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.0607 13.0607C39.6464 12.4749 39.6464 11.5251 39.0607 10.9393L29.5147 1.3934C28.9289 0.807612 27.9792 0.807612 27.3934 1.3934C26.8076 1.97918 26.8076 2.92893 27.3934 3.51472L35.8787 12L27.3934 20.4853C26.8076 21.0711 26.8076 22.0208 27.3934 22.6066C27.9792 23.1924 28.9289 23.1924 29.5147 22.6066L39.0607 13.0607ZM0 13.5H38V10.5H0V13.5Z" fill="#00B5B0" fillOpacity="0.3"/>
                  </svg>
                </div>
              )}
            </AnimatedCard>
          ))}
        </div>

        {/* Platform integrations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <AnimatedCard>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Compatible with your favorite platforms</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {integrations.map((integration, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-brand-secondary transition-all duration-300">
                    <h4 className="text-lg font-semibold mb-4 text-brand-secondary">{integration.name}</h4>
                    <ul className="space-y-2">
                      {integration.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-600 mt-6 text-sm">
                Our AI solution integrates with all major e-commerce platforms and can be customized to work with your unique store setup.
              </p>
            </div>
          </AnimatedCard>
          
          <AnimatedCard delay={200}>
            <div className="bg-brand-secondary/5 rounded-xl border border-brand-secondary/20 p-8">
              <h3 className="text-2xl font-semibold mb-6">Ready to transform your customer support?</h3>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-brand-secondary/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <CheckCircle2 size={18} className="text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">No technical skills required</h4>
                    <p className="text-gray-600 text-sm">Simple integration with step-by-step guidance</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-secondary/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <CheckCircle2 size={18} className="text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">14-day free trial</h4>
                    <p className="text-gray-600 text-sm">Full access to all features with no commitment</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-secondary/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <CheckCircle2 size={18} className="text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dedicated onboarding support</h4>
                    <p className="text-gray-600 text-sm">Our team helps you get maximum value from day one</p>
                  </div>
                </div>
              </div>
              
              <Button className="w-full mt-8 bg-brand-primary text-white hover:bg-brand-primary/90 rounded-lg text-base py-3">Integrate Now & Start Your Free Trial</Button>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default Integration;
