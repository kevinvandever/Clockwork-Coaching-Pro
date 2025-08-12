
import React from 'react';
import { useNavigation } from '@/hooks/useNavigation';
import { Link } from 'wouter';

const HeroSection: React.FC = () => {
  const { scrollToSection } = useNavigation();

  return (
    <>
      {/* Scarcity/Urgency Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-medium">
        🔥 Limited Time: Free AI Automation Audits for real estate professionals
      </div>

      <section id="hero" className="relative h-[70vh] flex items-center bg-white">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-top opacity-40"></div>
        </div>

        <div className="elegant-container relative z-10 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium leading-[1.1] mb-6 text-neutral-900">
              From Chaos to Clockwork in 6 Weeks
            </h1>

            <p className="text-xl md:text-2xl text-neutral-700 mb-8 leading-relaxed">
              Our AI Automation Audit uncovers the exact systems you need to double your deals
            </p>

            <Link 
              href="/booking"
              className="elegant-button mt-8 inline-block"
            >
              Get Your Free Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Trust/Credibility Section */}
      <section className="bg-neutral-50 py-6">
        <div className="elegant-container">
          <div className="text-center">
            <p className="text-lg text-neutral-700 font-medium">
              Why Free? We're building case studies with our early clients.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
