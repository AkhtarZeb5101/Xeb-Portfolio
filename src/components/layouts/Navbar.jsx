import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavLink = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`relative transition-colors hover:text-green-400
        ${isActive ? 'text-green-400' : 'text-gray-400'}
        after:content-["" ] after:absolute after:bottom-[-2px] after:left-0 
        after:w-full after:h-[2px] after:bg-green-400
        after:transform after:origin-left
        ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}
        after:transition-transform after:duration-200`}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-green-400 font-mono text-xl">{"<Akhtar Zeb Bacha />"}</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About_Me</NavLink>
            <NavLink to="/projects">My_Projects</NavLink>
            <NavLink to="/contact">Contact_Me</NavLink>
          </div>

          {/* Mobile Navigation Button */}
          <button className="md:hidden text-green-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed inset-0 bg-gray-900/70 backdrop-blur-sm z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
        <div className="flex justify-end p-4">
          <button onClick={closeMenu} className="text-green-400">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 mt-10 backdrop-blur-md bg-gray-900/80 p-4 rounded-lg">
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About_Me</NavLink>
          <NavLink to="/projects" onClick={closeMenu}>My_Projects</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact_Me</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
