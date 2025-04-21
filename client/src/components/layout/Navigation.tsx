import React, { useState, useEffect } from 'react';
import { useNavigation } from '@/hooks/useNavigation';
import { Link, useLocation } from 'wouter';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { activeSection } = useNavigation();
  const { scrollToSection } = useNavigation();
  const [location] = useLocation();
  const isMobile = useIsMobile();

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

  const handleBookCallClick = () => {
    // Navigate to booking page
    window.location.href = '/contact'; // Changed to redirect to the combined contact page
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-white md:bg-transparent py-3 md:py-4'}`}>
      <div className="elegant-container">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="font-display font-medium text-xl md:text-2xl">
              <span className="text-primary">Clockwork</span> Coaching
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex justify-between w-[700px]">
              <li>
                <Link 
                  href="/"
                  className={`transition duration-300 uppercase text-sm tracking-wider font-medium ${location === '/' ? 'text-primary' : 'text-neutral-700 hover:text-primary'}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about"
                  className={`transition duration-300 uppercase text-sm tracking-wider font-medium ${location === '/about' ? 'text-primary' : 'text-neutral-700 hover:text-primary'}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('clockwork-system')}
                  className={`transition duration-300 uppercase text-sm tracking-wider font-medium ${activeSection === 'process' ? 'text-primary' : 'text-neutral-700 hover:text-primary'}`}
                >
                  Process
                </button>
              </li>

              <li>
                <Link 
                  href="/contact"
                  className={`transition duration-300 uppercase text-sm tracking-wider font-medium ${location === '/contact' ? 'text-primary' : 'text-neutral-700 hover:text-primary'}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/join-club"
                  className={`transition duration-300 uppercase text-sm tracking-wider font-medium ${location === '/join-club' ? 'text-primary' : 'text-neutral-700 hover:text-primary'}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  The Club
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary/30 p-2 rounded-md transition-all duration-200 active:scale-95"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl transition-all duration-200`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed left-0 right-0 top-[65px] bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden z-50`}
        >
          <ul className="py-4 px-6 space-y-0">
            <li>
              <Link 
                href="/"
                className={`block py-3.5 border-b border-neutral-100 ${location === '/' ? 'text-primary' : 'text-neutral-700 hover:text-primary'} uppercase text-sm tracking-wider font-medium`}
                onClick={() => {setIsMobileMenuOpen(false); window.scrollTo(0, 0);}}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about"
                className={`block py-3.5 border-b border-neutral-100 ${location === '/about' ? 'text-primary' : 'text-neutral-700 hover:text-primary'} uppercase text-sm tracking-wider font-medium`}
                onClick={() => {setIsMobileMenuOpen(false); window.scrollTo(0, 0);}}
              >
                About
              </Link>
            </li>
            <li>
              <button 
                onClick={() => {setIsMobileMenuOpen(false); scrollToSection('services');}}
                className="block py-3.5 border-b border-neutral-100 text-neutral-700 hover:text-primary uppercase text-sm tracking-wider font-medium w-full text-left"
              >
                Process
              </button>
            </li>

            <li>
              <Link 
                href="/contact"
                className={`block py-3.5 border-b border-neutral-100 ${location === '/contact' ? 'text-primary' : 'text-neutral-700 hover:text-primary'} uppercase text-sm tracking-wider font-medium`}
                onClick={() => {setIsMobileMenuOpen(false); window.scrollTo(0, 0);}}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link 
                href="/join-club"
                className={`block py-3.5 ${location === '/join-club' ? 'text-primary' : 'text-neutral-700 hover:text-primary'} uppercase text-sm tracking-wider font-medium`}
                onClick={() => {setIsMobileMenuOpen(false); window.scrollTo(0, 0);}}
              >
                The Club
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;