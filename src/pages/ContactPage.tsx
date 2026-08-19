import React from 'react';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 md:py-36">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-6">
          <div className="mono-label text-ink-tertiary">
            [ CONTACT ]
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tightest leading-[1.08] text-ink">
            Let's talk.
          </h1>

          <div className="space-y-3 text-lg sm:text-xl font-normal text-ink-secondary leading-relaxed max-w-xl pt-2">
            <p>About an idea.</p>
            <p>About something you're building.</p>
            <p>About something you think I should see.</p>
            <p>Or about nothing particularly important at all.</p>
            <p className="text-ink pt-2 font-medium">I like good conversations.</p>
          </div>
        </div>

        {/* Direct Connection Outlets */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-8 border-t border-editorial-border">
          {/* Direct Email */}
          <div className="md:col-span-6 space-y-3">
            <span className="mono-label text-[0.65rem] text-ink-tertiary uppercase">EMAIL</span>
            <div>
              <a
                href="mailto:kriskamau25@gmail.com"
                className="inline-flex items-center space-x-3 text-xl sm:text-3xl font-mono text-ink hover:text-ink-secondary border-b border-ink pb-1 transition-colors duration-200 group break-all sm:break-normal"
              >
                <span>kriskamau25@gmail.com</span>
                <span className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Direct Phone / WhatsApp */}
          <div className="md:col-span-6 space-y-3">
            <span className="mono-label text-[0.65rem] text-ink-tertiary uppercase">PHONE / WHATSAPP</span>
            <div className="flex flex-col space-y-3 font-mono text-lg sm:text-xl text-ink">
              <div>
                <span className="block text-[0.6rem] text-ink-tertiary uppercase mb-0.5">TÜRKIYE (ANKARA)</span>
                <a href="tel:+90539133892" className="hover:underline">
                  +90 539 133 892
                </a>
              </div>
              <div>
                <span className="block text-[0.6rem] text-ink-tertiary uppercase mb-0.5">KENYA (NAIROBI)</span>
                <a href="tel:+254769032075" className="hover:underline">
                  +254 769 032 075
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social / Network Outlets */}
        <div className="pt-8 border-t border-editorial-border/60 grid grid-cols-2 sm:grid-cols-4 gap-6 mono-label text-xs">
          <div>
            <span className="block text-[0.65rem] text-ink-tertiary uppercase mb-2">GITHUB</span>
            <a
              href="https://github.com/renekrisk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:underline"
            >
              github.com/renekrisk ↗
            </a>
          </div>

          <div>
            <span className="block text-[0.65rem] text-ink-tertiary uppercase mb-2">LINKEDIN</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:underline"
            >
              linkedin.com ↗
            </a>
          </div>

          <div>
            <span className="block text-[0.65rem] text-ink-tertiary uppercase mb-2">X / TWITTER</span>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:underline"
            >
              x.com ↗
            </a>
          </div>

          <div>
            <span className="block text-[0.65rem] text-ink-tertiary uppercase mb-2">LOCATION</span>
            <span className="text-ink">NAIROBI, KENYA / ANKARA, TÜRKIYE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
