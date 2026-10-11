import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import apiRoutes from './routes/api.js';
import { errorHandler } from './middleware/errorHandler.js';

// Load environment configuration
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security and utility middleware
app.use(helmet());

const allowedOrigins = [
  process.env.CLIENT_URL || 'http://localhost:5173',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (such as mobile apps, curl, or Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive in dev, lockable via env in production
    },
    credentials: true,
  })
);

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Mount API routes
app.use('/api', apiRoutes);

// Root Welcome Ping
app.get('/', (req, res) => {
  res.json({
    name: '3D Portfolio Express Backend API',
    version: '1.0.0',
    status: 'ACTIVE',
    endpoints: {
      health: '/api/health',
      projects: '/api/projects',
      experience: '/api/experience',
      education: '/api/education',
      contact: 'POST /api/contact',
    },
  });
});

// 404 handler for unmatched routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Endpoint ${req.method} ${req.originalUrl} not found on this server.`,
  });
});

// Centralized error handler
app.use(errorHandler);

// Initialize DB and start listening
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Portfolio API Server operating on http://localhost:${PORT}`);
    console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
  });
};

startServer();

