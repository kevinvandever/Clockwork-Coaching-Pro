import React, { useState, useEffect } from 'react';
import { useNavigation } from '@/hooks/useNavigation';
import { Link, useLocation } from 'wouter';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection } = useNavigation();
  const [location] = useLocation();

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

  const calendarUrl = 'https://calendar.app.google/A7t5PwbYfgL6cZbJ8';
  
  const handleBookCallClick = () => {
    // Open calendar in new tab
    window.open(calendarUrl, '_blank');
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="elegant-container">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="font-display font-medium text-2xl">
              <span className="text-primary">Clockwork</span> Coaching
            </Link>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  href="/about"
                  className="text-neutral-700 hover:text-primary transition duration-300 uppercase text-sm tracking-wider font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="text-neutral-700 hover:text-primary transition duration-300 uppercase text-sm tracking-wider font-medium"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/testimonials"
                  className="text-neutral-700 hover:text-primary transition duration-300 uppercase text-sm tracking-wider font-medium"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link 
                  href="/process"
                  className="text-neutral-700 hover:text-primary transition duration-300 uppercase text-sm tracking-wider font-medium"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-neutral-700 hover:text-primary transition duration-300 uppercase text-sm tracking-wider font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="hidden md:block">
            <button 
              onClick={handleBookCallClick}
              className="elegant-button text-sm px-4 py-2"
            >
              Book Free Call
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
              <Link 
                href="/about"
                className="block py-2 text-neutral-700 hover:text-primary uppercase text-sm tracking-wider font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/services"
                className="block py-2 text-neutral-700 hover:text-primary uppercase text-sm tracking-wider font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="/testimonials"
                className="block py-2 text-neutral-700 hover:text-primary uppercase text-sm tracking-wider font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link 
                href="/process"
                className="block py-2 text-neutral-700 hover:text-primary uppercase text-sm tracking-wider font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Process
              </Link>
            </li>
            <li>
              <Link 
                href="/contact"
                className="block py-2 text-neutral-700 hover:text-primary uppercase text-sm tracking-wider font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="pt-2">
              <button 
                onClick={handleBookCallClick}
                className="block py-3 px-4 elegant-button text-center w-full"
              >
                Book Your Free Discovery Call
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
