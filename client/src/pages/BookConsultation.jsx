import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';

export default function BookConsultation() {
  const [meetingType, setMeetingType] = useState('Virtual Showroom Walkthrough');
  const [selectedDay, setSelectedDay] = useState(14);
  const [selectedMonth, setSelectedMonth] = useState('October 2024');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('01:00 PM');

  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    timeline: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const meetingTypes = [
    {
      id: 'type_virtual',
      name: 'Virtual Showroom Walkthrough',
      desc: 'Guided digital tour of our latest collections.',
      icon: 'devices',
    },
    {
      id: 'type_inperson',
      name: 'In-person Sample Review',
      desc: 'Tactile exploration at our flagship studio.',
      icon: 'handshake',
    },
    {
      id: 'type_bulk',
      name: 'Custom Bulk Order Consultation',
      desc: 'For large-scale architectural projects.',
      icon: 'inventory_2',
    },
  ];

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
  ];

  // Calendar dates representation (days 1 through 28)
  const days = Array.from({ length: 28 }, (_, i) => i + 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.brand || !formData.email) {
      setError('Please provide your name, brand/studio, and email.');
      return;
    }

    setSubmitting(true);
    setError('');

    const formattedDate = `${selectedMonth.split(' ')[0]} ${selectedDay}, ${selectedMonth.split(' ')[1]}`;

    try {
      const payload = {
        meetingType,
        date: formattedDate,
        timeSlot: selectedTimeSlot,
        name: formData.name,
        brand: formData.brand,
        email: formData.email,
        timeline: formData.timeline,
      };

      const res = await api.bookConsultation(payload);
      setConfirmedBooking(payload);
    } catch (err) {
      setError(err.message || 'Failed to book consultation. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    setFormData({ name: '', brand: '', email: '', timeline: '' });
  };

  return (
    <main className="flex-grow pt-[120px] md:pt-[160px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Context & Introduction */}
        <div className="lg:col-span-4 lg:col-start-1 mb-12 lg:mb-0">
          <span className="font-label-caps uppercase text-secondary mb-4 block tracking-widest">
            Bespoke Consultations
          </span>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-primary mb-6 leading-tight">
            Schedule Your Review
          </h1>
          <p className="font-body-lg text-secondary mb-8 leading-relaxed">
            Reserve dedicated time with our textile specialists to explore collections tailored to your next architectural or interior project.
          </p>
          <div className="hidden lg:block border border-[#D1CECA] overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcCcKLOIjgd6mRS_625hjpUMJkSJ4fLtMaRTx7elDZ1GMFGri0RxIpibATZWoIttukGgE4zDEczLvfhxVGvnFRY-qKltYFsNmi-kwOv56y3oBnv8SFUvQXKl1ASVOATW8o9vfAX0ONRKJfY6xWD9FVFystrSccy6AcDfftRjnrC6Kmk4y4uFlU2xvuiiNMsKMRlDjETPsgEZjgVtn8yo0r46UPUdX760qfj9cohJCjzKyWG2JXfAa7Lw"
              alt="Textile Swatches"
              className="w-full h-auto product-shadow object-cover aspect-[3/4]"
            />
          </div>
        </div>

        {/* Booking Interface */}
        <div className="lg:col-span-7 lg:col-start-6">
          <div className="bg-surface-container-lowest p-6 md:p-10 relative border border-outline-variant/30 shadow-sm">
            {error && (
              <div className="p-4 mb-8 bg-error-container text-on-error-container text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Step 1: Meeting Type */}
              <div className="mb-12">
                <h2 className="font-label-caps uppercase text-primary mb-6 tracking-widest border-b border-outline-variant/30 pb-2">
                  1. Select Consultation Type
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {meetingTypes.map((type) => {
                    const isSelected = meetingType === type.name;
                    return (
                      <div
                        key={type.id}
                        onClick={() => setMeetingType(type.name)}
                        className={`border p-6 cursor-pointer transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'border-primary bg-surface-container-low shadow-sm'
                            : 'border-outline-variant/50 hover:bg-surface-container-low/50'
                        }`}
                      >
                        <span className="material-symbols-outlined text-secondary mb-4 text-2xl">
                          {type.icon}
                        </span>
                        <div>
                          <h3 className="font-body-lg text-primary mb-2 text-base font-medium">
                            {type.name}
                          </h3>
                          <p className="font-body-md text-secondary text-xs leading-relaxed">
                            {type.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Date & Time Picker */}
              <div className="mb-12">
                <h2 className="font-label-caps uppercase text-primary mb-6 tracking-widest border-b border-outline-variant/30 pb-2">
                  2. Select Date &amp; Time
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Custom Calendar UI */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-body-lg text-primary font-medium">
                        {selectedMonth}
                      </span>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center mb-2">
                      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                        <span key={d} className="font-label-caps text-secondary text-xs py-1">
                          {d}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center font-body-md">
                      {days.map((day) => {
                        const isSelected = selectedDay === day;
                        return (
                          <button
                            key={day}
                            type="button"
                            onClick={() => setSelectedDay(day)}
                            className={`py-2 text-sm font-medium transition-colors ${
                              isSelected
                                ? 'bg-primary text-on-primary'
                                : 'hover:bg-surface-container-low text-primary'
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <span className="font-body-lg text-primary block mb-4 text-sm font-medium">
                      Available Times (EST)
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((slot) => {
                        const isSelected = selectedTimeSlot === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTimeSlot(slot)}
                            className={`border py-3 font-body-md text-sm transition-colors ${
                              isSelected
                                ? 'border-primary bg-primary text-on-primary'
                                : 'border-outline-variant/50 text-secondary hover:border-primary'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Contact Details */}
              <div className="mb-12">
                <h2 className="font-label-caps uppercase text-primary mb-6 tracking-widest border-b border-outline-variant/30 pb-2">
                  3. Your Details
                </h2>
                <div className="space-y-8">
                  <div className="relative">
                    <label className="font-label-caps text-secondary text-xs uppercase block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 py-2 pl-0 font-body-lg text-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <label className="font-label-caps text-secondary text-xs uppercase block mb-1">
                        Brand / Studio *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        placeholder="Design Studio LLC"
                        className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 py-2 pl-0 font-body-lg text-primary"
                      />
                    </div>
                    <div className="relative">
                      <label className="font-label-caps text-secondary text-xs uppercase block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@studio.com"
                        className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 py-2 pl-0 font-body-lg text-primary"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="font-label-caps text-secondary text-xs uppercase block mb-1">
                      Project Timeline &amp; Scope
                    </label>
                    <textarea
                      rows={3}
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      placeholder="Briefly describe your project scope, fabric requirements, and expected timeline..."
                      className="w-full bg-transparent border-0 border-b border-outline hover:border-primary focus:border-primary focus:border-b-2 focus:ring-0 py-2 pl-0 font-body-lg text-primary resize-none"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-on-primary py-5 font-label-caps uppercase tracking-widest hover:bg-tertiary-container transition-colors"
              >
                {submitting ? 'Confirming Appointment...' : 'Confirm Appointment'}
              </button>
            </form>

            {/* Success State Overlay */}
            {confirmedBooking && (
              <div className="absolute inset-0 bg-surface/98 backdrop-blur-md z-30 flex flex-col items-center justify-center text-center p-8">
                <span
                  className="material-symbols-outlined text-6xl text-primary mb-6"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary mb-4">
                  Consultation Confirmed
                </h2>
                <p className="font-body-lg text-secondary max-w-md mx-auto mb-2 leading-relaxed">
                  We look forward to meeting with you on{' '}
                  <strong className="text-primary">{confirmedBooking.date}</strong> at{' '}
                  <strong className="text-primary">{confirmedBooking.timeSlot}</strong>.
                </p>
                <p className="font-body-md text-sm text-secondary mb-8">
                  A calendar invitation and preparatory guide have been sent to{' '}
                  <strong className="text-primary">{confirmedBooking.email}</strong>.
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/"
                    className="border border-outline-variant text-primary px-8 py-3 font-label-caps uppercase tracking-widest hover:bg-surface-container-low transition-colors"
                  >
                    Return to Home
                  </Link>
                  <button
                    onClick={handleReset}
                    className="bg-primary text-on-primary px-8 py-3 font-label-caps uppercase tracking-widest hover:bg-tertiary-container transition-colors"
                  >
                    Book Another
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
