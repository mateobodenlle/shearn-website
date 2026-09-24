import React from 'react';
import { Link } from 'react-router-dom';

const SiteFooter: React.FC<{ dark?: boolean }> = ({ dark }) => {
  const muted = dark ? 'text-gray-500' : 'text-gray-500';
  const link = dark
    ? 'text-sm text-gray-400 hover:text-[#82ff00] transition-colors'
    : 'text-sm text-gray-600 hover:text-[#82ff00] transition-colors';
  const heading = `text-xs font-semibold tracking-[0.12em] uppercase mb-4 ${dark ? 'text-gray-500' : 'text-gray-400'}`;

  return (
    <footer
      className={`relative z-10 border-t ${
        dark ? 'bg-ink border-white/10' : 'bg-surface-alt border-gray-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <img src="/shearn-logo-cropped.svg" alt="Shearn" className="h-7 w-auto" />
            </Link>
            <p className={`${muted} text-sm leading-relaxed max-w-xs`}>
              Productos educativos donde la inteligencia artificial acompaña, no sustituye. Hecho en Galicia.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className={heading}>Productos</h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/socratic" className={link}>Socratic</Link>
              <Link to="/vera" className={link}>Vera</Link>
            </nav>
          </div>

          <div className="md:col-span-2">
            <h4 className={heading}>Legal</h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/aviso-legal" className={link}>Aviso legal</Link>
              <Link to="/privacidad" className={link}>Privacidad</Link>
            </nav>
          </div>

          <div className="md:col-span-2">
            <h4 className={heading}>Contacto</h4>
            <nav className="flex flex-col gap-2.5">
              <a href="mailto:info@weshearn.com" className={link}>
                info@weshearn.com
              </a>
            </nav>
          </div>
        </div>

        <div
          className={`mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-sm ${
            dark ? 'border-white/10 text-gray-500' : 'border-gray-200 text-gray-400'
          }`}
        >
          <span>© {new Date().getFullYear()} Shearn</span>
          <span>Aprender es dialogar.</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
