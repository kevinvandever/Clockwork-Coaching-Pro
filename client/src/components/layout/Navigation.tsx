import React, { useState, useEffect } from 'react';
import { useNavigation } from '@/hooks/useNavigation';
import { Link, useLocation } from 'wouter';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { activeSection, scrollToSection } = useNavigation();
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

  const handleNavClick = (sectionId: string) => {
    if (location !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      scrollToSection(sectionId);
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const isHome = location === '/';

  return (
    <header className={`sticky top-8 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-white md:bg-transparent py-3 md:py-4'}`}>
      <div className="elegant-container">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="font-display font-medium text-xl md:text-2xl">
              <span className="text-primary">Clockwork</span> Coaching
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex justify-between w-[600px]">
              <li>
                <Link 
                  href="/"
                  className={`transition duration-300 uppercase text-sm tracking-wider font-medium ${isHome && !activeSection ? 'text-primary' : 'text-neutral-700 hover:text-primary'}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Home
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('about')}
                  className={`transition duration-300 uppercase text-sm tracking-wider font-medium ${isHome && activeSection === 'about' ? 'text-primary' : 'text-neutral-700 hover:text-primary'}`}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('book-call')}
                  className={`transition duration-300 uppercase text-sm tracking-wider font-medium ${isHome && activeSection === 'book-call' ? 'text-primary' : 'text-neutral-700 hover:text-primary'}`}
                >
                  Free Audit
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('services')}
                  className={`transition duration-300 uppercase text-sm tracking-wider font-medium ${isHome && activeSection === 'services' ? 'text-primary' : 'text-neutral-700 hover:text-primary'}`}
                >
                  Implementation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('book-call')}
                  className={`transition duration-300 uppercase text-sm tracking-wider font-medium ${isHome && activeSection === 'book-call' ? 'text-primary' : 'text-neutral-700 hover:text-primary'}`}
                >
                  Contact
                </button>
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
          className={`md:hidden fixed left-0 right-0 top-[97px] bottom-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
          } overflow-y-auto z-50`}
        >
          <ul className="py-4 px-6 space-y-2">
            <li>
              <Link 
                href="/"
                className={`block py-3.5 border-b border-neutral-100 ${isHome && !activeSection ? 'text-primary' : 'text-neutral-700 hover:text-primary'} uppercase text-sm tracking-wider font-medium`}
                onClick={() => {setIsMobileMenuOpen(false); window.scrollTo(0, 0);}}
              >
                Home
              </Link>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('about')}
                className={`block py-3.5 border-b border-neutral-100 ${isHome && activeSection === 'about' ? 'text-primary' : 'text-neutral-700 hover:text-primary'} uppercase text-sm tracking-wider font-medium w-full text-left`}
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('book-call')}
                className={`block py-3.5 border-b border-neutral-100 ${isHome && activeSection === 'book-call' ? 'text-primary' : 'text-neutral-700 hover:text-primary'} uppercase text-sm tracking-wider font-medium w-full text-left`}
              >
                Free Audit
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('services')}
                className={`block py-3.5 border-b border-neutral-100 ${isHome && activeSection === 'services' ? 'text-primary' : 'text-neutral-700 hover:text-primary'} uppercase text-sm tracking-wider font-medium w-full text-left`}
              >
                Implementation
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('book-call')}
                className={`block py-3.5 ${isHome && activeSection === 'book-call' ? 'text-primary' : 'text-neutral-700 hover:text-primary'} uppercase text-sm tracking-wider font-medium w-full text-left`}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;