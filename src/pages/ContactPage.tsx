import React from 'react';
import { MailIcon, GithubIcon, LinkedinIcon, TwitterXIcon, PhoneIcon, MapPinIcon } from '../components/Icons';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-2xl border-b border-editorial-border pb-10">
          <div className="mono-label text-ink-tertiary">
            [ CONTACT & REACH OUT ]
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tightest text-ink leading-tight">
            Let's Talk.
          </h1>
          <p className="text-base sm:text-xl text-ink-secondary font-normal leading-relaxed">
            Whether it's venture architecture, AI education, custom modules, client products, or just a good conversation.
          </p>
        </div>

        {/* Contact Outlets */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Email */}
          <div className="md:col-span-6 space-y-3">
            <span className="mono-label text-[0.65rem] text-ink-tertiary uppercase flex items-center gap-1.5">
              <MailIcon className="w-3.5 h-3.5 text-ink-tertiary" />
              <span>EMAIL</span>
            </span>
            <div>
              <a
                href="mailto:kriskamau25@gmail.com"
                className="group inline-flex items-center space-x-2 text-xl sm:text-2xl font-normal text-ink hover:text-ink-secondary transition-colors"
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
            <span className="mono-label text-[0.65rem] text-ink-tertiary uppercase flex items-center gap-1.5">
              <PhoneIcon className="w-3.5 h-3.5 text-ink-tertiary" />
              <span>PHONE / WHATSAPP</span>
            </span>
            <div className="flex flex-col space-y-3 font-mono text-base sm:text-lg text-ink">
              <div>
                <span className="block text-[0.6rem] text-ink-tertiary uppercase mb-0.5">TÜRKIYE (ANKARA)</span>
                <a href="tel:+905391338912" className="hover:underline inline-flex items-center gap-2">
                  <span>+90 539 133 8912</span>
                </a>
              </div>
              <div>
                <span className="block text-[0.6rem] text-ink-tertiary uppercase mb-0.5">KENYA (NAIROBI)</span>
                <a href="tel:+254769032075" className="hover:underline inline-flex items-center gap-2">
                  <span>+254 769 032 075</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social / Network Outlets with Vector Icons */}
        <div className="pt-10 border-t border-editorial-border/60 grid grid-cols-2 sm:grid-cols-4 gap-6 mono-label text-xs">
          {/* GitHub */}
          <div className="space-y-2">
            <span className="block text-[0.65rem] text-ink-tertiary uppercase">GITHUB</span>
            <a
              href="https://github.com/renekrisk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink hover:text-ink-secondary transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>@renekrisk ↗</span>
            </a>
          </div>

          {/* LinkedIn */}
          <div className="space-y-2">
            <span className="block text-[0.65rem] text-ink-tertiary uppercase">LINKEDIN</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink hover:text-ink-secondary transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn ↗</span>
            </a>
          </div>

          {/* X / Twitter */}
          <div className="space-y-2">
            <span className="block text-[0.65rem] text-ink-tertiary uppercase">X / TWITTER</span>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink hover:text-ink-secondary transition-colors"
            >
              <TwitterXIcon className="w-4 h-4" />
              <span>@x ↗</span>
            </a>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <span className="block text-[0.65rem] text-ink-tertiary uppercase">LOCATION</span>
            <div className="inline-flex items-center gap-1.5 text-ink">
              <MapPinIcon className="w-4 h-4 text-ink-tertiary shrink-0" />
              <span className="text-[11px] font-mono leading-tight">NAIROBI / ANKARA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
