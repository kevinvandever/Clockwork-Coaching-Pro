
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

interface TestData {
  variants: Record<string, {
    impressions: number;
    conversions: Record<string, number>;
  }>;
}

const AbTestResults: React.FC = () => {
  const [testResults, setTestResults] = useState<TestData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'A/B Test Results | Clockwork Coaching';
    
    const fetchResults = async () => {
      try {
        const response = await fetch('/api/abtest/results/hero-heading');
        if (!response.ok) {
          throw new Error('Failed to fetch test results');
        }
        const data = await response.json();
        setTestResults(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    
    fetchResults();
  }, []);

  const calculateConversionRate = (impressions: number, conversions: number) => {
    if (impressions === 0) return 0;
    return (conversions / impressions) * 100;
  };

  return (
    <>
      <Navigation />
      <main>
        <div className="pt-24 bg-primary/5">
          <div className="elegant-container py-12 text-center">
            <h1 className="elegant-heading text-neutral-900 mb-6">A/B Test Results</h1>
            <div className="w-20 h-0.5 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              View the performance of your A/B tests
            </p>
          </div>
        </div>

        <div className="elegant-section bg-white">
          <div className="elegant-container">
            {loading ? (
              <div className="text-center py-12">Loading results...</div>
            ) : error ? (
              <div className="text-center py-12 text-red-500">{error}</div>
            ) : !testResults ? (
              <div className="text-center py-12">No test data available yet</div>
            ) : (
              <div>
                <h2 className="text-2xl font-display font-medium mb-6">Hero Heading Test Results</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-neutral-100">
                        <th className="border p-3 text-left">Variant</th>
                        <th className="border p-3 text-left">Impressions</th>
                        <th className="border p-3 text-left">CTA Clicks</th>
                        <th className="border p-3 text-left">Conversion Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(testResults.variants).map(([variantId, data], index) => {
                        const ctaClicks = data.conversions.cta_click || 0;
                        const conversionRate = calculateConversionRate(data.impressions, ctaClicks);
                        
                        const variantName = index === 0 ? 
                          "A: Don't Get Left Behind" : 
                          "B: Future-Proof Your Business Today";
                        
                        return (
                          <tr key={variantId}>
                            <td className="border p-3">{variantName}</td>
                            <td className="border p-3">{data.impressions}</td>
                            <td className="border p-3">{ctaClicks}</td>
                            <td className="border p-3">{conversionRate.toFixed(2)}%</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-display font-medium mb-4">Analysis</h3>
                  <p className="text-neutral-700 mb-4">
                    This A/B test compares two different hero headings to see which one drives more engagement.
                  </p>
                  <p className="text-neutral-700">
                    The conversion rate is calculated by dividing the number of CTA clicks by the number of impressions.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AbTestResults;
