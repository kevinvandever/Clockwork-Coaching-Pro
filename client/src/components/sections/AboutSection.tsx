import React from 'react';
import { useNavigation } from '@/hooks/useNavigation';

const AboutSection: React.FC = () => {
  const { scrollToSection } = useNavigation();

  return (
    <section id="about" className="elegant-section bg-white">
      <div className="elegant-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="elegant-subheading text-neutral-500">ABOUT US</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-neutral-900">
              Helping Real Estate Professionals Build Sustainable Success
            </h2>
            <div className="w-20 h-0.5 bg-primary mb-8"></div>
            
            <p className="text-neutral-700 mb-5 leading-relaxed">
              Building a thriving real estate business requires more than just closing deals. It demands strategic vision, efficient systems, and exceptional leadership—skills that don't always come naturally even to top-producing agents.
            </p>
            
            <p className="text-neutral-700 mb-5 leading-relaxed">
              With over 20 years of combined experience in real estate and business optimization, we've helped hundreds of agents and brokers transform their businesses from stressful and chaotic to systematized and profitable.
            </p>
            
            <p className="text-neutral-700 mb-8 leading-relaxed">
              Our unique approach combines deep real estate industry knowledge with cutting-edge business strategies and AI technologies to create customized solutions that deliver measurable results. We don't just teach theory—we guide you through implementation every step of the way.
            </p>
            
            <button 
              onClick={() => scrollToSection('book-call')}
              className="elegant-button"
            >
              LEARN HOW WE CAN HELP YOU
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary/10 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Professional real estate coach" 
              className="w-full object-cover relative z-10"
            />
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
