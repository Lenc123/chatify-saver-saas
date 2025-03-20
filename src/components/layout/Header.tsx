import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = [
        'home',
        'benefits',
        'calculator',
        'features',
        'social-proof',
        'journey',
        'timeline',
        'cta'
      ];

      // Find the section that is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          // If the section is in the viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Add overflow hidden to body when menu is open to prevent scrolling
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.style.scrollPaddingTop = '80px'; // Add scroll padding for fixed header

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setActiveSection(sectionId);
    
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Account for header height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const isActive = (sectionId: string) => activeSection === sectionId;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled || isMenuOpen
          ? "py-3 bg-white shadow-md border-b border-gray-100" 
          : "py-5 bg-transparent"
      )}
      style={{
        minHeight: '60px',
        width: '100vw'
      }}
    >
      <div className="container-custom flex items-center justify-between w-full">
        <div className="flex items-center">
          <a 
            href="#home" 
            className="flex items-center"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <img src="/lovable-uploads/ae56c5ec-62a5-460d-ba2b-5e56bbe0d297.png" alt="Unburdend" className="h-10 mr-2" />
            <span className="text-2xl font-bold text-brand-primary">Unburdend</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#benefits" 
            className={`font-medium transition-colors ${isActive('benefits') ? 'text-[#008080]' : 'text-gray-800 hover:text-[#008080]'}`}
            onClick={(e) => handleNavClick(e, 'benefits')}
          >
            Benefits
          </a>
          <a 
            href="#calculator" 
            className={`font-medium transition-colors ${isActive('calculator') ? 'text-[#008080]' : 'text-gray-800 hover:text-[#008080]'}`}
            onClick={(e) => handleNavClick(e, 'calculator')}
          >
            Calculator
          </a>
          <a 
            href="#features" 
            className={`font-medium transition-colors ${isActive('features') ? 'text-[#008080]' : 'text-gray-800 hover:text-[#008080]'}`}
            onClick={(e) => handleNavClick(e, 'features')}
          >
            Features
          </a>
          <a 
            href="#journey" 
            className={`font-medium transition-colors ${isActive('journey') ? 'text-[#008080]' : 'text-gray-800 hover:text-[#008080]'}`}
            onClick={(e) => handleNavClick(e, 'journey')}
          >
            Journey
          </a>
          <a 
            href="#cta" 
            className="bg-[#008080] hover:bg-[#008080]/90 text-white px-4 py-2 rounded-full transition-colors"
            onClick={(e) => handleNavClick(e, 'cta')}
          >
            Get Started
          </a>
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
          "fixed inset-x-0 top-[60px] z-40 pt-6 px-6 transition-all duration-300 ease-in-out md:hidden overflow-y-auto",
          isMenuOpen ? "opacity-100 translate-x-0 shadow-xl h-[calc(100vh-60px)]" : "opacity-0 translate-x-full pointer-events-none"
        )}
        style={{ 
          width: '100%',
          background: '#ffffff',
          borderTop: '1px solid #f1f1f1'
        }}
      >
        <nav className="flex flex-col space-y-6 items-center">
          <a 
            href="#benefits" 
            className={`font-medium text-lg w-full text-center py-2 transition-colors ${isActive('benefits') ? 'text-[#008080]' : 'text-gray-800 hover:text-[#008080]'}`}
            onClick={(e) => handleNavClick(e, 'benefits')}
          >
            Benefits
          </a>
          <a 
            href="#calculator" 
            className={`font-medium text-lg w-full text-center py-2 transition-colors ${isActive('calculator') ? 'text-[#008080]' : 'text-gray-800 hover:text-[#008080]'}`}
            onClick={(e) => handleNavClick(e, 'calculator')}
          >
            Calculator
          </a>
          <a 
            href="#features" 
            className={`font-medium text-lg w-full text-center py-2 transition-colors ${isActive('features') ? 'text-[#008080]' : 'text-gray-800 hover:text-[#008080]'}`}
            onClick={(e) => handleNavClick(e, 'features')}
          >
            Features
          </a>
          <a 
            href="#journey" 
            className={`font-medium text-lg w-full text-center py-2 transition-colors ${isActive('journey') ? 'text-[#008080]' : 'text-gray-800 hover:text-[#008080]'}`}
            onClick={(e) => handleNavClick(e, 'journey')}
          >
            Journey
          </a>
          <a
            href="#cta"
            className="w-full mt-4 bg-[#008080] hover:bg-[#008080]/90 text-white py-3 rounded-full text-center font-medium"
            onClick={(e) => handleNavClick(e, 'cta')}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
