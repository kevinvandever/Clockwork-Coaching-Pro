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

            <div className="accent-border bg-gradient-to-r from-primary/5 to-transparent px-3 py-2 rounded-r-lg mb-8">
              <p className="text-neutral-700">
                You've built your business through hard work and real connections. Now it's time to implement the right systems and strategies to take it to the next level.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative flex flex-col">
                <div className="aspect-[4/3] w-full mb-6 overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Clockwork Bootcamp"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="uppercase text-xs font-medium tracking-wider text-neutral-500 mb-2">
                  5-WEEK PROGRAM
                </p>
                <h3 className="font-display text-2xl font-medium text-neutral-900 mb-4">
                  🛠️ Clockwork Bootcamp
                </h3>
                <p className="text-neutral-600 mb-8 text-sm leading-relaxed flex-grow">
                  A foundational program designed to get Realtors up to speed fast. We'll help you eliminate inefficiencies, streamline your systems, and find the 2–3 AI tools that can make the biggest impact in your business—without the overwhelm.
                </p>
              </div>

              <div className="group relative flex flex-col">
                <div className="aspect-[4/3] w-full mb-6 overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Clockwork Pro"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="uppercase text-xs font-medium tracking-wider text-neutral-500 mb-2">
                  1:1 COACHING
                </p>
                <h3 className="font-display text-2xl font-medium text-neutral-900 mb-4">
                  🔄 Clockwork Pro
                </h3>
                <p className="text-neutral-600 mb-8 text-sm leading-relaxed flex-grow">
                  Ongoing monthly 1:1 coaching for agents who want to stay ahead. We'll keep you in the loop on the latest tools, trends, and market shifts—while continuing to refine and optimize the systems we built together.
                </p>
              </div>

              <div className="group relative flex flex-col">
                <div className="aspect-[4/3] w-full mb-6 overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="The Clockwork Lab"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="uppercase text-xs font-medium tracking-wider text-neutral-500 mb-2">
                  COMING SOON
                </p>
                <h3 className="font-display text-2xl font-medium text-neutral-900 mb-4">
                  🔬 The Clockwork Lab
                </h3>
                <p className="text-neutral-600 mb-8 text-sm leading-relaxed flex-grow">
                  A testing ground and resource library for agents who want to stay curious, experiment smarter, and learn from what's working now. Tools, templates, trainings, and community—all in one place.
                </p>
              </div>
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