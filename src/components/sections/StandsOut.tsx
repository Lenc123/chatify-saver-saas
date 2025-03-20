import React, { useState } from 'react';
import { Zap, Bot, Layers, Clock, Check, X } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Button } from '@/components/ui/button';

interface AdvantageItemProps {
  title: string;
  description: string;
  advantages: string[];
  icon: React.ReactNode;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({ 
  title, 
  description,
  advantages,
  icon
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 h-full hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-brand-secondary/5 rounded-full"></div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-[#008080]/10 rounded-xl mr-4 text-[#008080]">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6 text-sm">{description}</p>
        
        <div className="space-y-3">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-3 text-[#008080]">
                <Check size={18} />
              </div>
              <p className="text-gray-700 text-sm">{advantage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface ComparisonRowProps {
  feature: string;
  competitors: boolean;
  unburdend: boolean;
}

const ComparisonRow: React.FC<ComparisonRowProps> = ({ feature, competitors, unburdend }) => {
  return (
    <div className="grid grid-cols-3 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <div className="col-span-1 font-medium text-gray-700 pl-4 pr-2 flex items-center">
        <span className="line-clamp-2 sm:line-clamp-none">{feature}</span>
      </div>
      <div className="col-span-1 text-center flex justify-center items-center">
        {competitors ? 
          <div className="inline-flex items-center justify-center bg-gray-100 rounded-full w-8 h-8">
            <Check size={16} className="text-gray-500" /> 
          </div> : 
          <div className="inline-flex items-center justify-center bg-gray-50 rounded-full w-8 h-8">
            <X size={16} className="text-gray-300" />
          </div>
        }
      </div>
      <div className="col-span-1 text-center flex justify-center items-center">
        {unburdend ? 
          <div className="inline-flex items-center justify-center bg-[#008080]/10 rounded-full w-8 h-8">
            <Check size={16} className="text-[#008080]" /> 
          </div> : 
          <div className="inline-flex items-center justify-center bg-gray-50 rounded-full w-8 h-8">
            <X size={16} className="text-gray-300" />
          </div>
        }
      </div>
    </div>
  );
};

// For mobile-only comparison view
const MobileComparisonItem: React.FC<ComparisonRowProps> = ({ feature, competitors, unburdend }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm mb-3">
      <div className="font-medium text-gray-800 mb-3">{feature}</div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">Competitors:</span>
          {competitors ? 
            <div className="inline-flex items-center justify-center bg-gray-100 rounded-full w-6 h-6">
              <Check size={14} className="text-gray-500" /> 
            </div> : 
            <div className="inline-flex items-center justify-center bg-gray-50 rounded-full w-6 h-6">
              <X size={14} className="text-gray-300" />
            </div>
          }
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">Unburdend:</span>
          {unburdend ? 
            <div className="inline-flex items-center justify-center bg-[#008080]/10 rounded-full w-6 h-6">
              <Check size={14} className="text-[#008080]" /> 
            </div> : 
            <div className="inline-flex items-center justify-center bg-gray-50 rounded-full w-6 h-6">
              <X size={14} className="text-gray-300" />
            </div>
          }
        </div>
      </div>
    </div>
  );
};

const StandsOut = () => {
  const advantageItems = [
    {
      title: "AI-Powered Automation",
      description: "Our advanced AI resolves customer inquiries without human intervention.",
      advantages: [
        "Resolves up to 95% of routine queries automatically",
        "Saves teams 30+ hours per week on support tasks",
        "Self-improves with each customer interaction"
      ],
      icon: <Bot size={24} />
    },
    {
      title: "E-commerce Specialization",
      description: "Purpose-built for e-commerce businesses, not a generic solution.",
      advantages: [
        "40+ specialized workflows for e-commerce scenarios",
        "Deep  WooCommerce integrations",
        "Built-in handling for orders, returns, and inventory"
      ],
      icon: <Layers size={24} />
    },
    {
      title: "Seamless Integrations",
      description: "Connect with your entire e-commerce stack in real-time.",
      advantages: [
        "Bidirectional data sync with your product catalog",
        "Real-time inventory and order management",
        "Reduces manual work by up to 80%"
      ],
      icon: <Zap size={24} />
    },
    {
      title: "Same-Day Setup",
      description: "Start seeing value immediately, not weeks or months later.",
      advantages: [
        "15-minute setup wizard gets you running fast",
        "Pre-built templates for common support scenarios",
        "Measurable improvements within 24 hours"
      ],
      icon: <Clock size={24} />
    }
  ];

  const comparisonFeatures = [
    { feature: "Advanced AI Resolution", competitors: false, unburdend: true },
    { feature: "E-commerce Specialized", competitors: false, unburdend: true },
    { feature: "Real-time Integrations", competitors: false, unburdend: true },
    { feature: "Same-day Setup", competitors: false, unburdend: true },
    { feature: "No Coding Required", competitors: true, unburdend: true },
    { feature: "Custom Branding", competitors: true, unburdend: true },
    { feature: "Human Handoff", competitors: true, unburdend: true }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#F9FAFF]">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#008080]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#008080]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="turso-container">
        <AnimatedCard className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-3 py-1 bg-[#008080]/10 text-[#008080] rounded-full mb-4 font-medium text-sm">
            Why Choose Unburdend
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">How Unburdend <span className="text-[#008080]">Stands Out</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See why Unburdend is revolutionizing e-commerce customer support with AI that actually delivers on its promises.
          </p>
        </AnimatedCard>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {advantageItems.map((item, index) => (
            <AnimatedCard key={index} delay={index * 100} className="h-full">
              <AdvantageItem
                title={item.title}
                description={item.description}
                advantages={item.advantages}
                icon={item.icon}
              />
            </AnimatedCard>
          ))}
        </div>
        
        <AnimatedCard>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 sm:p-8 overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Unburdend vs. Competitors</h3>
            
            {/* Desktop Table - Hidden on Mobile */}
            <div className="hidden sm:block">
              <div className="grid grid-cols-3 pb-4 relative">
                <div className="col-span-1 font-bold text-gray-700 pl-4">Feature</div>
                <div className="col-span-1 text-center font-bold text-gray-700">Competitors</div>
                <div className="col-span-1 text-center font-bold text-[#008080]">Unburdend</div>
                
                {/* Divider Line with Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-100 via-[#008080]/30 to-gray-100"></div>
              </div>
              
              <div className="rounded-lg border border-gray-100 shadow-sm overflow-hidden">
                {comparisonFeatures.map((item, index) => (
                  <ComparisonRow 
                    key={index}
                    feature={item.feature}
                    competitors={item.competitors}
                    unburdend={item.unburdend}
                  />
                ))}
              </div>
            </div>
            
            {/* Mobile List View - Only shown on mobile */}
            <div className="sm:hidden">
              {comparisonFeatures.map((item, index) => (
                <MobileComparisonItem
                  key={index}
                  feature={item.feature}
                  competitors={item.competitors}
                  unburdend={item.unburdend}
                />
              ))}
            </div>
            
            <div className="mt-8 sm:mt-12 mb-2 sm:mb-4 text-center">
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="inline-flex items-center justify-center bg-[#008080]/10 rounded-full w-8 h-8">
                    <Check size={16} className="text-[#008080]" /> 
                  </div>
                  <span className="text-gray-600 text-sm">Unburdend offers <span className="font-bold">7 out of 7 key features</span>, while competitors typically only offer 3</span>
                </div>
                
                <Button 
                  variant="teal" 
                  size="lg" 
                  className="px-8 shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
                >
                  See Unburdend in Action
                </Button>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default StandsOut;
