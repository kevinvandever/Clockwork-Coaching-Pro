
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/shared/CookieConsent';
import { COMPANY_EMAIL, COMPANY_PHONE } from '@/lib/constants';

const calendarUrl = 'https://calendar.app.google/A7t5PwbYfgL6cZbJ8';

const Contact: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Contact Us | Clockwork Coaching';
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <div className="pt-24 bg-primary/5">
          <div className="elegant-container py-12 text-center">
            <h1 className="elegant-heading text-neutral-900 mb-6">Contact Us</h1>
            <div className="w-20 h-0.5 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Schedule a personal call with our co-founders or reach out through other channels - we're here to help you transform your real estate business.
            </p>
          </div>
        </div>

        <div className="elegant-section bg-white">
          <div className="elegant-container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="elegant-subheading text-neutral-500">SPEAK WITH OUR CO-FOUNDERS</p>
                <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-neutral-900">
                  Book Your Free Discovery Call
                </h2>
                <div className="w-20 h-0.5 bg-primary mb-8"></div>

                <p className="text-neutral-700 mb-8 leading-relaxed">
                  Take advantage of this unique opportunity to speak directly with one of our co-founders about how Clockwork Coaching can transform your real estate business.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="p-6 border border-primary/20 bg-white shadow-sm">
                    <div className="flex flex-col items-start gap-4">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                        alt="Joe Quiros" 
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-display text-xl font-medium text-neutral-900 mb-1">
                          Joe Quiros
                        </h3>
                        <p className="text-primary mb-2">Co-founder & Real Estate Expert</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 border border-primary/20 bg-white shadow-sm">
                    <div className="flex flex-col items-start gap-4">
                      <img 
                        src="/images/65A38D1C-91C6-4936-B507-D4207B334B31_1_105_c.jpeg" 
                        alt="Kevin Vandever" 
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-display text-xl font-medium text-neutral-900 mb-1">
                          Kevin Vandever
                        </h3>
                        <p className="text-primary mb-2">Co-founder & Technology Strategist</p>
                      </div>
                    </div>
                  </div>
                </div>

                <a 
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="elegant-button inline-block text-lg px-8 py-4 mb-8 w-full text-center"
                >
                  Schedule Your Free Discovery Call
                </a>
              </div>
              
              <div>
                <p className="elegant-subheading text-neutral-500">OTHER WAYS TO REACH US</p>
                <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-neutral-900">
                  Get in Touch
                </h2>
                <div className="w-20 h-0.5 bg-primary mb-8"></div>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      <i className="fas fa-envelope text-primary text-lg"></i>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900 mb-1">Email Us</p>
                      <p className="text-neutral-700">{COMPANY_EMAIL}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      <i className="fas fa-phone text-primary text-lg"></i>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900 mb-1">Call Us</p>
                      <p className="text-neutral-700">{COMPANY_PHONE}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-8">
                  <h3 className="font-display text-2xl font-medium text-neutral-900 mb-6">
                    Send Us a Message
                  </h3>
                  
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your email address"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full p-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full p-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <Button
                      type="submit"
                      variant="cta"
                      className="w-full"
                    >
                      SEND MESSAGE
                    </Button>
                  </form>
                </div>
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

export default Contact;
