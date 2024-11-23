import React from 'react';
import { ThemeProvider } from './components/theme-provider.tsx';
import { SiteHeader } from './components/site-header.tsx';
import { SiteFooter } from './components/site-footer.tsx';
import HomePage from './components/home-page.jsx';
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" enableSystem>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <HomePage />
        <SiteFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;
