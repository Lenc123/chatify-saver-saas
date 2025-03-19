
import React from 'react';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Zap, Database, BarChart3, MessageSquare } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Connect your store",
    description: "Seamlessly connect your WooCommerce store with just a few clicks.",
    delay: 0
  },
  {
    number: "02",
    title: "Customize your policies",
    description: "Configure your support policies, FAQs, and AI response tone to match your brand.",
    delay: 150
  },
  {
    number: "03",
    title: "Launch & start saving",
    description: "Activate your AI support assistant and watch the cost savings roll in immediately.",
    delay: 300
  }
];

const Integration = () => {
  return (
    <section id="integrations" className="turso-section py-24 overflow-hidden relative bg-[#F6F7FF]">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-brand-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl"></div>
      <img 
        src="/lovable-uploads/ae56c5ec-62a5-460d-ba2b-5e56bbe0d297.png" 
        alt="Unburdend" 
        className="absolute top-12 right-12 h-16 opacity-10 rotate-12"
      />

      <div className="turso-container">
        <AnimatedCard className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-brand-secondary/10 text-brand-secondary rounded-full mb-4 font-medium text-sm">
            Seamless Integration
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Integrate With Your Store in Minutes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            No coding required. Start automating your customer support with a simple integration process.
          </p>
        </AnimatedCard>

        {/* Integration steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <AnimatedCard 
              key={index} 
              delay={step.delay}
              className="relative"
            >
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 h-full hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] relative overflow-hidden">
                {/* Decorative background shape */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-brand-secondary/5 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl font-bold text-brand-secondary/10 mb-6">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.0607 13.0607C39.6464 12.4749 39.6464 11.5251 39.0607 10.9393L29.5147 1.3934C28.9289 0.807612 27.9792 0.807612 27.3934 1.3934C26.8076 1.97918 26.8076 2.92893 27.3934 3.51472L35.8787 12L27.3934 20.4853C26.8076 21.0711 26.8076 22.0208 27.3934 22.6066C27.9792 23.1924 28.9289 23.1924 29.5147 22.6066L39.0607 13.0607ZM0 13.5H38V10.5H0V13.5Z" fill="#00B5B0" fillOpacity="0.3"/>
                  </svg>
                </div>
              )}
            </AnimatedCard>
          ))}
        </div>

        {/* Platform integrations - Completely redesigned section */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-brand-primary to-brand-primary/90 p-1 shadow-xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMwMEI1QjAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-30"></div>
          
          <div className="relative rounded-xl overflow-hidden bg-brand-primary p-8 md:p-12">
            {/* Logo overlay */}
            <img 
              src="/lovable-uploads/ae56c5ec-62a5-460d-ba2b-5e56bbe0d297.png" 
              alt="Unburdend" 
              className="absolute opacity-5 w-1/2 right-[-10%] bottom-[-10%]"
            />
            
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Left column with title and CTA */}
              <div className="lg:w-1/3">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Ready to integrate with your WooCommerce store</h3>
                <p className="text-white/80 mb-8">Our AI assistant works seamlessly with WooCommerce, with more integrations coming soon.</p>
                <Button variant="amber" size="lg" className="w-full bg-white text-brand-primary hover:bg-white/90 rounded-lg text-base py-2 font-medium shadow-lg">
                  Start your free trial today
                </Button>
              </div>
              
              {/* Right column with integration cards */}
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-1 gap-5 w-full">
                {/* WooCommerce Card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden relative group">
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/5 rounded-full transition-all duration-500 group-hover:scale-150"></div>
                  
                  <div className="flex items-center mb-4 relative z-10">
                    <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7F54B3]">
                        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                        <path d="M12 14v2" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-white">WooCommerce</h4>
                  </div>
                  
                  <ul className="space-y-2 relative z-10">
                    <li className="flex items-center text-sm text-white/80">
                      <CheckCircle2 size={16} className="text-brand-secondary mr-2 flex-shrink-0" />
                      <span>WordPress integration</span>
                    </li>
                    <li className="flex items-center text-sm text-white/80">
                      <CheckCircle2 size={16} className="text-brand-secondary mr-2 flex-shrink-0" />
                      <span>Custom field support</span>
                    </li>
                    <li className="flex items-center text-sm text-white/80">
                      <CheckCircle2 size={16} className="text-brand-secondary mr-2 flex-shrink-0" />
                      <span>Multi-vendor ready</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Features tiles section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/10 relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/5 rounded-full transition-all duration-500 group-hover:scale-150"></div>
                <Zap size={24} className="text-brand-accent mb-3 relative z-10" />
                <h4 className="text-base font-semibold mb-1 text-white relative z-10">Ultra-fast setup</h4>
                <p className="text-white/70 text-xs relative z-10">Connect in under 2 minutes</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/10 relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/5 rounded-full transition-all duration-500 group-hover:scale-150"></div>
                <Database size={24} className="text-brand-accent mb-3 relative z-10" />
                <h4 className="text-base font-semibold mb-1 text-white relative z-10">Secure data</h4>
                <p className="text-white/70 text-xs relative z-10">End-to-end encryption</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/10 relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/5 rounded-full transition-all duration-500 group-hover:scale-150"></div>
                <BarChart3 size={24} className="text-brand-accent mb-3 relative z-10" />
                <h4 className="text-base font-semibold mb-1 text-white relative z-10">Rich analytics</h4>
                <p className="text-white/70 text-xs relative z-10">Track performance</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/10 relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/5 rounded-full transition-all duration-500 group-hover:scale-150"></div>
                <MessageSquare size={24} className="text-brand-accent mb-3 relative z-10" />
                <h4 className="text-base font-semibold mb-1 text-white relative z-10">Human handoff</h4>
                <p className="text-white/70 text-xs relative z-10">For complex issues</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
