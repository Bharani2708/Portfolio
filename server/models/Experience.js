import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, 'Role title is required'],
      trim: true,
    },
    company: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    period: {
      type: String,
      required: [true, 'Employment period is required'],
    },
    type: {
      type: String,
      enum: ['Full-time', 'Internship', 'Contract', 'Part-time'],
      default: 'Full-time',
    },
    highlights: {
      type: [String],
      default: [],
    },
    tech: {
      type: [String],
      default: [],
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Experience = mongoose.models.Experience || mongoose.model('Experience', experienceSchema);

