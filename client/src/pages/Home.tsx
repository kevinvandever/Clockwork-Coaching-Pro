
import React, { useEffect } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ObstaclesSection from '@/components/sections/ObstaclesSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CallBookingSection from '@/components/sections/CallBookingSection';
import CookieConsent from '@/components/shared/CookieConsent';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Clockwork Coaching | Transform Your Real Estate Business';

    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const fontAwesome = document.createElement('link');
    fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    fontAwesome.rel = "stylesheet";
    document.head.appendChild(fontAwesome);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(fontAwesome);
    };
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="obstacles">
          <ObstaclesSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="process">
          <ProcessSection />
        </section>
        <section id="contact">
          <CallBookingSection />
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default Home;
