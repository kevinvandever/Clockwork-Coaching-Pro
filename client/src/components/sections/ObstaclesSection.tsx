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
    <section id="obstacles" className="py-4 md:py-6 px-4 md:px-8 bg-primary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            What's Holding You Back?
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center group">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-chart-line text-2xl text-red-600"></i>
            </div>
            <h3 className="font-display text-2xl font-medium mb-4 text-neutral-900">Feast or Famine Income</h3>
            <p className="text-neutral-600 leading-relaxed">
              Great months followed by scary-quiet ones
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-clock text-2xl text-red-600"></i>
            </div>
            <h3 className="font-display text-2xl font-medium mb-4 text-neutral-900">Reactive, Not Proactive</h3>
            <p className="text-neutral-600 leading-relaxed">
              Constantly catching up instead of getting ahead
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-cogs text-2xl text-red-600"></i>
            </div>
            <h3 className="font-display text-2xl font-medium mb-4 text-neutral-900">Manual Everything</h3>
            <p className="text-neutral-600 leading-relaxed">
              Using the same workflows from 2010 in 2025's market
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default ObstaclesSection;