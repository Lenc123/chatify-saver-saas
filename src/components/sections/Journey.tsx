import React, { useState } from 'react';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { CheckCircle2 } from 'lucide-react';

interface JourneyItemProps {
  title: string;
  items: string[];
  isActive: boolean;
}

const JourneyItem: React.FC<JourneyItemProps> = ({ title, items, isActive }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border ${isActive ? 'border-[#008080]' : 'border-gray-100'} p-6 sm:p-7 h-full transition-all duration-300 ${isActive ? 'transform scale-105 shadow-md' : ''}`}>
      <h3 className={`text-xl font-bold ${isActive ? 'text-[#008080]' : 'text-gray-800'} mb-5`}>{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className={`${isActive ? 'text-[#008080]' : 'text-[#36C5B9]'} mr-2 flex-shrink-0 mt-0.5`}>
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <p className="text-gray-600 text-sm sm:text-base">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Journey = () => {
  const [activeDay, setActiveDay] = useState<number>(0); // 0: Today, 1: Day 5, 2: Day 30

  const journeyItems = [
    {
      title: "Set up your AI support in minutes",
      items: [
        "Connect your WooCommerce store with our one-click integration",
        "Import your support policies and product information",
        "Deploy your AI chatbot on your storefront instantly"
      ]
    },
    {
      title: "See immediate impact on your business",
      items: [
        "Connect with your existing tools via our 200+ integrations",
        "Customize AI responses to match your brand voice",
        "Monitor real-time analytics on support resolution rates"
      ]
    },
    {
      title: "Transform your entire customer experience",
      items: [
        "Automate up to 95% of routine customer inquiries",
        "Reduce support costs by up to 70%",
        "Free up your team to focus on growth, not support tickets"
      ]
    }
  ];

  const handleDayClick = (day: number) => {
    setActiveDay(day);
  };

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="turso-container max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedCard className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
          <div className="inline-block px-3 py-1 bg-[#36C5B9]/10 text-[#36C5B9] rounded-full mb-4 font-medium text-sm">
            Success Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            See Your <span className="text-[#008080]">30-Day Journey</span> to AI-Powered Support Success
          </h2>
        </AnimatedCard>

        {/* Timeline selection */}
        <div className="flex justify-center items-center mb-10 sm:mb-14">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button
              onClick={() => handleDayClick(0)}
              className={`${activeDay === 0 ? 'bg-[#008080]/10 text-[#008080]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} font-medium px-4 sm:px-6 py-1.5 sm:py-2 rounded-2xl text-sm sm:text-base transition-colors duration-300`}
            >
              Today
            </button>
            <button
              onClick={() => handleDayClick(1)}
              className={`${activeDay === 1 ? 'bg-[#008080]/10 text-[#008080]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} font-medium px-4 sm:px-6 py-1.5 sm:py-2 rounded-2xl text-sm sm:text-base transition-colors duration-300`}
            >
              Day 5
            </button>
            <button
              onClick={() => handleDayClick(2)}
              className={`${activeDay === 2 ? 'bg-[#008080]/10 text-[#008080]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} font-medium px-4 sm:px-6 py-1.5 sm:py-2 rounded-2xl text-sm sm:text-base transition-colors duration-300`}
            >
              Day 30
            </button>
          </div>
        </div>
        
        {/* Timeline visualization */}
        <div className="relative mb-6 sm:mb-8 max-w-xl mx-auto">
          <div className="relative h-2 bg-gray-200 rounded-full">
            <div 
              className="absolute top-0 left-0 h-2 bg-[#008080] rounded-full transition-all duration-500"
              style={{ width: `${(activeDay / 2) * 100}%` }}
            ></div>
            
            {/* Timeline points */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-4 h-4 rounded-full border-2 border-white ${activeDay === 0 ? 'bg-[#008080]' : 'bg-gray-300'} hover:bg-[#008080] transition-colors duration-300 cursor-pointer" onClick={() => handleDayClick(0)}></div>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white ${activeDay === 1 ? 'bg-[#008080]' : 'bg-gray-300'} hover:bg-[#008080] transition-colors duration-300 cursor-pointer" onClick={() => handleDayClick(1)}></div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-4 h-4 rounded-full border-2 border-white ${activeDay === 2 ? 'bg-[#008080]' : 'bg-gray-300'} hover:bg-[#008080] transition-colors duration-300 cursor-pointer" onClick={() => handleDayClick(2)}></div>
          </div>
        </div>
        
        {/* Journey content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {journeyItems.map((item, index) => (
            <JourneyItem 
              key={index}
              title={item.title}
              items={item.items}
              isActive={index === activeDay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey; 