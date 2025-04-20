
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/shared/CookieConsent';
import { CALENDAR_URL } from '@/lib/constants';

const Process: React.FC = () => {
  React.useEffect(() => {
    document.title = 'The Clockwork System | Clockwork Coaching';
  }, []);

  const steps = [
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
  ];

  return (
    <>
      <Navigation />
      <main>
        <div className="pt-24 bg-gradient-to-b from-primary/5 to-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                The Clockwork System
              </h1>
              <p className="text-xl md:text-2xl text-neutral-700 mb-8">
                Your Business Works. Now Let's Make It Run Like Clockwork.
              </p>
            </div>

            <div className="mt-16 max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {steps.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-display font-bold text-xl">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-neutral-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-neutral-700 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-16">
                <p className="text-xl text-neutral-800 font-display italic mb-8">
                  This is how the top 1% stay the top 1%.
                </p>
                <a 
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-colors"
                >
                  Book Your Discovery Call
                </a>
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
