import React, { useState } from 'react';

export default function QuickViewModal({ textile, onClose, onRequestSwatch }) {
  const [bookmarked, setBookmarked] = useState(false);

  if (!textile) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-margin-mobile">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-surface w-full max-w-5xl shadow-[0_40px_80px_rgba(1,2,3,0.15)] flex flex-col md:flex-row overflow-hidden max-h-[90vh] z-10 border border-outline-variant/30">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-surface/90 backdrop-blur text-primary border border-outline-variant hover:bg-surface-container transition-colors"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Image Half */}
        <div className="w-full md:w-1/2 min-h-[320px] md:min-h-[550px] bg-surface-container-low relative overflow-hidden">
          <img
            src={textile.image}
            alt={textile.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 z-10">
            <span className="font-label-caps text-[11px] uppercase tracking-widest bg-primary/80 text-on-primary px-3 py-1 backdrop-blur-sm">
              {textile.material} • {textile.application}
            </span>
          </div>
        </div>

        {/* Details Half */}
        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col justify-between">
          <div>
            <span className="font-label-caps text-label-caps text-secondary block mb-2 tracking-widest uppercase">
              {textile.color} • {textile.application}
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4 leading-tight">
              {textile.name}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              {textile.description}
            </p>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8 border-t border-b border-outline-variant/30 py-6">
              <div>
                <span className="font-label-caps text-label-caps text-secondary block mb-1">
                  Composition
                </span>
                <span className="font-body-md text-body-md text-primary font-medium">
                  {textile.composition || '100% Natural Fiber'}
                </span>
              </div>
              <div>
                <span className="font-label-caps text-label-caps text-secondary block mb-1">
                  Width
                </span>
                <span className="font-body-md text-body-md text-primary font-medium">
                  {textile.width || '140 cm / 55"'}
                </span>
              </div>
              <div>
                <span className="font-label-caps text-label-caps text-secondary block mb-1">
                  Weight (GSM)
                </span>
                <span className="font-body-md text-body-md text-primary font-medium">
                  {textile.gsm} g/m²
                </span>
              </div>
              <div>
                <span className="font-label-caps text-label-caps text-secondary block mb-1">
                  Stock Status
                </span>
                <span className="font-body-md text-body-md flex items-center gap-2 text-primary font-medium">
                  <span className="w-2 h-2 bg-[#010203] block" />
                  {textile.stockStatus || 'Available'}
                </span>
              </div>
            </div>

            {/* Care Instructions */}
            <div className="mb-8">
              <span className="font-label-caps text-label-caps text-secondary block mb-2 tracking-widest uppercase">
                Care Instructions
              </span>
              <ul className="font-body-md text-body-md text-on-surface-variant space-y-2 mt-3">
                {(textile.careInstructions || [
                  'Professional dry clean only',
                  'Do not bleach',
                  'Iron low heat on reverse'
                ]).map((instruction, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      check
                    </span>
                    {instruction}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex gap-4 pt-4 border-t border-outline-variant/20 mt-auto">
            <button
              onClick={() => {
                onClose();
                onRequestSwatch(textile);
              }}
              className="flex-1 bg-primary text-on-primary font-label-caps text-label-caps py-4 uppercase tracking-widest hover:bg-tertiary-container hover:text-tertiary-fixed transition-colors"
            >
              Request Swatch
            </button>
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`w-14 border border-outline-variant flex items-center justify-center transition-colors ${
                bookmarked
                  ? 'bg-primary text-on-primary border-primary'
                  : 'text-primary hover:bg-surface-container'
              }`}
              title={bookmarked ? 'Saved to Wishlist' : 'Save to Wishlist'}
            >
              <span className="material-symbols-outlined">
                {bookmarked ? 'bookmark' : 'bookmark_add'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
