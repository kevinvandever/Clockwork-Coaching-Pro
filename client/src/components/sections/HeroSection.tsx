import React from 'react';
import { useNavigation } from '@/hooks/useNavigation';

const HeroSection: React.FC = () => {
  const { scrollToSection } = useNavigation();

  const handleCTAClick = () => {
    scrollToSection('book-call');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 md:px-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/65A38D1C-91C6-4936-B507-D4207B334B31_1_105_c.jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      {/* Scarcity/Urgency Banner */}
      <div className="fixed top-0 left-0 right-0 bg-red-600 text-white py-2 px-4 text-center text-sm z-50">
        🔥 Limited Time: Free AI Automation Audits for real estate professionals
      </div>

      <div className="container mx-auto pt-16 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-medium mb-6 text-white leading-tight">
            From Chaos to Clockwork in 6 Weeks
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our AI Automation Audit uncovers the exact systems you need to double your deals
          </p>
          <button
            onClick={handleCTAClick}
            className="elegant-button text-lg px-8 py-4"
          >
            Get Your Free Audit
          </button>
        </div>

        {/* Trust/Credibility Section */}
        <div className="mt-12 text-center">
          <p className="text-white/80 italic">
            Why Free? We're building case studies with our early clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;