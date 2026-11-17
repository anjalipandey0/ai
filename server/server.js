import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import { connectDB, getIsConnected } from './config/db.js';
import { seedDatabase } from './seed/seedData.js';

import textileRoutes from './routes/textileRoutes.js';
import consultationRoutes from './routes/consultationRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import swatchRoutes from './routes/swatchRoutes.js';
import subscriberRoutes from './routes/subscriberRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';

// Resolve directory paths for robust .env loading
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from server directory first, fallback to root
dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'VELOUR & WEAVE API',
    database: getIsConnected() ? 'connected' : 'memory-fallback',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/textiles', textileRoutes);
app.use('/api/consultations', consultationRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/swatches', swatchRoutes);
app.use('/api/newsletter', subscriberRoutes);
app.use('/api/analytics', analyticsRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('VELOUR & WEAVE Luxury Textile API is running.');
});

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

// Initialize Database and Start Server
const startServer = async () => {
  const connected = await connectDB();
  if (connected) {
    await seedDatabase();
  }

  app.listen(PORT, () => {
    console.log(`===============================================`);
    console.log(`✨ VELOUR & WEAVE API Server running on port ${PORT}`);
    console.log(`🌐 Mode: ${process.env.NODE_ENV || 'development'}`);
    console.log(`💾 Database: ${connected ? 'MongoDB Atlas' : 'In-Memory High Availability'}`);
    console.log(`===============================================`);
  });
};

startServer();
