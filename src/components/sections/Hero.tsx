import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';

// Message types for the chat interface
interface Message {
  id: string;
  text: string;
  isBot: boolean;
}

const Hero = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm your Unburdend AI assistant. How can I help with your e-commerce support today?",
      isBot: true,
    },
    {
      id: '2',
      text: "Can you help a customer who wants to return a product they purchased?",
      isBot: false,
    },
    {
      id: '3',
      text: "Of course! To process a return, I'll need the order number and reason for return. Our policy allows returns within 30 days of purchase with original packaging. Would you like me to send a return label to the customer's email?",
      isBot: true,
    },
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll chat to bottom when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  
  // Check if the section is visible to trigger animations
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add user message
      const userMsg: Message = {
        id: `user-${Date.now()}`,
        text: newMessage,
        isBot: false,
      };
      
      setMessages([...messages, userMsg]);
      setNewMessage('');
      
      // Simulate bot response (in a real app, this would call an API)
      setTimeout(() => {
        const botResponse: Message = {
          id: `bot-${Date.now()}`,
          text: "I understand your concern. Our AI is trained on your specific products and policies, so I can provide accurate and helpful responses to customer inquiries like this one. Would you like to see another example?",
          isBot: true,
        };
        
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };
  
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden bg-[#F9FAFF]">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-60 h-60 bg-[#FFB300]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#FFB300]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="turso-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-[#FFB300]/10 text-[#FFB300] rounded-full mb-4 font-medium text-sm mt-6 sm:mt-0">
                AI-Powered Support for E-commerce
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                Automate Customer Support.
                <span className="text-[#FFB300] block mt-2 lg:text-4xl">No more tickets, just happy customers.</span>
              </h1>
              <p className="text-lg sm:text-l text-gray-600 max-w-xl">
                AI-powered customer support designed specifically for E-commerce. Reduce support costs by up to 70% while improving customer satisfaction.
              </p>
            </div>
            
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <Button variant="amber" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                Start Your Free Trial
              </Button>
              
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <AnimatedCard className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-[#FFB300]/20 flex items-center justify-center mr-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.43 13.93 13 12 13C10.07 13 8.5 11.43 8.5 9.5C8.5 7.57 10.07 6 12 6ZM12 20C9.97 20 8.1 19.33 6.66 18.12C6.25 17.8 6 17.28 6 16.74V16.5C6 14.01 8.01 12 10.5 12H13.5C15.99 12 18 14.01 18 16.5V16.74C18 17.28 17.75 17.8 17.34 18.12C15.9 19.33 14.03 20 12 20Z" fill="#FFB300"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Unburdend AI</div>
                    <div className="text-xs text-green-600">Online</div>
                  </div>
                </div>
              </div>
              
              <div 
                ref={chatContainerRef}
                className="p-4 h-80 overflow-y-auto flex flex-col space-y-4"
              >
                {messages.map(message => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div 
                      className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 ${
                        message.isBot 
                          ? 'bg-gray-100 text-gray-800 rounded-tl-none' 
                          : 'bg-[#FFB300] text-white rounded-tr-none'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-3 border-t border-gray-100 bg-gray-50">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 py-2 px-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB300]/50 mr-2"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button 
                    variant="amber" 
                    size="icon" 
                    onClick={handleSendMessage}
                    className="rounded-full"
                  >
                    <Send size={18} />
                  </Button>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
