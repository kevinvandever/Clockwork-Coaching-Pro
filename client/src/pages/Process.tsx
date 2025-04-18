
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ProcessSection from '@/components/sections/ProcessSection';
import CookieConsent from '@/components/shared/CookieConsent';
import { useNavigation } from '@/hooks/useNavigation';
import { STEPS } from '@/lib/constants';

const Process: React.FC = () => {
  const { scrollToSection } = useNavigation();

  React.useEffect(() => {
    document.title = 'Our Process | Clockwork Coaching';
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <div className="elegant-section bg-gradient-to-b from-white to-neutral-50">
          <div className="elegant-container">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-sm md:text-base font-display font-medium mb-4 whitespace-nowrap inline-block">
                ✨ You've Worked Too Hard to Fall Behind Now
              </h2>
              <div className="w-20 h-0.5 bg-primary/80 mx-auto mb-6"></div>
              <p className="text-neutral-600 text-lg leading-relaxed">
                Our proven methodology transforms your real estate business through systematic optimization and strategic growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-lg -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Coaching session in progress" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>

              <div className="space-y-12">
                {[
                  {
                    title: "1. Comprehensive Assessment",
                    description: "We begin with a thorough assessment of your current business operations, identifying strengths, weaknesses, and opportunities for growth. This gives us a clear picture of where you are and where you want to go."
                  },
                  {
                    title: "2. Customized Strategy Development",
                    description: "Based on your assessment, we create a personalized strategy tailored to your specific business goals and challenges. This roadmap outlines the exact steps needed to transform your real estate business."
                  },
                  {
                    title: "3. Implementation & Systems Building",
                    description: "The key to sustainable success is having the right systems in place. We help you implement efficient workflows, automation, and team structures that create predictable, scalable results."
                  },
                  {
                    title: "4. Ongoing Support & Refinement",
                    description: "Our relationship doesn't end with implementation. We provide continuous coaching and support to refine your systems, overcome new challenges, and ensure your business keeps evolving and growing."
                  }
                ].map((step, index) => (
                  <div key={index} className="group hover:translate-x-1 transition-transform duration-300">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-display text-xl shadow-lg group-hover:shadow-xl transition-shadow">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-medium text-neutral-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                <button 
                  onClick={() => scrollToSection('book-call')} 
                  className="elegant-button w-full md:w-auto"
                >
                  Book Your Discovery Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default Process;
