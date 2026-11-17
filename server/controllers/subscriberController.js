import { Subscriber } from '../models/Subscriber.js';
import { getIsConnected } from '../config/db.js';

let memorySubscribers = [
  { _id: 'mem_sub_1', email: 'atelier@studioashby.com', createdAt: new Date().toISOString() },
  { _id: 'mem_sub_2', email: 'design@rostova.com', createdAt: new Date().toISOString() }
];

export const getSubscribers = async (req, res) => {
  try {
    if (getIsConnected()) {
      const subscribers = await Subscriber.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: subscribers.length, data: subscribers });
    }
    return res.json({ success: true, count: memorySubscribers.length, data: memorySubscribers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: 'Please provide an email address' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address' });
    }

    const cleanEmail = email.toLowerCase().trim();

    if (getIsConnected()) {
      const existing = await Subscriber.findOne({ email: cleanEmail });
      if (existing) {
        return res.status(200).json({
          success: true,
          message: 'You are already registered to receive Velour & Weave private collections.'
        });
      }

      const subscriber = await Subscriber.create({ email: cleanEmail });
      return res.status(201).json({
        success: true,
        data: subscriber,
        message: 'Thank you for joining the Registry. You will receive exclusive editorial updates.'
      });
    }

    const exists = memorySubscribers.some(s => s.email === cleanEmail);
    if (exists) {
      return res.status(200).json({
        success: true,
        message: 'You are already registered to receive Velour & Weave private collections.'
      });
    }

    const newSub = {
      _id: `mem_sub_${Date.now()}`,
      email: cleanEmail,
      createdAt: new Date().toISOString()
    };
    memorySubscribers.unshift(newSub);

    return res.status(201).json({
      success: true,
      data: newSub,
      message: 'Thank you for joining the Registry. You will receive exclusive editorial updates.'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
