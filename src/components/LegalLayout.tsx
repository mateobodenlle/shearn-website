import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

interface LegalLayoutProps {
  title: string;
  updated: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}

/** Shared chrome for the legal pages (Aviso legal, Privacidad). */
const LegalLayout: React.FC<LegalLayoutProps> = ({ title, updated, intro, children }) => {
  useEffect(() => {
    document.title = `${title} · Shearn`;
  }, [title]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-[#82ff00]/5 relative overflow-x-hidden flex flex-col text-gray-900">
      <SiteHeader />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-24 right-10 w-[26rem] h-[26rem] bg-[#82ff00]/10 rounded-full blur-3xl drift-1" />
        <div className="absolute bottom-40 left-20 w-[30rem] h-[30rem] bg-green-400/5 rounded-full blur-3xl drift-2" />
      </div>

      <main className="relative z-10 flex-1 w-full max-w-3xl mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">{title}</h1>
        <p className="text-sm text-gray-500 mb-10">Última actualización: {updated}</p>

        {intro && <div className="text-gray-600 leading-relaxed mb-10">{intro}</div>}

        <div className="space-y-9 text-gray-600 leading-relaxed">{children}</div>
      </main>

      <SiteFooter />
    </div>
  );
};

/** A numbered/heading section inside a legal document. */
export const LegalSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section>
    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{title}</h2>
    <div className="space-y-3">{children}</div>
  </section>
);

export default LegalLayout;
