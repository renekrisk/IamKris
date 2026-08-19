import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex flex-col justify-center py-12 sm:py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 md:px-12 space-y-10 sm:space-y-12">

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tightest leading-[1.12] text-ink">
          Hi, I am Kris. Welcome to this side of the internet.
        </h1>

        <div className="space-y-6 text-lg sm:text-xl font-normal text-ink-secondary leading-relaxed">
          <p>
            I code. I build things. Sometimes they become products, sometimes companies, sometimes just another late night spent trying to convince an idea to work. I like the feeling of making something exist where there was once nothing. But if you stay here long enough, you will probably realize that the things I build are not the most interesting thing about me.
          </p>
          <p>
            I am a son. A brother. A friend. A man who loves people perhaps a little too deeply and thinks about life perhaps a little too much. I am ambitious, but I am learning that ambition is only beautiful when there is still a life underneath it. I have been loved. I have loved. I have been hurt, and I have hurt people too. I have been certain and then discovered I was wrong. I have lost things I wanted to keep. I have found parts of myself in places I never expected.
          </p>
          <p>
            I am still growing into the person I want to be.
          </p>
          <p>
            I think that is probably the most honest introduction I can give you.
          </p>
        </div>

        <div className="pt-2">
          <Link
            to="/about-me"
            className="inline-flex items-center space-x-2 text-sm sm:text-base font-mono tracking-wider text-ink hover:text-ink-secondary transition-colors group"
          >
            <span>More about me</span>
            <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
