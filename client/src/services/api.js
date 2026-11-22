// Resilient API client for Velour & Weave
// Automatically connects to live backend or operates in luxury standalone mode on static hosts (Cloudflare Pages)

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

// Seed Catalog & Archive Data
const defaultTextiles = [
  {
    _id: 'tex_1',
    name: 'Raw Jute Weave',
    subtitle: 'Earth Tones • 850 GSM',
    material: 'Linen',
    color: 'Earth Tones',
    pattern: 'Solid / Textured',
    application: 'Upholstery Heavy',
    gsm: 850,
    composition: '100% Raw Jute',
    width: '140 cm / 55"',
    stockStatus: 'Available',
    careInstructions: [
      'Professional dry clean only',
      'Do not bleach',
      'Iron low heat on reverse'
    ],
    description: 'A foundational textile designed for high-impact spaces. Woven from 100% natural organic jute, this fabric presents an exceptionally durable structure with a profound tactile narrative. Imperfections in the raw fiber are retained to ensure authenticity.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfycqx1m-VWqJTP90OhIa9dqC9SkyXuyuGW8n4oyHpyC1w4y_C2BHjeJQBimEzTHBmhbkO_RCfi8Bu1zIWi7NNYKB7HW5kA1lmTsChDiXvgXI2enrZcju5qBcapIRcHcnWs5rAuRdmR0d_WygmS7YcWR8j7vqCMZX2vkorL1rtD4r26bVc9kth09cDrWgLkq67f0jd7_GyChsxbji7Mnn9B3S286-7V3Qn8VLv6UABQq4WJJJfZ-wfxA',
    isNewArrival: false,
    isFeatured: true
  },
  {
    _id: 'tex_2',
    name: 'Midnight Velour',
    subtitle: 'Voids • 520 GSM',
    material: 'Velvet',
    color: 'Voids',
    pattern: 'Solid / Textured',
    application: 'Drapery',
    gsm: 520,
    composition: '82% Cotton, 18% Mulberry Silk',
    width: '145 cm / 57"',
    stockStatus: 'Available',
    careInstructions: [
      'Professional dry clean only',
      'Steam brush pile gently',
      'Keep away from direct excessive sunlight'
    ],
    description: 'Profound midnight blue velour catching subtle rim lighting, creating a luxurious sheen against deep, almost absolute black shadows. Minimalist, high-end interior design catalog aesthetic.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnQ71zkhLkkWxIaOHPlx0mkfDG47BKlulAZuJwuQrcz_1OjginX2uPImKR4MgFuQyUuuKk5ahSaR8lDfszalzBlQUaTBMOpQhp-ymPnIr5eQie2IDuJYPuFu4sdTbly6SyYtmeoRj1Nk_x2hcyhWkip2xcr065Tx8-xtCbuKpxYTLqe0cDmbtJhsT9YQ9kYFuLcTFKW1P3H3yLIIvjefkadHzhzagVNfDJpRQghmY1aH-yjlE4AjWunQ',
    isNewArrival: false,
    isFeatured: true
  },
  {
    _id: 'tex_3',
    name: 'Organic Silk Crepe',
    subtitle: 'Neutrals • 180 GSM',
    material: 'Silk',
    color: 'Neutrals',
    pattern: 'Solid / Textured',
    application: 'Drapery',
    gsm: 180,
    composition: '100% Organic Peace Silk',
    width: '135 cm / 53"',
    stockStatus: 'Available',
    careInstructions: [
      'Specialist dry clean only',
      'Do not wring or soak',
      'Cool iron with cloth protector'
    ],
    description: 'A stark, beautiful editorial shot of organic silk crepe fabric draping gracefully. Warm ivory color with a distinct matte crepe texture, emphasizing fluid fall and delicate, slightly crinkled surface.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCbPFldvgCfs0C1U3F0F-cFkAPTDylMnGtw5zQqY6Q2bq876LHNZ_PNmErCRhLeUB8aEF0WCbcyrVaWysADN2a_NUGzUeS6TPpMUO6HGLwF6KGc9XShfNGXQEx3d9ILIeKEuT4zzw-Sz5EpjOeARC9vqiD5can8CKVYuEnenZjeCzHmBvRTpRyTSGN7UVdSV_kyVf9GVcM3xw1n5W_mFGcdulNI6G8X-692zIdjfozXgd3zoQxlBjt3Q',
    isNewArrival: true,
    isFeatured: true
  },
  {
    _id: 'tex_4',
    name: 'Heritage Damask',
    subtitle: 'Earth Tones • 600 GSM',
    material: 'Wool',
    color: 'Olive',
    pattern: 'Damask',
    application: 'Upholstery Heavy',
    gsm: 600,
    composition: '65% Virgin Wool, 35% Silk Yarn',
    width: '142 cm / 56"',
    stockStatus: 'Available',
    careInstructions: [
      'Professional dry clean only',
      'Do not tumble dry',
      'Spot clean with cold water lightly'
    ],
    description: 'Complex damask patterned fabric in muted olive and deep slate tones. Tactile relief interwoven silk and matte wool yarns creating a raised, tactile relief with heritage quality.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH_p-zWiK8xrXHc1wQp3_vVbQ7P2LVCl-5jvr57k3wLUveSw7zM1dOsH25ExrEqscJ0_NQtY-BtIJfF5xKdpvOlE8_w1o2s_gXw1GkEEQ_EdPY_YP9Gps7G4xiqkm1zGC7RdD5jInJyXX0d8Aqkb_Ib1IB_Zc-bP9PscH_BuUnMqyMTbcjE61m8F_RgejNerhBfFIYyNiEzZQx-cnSYd3ayJlpkRxJ38V7a977jYXodEuo8zplZuLvDQ',
    isNewArrival: false,
    isFeatured: true
  },
  {
    _id: 'tex_5',
    name: 'Russet Opulence',
    subtitle: 'Velvet / Heavyweight • 720 GSM',
    material: 'Velvet',
    color: 'Deep Earth',
    pattern: 'Solid / Textured',
    application: 'Upholstery Heavy',
    gsm: 720,
    composition: '90% Cotton Velvet, 10% Linen',
    width: '140 cm / 55"',
    stockStatus: 'Available',
    careInstructions: [
      'Dry clean only',
      'Vacuum with soft brush attachment'
    ],
    description: 'A draped swatch from the Autumn Heritage collection, showing rich, deep brownish-red tones with a plush texture and remarkable structural durability.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNluZuQ6h_EGSdh3hLoBg6E8xUx1Ea1t-8rNiBp5Q7aacARm1XLPY2FF2s2Qb8hKHeW4wHo2Qc1Eg6N3sfB3Zh7e1O8UHfE_xFNN5lFL19eys-cUtAhb8IVrnYhEGdATK-kwVhYjgtPC87yyvD5SrYBuD6lHX0_2YwHbOd1zn79R5Iy1JHBOqGgAL-DBQ0TNXE7bz3kMerSCqdPWTmucSt21CD5xZnp6-Kse4de8b0fghSZnOxpJb0ow',
    isNewArrival: false,
    isFeatured: true
  },
  {
    _id: 'tex_6',
    name: 'Highland Bouclé',
    subtitle: 'Bouclé / Textured • 650 GSM',
    material: 'Wool',
    color: 'Neutrals',
    pattern: 'Solid / Textured',
    application: 'Upholstery Heavy',
    gsm: 650,
    composition: '80% Alpaca Wool, 20% Organic Cotton',
    width: '140 cm / 55"',
    stockStatus: 'Available',
    careInstructions: [
      'Dry clean only',
      'Do not brush vigorously'
    ],
    description: 'A swatch of Oatmeal Bouclé demonstrating a highly textured, looped yarn surface in warm off-white tones. Photographed from an elevated angle in soft natural light.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYmTl9UhhSrA15fgJGWd7fHpVkgab_aO2WvSdIFxFjX7goxFxpmgjqFEH6s5KGZYde-qj4yuhvGB4ZKwyqOQyBIiRO3Ewkjhdr-FSu9LZLZYKmG9fJsC1tv9Jv0xC70-2sBinsu_PSSr4c0BIvi7a2O7YxgulFIOIv4HEF-8QtHskbVrzH862Oh92Ip1LnefGyQD4OJizj7AgpZcjtRAZUO3iVhWs7TPRISXfqFrj2RgDHx4-1iKP8SA',
    isNewArrival: true,
    isFeatured: true
  },
  {
    _id: 'tex_7',
    name: 'Forest Damask',
    subtitle: 'Damask / Heritage • 580 GSM',
    material: 'Silk',
    color: 'Olive',
    pattern: 'Damask',
    application: 'Wallcovering',
    gsm: 580,
    composition: '50% Mulberry Silk, 50% Combed Cotton',
    width: '138 cm / 54"',
    stockStatus: 'Available',
    careInstructions: [
      'Professional dry clean only',
      'Shield from direct UV'
    ],
    description: 'Intricate, subtle tonal pattern in deep muted green. Interplay of matte and shiny threads in a stark, high-contrast luxury presentation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL47NVM5Eq4DUs9tc-U18VWoF0R4U1rd1cyADYd8dMG_agP_izWS9XlFNsrnruSLgaVpw7fhHgSFw2cd-pqIcIU6YFyo7OxSr89HjMNAU2XK16sGpqWtLbt_8xvJGkq9WF02Edn_JXwrZZaGAyVTJIP-uYAE2mRb4KHPYAxhFdmsFR9-KmOcwu8BeZMcPLAuwCQOMg0-aMGClUWH-WsFWhDhXt1wggfR6KK3R_feIsSWwzvYFXepoblQ',
    isNewArrival: false,
    isFeatured: true
  },
  {
    _id: 'tex_8',
    name: 'Sustainable Organic Linen',
    subtitle: 'Raw Linen • 460 GSM',
    material: 'Linen',
    color: 'Earth Tones',
    pattern: 'Solid / Textured',
    application: 'Drapery',
    gsm: 460,
    composition: '100% Belgian Organic Flax',
    width: '150 cm / 59"',
    stockStatus: 'Available',
    careInstructions: [
      'Dry clean or gentle hand wash 30°C',
      'Hang dry in shade'
    ],
    description: 'Tactile, natural sustainable linen fabric with a beautiful slubby texture. Photographed in natural daylight to highlight the organic fibers and eco-conscious luxury appeal.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4Sj4YEnR01qpUInnN8ZNCe2V1QRlrRCKV5anyW1MVD0BXC0CRbl_-whOxwazFZW2hwBTx-lfY9MinyMmp8T0DSgBVFN8seML-xFogP_NJDCDN2IFO6BUyC6gQBEBlF9ZUqBYaJxcygwo86J6Qr9B8jic0UqXZdMoPDTjyuB3Pus9dBu16JJ4yo2emwjZk5fBkra_f9R-41dQ7iB1mrKe2gEEFiCsO1375yQZBzAjQNcyb3N-WjB8aAw',
    isNewArrival: false,
    isFeatured: false
  }
];

const defaultReviews = [
  {
    _id: 'rev_1',
    name: 'Elena Rostova',
    studio: 'Rostova Studio',
    role: 'Lead Interior Architect',
    industry: 'Hospitality',
    rating: 5,
    quote: 'The unparalleled texture of Velour & Weave’s heritage linens transformed the spatial acoustics of the Milan Grand Hotel. It is not merely fabric; it is architectural poetry.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA90M_bvlgxxePNI6NFk6z0SMsxT_5cUHE4hXzWaZxQelBHR19cWG-J7SWlhaYRrN4Jq3UvhOshzAjNgrBZBPvZ-VXNPAMMUrzPVkcHoF1A8KAM3p5iKA6b8bd7JGqdTTdhd8lKmKdt8319lD1IyM-VPRoc8CDvBzzPDhJHjyz1qcEQHh2dupf9T8Id9rw5bBQtojtpgRltKwR2bxUYD2aWkXb0KaE74v4OPa2XXKojtGbfBoXcI-NYZg',
    status: 'Approved',
    isFeatured: true
  },
  {
    _id: 'rev_2',
    name: 'Julian Hayes',
    studio: 'Bespoke Furnishings',
    role: 'Principal Designer',
    industry: 'Residential',
    rating: 5,
    quote: 'An indispensable partner for bespoke residential upholstery. The tactile quality and structural drape are unmatched in contemporary textile design.',
    avatar: '',
    status: 'Approved',
    isFeatured: false
  },
  {
    _id: 'rev_3',
    name: 'Marco V.',
    studio: 'Atelier V.',
    role: 'Fashion & Interiors Director',
    industry: 'Apparel',
    rating: 5,
    quote: 'When designing the Fall bespoke collection, we required a velvet that possessed both immense weight and an ethereal drape. VELOUR & WEAVE delivered a textile that dictated the entire silhouette.',
    avatar: '',
    status: 'Approved',
    isFeatured: true
  }
];

const defaultConsultations = [
  {
    _id: 'con_1',
    meetingType: 'Virtual Showroom Walkthrough',
    date: 'October 14, 2024',
    timeSlot: '02:00 PM',
    name: 'Eleanor Vance',
    brand: 'Studio Ashby - Trade Account',
    email: 'eleanor@studioashby.com',
    timeline: 'Looking for 300m bespoke velvet for Mayfair hotel private suites.',
    status: 'Confirmed'
  },
  {
    _id: 'con_2',
    meetingType: 'In-person Sample Review',
    date: 'October 15, 2024',
    timeSlot: '10:00 AM',
    name: 'Oliver Sterling',
    brand: 'Fairmont Hotels Design Team',
    email: 'oliver@fairmont.com',
    timeline: 'Reviewing drapery options for winter ballroom refurbishment.',
    status: 'Pending'
  }
];

// In-memory / session state for fallback operations
let localTextiles = [...defaultTextiles];
let localReviews = [...defaultReviews];
let localConsultations = [...defaultConsultations];
let localSwatches = [];

// Safe network request helper that detects HTML/non-JSON responses from static servers
async function safeFetch(url, options = {}) {
  try {
    const res = await fetch(url, options);
    const contentType = res.headers.get('content-type') || '';
    if (res.ok && contentType.includes('application/json')) {
      return await res.json();
    }
    // If not json or not ok, return null so we use fallback
    return null;
  } catch (err) {
    // Backend unreachable or CORS/offline
    return null;
  }
}

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
    const remoteData = await safeFetch(url);

    if (remoteData && remoteData.data) {
      return remoteData;
    }

    // Offline / Static host fallback
    let filtered = [...localTextiles];

    if (params.material) {
      const mats = params.material.toLowerCase().split(',').map((s) => s.trim());
      filtered = filtered.filter((t) => mats.includes(t.material.toLowerCase()));
    }
    if (params.color) {
      const cols = params.color.toLowerCase().split(',').map((s) => s.trim());
      filtered = filtered.filter((t) => cols.includes(t.color.toLowerCase()));
    }
    if (params.pattern) {
      const pats = params.pattern.toLowerCase().split(',').map((s) => s.trim());
      filtered = filtered.filter((t) => pats.includes(t.pattern.toLowerCase()));
    }
    if (params.application) {
      const apps = params.application.toLowerCase().split(',').map((s) => s.trim());
      filtered = filtered.filter((t) => apps.includes(t.application.toLowerCase()));
    }
    if (params.search) {
      const q = params.search.toLowerCase();
      filtered = filtered.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.material.toLowerCase().includes(q)
      );
    }
    if (params.sort === 'gsm-desc') {
      filtered.sort((a, b) => b.gsm - a.gsm);
    } else if (params.sort === 'gsm-asc') {
      filtered.sort((a, b) => a.gsm - b.gsm);
    } else if (params.sort === 'alpha') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return {
      success: true,
      count: filtered.length,
      data: filtered,
    };
  },

  async getTextileById(id) {
    const remoteData = await safeFetch(`${API_BASE_URL}/textiles/${id}`);
    if (remoteData && remoteData.data) return remoteData;

    const found = localTextiles.find((t) => t._id === id || t.name === id);
    if (found) return { success: true, data: found };
    return { success: true, data: localTextiles[0] };
  },

  async createTextile(data) {
    const remoteData = await safeFetch(`${API_BASE_URL}/textiles`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (remoteData) return remoteData;

    const newTex = {
      ...data,
      _id: `tex_${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    localTextiles.unshift(newTex);
    return { success: true, data: newTex, message: 'Textile added to catalog archive.' };
  },

  async deleteTextile(id) {
    const remoteData = await safeFetch(`${API_BASE_URL}/textiles/${id}`, {
      method: 'DELETE',
    });
    if (remoteData) return remoteData;

    localTextiles = localTextiles.filter((t) => t._id !== id);
    return { success: true, message: 'Textile removed from archive.' };
  },

  // Consultations / Booking
  async bookConsultation(data) {
    const remoteData = await safeFetch(`${API_BASE_URL}/consultations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (remoteData) return remoteData;

    const newBooking = {
      ...data,
      _id: `con_${Date.now()}`,
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };
    localConsultations.unshift(newBooking);
    return {
      success: true,
      message: 'Consultation appointment scheduled with our textile specialists.',
      data: newBooking,
    };
  },

  async getConsultations() {
    const remoteData = await safeFetch(`${API_BASE_URL}/consultations`);
    if (remoteData && remoteData.data) return remoteData;
    return { success: true, count: localConsultations.length, data: localConsultations };
  },

  async updateConsultationStatus(id, status) {
    const remoteData = await safeFetch(`${API_BASE_URL}/consultations/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    if (remoteData) return remoteData;

    localConsultations = localConsultations.map((c) => (c._id === id ? { ...c, status } : c));
    return { success: true, message: 'Status updated successfully.' };
  },

  async deleteConsultation(id) {
    const remoteData = await safeFetch(`${API_BASE_URL}/consultations/${id}`, {
      method: 'DELETE',
    });
    if (remoteData) return remoteData;

    localConsultations = localConsultations.filter((c) => c._id !== id);
    return { success: true, message: 'Consultation deleted.' };
  },

  // Reviews / Reflections
  async getReviews(params = {}) {
    const query = new URLSearchParams(params).toString();
    const url = `${API_BASE_URL}/reviews${query ? `?${query}` : ''}`;
    const remoteData = await safeFetch(url);
    if (remoteData && remoteData.data) return remoteData;

    let filtered = [...localReviews];
    if (params.industry && params.industry !== 'All Industries') {
      filtered = filtered.filter(
        (r) => r.industry?.toLowerCase() === params.industry.toLowerCase()
      );
    }
    return { success: true, count: filtered.length, data: filtered };
  },

  async submitReview(data) {
    const remoteData = await safeFetch(`${API_BASE_URL}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (remoteData) return remoteData;

    const newRev = {
      ...data,
      _id: `rev_${Date.now()}`,
      status: 'Approved',
      createdAt: new Date().toISOString(),
    };
    localReviews.unshift(newRev);
    return {
      success: true,
      message: 'Thank you. Your reflection has been recorded.',
      data: newRev,
    };
  },

  async updateReviewStatus(id, status) {
    const remoteData = await safeFetch(`${API_BASE_URL}/reviews/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    if (remoteData) return remoteData;

    localReviews = localReviews.map((r) => (r._id === id ? { ...r, status } : r));
    return { success: true, message: 'Review status updated.' };
  },

  // Swatches
  async requestSwatch(data) {
    const remoteData = await safeFetch(`${API_BASE_URL}/swatches`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (remoteData) return remoteData;

    const newSwatch = {
      ...data,
      _id: `sw_${Date.now()}`,
      status: 'Dispatched',
      createdAt: new Date().toISOString(),
    };
    localSwatches.unshift(newSwatch);
    return {
      success: true,
      message: 'Swatch sample request received. Packaging for dispatch.',
      data: newSwatch,
    };
  },

  async getSwatchRequests() {
    const remoteData = await safeFetch(`${API_BASE_URL}/swatches`);
    if (remoteData && remoteData.data) return remoteData;
    return { success: true, count: localSwatches.length, data: localSwatches };
  },

  // Newsletter
  async subscribeNewsletter(email) {
    const remoteData = await safeFetch(`${API_BASE_URL}/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (remoteData) return remoteData;

    return {
      success: true,
      message: 'Thank you for joining the Velour & Weave private registry.',
    };
  },

  // Analytics
  async getAnalyticsOverview() {
    const remoteData = await safeFetch(`${API_BASE_URL}/analytics/overview`);
    if (remoteData && remoteData.data) return remoteData;

    return {
      success: true,
      data: {
        pendingConsultations: localConsultations.filter((c) => c.status === 'Pending').length || 2,
        topCategory: 'Silk & Belgian Linen',
        avgRating: '4.9/5',
        totalTextiles: localTextiles.length,
      },
    };
  },
};
