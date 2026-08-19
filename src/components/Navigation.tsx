import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/90 backdrop-blur-md border-b border-editorial-border/60 py-4'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Brand identifier */}
        <Link
          to="/"
          className="text-ink font-semibold tracking-widest text-sm uppercase hover:opacity-70 transition-opacity"
        >
          KRIS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-xs font-mono tracking-widest uppercase transition-colors duration-200 relative py-1 ${
                  isActive
                    ? 'text-ink font-medium border-b border-ink'
                    : 'text-ink-secondary hover:text-ink'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-xs font-mono tracking-wider uppercase text-ink py-1 px-2 border border-editorial-border focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[53px] bg-paper border-b border-editorial-border p-6 shadow-sm transition-all duration-200">
          <nav className="flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-mono tracking-widest uppercase py-2 border-b border-editorial-border/30 ${
                  isActive ? 'text-ink font-medium' : 'text-ink-secondary'
                }`
              }
            >
              Home
            </NavLink>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-mono tracking-widest uppercase py-2 border-b border-editorial-border/30 last:border-0 ${
                    isActive ? 'text-ink font-medium' : 'text-ink-secondary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
