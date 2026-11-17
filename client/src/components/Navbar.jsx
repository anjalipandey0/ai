import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Catalog', path: '/catalog' },
    { label: 'About', path: '/about' },
    { label: 'History', path: '/history' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Schedule Meeting', path: '/book' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 border-b border-outline-variant/20 ${
          scrolled
            ? 'bg-surface/95 backdrop-blur-md shadow-sm py-5'
            : 'bg-surface/80 backdrop-blur-md py-6'
        }`}
      >
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          {/* Brand Logo */}
          <Link
            to="/"
            className="font-display-lg text-headline-md text-primary uppercase tracking-tighter shrink-0 hover:opacity-80 transition-opacity"
          >
            VELOUR &amp; WEAVE
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-8 items-center flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-body-md text-body-md uppercase tracking-widest transition-colors duration-300 ${
                    isActive
                      ? 'text-primary font-bold border-b border-primary pb-1'
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Trailing Actions */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              to="/admin"
              className="text-secondary hover:text-primary p-2 transition-colors flex items-center justify-center"
              title="Admin Showroom Dashboard"
            >
              <span className="material-symbols-outlined text-[22px]">admin_panel_settings</span>
            </Link>
            <Link
              to="/book"
              className="bg-primary text-on-primary px-8 py-3.5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-tertiary-container hover:text-tertiary-fixed transition-colors duration-300"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-primary p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[30px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-surface/98 backdrop-blur-lg pt-28 px-margin-mobile flex flex-col justify-between pb-12 lg:hidden">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-display-lg text-headline-md uppercase tracking-tight py-2 border-b border-outline-variant/20 ${
                    isActive ? 'text-primary font-bold' : 'text-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/admin"
              className="font-display-lg text-headline-md uppercase tracking-tight py-2 border-b border-outline-variant/20 text-secondary flex items-center gap-3"
            >
              <span className="material-symbols-outlined">dashboard</span>
              Admin Dashboard
            </Link>
          </div>

          <div>
            <Link
              to="/book"
              className="w-full block text-center bg-primary text-on-primary py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-tertiary-container transition-colors"
            >
              Book Consultation
            </Link>
            <p className="text-center font-body-md text-sm text-secondary mt-6">
              © 2024 VELOUR &amp; WEAVE. CRAFTED FOR THE DISCERNING.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
