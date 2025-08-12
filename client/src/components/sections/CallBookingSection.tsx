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
    <section id="book-call" className="py-16 md:py-24 bg-gray-50">
      <div className="elegant-container">
        <div className="max-w-4xl mx-auto">
          {/* Main Content - Book Your Free Discovery Call */}
          <div className="text-center">
            <p className="elegant-subheading text-primary">SPEAK WITH OUR CO-FOUNDERS</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-neutral-900">
              Book Your Free Discovery Call
            </h2>
            <div className="w-20 h-0.5 bg-primary mb-6 mx-auto"></div>

            <p className="text-neutral-700 mb-8 leading-relaxed">
              Ready to transform your real estate business with AI automation? 
              Get your free audit and discover exactly which systems you need to implement first.
            </p>

          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center mb-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="/images/32677DBA-A5C7-49EE-9E59-47CD3EDFFE0B_1_201_a.jpeg"
                    alt="Joe Quiros"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-lg font-medium text-neutral-900">Joe Quiros</h3>
                <p className="text-sm text-primary">Co-founder & Real Estate Expert</p>
                <a href="mailto:JoeQ@clockworkcoaching.club" className="text-primary hover:text-primary/80 text-sm">
                  JoeQ@clockworkcoaching.club
                </a>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="/images/65A38D1C-91C6-4936-B507-D4207B334B31_1_105_c.jpeg"
                    alt="Kevin Vandever"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-lg font-medium text-neutral-900">Kevin Vandever</h3>
                <p className="text-sm text-primary">Co-founder & Technology Strategist</p>
                <a href="mailto:KV@clockworkcoaching.club" className="text-primary hover:text-primary/80 text-sm">
                  KV@clockworkcoaching.club
                </a>
              </div>
            </div>

            <a
              href="https://calendar.app.google/wYppJc52fLw3HYy36"
              target="_blank"
              rel="noopener noreferrer"
              className="elegant-button inline-block"
            >
              Get Your Free Automation Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallBookingSection;