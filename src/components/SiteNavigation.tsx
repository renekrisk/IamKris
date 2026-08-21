import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const navLinks = [
  { label: 'Home', path: '/', number: '01' },
  { label: 'What I Do', path: '/what-i-do', number: '02' },
  { label: 'About Me', path: '/about-me', number: '03' },
  { label: 'Contact', path: '/contact', number: '04' },
];

export const SiteNavigation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu automatically on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Escape key handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent background body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // GSAP animation
  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const panel = containerRef.current!.querySelector('.kn-overlay');
      const items = containerRef.current!.querySelectorAll('.kn-nav-item');
      const meta = containerRef.current!.querySelector('.kn-meta-footer');

      if (isOpen) {
        gsap.set(panel, { display: 'flex' });
        gsap.fromTo(
          panel,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: 'power2.out' }
        );
        gsap.fromTo(
          items,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.35, stagger: 0.05, ease: 'power3.out', delay: 0.08 }
        );
        gsap.fromTo(
          meta,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', delay: 0.2 }
        );
      } else {
        gsap.to(panel, {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: () => {
            gsap.set(panel, { display: 'none' });
          },
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, [isOpen]);

  return (
    <div ref={containerRef}>
      {/* ── Top Bar Header ── */}
      <header className="fixed top-0 left-0 right-0 z-[120] py-4 sm:py-6 px-4 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between transition-colors duration-300">
        {/* Left: Brand Wordmark */}
        <Link
          to="/"
          className="text-ink font-semibold tracking-widest text-xs uppercase hover:opacity-60 transition-opacity"
        >
          KRIS
        </Link>

        {/* Center / Right: Phone Numbers & Menu Button */}
        <div className="flex items-center space-x-4 md:space-x-8">
          {/* Phone Numbers (Tablet & Desktop) */}
          <div className="hidden md:flex items-center space-x-3 mono-label text-[0.7rem] text-ink-secondary">
            <a href="tel:+905391338912" className="hover:text-ink transition-colors">
              +90 539 133 8912
            </a>
            <span className="text-ink-tertiary">/</span>
            <a href="tel:+254769032075" className="hover:text-ink transition-colors">
              +254 769 032 075
            </a>
          </div>

          {/* Menu Trigger */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="mono-label text-xs tracking-widest text-ink hover:opacity-60 transition-opacity flex items-center space-x-2 py-1.5 px-3 border border-editorial-border bg-paper/80 backdrop-blur-md"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <span>{isOpen ? 'CLOSE' : 'MENU'}</span>
            <span className="text-xs">{isOpen ? '✕' : '—'}</span>
          </button>
        </div>
      </header>

      {/* ── Semi-Transparent Blurred Fullscreen Overlay ── */}
      <div
        className="kn-overlay fixed inset-0 z-[110] bg-paper/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 md:p-16 lg:p-20 hidden selection:bg-ink selection:text-paper overflow-y-auto"
        aria-hidden={!isOpen}
      >
        <div className="pt-10 sm:pt-12" />

        {/* Center Nav Links */}
        <nav className="max-w-4xl mx-auto w-full my-auto py-8 sm:py-12">
          <ul className="space-y-4 sm:space-y-6 md:space-y-8">
            {navLinks.map((link) => (
              <li key={link.path} className="kn-nav-item border-b border-editorial-border/60 pb-3 sm:pb-6">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `group flex items-baseline justify-between text-3xl sm:text-5xl md:text-6xl font-normal tracking-tightest transition-colors duration-200 ${
                      isActive ? 'text-ink font-medium' : 'text-ink/80 hover:text-ink'
                    }`
                  }
                >
                  <div className="flex items-baseline space-x-3 sm:space-x-8">
                    <span className="mono-label text-xs sm:text-sm text-ink-tertiary group-hover:text-ink transition-colors">
                      {link.number}
                    </span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">
                      {link.label}
                    </span>
                  </div>
                  <span className="text-xl sm:text-3xl opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200">
                    ↗
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Minimal Contact Metadata Footer */}
        <div className="kn-meta-footer max-w-4xl mx-auto w-full pt-6 sm:pt-8 border-t border-editorial-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mono-label text-xs text-ink-secondary">
          {/* Phone Numbers */}
          <div className="space-y-1">
            <span className="block text-[0.65rem] text-ink-tertiary uppercase">PHONE</span>
            <div className="flex flex-col space-y-1 text-ink font-mono text-xs">
              <a href="tel:+905391338912" className="hover:underline">
                +90 539 133 8912
              </a>
              <a href="tel:+254769032075" className="hover:underline">
                +254 769 032 075
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <span className="block text-[0.65rem] text-ink-tertiary uppercase">EMAIL</span>
            <a href="mailto:kriskamau25@gmail.com" className="block text-ink font-mono hover:underline text-xs">
              kriskamau25@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="space-y-1 sm:text-right lg:text-right">
            <span className="block text-[0.65rem] text-ink-tertiary uppercase">LOCATION</span>
            <span className="text-ink font-mono text-xs">NAIROBI, KENYA / ANKARA, TÜRKIYE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
