import React from 'react';
import { useNavigation } from '@/hooks/useNavigation';

const ServicesSection: React.FC = () => {
  const { scrollToSection } = useNavigation();
  
  const services = [
    {
      title: "The Realtor's Advantage",
      type: "ONE-ON-ONE COACHING PROGRAM",
      description: "This 12-month intensive program provides personalized guidance to transform your real estate business. We'll develop a customized growth strategy, implement effective systems, and coach you through the challenges of scaling your business to new heights.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ctaText: "Schedule Consultation",
      ctaAction: 'book-call'
    },
    {
      title: "Real Estate Accelerator",
      type: "GROUP COACHING PROGRAM",
      description: "Join a select group of ambitious real estate professionals for this 6-month program. You'll benefit from collective wisdom, accountability, and our proven growth framework, with two private coaching sessions included to address your specific challenges.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ctaText: "Join Waitlist",
      ctaAction: ''
    },
    {
      title: "Elite Agent Mastermind",
      type: "EXCLUSIVE MASTERMIND GROUP",
      description: "This exclusive mastermind brings together top-performing real estate professionals to collaborate, share insights, and solve challenges together. Limited to 10 participants, this high-level group provides the support and accountability needed to achieve breakthrough results.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ctaText: "Apply Now",
      ctaAction: 'book-call'
    }
  ];

  return (
    <section id="services" className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our Coaching Programs
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            Customized solutions to elevate your real estate business
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-56 object-cover" 
              />
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="uppercase text-sm font-semibold text-accent mb-4">
                  {service.type}
                </p>
                <p className="text-neutral-700 mb-6">
                  {service.description}
                </p>
                <button
                  onClick={() => service.ctaAction ? scrollToSection(service.ctaAction) : null}
                  className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium shadow-md hover:bg-primary/90 transition duration-300 w-full text-center"
                >
                  {service.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
