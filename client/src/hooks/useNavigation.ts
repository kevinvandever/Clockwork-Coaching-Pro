
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'wouter';

export const useNavigation = () => {
  const [location] = useLocation();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('process');
          } else {
            setActiveSection('');
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('clockwork-system');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [location]);

  const scrollToSection = useCallback((sectionId: string) => {
    if (location !== '/') {
      window.location.href = '/#' + sectionId;
    } else {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  }, [location]);

  return { scrollToSection, activeSection };
};
