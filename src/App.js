import React from 'react';
import { ThemeProvider } from './components/theme-provider';
import { SiteHeader } from './components/site-header';
import { SiteFooter } from './components/site-footer';
import HomePage from './components/home-page';
import './App.css';

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

