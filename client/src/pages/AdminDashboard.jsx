import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import AddTextileModal from '../components/AddTextileModal';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState(null);
  const [consultations, setConsultations] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [textiles, setTextiles] = useState([]);
  const [swatches, setSwatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const [addModalOpen, setAddModalOpen] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const [overviewRes, conRes, revRes, texRes, swRes] = await Promise.all([
        api.getAnalyticsOverview(),
        api.getConsultations(),
        api.getReviews({ status: 'Pending' }),
        api.getTextiles(),
        api.getSwatchRequests(),
      ]);

      setStats(overviewRes.data || {});
      setConsultations(conRes.data || []);
      setReviews(revRes.data || []);
      setTextiles(texRes.data || []);
      setSwatches(swRes.data || []);
    } catch (err) {
      console.error('Failed to load admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleUpdateConsultation = async (id, newStatus) => {
    try {
      await api.updateConsultationStatus(id, newStatus);
      loadData();
    } catch (err) {
      alert(err.message || 'Failed to update consultation');
    }
  };

  const handleUpdateReview = async (id, status) => {
    try {
      await api.updateReviewStatus(id, status);
      loadData();
    } catch (err) {
      alert(err.message || 'Failed to update review');
    }
  };

  const handleDeleteTextile = async (id) => {
    if (!window.confirm('Are you sure you want to delete this textile from the catalog?')) return;
    try {
      await api.deleteTextile(id);
      loadData();
    } catch (err) {
      alert(err.message || 'Failed to delete textile');
    }
  };

  return (
    <div className="min-h-screen flex bg-surface">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-outline-variant/30 hidden md:flex flex-col justify-between sticky top-0 h-screen bg-surface-container-lowest z-40">
        <div className="p-8">
          <Link
            to="/"
            className="font-display-lg text-headline-md text-primary tracking-tighter uppercase mb-12 block"
          >
            VELOUR &amp; WEAVE
          </Link>
          <nav className="space-y-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center space-x-3 w-full text-left transition-colors ${
                activeTab === 'overview'
                  ? 'text-primary font-bold'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">dashboard</span>
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab('catalog')}
              className={`flex items-center space-x-3 w-full text-left transition-colors ${
                activeTab === 'catalog'
                  ? 'text-primary font-bold'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">inventory_2</span>
              <span>Catalog ({textiles.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`flex items-center space-x-3 w-full text-left transition-colors ${
                activeTab === 'schedule'
                  ? 'text-primary font-bold'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              <span>Schedule ({consultations.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`flex items-center space-x-3 w-full text-left transition-colors ${
                activeTab === 'reviews'
                  ? 'text-primary font-bold'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">reviews</span>
              <span>Moderation ({reviews.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('swatches')}
              className={`flex items-center space-x-3 w-full text-left transition-colors ${
                activeTab === 'swatches'
                  ? 'text-primary font-bold'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">mark_email_unread</span>
              <span>Swatches ({swatches.length})</span>
            </button>
          </nav>
        </div>

        <div className="p-8 border-t border-outline-variant/30">
          <Link
            to="/"
            className="flex items-center space-x-3 text-secondary hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span>Back to Storefront</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto w-full max-w-container-max mx-auto md:px-margin-desktop px-margin-mobile py-12 pb-32">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 border-b border-outline-variant/30 pb-6 gap-4">
          <div>
            <span className="font-label-caps text-secondary uppercase tracking-widest text-xs block mb-1">
              Atelier Management
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tighter">
              {activeTab === 'overview' && 'Showroom Overview'}
              {activeTab === 'catalog' && 'Archival Catalog Inventory'}
              {activeTab === 'schedule' && 'Consultation Appointments'}
              {activeTab === 'reviews' && 'Reflection Moderation'}
              {activeTab === 'swatches' && 'Swatch Sample Requests'}
            </h2>
            <p className="font-body-md text-secondary mt-1">
              Current operational status of Velour &amp; Weave digital showroom.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setAddModalOpen(true)}
              className="bg-primary text-on-primary px-6 py-3 hover:bg-tertiary-container transition-colors uppercase tracking-widest font-label-caps text-label-caps flex items-center space-x-2"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              <span>Add New Textile</span>
            </button>
          </div>
        </header>

        {loading ? (
          <div className="py-24 text-center">
            <div className="inline-block animate-spin w-8 h-8 border-2 border-primary border-t-transparent" />
            <p className="font-body-md text-secondary mt-4">Synchronizing showroom records...</p>
          </div>
        ) : (
          <>
            {/* Overview Bento Grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-section-gap">
              <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 flex flex-col justify-between min-h-[180px] ambient-shadow">
                <div className="flex justify-between items-start">
                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                    Pending Consultations
                  </span>
                  <span className="material-symbols-outlined text-outline text-xl">event</span>
                </div>
                <div className="mt-6">
                  <span className="font-headline-lg text-headline-lg text-primary">
                    {stats?.pendingConsultations || consultations.filter((c) => c.status === 'Pending').length || 3}
                  </span>
                  <p className="text-xs text-secondary mt-1">
                    {consultations.length} total appointments scheduled
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 flex flex-col justify-between min-h-[180px] ambient-shadow">
                <div className="flex justify-between items-start">
                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                    Top Category
                  </span>
                  <span className="material-symbols-outlined text-outline text-xl">category</span>
                </div>
                <div className="mt-6">
                  <span className="font-headline-lg text-headline-md text-primary">
                    {stats?.topCategory || 'Silk'}
                  </span>
                  <p className="text-xs text-secondary mt-1">
                    45% of total client inquiries this month
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 flex flex-col justify-between min-h-[180px] ambient-shadow">
                <div className="flex justify-between items-start">
                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                    Average Rating
                  </span>
                  <span className="material-symbols-outlined text-outline text-xl">star_rate</span>
                </div>
                <div className="mt-6">
                  <span className="font-headline-lg text-headline-lg text-primary">
                    {stats?.avgRating || '4.9/5'}
                  </span>
                  <p className="text-xs text-secondary mt-1">
                    Based on verified client reviews
                  </p>
                </div>
              </div>
            </section>

            {/* Two Column Layout: Schedule & Reviews */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter mb-section-gap">
              {/* Schedule Manager */}
              <section className="border border-outline-variant/30 p-8 ambient-shadow bg-surface-container-lowest">
                <div className="flex justify-between items-center mb-8 border-b border-outline-variant/30 pb-4">
                  <h3 className="font-headline-md text-headline-md text-primary">
                    Upcoming Appointments
                  </h3>
                  <span className="font-label-caps text-xs text-secondary uppercase tracking-widest">
                    {consultations.length} Bookings
                  </span>
                </div>
                {consultations.length === 0 ? (
                  <p className="text-secondary text-sm">No scheduled consultations yet.</p>
                ) : (
                  <ul className="space-y-6">
                    {consultations.slice(0, 5).map((con) => (
                      <li
                        key={con._id}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-outline-variant/10 gap-4"
                      >
                        <div>
                          <p className="font-bold text-primary text-sm">
                            {con.name} - {con.brand}
                          </p>
                          <p className="text-xs text-secondary mt-1">
                            {con.date} at {con.timeSlot} • {con.meetingType}
                          </p>
                          {con.timeline && (
                            <p className="text-xs text-secondary/80 mt-1 italic max-w-sm">
                              "{con.timeline}"
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-3 py-1 font-label-caps text-[10px] uppercase tracking-widest border ${
                              con.status === 'Confirmed'
                                ? 'border-primary text-primary'
                                : con.status === 'Completed'
                                ? 'bg-surface-variant text-on-surface-variant border-transparent'
                                : 'border-secondary text-secondary'
                            }`}
                          >
                            {con.status}
                          </span>
                          {con.status === 'Pending' && (
                            <button
                              onClick={() => handleUpdateConsultation(con._id, 'Confirmed')}
                              className="text-xs underline text-primary hover:opacity-70"
                            >
                              Confirm
                            </button>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              {/* Review Moderation */}
              <section className="border border-outline-variant/30 p-8 ambient-shadow bg-surface-container-lowest">
                <div className="flex justify-between items-center mb-8 border-b border-outline-variant/30 pb-4">
                  <h3 className="font-headline-md text-headline-md text-primary">
                    Review Moderation
                  </h3>
                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                    {reviews.length} Pending
                  </span>
                </div>
                {reviews.length === 0 ? (
                  <p className="text-secondary text-sm">All client reflections are moderated.</p>
                ) : (
                  <div className="space-y-8">
                    {reviews.map((rev) => (
                      <div key={rev._id} className="pb-6 border-b border-outline-variant/10">
                        <div className="flex items-center space-x-1 mb-2 text-primary">
                          {[...Array(rev.rating || 5)].map((_, i) => (
                            <span
                              key={i}
                              className="material-symbols-outlined text-xs"
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              star
                            </span>
                          ))}
                        </div>
                        <p className="italic text-secondary font-body-md text-sm leading-relaxed">
                          "{rev.quote}"
                        </p>
                        <p className="text-xs font-bold mt-2 text-primary">
                          - {rev.name} ({rev.studio})
                        </p>
                        <div className="mt-4 flex space-x-4">
                          <button
                            onClick={() => handleUpdateReview(rev._id, 'Approved')}
                            className="font-label-caps text-label-caps text-primary border-b border-primary pb-0.5 uppercase tracking-widest hover:text-secondary transition-colors"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleUpdateReview(rev._id, 'Dismissed')}
                            className="font-label-caps text-label-caps text-secondary hover:text-error transition-colors uppercase tracking-widest"
                          >
                            Dismiss
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </div>

            {/* Catalog Management Table */}
            <section className="border border-outline-variant/30 p-8 ambient-shadow bg-surface-container-lowest mb-section-gap">
              <div className="flex justify-between items-center mb-8 border-b border-outline-variant/30 pb-4">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary">
                    Textile Showroom Inventory
                  </h3>
                  <p className="text-xs text-secondary mt-1">
                    {textiles.length} textiles active in public showcase
                  </p>
                </div>
                <button
                  onClick={() => setAddModalOpen(true)}
                  className="border border-primary text-primary px-4 py-2 font-label-caps text-xs uppercase hover:bg-primary hover:text-on-primary transition-colors"
                >
                  + Add Textile
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-body-md text-sm">
                  <thead>
                    <tr className="border-b border-outline-variant/20 font-label-caps text-xs text-secondary uppercase">
                      <th className="py-3 px-2">Image</th>
                      <th className="py-3 px-2">Textile</th>
                      <th className="py-3 px-2">Material</th>
                      <th className="py-3 px-2">Color</th>
                      <th className="py-3 px-2">Application</th>
                      <th className="py-3 px-2">GSM</th>
                      <th className="py-3 px-2">Status</th>
                      <th className="py-3 px-2 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {textiles.map((tex) => (
                      <tr key={tex._id} className="border-b border-outline-variant/10 hover:bg-surface-container-low/40">
                        <td className="py-3 px-2">
                          <img
                            src={tex.image}
                            alt={tex.name}
                            className="w-12 h-14 object-cover border border-outline-variant/20"
                          />
                        </td>
                        <td className="py-3 px-2 font-medium text-primary">
                          {tex.name}
                        </td>
                        <td className="py-3 px-2 text-secondary">{tex.material}</td>
                        <td className="py-3 px-2 text-secondary">{tex.color}</td>
                        <td className="py-3 px-2 text-secondary">{tex.application}</td>
                        <td className="py-3 px-2 text-secondary">{tex.gsm}</td>
                        <td className="py-3 px-2">
                          <span className="text-xs bg-surface-container px-2 py-0.5 font-label-caps uppercase">
                            {tex.stockStatus || 'Available'}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-right">
                          <button
                            onClick={() => handleDeleteTextile(tex._id)}
                            className="text-xs text-error hover:underline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Add Textile Modal */}
      <AddTextileModal
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onCreated={loadData}
      />
    </div>
  );
}
