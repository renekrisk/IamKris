import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { WhatIDoPage } from './pages/WhatIDoPage';
import { AboutMePage } from './pages/AboutMePage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="what-i-do" element={<WhatIDoPage />} />
          <Route path="work" element={<Navigate to="/what-i-do" replace />} />
          <Route path="about-me" element={<AboutMePage />} />
          <Route path="about" element={<Navigate to="/about-me" replace />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
