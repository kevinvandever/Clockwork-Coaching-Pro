import React from 'react';
import { useNavigation } from '@/hooks/useNavigation';
import { Link } from 'wouter';

const ServicesSection: React.FC = () => {
  const { scrollToSection } = useNavigation();

  const services = [
    {
      title: "🎯 Clockwork Bootcamp",
      type: "5-WEEK PROGRAM",
      description: "5-week sprint to clean up your business and install the right systems fast.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ctaText: "LEARN MORE",
      ctaAction: 'book-call'
    },
    {
      title: "💼 Clockwork Pro",
      type: "1:1 COACHING",
      description: "Monthly 1:1 coaching for agents who want ongoing tools, guidance, and strategy.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ctaText: "JOIN NOW",
      ctaAction: 'book-call'
    },
    {
      title: "✏️ Clockwork Coaching Club",
      type: "COMING SOON",
      description: "An exclusive Circle community where real estate professionals connect, share strategies, access resources and tools, and grow together.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ctaText: "GET NOTIFIED",
      ctaAction: '/join-club'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="elegant-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            Three Ways to Work With Us
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
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

              {service.ctaAction.startsWith('/') ? (
                <Link href={service.ctaAction} className="elegant-button mt-auto self-start">
                  {service.ctaText}
                </Link>
              ) : (
                <button
                  onClick={() => scrollToSection('services')}
                  className="elegant-button mt-auto self-start"
                >
                  {service.ctaText}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;