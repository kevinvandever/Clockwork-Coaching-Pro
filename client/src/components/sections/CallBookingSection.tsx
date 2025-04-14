import React from 'react';
import { Link } from 'wouter';

const CallBookingSection: React.FC = () => {
  return (
    <section id="book-call" className="elegant-section bg-primary/10">
      <div className="elegant-container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="elegant-subheading text-neutral-500">TAKE THE NEXT STEP</p>
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-neutral-900">
            Ready to Transform Your Real Estate Business?
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-8"></div>
          
          <p className="text-neutral-700 mb-8 max-w-2xl mx-auto">
            Schedule your free 30-minute discovery call to discuss your goals and challenges, and discover how our coaching can help you achieve breakthrough results and scale your business efficiently.
          </p>
          
          <Link 
            href="/contact"
            className="elegant-button inline-block"
          >
            Book Your Free Discovery Call
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallBookingSection;
