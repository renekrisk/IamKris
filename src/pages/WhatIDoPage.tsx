import React from 'react';
import { projectsData } from '../data/projects';

export const WhatIDoPage: React.FC = () => {
  return (
    <div className="py-8 sm:py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-12 space-y-16">

        {/* ── Page Header + MEME 1: Iron-Maninfrontofbombs.jpg (FIRST THING PEOPLE SEE) ── */}
        <div className="space-y-8 border-b border-editorial-border pb-10 sm:pb-14">
          <div className="space-y-4 max-w-2xl">
            <div className="mono-label text-ink-tertiary">
              [ WHAT I DO ]
            </div>

            <h1 className="text-2xl sm:text-4xl font-normal tracking-tight leading-tight text-ink">
              What I Have Built
            </h1>

            <div className="space-y-1 text-xs sm:text-sm md:text-base text-ink-secondary font-normal leading-relaxed">
              <p>The About page tells you who I am.</p>
              <p className="text-ink font-medium">This page is what I've built or done.</p>
              <p className="italic text-ink-tertiary pt-1">Have a look around.</p>
            </div>
          </div>

          {/* HERO SPOTLIGHT — Iron-Maninfrontofbombs.jpg */}
          <div className="group overflow-hidden rounded-sm border border-editorial-border/80 bg-paper p-3 sm:p-4 shadow-xs">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-ink/5 rounded-xs">
              <img
                src="/images/memes/Iron-Maninfrontofbombs.jpg"
                alt="Iron Man in front of bombs"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-paper/90 backdrop-blur-md mono-label text-[10px] text-ink border border-editorial-border/60">
                [ WELCOME ]
              </div>
            </div>
          </div>
        </div>

        {/* ── Selected Work Section ── */}
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
            {projectsData.map((project, idx) => (
              <React.Fragment key={project.id}>
                <article className="group pt-2 space-y-6">
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

                {/* ── MEME 2: gettinghandsdirty.jpg (After Project 01 / Muncheez) ── */}
                {idx === 0 && (
                  <div className="my-8 p-4 sm:p-6 rounded-sm border border-editorial-border/80 bg-paper space-y-3">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      <div className="w-full sm:w-64 aspect-[4/3] overflow-hidden rounded-xs shrink-0 border border-editorial-border/60">
                        <img
                          src="/images/memes/gettinghandsdirty.jpg"
                          alt="Getting hands dirty"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="mono-label text-[10px] text-ink-tertiary">[ 02 / GETTING HANDS DIRTY ]</div>
                        <h4 className="text-base sm:text-lg font-medium text-ink">
                          "Time to get my hands dirty."
                        </h4>
                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                          Building core product architecture and delivery platform infrastructure from scratch.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── MEME 3: talktohand.jpg (After Project 02 / Vuka) ── */}
                {idx === 1 && (
                  <div className="my-8 p-4 sm:p-6 rounded-sm border border-editorial-border/80 bg-paper space-y-3">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      <div className="w-full sm:w-64 aspect-[4/3] overflow-hidden rounded-xs shrink-0 border border-editorial-border/60">
                        <img
                          src="/images/memes/talktohand.jpg"
                          alt="Talk to the hand voice sensors"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="mono-label text-[10px] text-ink-tertiary">[ 03 / HARDWARE SPEC ]</div>
                        <h4 className="text-base sm:text-lg font-medium text-ink">
                          "Talk to the hand. No seriously, it has voice sensors."
                        </h4>
                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                          When client feature requests start coming in during sprint planning.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── MEME 4: ironmanon9hoursofsleep.jpg (After Project 03 / Ink Coaching) ── */}
                {idx === 3 && (
                  <div className="my-8 p-4 sm:p-6 rounded-sm border border-editorial-border/80 bg-paper space-y-3">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      <div className="w-full sm:w-64 aspect-[4/3] overflow-hidden rounded-xs shrink-0 border border-editorial-border/60">
                        <img
                          src="/images/memes/ironmanon9hoursofsleep.jpg"
                          alt="Iron Man on 9 hours of sleep"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="mono-label text-[10px] text-ink-tertiary">[ 04 / SLEEP & VELOCITY ]</div>
                        <h4 className="text-base sm:text-lg font-medium text-ink">
                          Iron Man on 0 hours of sleep
                        </h4>
                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                          Peak engineering performance after 3 weeks of building and shipping.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── MEME 5: wakeupdaddyshomejarvismeme.jpg (After Project 05 / Cloud Infrastructure) ── */}
                {idx === 5 && (
                  <div className="my-8 p-4 sm:p-6 rounded-sm border border-editorial-border/80 bg-paper space-y-3">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      <div className="w-full sm:w-64 aspect-[4/3] overflow-hidden rounded-xs shrink-0 border border-editorial-border/60">
                        <img
                          src="/images/memes/wakeupdaddyshomejarvismeme.jpg"
                          alt="Wake up daddy's home Jarvis"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="mono-label text-[10px] text-ink-tertiary">[ 05 / JARVIS PROTOCOL ]</div>
                        <h4 className="text-base sm:text-lg font-medium text-ink">
                          "Wake up, Daddy's home."
                        </h4>
                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                          Deploying production serverless infrastructure pipelines at 2 AM.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── MEME 6: greatdaypicofironmanandspidermanatawards.jpg (OUTRO) ── */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-editorial-border space-y-6">
          <div className="group overflow-hidden rounded-sm border border-editorial-border/80 bg-paper p-4 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-full sm:w-72 aspect-[16/9] overflow-hidden rounded-xs shrink-0 border border-editorial-border/60">
                <img
                  src="/images/memes/greatdaypicofironmanandspidermanatawards.jpg"
                  alt="Jarvis make sure this guy has a great day"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-2">
                <div className="mono-label text-[10px] text-ink-tertiary">[ 06 / PARTING MESSAGE ]</div>
                <h4 className="text-lg sm:text-xl font-normal tracking-tight text-ink">
                  "Jarvis, make sure this guy has a great day."
                </h4>
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed max-w-md">
                  Thanks for checking out my work. Feel free to explore GitHub or reach out anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Work Section */}
        <div className="pt-6 border-t border-editorial-border/40 space-y-4">
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
