import React from 'react';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-36 border-b border-editorial-border/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 md:mb-16 pb-6 border-b border-editorial-border">
          <h2 className="mono-label text-ink font-medium tracking-widest">
            [ 03 / EXPERIENCE ]
          </h2>
          <span className="mono-label text-ink-tertiary">
            TIMELINE OVERVIEW
          </span>
        </div>

        {/* Minimal Timeline Table Structure */}
        <div className="divide-y divide-editorial-border/60">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-canvas/40 px-2 transition-colors duration-200"
            >
              {/* Year Period */}
              <div className="md:col-span-3 mono-label text-ink-tertiary text-xs">
                {item.period}
              </div>

              {/* Role Title */}
              <div className="md:col-span-4 text-base font-medium text-ink">
                {item.role}
              </div>

              {/* Organization & Detail Placeholder */}
              <div className="md:col-span-5 space-y-1">
                <div className="mono-label text-xs text-ink-secondary">
                  {item.organization}
                </div>
                <p className="text-xs text-ink-tertiary leading-relaxed">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
