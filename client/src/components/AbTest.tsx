
import React, { useState, useEffect } from 'react';

// A simple A/B test component that randomly selects a variant to display
interface ABTestProps {
  variants: React.ReactNode[];
  id: string; // Unique identifier for this test
  onVariantSelected?: (variantIndex: number) => void;
}

export const ABTest: React.FC<ABTestProps> = ({ variants, id, onVariantSelected }) => {
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);

  useEffect(() => {
    // Check if we've already assigned a variant for this user
    const storedVariant = localStorage.getItem(`ab-test-${id}`);
    
    if (storedVariant !== null) {
      const variant = parseInt(storedVariant, 10);
      setSelectedVariant(variant);
      onVariantSelected?.(variant);
    } else {
      // Randomly select a variant
      const variant = Math.floor(Math.random() * variants.length);
      localStorage.setItem(`ab-test-${id}`, variant.toString());
      setSelectedVariant(variant);
      onVariantSelected?.(variant);
      
      // Send analytics event
      try {
        // This is a placeholder - replace with your actual analytics code
        console.log(`A/B Test '${id}': User shown variant ${variant}`);
        // Example if using Google Analytics:
        // window.gtag?.('event', 'ab_test_impression', {
        //   'ab_test_id': id,
        //   'ab_test_variant': variant
        // });
      } catch (e) {
        console.error('Error sending analytics event:', e);
      }
    }
  }, [id, variants.length, onVariantSelected]);

  if (selectedVariant === null) {
    return null; // Return nothing while determining variant
  }

  return <>{variants[selectedVariant]}</>;
};

// Helper hook to track conversion events
export const useAbTestConversion = (testId: string) => {
  return (action: string) => {
    try {
      const variant = localStorage.getItem(`ab-test-${testId}`);
      if (variant) {
        // This is a placeholder - replace with your actual analytics code
        console.log(`A/B Test '${testId}': User with variant ${variant} completed action: ${action}`);
        // Example if using Google Analytics:
        // window.gtag?.('event', 'ab_test_conversion', {
        //   'ab_test_id': testId,
        //   'ab_test_variant': variant,
        //   'ab_test_action': action
        // });
      }
    } catch (e) {
      console.error('Error tracking conversion:', e);
    }
  };
};
