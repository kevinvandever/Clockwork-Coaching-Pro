import React from 'react';
import { useNavigation } from '@/hooks/useNavigation';
import { Link } from 'wouter';
import { ABTest, useAbTestConversion } from '@/components/AbTest';

const HeroSection: React.FC = () => {
  const { scrollToSection } = useNavigation();

  return (
    <>
      <section id="hero" className="relative h-[80vh] flex items-center bg-white">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-40"></div>
        </div>

        <div className="elegant-container relative z-10 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <ABTest 
              id="hero-heading" 
              variants={[
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium leading-[1.1] mb-6 text-neutral-900">
                  Don't Get Left Behind
                </h1>,
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium leading-[1.1] mb-6 text-neutral-900">
                  Future-Proof Your Business Today
                </h1>
              ]}
              onVariantSelected={(variant) => {
                console.log(`Hero heading variant ${variant} shown to user`);
              }}
            />

            <p className="elegant-subheading text-neutral-800">
              FUTURE-PROOF YOUR BUSINESS WITH DONE-FOR-YOU AI SYSTEMS AND PERSONALIZED 1:1 COACHING
            </p>

            <Link 
              href="/contact"
              className="elegant-button mt-8 inline-block"
              onClick={() => {
                // Create a function that will track the conversion
                const trackConversion = useAbTestConversion('hero-heading');
                // Track the click conversion
                trackConversion('cta_click');
              }}
            >
              BOOK YOUR FREE DISCOVERY CALL
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[hsl(38,75%,58%)] py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-display text-xl font-medium text-white uppercase tracking-wider">Curated Tools</h3>
            </div>

            <div className="text-center">
              <h3 className="font-display text-xl font-medium text-white uppercase tracking-wider">Customized Coaching</h3>
            </div>

            <div className="text-center">
              <h3 className="font-display text-xl font-medium text-white uppercase tracking-wider">Consistent Revenue</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;