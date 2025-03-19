
import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedCard from '@/components/ui/AnimatedCard';

const Cta = () => {
  return (
    <section className="py-24 bg-brand-primary text-white relative overflow-hidden">
      <div className="absolute -top-24 right-0 w-64 h-64 rounded-full bg-brand-secondary opacity-10"></div>
      <div className="absolute -bottom-32 -left-16 w-64 h-64 rounded-full bg-brand-accent opacity-10"></div>
      
      <div className="turso-container relative z-10">
        <AnimatedCard className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Transform Your E-commerce Support Today</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of Shopify and WooCommerce businesses that have automated up to 95% of routine support queries while improving customer satisfaction.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-brand-accent text-white hover:bg-brand-accent/90 text-base font-medium py-6 px-8 rounded-lg">
              Start Your Risk-Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-base font-medium py-6 px-8 rounded-lg">
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
