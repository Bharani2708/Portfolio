import mongoose from 'mongoose';
import { Project } from '../models/Project.js';

// Pre-seeded fallback array when database is uninitialized
const fallbackProjects = [
  {
    id: 'job-connect',
    slug: 'job-connect',
    title: 'Job Connect — Career & Recruitment Portal',
    tagline: 'Dual-Sided Job Discovery & Real-Time Application Tracking Ecosystem',
    description: 'A comprehensive recruitment platform connecting job seekers with hiring companies. Features responsive job search with filters, multi-role access control for seekers and recruiters, and an end-to-end recruitment pipeline where recruiters manage postings, review candidate submissions, and update application lifecycle statuses in real time.',
    featured: true,
    category: 'Full Stack & MERN',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
    metrics: ['Dual-Role RBAC (Recruiter & Seeker)', 'Real-Time Application Status Pipeline', 'Live on Render Cloud'],
    github: 'https://github.com',
    live: 'https://job-portal-sw24.onrender.com',
    highlights: [
      'Engineered dual-sided role-based architecture serving both job seekers and corporate recruiters.',
      'Implemented advanced job search with multi-parameter filtering by domain, role, location, and keywords.',
      'Built recruiter management suite allowing recruiters to track incoming applications, review candidate profiles, and update application stages.',
      'Designed real-time application tracker giving job candidates instant visibility into their submission progress.',
    ],
  },
  {
    id: 'aetheria-engine',
    slug: 'aetheria-engine',
    title: 'Aetheria Procedural Terrain Studio',
    tagline: 'WebGL Shader Simulation & Dynamic Mesh Generator',
    description: 'An in-browser procedural world builder allowing game designers to generate biome heightmaps, apply GLSL displacement shaders, and export optimized GLTF geometries in real time.',
    featured: true,
    category: '3D Graphics & Creative Dev',
    tech: ['Three.js', 'React', 'GLSL Shaders', 'Vite', 'Web Workers'],
    metrics: ['60 FPS Rendering', 'Procedural Simplex Noise', 'GLTF Asset Exporter'],
    github: 'https://github.com',
    live: 'https://example.com',
    highlights: [
      'Offloaded CPU-intensive Perlin/Simplex heightmap computation to concurrent Web Workers.',
      'Crafted custom atmospheric scattering and water reflection shaders using Three.js shader materials.',
      'Engineered smooth camera orbiting controls with keyboard shortcuts and inertia dampening.',
    ],
  },
  {
    id: 'synapse-pay',
    slug: 'synapse-pay',
    title: 'SynapsePay Fintech API Gateway',
    tagline: 'Secure Transaction Orchestration & Webhook Dispatcher',
    description: 'A financial technology middle-tier orchestrating asynchronous payment events, cryptographic signature verification, and automated idempotent retry queues.',
    featured: false,
    category: 'Backend Architecture',
    tech: ['Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'Redis'],
    metrics: ['Idempotent Requests', 'AES-256 Payload Encryption', 'Audit Trail Logging'],
    github: 'https://github.com',
    live: 'https://example.com',
    highlights: [
      'Implemented strict rate-limiting, CORS whitelisting, and Joi payload validation middleware.',
      'Designed Mongoose models with TTL indexes for transient verification tokens and tamper-evident audit logs.',
      'Authored complete OpenAPI/Swagger documentation with automated integration test suites.',
    ],
  },
  {
    id: 'zenith-ui',
    slug: 'zenith-ui',
    title: 'Zenith Cyberpunk Component System',
    tagline: 'High-Performance Accessible Design Tokens for Modern React',
    description: 'A dark-mode-first component system engineered for developer dashboards, featuring glassmorphism surfaces, keyboard accessible modals, and micro-interactions.',
    featured: false,
    category: 'Frontend & UI/UX',
    tech: ['React 19', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    metrics: ['100% WAI-ARIA Compliant', 'Zero Dependency Bloat', 'Sub-15kb Gzipped'],
    github: 'https://github.com',
    live: 'https://example.com',
    highlights: [
      'Crafted 30+ accessible components adhering strictly to WAI-ARIA specifications.',
      'Integrated fluid spring-physics animations with reduced-motion media query compliance.',
    ],
  },
];

export const getProjects = async (req, res, next) => {
  try {
    const isDbConnected = mongoose.connection.readyState === 1;

    if (isDbConnected) {
      const { category, featured } = req.query;
      const query = {};

      if (category && category !== 'all') {
        query.category = { $regex: category, $options: 'i' };
      }
      if (featured === 'true') {
        query.featured = true;
      }

      const projects = await Project.find(query).sort({ order: 1, createdAt: -1 });

      if (projects.length > 0) {
        return res.json({ success: true, count: projects.length, data: projects });
      }
    }

    // Return fallback data
    let result = [...fallbackProjects];
    const { category, featured } = req.query;
    if (category && category !== 'all') {
      result = result.filter((p) =>
        p.category.toLowerCase().includes(category.toLowerCase())
      );
    }
    if (featured === 'true') {
      result = result.filter((p) => p.featured);
    }

    res.json({ success: true, count: result.length, data: result });
  } catch (error) {
    next(error);
  }
};

export const getProjectBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const isDbConnected = mongoose.connection.readyState === 1;

    if (isDbConnected) {
      const project = await Project.findOne({ slug });
      if (project) {
        return res.json({ success: true, data: project });
      }
    }

    const fallback = fallbackProjects.find((p) => p.slug === slug);
    if (!fallback) {
      return res.status(404).json({ success: false, message: 'Project not found in system database.' });
    }

    res.json({ success: true, data: fallback });
  } catch (error) {
    next(error);
  }
};

