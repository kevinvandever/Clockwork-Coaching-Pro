import { useCallback, useEffect } from 'react';

// Track A/B test impression
const trackAbTestImpression = async (testId: string, variantId: string) => {
  try {
    const response = await fetch('/api/abtest/impression', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ testId, variantId }),
    });

    if (!response.ok) {
      console.error('Failed to track A/B test impression');
    }
  } catch (error) {
    console.error('Error tracking A/B test impression:', error);
  }
};

// Track A/B test conversion
const trackAbTestConversion = async (testId: string, variantId: string, action: string) => {
  try {
    const response = await fetch('/api/abtest/conversion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ testId, variantId, action }),
    });

    if (!response.ok) {
      console.error('Failed to track A/B test conversion');
    }
  } catch (error) {
    console.error('Error tracking A/B test conversion:', error);
  }
};

export const useAnalytics = () => {
  // Track page views
  const trackPageView = (path: string) => {
    console.log(`Page viewed: ${path}`);
    // Implement actual analytics tracking here
  };

  // Track events
  const trackEvent = (category: string, action: string, label?: string) => {
    console.log(`Event tracked: ${category} - ${action} ${label ? `- ${label}` : ''}`);
    // Implement actual analytics tracking here
  };

  // Track A/B test
  const trackAbTest = {
    impression: trackAbTestImpression,
    conversion: trackAbTestConversion
  };

  useEffect(() => {
    // Initialize analytics here if needed
  }, []);

  return {
    trackPageView,
    trackEvent,
    trackAbTest
  };
};