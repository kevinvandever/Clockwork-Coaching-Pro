import React from 'react';
import { Link } from 'wouter';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Free AI Automation Audit",
      type: "COMPREHENSIVE ANALYSIS",
      description: "We analyze your entire workflow, identify your biggest time-wasters, map out which tasks to automate first, and deliver a custom automation roadmap. Limited availability (normally $1,500).",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ctaText: "Apply for Your Free Audit",
      ctaAction: '/booking'
    },
    {
      title: "4-Week Implementation Sprint",
      type: "DONE-FOR-YOU SYSTEMS",
      description: "We build and connect your automations, create custom workflows for your business, and provide full training and documentation included. Starting at $2,500.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ctaText: "See Implementation Details",
      ctaAction: '/booking'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="elegant-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            How We Transform Your Business
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col"
            >
              <div className="aspect-[4/3] w-full mb-6 overflow-hidden rounded-lg shadow-lg">
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

              <p className="text-neutral-600 mb-8 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>

              <Link href={service.ctaAction} className="elegant-button mt-auto self-start">
                {service.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;