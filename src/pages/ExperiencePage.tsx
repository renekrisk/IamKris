import React from 'react';
import { experienceData } from '../data/experience';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Page Header */}
        <div className="mb-12 sm:mb-16 md:mb-24 pb-6 sm:pb-8 border-b border-editorial-border space-y-4">
          <div className="flex items-center justify-between mono-label text-ink-tertiary">
            <span>[ 03 / EXPERIENCE ]</span>
            <span className="hidden sm:inline">TIMELINE & ROLES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tightest leading-tight text-ink">
            Experience & Role History
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary max-w-2xl font-normal leading-relaxed pt-2">
            A minimal overview of past technical leadership, architectural roles, and system engineering positions.
          </p>
        </div>

        {/* Minimal Timeline Table Structure */}
        <div className="divide-y divide-editorial-border/60">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="py-6 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-8 items-start group hover:bg-canvas/40 px-2 transition-colors duration-200"
            >
              {/* Year Period */}
              <div className="md:col-span-3 mono-label text-ink-tertiary text-xs">
                {item.period}
              </div>

              {/* Role Title */}
              <div className="md:col-span-4 text-base sm:text-lg font-medium text-ink">
                {item.role}
              </div>

              {/* Organization & Detail */}
              <div className="md:col-span-5 space-y-1.5 pt-1 md:pt-0">
                <div className="mono-label text-xs text-ink-secondary font-medium">
                  {item.organization}
                </div>
                <p className="text-xs text-ink-tertiary leading-relaxed font-normal">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
