import React from 'react';
import { useNavigation } from '@/hooks/useNavigation';

const AboutSection: React.FC = () => {
  const { scrollToSection } = useNavigation();

  return (
    <section id="about" className="elegant-section bg-white">
      <div className="elegant-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="elegant-subheading text-neutral-500">HERE TO HELP</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-neutral-900">
              ✨ You've Worked Too Hard to Fall Behind Now.
            </h2>
            <div className="w-20 h-0.5 bg-primary mb-8"></div>
            
            <p className="text-neutral-700 mb-5 leading-relaxed">
              You've put in the time. You've built your business through hard work and real connections. You've seen new trends come and go—some were helpful, most weren't.
            </p>
            
            <p className="text-neutral-700 mb-5 leading-relaxed">
              And you handled it all just fine. But this feels different. Things are changing faster than ever. And there's something new: AI. Real tools that other agents are using to help more clients, stay in touch, and run their businesses easier.
            </p>
            
            <p className="text-neutral-700 mb-5 leading-relaxed">
              The top agents aren't just working harder—they're working smarter.
            </p>
            
            <p className="text-neutral-700 mb-5 leading-relaxed">
              That's why we started Clockwork Coaching. Not to change how you do everything, but to help you keep up with a market that won't slow down.
            </p>
            
            <p className="text-neutral-700 mb-5 leading-relaxed">
              We'll show you the right tools, teach them fast, and make sure you stay in control of the business you've worked so hard to build.
            </p>
            
            <p className="text-neutral-700 mb-8 leading-relaxed">
              This is about making sure you don't get left behind.
            </p>
            
            <Button 
              onClick={() => scrollToSection('book-call')}
              variant="cta"
            >
              LEARN HOW WE CAN HELP YOU
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary/10 -z-10"></div>
            <img 
              src="/images/65A38D1C-91C6-4936-B507-D4207B334B31_1_105_c.jpeg" 
              alt="Professional real estate coach" 
              className="w-full object-cover relative z-10"
            />
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
