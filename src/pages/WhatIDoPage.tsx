import React from 'react';
import { projectsData } from '../data/projects';

export const WhatIDoPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Page Header */}
        <div className="mb-16 md:mb-24 pb-8 sm:pb-12 border-b border-editorial-border space-y-6">
          <div className="mono-label text-ink-tertiary">
            [ WHAT I DO ]
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tightest leading-tight text-ink">
            What I Have Built
          </h1>

          <div className="space-y-2 text-lg sm:text-xl text-ink-secondary font-normal leading-relaxed max-w-3xl">
            <p>The About page tells you why I build.</p>
            <p className="text-ink">This page shows you what I built.</p>
          </div>
        </div>

        {/* Selected Work Section */}
        <div className="space-y-20 sm:space-y-28">
          <div className="flex items-center justify-between pb-4 border-b border-editorial-border/60">
            <h2 className="mono-label text-ink font-medium tracking-widest">
              [ SELECTED WORK & VENTURES ]
            </h2>
            <span className="mono-label text-ink-tertiary">
              {String(projectsData.length).padStart(2, '0')} PROJECTS
            </span>
          </div>

          <div className="space-y-20 sm:space-y-24 divide-y-0">
            {projectsData.map((project) => (
              <article key={project.id} className="group pt-4 space-y-8">
                {/* Header row: Number, Title & Role */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-editorial-border/40 pb-4">
                  <div className="flex items-baseline space-x-4">
                    <span className="mono-label text-sm text-ink-tertiary">{project.number}</span>
                    <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-ink">
                      {project.title}
                    </h3>
                  </div>
                  <div className="mono-label text-xs text-ink-secondary">
                    {project.role} | {project.year}
                  </div>
                </div>

                {/* Structured Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start pt-2">
                  <div className="md:col-span-6 space-y-6">
                    {/* What It Is */}
                    <div className="space-y-1">
                      <span className="mono-label text-[0.65rem] text-ink-tertiary uppercase">WHAT IT IS</span>
                      <p className="text-base text-ink font-normal leading-relaxed">
                        {project.whatItIs}
                      </p>
                    </div>

                    {/* Why I Built / Worked On It */}
                    <div className="space-y-1">
                      <span className="mono-label text-[0.65rem] text-ink-tertiary uppercase">WHY I WORKED ON IT</span>
                      <p className="text-sm text-ink-secondary leading-relaxed font-normal">
                        {project.whyIBuiltIt}
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-6 space-y-6">
                    {/* What I Did */}
                    <div className="space-y-1">
                      <span className="mono-label text-[0.65rem] text-ink-tertiary uppercase">WHAT I DID</span>
                      <p className="text-sm text-ink-secondary leading-relaxed font-normal">
                        {project.whatIDid}
                      </p>
                    </div>

                    {/* Technology */}
                    <div className="space-y-2">
                      <span className="mono-label text-[0.65rem] text-ink-tertiary uppercase">TOOLS & DOMAIN</span>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.technology.map((tech) => (
                          <span
                            key={tech}
                            className="mono-label text-[0.65rem] px-2.5 py-1 bg-canvas text-ink-secondary border border-editorial-border/60"
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
                  <div className="pt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider uppercase text-ink hover:text-ink-secondary transition-colors"
                    >
                      <span>VISIT PROJECT</span>
                      <span>↗</span>
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Other Work Section */}
        <div className="mt-24 sm:mt-32 pt-12 border-t border-editorial-border space-y-6">
          <h2 className="mono-label text-ink font-medium tracking-widest">
            [ OTHER REPOSITORIES & EXPERIMENTS ]
          </h2>
          <p className="text-sm text-ink-secondary leading-relaxed max-w-2xl">
            Additional open-source tools, infrastructure scripts, and experimental code projects are published directly on GitHub.
          </p>
          <a
            href="https://github.com/renekrisk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider uppercase text-ink hover:text-ink-secondary transition-colors"
          >
            <span>EXPLORE GITHUB (@RENEKRISK)</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};
