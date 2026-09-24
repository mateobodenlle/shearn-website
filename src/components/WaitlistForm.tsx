import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { WAITLIST_API } from '../lib/constants';

type Status = 'idle' | 'sending' | 'done' | 'error';

const input =
  'w-full px-5 py-3.5 rounded-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#82ff00] focus:ring-2 focus:ring-[#82ff00]/30 transition-all';

// Signups go to the Vera backend, which stores them and emails the conditions.
const WaitlistForm: React.FC = () => {
  const [name, set_name] = useState('');
  const [email, set_email] = useState('');
  const [consent, set_consent] = useState(false);
  const [status, set_status] = useState<Status>('idle');

  const handle_submit = async (e: React.FormEvent) => {
    e.preventDefault();
    set_status('sending');
    try {
      const r = await fetch(WAITLIST_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, consent }),
      });
      set_status(r.ok ? 'done' : 'error');
    } catch {
      set_status('error');
    }
  };

  if (status === 'done') {
    return (
      <p className="text-base text-gray-600" role="status">
        ¡Estás dentro! Te hemos enviado un correo con las condiciones.
      </p>
    );
  }

  return (
    <form onSubmit={handle_submit} className="max-w-xl mx-auto space-y-3 text-left">
      <div className="flex flex-col sm:flex-row gap-3">
        <input className={input} placeholder="Tu nombre" aria-label="Nombre" value={name}
          onChange={(e) => set_name(e.target.value)} minLength={2} maxLength={80} required />
        <input className={input} type="email" placeholder="tu@email.com" aria-label="Email" value={email}
          onChange={(e) => set_email(e.target.value)} maxLength={254} required />
      </div>
      <label className="flex items-start gap-3 px-2 text-xs text-gray-500">
        <input type="checkbox" className="mt-0.5 accent-[#82ff00]" checked={consent}
          onChange={(e) => set_consent(e.target.checked)} required />
        <span>
          Acepto que Shearn, S.L. guarde mi nombre y email para avisarme cuando Vera esté disponible.
          Puedo pedir que me borren escribiendo a info@weshearn.com.{' '}
          <Link to="/privacidad" className="underline hover:text-gray-900">Política de privacidad</Link>
        </span>
      </label>
      <Button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-[#82ff00] text-black hover:bg-[#6ce600] px-6 py-3 rounded-full transition-colors duration-200"
      >
        {status === 'sending' ? 'Enviando…' : 'Apuntarme a la lista'}
      </Button>
      {status === 'error' && (
        <p className="text-sm text-red-600 text-center" role="alert">No se ha podido completar. Inténtalo de nuevo.</p>
      )}
    </form>
  );
};

export default WaitlistForm;
