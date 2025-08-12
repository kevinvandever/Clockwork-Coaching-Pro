
import React from 'react';
import { useNavigation } from '@/hooks/useNavigation';

const ProcessSection: React.FC = () => {
  const { scrollToSection } = useNavigation();

  const steps = [
    {
      number: "1",
      title: "Apply for Your Audit",
      description: "15-minute qualification call to ensure we're a good fit. We only work with agents ready to scale.",
      icon: "fas fa-phone"
    },
    {
      number: "2", 
      title: "Deep-Dive Discovery Sessions",
      description: "Comprehensive workflow analysis where we map your entire business engine and assess your specific processes.",
      icon: "fas fa-search"
    },
    {
      number: "3",
      title: "Receive Your Transformation Roadmap", 
      description: "Complete automation blueprint with ROI projections, prioritized \"Quick Wins\" and timeline.",
      icon: "fas fa-map"
    },
    {
      number: "4",
      title: "Choose Your Path",
      description: "Keep the roadmap and implement yourself, or have us build everything for you ($2,500). Either way, the audit is yours to keep.",
      icon: "fas fa-path"
    }
  ];

  return (
    <section id="process" className="py-16 px-4 md:px-8 bg-neutral-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            How to Qualify for Your Free AI Automation Audit
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${step.icon} text-2xl text-white`}></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.number}
                </div>
              </div>
              <h3 className="font-display text-xl font-medium mb-4 text-neutral-900">
                {step.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => scrollToSection('book-call')}
            className="elegant-button"
          >
            Start Your Free Audit Application
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
