import { Link, NavLink } from 'react-router-dom';
import { Menu as MenuIcon, X, Coffee } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Drinks', href: '/menu?type=drinks' },
    { name: 'Food', href: '/menu?type=food' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-brand-light/95 flex backdrop-blur-md fixed w-full z-[100] shadow-sm border-b-2 border-brand-dark font-sans h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-brand-primary p-2 rounded-lg shadow-[3px_3px_0_0_#431407] group-hover:shadow-[1px_1px_0_0_#431407] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all border border-brand-dark">
            <Coffee className="h-6 w-6 text-white" />
          </div>
          <span className="font-display text-2xl font-black text-brand-dark uppercase tracking-tight">Kanto Cafe</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-bold uppercase tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-brand-dark hover:text-brand-primary'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <a 
            href="https://www.foodpanda.ph/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-dark text-white px-6 py-2 rounded-lg border-2 border-brand-dark hover:bg-brand-primary hover:border-brand-primary transition-all text-sm font-bold uppercase shadow-[4px_4px_0_0_#EA580C]"
          >
            Order Delivery
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brand-dark p-2 bg-brand-beige border-2 border-brand-dark rounded-lg shadow-[3px_3px_0_0_#431407]"
          >
            {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-brand-light border-b-4 border-brand-dark shadow-xl md:hidden px-4 py-6 flex flex-col gap-4">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl border-2 border-brand-dark text-center font-bold uppercase ${
                  isActive ? 'bg-brand-primary text-white shadow-brutal' : 'bg-white text-brand-dark hover:bg-brand-beige shadow-sm'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <a 
            href="https://www.foodpanda.ph/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-center mt-4 bg-brand-dark text-brand-accent border-2 border-brand-dark px-4 py-4 rounded-xl font-black uppercase text-lg"
          >
            Order Delivery Now
          </a>
        </div>
      )}
    </nav>
  );
}
