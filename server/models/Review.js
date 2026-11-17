import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Author name is required'],
    trim: true,
  },
  studio: {
    type: String,
    required: [true, 'Studio or company name is required'],
    trim: true,
  },
  role: {
    type: String,
    trim: true,
  },
  industry: {
    type: String,
    enum: ['Hospitality', 'Residential', 'Apparel', 'Commercial', 'General'],
    default: 'General',
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5,
  },
  quote: {
    type: String,
    required: [true, 'Reflection text is required'],
    trim: true,
  },
  image: {
    type: String,
    default: '',
  },
  avatar: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    enum: ['Approved', 'Pending', 'Dismissed'],
    default: 'Approved',
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

export const Review = mongoose.model('Review', reviewSchema);
