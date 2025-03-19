
import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedCard from '@/components/ui/AnimatedCard';

const Cta = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-primary to-[#221F26] text-white relative overflow-hidden">
      <div className="absolute -top-24 right-0 w-64 h-64 rounded-full bg-[#0FA0CE] opacity-10 blur-2xl"></div>
      <div className="absolute -bottom-32 -left-16 w-64 h-64 rounded-full bg-[#8B5CF6] opacity-10 blur-2xl"></div>
      
      <div className="turso-container relative z-10">
        <AnimatedCard className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Transform Your E-commerce Support Today</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of WooCommerce businesses that have automated up to 95% of routine support queries while improving customer satisfaction.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="amber" size="lg" className="rounded-md px-5 py-2">
              Start Your Risk-Free Trial
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 rounded-md px-5 py-2"
            >
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
