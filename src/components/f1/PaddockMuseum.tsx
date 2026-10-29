import React, { useState } from "react";
import { f1Assets } from "../../data/f1";

const Rule = () => <div className="w-full h-[1px] bg-editorial-border/50 my-10 sm:my-14" />;

const Label: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`font-mono text-[10px] tracking-widest uppercase text-ink-tertiary ${className}`}>
    {children}
  </div>
);

interface PhotoPlateProps {
  src: string;
  alt: string;
  caption?: string;
  label?: string;
  hero?: boolean;
  aspect?: string;
  objectPosition?: string;
}

const PhotoPlate: React.FC<PhotoPlateProps> = ({
  src, alt, caption, label,
  hero = false,
  aspect = "aspect-[16/9]",
  objectPosition = "object-center",
}) => (
  <figure className="w-full space-y-2">
    {hero ? (
      /* Hero mode: fixed crop container */
      <div className={`relative w-full ${aspect} overflow-hidden border border-editorial-border/70 bg-paper`}>
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover ${objectPosition}`}
          loading="lazy"
        />
      </div>
    ) : (
      /* Natural mode: image at its own proportions, no cropping */
      <div className="w-full border border-editorial-border/70 overflow-hidden bg-paper">
        <img
          src={src}
          alt={alt}
          className="block w-full h-auto"
          loading="lazy"
        />
      </div>
    )}
    {(label || caption) && (
      <figcaption className="space-y-1 px-1">
        {label && <Label>{label}</Label>}
        {caption && (
          <p className="font-mono text-[11px] text-ink-tertiary leading-relaxed">
            {caption}
          </p>
        )}
      </figcaption>
    )}
  </figure>
);

interface Driver {
  name: string;
  years: string;
  portrait: string;
  secondImage: string;
  secondAlt: string;
  quote: string;
  story: string;
}

const drivers: Driver[] = [
  {
    name: "Niki Lauda",
    years: "1971 - 1985",
    portrait: f1Assets.laudaPortrait,
    secondImage: f1Assets.laudaDrivingFerrari,
    secondAlt: "Lauda in Ferrari at Monza 1976",
    quote: "My life was worth more than a trophy.",
    story: "Forty-two days after being given the last rites, Lauda drove at Monza with raw, weeping skin beneath his helmet. He finished fourth. Two months later, in typhoon rain at Fuji, he walked away from the title fight on purpose. Not weakness. The clearest mind in the history of the sport.",
  },
  {
    name: "Lewis Hamilton",
    years: "2007 - Present",
    portrait: f1Assets.lewisHamiltonPort,
    secondImage: f1Assets.hamiltonFerrariAura,
    secondAlt: "Hamilton entering Ferrari in Maranello",
    quote: "That's for all the kids who dream the impossible.",
    story: "A boy from Stevenage whose father worked four jobs to keep him in karting. He won his first title on the last corner of the last lap in Brazil 2008. He clinched his seventh in torrential rain in Turkey 2020, on worn, bald tyres. Then, at 39, he walked into Ferrari. Romantic, dangerous, unforgettable.",
  },
  {
    name: "Max Verstappen",
    years: "2015 - Present",
    portrait: f1Assets.maxAttackEyes,
    secondImage: f1Assets.maxFourFingers,
    secondAlt: "Max Verstappen four fingers, four titles",
    quote: "I do not care about your sympathy.",
    story: "Raised from childhood under strict, relentless pressure in karts. Arrived in Formula 1 at 17 with car control that felt supernatural. His wet drive in Brazil 2016, finding grip where nobody else dared to point their car, was a statement: he does not race. He hunts.",
  },
  {
    name: "Sebastian Vettel",
    years: "2007 - 2022",
    portrait: f1Assets.sebVettelPortrait,
    secondImage: f1Assets.sebKneelingCar,
    secondAlt: "Vettel kneeling in front of his car, India 2013",
    quote: "Danke schoen, guys. Du bist Weltmeister.",
    story: "Four consecutive world titles. A cold, surgical machine in his twenties. Then something shifted. He stayed late to clean garages with mechanics. He bowed down to kiss his car after every championship. He left the sport not as a corporate asset but as its conscience.",
  },
  {
    name: "Kimi Raikkonen",
    years: "2001 - 2021",
    portrait: f1Assets.kimiPortrait,
    secondImage: f1Assets.kimiYoungRedSuit,
    secondAlt: "Kimi Raikkonen in Ferrari red, 2007 champion",
    quote: "Leave me alone. I know what to do.",
    story: "He entered Formula 1 after only 23 single-seater races. He did not care about fame, glamour, or press conferences. His 2005 drive from 17th on the grid to win at Suzuka on the last lap is still the most pure act of driving in modern racing history.",
  },
  {
    name: "Daniel Ricciardo",
    years: "2011 - 2024",
    portrait: f1Assets.danielRicciardoPort,
    secondImage: f1Assets.ricciardoTrophy,
    secondAlt: "Ricciardo holding trophy, Monaco 2018",
    quote: "I want to win everything, and I want to enjoy doing it.",
    story: "The broadest smile in the paddock. But underneath was a cold-blooded late braker who could dive down the inside from three car lengths back. Monaco 2018: his power unit failed on lap 28, cutting 160 horsepower. He defended for 50 laps and won anyway.",
  },
];

const DriverCarousel: React.FC = () => {
  const [active, setActive] = useState(0);
  const [mobilePhotoTab, setMobilePhotoTab] = useState<"portrait" | "moment">("portrait");
  const d = drivers[active];

  const handleSelectDriver = (idx: number) => {
    setActive(idx);
    setMobilePhotoTab("portrait");
  };

  const nextDriver = () => {
    setActive((prev) => (prev + 1) % drivers.length);
    setMobilePhotoTab("portrait");
  };

  const prevDriver = () => {
    setActive((prev) => (prev - 1 + drivers.length) % drivers.length);
    setMobilePhotoTab("portrait");
  };

  return (
    <div className="space-y-6">
      {/* Driver selector pills: horizontal scroll with no-scrollbar on mobile, flex-wrap on desktop */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-2 px-2 sm:mx-0 sm:px-0 sm:flex-wrap">
        {drivers.map((driver, i) => (
          <button
            key={driver.name}
            onClick={() => handleSelectDriver(i)}
            className={`font-mono text-[11px] px-3.5 py-1.5 border shrink-0 transition-colors ${
              active === i
                ? "border-ink text-ink bg-paper font-medium shadow-sm"
                : "border-editorial-border text-ink-tertiary hover:text-ink hover:border-ink/50 bg-paper/50"
            }`}
          >
            {driver.name}
          </button>
        ))}
      </div>

      {/* Main card */}
      <div className="border border-editorial-border/70 bg-paper">
        {/* Mobile photo switcher (visible only < md) */}
        <div className="md:hidden border-b border-editorial-border/70 p-3 bg-canvas/30 space-y-3">
          <div className="grid grid-cols-2 gap-1.5 p-1 bg-paper border border-editorial-border/60">
            <button
              onClick={() => setMobilePhotoTab("portrait")}
              className={`font-mono text-[10px] uppercase tracking-wider py-1.5 transition-colors ${
                mobilePhotoTab === "portrait"
                  ? "bg-ink text-paper font-medium"
                  : "text-ink-tertiary hover:text-ink"
              }`}
            >
              Portrait
            </button>
            <button
              onClick={() => setMobilePhotoTab("moment")}
              className={`font-mono text-[10px] uppercase tracking-wider py-1.5 transition-colors ${
                mobilePhotoTab === "moment"
                  ? "bg-ink text-paper font-medium"
                  : "text-ink-tertiary hover:text-ink"
              }`}
            >
              On Track
            </button>
          </div>

          <div className="overflow-hidden border border-editorial-border/60 bg-paper">
            <img
              src={mobilePhotoTab === "portrait" ? d.portrait : d.secondImage}
              alt={mobilePhotoTab === "portrait" ? d.name : d.secondAlt}
              className="block w-full h-auto"
              loading="lazy"
            />
          </div>
          <figcaption className="font-mono text-[10px] text-ink-tertiary px-0.5">
            {mobilePhotoTab === "portrait" ? `${d.name} — Archival Portrait` : d.secondAlt}
          </figcaption>
        </div>

        {/* Desktop 2-column layout (visible >= md) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left column (Desktop Portrait) */}
          <div className="hidden md:block overflow-hidden border-r border-editorial-border/70 bg-paper">
            <img
              src={d.portrait}
              alt={d.name}
              className="block w-full h-auto"
              loading="lazy"
            />
            <div className="p-3 border-t border-editorial-border/50">
              <Label>{d.name} // Archival Portrait</Label>
            </div>
          </div>

          {/* Right column: Driver Bio, Quote & Desktop Second Image */}
          <div className="flex flex-col justify-between p-6 sm:p-8 bg-paper space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>{d.years}</Label>
                <span className="font-mono text-[10px] text-ink-tertiary">
                  {active + 1} / {drivers.length}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-normal text-ink tracking-tight">{d.name}</h3>
              <blockquote className="border-l-2 border-ink/40 pl-4 py-0.5">
                <p className="text-sm sm:text-base text-ink italic leading-relaxed">"{d.quote}"</p>
              </blockquote>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">{d.story}</p>
            </div>

            {/* Desktop second image */}
            <div className="hidden md:block space-y-2 pt-2 border-t border-editorial-border/50">
              <div className="border border-editorial-border/60 overflow-hidden bg-paper">
                <img
                  src={d.secondImage}
                  alt={d.secondAlt}
                  className="block w-full h-auto"
                  loading="lazy"
                />
              </div>
              <figcaption className="font-mono text-[10px] text-ink-tertiary">
                {d.secondAlt}
              </figcaption>
            </div>

            {/* Mobile navigation controls at bottom of card */}
            <div className="pt-4 border-t border-editorial-border/60 flex items-center justify-between md:hidden">
              <button
                onClick={prevDriver}
                className="font-mono text-[11px] px-3 py-1.5 border border-editorial-border/70 text-ink-secondary hover:text-ink hover:border-ink/50"
              >
                ← Prev
              </button>
              <span className="font-mono text-[10px] text-ink-tertiary uppercase tracking-widest">
                DRIVER {active + 1} OF {drivers.length}
              </span>
              <button
                onClick={nextDriver}
                className="font-mono text-[11px] px-3 py-1.5 border border-editorial-border/70 text-ink-secondary hover:text-ink hover:border-ink/50"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const rivalries = [
  {
    id: "senna-prost",
    label: "Senna vs Prost",
    period: "McLaren-Honda, 1988-1990",
    title: "Faith Against The Professor",
    images: [
      {
        src: f1Assets.sennaVsProstFace,
        alt: "Senna and Prost face to face",
        tag: "Suzuka 1990",
        caption: "Suzuka, 1990. Both men knew what was about to happen. Faith against the Professor.",
      },
    ],
    story: "Prost believed racing was chess: manage everything, win at the minimum speed necessary. Senna believed racing was an act of pure faith. They shared a garage, crushed every opponent together, and destroyed each other at Suzuka in 1989 and 1990. The deepest part: when Senna died at Imola in May 1994, Alain Prost was one of the men carrying his coffin.",
  },
  {
    id: "hamilton-verstappen",
    label: "Hamilton vs Verstappen",
    period: "Mercedes vs Red Bull, 2021",
    title: "The Collision Course",
    images: [
      {
        src: f1Assets.lewisMaxImola2021,
        alt: "Hamilton and Verstappen first lap battle, Imola 2021",
        tag: "Imola 2021",
        caption: "Imola 2021. Twenty-two races of this lay ahead.",
      },
      {
        src: f1Assets.lewisMaxHandshake,
        alt: "Hamilton and Verstappen handshake in parc ferme",
        tag: "Parc Fermé",
        caption: "Parc ferme, Abu Dhabi. Title lost. Hand extended anyway.",
      },
    ],
    story: "They touched wheels at Imola, collided at Copse at 290 km/h with Verstappen hitting the wall at 51G, and landed on top of each other at Monza with the halo stopping the wheel inches from Hamilton's helmet. Twenty-two races tied on points to the final lap. Whatever you think of the restart, Hamilton walked straight to Verstappen's car and shook his hand. That is the image that stays.",
  },
];

const RivalrySlider: React.FC = () => {
  const [active, setActive] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const r = rivalries[active];

  const switchRivalry = (i: number) => {
    setActive(i);
    setImgIndex(0);
  };

  return (
    <div className="space-y-6">
      {/* Rivalry selector: grid on mobile, flex on desktop */}
      <div className="grid grid-cols-2 sm:flex gap-2">
        {rivalries.map((rv, i) => (
          <button
            key={rv.id}
            onClick={() => switchRivalry(i)}
            className={`font-mono text-[11px] px-3.5 py-2 border text-center transition-colors ${
              active === i
                ? "border-ink text-ink bg-paper font-medium shadow-sm"
                : "border-editorial-border text-ink-tertiary hover:text-ink hover:border-ink/50 bg-paper/50"
            }`}
          >
            {rv.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="space-y-1">
          <Label>{r.period}</Label>
          <h3 className="text-xl sm:text-2xl font-normal text-ink">{r.title}</h3>
        </div>

        {/* Image frame */}
        <div className="border border-editorial-border/70 overflow-hidden bg-paper">
          <img
            src={r.images[imgIndex].src}
            alt={r.images[imgIndex].alt}
            className="block w-full h-auto"
            loading="lazy"
          />
        </div>

        {/* Controls and caption outside image */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
          <figcaption className="font-mono text-[11px] text-ink-tertiary">
            {r.images[imgIndex].caption}
          </figcaption>

          {/* Photo switch pills */}
          {r.images.length > 1 && (
            <div className="flex gap-1.5 shrink-0 self-start sm:self-center">
              {r.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setImgIndex(idx)}
                  className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 border transition-colors ${
                    idx === imgIndex
                      ? "border-ink bg-ink text-paper font-medium"
                      : "border-editorial-border text-ink-tertiary hover:text-ink hover:border-ink/50 bg-paper"
                  }`}
                >
                  {img.tag}
                </button>
              ))}
            </div>
          )}
        </div>

        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed max-w-2xl pt-2">{r.story}</p>
      </div>
    </div>
  );
};

const chapters = [
  { id: "chapter-01", label: "01 Russell" },
  { id: "chapter-02", label: "02 Legends" },
  { id: "chapter-03", label: "03 Rivalries" },
  { id: "chapter-04", label: "04 Circuits" },
  { id: "chapter-05", label: "05 Radio" },
  { id: "chapter-06", label: "06 The Gamble" },
];

interface PaddockMuseumProps {
  onBackToStory?: () => void;
}

export const PaddockMuseum: React.FC<PaddockMuseumProps> = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-0 text-xs sm:text-sm font-normal text-ink-secondary leading-relaxed">

      {/* OPENING HERO */}
      <div className="space-y-5 pb-8 sm:pb-10">
        <Label>THE PADDOCK // PRIVATE MOTORSPORT ARCHIVE</Label>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-snug sm:leading-tight text-ink max-w-2xl">
          There is a moment right before twenty engines start when the world goes completely silent.
        </h1>
        <p className="text-sm sm:text-base text-ink-secondary max-w-xl leading-relaxed">
          People who do not watch Formula 1 think it is about cars. Anyone who has stayed awake until 4 AM watching rain fall on Suzuka knows the truth. It is about human beings pushed to the absolute edge of courage, grief, and obsession.
        </p>
        <p className="text-xs sm:text-sm text-ink-secondary max-w-xl">This is my private archive.</p>
      </div>

      {/* Quick Mobile Chapter Navigator */}
      <nav className="sm:hidden -mx-4 px-4 py-2 bg-canvas/60 border-y border-editorial-border/60 mb-6 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="font-mono text-[9px] uppercase tracking-widest text-ink-tertiary mr-1">JUMP TO</span>
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => scrollTo(ch.id)}
              className="font-mono text-[10px] tracking-wider px-2.5 py-1 border border-editorial-border/60 bg-paper text-ink-secondary hover:text-ink rounded-full"
            >
              {ch.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Opening Full-Bleed Plate: Mercedes-AMG PETRONAS F1 Team Wallpaper */}
      <PhotoPlate
        src={f1Assets.russell.wallpaper}
        alt="Mercedes-AMG PETRONAS F1 Team"
        hero
        aspect="aspect-[16/9]"
        objectPosition="object-center"
        label="MERCEDES-AMG PETRONAS F1 // BRACKLEY & BEYOND"
        caption="The engineering sanctuary. Where thousandths of a second are won before the car ever touches tarmac."
      />

      <Rule />

      {/* CHAPTER 01: THE HERO // GEORGE RUSSELL (CURATED REDESIGNED EXHIBITION) */}
      <div id="chapter-01" className="space-y-10 sm:space-y-12 scroll-mt-24">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ink" />
            <Label>Chapter 01 // The Protagonist</Label>
          </div>
          <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-ink">
            George Russell, Number 63
          </h2>
          <p className="text-sm sm:text-base text-ink-secondary max-w-2xl leading-relaxed">
            Three years at the very back of the grid in an uncompetitive Williams. He drove his heart out every Saturday to reach Q2 and never once made excuses. That is who he was before anyone knew his name.
          </p>
        </div>

        {/* 1. The Duality: The Man Behind the Wheel vs The Machine (Visor Up vs Visor Down) */}
        <div className="space-y-4">
          <div className="border-b border-editorial-border/50 pb-2">
            <Label>EXHIBIT 01 // THE DUALITY</Label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <PhotoPlate
                src={f1Assets.russell.facePortrait}
                alt="George Russell portrait without helmet"
                label="VISOR UP // THE MIND"
                caption="Unmasked, raw, and determined. The discipline built through years of fighting from the very rear of the grid."
              />
            </div>
            <div className="space-y-3">
              <PhotoPlate
                src={f1Assets.russell.helmet}
                alt="George Russell focused in helmet"
                label="VISOR DOWN // THE MACHINE"
                caption="The dark visor clicks into place. Heart rate spikes to 175 BPM. The entire universe narrows to apexes and braking boards."
              />
            </div>
          </div>
        </div>

        {/* 2. The Iconic Moments: Sakhir Crucible & Interlagos Victory */}
        <div className="space-y-8">
          <div className="border-b border-editorial-border/50 pb-2">
            <Label>EXHIBIT 02 // THE CRUCIBLE</Label>
          </div>

          {/* Sakhir 2020: The Night on the Grass */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border border-editorial-border/70 bg-paper p-5 sm:p-7">
            <div className="md:col-span-5 space-y-3 order-2 md:order-1">
              <Label>SAKHIR, DECEMBER 2020</Label>
              <h3 className="text-xl sm:text-2xl font-normal text-ink tracking-tight">The Night on the Grass</h3>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                Called up 48 hours before the race to replace Lewis Hamilton. His shoulders rubbed the raw carbon tub because the cockpit was too narrow. He led 59 laps with total command.
              </p>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                Then the pit crew mixed up the tyres. A late puncture ripped victory away. When it was over, he lay on the grass beside the track in the dark, crying with his visor down.
              </p>
              <p className="text-xs sm:text-sm text-ink font-medium pt-1">That afternoon told everyone who he was.</p>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <PhotoPlate
                src={f1Assets.russell.photo}
                alt="George Russell paddock focus"
                caption="The calm before the storm. Built for the pressure."
              />
            </div>
          </div>

          {/* Sao Paulo 2022: Maiden Victory */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border border-editorial-border/70 bg-paper p-5 sm:p-7">
            <div className="md:col-span-7">
              <PhotoPlate
                src={f1Assets.russell.podiumChampagne}
                alt="George Russell podium champagne celebration"
                label="SAO PAULO 2022 // FIRST BLOOD"
                caption="Interlagos, November 2022. Tears on the team radio, pure champagne eruption on the top step."
              />
            </div>
            <div className="md:col-span-5 space-y-3">
              <Label>SAO PAULO, NOVEMBER 2022</Label>
              <h3 className="text-xl sm:text-2xl font-normal text-ink tracking-tight">First Blood</h3>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                His maiden Grand Prix win. He led Sunday from pole with seven-time champion Lewis Hamilton on fresh tyres right behind him after the late safety car.
              </p>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                He nailed the restart. Did not lock a single brake. Held his nerve for twelve excruciating laps. When he crossed the line, his voice cracked with tears over the radio:
              </p>
              <blockquote className="border-l-2 border-ink pl-3 py-1 font-mono text-xs sm:text-sm text-ink italic">
                "Is that a safety car or is it the race win?! I'm crying guys, thank you..."
              </blockquote>
            </div>
          </div>
        </div>

        {/* 3. The Iconic Stance: T-Pose & #63 Identity */}
        <div className="space-y-4">
          <div className="border-b border-editorial-border/50 pb-2">
            <Label>EXHIBIT 03 // THE AURA OF #63</Label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <PhotoPlate
                src={f1Assets.russell.tPose}
                alt="George Russell Austrian GP T-Pose celebration"
                label="SPIELBERG // THE T-POSE"
                caption="The driver introduction that became a global hallmark. Unapologetic confidence before the green lights."
              />
            </div>
            <div className="space-y-3">
              <PhotoPlate
                src={f1Assets.russell.fistPump63}
                alt="George Russell #63 fist pump celebration"
                label="NUMBER 63 // DETERMINATION"
                caption="The fist raised in the air against the iconic #63. The number he forged into a symbol of relentless drive."
              />
            </div>
          </div>
        </div>

        {/* 4. The Cockpit & The Circuit: In-Car Laser Focus & Baku Millimetres */}
        <div className="space-y-4">
          <div className="border-b border-editorial-border/50 pb-2">
            <Label>EXHIBIT 04 // MILLIMETRES AT 350 KM/H</Label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <PhotoPlate
                src={f1Assets.russell.inCar}
                alt="George Russell close-up cockpit aura"
                label="COCKPIT // 5G APEX"
                caption="Inside the carbon monocoque. Pulling 5 lateral Gs where a 5mm difference in steering angle separates pole position from concrete barrier."
              />
            </div>
            <div className="space-y-3">
              <PhotoPlate
                src={f1Assets.russell.baku}
                alt="George Russell at Baku Grand Prix"
                label="BAKU // STREET FIGHTING"
                caption="Threading the Mercedes through the medieval castle section of Baku. High speed, zero run-off, absolute bravery."
              />
            </div>
          </div>
        </div>

        {/* 5. Gaze of Obsession Feature Plate */}
        <div className="space-y-3 border-t border-editorial-border/60 pt-6">
          <PhotoPlate
            src={f1Assets.russell.auraHelmet}
            alt="George Russell intense gaze through helmet visor"
            label="THE GAZE // UNBLINKING OBSESSION"
            caption="Eyes locked through tinted polycarbonate. You cannot fully understand what this sport demands until you look directly into the eyes of someone driving at the limit."
          />
        </div>

        {/* Spa 2024 Retrospective */}
        <div className="p-5 sm:p-7 border border-editorial-border/70 bg-paper space-y-2">
          <Label>SPA-FRANCORCHAMPS, JULY 2024</Label>
          <h3 className="text-lg sm:text-xl font-normal text-ink">The Victory That Vanished</h3>
          <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed max-w-2xl">
            He made the audacious strategic call from inside the car to execute an unthinkable one-stop, nursing hard tyres for 34 punishing laps through Eau Rouge and Blanchimont. He crossed the line first. Hours later, disqualified: his car was 1.5 kilograms underweight solely from rubber worn off during that heroic stint.
          </p>
          <p className="text-xs sm:text-sm text-ink font-medium pt-1">
            He took it on the chin, praised his team, and walked out of the paddock with complete dignity.
          </p>
        </div>
      </div>

      <Rule />

      {/* CHAPTER 02 */}
      <div id="chapter-02" className="space-y-8 scroll-mt-24">
        <div className="space-y-3">
          <Label>Chapter 02 // The Legends</Label>
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-ink">Six Drivers. Six Philosophies of Living.</h2>
          <p className="text-sm text-ink-secondary max-w-xl">Every champion reveals something different about what it means to compete.</p>
        </div>

        <DriverCarousel />

        {/* Abu Dhabi 2018 Donuts */}
        <div className="space-y-4 pt-4">
          <PhotoPlate
            src={f1Assets.donutsAbuDhabi2018}
            alt="Alonso, Hamilton, and Vettel doing donuts in Abu Dhabi 2018"
            hero
            aspect="aspect-[16/9]"
            objectPosition="object-center"
            label="ABU DHABI 2018 // ALONSO. HAMILTON. VETTEL. 11 WORLD TITLES IN TYRE SMOKE."
          />
          <p className="text-xs sm:text-sm text-ink-secondary max-w-xl leading-relaxed">
            They spent years fighting each other with cold fury across four continents. After Alonso's final race for McLaren, Hamilton and Vettel flanked his car and spun donuts on the main straight together in the night air. Mutual respect, earned at 300 kilometres an hour.
          </p>
        </div>
      </div>

      <Rule />

      {/* CHAPTER 03 */}
      <div id="chapter-03" className="space-y-8 scroll-mt-24">
        <div className="space-y-3">
          <Label>Chapter 03 // The Rivalries</Label>
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-ink">Respect Born from War</h2>
          <p className="text-sm text-ink-secondary max-w-xl">Without a worthy rival, you never discover how deep your courage actually runs.</p>
        </div>
        <RivalrySlider />
      </div>

      <Rule />

      {/* CHAPTER 04 */}
      <div id="chapter-04" className="space-y-8 scroll-mt-24">
        <div className="space-y-3">
          <Label>Chapter 04 // Sacred Ground</Label>
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-ink">Asphalt With Memory</h2>
          <p className="text-sm text-ink-secondary max-w-xl">Certain circuits carry a weight you can feel. You cannot stand on them without sensing every person who drove there before.</p>
        </div>

        {/* Interlagos */}
        <div className="space-y-3">
          <PhotoPlate
            src={f1Assets.interlagosTrackMap}
            alt="Interlagos - Autodromo Jose Carlos Pace circuit map"
            label="INTERLAGOS // SAO PAULO, BRAZIL"
          />
          <p className="text-xs sm:text-sm text-ink-secondary max-w-xl leading-relaxed">
            Counter-clockwise, unpredictable weather, and the roar of 70,000 Brazilians. Hamilton's first championship here in 2008, last corner, last lap. Russell's first win here in 2022. Senna's home.
          </p>
        </div>

        {/* Monza & Monaco */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <PhotoPlate
              src={f1Assets.monzaCircuitMap}
              alt="Monza - Autodromo Nazionale circuit map"
              label="MONZA // ITALY // THE TEMPLE OF SPEED"
            />
            <p className="text-xs text-ink-secondary leading-relaxed">Long straights and trees rushing past at 350 km/h. When Ferrari wins here, the podium ceremony under the old banking is as close to a religious event as sport gets.</p>
          </div>
          <div className="space-y-3">
            <PhotoPlate
              src={f1Assets.monacoPoster}
              alt="Monaco Grand Prix historic poster"
              label="MONACO // MONTE CARLO // THE CLAUSTROPHOBIA"
            />
            <p className="text-xs text-ink-secondary leading-relaxed">Nelson Piquet said it is like riding a bicycle around your living room. Wheel rims skim armco by millimetres. Saturday qualifying here is the most intense single hour in sport.</p>
          </div>
        </div>

        {/* Suzuka */}
        <div className="space-y-3">
          <PhotoPlate
            src={f1Assets.suzukaStartingLine}
            alt="Suzuka circuit starting line"
            label="SUZUKA // MIE PREFECTURE, JAPAN"
          />
          <p className="text-xs sm:text-sm text-ink-secondary max-w-xl leading-relaxed">
            The figure eight. The flowing Esses in Sector 1, the terrifying 130R flat out, and the Japanese crowd who stay in the stands through downpours wearing their team raincoats. Suzuka has crowned more world champions than any other circuit.
          </p>
        </div>
      </div>

      <Rule />

      {/* CHAPTER 05 */}
      <div id="chapter-05" className="space-y-8 scroll-mt-24">
        <div className="space-y-3">
          <Label>Chapter 05 // Box Box</Label>
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-ink">Words Under Pressure</h2>
          <p className="text-sm text-ink-secondary max-w-xl">When you are pulling 5G with your heart at 180 beats a minute, you cannot fake anything.</p>
        </div>

        {/* Radio transmissions cards */}
        <div className="space-y-4">
          {[
            {
              driver: "Kimi Raikkonen",
              context: "Abu Dhabi 2012 • Leading for Lotus, engineer advising on tyre management",
              quote: "Just leave me alone. I know what to do.",
              image: f1Assets.kimiCarFire,
              imageAlt: "Kimi Raikkonen car fire",
            },
            {
              driver: "George Russell",
              context: "Sao Paulo 2022 • Taking the chequered flag on his maiden victory",
              quote: "Is that a safety car or is it the race win?! I'm crying guys, thank you...",
              image: f1Assets.russell.podiumChampagne,
              imageAlt: "George Russell celebrating on the podium",
            },
            {
              driver: "Lewis Hamilton",
              context: "Turkey 2020 • Securing his seventh world championship in the rain",
              quote: "That's for all the kids out there who dream the impossible. You can do it too. I believe in you.",
              image: f1Assets.lewisFerrariSmiling,
              imageAlt: "Lewis Hamilton smiling",
            },
            {
              driver: "Sebastian Vettel",
              context: "Abu Dhabi 2010 • Engineer confirms world championship victory",
              quote: "(Sobbing) Thank you boys. Unbelievable. Du bist Weltmeister!",
              image: f1Assets.sebVettelHelmetSuit,
              imageAlt: "Sebastian Vettel in helmet and suit",
            },
          ].map((item, idx) => (
            <div
              key={item.driver}
              className="border border-editorial-border/70 bg-paper p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center"
            >
              <div className="sm:col-span-4 border border-editorial-border/60 overflow-hidden bg-paper">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="block w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="sm:col-span-8 space-y-2.5">
                <div className="flex items-center justify-between">
                  <Label>{item.driver}</Label>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-ink-tertiary flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    RADIO 0{idx + 1}
                  </span>
                </div>
                <blockquote className="text-base sm:text-lg font-normal text-ink leading-snug">
                  "{item.quote}"
                </blockquote>
                <p className="text-[11px] font-mono text-ink-tertiary leading-relaxed">{item.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Rule />

      {/* CHAPTER 06 */}
      <div id="chapter-06" className="space-y-8 scroll-mt-24">
        <div className="space-y-3">
          <Label>Chapter 06 // Why It Matters</Label>
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-ink">The Gamble and the Reason</h2>
        </div>

        {/* Kimi at COTA - Natural proportions, no crop */}
        <PhotoPlate
          src={f1Assets.kimiUSGP}
          alt="Kimi Raikkonen at the US Grand Prix, COTA 2017"
          label="KIMI RAIKKONEN // US GRAND PRIX // CIRCUIT OF THE AMERICAS 2017"
        />

        {/* Reflections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          <div className="p-4 sm:p-6 border border-editorial-border/70 bg-paper space-y-3">
            <h3 className="text-base sm:text-lg font-normal text-ink">Why a software engineer cares about this sport</h3>
            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
              In software, when things fail, you restart the container. In Formula 1, when things fail, someone hits an armco at 200 miles an hour, or fifty engineers who stayed up for four days watch a 0.02 second pit stop mistake destroy a season. It is an extreme reminder that pushing things to their absolute limit is fundamentally messy, dangerous, and beautiful.
            </p>
          </div>
          <div className="p-4 sm:p-6 border border-editorial-border/70 bg-paper space-y-3">
            <h3 className="text-base sm:text-lg font-normal text-ink">The long bet: Cadillac F1</h3>
            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
              Everyone laughs when I say this. American industrial muscle, clean-slate engine regulations, and unconstrained capital entering the sport without thirty years of legacy bloat. They might take a season or two. But they are going to become titans on this grid.
            </p>
            <p className="text-xs sm:text-sm text-ink font-medium pt-1">Mark my words.</p>
          </div>
        </div>
      </div>

    </div>
  );
};
