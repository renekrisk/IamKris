import React from 'react';
import { MailIcon, GithubIcon, LinkedinIcon, TwitterXIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-paper border-t border-editorial-border/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Copyright & Year */}
        <div className="mono-label text-ink-tertiary text-xs">
          © 2026 KRIS. ALL RIGHTS RESERVED.
        </div>

        {/* Right: Vector Social Icons */}
        <div className="flex items-center space-x-5 text-ink-secondary">
          <a
            href="mailto:kriskamau25@gmail.com"
            title="Email (kriskamau25@gmail.com)"
            className="hover:text-ink transition-colors duration-200 p-1"
          >
            <MailIcon className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/renekrisk"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub (@renekrisk)"
            className="hover:text-ink transition-colors duration-200 p-1"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="hover:text-ink transition-colors duration-200 p-1"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            title="X / Twitter"
            className="hover:text-ink transition-colors duration-200 p-1"
          >
            <TwitterXIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
