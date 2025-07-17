import React from 'react';
import { Link } from 'wouter';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-8 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-24 -translate-y-24 blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-x-20 translate-y-1/3 blur-xl"></div>

      <div className="elegant-container relative z-10">
        <div className="text-center fade-in">
          <p className="elegant-subheading text-primary">JOE AND KEVIN ARE HERE TO HELP</p>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/images/32677DBA-A5C7-49EE-9E59-47CD3EDFFE0B_1_201_a.jpeg"
                alt="Joe Quiros"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/images/65A38D1C-91C6-4936-B507-D4207B334B31_1_105_c.jpeg"
                alt="Kevin Vandever"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;