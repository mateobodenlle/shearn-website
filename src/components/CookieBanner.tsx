import React, { useState } from 'react';

const KEY = 'cookie-consent';

// Storage can throw (private mode, blocked site data): fall back to showing the banner.
const read = () => {
  try { return localStorage.getItem(KEY); } catch { return null; }
};

const CookieBanner: React.FC = () => {
  const [open, setOpen] = useState(() => read() === null);
  if (!open) return null;

  const choose = (value: 'accepted' | 'rejected') => {
    try { localStorage.setItem(KEY, value); } catch { /* banner just reappears next visit */ }
    setOpen(false);
  };

  return (
    <div role="dialog" aria-label="Aviso de cookies"
      className="fixed bottom-4 inset-x-4 z-50 max-w-3xl mx-auto bg-card/95 backdrop-blur-md border border-accent-500/20 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
      <p className="text-sm text-muted flex-1">
        Solo usamos almacenamiento técnico necesario para que la web funcione. No usamos cookies de analítica ni de publicidad.
      </p>
      <div className="flex gap-3">
        <button onClick={() => choose('rejected')} className="btn-secondary text-sm px-4 py-2">Rechazar</button>
        <button onClick={() => choose('accepted')} className="btn-primary text-sm px-4 py-2">Aceptar</button>
      </div>
    </div>
  );
};

export default CookieBanner;
