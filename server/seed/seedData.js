import { Textile } from '../models/Textile.js';
import { Consultation } from '../models/Consultation.js';
import { Review } from '../models/Review.js';

export const initialTextiles = [
  {
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
  },
  {
    name: 'Geometric Charcoal Jacquard',
    subtitle: 'Embroidered • 640 GSM',
    material: 'Silk',
    color: 'Voids',
    pattern: 'Geometric',
    application: 'Upholstery Heavy',
    gsm: 640,
    composition: '60% Silk Jacquard, 40% Fine Wool',
    width: '140 cm / 55"',
    stockStatus: 'Available',
    careInstructions: [
      'Dry clean only',
      'Do not steam directly'
    ],
    description: 'Intricate embroidered jacquard fabric featuring a subtle, modern geometric pattern in deep charcoal and warm ivory. Sharp lighting emphasizes the raised embroidery technique.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADVacug88JUnqwaiVu5cEGmo3KJrc5GGV_oaOeqqryb4EJ4sO7x3G3-F_nFEgLrkfsj-EkLF_ZMrqGJXvPLxtu6ZaZ7CO-a0hGeHaKgFI2lle-mZGKi0R4ktE4jDA4Luikr6YgabpN8er0nAWvtNzRbILbA3nCLIxAnK6HSZmQ_MqB6IaxwUHQnx8GpwimVcez2QVVqd-Nz3HOTuxZogbtVrRQ0_OfsUusjkJrXWz9mrdsiZrdBhZwNA',
    isNewArrival: true,
    isFeatured: false
  }
];

export const initialConsultations = [
  {
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
    meetingType: 'In-person Sample Review',
    date: 'October 15, 2024',
    timeSlot: '10:00 AM',
    name: 'Oliver Sterling',
    brand: 'Fairmont Hotels Design Team',
    email: 'oliver@fairmont.com',
    timeline: 'Reviewing drapery options for winter ballroom refurbishment.',
    status: 'Pending'
  },
  {
    meetingType: 'Custom Bulk Order Consultation',
    date: 'October 24, 2024',
    timeSlot: '01:00 PM',
    name: 'Sophia Rossi',
    brand: 'Rossi Architectural Studio Milan',
    email: 'sophia@rossistudio.it',
    timeline: 'Large residential penthouse renovation in central Florence.',
    status: 'Completed'
  }
];

export const initialReviews = [
  {
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
    name: 'Marco V.',
    studio: 'Atelier V.',
    role: 'Fashion & Interiors Director',
    industry: 'Apparel',
    rating: 5,
    quote: 'When designing the Fall bespoke collection, we required a velvet that possessed both immense weight and an ethereal drape. VELOUR & WEAVE delivered a textile that dictated the entire silhouette.',
    avatar: '',
    status: 'Approved',
    isFeatured: true
  },
  {
    name: 'Sophia R.',
    studio: 'Mayfair Interiors',
    role: 'Senior Specifier',
    industry: 'Hospitality',
    rating: 5,
    quote: 'The bespoke velvet we sourced for the Mayfair project is absolutely stunning. The texture and light reflection are unparalleled.',
    avatar: '',
    status: 'Pending',
    isFeatured: false
  }
];

export const seedDatabase = async () => {
  try {
    const textileCount = await Textile.countDocuments();
    if (textileCount === 0) {
      await Textile.insertMany(initialTextiles);
      console.log('✨ Seeded initial textiles into MongoDB');
    }

    const consultationCount = await Consultation.countDocuments();
    if (consultationCount === 0) {
      await Consultation.insertMany(initialConsultations);
      console.log('✨ Seeded initial consultations into MongoDB');
    }

    const reviewCount = await Review.countDocuments();
    if (reviewCount === 0) {
      await Review.insertMany(initialReviews);
      console.log('✨ Seeded initial reflections into MongoDB');
    }
  } catch (err) {
    console.warn(`Seed check: ${err.message}`);
  }
};
