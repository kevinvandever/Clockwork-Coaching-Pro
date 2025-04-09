import React, { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/shared/CookieConsent';

type Coach = {
  id: string;
  name: string;
  title: string;
  description: string;
  imgUrl: string;
  calendarUrl: string;
};

const coaches: Coach[] = [
  {
    id: 'joe',
    name: 'Joe Quiros',
    title: 'Co-founder & Real Estate Expert',
    description: 'With over 15 years in real estate and having built a successful brokerage, Joe specializes in helping agents scale their business and implement efficient systems.',
    imgUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    calendarUrl: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3NwoD69pRSmGTVjXm7huyWhdT7XBfZ8GhDzLf2XZ5NVhU_0WjhCEzOUELwNg9TzlSLKXBXpFgr?gv=true'
  },
  {
    id: 'kevin',
    name: 'Kevin Vandever',
    title: 'Co-founder & Technology Strategist',
    description: 'A technology expert with a background in automation and AI, Kevin helps real estate professionals leverage technology to streamline operations and increase profitability.',
    imgUrl: 'https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    calendarUrl: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3NwoD69pRSmGTVjXm7huyWhdT7XBfZ8GhDzLf2XZ5NVhU_0WjhCEzOUELwNg9TzlSLKXBXpFgr?gv=true'
  }
];

const Booking: React.FC = () => {
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);

  React.useEffect(() => {
    document.title = 'Book Your Free Discovery Call | Clockwork Coaching';
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <div className="pt-24 bg-primary/5">
          <div className="elegant-container py-12 text-center">
            <h1 className="elegant-heading text-neutral-900 mb-6">Book Your Free Discovery Call</h1>
            <div className="w-20 h-0.5 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Schedule a 30-minute discovery call with one of our co-founders to explore how Clockwork Coaching can help your real estate business.
            </p>
          </div>
        </div>

        <div className="elegant-section bg-white">
          <div className="elegant-container">
            {!selectedCoach ? (
              <>
                <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-center">
                  Choose Your Coach
                </h2>
                <div className="w-20 h-0.5 bg-primary mx-auto mb-12"></div>
                
                <div className="grid md:grid-cols-2 gap-12">
                  {coaches.map((coach) => (
                    <div 
                      key={coach.id} 
                      className="p-8 border border-primary/20 bg-primary/5 hover:shadow-md transition duration-300 cursor-pointer"
                      onClick={() => setSelectedCoach(coach)}
                    >
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <img 
                          src={coach.imgUrl} 
                          alt={coach.name} 
                          className="w-32 h-32 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-display text-2xl font-medium text-neutral-900 mb-2">
                            {coach.name}
                          </h3>
                          <p className="text-primary mb-4">{coach.title}</p>
                          <p className="text-neutral-700 mb-6 leading-relaxed">
                            {coach.description}
                          </p>
                          <button 
                            className="elegant-button"
                            onClick={() => setSelectedCoach(coach)}
                          >
                            SCHEDULE WITH {coach.name.split(' ')[0].toUpperCase()}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                  <button 
                    onClick={() => setSelectedCoach(null)}
                    className="flex items-center text-primary hover:text-primary/80 transition"
                  >
                    <i className="fas fa-arrow-left mr-2"></i> Back to Coach Selection
                  </button>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-neutral-900">
                      Scheduling with {selectedCoach.name}
                    </h3>
                  </div>
                </div>
                
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src={selectedCoach.calendarUrl} 
                    className="w-full h-[800px] border-0"
                    title={`${selectedCoach.name}'s Calendar`}
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="elegant-section bg-primary/5">
          <div className="elegant-container">
            <p className="elegant-subheading text-neutral-500 text-center">WHAT TO EXPECT</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-center">
              During Your Discovery Call
            </h2>
            <div className="w-20 h-0.5 bg-primary mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-white p-5 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-user-friends text-3xl text-primary"></i>
                </div>
                <h3 className="text-xl font-display font-medium mb-3">Personal Introduction</h3>
                <p className="text-neutral-700">
                  Get to know our founders and learn about their expertise in real estate business coaching and technology solutions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-5 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-search-plus text-3xl text-primary"></i>
                </div>
                <h3 className="text-xl font-display font-medium mb-3">Business Assessment</h3>
                <p className="text-neutral-700">
                  We'll discuss your current business, challenges, and goals to identify areas for improvement and growth opportunities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-5 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-road text-3xl text-primary"></i>
                </div>
                <h3 className="text-xl font-display font-medium mb-3">Path Forward</h3>
                <p className="text-neutral-700">
                  Discover how our coaching programs can specifically help your real estate business and what the next steps would be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default Booking;