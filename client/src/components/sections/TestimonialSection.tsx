import React from 'react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            Here's what our clients are saying
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                alt="Sarah Johnson" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div>
              <p className="text-lg italic text-neutral-700 mb-6">
                "Working with Elite Realty Coaching transformed my business. I went from constantly putting out fires to having systems that run smoothly. My sales increased by 47% in the first six months, and I finally have time to focus on growth instead of just surviving. The investment has paid for itself many times over."
              </p>
              <div>
                <p className="font-semibold text-neutral-900">Sarah Johnson</p>
                <p className="text-accent">Luxury Property Specialist, San Francisco</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
