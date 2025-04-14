import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ProcessSection from '@/components/sections/ProcessSection';
import CallBookingSection from '@/components/sections/CallBookingSection';
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
        <div className="pt-24 bg-primary/5">
          <div className="elegant-container py-12 text-center">
            <h1 className="elegant-heading text-neutral-900 mb-6">Our Coaching Process</h1>
            <div className="w-20 h-0.5 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Learn about our proven methodology for transforming real estate businesses.
            </p>
          </div>
        </div>
        
        <ProcessSection />
        
        <div className="elegant-section bg-white">
          <div className="elegant-container">
            <p className="elegant-subheading text-neutral-500 text-center">OUR METHODOLOGY</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-center">
              The Clockwork System
            </h2>
            <div className="w-20 h-0.5 bg-primary mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Coaching session in progress" 
                  className="w-full h-auto"
                />
              </div>
              
              <div>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-display text-2xl font-medium text-neutral-900 mb-3">
                      1. Comprehensive Assessment
                    </h3>
                    <p className="text-neutral-700 leading-relaxed">
                      We begin with a thorough assessment of your current business operations, identifying strengths, weaknesses, and opportunities for growth. This gives us a clear picture of where you are and where you want to go.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-display text-2xl font-medium text-neutral-900 mb-3">
                      2. Customized Strategy Development
                    </h3>
                    <p className="text-neutral-700 leading-relaxed">
                      Based on your assessment, we create a personalized strategy tailored to your specific business goals and challenges. This roadmap outlines the exact steps needed to transform your real estate business.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-display text-2xl font-medium text-neutral-900 mb-3">
                      3. Implementation & Systems Building
                    </h3>
                    <p className="text-neutral-700 leading-relaxed">
                      The key to sustainable success is having the right systems in place. We help you implement efficient workflows, automation, and team structures that create predictable, scalable results.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-display text-2xl font-medium text-neutral-900 mb-3">
                      4. Ongoing Support & Refinement
                    </h3>
                    <p className="text-neutral-700 leading-relaxed">
                      Our relationship doesn't end with implementation. We provide continuous coaching and support to refine your systems, overcome new challenges, and ensure your business keeps evolving and growing.
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => scrollToSection('book-call')} 
                    className="elegant-button mt-4"
                  >
                    Book Your Free Discovery Call
                  </button>
                </div>
              </div>
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