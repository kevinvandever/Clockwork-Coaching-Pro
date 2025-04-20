
import React from 'react';
import { Link } from 'wouter';
import { useNavigation } from '@/hooks/useNavigation';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const ObstaclesSection: React.FC = () => {
  const { scrollToSection } = useNavigation();

  const obstacles = [
    {
      title: "Too Busy to Learn",
      description: "You're too busy working in your business to work on it"
    },
    {
      title: "Referral Roller Coaster",
      description: "Referrals are great—but unpredictable"
    },
    {
      title: "Outdated Systems",
      description: "You're stuck using the same playbook in a new market"
    }
  ];

  return (
    <section id="obstacles" className="py-6 pt-6 md:pt-6 px-4 md:px-8 bg-primary/5">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What's Holding You Back?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {obstacles.map((obstacle, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="font-display text-2xl font-bold text-primary mb-3">
                {obstacle.title}
              </h3>
              <p className="text-neutral-700 mb-3 line-clamp-2">
                {obstacle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObstaclesSection;
