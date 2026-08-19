import React from 'react';
import { Project } from '../types';

interface ProjectItemProps {
  project: Project;
  isLast?: boolean;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project, isLast = false }) => {
  return (
    <article
      className={`group py-12 md:py-16 ${
        !isLast ? 'border-b border-editorial-border/80' : ''
      }`}
    >
      <div className="space-y-6">
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

        {/* Structured Breakdown: What / Why / Did / Tech */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start pt-2">
          <div className="md:col-span-6 space-y-6">
            <div className="space-y-1">
              <span className="mono-label text-[0.65rem] text-ink-tertiary uppercase">WHAT IT IS</span>
              <p className="text-base text-ink font-normal leading-relaxed">
                {project.whatItIs}
              </p>
            </div>

            <div className="space-y-1">
              <span className="mono-label text-[0.65rem] text-ink-tertiary uppercase">WHY I BUILT IT</span>
              <p className="text-sm text-ink-secondary leading-relaxed font-normal">
                {project.whyIBuiltIt}
              </p>
            </div>
          </div>

          <div className="md:col-span-6 space-y-6">
            <div className="space-y-1">
              <span className="mono-label text-[0.65rem] text-ink-tertiary uppercase">WHAT I DID</span>
              <p className="text-sm text-ink-secondary leading-relaxed font-normal">
                {project.whatIDid}
              </p>
            </div>

            <div className="space-y-2">
              <span className="mono-label text-[0.65rem] text-ink-tertiary uppercase">TECHNOLOGY</span>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.technology.map((tech: string) => (
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
      </div>
    </article>
  );
};
