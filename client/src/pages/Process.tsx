import React from 'react';
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
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <div className="pt-16 bg-primary/5">
          <div className="elegant-container py-12 text-center">
            <h1 className="elegant-heading text-neutral-900 mb-6">The Clockwork System</h1>
            <div className="w-20 h-0.5 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Your Business Works. Now Let's Make It Run Like Clockwork.
            </p>
          </div>
        </div>
        <ServicesSection />
        <CallBookingSection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default Process;