import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';
    
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-white p-4 flex flex-col sm:flex-row justify-between items-center z-50">
      <p className="text-sm mb-3 sm:mb-0">
        This website uses cookies to ensure you get the best experience on our website.
      </p>
      <Button 
        onClick={acceptCookies}
        className="bg-primary text-white px-4 py-2 rounded-md text-sm whitespace-nowrap hover:bg-primary/90 transition duration-300"
      >
        Accept
      </Button>
    </div>
  );
};

export default CookieConsent;
