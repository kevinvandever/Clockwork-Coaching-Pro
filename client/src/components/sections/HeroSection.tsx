import React from 'react';
import { useNavigation } from '@/hooks/useNavigation';
import { Link } from 'wouter';

const HeroSection: React.FC = () => {
  const { scrollToSection } = useNavigation();

  return (
    <>
      <section id="hero" className="relative h-screen flex items-center bg-white">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
        </div>

        <div className="elegant-container relative z-10 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="elegant-heading mb-6 text-neutral-900">
              Don't Get Left Behind
            </h1>

            <p className="elegant-subheading text-neutral-800">
              FUTURE-PROOF YOUR BUSINESS WITH DONE-FOR-YOU AI SYSTEMS AND PERSONALIZED 1:1 COACHING
            </p>

            <Link 
              href="/contact"
              className="elegant-button mt-8 inline-block"
            >
              BOOK YOUR FREE DISCOVERY CALL
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="elegant-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="font-display text-xl font-medium text-primary mb-2">Curated Tools</h3>
            </div>

            <div className="text-center">
              <h3 className="font-display text-xl font-medium text-primary mb-2">Customized Coaching</h3>
            </div>

            <div className="text-center">
              <h3 className="font-display text-xl font-medium text-primary mb-2">Consistent Revenue</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;