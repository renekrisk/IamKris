import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 border-b border-editorial-border/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 md:mb-16 pb-6 border-b border-editorial-border">
          <h2 className="mono-label text-ink font-medium tracking-widest">
            [ 02 / ABOUT ]
          </h2>
          <span className="mono-label text-ink-tertiary">
            PERSPECTIVE & BACKGROUND
          </span>
        </div>

        {/* 2-Column Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Subordinate Metadata */}
          <div className="lg:col-span-4 space-y-8 mono-label text-ink-secondary text-xs">
            <div className="space-y-2">
              <span className="block text-ink-tertiary text-[0.65rem] uppercase">CORE FOCUS</span>
              <p className="text-ink text-sm font-sans font-normal leading-relaxed">
                Front-end Architecture, Interaction Systems, & Minimalist Software Design.
              </p>
            </div>

            <div className="space-y-2">
              <span className="block text-ink-tertiary text-[0.65rem] uppercase">LOCATION & TIMEZONE</span>
              <p className="text-ink font-mono text-xs">
                STOCKHOLM, SWEDEN (CET / UTC+1)
              </p>
            </div>

            <div className="space-y-2">
              <span className="block text-ink-tertiary text-[0.65rem] uppercase">CURRENT INTERESTS</span>
              <ul className="space-y-1 text-ink-secondary">
                <li>→ Type Systems & Compilers</li>
                <li>→ High-Frame-Rate UI Engines</li>
                <li>→ Editorial & Digital Typography</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Thoughtful Editorial Paragraph Placeholders */}
          <div className="lg:col-span-8 space-y-8">
            <p className="text-xl sm:text-2xl font-normal leading-relaxed text-ink">
              Placeholder paragraph for future personal statement. This section is designed to house a concise narrative regarding engineering philosophy, design discipline, and structural approach.
            </p>

            <div className="space-y-6 text-base text-ink-secondary leading-relaxed font-normal pt-4">
              <p>
                Secondary placeholder narrative block. The final copy will detail background context, technical evolution, and key principles behind building restrained software interfaces.
              </p>

              <p>
                Tertiary placeholder sentence highlighting collaboration preferences, engineering ethics, and commitment to clear, maintainable systems without visual bloat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
