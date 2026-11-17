import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { api } from '../services/api';
import QuickViewModal from '../components/QuickViewModal';
import SwatchModal from '../components/SwatchModal';

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [textiles, setTextiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Modals state
  const [selectedTextile, setSelectedTextile] = useState(null);
  const [swatchTextile, setSwatchTextile] = useState(null);

  // Filter States
  const [selectedMaterials, setSelectedMaterials] = useState(() => {
    const cat = searchParams.get('category');
    return cat ? [cat] : [];
  });
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPatterns, setSelectedPatterns] = useState([]);
  const [selectedApplications, setSelectedApplications] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');

  // Mobile sidebar toggle
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const materialsList = ['Silk', 'Linen', 'Wool', 'Velvet'];
  const colorList = [
    { label: 'Earth Tones', hex: '#F3E0C3' },
    { label: 'Voids', hex: '#1A1D1F' },
    { label: 'Neutrals', hex: '#EAE7E7' },
    { label: 'Olive', hex: '#92836A' },
    { label: 'Deep Earth', hex: '#524530' },
  ];
  const patternList = ['Damask', 'Geometric', 'Solid / Textured'];
  const applicationList = ['Upholstery Heavy', 'Drapery', 'Wallcovering'];

  const fetchCatalog = async () => {
    setLoading(true);
    setError('');
    try {
      const params = {
        material: selectedMaterials.join(','),
        color: selectedColors.join(','),
        pattern: selectedPatterns.join(','),
        application: selectedApplications.join(','),
        sort: sortBy,
        search: searchQuery,
      };
      const res = await api.getTextiles(params);
      setTextiles(res.data || []);
    } catch (err) {
      setError(err.message || 'Failed to load catalog');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatalog();
  }, [selectedMaterials, selectedColors, selectedPatterns, selectedApplications, sortBy]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchCatalog();
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const toggleColor = (col) => {
    setSelectedColors((prev) =>
      prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]
    );
  };

  const togglePattern = (pat) => {
    setSelectedPatterns((prev) =>
      prev.includes(pat) ? prev.filter((p) => p !== pat) : [...prev, pat]
    );
  };

  const toggleApplication = (app) => {
    setSelectedApplications((prev) =>
      prev.includes(app) ? prev.filter((a) => a !== app) : [...prev, app]
    );
  };

  const clearFilters = () => {
    setSelectedMaterials([]);
    setSelectedColors([]);
    setSelectedPatterns([]);
    setSelectedApplications([]);
    setSearchQuery('');
    setSortBy('newest');
    setSearchParams({});
  };

  return (
    <main className="flex-grow pt-[120px] md:pt-[150px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      {/* Header Section */}
      <header className="mb-12 md:mb-20">
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-6">
          The Collection
        </h1>
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl leading-relaxed">
          An archival selection of premium textiles, meticulously sourced and woven for structural integrity and profound tactile depth. Designed for discerning spaces.
        </p>
      </header>

      {/* Mobile Filter Toggle Button */}
      <div className="md:hidden mb-6 flex justify-between items-center border-b border-outline-variant/30 pb-4">
        <button
          onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          className="flex items-center gap-2 border border-primary px-4 py-2 font-label-caps text-label-caps uppercase"
        >
          <span className="material-symbols-outlined text-[18px]">tune</span>
          {mobileFilterOpen ? 'Hide Filters' : 'Filter Collection'}
        </button>
        <span className="font-label-caps text-label-caps text-secondary">
          {textiles.length} Textiles
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-gutter">
        {/* Sidebar Filters */}
        <aside
          className={`w-full lg:w-1/4 flex-shrink-0 sidebar-scroll pr-4 pb-8 h-auto lg:h-[calc(100vh-200px)] lg:sticky top-[120px] overflow-y-auto border-r border-outline-variant/30 ${
            mobileFilterOpen ? 'block mb-8' : 'hidden md:block'
          }`}
        >
          {/* Search bar inside sidebar */}
          <div className="mb-10">
            <h3 className="font-label-caps text-label-caps text-secondary mb-4 border-b border-outline-variant/30 pb-2">
              SEARCH ARCHIVE
            </h3>
            <form onSubmit={handleSearchSubmit} className="relative border-b border-primary pb-2 flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search material, weave..."
                className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-sm text-primary placeholder-secondary/50 pr-6"
              />
              <button type="submit" className="text-primary hover:opacity-70">
                <span className="material-symbols-outlined text-[18px]">search</span>
              </button>
            </form>
          </div>

          {/* Material Filter */}
          <div className="mb-10">
            <h3 className="font-label-caps text-label-caps text-secondary mb-6 border-b border-outline-variant/30 pb-2">
              MATERIAL
            </h3>
            <div className="space-y-4">
              {materialsList.map((mat) => (
                <label key={mat} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedMaterials.includes(mat)}
                    onChange={() => toggleMaterial(mat)}
                    className="custom-checkbox"
                  />
                  <span className="font-body-md text-body-md text-primary group-hover:text-secondary transition-colors">
                    {mat}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Color Palette Filter */}
          <div className="mb-10">
            <h3 className="font-label-caps text-label-caps text-secondary mb-6 border-b border-outline-variant/30 pb-2">
              COLOR PALETTE
            </h3>
            <div className="flex flex-wrap gap-2">
              {colorList.map((col) => {
                const isSelected = selectedColors.includes(col.label);
                return (
                  <button
                    key={col.label}
                    type="button"
                    onClick={() => toggleColor(col.label)}
                    aria-label={col.label}
                    title={col.label}
                    className={`w-8 h-8 rounded-none border border-outline-variant transition-transform ${
                      isSelected ? 'ring-2 ring-primary ring-offset-2 scale-110' : 'hover:scale-105'
                    }`}
                    style={{ backgroundColor: col.hex }}
                  />
                );
              })}
            </div>
          </div>

          {/* Pattern Filter */}
          <div className="mb-10">
            <h3 className="font-label-caps text-label-caps text-secondary mb-6 border-b border-outline-variant/30 pb-2">
              PATTERN
            </h3>
            <div className="space-y-4">
              {patternList.map((pat) => (
                <label key={pat} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedPatterns.includes(pat)}
                    onChange={() => togglePattern(pat)}
                    className="custom-checkbox"
                  />
                  <span className="font-body-md text-body-md text-primary group-hover:text-secondary transition-colors">
                    {pat}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Application Filter */}
          <div className="mb-10">
            <h3 className="font-label-caps text-label-caps text-secondary mb-6 border-b border-outline-variant/30 pb-2">
              APPLICATION
            </h3>
            <div className="space-y-4">
              {applicationList.map((app) => (
                <label key={app} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedApplications.includes(app)}
                    onChange={() => toggleApplication(app)}
                    className="custom-checkbox"
                  />
                  <span className="font-body-md text-body-md text-primary group-hover:text-secondary transition-colors">
                    {app}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear Filters Button */}
          <button
            onClick={clearFilters}
            className="w-full border border-primary text-primary font-label-caps text-label-caps py-3 hover:bg-surface-container-high transition-colors uppercase tracking-widest"
          >
            Clear Filters
          </button>
        </aside>

        {/* Product Grid Area */}
        <div className="w-full lg:w-3/4">
          <div className="flex justify-between items-center mb-8 border-b border-outline-variant/30 pb-4">
            <span className="font-label-caps text-label-caps text-secondary">
              Showing {textiles.length} Textiles
            </span>
            <div className="flex items-center gap-4">
              <span className="font-label-caps text-label-caps text-secondary hidden sm:inline">
                Sort by
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none font-body-md text-body-md text-primary cursor-pointer focus:ring-0 p-0 pr-8 custom-select"
              >
                <option value="newest">New Arrivals</option>
                <option value="gsm-desc">GSM: High to Low</option>
                <option value="gsm-asc">GSM: Low to High</option>
                <option value="alpha">Alphabetical</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div className="py-24 text-center">
              <div className="inline-block animate-spin w-8 h-8 border-2 border-primary border-t-transparent" />
              <p className="font-body-md text-secondary mt-4">Curating archival textiles...</p>
            </div>
          ) : error ? (
            <div className="py-16 text-center text-error">
              <p>{error}</p>
              <button
                onClick={fetchCatalog}
                className="mt-4 border border-primary px-6 py-2 font-label-caps uppercase"
              >
                Retry
              </button>
            </div>
          ) : textiles.length === 0 ? (
            <div className="py-24 text-center border border-dashed border-outline-variant/40 p-8">
              <p className="font-headline-md text-primary mb-3">No Textiles Match Your Selection</p>
              <p className="font-body-md text-secondary mb-6">
                Try selecting different material parameters or clearing current filters.
              </p>
              <button
                onClick={clearFilters}
                className="border border-primary text-primary px-8 py-3 font-label-caps uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-gutter">
              {textiles.map((textile) => (
                <div
                  key={textile._id}
                  onClick={() => setSelectedTextile(textile)}
                  className="group relative flex flex-col cursor-pointer bg-surface hover:shadow-2xl transition-all duration-500 ease-in-out border border-transparent hover:border-outline-variant/30"
                >
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container-low mb-4">
                    <img
                      src={textile.image}
                      alt={textile.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {textile.isNewArrival && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-surface text-primary border border-outline-variant/30 px-2 py-1 font-label-caps text-[10px] tracking-widest uppercase">
                          New
                        </span>
                      </div>
                    )}
                    {/* Quick View Overlay */}
                    <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTextile(textile);
                        }}
                        className="bg-surface text-primary font-label-caps text-label-caps px-6 py-3 uppercase tracking-widest shadow-lg hover:bg-primary hover:text-on-primary transition-colors"
                      >
                        Quick View
                      </button>
                    </div>
                  </div>
                  <div className="px-2 pb-4">
                    <span className="font-label-caps text-label-caps text-secondary block mb-1">
                      {textile.color} • {textile.gsm} GSM
                    </span>
                    <h3 className="font-headline-md text-headline-md text-primary truncate">
                      {textile.name}
                    </h3>
                    <p className="font-body-md text-body-md text-secondary mt-1">
                      {textile.application}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        textile={selectedTextile}
        onClose={() => setSelectedTextile(null)}
        onRequestSwatch={(tex) => setSwatchTextile(tex)}
      />

      {/* Swatch Request Modal */}
      <SwatchModal
        textile={swatchTextile}
        onClose={() => setSwatchTextile(null)}
      />
    </main>
  );
}
