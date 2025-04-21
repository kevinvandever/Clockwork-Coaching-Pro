import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/shared/CookieConsent';
import { CALENDAR_URL } from '@/lib/constants';

const Process: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Clockwork Coaching'; // Updated document title
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
        <div className="pt-24 bg-gradient-to-b from-primary/10 via-primary/5 to-white">
          <div className="container mx-auto px-4 py-8 md:py-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {steps.map((step, index) => (
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

              <div className="text-center mt-20">
                <p className="text-2xl text-neutral-800 font-display italic mb-8 leading-relaxed">
                  This is how the top 1% stay the top 1%.
                </p>
                <a 
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg"
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