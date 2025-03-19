
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

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-primary text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,181,176,0.15),transparent)]"></div>
      
      <div className="container-custom relative z-10">
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <img src="/lovable-uploads/ae56c5ec-62a5-460d-ba2b-5e56bbe0d297.png" alt="Unburdend" className="h-12 mr-3" />
                <span className="text-2xl font-bold text-white">Unburdend</span>
              </div>
              <p className="text-gray-400 mb-6">
                Revolutionizing e-commerce customer support with AI-powered automation, saving time and costs while improving customer experience.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-brand-secondary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-secondary transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-secondary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-secondary transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={20} className="text-brand-secondary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">123 AI Boulevard, San Francisco, CA 94107</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="text-brand-secondary mr-3 flex-shrink-0" />
                  <a href="mailto:info@unburdend.com" className="text-gray-400 hover:text-white transition-colors">
                    info@unburdend.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="text-brand-secondary mr-3 flex-shrink-0" />
                  <a href="tel:+1-800-123-4567" className="text-gray-400 hover:text-white transition-colors">
                    +1-800-123-4567
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Unburdend. All rights reserved.
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
