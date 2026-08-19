import React from 'react';
import { projectsData } from '../data/projects';
import { ProjectItem } from '../components/ProjectItem';

export const WorkPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Page Header */}
        <div className="mb-16 md:mb-24 pb-8 border-b border-editorial-border space-y-4">
          <div className="flex items-center justify-between mono-label text-ink-tertiary">
            <span>[ 01 / SELECTED WORK ]</span>
            <span>04 CASE STUDIES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-normal tracking-tightest leading-tight text-ink">
            Selected Works & Engineering Case Studies
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary max-w-2xl font-normal leading-relaxed pt-2">
            A curated showcase of software architecture, interaction design systems, and digital product case studies.
          </p>
        </div>

        {/* Full Project List */}
        <div>
          {projectsData.map((project, idx) => (
            <ProjectItem
              key={project.id}
              project={project}
              isLast={idx === projectsData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
