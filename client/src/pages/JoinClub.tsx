
import React, { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/shared/CookieConsent';
import { useToast } from '@/components/ui/use-toast';

const JoinClub: React.FC = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (type: 'notify' | 'message') => {
    try {
      const response = await fetch('/api/booking-leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          type: `club_${type}`,
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
    <>
      <Navigation />
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-24">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">
          Join the Club
        </h1>
        <div className="text-center max-w-2xl mx-auto px-4">
          <p className="text-xl text-neutral-700 mb-8">
            Coming Soon! Our exclusive membership platform is under development.
          </p>
          
          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-display font-medium mb-4">
              Stay Updated
            </h2>
            <div className="max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded border mb-4"
              />
              <div className="space-y-4">
                <button
                  onClick={() => handleSubmit('notify')}
                  className="elegant-button w-full"
                >
                  Get Notified When We Launch
                </button>
                <button
                  onClick={() => handleSubmit('message')}
                  className="elegant-button w-full"
                >
                  Send Me More Information
                </button>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg">
            <h2 className="text-2xl font-display font-medium mb-4">
              What to Expect
            </h2>
            <ul className="space-y-4 text-left">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-primary mr-3"></i>
                <span>Exclusive member resources and tools</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-primary mr-3"></i>
                <span>Priority access to coaching sessions</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-primary mr-3"></i>
                <span>Community networking opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default JoinClub;
