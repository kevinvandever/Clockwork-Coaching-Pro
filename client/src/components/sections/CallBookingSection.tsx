import React, { useState } from 'react';
import { Link } from 'wouter';
import { useNavigation } from '@/hooks/useNavigation';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { toast } from '@/hooks/use-toast'; // Assuming this hook exists

const CallBookingSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const scrollToTop = useScrollToTop();

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
          <span className="px-4 py-1 bg-primary/20 text-primary font-medium rounded-full text-sm inline-block mb-3">YOUR TRANSFORMATION STARTS HERE</span>
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4 gradient-text">
            Ready to Transform Your Real Estate Business?
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto mt-6">
            Book a free 30-minute strategy call with one of our co-founders. We'll analyze your current situation and provide actionable steps to improve your systems and increase your revenue.
          </p>
        </div>

        <div className="text-center">
          <Link 
            to="/contact" 
            onClick={scrollToTop}
            className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-md text-lg inline-block transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule Your Free Call
          </Link>
          <p className="text-sm text-neutral-500 mt-4">No obligations. Limited spots available each week.</p>
        </div>
      </div>
    </section>
  );
};

export default CallBookingSection;