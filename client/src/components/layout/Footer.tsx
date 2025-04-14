
import React from 'react';
import { useNavigation } from '@/hooks/useNavigation';
import { Link, useLocation } from 'wouter';
import { CALENDAR_URL, COMPANY_EMAIL, COMPANY_PHONE } from '@/lib/constants';

const Footer: React.FC = () => {
  const { scrollToSection } = useNavigation();
  const [location] = useLocation();

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="elegant-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="font-display text-xl font-medium mb-6 inline-block">
              <span className="text-primary">Clockwork</span> Coaching
            </Link>
            <p className="text-neutral-600 mb-6 max-w-xs">
              Transforming real estate businesses through strategic coaching and proven systems for sustainable success.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-400 hover:text-primary transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary transition duration-300">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider font-medium text-neutral-900 mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about"
                  className="text-neutral-500 hover:text-primary transition duration-300 text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="text-neutral-500 hover:text-primary transition duration-300 text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/process"
                  className="text-neutral-500 hover:text-primary transition duration-300 text-sm"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-neutral-500 hover:text-primary transition duration-300 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider font-medium text-neutral-900 mb-6">Contact Us</h4>
            <ul className="space-y-4 text-neutral-500">
              <li className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  <i className="fas fa-envelope text-primary text-lg"></i>
                </div>
                <span className="text-sm">{COMPANY_EMAIL}</span>
              </li>
              <li className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  <i className="fas fa-phone text-primary text-lg"></i>
                </div>
                <span className="text-sm">{COMPANY_PHONE}</span>
              </li>
              <li className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  <i className="fas fa-calendar-alt text-primary text-lg"></i>
                </div>
                <a 
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 hover:text-primary transition duration-300"
                >
                  Book Your Free Discovery Call
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 text-center text-neutral-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Clockwork Coaching. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-primary transition duration-300">Privacy Policy</a> &nbsp;|&nbsp; 
            <a href="#" className="hover:text-primary transition duration-300">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
