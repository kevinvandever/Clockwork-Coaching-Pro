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