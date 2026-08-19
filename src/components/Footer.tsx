import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-paper border-t border-editorial-border/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Left: Copyright & Year */}
        <div className="mono-label text-ink-tertiary text-xs">
          © 2026 KRIS. ALL RIGHTS RESERVED.
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center space-x-6 mono-label text-xs">
          <a
            href="https://github.com/renekrisk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-secondary hover:text-ink transition-colors duration-200"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-secondary hover:text-ink transition-colors duration-200"
          >
            LINKEDIN
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-secondary hover:text-ink transition-colors duration-200"
          >
            X (TWITTER)
          </a>
          <a
            href="mailto:kriskamau25@gmail.com"
            className="text-ink-secondary hover:text-ink transition-colors duration-200"
          >
            EMAIL
          </a>
        </div>
      </div>
    </footer>
  );
};
