import React from 'react';
import { useNavigation } from '@/hooks/useNavigation';

const ServicesSection: React.FC = () => {
  const { scrollToSection } = useNavigation();
  
  const services = [
    {
      title: "The Realtor's Advantage",
      type: "ONE-ON-ONE COACHING",
      description: "This 12-month intensive program provides personalized guidance to transform your real estate business. We'll develop a customized growth strategy, implement effective systems, and coach you through the challenges of scaling your business to new heights.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ctaText: "LEARN MORE",
      ctaAction: 'book-call'
    },
    {
      title: "Real Estate Accelerator",
      type: "GROUP COACHING",
      description: "Join a select group of ambitious real estate professionals for this 6-month program. You'll benefit from collective wisdom, accountability, and our proven growth framework, with two private coaching sessions included to address your specific challenges.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ctaText: "JOIN WAITLIST",
      ctaAction: ''
    },
    {
      title: "Clockwork Agent Mastermind",
      type: "MASTERMIND GROUP",
      description: "This exclusive mastermind brings together top-performing real estate professionals to collaborate, share insights, and solve challenges together. Limited to 10 participants, this high-level group provides the support and accountability needed to achieve breakthrough results.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ctaText: "APPLY NOW",
      ctaAction: 'book-call'
    }
  ];

  return (
    <section id="services" className="elegant-section bg-white">
      <div className="elegant-container">
        <div className="text-center mb-16">
          <p className="elegant-subheading text-neutral-500">OUR COACHING SOLUTIONS</p>
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            Transform Your Real Estate Business
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col"
            >
              <div className="aspect-[4/3] w-full mb-6 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              
              <p className="uppercase text-xs font-medium tracking-wider text-neutral-500 mb-2">
                {service.type}
              </p>
              
              <h3 className="font-display text-2xl font-medium text-neutral-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-neutral-600 mb-6 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
              
              <button
                onClick={() => service.ctaAction ? scrollToSection(service.ctaAction) : null}
                className="elegant-button mt-auto self-start"
              >
                {service.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
