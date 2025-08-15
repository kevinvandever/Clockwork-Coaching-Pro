import React from 'react';
import { Link } from 'wouter';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-4 md:py-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-24 -translate-y-24 blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-x-20 translate-y-1/3 blur-xl"></div>

      <div className="elegant-container relative z-10">
        <div className="text-center fade-in">
          <p className="elegant-subheading text-primary uppercase tracking-wider">Meet the Founders</p>
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
            The Team Behind Clockwork Coaching
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-6"></div>
          <p className="text-neutral-600 mb-12 max-w-3xl mx-auto">
            We help real estate professionals leverage technology to capture more opportunities, build predictable pipelines and reclaim time.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Joe Quiros Card */}
            <div className="bg-neutral-900 text-white rounded-lg overflow-hidden shadow-xl">
              <div className="h-80 bg-gray-200 overflow-hidden">
                <img 
                  src="/images/32677DBA-A5C7-49EE-9E59-47CD3EDFFE0B_1_201_a.jpeg"
                  alt="Joe Quiros"
                  className="w-full h-full object-cover object-top grayscale"
                />
              </div>
              <div className="p-8 text-left">
                <h3 className="text-2xl font-display font-medium mb-1">Joe Quiros</h3>
                <p className="text-primary mb-4">Co-founder & Real Estate Expert</p>
                <p className="text-sm leading-relaxed mb-4">
                  With over 15 years in real estate and technology, a former Real Trends top 
                  agent, an original 100 Compass agent, and a multi-year $1,000,000+ GCI 
                  Team Lead, Joe specializes in helping realtors implement predictable 
                  business in their business.
                </p>
                <a href="mailto:JoeQ@clockworkcoaching.club" className="text-primary text-sm hover:text-primary/80 inline-flex items-center gap-2">
                  <i className="far fa-envelope"></i>
                  JoeQ@clockworkcoaching.club
                </a>
              </div>
            </div>

            {/* Kevin Vandever Card */}
            <div className="bg-neutral-900 text-white rounded-lg overflow-hidden shadow-xl">
              <div className="h-80 bg-gray-200 overflow-hidden">
                <img 
                  src="/images/65A38D1C-91C6-4936-B507-D4207B334B31_1_105_c.jpeg"
                  alt="Kevin Vandever"
                  className="w-full h-full object-cover object-top grayscale"
                />
              </div>
              <div className="p-8 text-left">
                <h3 className="text-2xl font-display font-medium mb-1">Kevin Vandever</h3>
                <p className="text-primary mb-4">Co-founder & Technology Strategist</p>
                <p className="text-sm leading-relaxed mb-4">
                  A seasoned technology leader with extensive experience mentoring teams 
                  and implementing AI solutions, Kevin specializes in helping professionals 
                  leverage cutting-edge technology to streamline operations and achieve 
                  exponential growth.
                </p>
                <a href="mailto:KV@clockworkcoaching.club" className="text-primary text-sm hover:text-primary/80 inline-flex items-center gap-2">
                  <i className="far fa-envelope"></i>
                  KV@clockworkcoaching.club
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;