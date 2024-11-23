import React, { useState } from 'react';
import { ModeToggle } from './components/ModeToggle';

export function SiteHeader() {
  const [theme, setTheme] = useState('system');  // El tema por defecto (puedes configurarlo a 'light' o 'dark')

  const handleThemeToggle = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Miguel Plaza</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <a
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </a>
            <ModeToggle currentTheme={theme} onToggle={handleThemeToggle} />
          </nav>
        </div>
      </div>
    </header>
  );
}
