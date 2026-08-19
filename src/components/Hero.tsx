import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-36 md:pt-48 pb-20 md:pb-32 min-h-[75vh] flex flex-col justify-between border-b border-editorial-border/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 w-full">
        {/* Intro Tag */}
        <div className="flex items-center space-x-3 mb-8 sm:mb-12">
          <span className="inline-block w-2 h-2 rounded-full bg-ink" />
          <span className="mono-label text-ink-tertiary">
            CREATIVE TECHNOLOGIST & INTERACTION ARCHITECT
          </span>
        </div>

        {/* Headline */}
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tightest leading-[1.08] text-ink">
            Crafting quiet, high-performance digital systems and editorial software experiences.
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-normal text-ink-secondary max-w-2xl leading-relaxed">
            Focused on structural clarity, restrained visual rhythm, and scalable system engineering.
          </p>
        </div>

        {/* Metadata Footer Row */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-editorial-border/40 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 mono-label text-ink-tertiary">
          <div>
            <span className="block text-[0.65rem] text-ink-tertiary/70 uppercase mb-1">LOCATION</span>
            <span>STOCKHOLM / ISTANBUL / NAIROBI</span>
          </div>

          <div>
            <span className="block text-[0.65rem] text-ink-tertiary/70 uppercase mb-1">DISCIPLINE</span>
            <span>SYSTEMS / INTERACTION</span>
          </div>

          <div className="sm:text-right">
            <span className="block text-[0.65rem] text-ink-tertiary/70 uppercase mb-1">AVAILABILITY</span>
            <span className="text-ink font-medium">Q3/Q4 SELECT ENGAGEMENTS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
