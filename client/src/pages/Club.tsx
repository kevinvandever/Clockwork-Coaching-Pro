import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/shared/CookieConsent';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Club: React.FC = () => {
  const [, setLocation] = useLocation();
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/me', {
        credentials: 'include',
      });
      
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        // Redirect to login if not authenticated
        setLocation('/join-club');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setLocation('/join-club');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      
      if (response.ok) {
        toast({
          title: "Logged out successfully",
          description: "You've been signed out of the club.",
        });
        setLocation('/');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (isLoading) {
    return (
      <>
        <Navigation />
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-neutral-600">Loading your club access...</p>
          </div>
        </div>
        <Footer />
        <CookieConsent />
        <Toaster />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-[calc(100vh-200px)] py-16">
        <div className="elegant-container">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Welcome to <span className="text-primary">Clockwork Coaching</span>.Club
            </h1>
            <p className="text-xl text-neutral-600 mb-6">
              Your exclusive member portal for premium coaching resources
            </p>
            <div className="flex items-center justify-center gap-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Member Since: {new Date().toLocaleDateString()}
              </Badge>
              <Button 
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Sign Out
              </Button>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-display font-medium mb-4">
              Welcome back, {user?.firstName || 'Member'}!
            </h2>
            <p className="text-lg text-neutral-700">
              You now have access to exclusive coaching resources, priority booking, and member-only content.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="hover-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-calendar-check text-primary text-xl"></i>
                </div>
                <CardTitle>Priority Booking</CardTitle>
                <CardDescription>
                  Skip the wait - book your coaching sessions with priority access
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Book Session
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-book-open text-primary text-xl"></i>
                </div>
                <CardTitle>Exclusive Resources</CardTitle>
                <CardDescription>
                  Access premium worksheets, templates, and coaching materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Browse Resources
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-users text-primary text-xl"></i>
                </div>
                <CardTitle>Community Access</CardTitle>
                <CardDescription>
                  Connect with other members and join exclusive discussions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Join Community
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-chart-line text-primary text-xl"></i>
                </div>
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>
                  Monitor your coaching journey and track your achievements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  View Progress
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-video text-primary text-xl"></i>
                </div>
                <CardTitle>Exclusive Webinars</CardTitle>
                <CardDescription>
                  Join member-only webinars and live coaching sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  View Schedule
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-cog text-primary text-xl"></i>
                </div>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your profile, preferences, and membership details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Manage Account
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <h3 className="text-2xl font-display font-medium mb-6">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-4 border-b border-neutral-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-user-plus text-primary text-sm"></i>
                  </div>
                  <div>
                    <p className="font-medium">Welcome to the Club!</p>
                    <p className="text-sm text-neutral-600">You joined the exclusive member community</p>
                  </div>
                </div>
                <span className="text-sm text-neutral-500">Just now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <CookieConsent />
      <Toaster />
    </>
  );
};

export default Club;