import React, { useState, useEffect } from 'react';
import { api } from '../services/api';

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndustry, setActiveIndustry] = useState('All Industries');

  // Reflection form state
  const [formData, setFormData] = useState({
    name: '',
    studio: '',
    industry: 'Hospitality',
    rating: 5,
    quote: '',
    image: '',
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const industries = ['All Industries', 'Hospitality', 'Residential', 'Apparel'];

  const fetchReviewsList = async () => {
    setLoading(true);
    try {
      const res = await api.getReviews({
        industry: activeIndustry === 'All Industries' ? '' : activeIndustry,
      });
      setReviews(res.data || []);
    } catch (err) {
      console.error('Failed to load reviews:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviewsList();
  }, [activeIndustry]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.studio || !formData.quote) {
      setMessage({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    setSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const res = await api.submitReview(formData);
      setMessage({ type: 'success', text: res.message || 'Thank you. Your reflection has been recorded.' });
      setFormData({
        name: '',
        studio: '',
        industry: 'Hospitality',
        rating: 5,
        quote: '',
        image: '',
      });
      // Refresh list
      fetchReviewsList();
    } catch (err) {
      setMessage({ type: 'error', text: err.message || 'Failed to submit reflection.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="pt-[120px] pb-section-gap">
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-16 pb-20 text-center">
        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4 block">
          Reflections on Craft
        </span>
        <h1 className="font-display-lg text-display-lg text-primary mb-6 max-w-4xl mx-auto leading-tight">
          Voices of Visionaries
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Hear from the discerning architects, designers, and creators who have woven our heritage into their masterworks.
        </p>
      </section>

      {/* Filter Chips */}
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16">
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setActiveIndustry(ind)}
              className={`px-6 py-2.5 font-label-caps text-label-caps uppercase transition-colors rounded-none ${
                activeIndustry === ind
                  ? 'border border-primary bg-primary text-on-primary'
                  : 'border border-outline text-secondary hover:border-primary hover:text-primary'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
      </div>

      {/* High-Impact Bento Testimonials */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap">
        {/* Featured Review 1 */}
        <div className="md:col-span-8 bg-surface-container-low p-10 md:p-16 border border-outline-variant/30 flex flex-col justify-center relative overflow-hidden group">
          <div
            className="absolute inset-0 z-0 opacity-10 grayscale mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3uF3Z5vzhWbIb5ZTfuUicDfNEK5UWZz_I9PMI80osXfDEyw12HgOJ0W2y698_4MWlSeNUodSGA-2wUZSLPRU9fHkRJ673pj2QSt7oSEFIMWZOv-3oB7d59xSjMLLbqKedR7uX15U-YvLb6MrStIQhZRQBfI6x_8YOjbjbM94nmh-lttq9AqyMFUxvEs9NvIRYyEJKeaTCXS-wjvdE52eR120Ny-WkNbcz9o-k3yqFmqR9DfDHet_IqQ')`,
            }}
          />
          <div className="relative z-10">
            <span
              className="material-symbols-outlined text-outline-variant mb-6 block"
              style={{ fontSize: '48px' }}
            >
              format_quote
            </span>
            <blockquote className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-8 leading-tight">
              "The unparalleled texture of Velour &amp; Weave’s heritage linens transformed the spatial acoustics of the Milan Grand Hotel. It is not merely fabric; it is architectural poetry."
            </blockquote>
            <div className="flex items-center gap-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA90M_bvlgxxePNI6NFk6z0SMsxT_5cUHE4hXzWaZxQelBHR19cWG-J7SWlhaYRrN4Jq3UvhOshzAjNgrBZBPvZ-VXNPAMMUrzPVkcHoF1A8KAM3p5iKA6b8bd7JGqdTTdhd8lKmKdt8319lD1IyM-VPRoc8CDvBzzPDhJHjyz1qcEQHh2dupf9T8Id9rw5bBQtojtpgRltKwR2bxUYD2aWkXb0KaE74v4OPa2XXKojtGbfBoXcI-NYZg"
                alt="Elena Rostova"
                className="w-16 h-16 rounded-full object-cover grayscale border border-outline-variant"
              />
              <div>
                <div className="font-label-caps text-label-caps text-primary uppercase">
                  Elena Rostova
                </div>
                <div className="font-body-md text-secondary text-sm">
                  Lead Interior Architect, Rostova Studio
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side Review 1 */}
        <div className="md:col-span-4 flex flex-col gap-gutter">
          <div className="flex-1 bg-surface-container border border-outline-variant/30 p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
            <div>
              <div className="flex text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant italic mb-6 leading-relaxed">
                "An indispensable partner for bespoke residential upholstery. The tactile quality and drape are unmatched."
              </p>
            </div>
            <div>
              <div className="font-label-caps text-label-caps text-primary uppercase">
                Julian Hayes
              </div>
              <div className="font-body-md text-secondary text-sm">
                Bespoke Furnishings
              </div>
            </div>
          </div>
        </div>

        {/* Image Break / Aesthetic Moment */}
        <div className="md:col-span-5 h-[400px] relative overflow-hidden group border border-outline-variant/30">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBajvZMj3pz37IGZeYlbNyrYgZikmrbvy3r3F3G_cQ6yrPFggiM0rRu3FaQGaXIULhYJ0nKyleIcxD3Oy2_P4Ox7mYJRj6-K81NwA_H3cLt5NVpQZHpL3PAdCxvYvEF3WKSXnwI3bCcqf4flfLrzX6BNRUjOtlXQo2aihfblaurVNKqXd_tREAmGFdro5DGwVjZHI9tYCMQ8zaQSK6dEmFOsb3jzEEkYgRDf_np1ki0a0wBSlU23ILmuw')`,
            }}
          />
          <div className="absolute inset-0 textile-overlay" />
          <div className="absolute bottom-6 left-6 z-10">
            <span className="font-label-caps text-label-caps text-on-primary uppercase tracking-widest bg-primary/80 px-3 py-1 backdrop-blur-sm">
              Project Archive
            </span>
          </div>
        </div>

        {/* Featured Review 2 */}
        <div className="md:col-span-7 bg-surface p-10 md:p-14 border border-outline-variant/30 flex flex-col justify-center">
          <blockquote className="font-headline-md text-headline-md text-primary mb-8 italic leading-snug">
            "When designing the Fall bespoke collection, we required a velvet that possessed both immense weight and an ethereal drape. VELOUR &amp; WEAVE delivered a textile that dictated the entire silhouette."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-surface-variant rounded-full flex items-center justify-center border border-outline-variant">
              <span className="font-label-caps text-label-caps text-primary">MV</span>
            </div>
            <div>
              <div className="font-label-caps text-label-caps text-primary uppercase">
                Marco V.
              </div>
              <div className="font-body-md text-secondary text-sm">
                Fashion Director, Atelier V.
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Reviews from Database */}
        {reviews
          .filter(
            (r) =>
              r.name !== 'Elena Rostova' &&
              r.name !== 'Julian Hayes' &&
              r.name !== 'Marco V.'
          )
          .map((rev) => (
            <div
              key={rev._id}
              className="md:col-span-6 bg-surface-container-lowest border border-outline-variant/30 p-8 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex text-primary mb-3">
                  {[...Array(rev.rating || 5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <blockquote className="font-body-lg text-primary italic mb-6 leading-relaxed">
                  "{rev.quote}"
                </blockquote>
              </div>
              <div className="border-t border-outline-variant/20 pt-4 flex justify-between items-end">
                <div>
                  <div className="font-label-caps text-label-caps text-primary uppercase">
                    {rev.name}
                  </div>
                  <div className="font-body-md text-secondary text-xs">
                    {rev.studio} {rev.role ? `• ${rev.role}` : ''}
                  </div>
                </div>
                <span className="font-label-caps text-[10px] text-secondary uppercase bg-surface-container px-2 py-1">
                  {rev.industry}
                </span>
              </div>
            </div>
          ))}
      </section>

      {/* Submit Review Form (Glassmorphism / High-end UI) */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap relative">
        <div className="absolute inset-0 bg-surface-container-high -z-10 -mx-margin-mobile md:-mx-margin-desktop translate-y-1/2 h-1/2" />
        <div className="glass-panel ambient-shadow p-8 md:p-16 max-w-4xl mx-auto border border-outline-variant/30">
          <div className="text-center mb-10">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
              Leave a Reflection
            </h2>
            <p className="font-body-md text-body-md text-secondary max-w-lg mx-auto">
              Share your experience and the architectural projects brought to life with our textiles.
            </p>
          </div>

          {message.text && (
            <div
              className={`p-4 mb-8 text-sm ${
                message.type === 'error'
                  ? 'bg-error-container text-on-error-container'
                  : 'bg-secondary-container text-on-secondary-container'
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="font-label-caps text-label-caps text-secondary absolute -top-2 bg-surface-bright px-2 left-2 z-10">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 px-4 py-3 font-body-md text-primary transition-all rounded-none"
                />
              </div>

              <div className="relative">
                <label className="font-label-caps text-label-caps text-secondary absolute -top-2 bg-surface-bright px-2 left-2 z-10">
                  Studio / Company *
                </label>
                <input
                  type="text"
                  required
                  value={formData.studio}
                  onChange={(e) => setFormData({ ...formData, studio: e.target.value })}
                  placeholder="Enter your organization"
                  className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 px-4 py-3 font-body-md text-primary transition-all rounded-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <label className="font-label-caps text-label-caps text-secondary block mb-2">
                  Industry Specialization
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 px-2 py-3 font-body-md text-primary rounded-none cursor-pointer"
                >
                  <option value="Hospitality">Hospitality</option>
                  <option value="Residential">Residential</option>
                  <option value="Apparel">Apparel &amp; Runway</option>
                  <option value="Commercial">Commercial Interiors</option>
                </select>
              </div>

              <div>
                <label className="font-label-caps text-label-caps text-secondary block mb-2">
                  Rating
                </label>
                <div className="flex gap-2 text-outline-variant cursor-pointer">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="p-1 focus:outline-none transition-colors"
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: '32px',
                          color: (hoverRating || formData.rating) >= star ? '#010203' : '#c4c7c9',
                          fontVariationSettings: (hoverRating || formData.rating) >= star ? "'FILL' 1" : "'FILL' 0",
                        }}
                      >
                        star
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <label className="font-label-caps text-label-caps text-secondary absolute -top-2 bg-surface-bright px-2 left-2 z-10">
                Your Experience *
              </label>
              <textarea
                required
                rows={4}
                value={formData.quote}
                onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                placeholder="Describe how our textiles elevated your architectural or interior project..."
                className="w-full bg-transparent border border-outline hover:border-primary focus:border-primary focus:border-2 focus:ring-0 p-4 font-body-md text-primary transition-all resize-none rounded-none"
              />
            </div>

            <div className="relative">
              <label className="font-label-caps text-label-caps text-secondary absolute -top-2 bg-surface-bright px-2 left-2 z-10">
                Project Image URL (Optional)
              </label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="https://example.com/project-image.jpg"
                className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 px-4 py-3 font-body-md text-primary transition-all rounded-none"
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                disabled={submitting}
                className="font-label-caps text-label-caps uppercase tracking-widest bg-primary text-on-primary px-10 py-4 hover:bg-surface-tint transition-colors rounded-none"
              >
                {submitting ? 'Submitting...' : 'Submit Reflection'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
