import React from 'react';

export function ThemeProvider({ children, defaultTheme = 'system', enableSystem = true }) {
  const [theme, setTheme] = React.useState(defaultTheme);

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    
    if (theme === 'system' && enableSystem) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme, enableSystem]);

  return (
    <div className={theme}>
      {children}
    </div>
  );
}

