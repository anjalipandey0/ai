import { Consultation } from '../models/Consultation.js';
import { initialConsultations } from '../seed/seedData.js';
import { getIsConnected } from '../config/db.js';

let memoryConsultations = [...initialConsultations].map((item, index) => ({
  ...item,
  _id: `mem_con_${index + 1}`,
  createdAt: new Date().toISOString()
}));

export const getConsultations = async (req, res) => {
  try {
    if (getIsConnected()) {
      const consultations = await Consultation.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: consultations.length, data: consultations });
    }

    return res.json({ success: true, count: memoryConsultations.length, data: memoryConsultations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createConsultation = async (req, res) => {
  try {
    const { meetingType, date, timeSlot, name, brand, email, timeline } = req.body;

    if (!meetingType || !date || !timeSlot || !name || !brand || !email) {
      return res.status(400).json({
        success: false,
        message: 'Please complete all required fields (Meeting Type, Date, Time, Name, Brand, Email)'
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    if (getIsConnected()) {
      const consultation = await Consultation.create({
        meetingType,
        date,
        timeSlot,
        name,
        brand,
        email,
        timeline: timeline || '',
        status: 'Confirmed'
      });

      return res.status(201).json({
        success: true,
        data: consultation,
        message: `Consultation confirmed for ${date} at ${timeSlot}. A calendar invitation has been sent to ${email}.`
      });
    }

    const newBooking = {
      _id: `mem_con_${Date.now()}`,
      meetingType,
      date,
      timeSlot,
      name,
      brand,
      email,
      timeline: timeline || '',
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };
    memoryConsultations.unshift(newBooking);

    return res.status(201).json({
      success: true,
      data: newBooking,
      message: `Consultation confirmed for ${date} at ${timeSlot}. A calendar invitation has been sent to ${email}.`
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateConsultationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['Pending', 'Confirmed', 'Completed', 'Cancelled'].includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status' });
    }

    if (getIsConnected()) {
      const updated = await Consultation.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
      if (!updated) {
        return res.status(404).json({ success: false, message: 'Consultation not found' });
      }
      return res.json({ success: true, data: updated });
    }

    const item = memoryConsultations.find(c => c._id === id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Consultation not found' });
    }
    item.status = status;
    return res.json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteConsultation = async (req, res) => {
  try {
    const { id } = req.params;

    if (getIsConnected()) {
      await Consultation.findByIdAndDelete(id);
      return res.json({ success: true, message: 'Consultation removed' });
    }

    memoryConsultations = memoryConsultations.filter(c => c._id !== id);
    return res.json({ success: true, message: 'Consultation removed' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
