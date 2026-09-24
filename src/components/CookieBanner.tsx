import React, { useState } from 'react';
import { Button } from './ui/Button';

const KEY = 'cookie-consent';

// Storage can throw (private mode, blocked site data): fall back to showing the banner.
const read_choice = () => {
  try { return localStorage.getItem(KEY); } catch { return null; }
};

const CookieBanner: React.FC = () => {
  const [open, set_open] = useState(() => read_choice() === null);
  if (!open) return null;

  const choose = (value: 'accepted' | 'rejected') => {
    try { localStorage.setItem(KEY, value); } catch { /* banner just reappears next visit */ }
    set_open(false);
  };

  return (
    <div role="dialog" aria-label="Aviso de cookies"
      className="fixed bottom-4 inset-x-4 z-50 max-w-3xl mx-auto bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]">
      <p className="text-sm text-gray-600 flex-1">
        Solo usamos almacenamiento técnico necesario para que la web funcione. No usamos cookies de analítica ni de publicidad.
      </p>
      <div className="flex gap-3">
        <Button variant="outline" onClick={() => choose('rejected')} className="rounded-full px-4 py-2 text-sm">Rechazar</Button>
        <Button onClick={() => choose('accepted')} className="bg-[#82ff00] text-black hover:bg-[#6ce600] rounded-full px-4 py-2 text-sm">Aceptar</Button>
      </div>
    </div>
  );
};

export default CookieBanner;
