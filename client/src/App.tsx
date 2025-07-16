import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Process from "@/pages/Process";
import Services from "@/pages/Services";

import Contact from "@/pages/Contact";
import Booking from "@/pages/Booking";
import JoinClub from './pages/JoinClub';
import Register from './pages/Register';
import Club from './pages/Club';
import NotificationsContact from './pages/NotificationsContact';
import { useEffect } from 'react';
import AbTestResults from './pages/AbTestResults';
import TestHeadings from './pages/TestHeadings';

// Custom hook to scroll to top on route change
function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function Router() {
  useScrollToTop(); // Added useScrollToTop hook here
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/process" component={Process} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/booking" component={Booking} />
      <Route path="/join-club" component={JoinClub} />
      <Route path="/register" component={Register} />
      <Route path="/club" component={Club} />
      <Route path="/notifications" component={NotificationsContact} />
      <Route path="/abtest-results" component={AbTestResults} />
      <Route path="/test-headings/:variant?" component={TestHeadings} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;