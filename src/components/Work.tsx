import React from 'react';
import { projectsData } from '../data/projects';
import { ProjectItem } from './ProjectItem';

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 md:py-36 border-b border-editorial-border/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 md:mb-16 pb-6 border-b border-editorial-border">
          <h2 className="mono-label text-ink font-medium tracking-widest">
            [ 01 / SELECTED WORK ]
          </h2>
          <span className="mono-label text-ink-tertiary">
            04 CASE STUDIES
          </span>
        </div>

        {/* Project List */}
        <div className="divide-y-0">
          {projectsData.map((project, idx) => (
            <ProjectItem
              key={project.id}
              project={project}
              isLast={idx === projectsData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
