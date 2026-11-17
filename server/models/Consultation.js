import mongoose from 'mongoose';

const consultationSchema = new mongoose.Schema({
  meetingType: {
    type: String,
    required: [true, 'Consultation type is required'],
    enum: [
      'Virtual Showroom Walkthrough',
      'In-person Sample Review',
      'Custom Bulk Order Consultation',
    ],
  },
  date: {
    type: String,
    required: [true, 'Date is required'],
  },
  timeSlot: {
    type: String,
    required: [true, 'Time slot is required'],
  },
  name: {
    type: String,
    required: [true, 'Client name is required'],
    trim: true,
  },
  brand: {
    type: String,
    required: [true, 'Brand / Studio name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email address is required'],
    trim: true,
    lowercase: true,
  },
  timeline: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
    default: 'Pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Consultation = mongoose.model('Consultation', consultationSchema);
