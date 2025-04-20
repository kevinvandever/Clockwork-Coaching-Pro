
import React from 'react';
import { Link } from 'wouter';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-8 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-24 -translate-y-24 blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-x-20 translate-y-1/3 blur-xl"></div>

      <div className="elegant-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="fade-in">
            <p className="elegant-subheading text-primary">JOE AND KEVIN ARE HERE TO HELP</p>
            <h2 className="text-2xl md:text-3xl font-display font-medium mb-4 text-neutral-900 gradient-text">
              ✨ Transform Your Real Estate Business with Modern Systems
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/images/32677DBA-A5C7-49EE-9E59-47CD3EDFFE0B_1_201_a.jpeg"
                  alt="Joe Quiros"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/images/65A38D1C-91C6-4936-B507-D4207B334B31_1_105_c.jpeg"
                  alt="Kevin Vandever"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            <div className="accent-border bg-gradient-to-r from-primary/5 to-transparent px-3 py-2 rounded-r-lg mb-12">
              <p className="text-neutral-700">
                You've built your business through hard work and real connections. Now it's time to implement the right systems and strategies to take it to the next level.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
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

          <div className="relative fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl transform rotate-3 scale-105 shadow-xl elegant-vertical-bar"></div>
            <Link href="/process" onClick={() => window.scrollTo(0, 0)}>
              <div className="relative bg-white p-8 rounded-xl shadow-lg hover-card cursor-pointer transition-transform hover:scale-[1.02]">
                <h3 className="text-2xl font-display font-medium mb-4 text-neutral-900">We understand your challenges</h3>
                <p className="text-neutral-700 mb-4 leading-relaxed">
                  As industry veterans, we've seen firsthand how technology is transforming real estate. The pace of change can be overwhelming, especially when you're focused on serving clients.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Our coaching is designed specifically for established agents who want to leverage modern tools without losing the personal touch that built their business.
                </p>
                <div className="mt-6 flex justify-end">
                  <span className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                    Learn more about our approach
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
