import React, { useState } from 'react';
import { api } from '../services/api';

export default function SwatchModal({ textile, onClose }) {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    company: '',
    shippingAddress: '',
    notes: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!textile) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await api.requestSwatch({
        textileName: textile.name,
        ...formData,
      });
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Failed to submit swatch request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-margin-mobile">
      <div
        className="absolute inset-0 bg-primary/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-surface w-full max-w-xl p-8 md:p-12 shadow-2xl border border-outline-variant/30 z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary hover:opacity-70 transition-opacity"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        {!success ? (
          <>
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-2">
              Sample Acquisition
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary mb-2">
              Request Swatch
            </h2>
            <p className="font-body-md text-sm text-secondary mb-8">
              Order a complimentary textile swatch of <strong className="text-primary">{textile.name}</strong> delivered directly to your studio.
            </p>

            {error && (
              <div className="p-3 mb-6 bg-error-container text-on-error-container text-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label className="font-label-caps text-xs text-secondary uppercase block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  placeholder="e.g. Julian Hayes"
                  className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 px-0 py-2 font-body-md text-primary"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-label-caps text-xs text-secondary uppercase block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="julian@studio.com"
                    className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 px-0 py-2 font-body-md text-primary"
                  />
                </div>
                <div>
                  <label className="font-label-caps text-xs text-secondary uppercase block mb-1">
                    Studio / Firm
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Bespoke Furnishings"
                    className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 px-0 py-2 font-body-md text-primary"
                  />
                </div>
              </div>

              <div>
                <label className="font-label-caps text-xs text-secondary uppercase block mb-1">
                  Studio Shipping Address *
                </label>
                <textarea
                  required
                  rows={2}
                  value={formData.shippingAddress}
                  onChange={(e) => setFormData({ ...formData, shippingAddress: e.target.value })}
                  placeholder="Street address, Suite, City, Postal Code, Country"
                  className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 px-0 py-2 font-body-md text-primary resize-none"
                />
              </div>

              <div>
                <label className="font-label-caps text-xs text-secondary uppercase block mb-1">
                  Project Notes (Optional)
                </label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Dimensions needed, project scope"
                  className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 px-0 py-2 font-body-md text-primary"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-on-primary py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-tertiary-container transition-colors mt-6"
              >
                {loading ? 'Dispatching Request...' : 'Confirm Swatch Dispatch'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <span className="material-symbols-outlined text-6xl text-primary mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            <h3 className="font-headline-md text-headline-md text-primary mb-3">
              Sample Dispatched
            </h3>
            <p className="font-body-md text-secondary mb-8">
              We have received your sample request for <strong>{textile.name}</strong>. Our atelier will prepare your package for courier dispatch.
            </p>
            <button
              onClick={onClose}
              className="border border-primary text-primary px-8 py-3 font-label-caps uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors"
            >
              Return to Catalog
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
