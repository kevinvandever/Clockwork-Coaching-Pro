import React, { useState, useEffect } from 'react';
import { useNavigation } from '@/hooks/useNavigation';
import { Button } from '@/components/ui/button';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="elegant-container">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="font-display font-medium text-2xl">
              <span className="text-primary">Clockwork</span> Coaching
            </a>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a 
                  onClick={() => handleNavClick('about')}
                  className="text-neutral-700 hover:text-primary transition duration-300 cursor-pointer uppercase text-sm tracking-wider font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  onClick={() => handleNavClick('services')} 
                  className="text-neutral-700 hover:text-primary transition duration-300 cursor-pointer uppercase text-sm tracking-wider font-medium"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  onClick={() => handleNavClick('testimonials')} 
                  className="text-neutral-700 hover:text-primary transition duration-300 cursor-pointer uppercase text-sm tracking-wider font-medium"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  onClick={() => handleNavClick('process')} 
                  className="text-neutral-700 hover:text-primary transition duration-300 cursor-pointer uppercase text-sm tracking-wider font-medium"
                >
                  Process
                </a>
              </li>
              <li>
                <a 
                  onClick={() => handleNavClick('contact')} 
                  className="text-neutral-700 hover:text-primary transition duration-300 cursor-pointer uppercase text-sm tracking-wider font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="hidden md:block">
            <button 
              onClick={() => handleNavClick('book-call')}
              className="elegant-button"
            >
              Book Your Free Discovery Call
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-neutral-700 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} py-4`}>
          <ul className="space-y-4">
            <li>
              <a 
                onClick={() => handleNavClick('about')}
                className="block py-2 text-neutral-700 hover:text-primary cursor-pointer uppercase text-sm tracking-wider font-medium"
              >
                About
              </a>
            </li>
            <li>
              <a 
                onClick={() => handleNavClick('services')}
                className="block py-2 text-neutral-700 hover:text-primary cursor-pointer uppercase text-sm tracking-wider font-medium"
              >
                Services
              </a>
            </li>
            <li>
              <a 
                onClick={() => handleNavClick('testimonials')}
                className="block py-2 text-neutral-700 hover:text-primary cursor-pointer uppercase text-sm tracking-wider font-medium"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a 
                onClick={() => handleNavClick('process')}
                className="block py-2 text-neutral-700 hover:text-primary cursor-pointer uppercase text-sm tracking-wider font-medium"
              >
                Process
              </a>
            </li>
            <li>
              <a 
                onClick={() => handleNavClick('contact')}
                className="block py-2 text-neutral-700 hover:text-primary cursor-pointer uppercase text-sm tracking-wider font-medium"
              >
                Contact
              </a>
            </li>
            <li className="pt-2">
              <a 
                onClick={() => handleNavClick('book-call')}
                className="block py-3 px-4 elegant-button text-center cursor-pointer w-full"
              >
                Book Your Free Discovery Call
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
