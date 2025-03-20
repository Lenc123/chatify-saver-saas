import React from 'react';
import { Bot, Zap, Globe, BarChart } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <AnimatedCard delay={delay} className="h-full">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-full flex flex-col">
        <div className="w-12 h-12 rounded-lg bg-[#008080]/10 flex items-center justify-center mb-5">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </AnimatedCard>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Bot className="w-6 h-6 text-[#008080]" />,
      title: "AI-Powered Support",
      description: "Our advanced AI understands context, history, and nuance to provide human-like support for your customers.",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#008080]" />,
      title: "Lightning-Fast Setup",
      description: "Get up and running in minutes, not weeks. No coding required—just connect your store and customize your bot.",
    },
    {
      icon: <Globe className="w-6 h-6 text-[#008080]" />,
      title: "Multi-Channel Support",
      description: "Provide consistent support across email, chat, social media, and more—all managed from a single platform.",
    },
    {
      icon: <BarChart className="w-6 h-6 text-[#008080]" />,
      title: "Advanced Analytics",
      description: "Gain insights into customer issues, resolution rates, and satisfaction scores to continuously improve.",
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-60 h-60 bg-[#008080]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-[#008080]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="turso-container">
        <AnimatedCard className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-3 py-1 bg-[#008080]/10 text-[#008080] rounded-full mb-4 font-medium text-sm">
            Key Features
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">Everything You Need for <span className="text-[#008080]">Exceptional</span> Support</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with intuitive design to deliver a complete customer support solution for e-commerce businesses.
          </p>
        </AnimatedCard>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
