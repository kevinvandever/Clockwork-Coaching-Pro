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
        <div className="border-t border-neutral-200 py-12">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-display font-medium mb-4">
            Ready to Build a Predictable Pipeline?
          </h3>
          <p className="text-neutral-600 mb-8 max-w-md mx-auto">
            Top producers use systems. Let us build yours.
          </p>
          <Link
            href="/booking"
            className="elegant-button"
          >
            Get Your Free Automation Audit
          </Link>
        </div>
      </div>

        <div className="border-t border-neutral-200 py-8">
          <div className="text-center text-neutral-600 mb-4">
            <p className="text-sm">
              Results based on actual client implementations. Individual results vary based on market conditions and implementation commitment.
            </p>
          </div>
          <div className="text-center text-neutral-600">
            <p>&copy; 2025 Clockwork Coaching. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;