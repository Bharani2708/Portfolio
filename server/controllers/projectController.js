import mongoose from 'mongoose';
import { Project } from '../models/Project.js';

// Pre-seeded fallback array when database is uninitialized
const fallbackProjects = [
  {
    id: 'nexus-cloud',
    slug: 'nexus-cloud',
    title: 'NexusCloud Distributed Telemetry',
    tagline: 'Real-time AI Infrastructure & Cluster Monitoring Suite',
    description: 'An enterprise-grade monitoring dashboard built to inspect distributed node clusters in real-time. Features WebSocket telemetry streaming, automated node failover alerts, and an interactive 3D spatial topology graph powered by React Three Fiber.',
    featured: true,
    category: 'Full Stack & 3D',
    tech: ['React 19', 'Three.js', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind CSS'],
    metrics: ['Sub-50ms Telemetry Latency', '10k Simulated Nodes', 'Zero Layout Shift'],
    github: 'https://github.com',
    live: 'https://example.com',
    highlights: [
      'Architected an interactive 3D network topology visualization with React Three Fiber and custom instanced meshes.',
      'Built resilient REST endpoints and MongoDB schema indexing supporting high-frequency time-series logging.',
      'Implemented reactive dashboard widgets using Framer Motion with automatic layout transitions.',
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

