import React, { useEffect } from 'react';
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
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-display font-bold text-white">1</span>
              </div>
            </div>
            <h3 className="font-display text-xl font-medium mb-4">Apply for Your Audit</h3>
            <p className="text-neutral-600 leading-relaxed text-sm">
              15-minute qualification call to ensure we're a good fit. We only work with agents ready to scale.
            </p>
          </div>

          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-display font-bold text-white">2</span>
              </div>
            </div>
            <h3 className="font-display text-xl font-medium mb-4">Deep-Dive Discovery Sessions</h3>
            <p className="text-neutral-600 leading-relaxed text-sm">
              Comprehensive workflow analysis where we map your entire business engine and assess your specific processes.
            </p>
          </div>

          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-display font-bold text-white">3</span>
              </div>
            </div>
            <h3 className="font-display text-xl font-medium mb-4">Receive Your Transformation Roadmap</h3>
            <p className="text-neutral-600 leading-relaxed text-sm">
              Complete automation blueprint with ROI projections, prioritized "Quick Wins" and timeline.
            </p>
          </div>

          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-display font-bold text-white">4</span>
              </div>
            </div>
            <h3 className="font-display text-xl font-medium mb-4">Choose Your Path</h3>
            <p className="text-neutral-600 leading-relaxed text-sm">
              Keep the roadmap and implement yourself, or have us build everything for you ($2,500). Either way, the audit is yours to keep.
            </p>
          </div>
        </div>
  );

  return (
    <section id="process" className="py-8 md:py-12 pt-6 md:pt-6 bg-primary/5">
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-8"></div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            How to Qualify for Your Free AI Automation Audit
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto"></div>
        </div>

        {isMobile ? <MobileLayout /> : <DesktopLayout />}
      </div>
    </section>
  );
};

export default ProcessSection;