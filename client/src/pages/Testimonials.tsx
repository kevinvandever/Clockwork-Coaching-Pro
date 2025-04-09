import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import TestimonialSection from '@/components/sections/TestimonialSection';
import CallBookingSection from '@/components/sections/CallBookingSection';
import CookieConsent from '@/components/shared/CookieConsent';

const Testimonials: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Testimonials | Clockwork Coaching';
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <div className="pt-24 bg-primary/5">
          <div className="elegant-container py-12 text-center">
            <h1 className="elegant-heading text-neutral-900 mb-6">Client Success Stories</h1>
            <div className="w-20 h-0.5 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Hear from real estate professionals who have transformed their businesses with Clockwork Coaching.
            </p>
          </div>
        </div>
        
        <TestimonialSection />
        
        <div className="elegant-section bg-white">
          <div className="elegant-container">
            <p className="elegant-subheading text-neutral-500 text-center">MORE CLIENT SUCCESS STORIES</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-center">
              What Our Clients Are Saying
            </h2>
            <div className="w-20 h-0.5 bg-primary mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 bg-primary/5 relative">
                <div className="text-5xl text-primary/20 absolute top-4 left-4">"</div>
                <div className="relative z-10">
                  <p className="text-neutral-700 italic mb-6 leading-relaxed">
                    "The systems Clockwork Coaching helped me implement have completely transformed how I run my real estate business. My team is more efficient, our clients are happier, and our revenue has increased by 35% in just four months."
                  </p>
                  
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                      alt="Client portrait" 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-medium text-neutral-900">Rebecca Williams</p>
                      <p className="text-sm text-primary">Luxury Property Specialist, Miami</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-primary/5 relative">
                <div className="text-5xl text-primary/20 absolute top-4 left-4">"</div>
                <div className="relative z-10">
                  <p className="text-neutral-700 italic mb-6 leading-relaxed">
                    "I was skeptical about coaching at first, but the ROI has been incredible. The strategies I learned through Clockwork Coaching helped me double my transactions in just one year while actually working fewer hours."
                  </p>
                  
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                      alt="Client portrait" 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-medium text-neutral-900">Michael Chen</p>
                      <p className="text-sm text-primary">Real Estate Team Leader, Seattle</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-primary/5 relative">
                <div className="text-5xl text-primary/20 absolute top-4 left-4">"</div>
                <div className="relative z-10">
                  <p className="text-neutral-700 italic mb-6 leading-relaxed">
                    "The mastermind group has been invaluable for my business growth. Connecting with other ambitious agents and getting regular guidance from the Clockwork coaches has elevated my business to a level I never thought possible."
                  </p>
                  
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                      alt="Client portrait" 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-medium text-neutral-900">Amanda Rodriguez</p>
                      <p className="text-sm text-primary">Broker/Owner, Chicago</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-primary/5 relative">
                <div className="text-5xl text-primary/20 absolute top-4 left-4">"</div>
                <div className="relative z-10">
                  <p className="text-neutral-700 italic mb-6 leading-relaxed">
                    "The personalized coaching program was exactly what I needed to scale my business. The accountability and strategic guidance helped me overcome plateaus and reach new heights in my real estate career."
                  </p>
                  
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                      alt="Client portrait" 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-medium text-neutral-900">James Peterson</p>
                      <p className="text-sm text-primary">Commercial Real Estate Specialist, Dallas</p>
                    </div>
                  </div>
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

export default Testimonials;