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
  { id: 'ocean', name: 'Ocean', color: 'hsl(210, 100%, 50%)' },
  { id: 'sunset', name: 'Sunset', color: 'hsl(25, 95%, 55%)' },
  { id: 'forest', name: 'Forest', color: 'hsl(150, 70%, 40%)' },
  { id: 'purple', name: 'Purple', color: 'hsl(270, 80%, 60%)' },
] as const;

const ThemeSwitcher = () => {
  const { colorTheme, mode, setColorTheme, toggleMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {/* Color Theme Picker */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-9 w-9">
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
                className="w-4 h-4 rounded-full"
                style={{ background: theme.color }}
              />
              <span>{theme.name}</span>
              {colorTheme === theme.id && (
                <span className="ml-auto text-primary">✓</span>
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
