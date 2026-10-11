import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema(
  {
    degree: {
      type: String,
      required: [true, 'Degree title is required'],
      trim: true,
    },
    institution: {
      type: String,
      required: [true, 'Institution name is required'],
      trim: true,
    },
    period: {
      type: String,
      required: [true, 'Period is required'],
    },
    grade: {
      type: String,
      trim: true,
    },
    coursework: {
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

export const Education = mongoose.models.Education || mongoose.model('Education', educationSchema);
