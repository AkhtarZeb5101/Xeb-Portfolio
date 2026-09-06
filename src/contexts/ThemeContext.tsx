import React, { createContext, useContext, useEffect, useState } from 'react';

type ColorTheme = 'slate' | 'amber' | 'ocean' | 'emerald' | 'nordic';
type Mode = 'light' | 'dark';

interface ThemeContextType {
  colorTheme: ColorTheme;
  mode: Mode;
  setColorTheme: (theme: ColorTheme) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Helper to determine system mode preference
const getSystemMode = (): Mode => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to 'slate' (Steel Slate)
  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('color-theme') as ColorTheme | null;
      if (savedTheme && ['slate', 'amber', 'emerald', 'nordic'].includes(savedTheme)) {
        return savedTheme;
      }
      if (localStorage.getItem('color-theme-manual') === 'ocean') {
        return 'ocean';
      }
    }
    return 'slate';
  });

  // Default mode to system preferences
  const [mode, setMode] = useState<Mode>(() => {
    if (typeof window !== 'undefined') {
      const manualMode = localStorage.getItem('theme-mode-manual') as Mode | null;
      if (manualMode === 'light' || manualMode === 'dark') {
        return manualMode;
      }
      return getSystemMode();
    }
    return 'light';
  });

  // Track if user explicitly toggled the mode
  const [hasManualMode, setHasManualMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme-mode-manual') !== null;
    }
    return false;
  });

  // Listen to system color scheme changes if user hasn't set manual override
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (!hasManualMode) {
        setMode(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [hasManualMode]);

  // Synchronize CSS classes and localStorage
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove(
      'theme-slate', 
      'theme-amber', 
      'theme-ocean', 
      'theme-emerald', 
      'theme-nordic', 
      'theme-sunset', 
      'theme-forest', 
      'theme-purple', 
      'dark'
    );
    
    // Add current theme class
    root.classList.add(`theme-${colorTheme}`);
    
    // Add dark mode class
    if (mode === 'dark') {
      root.classList.add('dark');
    }
    
    localStorage.setItem('color-theme', colorTheme);
  }, [colorTheme, mode]);

  const toggleMode = () => {
    setHasManualMode(true);
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme-mode-manual', next);
      localStorage.setItem('mode', next);
      return next;
    });
  };

  const handleSetColorTheme = (theme: ColorTheme) => {
    setColorTheme(theme);
    localStorage.setItem('color-theme', theme);
    localStorage.setItem('color-theme-manual', theme);
  };

  return (
    <ThemeContext.Provider value={{ colorTheme, mode, setColorTheme: handleSetColorTheme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
