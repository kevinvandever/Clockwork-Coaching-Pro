import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/hooks/useNavigation';

const AboutSection: React.FC = () => {
  const { scrollToSection } = useNavigation();

  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Professional real estate coach" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              We're Here to Help You Succeed
            </h2>
            <h3 className="text-xl text-primary font-semibold mb-4">
              Expert Real Estate Business Coaches
            </h3>
            
            <p className="text-neutral-700 mb-4">
              Building a thriving real estate business requires more than just closing deals. It demands strategic vision, efficient systems, and exceptional leadership—skills that don't always come naturally even to top-producing agents.
            </p>
            
            <p className="text-neutral-700 mb-4">
              With over 20 years of combined experience in real estate and business optimization, we've helped hundreds of agents and brokers transform their businesses from stressful and chaotic to systematized and profitable.
            </p>
            
            <p className="text-neutral-700 mb-8">
              Our unique approach combines deep real estate industry knowledge with cutting-edge business strategies and AI technologies to create customized solutions that deliver measurable results. We don't just teach theory—we guide you through implementation every step of the way.
            </p>
            
            <Button 
              variant="cta"
              onClick={() => scrollToSection('book-call')}
            >
              Learn How We Can Help You
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
