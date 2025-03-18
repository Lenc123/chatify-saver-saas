
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
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
    <section className="min-h-screen pt-24 pb-20 flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-lightBlue rounded-full filter blur-3xl opacity-30 animate-spin-slow"></div>
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-brand-blue rounded-full filter blur-3xl opacity-20 animate-spin-slow"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-block px-3 py-1 bg-brand-lightBlue text-brand-blue rounded-full mb-6 font-medium text-sm animate-pulse-slow">
              AI-Powered Support for E-commerce
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Automate Customer Support. 
              <span className="text-brand-blue"> Instantly Save Time & Costs</span> with AI
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              AI-powered customer support designed specifically for Shopify & WooCommerce SMBs. Available 24/7, no humans needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-base">Start Your Free Trial</Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="btn-secondary text-base flex items-center gap-2">
                    <PlayCircle size={20} /> Watch AI in Action
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
            <div className="glass-card rounded-2xl p-6 shadow-xl relative overflow-hidden h-[500px] w-full">
              <div className="absolute top-3 left-3 flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              
              <div className="flex flex-col h-full pt-8">
                <div className="flex-1 flex flex-col gap-4 overflow-hidden">
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-[80%] animate-fade-in" style={{animationDelay: '0.3s'}}>
                      <p className="text-gray-800">Hi there! How can I help with your order today?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-brand-blue rounded-2xl rounded-tr-none p-4 max-w-[80%] text-white animate-fade-in" style={{animationDelay: '0.9s'}}>
                      <p>I need to track my order #10234. When will it arrive?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-[80%] animate-fade-in" style={{animationDelay: '1.5s'}}>
                      <p className="text-gray-800">I found your order #10234. Your package is currently in transit and estimated to arrive on June 25th. Would you like me to send you the tracking link?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-brand-blue rounded-2xl rounded-tr-none p-4 max-w-[80%] text-white animate-fade-in" style={{animationDelay: '2.1s'}}>
                      <p>Yes, please send me the tracking link.</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-[80%] animate-fade-in" style={{animationDelay: '2.7s'}}>
                      <p className="text-gray-800">Here's your tracking link: <a href="#" className="text-brand-blue underline">https://track.shipping.com/10234</a></p>
                      <p className="text-gray-800 mt-2">Is there anything else I can help you with today?</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                  <Button className="rounded-full p-3 bg-brand-blue text-white">
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
