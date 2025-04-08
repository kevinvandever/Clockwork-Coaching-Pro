import React from 'react';
import { useNavigation } from '@/hooks/useNavigation';

const Footer: React.FC = () => {
  const { scrollToSection } = useNavigation();

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              Elite<span className="text-primary">Realty</span>Coaching
            </h3>
            <p className="text-gray-400 mb-4">
              Transforming real estate businesses through strategic coaching and proven systems.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-primary transition duration-300 cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-primary transition duration-300 cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-primary transition duration-300 cursor-pointer"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('process')}
                  className="text-gray-400 hover:text-primary transition duration-300 cursor-pointer"
                >
                  Process
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('book-call')}
                  className="text-gray-400 hover:text-primary transition duration-300 cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                  Free Guides
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('assessment')}
                  className="text-gray-400 hover:text-primary transition duration-300 cursor-pointer"
                >
                  Business Assessment
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <i className="fas fa-envelope mr-2 text-primary"></i> hello@eliterealtycoaching.com
              </li>
              <li>
                <i className="fas fa-phone mr-2 text-primary"></i> (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Elite Realty Coaching. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-primary transition duration-300">Privacy Policy</a> | 
            <a href="#" className="hover:text-primary transition duration-300"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
