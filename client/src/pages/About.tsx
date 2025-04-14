import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/sections/AboutSection';
import CallBookingSection from '@/components/sections/CallBookingSection';
import CookieConsent from '@/components/shared/CookieConsent';
import { useNavigate } from '@/lib/utils';

const About: React.FC = () => {
  React.useEffect(() => {
    document.title = 'About Us | Clockwork Coaching';
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <div className="pt-24 bg-primary/5">
          <div className="elegant-container py-12 text-center">
            <h1 className="elegant-heading text-neutral-900 mb-6">About Us</h1>
            <div className="w-20 h-0.5 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Learn more about how Clockwork Coaching can help transform your real estate business.
            </p>
          </div>
        </div>
        <AboutSection />
        <div className="elegant-section">
          <div className="elegant-container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="elegant-subheading text-neutral-500">OUR EXPERTISE</p>
                <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-neutral-900">
                  Real Estate Business Growth Specialists
                </h2>
                <div className="w-20 h-0.5 bg-primary mb-8"></div>
                
                <p className="text-neutral-700 mb-5 leading-relaxed">
                  With years of experience in the real estate industry, our team brings specialized knowledge and proven strategies to help agents and brokers scale their businesses efficiently.
                </p>
                
                <p className="text-neutral-700 mb-5 leading-relaxed">
                  We understand the unique challenges faced by real estate professionals in today's competitive market. Our coaching programs are designed to address these specific pain points and create sustainable growth.
                </p>
                
                <p className="text-neutral-700 mb-5 leading-relaxed">
                  By combining industry expertise with innovative business strategies and technologies, we provide comprehensive solutions that deliver measurable results for your real estate business.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary/10 -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Real estate coaching session" 
                  className="w-full object-cover relative z-10"
                />
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/20 -z-10"></div>
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

export default About;