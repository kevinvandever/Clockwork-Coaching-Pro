
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ProcessSection from '@/components/sections/ProcessSection';
import CallBookingSection from '@/components/sections/CallBookingSection';
import CookieConsent from '@/components/shared/CookieConsent';

const Process: React.FC = () => {
  React.useEffect(() => {
    document.title = 'The Clockwork System | Clockwork Coaching';
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <ProcessSection />
        <CallBookingSection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default Process;
