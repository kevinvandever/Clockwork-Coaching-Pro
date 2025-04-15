
import { useEffect } from 'react';
import { useLocation } from 'wouter';

export const useScrollToTop = () => {
  const [location] = useLocation();
  
  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};
