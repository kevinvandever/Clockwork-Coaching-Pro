import { useCallback } from 'react';

export const useNavigation = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  }, []);

  return { scrollToSection };
};
