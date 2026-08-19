import React from 'react';

export const AboutMePage: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 md:py-36">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 md:px-12 space-y-16 sm:space-y-24">
        {/* Section Header */}
        <div className="space-y-6">
          <div className="mono-label text-ink-tertiary">
            [ ABOUT ME ]
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tightest leading-[1.12] text-ink">
            I think I have always been trying to become someone.
          </h1>
        </div>

        {/* Narrative Essay Sections */}
        <div className="space-y-16 sm:space-y-20 text-lg sm:text-xl font-normal text-ink-secondary leading-relaxed">
          {/* Family */}
          <section className="space-y-6 pt-6 border-t border-editorial-border/60">
            <h2 className="mono-label text-ink font-medium tracking-widest">
              FAMILY & FOUNDATION
            </h2>
            <div className="space-y-6">
              <p>
                My mother and my two brothers are among the most important people in my life. They are the anchor. They are the people who knew me before the software, before the titles, before the ambition, and before I had any clear idea of what I wanted to become.
              </p>
              <p>
                Whatever I build professionally ultimately exists inside a much larger desire: to build a life that means something to the people I love. They remind me that a person is more than what they accomplish.
              </p>
              <p className="text-ink font-normal italic">
                If I build everything and have nobody meaningful to share it with, what exactly did I build?
              </p>
            </div>
          </section>

          {/* Ambition */}
          <section className="space-y-6 pt-6 border-t border-editorial-border/60">
            <h2 className="mono-label text-ink font-medium tracking-widest">
              AMBITION
            </h2>
            <div className="space-y-6">
              <p>
                I want a lot. I want to build companies. I want to create products. I want to become an exceptional engineer. I want to create things that people use and depend on. I want financial freedom, and I want to be genuinely proud of what I accomplish. I want a life that feels larger than ordinary expectations.
              </p>
              <p>
                But ambition has a shadow. It can make you impatient. It can make rest feel like falling behind. It can make the present feel insufficient, forcing you into a constant negotiation with the person you think you could become.
              </p>
              <p className="text-ink">
                Ambition isn't bad. It is part of who I am. But I am learning how to carry it without allowing it to consume everything else.
              </p>
            </div>
          </section>

          {/* Building */}
          <section className="space-y-6 pt-6 border-t border-editorial-border/60">
            <h2 className="mono-label text-ink font-medium tracking-widest">
              BUILDING
            </h2>
            <div className="space-y-6">
              <p>
                Building is one of the most consistent things about me. A blank repository does not scare me. An unfinished idea attracts me. A difficult problem makes me curious. I enjoy taking something abstract and making it real.
              </p>
              <p>
                Software became one of my languages for doing this, but building is bigger than software. It is the act of believing that something can exist before there is evidence that it will. That belief has followed me through almost everything.
              </p>
              <p className="text-ink font-normal">
                Building is not merely my profession. It is one of the ways I understand the world.
              </p>
            </div>
          </section>

          {/* Teaching & Knowledge */}
          <section className="space-y-6 pt-6 border-t border-editorial-border/60">
            <h2 className="mono-label text-ink font-medium tracking-widest">
              TEACHING & SHARING
            </h2>
            <div className="space-y-6">
              <p>
                Through AI education, developer initiatives like Hack House Africa, and Ink Coaching, I have learned that there is something important about not keeping technology to yourself.
              </p>
              <p>
                I don't only want to master tools—I want to explain them. I want to help people approach things that initially seemed intimidating or complicated. Knowledge becomes far more valuable to me when it can be shared and given somewhere to grow.
              </p>
            </div>
          </section>

          {/* Love */}
          <section className="space-y-6 pt-6 border-t border-editorial-border/60">
            <h2 className="mono-label text-ink font-medium tracking-widest">
              LOVE
            </h2>
            <div className="space-y-6">
              <p>
                I love people deeply. Friends, family, the people who have crossed my path—those who stayed and those who left.
              </p>
              <p>
                Love is one of the places where a person becomes most exposed. It can make you unreasonable, courageous, and afraid all at once. I have loved, I have been hurt, and I have hurt people too. Caring deeply does not automatically make you right.
              </p>
              <p className="text-ink">
                I have learned that loving someone means seeing them clearly and treating what exists between you with care. Sometimes that means staying; sometimes it means letting go. I am still learning.
              </p>
            </div>
          </section>

          {/* Hurt & Reality */}
          <section className="space-y-6 pt-6 border-t border-editorial-border/60">
            <h2 className="mono-label text-ink font-medium tracking-widest">
              HURT & REALITY
            </h2>
            <div className="space-y-6">
              <p>
                Life has hurt me, people have hurt me, and I have hurt people too. Some things I expected to last did not. Some versions of myself had to die, and some things I wanted simply did not happen.
              </p>
              <p>
                Becoming better often feels less like becoming someone brand new and more like learning how to carry what has already happened without letting it make you bitter. I didn't arrive here untouched, and I don't pretend I did.
              </p>
            </div>
          </section>

          {/* Failure */}
          <section className="space-y-6 pt-6 border-t border-editorial-border/60">
            <h2 className="mono-label text-ink font-medium tracking-widest">
              FAILURE
            </h2>
            <div className="space-y-6">
              <p>
                I have failed. Not theoretically—actually. Some failures bruised my ego; some changed my direction; some changed how I saw myself.
              </p>
              <p>
                Some choices were wrong, and some plans fell apart. But I kept going—not because I am endlessly strong, but sometimes simply because there was no other direction to move. Somewhere along the way, continuing became its own kind of faith.
              </p>
            </div>
          </section>

          {/* Growing */}
          <section className="space-y-6 pt-6 border-t border-editorial-border/60">
            <h2 className="mono-label text-ink font-medium tracking-widest">
              GROWING (PRESENT TENSE)
            </h2>
            <div className="space-y-6">
              <p className="text-ink font-medium">
                I am 23. I am growing.
              </p>
              <p>
                I am still learning how to love, still learning how to lead, still learning how to build, and still learning how to fail. I am still figuring out when to hold on, when to let go, and what kind of man I want to be.
              </p>
            </div>
          </section>

          {/* Conviction & Beliefs */}
          <section className="space-y-6 pt-6 border-t border-editorial-border/60">
            <h2 className="mono-label text-ink font-medium tracking-widest">
              CONVICTION
            </h2>
            <div className="space-y-6">
              <p>
                I have strong opinions. I care about what I believe, and I do not think every idea deserves to be accepted simply because it is popular. I can be stubborn, I can challenge things, and I can disagree.
              </p>
              <p className="text-ink">
                But I am also learning that conviction without humility quickly turns into arrogance. I want to hold strong beliefs without losing the ability to listen.
              </p>
            </div>
          </section>

          {/* People & Connection */}
          <section className="space-y-6 pt-6 border-t border-editorial-border/60">
            <h2 className="mono-label text-ink font-medium tracking-widest">
              PEOPLE
            </h2>
            <div className="space-y-6">
              <p>
                The people who have walked through my life are part of who I am. Life is not a collection of achievements—it is a collection of people, choices, moments, mistakes, memories, and things we tried to make meaningful.
              </p>
            </div>
          </section>

          {/* Success */}
          <section className="space-y-6 pt-6 border-t border-editorial-border/60">
            <h2 className="mono-label text-ink font-medium tracking-widest">
              SUCCESS
            </h2>
            <div className="space-y-6">
              <p>
                I want to build successful companies, achieve financial freedom, and excel at engineering. But I also want my mother and brothers to be proud of the person I became. I want the people I love to feel loved by me.
              </p>
              <p className="text-ink font-normal">
                Maybe success is both: what you build, and who you become while building it.
              </p>
            </div>
          </section>

          {/* Imperfection */}
          <section className="space-y-6 pt-6 border-t border-editorial-border/60">
            <h2 className="mono-label text-ink font-medium tracking-widest">
              IMPERFECTION
            </h2>
            <div className="space-y-6">
              <p>
                I am not perfectly put together. There are things I regret, things I would change, and things I am still healing from.
              </p>
              <p>
                Perfection is not the absence of damage. It is being honest about what happened and still choosing what happens next. Not perfect. Not ruined. Still here.
              </p>
            </div>
          </section>

          {/* The Future */}
          <section className="space-y-6 pt-6 border-t border-editorial-border/60">
            <h2 className="mono-label text-ink font-medium tracking-widest">
              THE FUTURE
            </h2>
            <div className="space-y-6">
              <p>
                I want to build, love, create, and take care of the people who matter to me. I want to become a better engineer, leader, brother, son, friend, and man. I want to build things that survive me, while remembering to stay alive while building the future.
              </p>
            </div>
          </section>
        </div>

        {/* Quiet Closing Statement */}
        <div className="pt-20 border-t border-editorial-border/80 space-y-6">
          <div className="space-y-2 text-xl sm:text-2xl text-ink-secondary">
            <p>I don't know exactly where all of this is going.</p>
            <p>Maybe that is the beauty of it.</p>
            <p className="text-ink font-medium">There is still so much life left to become.</p>
          </div>

          <div className="pt-10 space-y-2">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tightest text-ink">
              Still becoming.
            </h2>
            <p className="mono-label text-sm sm:text-base text-ink-tertiary">
              Kris
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
