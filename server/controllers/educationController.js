import mongoose from 'mongoose';
import { Education } from '../models/Education.js';

const fallbackEducation = [
  {
    degree: 'Bachelor of Engineering (B.E.)',
    institution: 'Karpagam Academy of Higher Education',
    period: '2022 — 2026',
    grade: 'CGPA: 7.6 / 10.0',
    status: 'Pursuing',
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems (MongoDB & SQL)',
      'Web Technologies & Component Architecture',
      'Object-Oriented Programming (OOP)',
      'Software Engineering',
    ],
  },
  {
    degree: 'Higher Secondary (HSC)',
    institution: 'Saradha Vidhyalaya Matric Higher Secondary School',
    period: 'Completed',
    grade: 'Percentage: 89%',
    status: 'Completed',
    coursework: ['Computer Science', 'Mathematics', 'Physics', 'Chemistry'],
  },
  {
    degree: 'SSLC (10th)',
    institution: 'Saradha Vidhyalaya Matric Higher Secondary School',
    period: 'Completed',
    grade: 'Percentage: 72%',
    status: 'Completed',
    coursework: ['General Curriculum', 'Science & Mathematics'],
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

