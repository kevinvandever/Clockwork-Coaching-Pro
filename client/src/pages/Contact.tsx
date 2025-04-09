import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import AssessmentSection from '@/components/sections/AssessmentSection';
import CallBookingSection from '@/components/sections/CallBookingSection';
import CookieConsent from '@/components/shared/CookieConsent';
import { COMPANY_EMAIL, COMPANY_PHONE } from '@/lib/constants';

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
              Get in touch with our team to learn how we can help you grow your real estate business.
            </p>
          </div>
        </div>
        
        <div className="elegant-section bg-white">
          <div className="elegant-container">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="elegant-subheading text-neutral-500">GET IN TOUCH</p>
                <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-neutral-900">
                  We're Here to Help
                </h2>
                <div className="w-20 h-0.5 bg-primary mb-8"></div>
                
                <p className="text-neutral-700 mb-8 leading-relaxed">
                  Have questions about our coaching programs or want to learn more about how we can help you grow your real estate business? Feel free to reach out to us directly or schedule a discovery call.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900 mb-1">Email Us</p>
                      <p className="text-neutral-700">{COMPANY_EMAIL}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <i className="fas fa-phone text-primary"></i>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900 mb-1">Call Us</p>
                      <p className="text-neutral-700">{COMPANY_PHONE}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <i className="fas fa-calendar-alt text-primary"></i>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900 mb-1">Book a Call</p>
                      <p className="text-neutral-700">Schedule your free 30-minute discovery call</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a href="#" className="bg-primary/10 text-primary p-3 rounded-full hover:bg-primary/20 transition duration-300">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="bg-primary/10 text-primary p-3 rounded-full hover:bg-primary/20 transition duration-300">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="bg-primary/10 text-primary p-3 rounded-full hover:bg-primary/20 transition duration-300">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="bg-primary/10 text-primary p-3 rounded-full hover:bg-primary/20 transition duration-300">
                    <i className="fab fa-youtube"></i>
                  </a>
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
                  
                  <button
                    type="submit"
                    className="elegant-button w-full"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <AssessmentSection />
        <CallBookingSection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default Contact;