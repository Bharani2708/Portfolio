import mongoose from 'mongoose';
import { Experience } from '../models/Experience.js';

const fallbackExperience = [
  {
    id: 'exp-1',
    role: 'Trainee',
    company: 'GCL International',
    location: 'Coimbatore, Tamil Nadu (Remote)',
    period: 'June 2025 — December 2025',
    type: 'Internship',
    highlights: [
      'Built responsive, interactive frontend interfaces using React.js and JavaScript, applying component-based architecture and modern UI practices.',
      'Worked with REST APIs to connect frontend components to backend services, with initial exposure to FastAPI for small backend tasks.',
      'Assisted in integrating a MySQL database with the application through backend APIs, supporting reliable data handling across the stack.',
      'Collaborated remotely with the development team, owning assigned modules and following structured, agile-style workflows.',
    ],
    tech: ['React.js', 'JavaScript', 'REST APIs', 'FastAPI', 'MySQL', 'Git'],
  },
  {
    id: 'exp-2',
    role: 'Full Stack Development Intern',
    company: 'MAANTT Global Services Pvt. Ltd',
    location: 'Chennai, Tamil Nadu',
    period: 'December 2023',
    type: 'Internship',
    highlights: [
      'Built responsive interfaces using HTML, CSS, and JavaScript, applying modular styling and component patterns.',
      'Built and tested backend API functionality and ensured seamless client-server integration.',
      'Used Git and GitHub in an agile development workflow for collaborative version control and feature delivery.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'REST APIs', 'Git'],
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

