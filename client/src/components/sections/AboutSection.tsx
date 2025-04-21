import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-8 bg-white relative overflow-hidden">
      <div className="elegant-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="fade-in">
            <h2 className="text-2xl md:text-3xl font-display font-medium mb-6 text-neutral-900">
              Transform Your Real Estate Business
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/images/32677DBA-A5C7-49EE-9E59-47CD3EDFFE0B_1_201_a.jpeg"
                  alt="Joe Quiros"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/images/65A38D1C-91C6-4936-B507-D4207B334B31_1_105_c.jpeg"
                  alt="Kevin Vandever"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            <p className="text-neutral-700 text-lg">
              Leverage modern systems while maintaining the personal touch that built your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;