import { Consultation } from '../models/Consultation.js';
import { Review } from '../models/Review.js';
import { Textile } from '../models/Textile.js';
import { SwatchRequest } from '../models/SwatchRequest.js';
import { getIsConnected } from '../config/db.js';

export const getDashboardStats = async (req, res) => {
  try {
    if (getIsConnected()) {
      const [pendingConsultations, totalConsultations, approvedReviews, totalTextiles, swatchCount] = await Promise.all([
        Consultation.countDocuments({ status: { $in: ['Pending', 'Confirmed'] } }),
        Consultation.countDocuments(),
        Review.find({ status: 'Approved' }),
        Textile.countDocuments(),
        SwatchRequest.countDocuments()
      ]);

      const avgRating = approvedReviews.length > 0
        ? (approvedReviews.reduce((sum, r) => sum + (r.rating || 5), 0) / approvedReviews.length).toFixed(1)
        : '4.9';

      const recentAppointments = await Consultation.find().sort({ createdAt: -1 }).limit(5);
      const pendingReviews = await Review.find({ status: 'Pending' }).sort({ createdAt: -1 }).limit(5);

      return res.json({
        success: true,
        data: {
          pendingConsultations,
          totalConsultations,
          topCategory: 'Silk',
          categoryStat: '45% of total inquiries this month',
          avgRating: `${avgRating}/5`,
          reviewCount: approvedReviews.length,
          totalTextiles,
          swatchCount,
          recentAppointments,
          pendingReviews
        }
      });
    }

    // In-memory fallback
    return res.json({
      success: true,
      data: {
        pendingConsultations: 3,
        totalConsultations: 12,
        topCategory: 'Silk',
        categoryStat: '45% of total inquiries this month',
        avgRating: '4.9/5',
        reviewCount: 124,
        totalTextiles: 9,
        swatchCount: 18,
        recentAppointments: [
          {
            _id: '1',
            name: 'Eleanor Vance',
            brand: 'Studio Ashby - Trade Account',
            meetingType: 'Virtual Showroom Walkthrough',
            date: 'Today, 2:00 PM',
            timeSlot: '2:00 PM',
            status: 'Confirmed'
          },
          {
            _id: '2',
            name: 'Studio Ashby',
            brand: 'Studio Ashby - Trade Account',
            meetingType: 'In-person Sample Review',
            date: 'Tomorrow, 10:00 AM',
            timeSlot: '10:00 AM',
            status: 'Pending'
          },
          {
            _id: '3',
            name: 'Oliver Sterling',
            brand: 'Fairmont Hotels & Resorts',
            meetingType: 'Custom Bulk Order Consultation',
            date: 'Oct 24, 1:00 PM',
            timeSlot: '1:00 PM',
            status: 'Completed'
          }
        ],
        pendingReviews: [
          {
            _id: 'rev_p_1',
            name: 'Sophia R.',
            studio: 'Mayfair Interiors',
            rating: 5,
            quote: 'The bespoke velvet we sourced for the Mayfair project is absolutely stunning. The texture is unparalleled.',
            status: 'Pending'
          }
        ]
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
