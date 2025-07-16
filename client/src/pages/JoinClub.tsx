import React, { useState } from 'react';
import { useLocation, Link } from 'wouter';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/shared/CookieConsent';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const JoinClub: React.FC = () => {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        toast({
          title: "Welcome to the Club!",
          description: "You've successfully logged in.",
        });
        setLocation('/club');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: error instanceof Error ? error.message : "Invalid email or password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center py-24">
        <div className="w-full max-w-md mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-primary">Enter</span> the Club
            </h1>
            <p className="text-neutral-600 text-lg">
              Access your exclusive Clockwork Coaching Club membership
            </p>
          </div>

          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-display">Welcome Back</CardTitle>
              <CardDescription className="text-base">
                Sign in to access your club benefits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-12 text-base"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 text-base font-medium bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300"
                >
                  {isLoading ? 'Signing In...' : 'Enter the Club'}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center space-y-3">
            <p className="text-sm text-neutral-600">
              Don't have an account yet?{' '}
              <Link href="/register" className="text-primary hover:text-primary/80 font-medium">
                Create an account
              </Link>
            </p>
            <p className="text-sm text-neutral-600">
              Need help?{' '}
              <Link href="/contact" className="text-primary hover:text-primary/80 font-medium">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <CookieConsent />
      <Toaster />
    </>
  );
};

export default JoinClub;