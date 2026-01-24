import React, { createContext, useContext, useEffect, useState } from 'react';

type ColorTheme = 'ocean' | 'sunset' | 'forest' | 'purple';
type Mode = 'light' | 'dark';

interface ThemeContextType {
  colorTheme: ColorTheme;
  mode: Mode;
  setColorTheme: (theme: ColorTheme) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [colorTheme, setColorTheme] = useState<ColorTheme>('ocean');
  const [mode, setMode] = useState<Mode>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('color-theme') as ColorTheme;
    const savedMode = localStorage.getItem('mode') as Mode;
    
    if (savedTheme) setColorTheme(savedTheme);
    if (savedMode) setMode(savedMode);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('theme-sunset', 'theme-forest', 'theme-purple', 'dark');
    
    // Add color theme class (except for default ocean)
    if (colorTheme !== 'ocean') {
      root.classList.add(`theme-${colorTheme}`);
    }
    
    // Add dark mode class
    if (mode === 'dark') {
      root.classList.add('dark');
    }
    
    localStorage.setItem('color-theme', colorTheme);
    localStorage.setItem('mode', mode);
  }, [colorTheme, mode]);

  const toggleMode = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ colorTheme, mode, setColorTheme, toggleMode }}>
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
