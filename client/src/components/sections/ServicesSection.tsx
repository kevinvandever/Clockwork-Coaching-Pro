import React from 'react';
import { useNavigation } from '@/hooks/useNavigation';
import { Link } from 'wouter';

const ServicesSection: React.FC = () => {
  const { scrollToSection } = useNavigation();

  const services = [
    {
      title: "🛠️ Clockwork Bootcamp",
      type: "5-WEEK PROGRAM",
      description: "5-week sprint to clean up your business and install the right systems fast.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ctaText: "LEARN MORE",
      ctaAction: 'book-call'
    },
    {
      title: "🔄 Clockwork Pro",
      type: "1:1 COACHING",
      description: "Monthly 1:1 coaching for agents who want ongoing tools, guidance, and strategy.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ctaText: "JOIN NOW",
      ctaAction: 'book-call'
    },
    {
      title: "🔬 Clockwork Lab",
      type: "COMING SOON",
      description: "A private hub for testing tools, sharing systems, and staying ahead of the curve.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ctaText: "GET NOTIFIED",
      ctaAction: '/notifications'
    }
  ];

  return (
    <section id="services" className="py-2 md:py-3 pb-0 md:pb-0 bg-white">
      <div className="elegant-container">
        <div className="py-8 md:py-12 bg-gradient-to-b from-primary/10 via-primary/5 to-white">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              The Clockwork System
            </h2>
            <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed">
              Your Business Works. Now Let's Make It Run Like Clockwork.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24">
            {[
              {
                title: "Spot the Waste",
                description: "We find what's stealing your time, energy, and focus. Then we get rid of it."
              },
              {
                title: "Simplify the Work",
                description: "The best agents aren't doing more—they're doing less, better. We help you trim the noise and keep what matters."
              },
              {
                title: "Add What Works",
                description: "Smart tools. Simple systems. AI that saves you time and effort without needing you to become a tech expert."
              },
              {
                title: "Keep It Tight",
                description: "Real estate never slows down—and neither do we. You'll keep getting support, updates, and tools that help you stay ahead."
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-primary/10"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-display font-bold text-2xl">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-neutral-900 mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-neutral-700 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-8">
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