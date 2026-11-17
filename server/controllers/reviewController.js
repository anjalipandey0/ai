import { Review } from '../models/Review.js';
import { initialReviews } from '../seed/seedData.js';
import { getIsConnected } from '../config/db.js';

let memoryReviews = [...initialReviews].map((item, index) => ({
  ...item,
  _id: `mem_rev_${index + 1}`,
  createdAt: new Date().toISOString()
}));

export const getReviews = async (req, res) => {
  try {
    const { industry, status } = req.query;

    if (getIsConnected()) {
      let query = {};
      if (status) {
        query.status = status;
      } else {
        query.status = 'Approved';
      }

      if (industry && industry !== 'All Industries') {
        query.industry = new RegExp(`^${industry}$`, 'i');
      }

      const reviews = await Review.find(query).sort({ createdAt: -1 });
      return res.json({ success: true, count: reviews.length, data: reviews });
    }

    let filtered = [...memoryReviews];
    if (status) {
      filtered = filtered.filter(r => r.status.toLowerCase() === status.toLowerCase());
    } else {
      filtered = filtered.filter(r => r.status === 'Approved');
    }

    if (industry && industry !== 'All Industries') {
      filtered = filtered.filter(r => r.industry?.toLowerCase() === industry.toLowerCase());
    }

    return res.json({ success: true, count: filtered.length, data: filtered });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createReview = async (req, res) => {
  try {
    const { name, studio, quote, rating, industry, image } = req.body;

    if (!name || !studio || !quote) {
      return res.status(400).json({
        success: false,
        message: 'Please provide Name, Studio/Company, and your Reflection text'
      });
    }

    const reviewData = {
      name,
      studio,
      quote,
      rating: Number(rating) || 5,
      industry: industry || 'General',
      image: image || '',
      status: 'Approved', // Auto-approved for showroom display, with moderation available in admin
      isFeatured: false
    };

    if (getIsConnected()) {
      const review = await Review.create(reviewData);
      return res.status(201).json({
        success: true,
        data: review,
        message: 'Your reflection has been submitted and added to the archive.'
      });
    }

    const newRev = {
      ...reviewData,
      _id: `mem_rev_${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    memoryReviews.unshift(newRev);

    return res.status(201).json({
      success: true,
      data: newRev,
      message: 'Your reflection has been submitted and added to the archive.'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateReviewStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['Approved', 'Pending', 'Dismissed'].includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status' });
    }

    if (getIsConnected()) {
      const updated = await Review.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
      if (!updated) {
        return res.status(404).json({ success: false, message: 'Review not found' });
      }
      return res.json({ success: true, data: updated });
    }

    const item = memoryReviews.find(r => r._id === id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Review not found' });
    }
    item.status = status;
    return res.json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    if (getIsConnected()) {
      await Review.findByIdAndDelete(id);
      return res.json({ success: true, message: 'Review deleted' });
    }

    memoryReviews = memoryReviews.filter(r => r._id !== id);
    return res.json({ success: true, message: 'Review deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
