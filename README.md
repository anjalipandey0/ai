# VELOUR & WEAVE - Luxury Textile Platform

A full-stack editorial luxury web platform converted from the Stitch design system into a production-ready **React + Vite** frontend, **Node.js + Express** backend, and **MongoDB Atlas** database.

---

## Features

- **Architectural Editorial Frontend**:
  - Exact fidelity to the original Stitch luxury minimalism design system (Bodoni Moda & Inter typography, sharp 0px radii, ambient shadows, bespoke organic earth & slate palette).
  - **Home**: Cinematic Silk Hero, Collection Grid, Autumn Heritage featured horizontal slider, Elena Rostova testimonial quote, and "Join the Registry" newsletter.
  - **Catalog**: Live multi-category filters (Material, Color swatches, Pattern, Application), search bar, GSM/alphabetical sorting, Quick View specifications modal, and Swatch Dispatch modal.
  - **About**: "Heritage of Craft" editorial hero, "From Source to Silhouette" 3-phase journey (Cultivation, Spinning, Weaving), and artisan profiles (Master Weaver & Head Dyer).
  - **History & Portfolio**: "A Legacy Woven in Time" heritage case studies (The Savoy Renovation, Paris Fashion Week, Artisanal Boutique Hotel) with interactive case study modals.
  - **Testimonials**: "Voices of Visionaries" reflections archive with industry filters, bento quote cards, and interactive "Leave a Reflection" form with live star-rating picker.
  - **Book Consultation**: 3-step bespoke appointment scheduler (Meeting Type, Interactive Date/Time Calendar Picker, Contact Details) with animated success confirmation.
  - **Admin Dashboard**: Atelier management panel with pending consultations metrics, schedule manager, review moderation (approve/dismiss), and catalog inventory manager with "Add New Textile" modal.

- **High-Performance Backend**:
  - Express.js REST API with modular controllers and routes.
  - Endpoints for textiles, consultations, reviews, swatch requests, newsletter subscribers, and analytics.
  - Mongoose models with validation and automatic seed initialization.
  - Resilient design: connects to MongoDB Atlas when `MONGODB_URI` is provided, with graceful high-availability fallback for offline/development environments.

- **Production Deployment Ready**:
  - Frontend configured for **Cloudflare Pages** with `_redirects` for SPA routing.
  - Backend configured for **Render** Web Service.
  - Complete `DEPLOYMENT.md` guide.

---

## Project Structure

```
├── client/                     # Frontend (React + Vite + Tailwind CSS)
│   ├── public/
│   │   └── _redirects          # Cloudflare Pages SPA rewrite rule
│   ├── src/
│   │   ├── components/         # Navbar, Footer, Modals (QuickView, Swatch, AddTextile)
│   │   ├── pages/              # Home, Catalog, About, History, Testimonials, Book, Admin
│   │   ├── services/           # Centralized API service
│   │   ├── App.jsx             # React Router structure
│   │   ├── main.jsx
│   │   └── index.css           # Custom design system utility classes
│   ├── index.html              # Typography & Material Symbols
│   ├── tailwind.config.js      # Stitch design system color and font tokens
│   └── vite.config.js
├── server/                     # Backend (Node.js + Express + Mongoose)
│   ├── config/                 # MongoDB connection handler
│   ├── controllers/            # Business logic for all modules
│   ├── models/                 # Mongoose schemas (Textile, Consultation, Review, etc.)
│   ├── routes/                 # Express API routes
│   ├── seed/                   # Seed data matching Stitch catalog
│   ├── server.js               # Entry point
│   ├── .env.example
│   └── .env
├── stitch_velour_weave_design_system/ # Original design templates (preserved intact)
├── DEPLOYMENT.md               # Cloudflare Pages & Render deployment instructions
├── .gitignore
└── package.json                # Root management scripts
```

---

## Quickstart

### 1. Install dependencies:
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### 2. Start Local Development:
```bash
# Terminal 1: Start backend server (port 5000)
cd server
npm run dev

# Terminal 2: Start frontend client (port 5173)
cd client
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to explore the showroom.
Admin dashboard is accessible directly at [http://localhost:5173/admin](http://localhost:5173/admin).
