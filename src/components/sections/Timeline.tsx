import React from 'react';
import { CheckCircle } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';

interface TimelineItemProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ step, title, description, isLast = false }) => {
  return (
    <div className={`flex ${isLast ? '' : 'mb-12 sm:mb-0'}`}>
      {/* Left Side - Circle and Line */}
      <div className="hidden sm:flex flex-col items-center mr-8">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFB300]/20 text-[#FFB300] font-bold">
          {step}
        </div>
        {!isLast && <div className="w-0.5 bg-gray-200 h-full mt-4"></div>}
      </div>
      
      {/* Mobile Circle */}
      <div className="flex sm:hidden items-center justify-center w-10 h-10 rounded-full bg-[#FFB300]/20 text-[#FFB300] font-bold mr-4 flex-shrink-0">
        {step}
      </div>
      
      {/* Right Side - Content */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  const timelineItems = [
    {
      step: 1,
      title: "Connect Your Store",
      description: "Integrate with Shopify, WooCommerce, or other e-commerce platforms using our simple one-click setup. No developer needed.",
    },
    {
      step: 2,
      title: "Train Your AI",
      description: "Your AI assistant learns from your product catalog, policies, and existing support conversations to provide accurate and on-brand responses.",
    },
    {
      step: 3,
      title: "Set Up Channels",
      description: "Deploy your AI assistant across all customer touchpoints - email, chat, social media, and more - for consistent support everywhere.",
    },
    {
      step: 4,
      title: "Monitor & Optimize",
      description: "Track performance in real-time and use AI-powered insights to continuously improve your customer support experience.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-60 h-60 bg-[#FFB300]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-[#FFB300]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="turso-container">
        <AnimatedCard className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-block px-3 py-1 bg-[#FFB300]/10 text-[#FFB300] rounded-full mb-4 font-medium text-sm">
            Simple Setup Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">Get Started in <span className="text-[#FFB300]">Minutes</span>, Not Weeks</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined onboarding process gets your AI support assistant up and running quickly with minimal effort.
          </p>
        </AnimatedCard>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <AnimatedCard className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8 h-full">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready for <span className="text-[#FFB300]">Better Support?</span></h3>
              <p className="text-gray-600 mb-6">
                Follow our simple 4-step process to transform your customer support experience. Our platform makes it easy to get started with AI-powered support.
              </p>
              
              <div className="space-y-4">
                {[
                  "No coding required",
                  "Same-day setup possible",
                  "Pre-built integrations",
                  "Free onboarding assistance"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FFB300] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-gray-50 rounded-lg p-4 border border-gray-100">
                <div className="text-gray-500 text-sm mb-1">Average Setup Time</div>
                <div className="text-2xl font-bold text-[#FFB300]">Just 24 Minutes</div>
                <div className="text-gray-500 text-sm mt-1">Compared to weeks with other solutions</div>
              </div>
            </AnimatedCard>
          </div>
          
          <div className="md:col-span-7">
            <AnimatedCard delay={100} className="bg-white sm:pl-8 pt-6 h-full">
              <div className="sm:grid sm:grid-cols-1 space-y-8 sm:space-y-0">
                {timelineItems.map((item, index) => (
                  <TimelineItem
                    key={index}
                    step={item.step}
                    title={item.title}
                    description={item.description}
                    isLast={index === timelineItems.length - 1}
                  />
                ))}
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
