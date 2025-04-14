
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/shared/CookieConsent';

const JoinClub: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-24">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">
          Join the Club
        </h1>
        <div className="text-center max-w-2xl mx-auto px-4">
          <p className="text-xl text-neutral-700 mb-8">
            Coming Soon! Our exclusive membership platform is under development.
          </p>
          <div className="bg-primary/5 p-8 rounded-lg">
            <h2 className="text-2xl font-display font-medium mb-4">
              What to Expect
            </h2>
            <ul className="space-y-4 text-left">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-primary mr-3"></i>
                <span>Exclusive member resources and tools</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-primary mr-3"></i>
                <span>Priority access to coaching sessions</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-primary mr-3"></i>
                <span>Community networking opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default JoinClub;
