import React from 'react';
import { useNavigation } from '@/hooks/useNavigation';

const ServicesSection: React.FC = () => {
  const { scrollToSection } = useNavigation();

  return (
    <section id="services" className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            How We Transform Your Business
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Free AI Automation Audit */}
          <div className="bg-primary/5 p-8 rounded-lg hover-card">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-search text-2xl text-primary"></i>
              </div>
              <h3 className="text-2xl font-display font-medium text-neutral-900 mb-4">
                Free AI Automation Audit
              </h3>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-3"></i>
                <span>We analyze your entire workflow</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-3"></i>
                <span>Identify your biggest time-wasters</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-3"></i>
                <span>Map out which tasks to automate first</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-3"></i>
                <span>Deliver a custom automation roadmap</span>
              </li>
            </ul>

            <div className="text-center mb-6">
              <p className="text-sm text-neutral-600 mb-2">Limited availability</p>
              <p className="text-lg font-medium text-neutral-900">
                (normally $1,500)
              </p>
            </div>

            <div className="mt-auto">
              <button
                onClick={() => scrollToSection('book-call')}
                className="elegant-button w-full"
              >
                Apply for Your Free Audit
              </button>
            </div>
          </div>

          {/* 4-Week Implementation Sprint */}
          <div className="bg-neutral-50 p-8 rounded-lg hover-card">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-rocket text-2xl text-primary"></i>
              </div>
              <h3 className="text-2xl font-display font-medium text-neutral-900 mb-4">
                4-Week Implementation Sprint
              </h3>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-3"></i>
                <span>We build and connect your automations</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-3"></i>
                <span>Create custom workflows for your business</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-3"></i>
                <span>Full training and documentation included</span>
              </li>
            </ul>

            <div className="text-center mb-6">
              <p className="text-lg font-medium text-neutral-900">
                Starting at $2,500
              </p>
            </div>

            <div className="mt-auto">
              <button
                onClick={() => scrollToSection('book-call')}
                className="elegant-button w-full bg-neutral-700 hover:bg-neutral-600"
              >
                See Implementation Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;