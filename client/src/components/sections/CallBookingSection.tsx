import React, { useState } from 'react';
import { Link } from 'wouter';
import { toast } from '@/hooks/use-toast'; // Assuming this hook exists

const CallBookingSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (type: 'notify') => {
    try {
      const response = await fetch('/api/booking-leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          type: `home_${type}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "We've received your request. We'll be in touch soon!",
        });
        setEmail('');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="book-call" className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary/10 to-accent/5 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12 scale-in">
          <span className="px-4 py-1 bg-primary/20 text-primary font-medium rounded-full text-sm inline-block mb-3">TAKE THE FIRST STEP</span>
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4 gradient-text">
            Book a Strategy Call
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto mt-6">
            Let's chat about your business goals and create a plan for moving forward. No pressure, just practical next steps.
          </p>
        </div>

        <div className="text-center">
          <Link 
            to="/contact" 
            className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-md text-lg inline-block transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get in Touch With Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallBookingSection;