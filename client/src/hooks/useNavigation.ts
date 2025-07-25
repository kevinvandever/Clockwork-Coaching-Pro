
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'wouter';

export const useNavigation = () => {
  const [location] = useLocation();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = ['hero', 'obstacles', 'about', 'services', 'process', 'contact'];
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [location]);

  const scrollToSection = useCallback((sectionId: string) => {
    if (location !== '/') {
      sessionStorage.setItem('scrollTarget', sectionId);
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

  // Check for stored scroll target on home page load
  useEffect(() => {
    if (location === '/') {
      const scrollTarget = sessionStorage.getItem('scrollTarget');
      if (scrollTarget) {
        sessionStorage.removeItem('scrollTarget');
        setTimeout(() => {
          const targetElement = document.getElementById(scrollTarget);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    }
  }, [location]);

  return { scrollToSection, activeSection };
};
