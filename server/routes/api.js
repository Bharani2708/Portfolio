import express from 'express';
import mongoose from 'mongoose';
import { getProjects, getProjectBySlug } from '../controllers/projectController.js';
import { getExperience } from '../controllers/experienceController.js';
import { getEducation } from '../controllers/educationController.js';
import { handleContactSubmit } from '../controllers/contactController.js';
import { contactRateLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// System Health Diagnostics
router.get('/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected (static fallback active)';
  res.json({
    status: 'ONLINE',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    database: dbStatus,
  });
});

// Projects Endpoints
router.get('/projects', getProjects);
router.get('/projects/:slug', getProjectBySlug);

// Career & Education Endpoints
router.get('/experience', getExperience);
router.get('/education', getEducation);

// Contact Endpoint with Rate Limiting
router.post('/contact', contactRateLimiter, handleContactSubmit);

export default router;

