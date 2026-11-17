import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const steps = [
    {
      num: '01',
      title: 'Cultivation',
      icon: 'psychiatry',
      desc: 'Partnering exclusively with multi-generational organic farms, we source long-staple fibers cultivated without synthetic interventions. Every harvest respects the soil’s natural restorative cycle.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUazEnHaX7i_wmx08xP6pJXBKfiXn-IIm73Sb1lzVE8xz1T3Yn18hMPys0aBvhJ0IB09gZBDF-EaMTk5FBXyCcRa_bZUIENTOQV_90nKL5U_beS7k2vBpjBewP2K_PZLJdKOkq5e7n1Ud98NjP2FE5eYlq8GqxIx_Wmpv9xlkVbNu6xndhVLq18i74t0UVRjR1TLdqxzf9eaMJn5VsXCJNat7btRRTSZ9m8MZE8Mozl9GQk3Af2BNu1g',
    },
    {
      num: '02',
      title: 'Spinning',
      icon: 'gesture',
      desc: 'Raw fibers are hand-spun using heritage techniques that preserve natural variations in thickness, imparting a unique, organic tactile quality to every spool of thread.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKK380IyC9-Cg_ZLl9EwfdW2j3WdcBALEv687uc675wKsuc-To3cfPhFiEXd0IDIjObyrRO5pyr775OH5XeTTNNQpZxXd-OgRi4rctieNxWPxyinWH7DsLQSn3KCB1X0JePqkZDo5AV05mzGtk2lUiq4JFrVUrtOqCqWRHGnU7TCYppPTD8Jaslk0_fuDVtFr3Nz79Tgn7AxYeXQ2o0dHTgS4jhsaaaCB6Aj0U0msrKxyERvlyY5VYbw',
    },
    {
      num: '03',
      title: 'Weaving',
      icon: 'grid_on',
      desc: 'Master artisans operating intricate shuttle and jacquard looms to create complex, structural masterpieces with structural integrity designed to endure across generations.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEuiV1QYum3nhZJyzXYJXseO62SMuec7UiFicU1EOZwSy10hgo3dryD7-3gm0HJAyTMMgu_Pn41z2p-Yj37n628zon53g4_R1rcD48BExtuVa6jl0itiRPM8IVsoFdPJSyJyHG1ko6hOm-rSE75qGXPsX2iRUtB9fug-zmC9BA95QeYFsnsc40YvF8Xjmml8lX9kxqRb0qwgGCuUfIWA_YhiohCCg7afNFRghCw8GA1kvvTRKl3WaNPw',
    },
  ];

  const artisans = [
    {
      name: 'Elias Thorne',
      role: 'Master Weaver',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyWb2Jz2rY7CNgkRB0l2LtAt8h_xK9v4aitMQA5RSJSxYh5sPkke4POhUGXTV6Ijf2Ll2avSDWvywNYktXsasc_I4DFy5F3Dww6EtuYm4jON6E4xnAv6b_8Y5KtvzE7ZZUuIafR2juCl3zPkuSkTwkdA38vcYBBw00-t43J1XO3r2-lo0Fwi8SY5_o1H9hqt9FWyIE_Ba6FgYb5T45i-Ljk3WiwKZJxqb5PGFZMTQRgW8YWX4plT1sbQ',
      bio: 'Over four decades perfecting the tension and cadence of antique handlooms in our Lyon atelier.',
    },
    {
      name: 'Clara Vance',
      role: 'Head of Dyeing & Natural Pigments',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAf6KHEzlN7PVtxgzyj7KC6yP6bK1zlmfW1kZIHL4N4vwH6zj48SCJTtS9Ah739AeRBHVRfx0nUzvM-2fwUB0j9BaXermukaxy4DTijj7dWkvElwUvr1F5CdC_I7Odw9sTK2oj6lbVSTQZo1CYqs9sP2MXYGnKCH3pMvgJOy_CjFJLKHQNkGfLcA4IC35aj-lXUGd8KJxX3LPAFibe4O5CX9_tEy-Nl2joP50-DW1r478E8p78AUgddg',
      bio: 'Formulating botanical and mineral dyes extracted from walnut shells, madder root, and organic indigo.',
    },
  ];

  return (
    <main className="flex-grow pt-32 md:pt-40">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-6 space-y-8">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block">
              Proven Provenance
            </span>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary leading-none">
              Heritage of Craft
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
              For over a century, VELOUR &amp; WEAVE has been synonymous with uncompromising quality. We weave narratives into textiles, blending traditional artisan techniques with contemporary editorial luxury.
            </p>
            <div className="pt-4 flex gap-6">
              <Link
                to="/catalog"
                className="bg-primary text-on-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-tertiary-container transition-colors"
              >
                Explore Archives
              </Link>
              <Link
                to="/book"
                className="border border-primary text-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-container transition-colors"
              >
                Studio Consultation
              </Link>
            </div>
          </div>
          <div className="md:col-span-6 relative mt-12 md:mt-0">
            <div className="h-[600px] overflow-hidden product-shadow border border-[#D1CECA]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOyAOctY5tlOuHXzkknUtiYRXxAj19qMAcbQGypMRbGmL71wq6bfvvlZ17STXQENdPlL_iykuWCzxkag0tQEYumYIxQ0lchS3W7wAIP3zhAjY9cw1bnJ9T91BO6EPKyK7GD1buMLxaWV5bmtK5MpMZuORisd1DeK99eENj8161qcz9NMWj-oi1HmuZnHvvzLhgz3uGhfMk5YoQBnl77gwgmi-FI3xd4HPm70La4JkHOw__1f7MpovunQ"
                alt="Master weaver hands operating loom"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Large Immersive Image */}
      <section className="mb-section-gap">
        <div
          className="w-full h-[500px] md:h-[700px] bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEuiV1QYum3nhZJyzXYJXseO62SMuec7UiFicU1EOZwSy10hgo3dryD7-3gm0HJAyTMMgu_Pn41z2p-Yj37n628zon53g4_R1rcD48BExtuVa6jl0itiRPM8IVsoFdPJSyJyHG1ko6hOm-rSE75qGXPsX2iRUtB9fug-zmC9BA95QeYFsnsc40YvF8Xjmml8lX9kxqRb0qwgGCuUfIWA_YhiohCCg7afNFRghCw8GA1kvvTRKl3WaNPw')`,
          }}
        >
          <div className="w-full h-full bg-primary/25 flex items-center justify-center p-8 text-center">
            <div className="max-w-2xl bg-surface/90 backdrop-blur-md p-10 md:p-14 border border-outline-variant/30">
              <span className="font-label-caps text-xs text-secondary uppercase tracking-widest block mb-3">
                Architectural Philosophy
              </span>
              <p className="font-headline-md text-headline-md text-primary leading-tight">
                "We do not merely dress spaces. We compose environments of tactile warmth and stillness."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Timeline (The Process) */}
      <section className="bg-surface-container-low py-section-gap mb-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-24">
            <span className="font-label-caps text-label-caps text-secondary mb-2 block tracking-widest uppercase">
              The Journey of Fibre
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              From Source to Silhouette
            </h2>
            <p className="font-body-md text-body-md text-secondary mt-4 max-w-2xl mx-auto leading-relaxed">
              The journey of a VELOUR &amp; WEAVE textile is a testament to patience, natural integrity, and artisan precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/50 -translate-y-1/2 z-0" />

            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative z-10 flex flex-col items-center bg-surface p-8 product-shadow group hover:-translate-y-2 transition-transform duration-500 border border-outline-variant/20"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 text-on-primary">
                  <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                </div>
                <span className="font-label-caps text-xs text-secondary uppercase mb-2">
                  Phase {step.num}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary text-center mb-4">
                  {step.title}
                </h3>
                <p className="font-body-md text-sm text-secondary text-center leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Spotlight & Artisans */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              Meet the Artisans
            </h2>
            <p className="font-body-md text-body-md text-secondary mt-2">
              The hands and minds behind our living heritage.
            </p>
          </div>
          <Link
            to="/book"
            className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 mt-6 md:mt-0 hover:text-secondary transition-colors uppercase tracking-widest"
          >
            Visit Our Atelier
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {artisans.map((artisan, idx) => (
            <div
              key={idx}
              className={`relative group overflow-hidden border border-[#D1CECA] ${
                idx === 1 ? 'md:mt-24' : ''
              }`}
            >
              <img
                src={artisan.image}
                alt={artisan.name}
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent flex flex-col justify-end p-8 text-on-primary">
                <span className="font-label-caps text-label-caps text-on-primary mb-2 uppercase tracking-widest opacity-80">
                  {artisan.role}
                </span>
                <h3 className="font-headline-md text-headline-md text-on-primary mb-2">
                  {artisan.name}
                </h3>
                <p className="font-body-md text-sm text-on-primary/80 max-w-md">
                  {artisan.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
