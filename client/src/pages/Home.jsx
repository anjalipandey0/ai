import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -620 : 620;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const collections = [
    {
      span: 'md:col-span-8 min-h-[500px]',
      colNumber: 'Collection 01',
      title: 'Heavy Upholstery',
      filter: 'Upholstery Heavy',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC98wQ4YFoAGgrmOGoccPRiQ6UTQjA5jjoFjp2sigVwW-aCOrBAD3fos8ps2tGknD_n6Zea4hXK3iSHUwtIC5T4Phi8Sm3GZp5nE9lA-jRfd91sW4k93lOxs59VpSG9lHr3iX-CbEmRNE4zATHTTLm0vIOVJmS2V-KBu_HjVnj4c4pB8yrUTlBbby63w2aO0Taio60ZBgXhVpfM9C_FWMENDSu5MVVIPyBKWl5qTDlTOPmVE9GYQ5I5Zg',
      alt: 'Close-up detail of heavy, richly textured luxury upholstery fabric in a sophisticated slate grey.',
      headlineClass: 'font-headline-lg text-headline-lg',
    },
    {
      span: 'md:col-span-4 min-h-[500px]',
      colNumber: 'Collection 02',
      title: 'Luxury Silk',
      filter: 'Silk',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz45BIWlL5oODidqnFywZ2WRE-0iHpKRt2582aUc2B1Mb_UYcyzuMpfUwcs8Pt_yz3_KhKxE7a1iSuAlbBbv8JxUh9zrwJwsRvM1MK1Mn8jbsWJptQlBZHNS27aHO9Z77OojYtCYjgLgL3RUPWXjb4TbrGl4-ePQqvx-oF7iniEPnCdzYFo1lAgNwfD_zkLxZwTKHsvvPUGhKmS385l2EI6lvjhlXbyqJ4ZabX9tS4RicQ6KjSYNRN5A',
      alt: 'Elegant, luminous luxury silk fabric cascading softly.',
      headlineClass: 'font-headline-md text-headline-md',
    },
    {
      span: 'md:col-span-6 min-h-[400px]',
      colNumber: 'Collection 03',
      title: 'Sustainable Linens',
      filter: 'Linen',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4Sj4YEnR01qpUInnN8ZNCe2V1QRlrRCKV5anyW1MVD0BXC0CRbl_-whOxwazFZW2hwBTx-lfY9MinyMmp8T0DSgBVFN8seML-xFogP_NJDCDN2IFO6BUyC6gQBEBlF9ZUqBYaJxcygwo86J6Qr9B8jic0UqXZdMoPDTjyuB3Pus9dBu16JJ4yo2emwjZk5fBkra_f9R-41dQ7iB1mrKe2gEEFiCsO1375yQZBzAjQNcyb3N-WjB8aAw',
      alt: 'Tactile, natural sustainable linen fabric with a beautiful, slubby texture.',
      headlineClass: 'font-headline-md text-headline-md',
    },
    {
      span: 'md:col-span-6 min-h-[400px]',
      colNumber: 'Collection 04',
      title: 'Embroidered Jacquards',
      filter: 'Damask',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADVacug88JUnqwaiVu5cEGmo3KJrc5GGV_oaOeqqryb4EJ4sO7x3G3-F_nFEgLrkfsj-EkLF_ZMrqGJXvPLxtu6ZaZ7CO-a0hGeHaKgFI2lle-mZGKi0R4ktE4jDA4Luikr6YgabpN8er0nAWvtNzRbILbA3nCLIxAnK6HSZmQ_MqB6IaxwUHQnx8GpwimVcez2QVVqd-Nz3HOTuxZogbtVrRQ0_OfsUusjkJrXWz9mrdsiZrdBhZwNA',
      alt: 'Intricate embroidered jacquard fabric featuring a subtle modern geometric pattern.',
      headlineClass: 'font-headline-md text-headline-md',
    },
  ];

  const featuredSlides = [
    {
      tag: 'Velvet / Heavyweight',
      title: 'Russet Opulence',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNluZuQ6h_EGSdh3hLoBg6E8xUx1Ea1t-8rNiBp5Q7aacARm1XLPY2FF2s2Qb8hKHeW4wHo2Qc1Eg6N3sfB3Zh7e1O8UHfE_xFNN5lFL19eys-cUtAhb8IVrnYhEGdATK-kwVhYjgtPC87yyvD5SrYBuD6lHX0_2YwHbOd1zn79R5Iy1JHBOqGgAL-DBQ0TNXE7bz3kMerSCqdPWTmucSt21CD5xZnp6-Kse4de8b0fghSZnOxpJb0ow',
    },
    {
      tag: 'Bouclé / Textured',
      title: 'Highland Bouclé',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYmTl9UhhSrA15fgJGWd7fHpVkgab_aO2WvSdIFxFjX7goxFxpmgjqFEH6s5KGZYde-qj4yuhvGB4ZKwyqOQyBIiRO3Ewkjhdr-FSu9LZLZYKmG9fJsC1tv9Jv0xC70-2sBinsu_PSSr4c0BIvi7a2O7YxgulFIOIv4HEF-8QtHskbVrzH862Oh92Ip1LnefGyQD4OJizj7AgpZcjtRAZUO3iVhWs7TPRISXfqFrj2RgDHx4-1iKP8SA',
    },
    {
      tag: 'Damask / Heritage',
      title: 'Forest Damask',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL47NVM5Eq4DUs9tc-U18VWoF0R4U1rd1cyADYd8dMG_agP_izWS9XlFNsrnruSLgaVpw7fhHgSFw2cd-pqIcIU6YFyo7OxSr89HjMNAU2XK16sGpqWtLbt_8xvJGkq9WF02Edn_JXwrZZaGAyVTJIP-uYAE2mRb4KHPYAxhFdmsFR9-KmOcwu8BeZMcPLAuwCQOMg0-aMGClUWH-WsFWhDhXt1wggfR6KK3R_feIsSWwzvYFXepoblQ',
    },
  ];

  return (
    <div className="w-full">
      {/* Cinematic Hero Section */}
      <header className="relative w-full h-screen min-h-[800px] flex items-center justify-center pt-24">
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center w-full h-full"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSACYpgAggJq2_eiWB9y_WKnJQ8pi-tiZfzvRrLxu-jLy1dNHUuKdS_sshzmhY--rpgiXnMrJ3k2un05qECKFbVJ0AQQWPLdSobBTVtjWOPJQ_USkax8EoxkM5vAAKA9Mv62Qs2JHaIYJFtCoMBsm1SgTZcmXd8kA1T6c9WNXhM7LWhdz6KLWk_qaKMaG2w2O1IKhqprGHoMkf0UBBKTdrQeRYDgYwJ1pHftdBsQrXgSDpmm7syxoROg')`,
            }}
          />
          <div className="absolute inset-0 bg-primary/20" />
        </div>

        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop w-full max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-display-lg text-display-lg md:text-[120px] text-on-primary mb-8 leading-tight drop-shadow-md">
            The Art of the Thread
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary/90 mb-12 max-w-2xl drop-shadow-sm leading-relaxed">
            Curating the finest textiles for the world's most discerning interior spaces. A heritage of craftsmanship, a future of uncompromised luxury.
          </p>
          <Link
            to="/book"
            className="bg-primary text-on-primary px-10 py-5 font-body-md text-body-md tracking-wide hover:bg-surface-tint hover:text-on-primary transition-all duration-300 flex items-center gap-3 shadow-lg"
          >
            Schedule a Private Consultation
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
        </div>
      </header>

      <main>
        {/* Category Grid */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {collections.map((col, idx) => (
              <div
                key={idx}
                onClick={() => navigate(`/catalog?category=${encodeURIComponent(col.filter)}`)}
                className={`${col.span} group hover-scale-img overflow-hidden relative bg-surface-container cursor-pointer border border-outline-variant/30 product-shadow`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 w-full h-full"
                  style={{ backgroundImage: `url('${col.image}')` }}
                />
                <div className="absolute inset-0 image-overlay transition-opacity duration-300 group-hover:opacity-80" />
                <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                  <span className="font-label-caps text-label-caps text-on-primary mb-2 opacity-80 tracking-widest uppercase">
                    {col.colNumber}
                  </span>
                  <h2 className={`${col.headlineClass} text-on-primary`}>
                    {col.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Collections Slider */}
        <section className="py-section-gap bg-surface-container-low overflow-hidden">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16 flex justify-between items-end">
            <div>
              <h2 className="font-display-lg text-headline-lg md:text-display-lg text-primary mb-4">
                Autumn Heritage
              </h2>
              <p className="font-body-lg text-body-lg text-secondary max-w-xl leading-relaxed">
                A curated selection of tactile weaves and warm tones, inspired by archival designs and reimagined for contemporary spaces.
              </p>
            </div>
            <div className="hidden md:flex gap-4">
              <button
                onClick={() => scrollSlider('left')}
                className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors text-primary"
                aria-label="Previous slide"
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button
                onClick={() => scrollSlider('right')}
                className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors text-primary"
                aria-label="Next slide"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <div
            ref={sliderRef}
            className="flex gap-gutter px-margin-mobile md:px-margin-desktop overflow-x-auto hide-scrollbar pb-12 snap-x"
            style={{ paddingRight: 'max(64px, calc((100vw - 1440px) / 2 + 64px))' }}
          >
            {featuredSlides.map((slide, idx) => (
              <div
                key={idx}
                onClick={() => navigate('/catalog')}
                className="snap-start shrink-0 w-[85vw] md:w-[600px] flex flex-col group cursor-pointer"
              >
                <div className="relative h-[600px] mb-6 overflow-hidden product-shadow">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="font-label-caps text-label-caps text-secondary mb-2 tracking-widest uppercase">
                  {slide.tag}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary">
                  {slide.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Brand Values / Testimonial */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <span className="material-symbols-outlined text-[120px] text-surface-variant absolute -top-16 -left-8 -z-10 select-none">
                format_quote
              </span>
              <blockquote className="font-headline-md text-headline-md md:text-[40px] leading-tight text-primary mb-8 relative z-10">
                "Velour &amp; Weave textiles completely transformed our recent Milan project. The tactile quality and depth of color are unmatched in the industry."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-primary" />
                <p className="font-body-md text-body-md text-secondary font-medium tracking-wide">
                  ELENA ROSTOVA, INTERIOR ARCHITECT
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-12 pl-0 md:pl-12 border-l-0 md:border-l border-outline-variant/30">
              <div>
                <h4 className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4">
                  Uncompromising Quality
                </h4>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  We source only the finest natural fibers, partnering with mills that have honed their craft over generations to ensure every yard meets our exacting standards.
                </p>
              </div>
              <div>
                <h4 className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4">
                  Bespoke Curation
                </h4>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  Our digital showroom is tailored for the trade, offering personalized sample curation and dedicated advisory services for complex design requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
