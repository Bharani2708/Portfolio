import mongoose from 'mongoose';
import { Experience } from '../models/Experience.js';

const fallbackExperience = [
  {
    id: 'exp-1',
    role: 'Full Stack Engineer Intern',
    company: 'HyperScale Cloud Systems',
    location: 'San Francisco, CA (Remote)',
    period: '2024 — Present',
    type: 'Internship',
    highlights: [
      'Engineered high-throughput REST APIs using Express.js and MongoDB Atlas, decreasing p95 endpoint response time by 28%.',
      'Collaborated with the design team to rebuild the customer portal using React and Tailwind CSS, improving mobile conversion by 34%.',
      'Integrated rate limiting and input sanitation middleware to harden client endpoints against brute-force attacks.',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Tailwind CSS', 'Git'],
  },
  {
    id: 'exp-2',
    role: 'Frontend & Creative Developer Intern',
    company: 'Quantum Interactive Studios',
    location: 'San Jose, CA',
    period: '2023 — 2024',
    type: 'Internship',
    highlights: [
      'Developed interactive 3D product previews using Three.js and React Three Fiber, boosting user engagement time by 45%.',
      'Refactored state management to utilize modern React hooks, eliminating redundant renders across heavy dashboard views.',
      'Implemented cross-browser WebGL feature detection and graceful CSS fallback animations for unsupported mobile clients.',
    ],
    tech: ['Three.js', 'React Three Fiber', 'JavaScript', 'HTML5 Canvas', 'Framer Motion'],
  },
];

export const getExperience = async (req, res, next) => {
  try {
    const isDbConnected = mongoose.connection.readyState === 1;

    if (isDbConnected) {
      const records = await Experience.find().sort({ order: 1, createdAt: -1 });
      if (records.length > 0) {
        return res.json({ success: true, count: records.length, data: records });
      }
    }

    res.json({ success: true, count: fallbackExperience.length, data: fallbackExperience });
  } catch (error) {
    next(error);
  }
};

