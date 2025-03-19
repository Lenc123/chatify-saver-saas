
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Calculator />
        <Features />
        <SocialProof />
        <StandsOut />
        <Integration />
        <Timeline />
        <Cta />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
