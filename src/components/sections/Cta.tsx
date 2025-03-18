
import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedCard from '@/components/ui/AnimatedCard';

const Cta = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-brand-blue to-blue-600 text-white relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white opacity-5 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white opacity-5 animate-float" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-40 right-20 w-20 h-20 rounded-full bg-white opacity-5 animate-float" style={{animationDelay: "1.5s"}}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <AnimatedCard className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Automate and Save?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of successful e-commerce businesses that have transformed their customer support with our AI solution.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100 text-base font-medium py-6 px-8">
              Start Your Risk-Free Trial Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-base font-medium py-6 px-8">
              Schedule a Demo
            </Button>
          </div>
          
          <p className="mt-6 text-white/80 text-sm">
            No credit card required. 14-day free trial. Cancel anytime.
          </p>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default Cta;
