import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/hooks/useNavigation';

const ProcessSection: React.FC = () => {
  const { scrollToSection } = useNavigation();
  
  const steps = [
    {
      number: 1,
      title: "Book Your Call With a Cofounder",
      description: "Schedule your complimentary 30-minute strategy session to discuss your current challenges and goals"
    },
    {
      number: 2,
      title: "Create Your Growth Plan",
      description: "Together we'll develop a customized roadmap to achieve your specific business objectives"
    },
    {
      number: 3,
      title: "Implement & Succeed",
      description: "We'll guide you through implementation with ongoing support to ensure your success"
    }
  ];

  return (
    <section id="process" className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            Three steps to transform your real estate business
          </p>
        </div>
        
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
        
        <div className="text-center mt-12">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={() => scrollToSection('book-call')}
          >
            Book Your Free Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
