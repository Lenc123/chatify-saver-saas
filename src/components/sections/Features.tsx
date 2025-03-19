
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
    icon: <MessageSquare size={44} className="text-brand-secondary" />,
    title: "Instant AI Responses",
    description: "Automatically handle common e-commerce questions with lightning-fast, accurate replies that delight customers.",
    delay: 0
  },
  {
    icon: <TruckIcon size={44} className="text-brand-secondary" />,
    title: "Order & Tracking Automation",
    description: "Provide customers with real-time order status updates and tracking information without human intervention.",
    delay: 100
  },
  {
    icon: <RefreshCcw size={44} className="text-brand-secondary" />,
    title: "Automated Returns & Refunds",
    description: "Seamlessly process returns, exchanges, and refunds according to your store policies, reducing manual workload.",
    delay: 200
  },
  {
    icon: <BarChart4 size={44} className="text-brand-secondary" />,
    title: "Sentiment Analysis & Smart Escalations",
    description: "AI recognizes customer emotions and urgency, escalating to human agents only when truly necessary.",
    delay: 300
  },
  {
    icon: <LineChart size={44} className="text-brand-secondary" />,
    title: "Live Performance Analytics",
    description: "Real-time dashboard showing AI effectiveness, cost savings, and customer satisfaction metrics in one place.",
    delay: 400
  }
];

const Features = () => {
  return (
    <section id="features" className="turso-section bg-white">
      <div className="turso-container">
        <AnimatedCard className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-brand-secondary/10 text-brand-secondary rounded-full mb-4 font-medium text-sm">
            Key Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful AI Features for E-Commerce Support</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform is designed specifically for e-commerce businesses, handling customer inquiries effortlessly.
          </p>
        </AnimatedCard>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard key={index} delay={feature.delay} className="turso-card p-8 hover:translate-y-[-5px] group">
              <div className="p-3 bg-brand-secondary/10 rounded-lg inline-block mb-6 group-hover:bg-brand-secondary/20 transition-colors duration-300">
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
