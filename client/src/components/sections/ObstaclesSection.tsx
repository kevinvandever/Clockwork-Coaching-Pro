import React from 'react';
import { Link } from 'wouter';
import { useNavigation } from '@/hooks/useNavigation';

const ObstaclesSection: React.FC = () => {
  const { scrollToSection } = useNavigation();

  const obstacles = [
    {
      title: "Inconsistent Income",
      description: "Stop the revenue roller coaster and build a dependable income"
    },
    {
      title: "Dependent on Referrals",
      description: "Referrals are great, but it's impossible to know when they will come"
    },
    {
      title: "No Time to Learn",
      description: "Too busy working inside your business to learn outside of it"
    }
  ];

  return (
    <section id="obstacles" className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Common Challenges Real Estate Professionals Face
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            Are these obstacles standing in the way of your business growth?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {obstacles.map((obstacle, index) => (
            <div key={index} className="bg-secondary rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-display text-2xl font-bold text-primary mb-4">
                {obstacle.title}
              </h3>
              <p className="text-neutral-700 mb-4">
                {obstacle.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/contact"
            className="elegant-button"
          >
            BOOK YOUR FREE DISCOVERY CALL
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ObstaclesSection;