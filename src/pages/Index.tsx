import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Calculator from '@/components/sections/Calculator';
import Features from '@/components/sections/Features';
import SocialProof from '@/components/sections/SocialProof';
// import Integration from '@/components/sections/Integration';
import Timeline from '@/components/sections/Timeline';
import StandsOut from '@/components/sections/StandsOut';
import Cta from '@/components/sections/Cta';
import Journey from '@/components/sections/Journey';

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
        <div id="home" className="bg-[rgb(0,181,176,0.05)]">
          <Hero />
        </div>
        <div id="benefits" className="bg-[rgb(0,181,176,0.05)]">
          <StandsOut />
        </div>
        <div id="calculator" className="relative bg-[rgb(0,181,176,0.05)]">
          <img 
            src="/lovable-uploads/ae56c5ec-62a5-460d-ba2b-5e56bbe0d297.png" 
            alt="Unburdend" 
            className="absolute top-0 left-0 h-16 opacity-5 -rotate-12"
          />
          <Calculator />
        </div>
        <div id="features" className="relative bg-[rgb(0,181,176,0.05)]">
          <img 
            src="/lovable-uploads/ae56c5ec-62a5-460d-ba2b-5e56bbe0d297.png" 
            alt="Unburdend" 
            className="absolute top-20 right-10 h-20 opacity-5 rotate-12"
          />
          <Features />
        </div>
        <div id="social-proof" className="relative">
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
        {/* Integration section removed 
        <div className="bg-[rgb(0,181,176,0.05)]">
          <Integration />
        </div>
        */}
        <div id="journey" className="relative">
          <img 
            src="/lovable-uploads/ae56c5ec-62a5-460d-ba2b-5e56bbe0d297.png" 
            alt="Unburdend" 
            className="absolute top-10 left-10 h-16 opacity-5 rotate-12"
          />
          <img 
            src="/lovable-uploads/1910a3f4-33d2-49b0-a33e-74089d879367.png" 
            alt="Unburdend Impact" 
            className="absolute bottom-10 right-10 h-20 opacity-5 -rotate-6"
          />
          <Journey />
        </div>
        <div id="timeline" className="relative">
          <img 
            src="/lovable-uploads/ae56c5ec-62a5-460d-ba2b-5e56bbe0d297.png" 
            alt="Unburdend" 
            className="absolute top-10 right-10 h-16 opacity-5 rotate-12"
          />
          <Timeline />
        </div>
        <div id="cta" className="bg-[rgb(0,181,176,0.05)]">
          <Cta />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
