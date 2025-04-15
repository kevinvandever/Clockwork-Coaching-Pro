
import { useCallback } from 'react';

// This is a simple analytics hook that can be expanded with your preferred analytics service
export const useAnalytics = () => {
  const trackEvent = useCallback((category: string, action: string, label?: string, value?: number) => {
    // Log to console for development
    console.log(`Analytics Event: ${category} - ${action} - ${label || 'N/A'} - ${value || 'N/A'}`);
    
    // Here you would integrate with your actual analytics service
    // Examples:
    
    // Google Analytics (GA4)
    // window.gtag?.('event', action, {
    //   event_category: category,
    //   event_label: label,
    //   value: value
    // });
    
    // Or send to your backend for logging
    // fetch('/api/analytics/event', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ category, action, label, value })
    // });
  }, []);

  const trackPageView = useCallback((path: string, title?: string) => {
    console.log(`Page View: ${path} - ${title || 'N/A'}`);
    
    // Google Analytics (GA4)
    // window.gtag?.('event', 'page_view', {
    //   page_path: path,
    //   page_title: title
    // });
  }, []);

  return { trackEvent, trackPageView };
};
