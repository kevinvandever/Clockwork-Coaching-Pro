
import React, { useState, useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

// A simple A/B test component that randomly selects a variant to display
interface ABTestProps {
  variants: React.ReactNode[];
  id: string; // Unique identifier for this test
  onVariantSelected?: (variantIndex: number) => void;
}

export const ABTest: React.FC<ABTestProps> = ({ variants, id, onVariantSelected }) => {
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);
  const { trackAbTest } = useAnalytics();

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
      
      // Send impression to analytics
      try {
        console.log(`A/B Test '${id}': User shown variant ${variant}`);
        trackAbTest.impression(id, variant.toString());
      } catch (e) {
        console.error('Error sending analytics event:', e);
      }
    }
  }, [id, variants.length, onVariantSelected, trackAbTest]);

  if (selectedVariant === null) {
    return null; // Return nothing while determining variant
  }

  return <>{variants[selectedVariant]}</>;
};

// Helper hook to track conversion events
export const useAbTestConversion = (testId: string) => {
  const { trackAbTest } = useAnalytics();
  
  return (action: string) => {
    try {
      const variant = localStorage.getItem(`ab-test-${testId}`);
      if (variant) {
        console.log(`A/B Test '${testId}': User with variant ${variant} completed action: ${action}`);
        trackAbTest.conversion(testId, variant, action);
      }
    } catch (e) {
      console.error('Error tracking conversion:', e);
    }
  };
};
