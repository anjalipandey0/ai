import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus({ state: 'submitting', message: '' });
    try {
      const res = await api.subscribeNewsletter(email);
      setStatus({ state: 'success', message: res.message || 'Thank you for joining the Registry.' });
      setEmail('');
    } catch (err) {
      setStatus({ state: 'error', message: err.message || 'Subscription failed. Please try again.' });
    }
  };

  return (
    <footer className="bg-surface w-full pt-section-gap pb-12 border-t border-outline-variant/30 mt-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <Link
            to="/"
            className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6 block uppercase tracking-tighter"
          >
            VELOUR &amp; WEAVE
          </Link>
          <p className="font-body-md text-body-md text-secondary mb-8 max-w-sm">
            Crafting environments through the language of exceptional textiles.
          </p>
          <div className="text-secondary text-sm">
            © 2024 VELOUR &amp; WEAVE. CRAFTED FOR THE DISCERNING.
          </div>
        </div>

        {/* Link Columns */}
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-1">Navigation</span>
            <Link to="/catalog" className="font-body-md text-body-md text-secondary hover:text-primary transition-all duration-300">
              Collections
            </Link>
            <Link to="/book" className="font-body-md text-body-md text-secondary hover:text-primary transition-all duration-300">
              Bespoke Service
            </Link>
            <Link to="/history" className="font-body-md text-body-md text-secondary hover:text-primary transition-all duration-300">
              Heritage &amp; Portfolio
            </Link>
            <Link to="/about" className="font-body-md text-body-md text-secondary hover:text-primary transition-all duration-300">
              About the Artisans
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-1">Company</span>
            <Link to="/testimonials" className="font-body-md text-body-md text-secondary hover:text-primary transition-all duration-300">
              Client Testimonials
            </Link>
            <Link to="/admin" className="font-body-md text-body-md text-secondary hover:text-primary transition-all duration-300">
              Admin Showroom
            </Link>
            <a href="#legal" onClick={(e) => e.preventDefault()} className="font-body-md text-body-md text-secondary hover:text-primary transition-all duration-300">
              Privacy &amp; Terms
            </a>
            <Link to="/book" className="font-body-md text-body-md text-secondary hover:text-primary transition-all duration-300">
              Direct Contact
            </Link>
          </div>

          {/* Join the Registry */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <h4 className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-2">
              Join the Registry
            </h4>
            <p className="font-body-md text-xs text-secondary leading-relaxed">
              Receive private invitations to seasonal textile releases and trade exhibitions.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <div className="relative border-b border-primary pb-2 flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-body-md text-primary placeholder-secondary/50 pr-8"
                />
                <button
                  type="submit"
                  disabled={status.state === 'submitting'}
                  className="absolute right-0 top-0 text-primary hover:opacity-70 transition-opacity"
                  aria-label="Subscribe"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {status.state === 'submitting' ? 'hourglass_empty' : 'arrow_forward'}
                  </span>
                </button>
              </div>
              {status.message && (
                <p className={`text-xs mt-2 ${status.state === 'error' ? 'text-error' : 'text-primary'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
