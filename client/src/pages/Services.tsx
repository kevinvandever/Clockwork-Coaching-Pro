import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ServicesSection from '@/components/sections/ServicesSection';
import CallBookingSection from '@/components/sections/CallBookingSection';
import CookieConsent from '@/components/shared/CookieConsent';
import { useNavigation } from '@/hooks/useNavigation';

const Services: React.FC = () => {
  const { scrollToSection } = useNavigation();
  
  React.useEffect(() => {
    document.title = 'Services | Clockwork Coaching';
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <div className="pt-24 bg-primary/5">
          <div className="elegant-container py-12 text-center">
            <h1 className="elegant-heading text-neutral-900 mb-6">Our Services</h1>
            <div className="w-20 h-0.5 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Explore our specialized coaching programs designed for real estate professionals.
            </p>
          </div>
        </div>
        <ServicesSection />
        
        <div className="elegant-section bg-white">
          <div className="elegant-container">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 border border-primary/20 bg-primary/5">
                <h3 className="font-display text-2xl font-medium text-neutral-900 mb-4">
                  Custom Coaching Packages
                </h3>
                <p className="text-neutral-700 mb-5 leading-relaxed">
                  We understand that every real estate business is unique. That's why we offer customized coaching packages tailored to your specific needs and goals.
                </p>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  Our team will work with you to create a personalized coaching plan that addresses your specific challenges and helps you achieve your desired outcomes.
                </p>
                <button 
                  onClick={() => scrollToSection('book-call')} 
                  className="elegant-button"
                >
                  Book Your Free Discovery Call
                </button>
              </div>
              
              <div className="p-8 border border-primary/20 bg-primary/5">
                <h3 className="font-display text-2xl font-medium text-neutral-900 mb-4">
                  Implementation Support
                </h3>
                <p className="text-neutral-700 mb-5 leading-relaxed">
                  Many coaching programs fall short when it comes to implementation. At Clockwork Coaching, we provide hands-on support to help you implement the strategies and systems we recommend.
                </p>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  Our team will work alongside you to ensure you're able to successfully implement the changes needed to transform your business.
                </p>
                <button 
                  onClick={() => scrollToSection('book-call')} 
                  className="elegant-button"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <CallBookingSection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default Services;