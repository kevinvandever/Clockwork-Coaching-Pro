import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/shared/CookieConsent';

const calendarUrl = 'https://calendar.app.google/HAGdU8iJDvstoJmD6';

const Booking: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Book Your Free Discovery Call | Clockwork Coaching';
  }, []);

  const handleScheduleClick = () => {
    window.open(calendarUrl, '_blank');
  };

  return (
    <>
      <Navigation />
      <main>
        <div className="pt-24 bg-primary/5">
          <div className="elegant-container py-12 text-center">
            <h1 className="elegant-heading text-neutral-900 mb-6">Schedule a Personal Call with a Co-Founder</h1>
            <div className="w-20 h-0.5 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-12">
              Take advantage of this unique opportunity to speak directly with one of our co-founders about how Clockwork Coaching can transform your real estate business.
            </p>
            <a 
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="elegant-button inline-block text-lg px-8 py-4 mb-8"
            >
              Book Your Free Discovery Call
            </a>
          </div>
        </div>

        <div className="elegant-section bg-white pt-6">
          <div className="elegant-container">
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="p-8 border border-primary/20 bg-white shadow-sm hover:shadow-md transition duration-300">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Joe Quiros" 
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-display text-2xl font-medium text-neutral-900 mb-2">
                      Joe Quiros
                    </h3>
                    <p className="text-primary mb-4">Co-founder & Real Estate Expert</p>
                    <p className="text-neutral-700 mb-6 leading-relaxed">
                      With over 15 years in real estate and technology, a former Real Trends top agent, an original 100 Compass agent, and a multi-year $1,000,000+ GCI Team Lead, Joe specializes in helping realtors implement predictable revenue to their business.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 border border-primary/20 bg-white shadow-sm hover:shadow-md transition duration-300">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <img 
                    src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Kevin Vandever" 
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-display text-2xl font-medium text-neutral-900 mb-2">
                      Kevin Vandever
                    </h3>
                    <p className="text-primary mb-4">Co-founder & Technology Strategist</p>
                    <p className="text-neutral-700 mb-6 leading-relaxed">
                      A technology expert with a background in automation and AI, Kevin helps real estate professionals leverage technology to streamline operations and increase profitability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="elegant-section bg-primary/5">
          <div className="elegant-container">
            <p className="elegant-subheading text-neutral-500 text-center">WHAT TO EXPECT</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-center">
              During Your Discovery Call
            </h2>
            <div className="w-20 h-0.5 bg-primary mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-white p-5 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-user-friends text-3xl text-primary"></i>
                </div>
                <h3 className="text-xl font-display font-medium mb-3">Personal Introduction</h3>
                <p className="text-neutral-700">
                  Get to know our founders and learn about their expertise in real estate business coaching and technology solutions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-5 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-search-plus text-3xl text-primary"></i>
                </div>
                <h3 className="text-xl font-display font-medium mb-3">Business Assessment</h3>
                <p className="text-neutral-700">
                  We'll discuss your current business, challenges, and goals to identify areas for improvement and growth opportunities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-5 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-road text-3xl text-primary"></i>
                </div>
                <h3 className="text-xl font-display font-medium mb-3">Path Forward</h3>
                <p className="text-neutral-700">
                  Discover how our coaching programs can specifically help your real estate business and what the next steps would be.
                </p>
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

export default Booking;