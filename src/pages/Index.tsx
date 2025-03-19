
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Calculator from '@/components/sections/Calculator';
import Features from '@/components/sections/Features';
import SocialProof from '@/components/sections/SocialProof';
import Integration from '@/components/sections/Integration';
import Timeline from '@/components/sections/Timeline';
import StandsOut from '@/components/sections/StandsOut';
import Pricing from '@/components/sections/Pricing';
import Cta from '@/components/sections/Cta';

const Index = () => {
  useEffect(() => {
    // Initialize animation on scroll logic
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.slide-up-animation');
      
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight * 0.9) {
          element.classList.add('active');
        }
      });
    };
    
    // Run once on mount
    animateOnScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <div className="relative">
          <img 
            src="/lovable-uploads/ae56c5ec-62a5-460d-ba2b-5e56bbe0d297.png" 
            alt="Unburdend" 
            className="absolute top-0 left-0 h-16 opacity-5 -rotate-12"
          />
          <Calculator />
        </div>
        <div className="relative">
          <img 
            src="/lovable-uploads/ae56c5ec-62a5-460d-ba2b-5e56bbe0d297.png" 
            alt="Unburdend" 
            className="absolute top-20 right-10 h-20 opacity-5 rotate-12"
          />
          <Features />
        </div>
        <div className="bg-gray-50 relative">
          <img 
            src="/lovable-uploads/ae56c5ec-62a5-460d-ba2b-5e56bbe0d297.png" 
            alt="Unburdend" 
            className="absolute bottom-10 left-10 h-16 opacity-5 -rotate-6"
          />
          <SocialProof />
        </div>
        <StandsOut />
        <div className="bg-gray-50">
          <Integration />
        </div>
        <div className="relative">
          <img 
            src="/lovable-uploads/ae56c5ec-62a5-460d-ba2b-5e56bbe0d297.png" 
            alt="Unburdend" 
            className="absolute top-10 right-10 h-16 opacity-5 rotate-12"
          />
          <Timeline />
        </div>
        <div className="relative">
          <img 
            src="/lovable-uploads/ae56c5ec-62a5-460d-ba2b-5e56bbe0d297.png" 
            alt="Unburdend" 
            className="absolute bottom-20 left-20 h-20 opacity-5 -rotate-12"
          />
          <Pricing />
        </div>
        <Cta />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
