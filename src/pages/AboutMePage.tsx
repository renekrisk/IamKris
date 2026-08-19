import React from 'react';

export const AboutMePage: React.FC = () => {
  return (
    <div className="py-12 sm:py-24 md:py-36">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-12">

        {/* Apple-style Hero Header */}
        <div className="mb-12 sm:mb-28 max-w-3xl space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink/5 border border-editorial-border/80 text-ink-tertiary font-mono text-[10px] sm:text-xs tracking-wider rounded-full">
            <span>[ ABOUT KRIS ]</span>
            <span>•</span>
            <span>PORTRAIT & PERSPECTIVE</span>
          </div>

          <h1 className="text-3xl sm:text-6xl md:text-7xl font-normal tracking-tightest leading-[1.12] sm:leading-[1.08] text-ink">
            There are probably easier ways to introduce me.
          </h1>

          <div className="pt-2 text-xs sm:text-base text-ink-secondary font-mono tracking-wider border-y border-editorial-border/60 py-3 sm:py-4 flex flex-wrap gap-x-2.5 sm:gap-x-3 gap-y-1.5 leading-relaxed">
            <span>Software engineer.</span>
            <span>Founder.</span>
            <span>CTO.</span>
            <span>Son.</span>
            <span>Brother.</span>
            <span>Friend.</span>
            <span>Twenty-three.</span>
          </div>

          <p className="text-ink font-normal text-lg sm:text-2xl pt-1 leading-relaxed">
            All of them are true. None of them are quite enough.
          </p>
        </div>

        {/* Grid Layout: Sticky Navigation Rail (Desktop) + Editorial Content (Mobile & Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">

          {/* Left Sticky Rail (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 space-y-6 border-l border-editorial-border/60 pl-4 py-2 font-mono text-xs text-ink-tertiary tracking-widest uppercase">
              <div className="space-y-4">
                <a href="#origin" className="block hover:text-ink transition-colors">01 / Origin</a>
                <a href="#creation" className="block hover:text-ink transition-colors">02 / Creation</a>
                <a href="#people" className="block hover:text-ink transition-colors">03 / People</a>
                <a href="#family" className="block hover:text-ink transition-colors">04 / Family</a>
                <a href="#ambition" className="block hover:text-ink transition-colors">05 / Ambition</a>
                <a href="#truth" className="block hover:text-ink transition-colors">06 / Truth</a>
                <a href="#love" className="block hover:text-ink transition-colors">07 / Love</a>
                <a href="#building" className="block hover:text-ink transition-colors">08 / Building</a>
                <a href="#legacy" className="block hover:text-ink transition-colors">09 / Legacy</a>
                <a href="#now" className="block hover:text-ink transition-colors">10 / Now</a>
              </div>
            </div>
          </aside>

          {/* Right Main Story Column */}
          <main className="col-span-1 lg:col-span-9 max-w-2xl space-y-12 sm:space-y-24 text-base sm:text-xl font-normal text-ink-secondary leading-relaxed">

            {/* 01 / Origin */}
            <section id="origin" className="space-y-5 sm:space-y-6">
              <div className="font-mono text-[10px] sm:text-xs text-ink-tertiary tracking-widest uppercase lg:hidden pb-1 border-b border-editorial-border/40 inline-block mb-1">
                01 / Origin
              </div>
              <p>
                Before any of those words meant anything, I was just a kid who was curious about how things worked. I wanted to know what was behind the thing. Why it behaved the way it did. Whether it could be made better. Whether an idea that existed only in my head could somehow become real.
              </p>
              <p>I suppose I never really grew out of that.</p>
              <p className="text-ink font-medium">I just found computers.</p>
            </section>

            <div className="w-12 h-[1px] bg-editorial-border opacity-60" />

            {/* 02 / Creation */}
            <section id="creation" className="space-y-5 sm:space-y-6">
              <div className="font-mono text-[10px] sm:text-xs text-ink-tertiary tracking-widest uppercase lg:hidden pb-1 border-b border-editorial-border/40 inline-block mb-1">
                02 / Creation
              </div>
              <p>
                There is a particular satisfaction in building something from nothing. A blank screen becomes a system. A thought becomes a product. A problem becomes something you can touch, test, break, rebuild and eventually hand to another person.
              </p>
              <p>That feeling has followed me for years.</p>
              <p>
                I have built software, websites, systems, businesses and things that never made it past the first idea. I have spent absurd hours chasing bugs that turned out to be one missing character. I have started things before I was ready and learned by being forced to become ready.
              </p>
              <div className="p-4 sm:p-6 bg-ink/[0.03] border-l-2 border-ink rounded-r-lg space-y-2 my-4 sm:my-6">
                <p className="text-ink font-normal text-lg sm:text-2xl leading-snug">
                  Eventually, I realized that what I loved was not really code.
                </p>
                <p className="text-ink font-medium text-base sm:text-lg">It was creation.</p>
              </div>
              <p>Code was simply one of the languages I happened to learn.</p>
            </section>

            <div className="w-12 h-[1px] bg-editorial-border opacity-60" />

            {/* 03 / People */}
            <section id="people" className="space-y-5 sm:space-y-6">
              <div className="font-mono text-[10px] sm:text-xs text-ink-tertiary tracking-widest uppercase lg:hidden pb-1 border-b border-editorial-border/40 inline-block mb-1">
                03 / People
              </div>
              <p>But there was another side of me developing alongside the engineer.</p>
              <p className="text-ink font-normal text-lg sm:text-2xl">The part that cared about people.</p>
              <p>
                I have always been unusually interested in people. I remember small things. Conversations. Expressions. A sentence someone said years ago that they probably forgot five minutes later. The strange weight a moment can acquire long after it has passed.
              </p>
              <p>For a long time, I thought this was something I needed to outgrow.</p>
              <p className="text-ink font-medium">I don't anymore.</p>
              <p>It has made me more thoughtful. It has also made me overthink things I should probably have left alone.</p>
              <p className="italic text-ink-tertiary">That is part of the deal.</p>
              <p className="text-ink font-normal text-lg sm:text-2xl pt-1 sm:pt-2">
                I think being human is partly learning which things deserve your attention and which things deserve your peace.
              </p>
            </section>

            <div className="w-12 h-[1px] bg-editorial-border opacity-60" />

            {/* 04 / Family */}
            <section id="family" className="space-y-5 sm:space-y-6">
              <div className="font-mono text-[10px] sm:text-xs text-ink-tertiary tracking-widest uppercase lg:hidden pb-1 border-b border-editorial-border/40 inline-block mb-1">
                04 / Family
              </div>
              <h2 className="text-xl sm:text-4xl text-ink font-normal tracking-tight leading-snug">
                Somewhere along the way, I also began to understand that the people who knew me before I had anything to prove would probably always know me best.
              </h2>
              <div className="space-y-4">
                <div className="pl-3 sm:pl-4 border-l border-editorial-border/80 text-ink font-medium text-base sm:text-xl">
                  <p>My mother. My brothers.</p>
                </div>
                <p>
                  They knew me before the projects, before the companies, before the ambitions had names. Before there was anything particularly impressive about me.
                </p>
                <p className="text-ink font-medium">They knew Kris.</p>
                <p>There is something humbling about being known before you have built an identity.</p>
                <p>The world is very good at giving people titles. Engineer. Founder. CTO. Leader. Whatever comes next.</p>
                <p className="text-ink font-normal">Family remembers the person underneath them.</p>
                <p className="italic text-ink-tertiary">That matters to me more than I probably say.</p>
              </div>
            </section>

            <div className="w-12 h-[1px] bg-editorial-border opacity-60" />

            {/* 05 / Ambition */}
            <section id="ambition" className="space-y-5 sm:space-y-6">
              <div className="font-mono text-[10px] sm:text-xs text-ink-tertiary tracking-widest uppercase lg:hidden pb-1 border-b border-editorial-border/40 inline-block mb-1">
                05 / Ambition
              </div>
              <h2 className="text-xl sm:text-4xl text-ink font-normal tracking-tight leading-snug">
                I am ambitious. Very.
              </h2>
              <div className="space-y-4">
                <p>
                  I want to build companies. I want to become exceptional at engineering. I want financial freedom. I want to create opportunities for other people. I want to make things that are genuinely useful. I want to walk into rooms that once seemed impossibly far away and know that I earned my way there.
                </p>
                <p>I want a lot from life.</p>
                <p className="text-ink font-normal text-lg sm:text-2xl pt-1 sm:pt-2">
                  But I have become increasingly suspicious of ambition when it exists only for its own sake.
                </p>
                <div className="space-y-1.5 pl-3 sm:pl-4 border-l border-editorial-border/80 text-ink-tertiary font-mono text-xs sm:text-base tracking-wider py-1.5">
                  <p>There is always another milestone.</p>
                  <p>Another number.</p>
                  <p>Another company.</p>
                  <p>Another mountain.</p>
                </div>
                <p>
                  You can spend your entire life climbing and never stop long enough to ask whether you actually like where you are going.
                </p>
                <p>So I want the big life.</p>
                <p>But I don't want a life that is merely big.</p>
                <p className="text-ink font-normal text-lg sm:text-2xl">
                  I want one that is full.
                </p>
                <p className="italic text-ink-tertiary">There is a difference.</p>
                <p>
                  I want my mother to have peace. I want my brothers to have opportunities. I want to be able to give more than I take. I want the people who believed in me before there was anything to believe in to eventually look at my life and feel that their faith was not misplaced.
                </p>
                <p>Not because I owe them some grand achievement.</p>
                <div className="p-4 sm:p-6 bg-ink/[0.03] border-l-2 border-ink rounded-r-lg my-3 sm:my-4">
                  <p className="text-ink font-medium text-lg sm:text-2xl">
                    Because love deserves a return.
                  </p>
                </div>
              </div>
            </section>

            <div className="w-12 h-[1px] bg-editorial-border opacity-60" />

            {/* 06 / Truth */}
            <section id="truth" className="space-y-5 sm:space-y-6">
              <div className="font-mono text-[10px] sm:text-xs text-ink-tertiary tracking-widest uppercase lg:hidden pb-1 border-b border-editorial-border/40 inline-block mb-1">
                06 / Truth
              </div>
              <p>I have not always understood that everything worth building requires a certain amount of humility.</p>
              <p>Software will teach you quickly.</p>
              <p>You can be absolutely convinced that your solution is correct and watch the system fail anyway.</p>
              <p>Life is less polite.</p>
              <p>People do the same thing.</p>
              <p>You can be certain you understand someone and discover that you only understood your version of them.</p>
              <p>You can be convinced you are right and later realize that being right about the facts did not mean you were right about the person.</p>
              <p className="text-ink font-normal text-lg sm:text-2xl pt-1 sm:pt-2">
                I have been wrong. More than once.
              </p>
              <p>
                I have been stubborn. I have been intense. I have confused conviction with certainty. I have sometimes held onto things because letting go felt too much like losing.
              </p>
              <p>I have hurt people. I have been hurt.</p>
              <p className="italic text-ink-tertiary">Neither fact makes me special.</p>
              <p className="text-ink font-normal">What matters is what you do with the truth once you can no longer avoid it.</p>
              <div className="space-y-2 pl-3 sm:pl-4 border-l border-editorial-border/80 text-ink py-2 text-sm sm:text-xl">
                <p>I have learned that strength without humility eventually becomes hardness.</p>
                <p>That caring about someone does not give you ownership of them.</p>
                <p>That wanting something badly does not make you entitled to it.</p>
                <p>That sometimes the most honest thing you can say is, <span className="italic">I don't know.</span></p>
                <p>And that changing your mind, when truth demands it, is not weakness. It is intellectual courage.</p>
              </div>
              <p>
                I don't want to become a person who is agreeable simply to be liked. I have strong convictions. I intend to keep them.
              </p>
              <p>But I want my convictions to survive contact with reality.</p>
              <p>
                I want to be capable of listening without surrendering my principles. Of leading without assuming I always know the answer. Of being strong without becoming hard.
              </p>
              <p>That balance is still being built.</p>
              <p className="text-ink font-medium">So am I.</p>
            </section>

            <div className="w-12 h-[1px] bg-editorial-border opacity-60" />

            {/* 07 / Love */}
            <section id="love" className="space-y-5 sm:space-y-6">
              <div className="font-mono text-[10px] sm:text-xs text-ink-tertiary tracking-widest uppercase lg:hidden pb-1 border-b border-editorial-border/40 inline-block mb-1">
                07 / Love
              </div>
              <h2 className="text-xl sm:text-4xl text-ink font-normal tracking-tight leading-snug">
                Love has been one of my better teachers.
              </h2>
              <div className="space-y-4">
                <p>I have loved deeply enough to discover how little control we actually have over the people we care about.</p>
                <p>
                  There are people I have loved badly before I understood how to love better. People I wish I had understood while I still had the chance. People who left and somehow remained part of the person I became.
                </p>
                <p className="text-ink font-normal text-lg sm:text-2xl pt-1 sm:pt-2">
                  I used to think closure meant understanding why something happened.
                </p>
                <p>
                  Now I think sometimes closure is simply deciding that something can matter without continuing to own you.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-ink font-mono text-xs sm:text-base py-2">
                  <p>— People leave.</p>
                  <p>— Some stay.</p>
                  <p>— Some change you.</p>
                  <p>— Some become memories.</p>
                </div>
                <p>None of that makes the time meaningless.</p>
                <p className="text-ink font-normal">
                  A person can disappear from your life and still leave something behind in the architecture of who you are.
                </p>
                <p className="italic text-ink-tertiary">
                  That, to me, is one of the strangest and most beautiful things about being alive.
                </p>
                <p>Pain works the same way.</p>
                <p>I don't romanticize it. Pain hurts.</p>
                <p>Some things were unfair. Some were my fault. Some were nobody's fault. Some things simply happened.</p>
                <p className="text-ink font-normal text-lg sm:text-2xl pt-1 sm:pt-2">
                  But I don't want the worst things that have happened to me to become the most important things about me.
                </p>
                <p>There is too much life left for that.</p>
                <p>I am twenty-three.</p>
                <p>Young enough to have an unreasonable amount of ambition and old enough to know that ambition alone is not a plan.</p>
                <p>There is still an enormous amount I don't know.</p>
                <p>
                  There are things I believe today that life will complicate. There are mistakes I haven't made yet. People I haven't met. Places I haven't seen. Things I haven't built.
                </p>
                <p>That doesn't frighten me as much as it used to.</p>
                <p className="text-ink font-normal">
                  I think growing up is partly realizing that uncertainty isn't an enemy.
                </p>
                <p className="text-ink font-medium">It is simply the price of having a future.</p>
              </div>
            </section>

            <div className="w-12 h-[1px] bg-editorial-border opacity-60" />

            {/* 08 / Building & Muncheez */}
            <section id="building" className="space-y-5 sm:space-y-6">
              <div className="font-mono text-[10px] sm:text-xs text-ink-tertiary tracking-widest uppercase lg:hidden pb-1 border-b border-editorial-border/40 inline-block mb-1">
                08 / Building
              </div>
              <h2 className="text-xl sm:text-4xl text-ink font-normal tracking-tight leading-snug">
                And that brings me back to building.
              </h2>
              <div className="space-y-4">
                <p>Today, I am a software engineer and the co-founder and CTO of Muncheez.</p>
                <p>
                  Muncheez is one of the places where the abstract part of me meets reality. An idea becomes a product. A product becomes a system. A system has users. Users have expectations. Reality starts asking questions your pitch deck never prepared you for.
                </p>
                <p>That is the part I find fascinating.</p>
                <p>It is easy to say you are going to build something.</p>
                <p>It is much harder to build it, watch it break, accept that you were wrong, fix it, and try again.</p>
                <p>I like that process. Maybe because it feels familiar.</p>
                <div className="p-4 sm:p-5 bg-ink/[0.03] border-l-2 border-ink rounded-r-lg font-mono text-sm sm:text-lg space-y-1 my-3">
                  <p>Build.</p>
                  <p>Break.</p>
                  <p>Learn.</p>
                  <p>Rebuild.</p>
                </div>
                <p>I have done it with software. I suspect I will spend the rest of my life doing it with myself.</p>
                <p>I also teach.</p>
                <p>
                  I like the moment when someone understands something they were convinced was beyond them. There is a quiet transformation in that moment. Not because they learned a piece of information, but because their idea of what they are capable of has changed.
                </p>
                <p className="text-ink font-medium">That matters to me.</p>
                <p>Knowledge becomes more valuable when it leaves you.</p>
                <p>
                  I don't want to accumulate things simply so I can say I have them. I want what I learn to become useful somewhere else.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-ink-tertiary font-mono text-xs sm:text-sm tracking-wider py-2">
                  <p>— A product.</p>
                  <p>— A company.</p>
                  <p>— A lesson.</p>
                  <p>— An opportunity.</p>
                </div>
                <p>A person who becomes more capable because I happened to cross their path.</p>
              </div>
            </section>

            <div className="w-12 h-[1px] bg-editorial-border opacity-60" />

            {/* 09 / Legacy */}
            <section id="legacy" className="space-y-5 sm:space-y-6">
              <div className="font-mono text-[10px] sm:text-xs text-ink-tertiary tracking-widest uppercase lg:hidden pb-1 border-b border-editorial-border/40 inline-block mb-1">
                09 / Legacy
              </div>
              <p className="text-ink font-normal text-lg sm:text-2xl">
                Perhaps that is what success means to me now.
              </p>
              <p>Not simply having more. Leaving more behind.</p>
              <p>
                Because eventually, every title disappears. Every company changes. Every product gets replaced. Every achievement becomes something you did rather than something you are doing.
              </p>
              <p className="text-ink font-normal">What remains is the effect you had on people.</p>
              <div className="space-y-1.5 pl-3 sm:pl-4 border-l border-editorial-border/80 text-ink-secondary py-1 text-sm sm:text-lg">
                <p>The people you helped.</p>
                <p>The people you loved.</p>
                <p>The people you taught.</p>
                <p>The people who became braver because you believed in them.</p>
                <p>The people who remember you kindly when you are no longer in the room.</p>
              </div>
              <p className="italic text-ink-tertiary">That is the kind of legacy I understand.</p>
              <p>I want to build things that last. But I also want to build a life worth being present for.</p>
              <p>
                I want to see the world. I want to build companies. I want to become excellent at what I do. I want financial freedom. I want my family close. I want friendships that can survive disagreement. I want love that is honest rather than perfect. I want to be able to provide without confusing provision with ownership. I want ambition and tenderness to occupy the same person. I want to win without needing someone else to lose.
              </p>
              <p className="text-ink font-normal text-lg sm:text-2xl pt-1 sm:pt-2">
                And one day, much older than I am now, I want to look back and realize I didn't spend my entire life preparing to live.
              </p>
              <p className="text-ink font-medium">I actually lived.</p>
            </section>

            <div className="w-12 h-[1px] bg-editorial-border opacity-60" />

            {/* 10 / Now */}
            <section id="now" className="space-y-5 sm:space-y-6">
              <div className="font-mono text-[10px] sm:text-xs text-ink-tertiary tracking-widest uppercase lg:hidden pb-1 border-b border-editorial-border/40 inline-block mb-1">
                10 / Now
              </div>
              <p>I don't know exactly what that life looks like yet. I'm not supposed to.</p>
              <p>At twenty-three, the map is still being drawn.</p>
              <p>For now, there is work to do.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-ink font-mono text-xs sm:text-sm tracking-wider py-2">
                <p>— Things to build.</p>
                <p>— People to love.</p>
                <p>— Mistakes to make.</p>
                <p>— Apologies to give.</p>
                <p>— Places to go.</p>
                <p>— Ideas to test.</p>
              </div>
              <p>Versions of myself to outgrow.</p>
              <p className="text-ink font-normal text-lg sm:text-2xl pt-1 sm:pt-2">
                Maybe that is the privilege of being young: not knowing who you will become, while still having enough time to become someone worthy of the life ahead of you.
              </p>
              <p>
                I don't want to become uncomplicated. I care too much. I think too much. I want too much. I get things wrong. I change my mind. I build things. I break things. I begin again.
              </p>
              <p>There are still versions of myself I haven't met.</p>
              <p className="text-ink font-medium">I think that is enough reason to keep going.</p>
            </section>

            <div className="w-12 h-[1px] bg-editorial-border opacity-60" />

            {/* Conclusion */}
            <div className="space-y-5 pt-2">
              <p>So, for now, I'm Kris.</p>
              <div className="space-y-1 font-mono text-xs sm:text-base text-ink-tertiary tracking-wider py-1">
                <p>Twenty-three.</p>
                <p>Still becoming.</p>
                <p>Still building.</p>
              </div>
              <p className="text-ink font-normal text-lg sm:text-2xl pt-1">
                And, thankfully, nowhere near finished.
              </p>

              <div className="pt-12 sm:pt-24 space-y-4 border-t border-editorial-border/60">
                <h3 className="text-3xl sm:text-6xl md:text-7xl font-normal tracking-tightest text-ink leading-tight">
                  Nowhere near finished.
                </h3>
                <p className="font-mono text-sm sm:text-lg tracking-widest text-ink-tertiary">
                  — Kris
                </p>
              </div>
            </div>

          </main>

        </div>

      </div>
    </div>
  );
};
