import React from 'react';
import { useNavigation } from '@/hooks/useNavigation';
import { Link } from 'wouter';

const ServicesSection: React.FC = () => {
  const { scrollToSection } = useNavigation();

  const services = [
    {
      title: "🛠️ Clockwork Bootcamp",
      type: "5-WEEK PROGRAM",
      description: "A foundational program designed to get Realtors up to speed fast. We'll help you eliminate inefficiencies, streamline your systems, and find the 2–3 AI tools that can make the biggest impact in your business—without the overwhelm.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ctaText: "LEARN MORE",
      ctaAction: 'book-call'
    },
    {
      title: "🔄 Clockwork Pro",
      type: "1:1 COACHING",
      description: "Ongoing monthly 1:1 coaching for agents who want to stay ahead. We'll keep you in the loop on the latest tools, trends, and market shifts—while continuing to refine and optimize the systems we built together.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ctaText: "JOIN NOW",
      ctaAction: 'book-call'
    },
    {
      title: "🔬 The Clockwork Lab",
      type: "COMING SOON",
      description: "A testing ground and resource library for agents who want to stay curious, experiment smarter, and learn from what's working now. Tools, templates, trainings, and community—all in one place.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ctaText: "GET NOTIFIED",
      ctaAction: '/notifications'
    }
  ];

  return (
    <section id="services" className="pt-24 pb-0 bg-white">
      <div className="elegant-container">
        <div className="text-center mb-8 mt-16">
          <p className="elegant-subheading text-neutral-500">WORK WITH US</p>
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            Choose Your Path to Growth
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
                  onClick={() => service.ctaAction ? scrollToSection(service.ctaAction) : null}
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