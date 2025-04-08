import React, { useState } from 'react';
import { useNavigation } from '@/hooks/useNavigation';
import { Button } from '@/components/ui/button';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useNavigation();

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
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-display font-bold text-primary">
              Elite<span className="text-accent">Realty</span>Coaching
            </a>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a 
                  onClick={() => handleNavClick('about')}
                  className="text-neutral-700 hover:text-primary transition duration-300 cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  onClick={() => handleNavClick('services')} 
                  className="text-neutral-700 hover:text-primary transition duration-300 cursor-pointer"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  onClick={() => handleNavClick('process')} 
                  className="text-neutral-700 hover:text-primary transition duration-300 cursor-pointer"
                >
                  Process
                </a>
              </li>
              <li>
                <a 
                  onClick={() => handleNavClick('assessment')} 
                  className="text-neutral-700 hover:text-primary transition duration-300 cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="hidden md:block">
            <Button 
              variant="cta" 
              onClick={() => handleNavClick('book-call')}
            >
              Book Discovery Call
            </Button>
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
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} pb-4`}>
          <ul className="space-y-4">
            <li>
              <a 
                onClick={() => handleNavClick('about')}
                className="block py-2 text-neutral-700 hover:text-primary cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a 
                onClick={() => handleNavClick('services')}
                className="block py-2 text-neutral-700 hover:text-primary cursor-pointer"
              >
                Services
              </a>
            </li>
            <li>
              <a 
                onClick={() => handleNavClick('process')}
                className="block py-2 text-neutral-700 hover:text-primary cursor-pointer"
              >
                Process
              </a>
            </li>
            <li>
              <a 
                onClick={() => handleNavClick('assessment')}
                className="block py-2 text-neutral-700 hover:text-primary cursor-pointer"
              >
                Contact
              </a>
            </li>
            <li>
              <a 
                onClick={() => handleNavClick('book-call')}
                className="block py-2 bg-primary text-white px-4 rounded text-center cursor-pointer"
              >
                Book Discovery Call
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
