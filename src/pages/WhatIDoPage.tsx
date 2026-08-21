import React from 'react';
import { projectsData } from '../data/projects';

export const WhatIDoPage: React.FC = () => {
  return (
    <div className="py-8 sm:py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Page Header */}
        <div className="mb-12 sm:mb-16 pb-6 sm:pb-10 border-b border-editorial-border space-y-4">
          <div className="mono-label text-ink-tertiary">
            [ WHAT I DO ]
          </div>

          <h1 className="text-2xl sm:text-4xl font-normal tracking-tight leading-tight text-ink">
            What I Have Built
          </h1>

          <div className="space-y-1 text-xs sm:text-sm md:text-base text-ink-secondary font-normal leading-relaxed max-w-2xl">
            <p>The About page tells you who I am.</p>
            <p className="text-ink font-medium">This page is what I've built or done.</p>
            <p className="italic text-ink-tertiary pt-1">Have a look around.</p>
          </div>
        </div>

        {/* Selected Work Section */}
        <div className="space-y-16 sm:space-y-20">
          <div className="flex items-center justify-between pb-3 border-b border-editorial-border/60">
            <h2 className="mono-label text-ink font-medium tracking-widest text-xs">
              [ SELECTED WORK & VENTURES ]
            </h2>
            <span className="mono-label text-ink-tertiary text-xs">
              {String(projectsData.length).padStart(2, '0')} PROJECTS
            </span>
          </div>

          <div className="space-y-16 sm:space-y-20 divide-y-0">
            {projectsData.map((project) => (
              <article key={project.id} className="group pt-2 space-y-6">
                {/* Header row: Number, Title & Role */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-editorial-border/40 pb-3">
                  <div className="flex items-baseline space-x-3">
                    <span className="mono-label text-xs text-ink-tertiary">{project.number}</span>
                    <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-ink">
                      {project.title}
                    </h3>
                  </div>
                  <div className="mono-label text-[11px] sm:text-xs text-ink-secondary">
                    {project.role} | {project.year}
                  </div>
                </div>

                {/* Structured Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start pt-1">
                  <div className="md:col-span-6 space-y-5">
                    {/* What It Is */}
                    <div className="space-y-1">
                      <span className="mono-label text-[0.65rem] text-ink-tertiary uppercase">WHAT IT IS</span>
                      <p className="text-xs sm:text-sm md:text-base text-ink font-normal leading-relaxed">
                        {project.whatItIs}
                      </p>
                    </div>

                    {/* Why I Built / Worked On It */}
                    <div className="space-y-1">
                      <span className="mono-label text-[0.65rem] text-ink-tertiary uppercase">WHY I WORKED ON IT</span>
                      <p className="text-xs sm:text-sm md:text-base text-ink-secondary leading-relaxed font-normal">
                        {project.whyIBuiltIt}
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-6 space-y-5">
                    {/* What I Did */}
                    <div className="space-y-1">
                      <span className="mono-label text-[0.65rem] text-ink-tertiary uppercase">WHAT I DID</span>
                      <p className="text-xs sm:text-sm md:text-base text-ink-secondary leading-relaxed font-normal">
                        {project.whatIDid}
                      </p>
                    </div>

                    {/* Technology */}
                    <div className="space-y-2">
                      <span className="mono-label text-[0.65rem] text-ink-tertiary uppercase">TOOLS & DOMAIN</span>
                      <div className="flex flex-wrap gap-2 pt-0.5">
                        {project.technology.map((tech) => (
                          <span
                            key={tech}
                            className="mono-label text-[0.65rem] px-2.5 py-0.5 bg-paper text-ink-secondary border border-editorial-border/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Optional Link */}
                {project.link && (
                  <div className="pt-1">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-mono tracking-wider uppercase text-ink hover:text-ink-secondary transition-colors group"
                    >
                      <span>VISIT PROJECT</span>
                      <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Other Work Section */}
        <div className="mt-20 sm:mt-28 pt-10 border-t border-editorial-border space-y-4">
          <h2 className="mono-label text-ink font-medium tracking-widest text-xs">
            [ OTHER REPOSITORIES & EXPERIMENTS ]
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-ink-secondary leading-relaxed max-w-2xl">
            Additional open-source tools, infrastructure scripts, and experimental code projects are published directly on GitHub.
          </p>
          <a
            href="https://github.com/renekrisk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs font-mono tracking-wider uppercase text-ink hover:text-ink-secondary transition-colors group"
          >
            <span>EXPLORE GITHUB (@RENEKRISK)</span>
            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};
