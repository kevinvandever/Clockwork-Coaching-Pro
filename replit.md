# Replit.md - Clockwork Coaching Website

## Overview

This is a modern full-stack web application for Clockwork Coaching, a real estate coaching business. The application features a React frontend with TypeScript, an Express.js backend, and PostgreSQL database with Drizzle ORM. The site includes A/B testing capabilities, lead generation forms, user authentication, and a responsive design system built with Radix UI components and Tailwind CSS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with custom design system
- **Component Library**: Radix UI primitives with custom styling
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Session Management**: Express sessions with memory store
- **API Design**: RESTful endpoints with JSON responses
- **Middleware**: Custom logging, authentication, and error handling

### Database Architecture
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM with type-safe queries
- **Migrations**: Drizzle Kit for schema management
- **Connection**: Neon Database serverless connection in production

## Key Components

### Authentication System
- Session-based authentication using express-session
- User registration and login endpoints
- Protected routes for club membership area
- Memory store for development (should be replaced with persistent store in production)

### Lead Generation System
- Multiple lead capture forms (contact, booking, notifications)
- Lead storage in PostgreSQL with type categorization
- Email and phone collection with optional fields
- Analytics tracking for conversion optimization

### A/B Testing Framework
- Custom A/B testing component with localStorage persistence
- Impression and conversion tracking
- Results dashboard for analyzing test performance
- Currently testing hero section headlines

### Content Management
- Static content with dynamic sections
- Responsive design with mobile-first approach
- SEO-optimized page titles and meta information
- Professional coaching business branding

## Data Flow

1. **User Interaction**: Users interact with React components
2. **API Calls**: Frontend makes requests to Express backend via TanStack Query
3. **Authentication**: Session middleware validates protected routes
4. **Data Persistence**: Drizzle ORM handles database operations
5. **Response**: JSON responses sent back to frontend
6. **UI Updates**: React components re-render with new data

## External Dependencies

### Key Libraries
- **@neondatabase/serverless**: PostgreSQL connection for production
- **@radix-ui/***: Accessible UI component primitives
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database queries
- **react-hook-form**: Form handling and validation
- **zod**: Schema validation
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Build Process
- Frontend: Vite builds React app to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Database: Drizzle migrations applied via `db:push` command

### Environment Configuration
- `DATABASE_URL`: PostgreSQL connection string (required)
- `SESSION_SECRET`: Session encryption key (defaults to development value)
- `NODE_ENV`: Environment setting (development/production)

### Server Setup
- Development: `npm run dev` starts tsx with hot reloading
- Production: `npm run build` then `npm start` runs bundled code
- Database: Requires PostgreSQL instance with proper connection string

### Current Storage Implementation
- **Development**: In-memory storage for users and leads
- **Production Ready**: Drizzle ORM configured for PostgreSQL
- **Migration Path**: Database schema defined in `shared/schema.ts`

### Security Considerations
- Session-based authentication with HTTP-only cookies
- CSRF protection through session middleware
- Input validation using Zod schemas
- Secure session configuration for production environment

The application is designed to be easily deployable to platforms like Replit, Vercel, or traditional hosting providers with minimal configuration changes.