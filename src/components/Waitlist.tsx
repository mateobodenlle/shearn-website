import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LINKS } from '../lib/constants';

const CONDITIONS = [
  'Apuntarte no te compromete a nada.',
  'En cuanto esté disponible te escribimos: pagas y te lo enviamos.',
  'Envío en una semana a toda España.',
];

type Status = 'idle' | 'sending' | 'done' | 'error';

const input =
  'w-full bg-bg/60 border border-accent-500/20 rounded-lg px-4 py-3 text-text placeholder-muted focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300';

const Waitlist: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const r = await fetch(LINKS.waitlistApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, consent }),
      });
      setStatus(r.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="relative pt-28 lg:pt-32 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto container-padding"
      >
        <div className="grid lg:grid-cols-2 gap-8 bg-card/60 backdrop-blur-sm border border-accent-500/20 rounded-2xl p-6 lg:p-10">
          <div>
            <div className="inline-flex items-center space-x-2 border border-accent-500/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-accent-500 font-medium text-sm">Lista de espera</span>
              <div className="w-1 h-1 bg-accent-500 rounded-full"></div>
              <span className="text-muted text-sm">Vera</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-display font-bold text-text mb-4">
              Reserva tu <span className="text-gradient">Vera</span>
            </h1>
            <p className="text-muted mb-6">
              Resuelve problemas en papel con un boli digital mientras Vera te guía con preguntas.
            </p>
            <p className="mb-6">
              <span className="text-4xl font-display font-bold text-text">89 €</span>
              <span className="text-muted text-sm"> IVA incluido</span>
              <span className="block text-muted mt-1">+ suscripción de 30 €/mes</span>
            </p>
            <ul className="space-y-2">
              {CONDITIONS.map((c) => (
                <li key={c} className="flex items-start text-sm text-text">
                  <span className="text-accent-500 mr-2">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {status === 'done' ? (
            <div className="flex flex-col justify-center text-center" role="status">
              <p className="text-2xl font-display font-semibold text-accent-500 mb-2">¡Estás dentro!</p>
              <p className="text-muted">Te hemos enviado un correo con las condiciones.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col justify-center space-y-4">
              <input className={input} placeholder="Tu nombre" aria-label="Nombre" value={name}
                onChange={(e) => setName(e.target.value)} minLength={2} maxLength={80} required />
              <input className={input} type="email" placeholder="tu@email.com" aria-label="Email" value={email}
                onChange={(e) => setEmail(e.target.value)} maxLength={254} required />
              <label className="flex items-start space-x-3 text-xs text-muted">
                <input type="checkbox" className="mt-0.5 accent-accent-500" checked={consent}
                  onChange={(e) => setConsent(e.target.checked)} required />
                <span>
                  Acepto que Shearn, S.L. guarde mi nombre y email para avisarme cuando Vera esté disponible.
                  Puedo pedir que me borren escribiendo a info@weshearn.com.{' '}
                  <a href={LINKS.privacy} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-500">
                    Política de privacidad
                  </a>
                </span>
              </label>
              <button type="submit" className="btn-primary w-full" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando…' : 'Apuntarme a la lista'}
              </button>
              {status === 'error' && (
                <p className="text-sm text-red-400" role="alert">No se ha podido completar. Inténtalo de nuevo.</p>
              )}
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Waitlist;
