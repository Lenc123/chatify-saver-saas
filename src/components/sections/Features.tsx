
import React from 'react';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { 
  MessageSquare, 
  TruckIcon, 
  RefreshCcw, 
  BarChart4, 
  LineChart
} from 'lucide-react';

const features = [
  {
    icon: <MessageSquare size={48} className="text-brand-blue" />,
    title: "Instant AI Responses",
    description: "Automatically handle common e-commerce questions with lightning-fast, accurate replies that delight customers.",
    delay: 0
  },
  {
    icon: <TruckIcon size={48} className="text-brand-blue" />,
    title: "Order & Tracking Automation",
    description: "Provide customers with real-time order status updates and tracking information without human intervention.",
    delay: 100
  },
  {
    icon: <RefreshCcw size={48} className="text-brand-blue" />,
    title: "Automated Returns & Refunds",
    description: "Seamlessly process returns, exchanges, and refunds according to your store policies, reducing manual workload.",
    delay: 200
  },
  {
    icon: <BarChart4 size={48} className="text-brand-blue" />,
    title: "Sentiment Analysis & Smart Escalations",
    description: "AI recognizes customer emotions and urgency, escalating to human agents only when truly necessary.",
    delay: 300
  },
  {
    icon: <LineChart size={48} className="text-brand-blue" />,
    title: "Live Performance Analytics",
    description: "Real-time dashboard showing AI effectiveness, cost savings, and customer satisfaction metrics in one place.",
    delay: 400
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-white relative">
      {/* Background design elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-brand-lightBlue/20 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-brand-lightBlue/20 to-transparent rounded-tr-full"></div>
      
      <div className="container-custom relative z-10">
        <AnimatedCard className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-brand-lightBlue text-brand-blue rounded-full mb-4 font-medium text-sm">
            Key Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful AI Features for E-Commerce Support</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform is designed specifically for e-commerce businesses, handling customer inquiries effortlessly.
          </p>
        </AnimatedCard>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard key={index} delay={feature.delay} className="glass-card rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="p-4 bg-brand-lightBlue/50 rounded-lg inline-block mb-6 group-hover:bg-brand-blue/10 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
