import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SiteHeader: React.FC<{ dark?: boolean }> = ({ dark }) => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const is_active = (path: string) => pathname === path;

  useEffect(() => {
    const on_scroll = () => setScrolled(window.scrollY > 32);
    on_scroll();
    window.addEventListener('scroll', on_scroll, { passive: true });
    return () => window.removeEventListener('scroll', on_scroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out ${
        scrolled
          ? dark
            ? 'bg-ink/80 backdrop-blur-md border-b border-white/10'
            : 'bg-white/95 border-b border-gray-200/60 shadow-[0_1px_8px_-4px_rgba(0,0,0,0.06)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12 h-16 md:h-[72px] flex items-center justify-between gap-4">
        <Link to="/" aria-label="Shearn · inicio" className="flex items-center">
          <img
            src="/shearn-logo-cropped.svg"
            alt="Shearn"
            className="h-8 md:h-10 w-auto"
            loading="eager"
            decoding="sync"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/socratic" active={is_active('/socratic')} dark={dark}>Socratic</NavLink>
          <NavLink to="/vera" active={is_active('/vera')} dark={dark}>Vera</NavLink>
        </nav>

        <button
          type="button"
          disabled
          aria-disabled="true"
          title="Disponible próximamente"
          className={`inline-flex items-center justify-center border px-4 md:px-5 py-2 rounded-full text-sm cursor-not-allowed opacity-50 ${
            dark ? 'border-white/20 text-gray-300' : 'border-gray-300 text-gray-700'
          }`}
        >
          Iniciar sesión
        </button>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  dark?: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, dark, children }) => (
  <Link
    to={to}
    className={`relative px-4 py-2 text-[15px] font-normal transition-colors duration-200 ${
      dark
        ? active ? 'text-white' : 'text-gray-400 hover:text-white'
        : active ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
    }`}
  >
    {children}
    <span
      aria-hidden
      className={`pointer-events-none absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full bg-[#82ff00] origin-center transition-transform duration-300 ${
        active ? 'scale-x-100' : 'scale-x-0'
      }`}
    />
  </Link>
);

export default SiteHeader;
