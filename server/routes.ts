import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Router } from "express";
import abTestRoutes from "./abtest"; // Import the A/B testing routes

export async function registerRoutes(app: Express): Promise<Server> {
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