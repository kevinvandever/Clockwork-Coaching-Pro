import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Process from "@/pages/Process";
import Contact from "@/pages/Contact";
import Booking from "@/pages/Booking";
import JoinClub from './pages/JoinClub';
import NotificationsContact from './pages/NotificationsContact';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/process" component={Process} />
      <Route path="/contact" component={Contact} />
      <Route path="/booking" component={Booking} />
      <Route path="/join-club" component={JoinClub} />
      <Route path="/notifications" component={NotificationsContact} />
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