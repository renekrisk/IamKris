import React from 'react';
import { Link } from 'react-router-dom';
import { MusicPlayerPill } from '../components/MusicPlayerPill';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col justify-center py-4 sm:py-8">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 space-y-4 sm:space-y-5">

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-normal tracking-tight leading-none text-ink">
          Hi. I'm Kris.
        </h1>

        {/* Compact, Single-Viewport Prose */}
        <div className="space-y-2.5 text-xs sm:text-sm md:text-base font-normal text-ink-secondary leading-relaxed sm:leading-relaxed">
          <p>
            I'm twenty-three, which still feels slightly ridiculous to say out loud.
          </p>
          <p>
            I make things. Sometimes I know what I'm doing. Sometimes I have an idea at 2 in the morning and spend the next three weeks finding out whether it was genius or just sleep deprivation.
          </p>
          <p>
            A lot of my life has been spent chasing things I couldn't quite leave alone. Ideas. People. Questions. Possibilities. The occasional completely unreasonable ambition.
          </p>
          <p>
            Some of them worked. Some of them absolutely did not. I'm okay with that.
          </p>
          <p>
            I like building things, but I don't think building things is the most interesting thing about a person. There's a whole life behind whatever eventually ends up on a screen.
          </p>
          <p>
            Family. Friendship. Love. Failure. Faith. Stupid decisions. Good decisions. Long conversations. Short tempers. Starting over. Becoming a little less of an idiot every year.
          </p>
          <p>
            I'm still figuring out the rest. This is, technically, a portfolio. You'll find the things I've built, the things I'm working on, the places I've been, and probably a few things I have no business putting on the internet.
          </p>
          <p className="text-ink font-medium pt-1">
            Anyway. Welcome to this side of the internet. Have a look around.
          </p>
        </div>

        {/* Interactive Song of the Week Option */}
        <MusicPlayerPill />

        {/* Doorway Links */}
        <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-editorial-border/60">
          <Link
            to="/about-me"
            className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-mono tracking-wider text-ink hover:text-ink-secondary transition-colors group"
          >
            <span>More about me</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>

          <Link
            to="/what-i-do"
            className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-mono tracking-wider text-ink-secondary hover:text-ink transition-colors group"
          >
            <span>What I do</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-mono tracking-wider text-ink-secondary hover:text-ink transition-colors group"
          >
            <span>Contact me</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
