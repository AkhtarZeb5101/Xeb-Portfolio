import { Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const themes = [
  { id: 'slate', name: 'Steel Slate', color: 'hsl(215, 25%, 50%)' },
  { id: 'amber', name: 'Amber Slate', color: '#bf891d' },
  { id: 'ocean', name: 'Executive Navy', color: 'hsl(217, 91%, 52%)' },
  { id: 'emerald', name: 'Emerald Tech', color: 'hsl(160, 84%, 39%)' },
  { id: 'nordic', name: 'Nordic Ice', color: 'hsl(201, 96%, 46%)' },
] as const;

const ThemeSwitcher = () => {
  const { colorTheme, mode, setColorTheme, toggleMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {/* Color Theme Picker */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Select color theme">
            <Palette className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="glass">
          {themes.map((theme) => (
            <DropdownMenuItem
              key={theme.id}
              onClick={() => setColorTheme(theme.id)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div
                className="w-4 h-4 rounded-full border border-border/50 shadow-sm"
                style={{ background: theme.color }}
              />
              <span>{theme.name}</span>
              {colorTheme === theme.id && (
                <span className="ml-auto text-primary font-bold">✓</span>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Light/Dark Mode Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMode}
        className="h-9 w-9"
        aria-label={mode === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
        title={mode === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
      >
        {mode === 'dark' ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
