
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedCard from '@/components/ui/AnimatedCard';

interface TimelineStepProps {
  title: string;
  items: string[];
  isActive: boolean;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ title, items, isActive }) => {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-lg ${isActive ? 'border-t-4 border-brand-blue' : 'opacity-90'}`}>
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="bg-brand-lightBlue p-1 rounded-full text-brand-blue mt-0.5">
              <Check size={16} />
            </span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const timelineSteps = [
    {
      label: "Today",
      title: "Get started.",
      items: [
        "Connect your store in five minutes",
        "Upload your support policy in two minutes",
        "Deploy AI chatbot in one minute"
      ]
    },
    {
      label: "Day 5",
      title: "Get comfortable.",
      items: [
        "Connect to CRM, email, and 200+ apps",
        "Set up AI knowledge base and controls",
        "Generate custom AI responses to FAQs"
      ]
    },
    {
      label: "Day 30",
      title: "Ask why you didn't switch years ago.",
      items: [
        "100% of customer inquiries handled automatically",
        "Support efficiency 8.5x more efficient",
        "Customer response time 75% faster"
      ]
    }
  ];

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-blue/10 rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-blue/10 rounded-full"></div>
      
      <div className="container-custom relative z-10">
        <AnimatedCard className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Here's what you can achieve with SupportAI in just 30 days</h2>
          <Button variant="outline" className="rounded-full">
            Get started for free 
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </Button>
        </AnimatedCard>

        {/* Timeline Steps Navigation */}
        <div className="flex justify-between mb-4">
          {timelineSteps.map((step, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-md ${activeStep === index ? 'bg-white shadow-md font-medium' : 'bg-transparent'}`}
              onClick={() => setActiveStep(index)}
            >
              {step.label}
            </button>
          ))}
        </div>

        {/* Timeline Progress Bar */}
        <div className="relative h-2 bg-gray-200 rounded-full mb-12">
          <div className="absolute left-0 top-0 bottom-0 bg-brand-blue rounded-full transition-all duration-300" 
               style={{ width: `${(activeStep / (timelineSteps.length - 1)) * 100}%` }}>
          </div>
          {timelineSteps.map((_, index) => (
            <div 
              key={index}
              className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full transition-all duration-300 ${
                index <= activeStep ? 'bg-brand-blue' : 'bg-gray-300'
              }`}
              style={{ left: `${(index / (timelineSteps.length - 1)) * 100}%` }}
            ></div>
          ))}
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {timelineSteps.map((step, index) => (
            <AnimatedCard key={index} delay={index * 100}>
              <TimelineStep 
                title={step.title} 
                items={step.items} 
                isActive={index === activeStep} 
              />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
