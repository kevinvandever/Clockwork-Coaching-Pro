
import React, { useEffect } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ServicesSection from '@/components/sections/ServicesSection';
import CallBookingSection from '@/components/sections/CallBookingSection';
import CookieConsent from '@/components/shared/CookieConsent';
import { useNavigation } from '@/hooks/useNavigation';

const Process: React.FC = () => {
  const { scrollToSection } = useNavigation();

  React.useEffect(() => {
    document.title = 'The Clockwork System | Clockwork Coaching';
    // Trigger the process section highlight on mount
    scrollToSection('process');
  }, [scrollToSection]);

  return (
    <>
      <Navigation />
      <main>
        <ServicesSection />
        <CallBookingSection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default Process;
