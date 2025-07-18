import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Router } from "express";
import abTestRoutes from "./abtest"; // Import the A/B testing routes
import session from "express-session";
import MemoryStore from "memorystore";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up session middleware
  const MemoryStoreSession = MemoryStore(session);
  app.use(session({
    secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
    resave: false,
    saveUninitialized: false,
    store: new MemoryStoreSession({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production'
    }
  }));

  // Authentication middleware
  const requireAuth = (req: any, res: any, next: any) => {
    if (!req.session?.userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }
    next();
  };

  // Auth routes
  app.post('/api/auth/login', async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }

      const user = await storage.getUserByEmail(email);
      
      if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Set session
      (req.session as any).userId = user.id;
      
      return res.json({ 
        success: true,
        user: {
          id: user.id,
          email: user.username,
          firstName: user.firstName || 'Member'
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.post('/api/auth/logout', (req, res) => {
    req.session?.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: 'Could not log out' });
      }
      res.json({ success: true });
    });
  });

  app.post('/api/auth/register', async (req, res) => {
    try {
      const { firstName, lastName, email, phone, password } = req.body;

      // Validation
      if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ 
          message: 'First name, last name, email, and password are required' 
        });
      }

      if (password.length < 8) {
        return res.status(400).json({ 
          message: 'Password must be at least 8 characters long' 
        });
      }

      // Check if user already exists
      const existingUser = await storage.getUserByEmail(email);
      if (existingUser) {
        return res.status(409).json({ 
          message: 'An account with this email already exists' 
        });
      }

      // Create new user
      const newUser = await storage.createUser({
        username: email, // Use email as username
        password: password, // In production, this should be hashed
        firstName,
        lastName,
        phone: phone || null,
      });

      // Auto-login the user after successful registration
      (req.session as any).userId = newUser.id;

      return res.status(201).json({
        success: true,
        message: 'Account created successfully',
        user: {
          id: newUser.id,
          email: newUser.username,
          firstName: newUser.firstName,
          lastName: newUser.lastName
        }
      });
    } catch (error) {
      console.error('Registration error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.get('/api/auth/me', requireAuth, async (req, res) => {
    try {
      const userId = (req.session as any).userId;
      const user = await storage.getUser(userId);
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.json({
        id: user.id,
        email: user.username,
        firstName: user.firstName || 'Member'
      });
    } catch (error) {
      console.error('Get user error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  // Assessment leads API endpoint
  app.post('/api/assessment-leads', async (req, res) => {
    try {
      const { firstName, lastName, email, phone } = req.body;

      if (!firstName || !lastName || !email) {
        return res.status(400).json({ message: 'First name, last name, and email are required' });
      }

      const lead = await storage.createLead({
        firstName,
        lastName,
        email,
        phone: phone || null,
        createdAt: new Date(),
        type: 'assessment'
      });

      // In a real app, you might send an email here with nodemailer
      // For now, we'll just return success

      return res.status(201).json({ 
        success: true,
        message: 'Assessment lead created successfully',
        leadId: lead.id
      });
    } catch (error) {
      console.error('Error creating assessment lead:', error);
      return res.status(500).json({ 
        message: 'An error occurred while processing your request' 
      });
    }
  });

  // Discovery call booking API endpoint
  app.post('/api/booking-leads', async (req, res) => {
    try {
      const { firstName, lastName, email, phone, message } = req.body;

      if (!firstName || !lastName || !email) {
        return res.status(400).json({ message: 'First name, last name, and email are required' });
      }

      const lead = await storage.createLead({
        firstName,
        lastName,
        email,
        phone: phone || null,
        message: message || null,
        createdAt: new Date(),
        type: 'booking'
      });

      // In a real app, you might integrate with a calendar service
      // or send notification emails

      return res.status(201).json({ 
        success: true,
        message: 'Booking request received successfully',
        leadId: lead.id
      });
    } catch (error) {
      console.error('Error creating booking lead:', error);
      return res.status(500).json({ 
        message: 'An error occurred while processing your request' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}


//Dummy abtest.js file content (needs to be created separately)
//This file needs to be created in the same directory.
//This is a minimal implementation for demonstration.  A production system would be far more complex.

const abTestRoutes = Router();

abTestRoutes.get('/heading', (req, res) => {
  //Simulate A/B testing -  replace with a proper randomization and tracking mechanism
  const headings = ["Don't Get Left Behind", "Join Us Today!"];
  const randomIndex = Math.floor(Math.random() * headings.length);
  res.json({ heading: headings[randomIndex] });
});


export default abTestRoutes;