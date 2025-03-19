
import React from 'react';
import { Zap, Bot, Layers, Clock } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';

interface ComparisonItemProps {
  title: string;
  description: string;
  competitors: string;
  unburdend: string;
  icon: React.ReactNode;
}

const ComparisonItem: React.FC<ComparisonItemProps> = ({ 
  title, 
  description,
  competitors,
  unburdend,
  icon
}) => {
  return (
    <div className="p-6 rounded-2xl transition-all duration-300 hover:scale-105 bg-[#1A1F2C] backdrop-blur-sm shadow-xl">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-[#8B5CF6] rounded-xl mr-4 text-white">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      
      <p className="text-white/80 mb-6 text-sm">{description}</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-[#403E43] p-4 rounded-xl">
          <h4 className="text-sm font-medium mb-2 text-[#C8C8C9] uppercase tracking-wider">Competitors</h4>
          <p className="text-white text-sm">{competitors}</p>
        </div>
        
        <div className="bg-[#6E59A5] p-4 rounded-xl relative overflow-hidden">
          <div className="absolute -top-3 -right-3 bg-white text-[#FFB300] rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h4 className="text-sm font-medium mb-2 text-white uppercase tracking-wider">Unburdend</h4>
          <p className="text-white text-sm">{unburdend}</p>
        </div>
      </div>
    </div>
  );
};

const StandsOut = () => {
  const comparisonItems = [
    {
      title: "AI-Powered Automation",
      description: "How effectively the platform uses AI to automate customer support tasks.",
      competitors: "Basic automation with limited AI capabilities and frequent human intervention needed.",
      unburdend: "Advanced AI that resolves up to 95% of routine queries with no human intervention.",
      icon: <Bot size={24} />
    },
    {
      title: "E-commerce Specialization",
      description: "The degree to which the platform is tailored for e-commerce businesses.",
      competitors: "Generic customer support platforms adapted for e-commerce use.",
      unburdend: "Built specifically for Shopify and WooCommerce with tailored workflows and integrations.",
      icon: <Layers size={24} />
    },
    {
      title: "Integration Depth",
      description: "How deeply the platform integrates with your existing e-commerce stack.",
      competitors: "Surface-level integrations requiring manual data synchronization.",
      unburdend: "Deep, real-time integrations with your product catalog, inventory, and order management.",
      icon: <Zap size={24} />
    },
    {
      title: "Setup Time",
      description: "How quickly you can implement and see value from the platform.",
      competitors: "Weeks of configuration and training before seeing results.",
      unburdend: "Same-day implementation with immediate impact on support efficiency.",
      icon: <Clock size={24} />
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#1A1F2C]">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#9b87f5]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#FFB300]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-12">
        {/* Decorative elements */}
        <div className="col-span-1 relative">
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#8E9196]/20 to-transparent absolute right-0"></div>
        </div>
        
        <div className="col-span-10">
          <AnimatedCard className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-[#8B5CF6]/10 text-white rounded-full mb-4 font-medium text-sm">
              Why Choose Unburdend
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">How Unburdend <span className="text-[#FFB300]">Stands Out</span></h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              See why Unburdend is the preferred choice for e-commerce businesses looking to revolutionize their customer support.
            </p>
          </AnimatedCard>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparisonItems.map((item, index) => (
              <AnimatedCard key={index} delay={index * 100} className="h-full">
                <ComparisonItem
                  title={item.title}
                  description={item.description}
                  competitors={item.competitors}
                  unburdend={item.unburdend}
                  icon={item.icon}
                />
              </AnimatedCard>
            ))}
          </div>
        </div>
        
        <div className="col-span-1 relative">
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#8E9196]/20 to-transparent absolute left-0"></div>
        </div>
      </div>
      
      {/* Floating logo watermark */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <img 
          src="/lovable-uploads/ae56c5ec-62a5-460d-ba2b-5e56bbe0d297.png" 
          alt="Unburdend" 
          className="h-16 opacity-10"
        />
      </div>
    </section>
  );
};

export default StandsOut;
