import React from 'react';
import { Button } from '@/components/ui/button';

const CallBookingSection: React.FC = () => {
  return (
    <section id="book-call" className="py-16 px-4 md:px-8 bg-primary text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Transform Your Real Estate Business?
          </h2>
          <p className="text-xl mb-8">
            Schedule your free 30-minute strategy session to discuss your goals and challenges, and discover how our coaching can help you achieve breakthrough results.
          </p>
          <a 
            href="https://calendly.com/clockworkcoaching/strategy-session" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary px-8 py-4 rounded-md font-bold text-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Book Your Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallBookingSection;
