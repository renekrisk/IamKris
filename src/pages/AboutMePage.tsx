import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ─── Sub-page definitions ──────────────────────────────────────────────────────
const PAGES = [
  { id: 'story',     label: 'The Story' },
  { id: 'why-code',  label: 'Why I Code' },
  { id: 'family',    label: 'Family' },
  { id: 'love',      label: 'Love' },
  { id: 'belief',    label: 'What I Believe' },
  { id: 'resilience',label: 'Resilience' },
  { id: 'aliens',    label: 'Aliens' },
  { id: 'notes',     label: 'Notes' },
  { id: 'idk',       label: "Things I Don't Understand" },
] as const;

type PageId = typeof PAGES[number]['id'];

// ─── Hairline divider ──────────────────────────────────────────────────────────
const Hairline = () => <div className="w-12 h-[1px] bg-editorial-border opacity-60" />;

// ─── Section label ─────────────────────────────────────────────────────────────
const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mono-label text-[10px] sm:text-xs text-ink-tertiary tracking-widest uppercase border-b border-editorial-border/40 pb-2">
    {children}
  </div>
);

// ─── Placeholder for pages without content yet ─────────────────────────────────
const ComingSoon: React.FC<{ label: string }> = ({ label }) => (
  <div className="space-y-4 py-8">
    <p className="font-mono text-xs tracking-widest text-ink-tertiary uppercase">
      {label}
    </p>
    <p className="text-ink-secondary text-base sm:text-lg leading-relaxed">
      This page is being written.
    </p>
  </div>
);

// ─── THE STORY ─────────────────────────────────────────────────────────────────
const StoryPage: React.FC = () => (
  <div className="space-y-16 sm:space-y-20 text-base sm:text-xl font-normal text-ink-secondary leading-relaxed">

    {/* CH 01 */}
    <div className="space-y-6">
      <SectionLabel>CHAPTER 01 / UNEXPECTED</SectionLabel>
      <div className="space-y-6">
        <p>
          There is this strange period of being young where everyone keeps asking what you're going to do with your life while you're still trying to understand what the hell happened to the last five years.
        </p>
        <p>You make plans.</p>
        <p className="text-ink font-medium">Then life laughs.</p>
        <p>
          You meet people you weren't expecting. You lose people you thought would stay. You become someone your younger self would probably be impressed by, and then you realise he would also have a lot of questions.
        </p>
        <p className="italic text-ink-tertiary">Some of them would be uncomfortable.</p>
        <p>I think about that kid sometimes.</p>
        <p>I wonder what he'd think if he could see me now.</p>
        <p>Would he be proud?</p>
        <p>Would he think I've become boring?</p>
        <p>Would he ask why I stopped doing certain things?</p>
        <p>Would he recognise the person underneath all the things I've collected since then?</p>
        <p>I don't know.</p>
        <p className="text-ink font-normal text-lg sm:text-2xl pt-2">
          That's probably what I'm trying to figure out.
        </p>
      </div>
    </div>

    <Hairline />

    {/* CH 02 */}
    <div className="space-y-6">
      <SectionLabel>CHAPTER 02 / IMPRESSIVE</SectionLabel>
      <div className="space-y-6">
        <p className="text-ink font-normal text-lg sm:text-2xl">
          I've never been particularly interested in becoming impressive.
        </p>
        <p>Useful, maybe. Capable, definitely. But impressive?</p>
        <p className="italic text-ink-tertiary">I'm not sure.</p>
        <p>
          Impressive is a strange thing to chase because eventually you realise people can be impressed by almost anything.
        </p>
        <p>A watch.</p>
        <p>A title.</p>
        <p>A number in a bank account.</p>
        <p>A photograph.</p>
        <p>A room full of people who clap when you walk in.</p>
        <p className="text-ink font-medium text-lg sm:text-xl">
          None of those things can tell you what kind of person you are when the room is empty.
        </p>
        <p>Who are you when nobody is watching?</p>
        <p>Who are you when you're angry?</p>
        <p>When you're embarrassed?</p>
        <p>When you're losing?</p>
        <p>When the person you love doesn't understand you?</p>
        <p>When you finally get the thing you wanted and realise you don't feel the way you thought you would?</p>
      </div>
    </div>

    <Hairline />

    {/* CH 03 */}
    <div className="space-y-6">
      <SectionLabel>CHAPTER 03 / THE MIDDLE</SectionLabel>
      <div className="space-y-6">
        <p>I've had enough time with myself now to know that I'm not always the person I want to be.</p>
        <p>
          I've been selfish and stubborn. I've said things I shouldn't have said, held onto things long after they stopped being good for me, and wanted to be understood while sometimes being terrible at understanding anyone else.
        </p>
        <p>There are things I've done that I'm proud of. There are things I wouldn't defend if you put me in a courtroom.</p>
        <p>And then there is everything in between.</p>
        <p className="text-ink font-medium text-lg sm:text-2xl">Most of a person lives there. In the middle.</p>
        <p>That's where I've spent most of my time.</p>
        <p>Somewhere between confidence and doubt.</p>
        <p>Ambition and exhaustion.</p>
        <p>Wanting everything and occasionally wanting absolutely nothing.</p>
        <p>Being incredibly sure of myself one morning and questioning every decision I've ever made by dinner.</p>
        <p>It's a ridiculous way to live. I wouldn't recommend it.</p>
        <p className="text-ink font-medium">But I know myself better because of it.</p>
        <p>I care more than I sometimes admit.</p>
        <p>I can become obsessed with an idea and refuse to let it go.</p>
        <p>I notice small things—and can spend an entire night thinking about one sentence someone said three weeks ago.</p>
        <p>I laugh when I'm uncomfortable.</p>
        <p>I disappear into my own head.</p>
        <p>I want to build things that outlive the excitement of building them.</p>
        <p className="text-ink font-normal text-lg sm:text-2xl pt-2">
          And underneath all of it, I'm still trying to make sense of people.
        </p>
        <p className="italic text-ink-tertiary">Maybe that's why I care about them so much.</p>
      </div>
    </div>

    <Hairline />

    {/* CH 04 */}
    <div className="space-y-6">
      <SectionLabel>CHAPTER 04 / SOFTNESS</SectionLabel>
      <div className="space-y-6">
        <p className="text-ink font-normal text-lg sm:text-2xl">People are strange.</p>
        <p>We spend our entire lives wanting to be known and then spend half of them hiding.</p>
        <p>We want love, but we're terrified of what love can ask from us.</p>
        <p>We want freedom, but we also want someone to stay.</p>
        <p>We want to be forgiven for the things we regret while quietly keeping score of the things other people did to us.</p>
        <p className="text-ink font-medium">We're complicated little creatures.</p>
        <p>I've been fascinated by that for as long as I can remember. And I've been hurt by it too. Both things can be true.</p>
        <p>I've learned that someone can love you and still hurt you. That someone can be good and still make a terrible decision. That losing someone doesn't automatically mean either of you was the villain.</p>
        <p>Sometimes life just puts two people in a situation neither of them knows how to handle.</p>
        <p>That lesson cost me something. Most worthwhile lessons do.</p>
        <p className="text-ink font-normal text-xl sm:text-2xl pt-2">
          But if there's one thing I don't want to lose because of the things that have happened to me, it's softness.
        </p>
        <p>Not weakness. Softness. There's a difference.</p>
        <p>I want to be able to become powerful without becoming cruel.</p>
        <p>Successful without becoming vain.</p>
        <p>Certain without becoming arrogant.</p>
        <p>To have enough money that I stop checking prices and still remember what it felt like when I had to.</p>
        <p>To walk into important rooms without forgetting the people who would never be invited into them.</p>
        <p>To love people without trying to own them.</p>
        <p>To lose without becoming bitter.</p>
        <p>I'm still a long way from all of that. Which is fine.</p>
        <p className="text-ink font-medium text-lg sm:text-xl">I'm young. I'm allowed to be.</p>
      </div>
    </div>

    <Hairline />

    {/* CH 05 */}
    <div className="space-y-6">
      <SectionLabel>CHAPTER 05 / ROOTS &amp; VISION</SectionLabel>
      <div className="space-y-6">
        <p className="text-ink font-normal text-lg sm:text-2xl">My family helps with that.</p>
        <p>They knew me before any of the things people might eventually care about.</p>
        <p>Before achievements. Before ambition. Before anyone had a reason to be impressed.</p>
        <p>They remember the annoying version.</p>
        <p>The loud version.</p>
        <p>The stupid version.</p>
        <p>The version who probably thought he knew everything.</p>
        <p>They still see some of him. Thank God.</p>
        <p>
          There is something strangely comforting about knowing that no matter how far you go, there are people who can look at you and see the child underneath the man.
        </p>
        <p className="text-ink font-medium">It keeps you honest. At least a little.</p>
        <p className="text-ink font-normal text-xl sm:text-3xl pt-4">And I want to go far. Very far.</p>
        <p>I don't have a particularly modest vision for my life. I've tried. It didn't work.</p>
        <p>
          I want to build things that matter. To sit in rooms I once thought were completely inaccessible to someone like me. To travel until airports feel like bus stations.
        </p>
        <p>
          I want stories that sound slightly unbelievable when I'm old enough to tell them badly, and the freedom to wake up one morning and decide to go somewhere I've never been.
        </p>
        <p>I want a family of my own one day, and to be the kind of father whose children aren't afraid of him.</p>
        <p>I want to be successful, yes.</p>
        <p className="text-ink font-normal text-lg sm:text-2xl pt-2">
          But more than that, I want to remain recognisable to myself when I am.
        </p>
        <p>
          Because there is a version of success that looks incredible from the outside and feels completely empty from inside.
        </p>
        <p className="text-ink font-medium">I'm not interested in that one.</p>
        <p className="text-ink font-medium text-lg sm:text-2xl">
          I'd rather have a difficult life that feels like mine than an easy one that belongs to somebody else.
        </p>
        <p>And maybe that's really what all of this is. Trying to make a life that feels like mine.</p>
        <p className="italic text-ink-tertiary">Not perfect. Not carefully curated. Not particularly explainable. Mine.</p>
      </div>
    </div>

    <Hairline />

    {/* CH 06 */}
    <div className="space-y-6">
      <SectionLabel>CHAPTER 06 / MINE</SectionLabel>
      <div className="space-y-6">
        <p>There are days when I feel like I'm exactly where I'm supposed to be.</p>
        <p>There are days when I have absolutely no idea what I'm doing.</p>
        <p>There are days when I'm convinced I'm going to change everything.</p>
        <p>There are days when getting out of bed feels like enough of an achievement.</p>
        <p className="text-ink font-medium">Usually, all four versions of me are telling the truth.</p>
        <p>So I stopped trying to choose one.</p>
        <p className="text-ink font-normal text-lg sm:text-2xl pt-2">I'm just here.</p>
        <p>Twenty-three.</p>
        <p>Still making mistakes.</p>
        <p>Still falling in love with ideas, people, places and possibilities.</p>
        <p>Still losing some things. Still finding others.</p>
        <p>Still trying to become a man I respect when I'm alone with myself.</p>
        <p>I don't know exactly where this goes.</p>
        <p className="italic text-ink-tertiary">That's probably the most honest thing I can tell you.</p>
        <p className="text-ink font-normal text-xl sm:text-2xl pt-2">
          But I have a feeling it's going to be interesting.
        </p>
        <p className="text-ink font-medium">And if it isn't...</p>
        <p className="italic text-ink-tertiary">well.</p>

        <div className="pt-16 sm:pt-20 space-y-4 border-t border-editorial-border/60">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tightest text-ink leading-tight">
            I'll make it interesting.
          </h2>
          <p className="font-mono text-sm sm:text-base tracking-widest text-ink-tertiary">— Kris</p>
        </div>
      </div>
    </div>

  </div>
);

// ─── Main component ────────────────────────────────────────────────────────────
export const AboutMePage: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>('story');

  const activePageMeta = PAGES.find(p => p.id === activePage)!;

  const navigate = (id: PageId) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-12 sm:py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-12">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <div className="mb-10 sm:mb-14 max-w-3xl space-y-3">
          <div className="mono-label text-ink-tertiary">[ ABOUT KRIS ]</div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tightest leading-tight text-ink">
            I wasn't supposed to end up here.
          </h1>
          <p className="text-ink-secondary text-base sm:text-xl font-normal leading-relaxed">
            Not because anything went terribly wrong. Quite the opposite. A lot of things went right. Which, I've learned, can be just as confusing.
          </p>
        </div>

        {/* ── About-page index (mobile: horizontal scroll strip) ─────────── */}
        <div className="lg:hidden sticky top-16 z-30 bg-paper/90 backdrop-blur-md py-3 -mx-5 px-5 border-y border-editorial-border/60 mb-10 overflow-x-auto no-scrollbar">
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <span className="mono-label text-[10px] text-ink-tertiary/40 mr-3 shrink-0">ABOUT</span>
            {PAGES.map(p => (
              <button
                key={p.id}
                onClick={() => navigate(p.id)}
                className={`font-mono text-[11px] tracking-wider px-3 py-1 rounded transition-colors shrink-0 ${
                  activePage === p.id
                    ? 'text-ink'
                    : 'text-ink-tertiary hover:text-ink'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Main grid ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Desktop sticky sidebar nav */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 border-l border-editorial-border/60 pl-4 py-1">
              <div className="mono-label text-[10px] text-ink-tertiary/50 pb-4">
                ABOUT
              </div>
              <nav className="space-y-4">
                {PAGES.map(p => (
                  <button
                    key={p.id}
                    onClick={() => navigate(p.id)}
                    className={`block text-left font-mono text-xs tracking-wider transition-colors leading-snug ${
                      activePage === p.id
                        ? 'text-ink'
                        : 'text-ink-tertiary hover:text-ink'
                    }`}
                  >
                    {activePage === p.id && (
                      <span className="inline-block w-3 mr-1 border-t border-ink align-middle" />
                    )}
                    {p.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* ── Page content ──────────────────────────────────────────── */}
          <main className="col-span-1 lg:col-span-9 max-w-2xl">

            {/* Active page label */}
            {activePage !== 'story' && (
              <div className="mono-label text-[10px] sm:text-xs text-ink-tertiary tracking-widest uppercase border-b border-editorial-border/40 pb-2 mb-8">
                {activePageMeta.label}
              </div>
            )}

            {/* Page content switcher */}
            {activePage === 'story'      && <StoryPage />}
            {activePage === 'why-code'   && (
              <div className="space-y-6 text-base sm:text-xl font-normal text-ink-secondary leading-relaxed">
                <p className="text-ink font-normal text-lg sm:text-2xl">I like making things exist.</p>
                <p>That's really it.</p>
                <p>
                  An idea can sit in my head for three weeks doing absolutely nothing except annoying me. Then one day I'll open my laptop and decide it needs to become real.
                </p>
                <p>I like that moment.</p>
                <p className="text-ink font-medium">
                  The gap between <em className="font-normal italic">"someone should make this"</em> and <em className="font-normal italic">"fuck it, I'll make it."</em>
                </p>
                <p>
                  There's something satisfying about taking a thing that only existed in your head and forcing it into the physical world. Suddenly it has a shape. It does something. Someone else can touch it.
                </p>
                <p>That never gets old.</p>
                <p>
                  And yeah, sometimes I spend six hours trying to fix something that should have taken twenty minutes.
                </p>
                <p>Sometimes the computer wins.</p>
                <p className="italic text-ink-tertiary">I pretend it didn't.</p>
                <p>But underneath all the code, that's what keeps pulling me back.</p>
                <p className="text-ink font-medium">Curiosity.</p>
                <p>What happens if I try this?</p>
                <p>What if this actually works?</p>
                <p>What if I make it bigger?</p>
                <p>What if nobody has done it because nobody was stupid enough to try?</p>
                <p className="italic text-ink-tertiary">That last one has gotten me into trouble a few times.</p>
                <p>Probably will again.</p>
                <p>I don't code because computers are fascinating.</p>
                <p>People are.</p>
                <p>Problems are.</p>
                <p>Ideas are.</p>
                <p>
                  Code is just the strange little language I use to argue with reality until it gives me something back.
                </p>
                <p>And when it finally works?</p>
                <p className="text-ink font-medium text-lg sm:text-2xl pt-2">Yeah.</p>
                <p className="text-ink font-normal text-lg sm:text-2xl">That's a pretty good feeling.</p>
              </div>
            )}
            {activePage === 'family'     && <ComingSoon label="Family" />}
            {activePage === 'love'       && <ComingSoon label="Love" />}
            {activePage === 'belief'     && <ComingSoon label="What I Believe" />}
            {activePage === 'resilience' && <ComingSoon label="Resilience" />}
            {activePage === 'aliens'     && <ComingSoon label="Aliens" />}
            {activePage === 'notes'      && <ComingSoon label="Notes" />}
            {activePage === 'idk'        && <ComingSoon label="Things I Don't Understand" />}

            {/* ── Page navigation footer ─────────────────────────────── */}
            <div className="mt-16 sm:mt-24 pt-8 border-t border-editorial-border/40">
              <div className="flex items-center justify-between gap-4 font-mono text-xs tracking-wider">
                {/* Prev */}
                {(() => {
                  const idx = PAGES.findIndex(p => p.id === activePage);
                  const prev = PAGES[idx - 1];
                  return prev ? (
                    <button
                      onClick={() => navigate(prev.id)}
                      className="text-ink-tertiary hover:text-ink transition-colors"
                    >
                      ← {prev.label}
                    </button>
                  ) : (
                    <Link to="/" className="text-ink-tertiary hover:text-ink transition-colors">
                      ← Return Home
                    </Link>
                  );
                })()}

                {/* Next */}
                {(() => {
                  const idx = PAGES.findIndex(p => p.id === activePage);
                  const next = PAGES[idx + 1];
                  return next ? (
                    <button
                      onClick={() => navigate(next.id)}
                      className="text-ink hover:text-ink-secondary transition-colors"
                    >
                      {next.label} →
                    </button>
                  ) : (
                    <div className="flex items-center gap-6">
                      <Link to="/what-i-do" className="text-ink hover:text-ink-secondary transition-colors">
                        What I do →
                      </Link>
                      <Link to="/contact" className="text-ink hover:text-ink-secondary transition-colors">
                        Contact me →
                      </Link>
                    </div>
                  );
                })()}
              </div>
            </div>

          </main>
        </div>

      </div>
    </div>
  );
};
