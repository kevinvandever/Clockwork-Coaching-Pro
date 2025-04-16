
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CallBookingSection from '@/components/sections/CallBookingSection';
import CookieConsent from '@/components/shared/CookieConsent';

const About: React.FC = () => {
  React.useEffect(() => {
    document.title = 'About Us | Clockwork Coaching';
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <div className="pt-24 bg-primary/5">
          <div className="elegant-container py-12 text-center">
            <h1 className="elegant-heading text-neutral-900 mb-6">About Us</h1>
            <div className="w-20 h-0.5 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Learn more about how Clockwork Coaching can help transform your real estate business.
            </p>
          </div>
        </div>

        {/* Co-Founders Hero Section */}
        <section className="elegant-section bg-white">
          <div className="elegant-container">
            <div className="text-center mb-12">
              <p className="elegant-subheading text-primary">MEET THE FOUNDERS</p>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-neutral-900">
                The Team Behind Clockwork Coaching
              </h2>
              <div className="w-20 h-0.5 bg-primary mx-auto mb-8"></div>
              <p className="text-neutral-700 max-w-3xl mx-auto">
                We combine decades of real estate experience with cutting-edge technology expertise to help established agents adapt and thrive in today's rapidly changing market.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Joe Quiros */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
                <img 
                  src="/images/32677DBA-A5C7-49EE-9E59-47CD3EDFFE0B_1_201_a.jpeg"
                  alt="Joe Quiros - Co-founder"
                  className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform transition-transform duration-300">
                  <h3 className="font-display text-3xl font-medium text-white mb-2">
                    Joe Quiros
                  </h3>
                  <p className="text-primary font-medium mb-4">Co-founder & Real Estate Expert</p>
                  <p className="text-white mb-6 leading-relaxed opacity-90">
                    With over 15 years in real estate and technology, a former Real Trends top agent, an original 100 Compass agent, and a multi-year $1,000,000+ GCI Team Lead, Joe specializes in helping realtors implement predictable revenue to their business.
                  </p>
                  <div className="flex gap-4">
                    <a href="mailto:JoeQ@clockworkcoaching.club" className="text-white hover:text-primary transition-colors flex items-center gap-2">
                      <i className="fas fa-envelope text-xl"></i>
                      <span className="text-sm">JoeQ@clockworkcoaching.club</span>
                    </a>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <a href="#" className="text-white hover:text-primary transition-colors">
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a href="#" className="text-white hover:text-primary transition-colors">
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Kevin Vandever */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
                <img 
                  src="/images/65A38D1C-91C6-4936-B507-D4207B334B31_1_105_c.jpeg"
                  alt="Kevin Vandever - Co-founder"
                  className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform transition-transform duration-300">
                  <h3 className="font-display text-3xl font-medium text-white mb-2">
                    Kevin Vandever
                  </h3>
                  <p className="text-primary font-medium mb-4">Co-founder & Technology Strategist</p>
                  <p className="text-white mb-6 leading-relaxed opacity-90">
                    A seasoned technology leader with extensive experience mentoring teams and implementing AI solutions, Kevin has led multiple successful technology transformations. With deep expertise in Generative AI and automation, he specializes in helping real estate professionals leverage cutting-edge technology to streamline operations and achieve exponential growth.
                  </p>
                  <div className="flex gap-4">
                    <a href="mailto:KV@clockworkcoaching.club" className="text-white hover:text-primary transition-colors flex items-center gap-2">
                      <i className="fas fa-envelope text-xl"></i>
                      <span className="text-sm">KV@clockworkcoaching.club</span>
                    </a>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <a href="#" className="text-white hover:text-primary transition-colors">
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a href="#" className="text-white hover:text-primary transition-colors">
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise Section */}
        <section className="elegant-section bg-primary/5">
          <div className="elegant-container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="elegant-subheading text-neutral-500">OUR EXPERTISE</p>
                <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-neutral-900">
                  Real Estate Business Growth Specialists
                </h2>
                <div className="w-20 h-0.5 bg-primary mb-8"></div>

                <p className="text-neutral-700 mb-5 leading-relaxed">
                  With years of experience in the real estate industry, our team brings specialized knowledge and proven strategies to help agents and brokers scale their businesses efficiently.
                </p>

                <p className="text-neutral-700 mb-5 leading-relaxed">
                  We understand the unique challenges faced by real estate professionals in today's competitive market. Our coaching programs are designed to address these specific pain points and create sustainable growth.
                </p>

                <p className="text-neutral-700 mb-5 leading-relaxed">
                  By combining industry expertise with innovative business strategies and technologies, we provide comprehensive solutions that deliver measurable results for your real estate business.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary/10 -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Real estate coaching session" 
                  className="w-full object-cover relative z-10 rounded-lg shadow-lg"
                />
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/20 -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="elegant-section bg-white">
          <div className="elegant-container">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <p className="elegant-subheading text-primary">OUR APPROACH</p>
                <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-neutral-900">
                  How We're Different
                </h2>
                <div className="w-20 h-0.5 bg-primary mb-8"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Coaching session" 
                  className="w-full h-auto rounded-lg shadow-lg mb-8"
                />
              </div>
              
              <div className="md:col-span-3">
                <div className="grid gap-8">
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <h3 className="font-display text-xl font-medium mb-3 text-neutral-900">
                      <i className="fas fa-check-circle text-primary mr-2"></i> Personalized Strategy
                    </h3>
                    <p className="text-neutral-700 leading-relaxed">
                      We don't believe in one-size-fits-all solutions. Our coaching begins with a thorough assessment of your specific business, identifying your unique strengths and opportunities for growth.
                    </p>
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <h3 className="font-display text-xl font-medium mb-3 text-neutral-900">
                      <i className="fas fa-check-circle text-primary mr-2"></i> Technology-Forward Approach
                    </h3>
                    <p className="text-neutral-700 leading-relaxed">
                      We help you navigate the rapidly evolving technological landscape, focusing on practical tools and systems that will actually move the needle for your business.
                    </p>
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <h3 className="font-display text-xl font-medium mb-3 text-neutral-900">
                      <i className="fas fa-check-circle text-primary mr-2"></i> Implementation Support
                    </h3>
                    <p className="text-neutral-700 leading-relaxed">
                      Unlike many coaching programs that stop at advice, we work alongside you to implement changes, ensuring you see real results and lasting transformation in your business.
                    </p>
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <h3 className="font-display text-xl font-medium mb-3 text-neutral-900">
                      <i className="fas fa-check-circle text-primary mr-2"></i> Community & Accountability
                    </h3>
                    <p className="text-neutral-700 leading-relaxed">
                      Join a community of like-minded real estate professionals who are committed to growth. Our coaching includes accountability mechanisms to keep you on track toward your goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CallBookingSection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default About;
