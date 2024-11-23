import React from 'react';
import { ThemeProvider } from './components/components_theme-provider';
import { SiteHeader } from './components/components_site-header';
import { SiteFooter } from './components/components_site-footer';
import HomePage from './components/home-page';

function App() {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <HomePage />
        <SiteFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;

