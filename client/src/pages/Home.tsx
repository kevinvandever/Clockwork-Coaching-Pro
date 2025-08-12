
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
    document.title = 'Automation Consulting for Real Estate | ClockworkCoaching.Club';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Free automation audit for real estate professionals. Save 15+ hours per week with done-for-you systems. Book your free 2-week audit today.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Free automation audit for real estate professionals. Save 15+ hours per week with done-for-you systems. Book your free 2-week audit today.';
      document.head.appendChild(newMetaDescription);
    }

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
        <HeroSection />
        <ObstaclesSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <CallBookingSection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default Home;
