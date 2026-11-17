import mongoose from 'mongoose';

const textileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Textile name is required'],
    trim: true,
  },
  subtitle: {
    type: String,
    trim: true,
  },
  material: {
    type: String,
    required: [true, 'Material category is required'],
    trim: true,
  },
  color: {
    type: String,
    required: true,
    trim: true,
  },
  pattern: {
    type: String,
    required: true,
    trim: true,
  },
  application: {
    type: String,
    required: true,
    trim: true,
  },
  gsm: {
    type: Number,
    required: true,
  },
  composition: {
    type: String,
    default: '100% Natural Fiber',
  },
  width: {
    type: String,
    default: '140 cm / 55"',
  },
  stockStatus: {
    type: String,
    enum: ['Available', 'Limited Stock', 'Made to Order', 'Out of Stock'],
    default: 'Available',
  },
  careInstructions: {
    type: [String],
    default: [
      'Professional dry clean only',
      'Do not bleach',
      'Iron low heat on reverse',
    ],
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  isNewArrival: {
    type: Boolean,
    default: false,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Textile = mongoose.model('Textile', textileSchema);
