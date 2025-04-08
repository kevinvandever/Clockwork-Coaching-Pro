import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/hooks/useNavigation';

const HeroSection: React.FC = () => {
  const { scrollToSection } = useNavigation();

  return (
    <section id="hero" className="relative bg-gradient-to-r from-secondary to-secondary-light min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 leading-tight mb-6">
              Elevate Your Real Estate Business to New Heights
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 mb-8">
              Personalized coaching for high-performing real estate agents and brokers ready to scale their success
            </p>
            <Button 
              variant="cta" 
              size="xl" 
              onClick={() => scrollToSection('book-call')}
            >
              Book Your Free Strategy Session
            </Button>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Successful real estate professional" 
              className="rounded-lg shadow-xl w-full max-w-md object-cover h-[500px]"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-display text-xl font-bold text-primary mb-2">Thriving Business</h3>
            <p className="text-neutral-700">Create systems that generate consistent results and growth</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-display text-xl font-bold text-primary mb-2">Empowered Team</h3>
            <p className="text-neutral-700">Build and lead a high-performing team that delivers excellence</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-display text-xl font-bold text-primary mb-2">Balanced Life</h3>
            <p className="text-neutral-700">Achieve professional success without sacrificing personal fulfillment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
