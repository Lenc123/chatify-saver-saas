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
    <div className={`bg-white rounded-2xl shadow-sm border ${isActive ? 'border-[#FFB300]' : 'border-gray-100'} p-6 sm:p-7 h-full transition-all duration-300 ${isActive ? 'transform scale-105 shadow-md' : ''}`}>
      <h3 className={`text-xl font-bold ${isActive ? 'text-[#FFB300]' : 'text-gray-800'} mb-5`}>{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className={`${isActive ? 'text-[#FFB300]' : 'text-[#36C5B9]'} mr-2 flex-shrink-0 mt-0.5`}>
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
            See Your <span className="text-[#FFB300]">30-Day Journey</span> to AI-Powered Support Success
          </h2>
        </AnimatedCard>

        {/* Timeline visualization */}
        <div className="relative mx-auto max-w-4xl mb-12 md:mb-16">
          <div className="bg-white rounded-2xl shadow-sm px-4 py-3 flex justify-between items-center mb-3">
            <button 
              onClick={() => handleDayClick(0)}
              className={`${activeDay === 0 ? 'bg-[#FFB300]/10 text-[#FFB300]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} font-medium px-4 sm:px-6 py-1.5 sm:py-2 rounded-2xl text-sm sm:text-base transition-colors duration-300`}
            >
              Today
            </button>
            <button 
              onClick={() => handleDayClick(1)}
              className={`${activeDay === 1 ? 'bg-[#FFB300]/10 text-[#FFB300]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} font-medium px-4 sm:px-6 py-1.5 sm:py-2 rounded-2xl text-sm sm:text-base transition-colors duration-300`}
            >
              Day 5
            </button>
            <button 
              onClick={() => handleDayClick(2)}
              className={`${activeDay === 2 ? 'bg-[#FFB300]/10 text-[#FFB300]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} font-medium px-4 sm:px-6 py-1.5 sm:py-2 rounded-2xl text-sm sm:text-base transition-colors duration-300`}
            >
              Day 30
            </button>
          </div>
          <div className="h-2 w-full bg-[#f1f1f1] rounded-full relative mt-5 mb-3">
            {/* Timeline progress */}
            <div 
              className="absolute top-0 left-0 h-2 bg-[#FFB300] rounded-full transition-all duration-500"
              style={{ 
                width: activeDay === 0 ? '10%' : activeDay === 1 ? '50%' : '100%'
              }}
            ></div>
            
            {/* Clickable points */}
            <button 
              onClick={() => handleDayClick(0)}
              className={`absolute top-1/2 left-[10%] transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white ${activeDay === 0 ? 'bg-[#FFB300]' : 'bg-gray-300'} hover:bg-[#FFB300] transition-colors duration-300 cursor-pointer`}
              title="Today"
            ></button>
            <button 
              onClick={() => handleDayClick(1)}
              className={`absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white ${activeDay === 1 ? 'bg-[#FFB300]' : 'bg-gray-300'} hover:bg-[#FFB300] transition-colors duration-300 cursor-pointer`}
              title="Day 5"
            ></button>
            <button 
              onClick={() => handleDayClick(2)}
              className={`absolute top-1/2 left-[100%] transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white ${activeDay === 2 ? 'bg-[#FFB300]' : 'bg-gray-300'} hover:bg-[#FFB300] transition-colors duration-300 cursor-pointer`}
              title="Day 30"
            ></button>
          </div>
        </div>

        {/* Journey items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {journeyItems.map((item, index) => (
            <AnimatedCard key={index} delay={index * 100}>
              <JourneyItem 
                title={item.title} 
                items={item.items} 
                isActive={
                  (activeDay === 0 && index === 0) || 
                  (activeDay === 1 && index === 1) || 
                  (activeDay === 2 && index === 2)
                }
              />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey; 