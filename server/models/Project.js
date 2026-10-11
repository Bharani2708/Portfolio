import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Project slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    tagline: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
    },
    tech: {
      type: [String],
      default: [],
    },
    metrics: {
      type: [String],
      default: [],
    },
    highlights: {
      type: [String],
      default: [],
    },
    github: {
      type: String,
      trim: true,
    },
    live: {
      type: String,
      trim: true,
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

export const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
