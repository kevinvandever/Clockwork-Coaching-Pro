import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/hooks/useNavigation';

const ObstaclesSection: React.FC = () => {
  const { scrollToSection } = useNavigation();
  
  const obstacles = [
    {
      title: "Overwhelmed?",
      description: "Are you juggling too many responsibilities and feeling stretched too thin to grow your business strategically?"
    },
    {
      title: "Plateaued?",
      description: "Have your sales hit a ceiling despite your best efforts to implement new strategies and systems?"
    },
    {
      title: "Uncertain?",
      description: "Are you unsure about the right next steps to scale your business in today's competitive market?"
    }
  ];

  return (
    <section id="obstacles" className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Common Challenges Real Estate Professionals Face
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            Are these obstacles standing in the way of your business growth?
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {obstacles.map((obstacle, index) => (
            <div key={index} className="bg-secondary rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-display text-2xl font-bold text-primary mb-4">
                {obstacle.title}
              </h3>
              <p className="text-neutral-700 mb-4">
                {obstacle.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={() => scrollToSection('book-call')}
          >
            Book Your Free Strategy Session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ObstaclesSection;
