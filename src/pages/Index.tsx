
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
    
    // Override all button styling to use the accent color
    document.querySelectorAll('.turso-button, .btn-primary').forEach(button => {
      button.classList.remove('bg-brand-primary');
      button.classList.add('bg-brand-accent');
      button.classList.remove('hover:bg-brand-primary/90');
      button.classList.add('hover:bg-brand-accent/90');
    });
    
    // Clean up
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-[#F9FAFF]">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <StandsOut />
        <div className="relative bg-[#FEF7CD]/30">
          <img 
            src="/lovable-uploads/ae56c5ec-62a5-460d-ba2b-5e56bbe0d297.png" 
            alt="Unburdend" 
            className="absolute top-0 left-0 h-16 opacity-5 -rotate-12"
          />
          <Calculator />
        </div>
        <div className="relative bg-[#D3E4FD]/30">
          <img 
            src="/lovable-uploads/ae56c5ec-62a5-460d-ba2b-5e56bbe0d297.png" 
            alt="Unburdend" 
            className="absolute top-20 right-10 h-20 opacity-5 rotate-12"
          />
          <Features />
        </div>
        <div className="relative">
          <img 
            src="/lovable-uploads/1910a3f4-33d2-49b0-a33e-74089d879367.png" 
            alt="Unburdend Impact" 
            className="absolute top-10 left-10 h-20 opacity-5 rotate-12"
          />
          <img 
            src="/lovable-uploads/ae56c5ec-62a5-460d-ba2b-5e56bbe0d297.png" 
            alt="Unburdend" 
            className="absolute bottom-10 left-10 h-16 opacity-5 -rotate-6"
          />
          <img
            src="/lovable-uploads/39630935-6e6c-40ca-9631-5776144614d7.png"
            alt="Social Proof"
            className="absolute top-1/2 right-0 h-72 opacity-5 transform translate-x-1/4 -translate-y-1/4"
          />
          <SocialProof />
        </div>
        <div>
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
        <div className="relative bg-[#E5DEFF]/30">
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
