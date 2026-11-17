import mongoose from 'mongoose';

const swatchRequestSchema = new mongoose.Schema({
  textileName: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  company: {
    type: String,
    trim: true,
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'Dispatched', 'Delivered'],
    default: 'Pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const SwatchRequest = mongoose.model('SwatchRequest', swatchRequestSchema);
