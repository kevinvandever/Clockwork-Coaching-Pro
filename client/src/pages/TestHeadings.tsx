
import React, { useEffect } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Link, useRoute } from 'wouter';

const TestHeadings: React.FC = () => {
  const [, params] = useRoute('/test-headings/:variant');
  const variant = params?.variant;
  
  useEffect(() => {
    document.title = 'Heading Test | Clockwork Coaching';
    
    // If a variant is specified in the URL, set it in localStorage
    if (variant === '0' || variant === '1') {
      localStorage.setItem('ab-test-hero-heading', variant);
    }
  }, [variant]);

  return (
    <>
      <Navigation />
      <main>
        <div className="pt-24 bg-primary/5">
          <div className="elegant-container py-12 text-center">
            <h1 className="elegant-heading text-neutral-900 mb-6">Heading Test Page</h1>
            <div className="w-20 h-0.5 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              View and test different heading variants
            </p>
          </div>
        </div>

        <div className="elegant-section bg-white">
          <div className="elegant-container">
            <div className="mb-8">
              <h2 className="text-2xl font-display font-medium mb-4">Test Links</h2>
              <p className="mb-4">
                Click on the links below to view different heading variants on the home page:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/test-headings/0">
                  <a className="elegant-button">View Variant A: "Don't Get Left Behind"</a>
                </Link>
                <Link href="/test-headings/1">
                  <a className="elegant-button">View Variant B: "Future-Proof Your Business Today"</a>
                </Link>
              </div>
              <div className="mt-4">
                <Link href="/home">
                  <a className="underline text-primary">Go to Home Page</a>
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-display font-medium mb-4">Current Settings</h2>
              <p>
                Currently set variant: <strong>{localStorage.getItem('ab-test-hero-heading') || 'None'}</strong>
              </p>
              <p className="mt-4">
                <button 
                  className="underline text-red-500"
                  onClick={() => {
                    localStorage.removeItem('ab-test-hero-heading');
                    alert('Variant cleared! Refresh the home page to get a random variant.');
                  }}
                >
                  Clear stored variant
                </button>
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-display font-medium mb-4">View Results</h2>
              <p>
                <Link href="/abtest-results">
                  <a className="underline text-primary">View A/B Test Results</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TestHeadings;
