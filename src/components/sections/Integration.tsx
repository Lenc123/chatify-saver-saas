
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
    <section id="integrations" className="section-padding bg-white relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-gray-50 to-white"></div>
      
      <div className="container-custom relative z-10">
        <AnimatedCard className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-brand-lightBlue text-brand-blue rounded-full mb-4 font-medium text-sm">
            Easy Setup
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Integrate With Your Store in Under 2 Minutes</h2>
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
              <div className="glass-card rounded-xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
                <div className="text-6xl font-bold text-brand-blue/10 mb-6">{step.number}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.0607 13.0607C39.6464 12.4749 39.6464 11.5251 39.0607 10.9393L29.5147 1.3934C28.9289 0.807612 27.9792 0.807612 27.3934 1.3934C26.8076 1.97918 26.8076 2.92893 27.3934 3.51472L35.8787 12L27.3934 20.4853C26.8076 21.0711 26.8076 22.0208 27.3934 22.6066C27.9792 23.1924 28.9289 23.1924 29.5147 22.6066L39.0607 13.0607ZM0 13.5H38V10.5H0V13.5Z" fill="#0EA5E9" fillOpacity="0.3"/>
                  </svg>
                </div>
              )}
            </AnimatedCard>
          ))}
        </div>

        {/* Platform integrations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedCard>
            <div className="glass-card rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Compatible with your favorite platforms</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {integrations.map((integration, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-brand-blue transition-all duration-300">
                    <h4 className="text-xl font-semibold mb-4 text-brand-blue">{integration.name}</h4>
                    <ul className="space-y-2">
                      {integration.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 size={18} className="text-brand-green mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-600 mt-6">
                Our AI solution integrates with all major e-commerce platforms and can be customized to work with your unique store setup.
              </p>
            </div>
          </AnimatedCard>
          
          <AnimatedCard delay={200}>
            <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-brand-blue/5 to-white border border-brand-blue/10">
              <h3 className="text-2xl font-semibold mb-6">Ready to transform your customer support?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-lightBlue p-2 rounded-full mr-4 flex-shrink-0">
                    <CheckCircle2 size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">No technical skills required</h4>
                    <p className="text-gray-600">Simple integration with step-by-step guidance</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-lightBlue p-2 rounded-full mr-4 flex-shrink-0">
                    <CheckCircle2 size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">14-day free trial</h4>
                    <p className="text-gray-600">Full access to all features with no commitment</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-lightBlue p-2 rounded-full mr-4 flex-shrink-0">
                    <CheckCircle2 size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dedicated onboarding support</h4>
                    <p className="text-gray-600">Our team helps you get maximum value from day one</p>
                  </div>
                </div>
              </div>
              
              <Button className="btn-primary w-full mt-8 text-base">Integrate Now & Start Your Free Trial</Button>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default Integration;
