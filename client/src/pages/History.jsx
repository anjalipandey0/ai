import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function History() {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All Projects', 'Commercial', 'Residential', 'Runway'];

  const projects = [
    {
      id: 'savoy',
      category: 'Commercial',
      year: '2023',
      title: 'The Savoy Renovation',
      fabric: 'Russet Opulence Heavy Velvet',
      client: 'Fairmont Hotels & Resorts',
      scope: 'Full suite drapery and bespoke lobby upholstery for 120 guestrooms and grand salon.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFEmYMuQZ6KP5p9XtyXe4-Q3ArdtsLX9CU2-6NPM58C4fPUC8MoOBU4pJJZrK_yo6yZHvcmwaZ7YVQsNve31zpOv_Jy0wzlZXan1PZapdgvzWJm_u2mMKLaiGpTtqeXesiugNJMW53MAvEshe9CKdI_EhNQWauj3MoiIOgoPyDr4f0umi3U6OWoX1tHf3TRbnwRcVq9euEBHm_ySewhkmbdBCDZuzAdxChWQuQZOIScxi7H17n0fWLzw',
      details: 'Commissioned to harmonize historical Edwardian grandeur with sharp modernist clean lines. Over 2,400 meters of custom-loomed Russet Opulence velvet were specified to establish visual weight and acoustic absorption across cavernous public rooms.',
      featured: true,
    },
    {
      id: 'paris',
      category: 'Runway',
      year: 'AW24',
      title: 'Paris Fashion Week',
      fabric: 'Raw Jute Weave',
      client: 'Maison Margiela',
      scope: 'Structural textile garments and runway backdrop installation.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADad6QOmBg2xTVTTXzkcPRoaSkXLybXYvQ3Ps0-hNPpf6i05asrtox1izQ2JiqJ24_oFyYR4F4UWIcK-kuY58uxjZVy3r3WzFYt61MVIo9DicB5lk-7Zev-diUKjXb6R5a77bYMQUlQFn7sZhfRtjOIrePppJC8h7uZFRBedzWXhswbM4vETRMpOTrcUj6p5JKlTIZqdpu6oZN3nyq1Ezc0YDFhEJPXwhlRhLgI0VxB3a11-E9HQndqA',
      details: 'Collaborating directly with the maison’s design studio, our raw unbleached jute was re-engineered with subtle organic oils to allow sculptural draping on haute couture outerwear without compromising fiber raw honesty.',
      featured: false,
    },
    {
      id: 'kyoto',
      category: 'Residential',
      year: '2022',
      title: 'Artisanal Boutique Hotel',
      fabric: 'Deep Slate Linen',
      client: 'The Kyoto Group',
      scope: 'Bespoke headboards and shoji screen lining in 18 private ryokans.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGGA0mOOYYp_-i1y9mbMQxJ5EUjDwqfF1G9BFliHcmhD2uBrefIlm8Oxq5STj5hClaeZWLFrf4TloJZxtwV1XveprTUz5-ri1t-9anU5tg4fW-MX5IdGPWtgNL3gBfBtihAW4aJ28l5oEg2XDME2o9lqmbsrLOR0ntKPrZr93JzcXfh3VpjMY_3FjgVBiZQwA7sA_6_3HXf2ZLKHgGFUAMx69jx-X-r6ub_e3DHJvY-JHEYsmjC_l0oA',
      details: 'Integrating traditional Japanese joinery with European slate linen. The fabric was specially tension-tested to maintain crisp alignment despite fluctuating seasonal humidity.',
      featured: false,
    },
    {
      id: 'milan',
      category: 'Commercial',
      year: '2024',
      title: 'Milan Grand Hotel Suites',
      fabric: 'Heritage Damask & Pure Silk Crepe',
      client: 'Rostova Architectural Atelier',
      scope: 'Acoustic wall paneling and penthouse suite upholstery.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3uF3Z5vzhWbIb5ZTfuUicDfNEK5UWZz_I9PMI80osXfDEyw12HgOJ0W2y698_4MWlSeNUodSGA-2wUZSLPRU9fHkRJ673pj2QSt7oSEFIMWZOv-3oB7d59xSjMLLbqKedR7uX15U-YvLb6MrStIQhZRQBfI6x_8YOjbjbM94nmh-lttq9AqyMFUxvEs9NvIRYyEJKeaTCXS-wjvdE52eR120Ny-WkNbcz9o-k3yqFmqR9DfDHet_IqQ',
      details: 'Engineered for high acoustic performance while exhibiting high-contrast editorial elegance. Elena Rostova selected our woven damask to bring architectural stillness to bustling urban suites.',
      featured: false,
    },
  ];

  const filteredProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const featuredProject = filteredProjects.find((p) => p.featured);

  return (
    <main className="flex-grow pt-[104px]">
      {/* Header Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-16 md:pt-24 pb-20 text-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 md:col-start-3 text-center">
            <p className="font-label-caps text-label-caps text-secondary mb-4 uppercase tracking-widest">
              Heritage &amp; Portfolio
            </p>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6">
              A Legacy Woven in Time.
            </h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto leading-relaxed">
              For over a century, our textiles have defined the atmosphere of the world's most prestigious spaces. Explore our curated history of bespoke commissions and architectural collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16">
        <div className="flex flex-wrap justify-center gap-8 border-b border-outline-variant/30 pb-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-label-caps text-label-caps uppercase pb-2 transition-colors ${
                activeFilter === filter
                  ? 'text-primary textile-chip-active font-semibold'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap">
        {/* Featured Project: Asymmetric Layout */}
        {featuredProject && (
          <div className="mb-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-7 h-[500px] md:h-[600px] overflow-hidden hover-lift border border-[#D1CECA] relative">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center mt-8 md:mt-0">
              <p className="font-label-caps text-label-caps text-secondary mb-4 uppercase">
                {featuredProject.category} • {featuredProject.year}
              </p>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6">
                {featuredProject.title}
              </h2>
              <div className="space-y-6 mb-8 border-t border-outline-variant/30 pt-6">
                <div>
                  <p className="font-label-caps text-label-caps text-secondary uppercase">
                    Fabric Featured
                  </p>
                  <p className="font-body-md text-body-md text-primary mt-1 font-medium">
                    {featuredProject.fabric}
                  </p>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-secondary uppercase">
                    Client
                  </p>
                  <p className="font-body-md text-body-md text-primary mt-1">
                    {featuredProject.client}
                  </p>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-secondary uppercase">
                    Scope
                  </p>
                  <p className="font-body-md text-body-md text-primary mt-1">
                    {featuredProject.scope}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(featuredProject)}
                className="self-start border border-primary text-primary font-label-caps text-label-caps uppercase px-6 py-3 hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-2"
              >
                View Case Study
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        )}

        {/* Bento Grid for other projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {filteredProjects
            .filter((p) => !p.featured)
            .map((proj, idx) => (
              <div
                key={proj.id}
                className={`flex flex-col group ${idx % 2 === 1 ? 'md:mt-16' : ''}`}
              >
                <div
                  onClick={() => setSelectedProject(proj)}
                  className="h-[400px] overflow-hidden mb-6 hover-lift border border-[#D1CECA] relative cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent z-10 pointer-events-none" />
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="font-label-caps text-label-caps text-secondary mb-2 uppercase">
                  {proj.category} • {proj.year}
                </p>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  {proj.title}
                </h3>
                <div className="space-y-2 mb-6 border-l-2 border-outline-variant/30 pl-4">
                  <p className="font-body-md text-body-md text-secondary">
                    <span className="text-primary font-medium">Fabric:</span> {proj.fabric}
                  </p>
                  <p className="font-body-md text-body-md text-secondary">
                    <span className="text-primary font-medium">Client:</span> {proj.client}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="font-label-caps text-label-caps text-primary uppercase flex items-center gap-2 hover:opacity-70 transition-opacity self-start"
                >
                  Explore Case Study
                  <span className="material-symbols-outlined text-[16px]">north_east</span>
                </button>
              </div>
            ))}
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-margin-mobile">
          <div
            className="absolute inset-0 bg-primary/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative bg-surface w-full max-w-3xl p-8 md:p-12 shadow-2xl border border-outline-variant/30 z-10 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-primary hover:opacity-70"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>

            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-2">
              Case Study Archive • {selectedProject.year}
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary mb-4">
              {selectedProject.title}
            </h2>

            <div className="w-full h-72 md:h-96 overflow-hidden mb-6 border border-outline-variant/30">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 border-t border-b border-outline-variant/20 py-4 font-body-md text-sm">
              <div>
                <span className="text-secondary block font-label-caps text-xs">Client</span>
                <span className="text-primary font-medium">{selectedProject.client}</span>
              </div>
              <div>
                <span className="text-secondary block font-label-caps text-xs">Featured Textile</span>
                <span className="text-primary font-medium">{selectedProject.fabric}</span>
              </div>
            </div>

            <h4 className="font-label-caps text-primary uppercase mb-2 tracking-widest">
              Architectural Context
            </h4>
            <p className="font-body-md text-secondary leading-relaxed mb-6">
              {selectedProject.details}
            </p>

            <h4 className="font-label-caps text-primary uppercase mb-2 tracking-widest">
              Commission Scope
            </h4>
            <p className="font-body-md text-secondary leading-relaxed mb-8">
              {selectedProject.scope}
            </p>

            <div className="flex gap-4">
              <Link
                to="/catalog"
                className="bg-primary text-on-primary px-8 py-3.5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-tertiary-container transition-colors"
              >
                Inquire About Fabric
              </Link>
              <button
                onClick={() => setSelectedProject(null)}
                className="border border-outline-variant text-primary px-6 py-3.5 font-label-caps text-label-caps uppercase hover:bg-surface-container transition-colors"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
