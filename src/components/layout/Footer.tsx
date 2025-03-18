
import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.15),transparent)]"></div>
      
      <div className="container-custom relative z-10">
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-6">SupportAI</div>
              <p className="text-gray-400 mb-6">
                Revolutionizing e-commerce customer support with AI-powered automation, saving time and costs while improving customer experience.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
                </li>
                <li>
                  <a href="#integrations" className="text-gray-400 hover:text-white transition-colors">Integrations</a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
                </li>
                <li>
                  <a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={20} className="text-brand-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">123 AI Boulevard, San Francisco, CA 94107</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="text-brand-blue mr-3 flex-shrink-0" />
                  <a href="mailto:info@supportai.com" className="text-gray-400 hover:text-white transition-colors">
                    info@supportai.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="text-brand-blue mr-3 flex-shrink-0" />
                  <a href="tel:+1-800-123-4567" className="text-gray-400 hover:text-white transition-colors">
                    +1-800-123-4567
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Get the latest news and updates about AI for e-commerce.
              </p>
              <div className="flex flex-col space-y-3">
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-brand-blue"
                  />
                </div>
                <Button className="bg-brand-blue hover:bg-blue-600 w-full">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} SupportAI. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              GDPR Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
