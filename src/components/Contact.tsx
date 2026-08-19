import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-28 md:py-44 border-b border-editorial-border/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 md:mb-16 pb-6 border-b border-editorial-border">
          <h2 className="mono-label text-ink font-medium tracking-widest">
            [ 04 / CONTACT ]
          </h2>
          <span className="mono-label text-ink-tertiary">
            INQUIRIES & ADVISORY
          </span>
        </div>

        {/* Closing Statement & Main Link */}
        <div className="max-w-4xl space-y-10">
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tightest leading-[1.1] text-ink">
            Available for select advisory, architectural consultations, and principal engineering roles.
          </h3>

          <p className="text-base sm:text-lg text-ink-secondary max-w-xl leading-relaxed">
            If you have a project requiring high standards of design restraint, performance, and software clarity, reach out directly.
          </p>

          {/* Email Call to Action */}
          <div className="pt-6">
            <a
              href="mailto:placeholder@domain.com"
              className="inline-flex items-center space-x-3 text-xl sm:text-2xl font-mono text-ink hover:text-ink-secondary border-b border-ink pb-1 transition-colors duration-200 group"
            >
              <span>hello@kris.design</span>
              <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                ↗
              </span>
            </a>
            <div className="mono-label text-[0.65rem] text-ink-tertiary mt-3">
              DIRECT EMAIL PLACEHOLDER // PGP KEY AVAILABLE UPON REQUEST
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
