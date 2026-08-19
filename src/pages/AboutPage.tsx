import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Page Header */}
        <div className="mb-12 sm:mb-16 md:mb-24 pb-6 sm:pb-8 border-b border-editorial-border space-y-4">
          <div className="flex items-center justify-between mono-label text-ink-tertiary">
            <span>[ 02 / ABOUT ]</span>
            <span className="hidden sm:inline">DISCIPLINE & PERSPECTIVE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tightest leading-tight text-ink">
            Editorial Restraint & Engineering Discipline
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary max-w-2xl font-normal leading-relaxed pt-2">
            A quiet approach to software design, focusing on structural simplicity, typography, and un-compromised clarity.
          </p>
        </div>

        {/* 2-Column Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Subordinate Metadata */}
          <div className="lg:col-span-4 space-y-8 sm:space-y-10 mono-label text-ink-secondary text-xs">
            <div className="space-y-2">
              <span className="block text-ink-tertiary text-[0.65rem] uppercase">CORE FOCUS</span>
              <p className="text-ink text-sm font-sans font-normal leading-relaxed">
                Front-end Architecture, Interaction Systems, & Minimalist Software Design.
              </p>
            </div>

            <div className="space-y-2">
              <span className="block text-ink-tertiary text-[0.65rem] uppercase">LOCATION & TIMEZONE</span>
              <p className="text-ink font-mono text-xs">
                STOCKHOLM / ISTANBUL / NAIROBI
              </p>
            </div>

            <div className="space-y-2">
              <span className="block text-ink-tertiary text-[0.65rem] uppercase">CURRENT INTERESTS</span>
              <ul className="space-y-1.5 text-ink-secondary">
                <li>→ Type Systems & Compilers</li>
                <li>→ High-Frame-Rate UI Engines</li>
                <li>→ Editorial & Digital Typography</li>
                <li>→ Restrained Interface Design</li>
              </ul>
            </div>

            <div className="space-y-2 pt-4 border-t border-editorial-border/60">
              <span className="block text-ink-tertiary text-[0.65rem] uppercase">STATUS</span>
              <p className="text-ink font-medium text-xs">
                AVAILABLE FOR Q3/Q4 SELECT MANDATES
              </p>
            </div>
          </div>

          {/* Right Column: Thoughtful Editorial Paragraph Placeholders */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-10">
            <p className="text-xl sm:text-2xl md:text-3xl font-normal leading-relaxed text-ink">
              Placeholder paragraph for future personal statement. This section is designed to house a concise narrative regarding engineering philosophy, design discipline, and structural approach.
            </p>

            <div className="space-y-6 text-sm sm:text-base text-ink-secondary leading-relaxed font-normal pt-2">
              <p>
                Secondary placeholder narrative block. The final copy will detail background context, technical evolution, and key principles behind building restrained software interfaces.
              </p>

              <p>
                Tertiary placeholder sentence highlighting collaboration preferences, engineering ethics, and commitment to clear, maintainable systems without visual bloat.
              </p>
            </div>

            {/* Philosophy Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-editorial-border/60">
              <div className="p-5 sm:p-6 bg-canvas/70 border border-editorial-border/80 space-y-2">
                <span className="mono-label text-[0.65rem] text-ink-tertiary">01 / TYPOGRAPHY-FIRST</span>
                <h4 className="text-base font-medium text-ink">Typography-Led Hierarchy</h4>
                <p className="text-xs text-ink-secondary leading-relaxed">
                  Relying on precise weight, tracking, and scale rather than superficial visual decorations.
                </p>
              </div>

              <div className="p-5 sm:p-6 bg-canvas/70 border border-editorial-border/80 space-y-2">
                <span className="mono-label text-[0.65rem] text-ink-tertiary">02 / SPACING & RHYTHM</span>
                <h4 className="text-base font-medium text-ink">Generous Whitespace</h4>
                <p className="text-xs text-ink-secondary leading-relaxed">
                  Giving content generous breathing space so each decision communicates quiet confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
