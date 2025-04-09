import React from 'react';
import { useNavigation } from '@/hooks/useNavigation';

const HeroSection: React.FC = () => {
  const { scrollToSection } = useNavigation();

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-white">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
      </div>

      <div className="elegant-container relative z-10 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="elegant-heading mb-6 text-neutral-900">
            Stop Spinning Your Wheels & Start Scaling Your Business
          </h1>
          
          <p className="elegant-subheading text-neutral-600">
            ONE-ON-ONE AND GROUP COACHING TO HELP GROW YOUR REAL ESTATE BUSINESS
          </p>
          
          <button 
            onClick={() => scrollToSection('book-call')}
            className="elegant-button mt-8"
          >
            BOOK YOUR FREE DISCOVERY CALL
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-primary/10 py-8">
        <div className="elegant-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="font-display text-xl font-medium text-primary mb-2">Thriving Business</h3>
              <p className="text-neutral-700 text-sm">Create systems that generate consistent results and growth</p>
            </div>
            
            <div className="text-center">
              <h3 className="font-display text-xl font-medium text-primary mb-2">Empowered Team</h3>
              <p className="text-neutral-700 text-sm">Build and lead a high-performing team that delivers excellence</p>
            </div>
            
            <div className="text-center">
              <h3 className="font-display text-xl font-medium text-primary mb-2">Balanced Life</h3>
              <p className="text-neutral-700 text-sm">Achieve professional success without sacrificing personal fulfillment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
