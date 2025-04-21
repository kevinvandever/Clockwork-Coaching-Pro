
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ServicesSection from '@/components/sections/ServicesSection';
import CallBookingSection from '@/components/sections/CallBookingSection';
import CookieConsent from '@/components/shared/CookieConsent';
import { useNavigation } from '@/hooks/useNavigation';

const Process: React.FC = () => {
  const { scrollToSection } = useNavigation();

  React.useEffect(() => {
    document.title = 'The Clockwork System | Clockwork Coaching';
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <div className="pt-16 bg-primary/5">
          <div className="elegant-container py-12 text-center">
            <h1 className="elegant-heading text-neutral-900 mb-6">The Clockwork System</h1>
            <div className="w-20 h-0.5 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Your Business Works. Now Let's Make It Run Like Clockwork.
            </p>
          </div>
        </div>
        <ServicesSection />

        {/* Process Steps */}
        <div className="py-16 md:py-24 bg-gradient-to-b from-primary/10 via-primary/5 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                The Clockwork System
              </h2>
              <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed">
                Your Business Works. Now Let's Make It Run Like Clockwork.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
        </div>

        <CallBookingSection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default Process;
