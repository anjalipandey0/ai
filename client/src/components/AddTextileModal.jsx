import React, { useState } from 'react';
import { api } from '../services/api';

export default function AddTextileModal({ isOpen, onClose, onCreated }) {
  const [formData, setFormData] = useState({
    name: '',
    subtitle: '',
    material: 'Silk',
    color: 'Earth Tones',
    pattern: 'Solid / Textured',
    application: 'Upholstery Heavy',
    gsm: 600,
    composition: '100% Raw Natural Fiber',
    width: '140 cm / 55"',
    stockStatus: 'Available',
    description: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfycqx1m-VWqJTP90OhIa9dqC9SkyXuyuGW8n4oyHpyC1w4y_C2BHjeJQBimEzTHBmhbkO_RCfi8Bu1zIWi7NNYKB7HW5kA1lmTsChDiXvgXI2enrZcju5qBcapIRcHcnWs5rAuRdmR0d_WygmS7YcWR8j7vqCMZX2vkorL1rtD4r26bVc9kth09cDrWgLkq67f0jd7_GyChsxbji7Mnn9B3S286-7V3Qn8VLv6UABQq4WJJJfZ-wfxA',
    isNewArrival: false,
    isFeatured: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await api.createTextile({
        ...formData,
        gsm: Number(formData.gsm),
        subtitle: `${formData.color} • ${formData.gsm} GSM`,
      });
      onCreated();
      onClose();
    } catch (err) {
      setError(err.message || 'Failed to create textile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-margin-mobile">
      <div className="absolute inset-0 bg-primary/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-surface w-full max-w-2xl p-8 md:p-10 shadow-2xl border border-outline-variant/30 z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary hover:opacity-70 transition-opacity"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-2">
          Catalog Inventory
        </span>
        <h2 className="font-headline-md text-headline-md text-primary mb-6">
          Add New Textile
        </h2>

        {error && (
          <div className="p-3 mb-6 bg-error-container text-on-error-container text-xs">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-label-caps text-xs text-secondary uppercase block mb-1">
                Textile Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Royal Merino Velvet"
                className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 px-0 py-2 font-body-md text-primary"
              />
            </div>
            <div>
              <label className="font-label-caps text-xs text-secondary uppercase block mb-1">
                Material Category *
              </label>
              <select
                value={formData.material}
                onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 px-0 py-2 font-body-md text-primary"
              >
                <option value="Silk">Silk</option>
                <option value="Linen">Linen</option>
                <option value="Wool">Wool</option>
                <option value="Velvet">Velvet</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="font-label-caps text-xs text-secondary uppercase block mb-1">
                Color Palette *
              </label>
              <select
                value={formData.color}
                onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 px-0 py-2 font-body-md text-primary"
              >
                <option value="Earth Tones">Earth Tones</option>
                <option value="Voids">Voids (Deep Slate)</option>
                <option value="Neutrals">Neutrals (Ivory)</option>
                <option value="Olive">Olive</option>
                <option value="Deep Earth">Deep Earth</option>
              </select>
            </div>
            <div>
              <label className="font-label-caps text-xs text-secondary uppercase block mb-1">
                Pattern *
              </label>
              <select
                value={formData.pattern}
                onChange={(e) => setFormData({ ...formData, pattern: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 px-0 py-2 font-body-md text-primary"
              >
                <option value="Solid / Textured">Solid / Textured</option>
                <option value="Damask">Damask</option>
                <option value="Geometric">Geometric</option>
              </select>
            </div>
            <div>
              <label className="font-label-caps text-xs text-secondary uppercase block mb-1">
                Application *
              </label>
              <select
                value={formData.application}
                onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 px-0 py-2 font-body-md text-primary"
              >
                <option value="Upholstery Heavy">Upholstery Heavy</option>
                <option value="Drapery">Drapery</option>
                <option value="Wallcovering">Wallcovering</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="font-label-caps text-xs text-secondary uppercase block mb-1">
                Weight (GSM) *
              </label>
              <input
                type="number"
                required
                value={formData.gsm}
                onChange={(e) => setFormData({ ...formData, gsm: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 px-0 py-2 font-body-md text-primary"
              />
            </div>
            <div>
              <label className="font-label-caps text-xs text-secondary uppercase block mb-1">
                Composition
              </label>
              <input
                type="text"
                value={formData.composition}
                onChange={(e) => setFormData({ ...formData, composition: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 px-0 py-2 font-body-md text-primary"
              />
            </div>
            <div>
              <label className="font-label-caps text-xs text-secondary uppercase block mb-1">
                Width
              </label>
              <input
                type="text"
                value={formData.width}
                onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 px-0 py-2 font-body-md text-primary"
              />
            </div>
          </div>

          <div>
            <label className="font-label-caps text-xs text-secondary uppercase block mb-1">
              Image URL *
            </label>
            <input
              type="url"
              required
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 px-0 py-2 font-body-md text-primary"
            />
          </div>

          <div>
            <label className="font-label-caps text-xs text-secondary uppercase block mb-1">
              Architectural Description *
            </label>
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe tactile depth, provenance, and ideal interior applications..."
              className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 px-0 py-2 font-body-md text-primary resize-none"
            />
          </div>

          <div className="flex gap-6 items-center pt-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isNewArrival}
                onChange={(e) => setFormData({ ...formData, isNewArrival: e.target.checked })}
                className="custom-checkbox"
              />
              <span className="font-body-md text-sm text-primary">Mark as New Arrival</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isFeatured}
                onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                className="custom-checkbox"
              />
              <span className="font-body-md text-sm text-primary">Featured in Showcase</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-on-primary py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-tertiary-container transition-colors mt-6"
          >
            {loading ? 'Adding Textile...' : 'Publish to Showroom Catalog'}
          </button>
        </form>
      </div>
    </div>
  );
}
