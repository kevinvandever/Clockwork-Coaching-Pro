import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(), // This will be the email
  password: text("password").notNull(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  phone: text("phone"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const registerUserSchema = insertUserSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
}).omit({ username: true }).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// New lead schema for capturing assessment and booking leads
export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message"),
  type: text("type").notNull(), // 'assessment', 'booking', 'club_notify', or 'club_message'
  createdAt: timestamp("created_at").notNull(),
});

export const insertLeadSchema = createInsertSchema(leads).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  message: true,
  type: true,
  createdAt: true,
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;
