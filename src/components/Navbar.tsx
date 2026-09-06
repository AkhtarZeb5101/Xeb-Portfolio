import { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Briefcase, 
  Wrench, 
  GraduationCap, 
  Quote, 
  Mail 
} from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Wrench },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Testimonials', href: '#testimonials', icon: Quote },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Hide navbar on mobile when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Threshold before hiding
      if (currentScrollY > 60) {
        if (currentScrollY > prevScrollY) {
          // Scrolling down -> hide navbar on mobile & close popup
          setIsVisible(false);
          setIsOpen(false);
        } else {
          // Scrolling up -> show navbar
          setIsVisible(true);
        }
      } else {
        // At top -> always visible
        setIsVisible(true);
      }
      
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  // Close popup menu when touching/clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current && 
        !menuRef.current.contains(target) &&
        buttonRef.current && 
        !buttonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 glass transition-transform duration-300 ${
        !isVisible ? '-translate-y-full md:translate-y-0' : 'translate-y-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold text-gradient">
            Akhtar Zeb
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <ThemeSwitcher />
          </div>

          {/* Mobile Navigation Controls */}
          <div className="md:hidden flex items-center gap-2 h-full relative">
            <ThemeSwitcher />
            
            <button
              ref={buttonRef}
              onClick={() => setIsOpen((prev) => !prev)}
              className={`p-2 rounded-lg transition-colors focus:outline-none ${
                isOpen ? 'bg-primary/10 text-primary' : 'hover:bg-muted/70'
              }`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Mobile Dropdown / Pop-up Menu */}
            {isOpen && (
              <div
                ref={menuRef}
                className="absolute right-0 top-full mt-2.5 w-56 rounded-2xl glass border border-border/80 p-2 shadow-2xl animate-fade-in z-50 bg-background/95 backdrop-blur-xl"
              >
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <link.icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
