import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex flex-col justify-center py-12 sm:py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 md:px-12 space-y-10 sm:space-y-12">
        {/* Header */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tightest leading-[1.12] text-ink">
          Hi, I am Kris. Welcome to this side of the internet.
        </h1>

        {/* Emotional Narrative Intro */}
        <p className="text-lg sm:text-2xl font-normal text-ink-secondary leading-relaxed sm:leading-relaxed">
          I am still figuring out what kind of man I want to become. I know I want to build things, love people deeply, take care of the people who raised me, and leave something meaningful behind. I am ambitious, sometimes excessively so. I think too much. I feel deeply. I have been wrong, I have been hurt, and I have hurt people too. None of that makes a particularly clean story, but it makes it mine. I am interested in the strange space between who we are and who we are becoming. Most days, I am somewhere in there, building something, learning something, loving someone, or trying to understand myself a little better.
        </p>

        {/* Doorway Links */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <Link
            to="/about-me"
            className="inline-flex items-center space-x-2 text-sm sm:text-base font-mono tracking-wider text-ink hover:text-ink-secondary transition-colors group"
          >
            <span>More about me</span>
            <span className="group-hover:translate-x-1.5 transition-transform duration-200">
              →
            </span>
          </Link>

          <Link
            to="/what-i-do"
            className="inline-flex items-center space-x-2 text-sm sm:text-base font-mono tracking-wider text-ink-secondary hover:text-ink transition-colors group"
          >
            <span>See what I do</span>
            <span className="group-hover:translate-x-1.5 transition-transform duration-200">
              →
            </span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 text-sm sm:text-base font-mono tracking-wider text-ink-secondary hover:text-ink transition-colors group"
          >
            <span>Contact me</span>
            <span className="group-hover:translate-x-1.5 transition-transform duration-200">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
