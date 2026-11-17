// API client for Velour & Weave
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const api = {
  // Textiles
  async getTextiles(params = {}) {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, val]) => {
      if (val !== undefined && val !== null && val !== '') {
        query.append(key, val);
      }
    });
    const url = `${API_BASE_URL}/textiles${query.toString() ? `?${query.toString()}` : ''}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch textiles');
    return res.json();
  },

  async getTextileById(id) {
    const res = await fetch(`${API_BASE_URL}/textiles/${id}`);
    if (!res.ok) throw new Error('Failed to fetch textile details');
    return res.json();
  },

  async createTextile(data) {
    const res = await fetch(`${API_BASE_URL}/textiles`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.message || 'Failed to create textile');
    return result;
  },

  async deleteTextile(id) {
    const res = await fetch(`${API_BASE_URL}/textiles/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete textile');
    return res.json();
  },

  // Consultations / Booking
  async bookConsultation(data) {
    const res = await fetch(`${API_BASE_URL}/consultations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.message || 'Failed to schedule consultation');
    return result;
  },

  async getConsultations() {
    const res = await fetch(`${API_BASE_URL}/consultations`);
    if (!res.ok) throw new Error('Failed to fetch consultations');
    return res.json();
  },

  async updateConsultationStatus(id, status) {
    const res = await fetch(`${API_BASE_URL}/consultations/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    if (!res.ok) throw new Error('Failed to update consultation status');
    return res.json();
  },

  async deleteConsultation(id) {
    const res = await fetch(`${API_BASE_URL}/consultations/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete consultation');
    return res.json();
  },

  // Reviews / Reflections
  async getReviews(params = {}) {
    const query = new URLSearchParams(params).toString();
    const url = `${API_BASE_URL}/reviews${query ? `?${query}` : ''}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch reviews');
    return res.json();
  },

  async submitReview(data) {
    const res = await fetch(`${API_BASE_URL}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.message || 'Failed to submit review');
    return result;
  },

  async updateReviewStatus(id, status) {
    const res = await fetch(`${API_BASE_URL}/reviews/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    if (!res.ok) throw new Error('Failed to update review status');
    return res.json();
  },

  // Swatches
  async requestSwatch(data) {
    const res = await fetch(`${API_BASE_URL}/swatches`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.message || 'Failed to submit swatch request');
    return result;
  },

  async getSwatchRequests() {
    const res = await fetch(`${API_BASE_URL}/swatches`);
    if (!res.ok) throw new Error('Failed to fetch swatch requests');
    return res.json();
  },

  // Newsletter
  async subscribeNewsletter(email) {
    const res = await fetch(`${API_BASE_URL}/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.message || 'Failed to subscribe');
    return result;
  },

  // Analytics
  async getAnalyticsOverview() {
    const res = await fetch(`${API_BASE_URL}/analytics/overview`);
    if (!res.ok) throw new Error('Failed to fetch analytics');
    return res.json();
  },
};
