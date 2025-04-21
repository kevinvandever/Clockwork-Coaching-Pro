
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ServicesSection from '@/components/sections/ServicesSection';
import CallBookingSection from '@/components/sections/CallBookingSection';
import CookieConsent from '@/components/shared/CookieConsent';

const Services: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Our Services | Clockwork Coaching';
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <section id="services">
          <ServicesSection />
        </section>
        <CallBookingSection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default Services;
