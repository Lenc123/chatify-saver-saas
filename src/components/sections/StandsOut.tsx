
import React from 'react';
import { CheckCircle } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';

interface ComparisonItemProps {
  title: string;
  description: string;
  competitors: string;
  unburdend: string;
}

const ComparisonItem: React.FC<ComparisonItemProps> = ({ 
  title, 
  description,
  competitors,
  unburdend
}) => {
  return (
    <div className="border-t border-gray-200 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-2">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        
        <div className="lg:col-span-1">
          <div className="p-6 h-full bg-gray-100 rounded-xl flex flex-col justify-center items-center text-center">
            <h4 className="text-lg font-medium mb-3">Competitors</h4>
            <p className="text-gray-600">{competitors}</p>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="p-6 h-full bg-brand-secondary/10 border border-brand-secondary/20 rounded-xl flex flex-col justify-center items-center text-center relative">
            <div className="absolute -top-3 -right-3 bg-brand-secondary text-white rounded-full p-1">
              <CheckCircle size={18} />
            </div>
            <h4 className="text-lg font-medium mb-3 text-brand-secondary">Unburdend</h4>
            <p className="text-gray-600">{unburdend}</p>
          </div>
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
      unburdend: "Advanced AI that resolves up to 95% of routine queries with no human intervention."
    },
    {
      title: "E-commerce Specialization",
      description: "The degree to which the platform is tailored for e-commerce businesses.",
      competitors: "Generic customer support platforms adapted for e-commerce use.",
      unburdend: "Built specifically for Shopify and WooCommerce with tailored workflows and integrations."
    },
    {
      title: "Integration Depth",
      description: "How deeply the platform integrates with your existing e-commerce stack.",
      competitors: "Surface-level integrations requiring manual data synchronization.",
      unburdend: "Deep, real-time integrations with your product catalog, inventory, and order management."
    },
    {
      title: "Setup Time",
      description: "How quickly you can implement and see value from the platform.",
      competitors: "Weeks of configuration and training before seeing results.",
      unburdend: "Same-day implementation with immediate impact on support efficiency."
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-64 bg-brand-secondary/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-64 bg-brand-accent/5 rounded-tr-full"></div>
      
      <div className="container-custom relative z-10">
        <AnimatedCard className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary font-medium text-sm mb-4">
            Why Choose Unburdend
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How Unburdend Stands Out</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See why Unburdend is the preferred choice for e-commerce businesses looking to revolutionize their customer support.
          </p>
        </AnimatedCard>
        
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
          {comparisonItems.map((item, index) => (
            <ComparisonItem
              key={index}
              title={item.title}
              description={item.description}
              competitors={item.competitors}
              unburdend={item.unburdend}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandsOut;
