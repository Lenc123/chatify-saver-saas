
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-md shadow-md" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-brand-blue">
            SupportAI
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-800 hover:text-brand-blue font-medium link-hover">Features</a>
          <a href="#integrations" className="text-gray-800 hover:text-brand-blue font-medium link-hover">Integrations</a>
          <a href="#pricing" className="text-gray-800 hover:text-brand-blue font-medium link-hover">Pricing</a>
          <a href="#blog" className="text-gray-800 hover:text-brand-blue font-medium link-hover">Blog</a>
          <a href="#login" className="text-gray-800 hover:text-brand-blue font-medium link-hover">Login</a>
          <Button className="btn-primary ml-4">Free Trial</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-6 transition-all duration-300 ease-in-out md:hidden",
          isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-6 items-center">
          <a 
            href="#features" 
            className="text-gray-800 hover:text-brand-blue font-medium text-lg w-full text-center py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#integrations" 
            className="text-gray-800 hover:text-brand-blue font-medium text-lg w-full text-center py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Integrations
          </a>
          <a 
            href="#pricing" 
            className="text-gray-800 hover:text-brand-blue font-medium text-lg w-full text-center py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#blog" 
            className="text-gray-800 hover:text-brand-blue font-medium text-lg w-full text-center py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </a>
          <a 
            href="#login" 
            className="text-gray-800 hover:text-brand-blue font-medium text-lg w-full text-center py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </a>
          <Button 
            className="btn-primary w-full mt-4" 
            onClick={() => setIsMenuOpen(false)}
          >
            Free Trial
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
