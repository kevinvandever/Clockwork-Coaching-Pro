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
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Book Your Free Discovery Call */}
          <div className="text-center md:text-left">
            <p className="elegant-subheading text-primary">SPEAK WITH OUR CO-FOUNDERS</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-neutral-900">
              Book Your Free Discovery Call
            </h2>
            <div className="w-20 h-0.5 bg-primary mb-6 mx-auto md:mx-0"></div>

            <p className="text-neutral-700 mb-8 leading-relaxed">
              Ready to transform your real estate business with AI automation? 
              Get your free audit and discover exactly which systems you need to implement first.
            </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center md:justify-start mb-8">
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
              </div>
            </div>

            <a
              href="https://calendly.com/clockworkcoaching"
              target="_blank"
              rel="noopener noreferrer"
              className="elegant-button inline-block"
            >
              Get Your Free Automation Audit
            </a>
          </div>

          {/* Right Column - Get in Touch */}
          <div className="text-center md:text-left">
            <div className="text-center mb-16">
              <p className="text-lg md:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                We help real estate professionals leverage technology to capture more opportunities, build predictable pipelines and reclaim time.
              </p>

              {/* Team Photos */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-12">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white/20">
                    <img 
                      src="/images/Joe-Quiros-(cropped 300x300 square, saved for print)-JTG_0661.jpeg" 
                      alt="Joe Quiros"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Joe Quiros</h3>
                  <p className="text-white/80 mb-3">Real Estate Coach & Strategist</p>
                  <a href="mailto:JoeQ@clockworkcoaching.club" className="text-primary hover:text-primary/80 text-sm">
                    JoeQ@clockworkcoaching.club
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white/20">
                    <img 
                      src="/images/9B8D29A3-8C27-4ADB-838D-42D9CB42764A_1_105_c.jpeg" 
                      alt="Kevin Villalobos"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Kevin Villalobos</h3>
                  <p className="text-white/80 mb-3">Automation & Systems Expert</p>
                  <a href="mailto:KV@clockworkcoaching.club" className="text-primary hover:text-primary/80 text-sm">
                    KV@clockworkcoaching.club
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-start">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <p className="font-medium text-white">Contact Us Directly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallBookingSection;