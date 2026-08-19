import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SiteNavigation } from './SiteNavigation';
import { Footer } from './Footer';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-ink selection:text-paper font-sans flex flex-col justify-between">
      <ScrollToTop />
      <SiteNavigation />
      <main className="flex-grow pt-24 md:pt-32">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
