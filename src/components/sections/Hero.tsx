
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle, Sparkles, Zap, Shield } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-32 pb-24 bg-white overflow-hidden relative">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-brand-secondary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-brand-accent/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="turso-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="flex items-center mb-6">
              <img src="/lovable-uploads/ae56c5ec-62a5-460d-ba2b-5e56bbe0d297.png" alt="Unburdend" className="h-16 mr-3 animate-pulse-slow" />
              <div className="inline-block px-3 py-1 bg-brand-secondary/10 text-brand-secondary rounded-full font-medium text-sm">
                AI-Powered Support for E-commerce
              </div>
            </div>
            <h1 className="turso-heading mb-6 tracking-tight">
              Automate Customer Support.
              <span className="text-brand-secondary block mt-2">No more tickets, just happy customers.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              AI-powered customer support designed specifically for Shopify & WooCommerce stores. Reduce support costs by up to 70% while improving customer satisfaction.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center text-sm text-gray-700">
                <Sparkles size={18} className="text-brand-secondary mr-2" />
                <span>Advanced AI</span>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <Zap size={18} className="text-brand-secondary mr-2" />
                <span>Ultra-fast setup</span>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <Shield size={18} className="text-brand-secondary mr-2" />
                <span>Secure & reliable</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="turso-button text-base px-6 py-3 shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-primary/30 transition-all">
                Start Your Free Trial
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="bg-transparent border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-base flex items-center gap-2 hover:bg-gray-50">
                    <PlayCircle size={20} className="text-brand-secondary" /> Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px] p-0 bg-transparent border-none">
                  <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-white">
                      <p className="text-lg">Demo Video Placeholder</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg relative overflow-hidden h-[500px] w-full">
              {/* Decorative elements */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-brand-secondary/5 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-brand-accent/5 rounded-full"></div>
              
              <div className="absolute top-3 left-3 flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              
              <div className="flex flex-col h-full pt-8">
                <div className="flex-1 flex flex-col gap-4 overflow-hidden px-4">
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-[80%] animate-fade-in" style={{animationDelay: '0.3s'}}>
                      <p className="text-gray-800">Hi there! How can I help with your order today?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-brand-secondary rounded-2xl rounded-tr-none p-4 max-w-[80%] text-white animate-fade-in" style={{animationDelay: '0.9s'}}>
                      <p>I need to track my order #10234. When will it arrive?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-[80%] animate-fade-in" style={{animationDelay: '1.5s'}}>
                      <p className="text-gray-800">I found your order #10234. Your package is currently in transit and estimated to arrive on June 25th. Would you like me to send you the tracking link?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-brand-secondary rounded-2xl rounded-tr-none p-4 max-w-[80%] text-white animate-fade-in" style={{animationDelay: '2.1s'}}>
                      <p>Yes, please send me the tracking link.</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-[80%] animate-fade-in" style={{animationDelay: '2.7s'}}>
                      <p className="text-gray-800">Here's your tracking link: <a href="#" className="text-brand-secondary underline">https://track.shipping.com/10234</a></p>
                      <p className="text-gray-800 mt-2">Is there anything else I can help you with today?</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex gap-2 items-center px-4 pb-4">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                  />
                  <Button className="rounded-lg p-3 bg-brand-secondary text-white hover:bg-brand-secondary/90">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
