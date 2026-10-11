import mongoose from 'mongoose';
import { Education } from '../models/Education.js';

const fallbackEducation = [
  {
    degree: 'Bachelor of Science in Computer Science & Engineering',
    institution: 'State University of Technology',
    period: '2021 — 2025',
    grade: "CGPA: 3.85 / 4.0 (Dean's Honor Roll)",
    coursework: [
      'Advanced Data Structures & Algorithms',
      'Database Management Systems (RDBMS & NoSQL)',
      'Distributed Computing & Cloud Architecture',
      'Computer Graphics & Interactive Systems',
      'Software Engineering & Agile Methodologies',
    ],
  },
];

export const getEducation = async (req, res, next) => {
  try {
    const isDbConnected = mongoose.connection.readyState === 1;

    if (isDbConnected) {
      const records = await Education.find().sort({ order: 1 });
      if (records.length > 0) {
        return res.json({ success: true, count: records.length, data: records });
      }
    }

    res.json({ success: true, count: fallbackEducation.length, data: fallbackEducation });
  } catch (error) {
    next(error);
  }
};

