
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/hooks/useNavigation';
import { useIsMobile } from '@/hooks/use-mobile';

const ProcessSection: React.FC = () => {
  const { scrollToSection } = useNavigation();
  const isMobile = useIsMobile();

  const steps = [
    {
      number: 1,
      title: "Book Your Discovery Call",
      description: "Click the button below to book your call with a Co-founder"
    },
    {
      number: 2,
      title: "Design the Strategy",
      description: "Together we'll craft a custom strategy to supercharge your business"
    },
    {
      number: 3,
      title: "Implement & Win",
      description: "We'll be there every step of the way as we put the plan into action"
    }
  ];

  const MobileLayout = () => (
    <div className="space-y-8">
      {steps.map((step) => (
        <div key={step.number} className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-primary rounded-full flex-shrink-0 flex items-center justify-center text-white text-xl font-bold">
            {step.number}
          </div>
          <div className="flex-1">
            <h3 className="font-display text-xl font-bold text-primary mb-2">
              {step.title}
            </h3>
            <p className="text-neutral-700 text-sm">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  const DesktopLayout = () => (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {steps.map((step) => (
        <div key={step.number} className="text-center">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
            {step.number}
          </div>
          <h3 className="font-display text-2xl font-bold text-primary mb-4">
            {step.title}
          </h3>
          <p className="text-neutral-700">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <section id="clockwork-system" className="py-8 md:py-12 pt-6 md:pt-6 bg-primary/5">
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-8"></div>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Three Steps to Small Business Success
          </h2>
        </div>

        {isMobile ? <MobileLayout /> : <DesktopLayout />}

        <div className="text-center mt-12">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={() => window.location.href = '/contact'}
            className="text-lg px-8 py-4"
          >
            BOOK YOUR FREE DISCOVERY CALL
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
