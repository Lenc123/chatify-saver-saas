
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedCard from '@/components/ui/AnimatedCard';

// Mock company logos
const companyLogos = [
  { name: "StoreElite", color: "#008080" },
  { name: "FashionWay", color: "#008080" },
  { name: "TechGear", color: "#008080" },
  { name: "HomeDecor", color: "#008080" },
  { name: "BeautyHub", color: "#008080" },
  { name: "PetWorld", color: "#008080" },
];

// Testimonials
const testimonials = [
  {
    quote: "We reduced our support costs by 70% in just one month while improving customer satisfaction!",
    author: "Sarah Johnson",
    position: "CEO, StoreElite",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
  },
  {
    quote: "Support AI has been a game-changer for our WooCommerce store. Our team now focuses on growth instead of repetitive support tickets.",
    author: "Michael Chen",
    position: "Founder, TechGear",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    quote: "The AI handles 83% of our customer inquiries automatically, and customers can't tell the difference from human support!",
    author: "Emily Rodriguez",
    position: "COO, FashionWay",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
];

const SocialProof = () => {
  return (
    <section className="section-padding bg-[#FDE1D3] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-secondary/10 rounded-full"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand-secondary/10 rounded-full"></div>
      
      <div className="container-custom relative z-10">
        <AnimatedCard className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading WooCommerce Stores</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hundreds of e-commerce businesses are saving time and money with our AI support solution.
          </p>
        </AnimatedCard>

        {/* Company logos */}
        <AnimatedCard className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-20">
          {companyLogos.map((company, index) => (
            <div key={index} className="group">
              <div className="text-2xl font-bold flex items-center transition-transform duration-300 group-hover:scale-110">
                <span style={{ color: company.color }}>{company.name}</span>
              </div>
            </div>
          ))}
        </AnimatedCard>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard 
              key={index} 
              delay={index * 100}
              className="glass-card rounded-xl p-8 hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-md"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  {/* Quote icons */}
                  <svg className="w-10 h-10 text-brand-secondary/30" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.722 6.422c-5.02 2.435-8.722 7.378-8.722 13.578 0 5.657 3.434 9.306 7.1 9.306 3.332 0 5.917-2.43 5.917-6.092 0-3.281-2.381-5.844-5.482-5.844-0.613 0-1.168 0.125-1.807 0.391 0.833-2.803 3.994-6.092 7.48-7.574l-4.486-3.766zM24.139 6.422c-5.022 2.435-8.722 7.378-8.722 13.578 0 5.657 3.434 9.306 7.1 9.306 3.332 0 5.916-2.43 5.916-6.092 0-3.281-2.381-5.844-5.482-5.844-0.613 0-1.168 0.125-1.807 0.391 0.833-2.803 3.994-6.092 7.482-7.574l-4.486-3.766z" />
                  </svg>
                </div>
                
                <p className="text-gray-700 mb-6 flex-1 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-brand-secondary">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Results metrics with enhanced styling */}
        <div className="relative py-16 px-4 md:px-12 bg-gradient-to-br from-[#403E43] to-[#221F26] rounded-2xl overflow-hidden shadow-xl mb-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary opacity-10 rounded-full -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent opacity-10 rounded-full translate-y-1/3 -translate-x-1/4"></div>
          
          <AnimatedCard className="text-center mb-10 relative z-10">
            <span className="inline-block px-4 py-1 bg-brand-accent/20 text-brand-accent rounded-full mb-4 font-medium">Real Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Proven Impact for E-Commerce Businesses</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Our customers see measurable improvements across their operations
            </p>
          </AnimatedCard>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
            <AnimatedCard delay={50} className="bg-gradient-to-b from-white to-[#F1F0FB] rounded-xl p-8 shadow-lg text-center transform transition-all duration-300 hover:scale-105">
              <h3 className="text-5xl font-bold text-brand-primary mb-2">83%</h3>
              <p className="text-brand-secondary font-medium mb-2">Support inquiries automated</p>
              <p className="text-gray-600 text-sm">Let AI handle routine questions while you focus on growth</p>
            </AnimatedCard>
            
            <AnimatedCard delay={100} className="bg-gradient-to-b from-white to-[#F1F0FB] rounded-xl p-8 shadow-lg text-center transform transition-all duration-300 hover:scale-105">
              <h3 className="text-5xl font-bold text-brand-primary mb-2">$1,500+</h3>
              <p className="text-brand-secondary font-medium mb-2">Average monthly cost savings</p>
              <p className="text-gray-600 text-sm">Reduce support staff expenses while improving service</p>
            </AnimatedCard>
            
            <AnimatedCard delay={150} className="bg-gradient-to-b from-white to-[#F1F0FB] rounded-xl p-8 shadow-lg text-center transform transition-all duration-300 hover:scale-105">
              <h3 className="text-5xl font-bold text-brand-primary mb-2">40%</h3>
              <p className="text-brand-secondary font-medium mb-2">Increase in customer satisfaction</p>
              <p className="text-gray-600 text-sm">Faster responses lead to happier customers and more sales</p>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
