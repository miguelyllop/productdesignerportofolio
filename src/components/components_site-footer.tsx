import React from 'react';

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Portfolio 2024 - Handcrafted and designed by Miguel Plaza
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://read.cv/miguellpp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            CV
          </a>
          <a
            href="https://www.linkedin.com/in/miguel-luis-152046163/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

