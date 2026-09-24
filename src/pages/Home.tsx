import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  Brain,
  BarChart3,
  PenLine,
  Mic,
  EyeOff,
  Mail,
} from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { useReveal } from '../hooks/useReveal';

/* ===== Hero: diálogo socrático que se escribe en vivo ===== */

const DIALOGUE_SCRIPT = [
  { who: 'socratic', text: '¿Por qué crees que la fotosíntesis necesita luz?' },
  { who: 'alumno', text: 'Porque la luz aporta la energía para fijar el carbono.' },
  { who: 'socratic', text: 'Bien. ¿Qué le pasaría entonces a una hoja que crece a oscuras?' },
  { who: 'alumno', text: 'No podría fabricar glucosa… tiraría de sus reservas.' },
] as const;

// La línea que cierra el diálogo se muestra fija como cita-conclusión, no tecleada.
const CONCLUSION = 'Acabas de deducirlo tú, sin que nadie te lo contara.';

function useTypedScript() {
  const [progress, set_progress] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? { msg: DIALOGUE_SCRIPT.length, chars: 0 }
      : { msg: 0, chars: 0 }
  );

  useEffect(() => {
    const current = DIALOGUE_SCRIPT[progress.msg];
    if (!current) {
      const t = setTimeout(() => set_progress({ msg: 0, chars: 0 }), 5000);
      return () => clearTimeout(t);
    }
    const done = progress.chars >= current.text.length;
    const t = setTimeout(
      () =>
        set_progress((p) =>
          done ? { msg: p.msg + 1, chars: 0 } : { ...p, chars: p.chars + 1 }
        ),
      done ? 1100 : 26
    );
    return () => clearTimeout(t);
  }, [progress]);

  return progress;
}

const DialoguePanel: React.FC = () => {
  const { msg, chars } = useTypedScript();
  const scroll_ref = useRef<HTMLDivElement>(null);

  // Anchor the newest line to the bottom so the panel never grows the layout.
  useEffect(() => {
    const el = scroll_ref.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msg, chars]);

  // Decorative comprehension meter: climbs as the dialogue advances (not a real metric).
  const meter = Math.min(100, 22 + (msg / DIALOGUE_SCRIPT.length) * 78);

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-8 rounded-full bg-[#82ff00]/10 blur-3xl animate-glow-soft"
      />

      {/* Stacked composition: ghost sessions behind, live card in front, conclusion floating. */}
      <div className="relative h-[30rem]">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[21rem] origin-bottom-left rotate-[5deg] rounded-2xl border border-white/10 bg-[#0F1621]/40"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[21rem] origin-bottom-right -rotate-[4deg] rounded-2xl border border-white/10 bg-[#0F1621]/60"
        />

        {/* Live conversation card */}
        <div className="absolute inset-x-0 top-0 z-10 rounded-2xl border border-white/10 bg-[#0F1621]/70 backdrop-blur-sm p-5 md:p-6">
          <div
            ref={scroll_ref}
            className="space-y-2.5 h-[16rem] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_1.75rem)]"
          >
            {DIALOGUE_SCRIPT.slice(0, msg + 1).map((m, i) => {
              const typing = i === msg;
              const text = typing ? m.text.slice(0, chars) : m.text;
              if (typing && chars === 0) return null;
              const soc = m.who === 'socratic';
              return (
                <div key={i} className={`flex ${soc ? 'justify-start' : 'justify-end'}`}>
                  <p
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2 text-sm leading-snug ${
                      soc
                        ? 'bg-white/[0.06] text-[#E8F0FF] rounded-bl-md'
                        : 'bg-[#82ff00]/15 text-[#d6ffad] rounded-br-md'
                    }`}
                  >
                    {text}
                    {typing && (
                      <span className="caret inline-block w-[2px] h-[1.1em] align-text-bottom bg-[#82ff00] ml-0.5" />
                    )}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-5">
            <span className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-gray-500 mb-2">
              Comprensión del concepto
            </span>
            <div className="h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#82ff00] transition-[width] duration-700 ease-out"
                style={{ width: `${meter}%` }}
              />
            </div>
          </div>
        </div>

        {/* Floating conclusion — the thesis of the hero, always visible */}
        <div className="absolute inset-x-6 bottom-0 z-20 rounded-2xl border border-[#82ff00]/40 bg-[#0C1219] p-4 shadow-xl shadow-[#82ff00]/10">
          <p className="font-display font-bold text-base md:text-lg leading-snug text-[#E8F0FF]">
            {CONCLUSION}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ===== Página ===== */

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Shearn · Aprender con impulso.';
  }, []);
  useReveal();

  return (
    <div className="min-h-screen bg-ink text-[#E8F0FF] relative overflow-x-hidden flex flex-col">
      <div aria-hidden className="grain pointer-events-none fixed inset-0 z-50" />
      <SiteHeader dark />

      <main className="relative flex-1">
        {/* ===== HERO ===== */}
        <section className="relative max-w-6xl mx-auto px-6 md:px-12 min-h-[100svh] flex items-center pt-28 md:pt-32 pb-20 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-12 items-center w-full">
            <div className="lg:col-span-7 reveal">
              <span className="font-hand text-2xl text-[#82ff00] -rotate-2 inline-block mb-5">
                sin feed, sin atajos, sin trucos
              </span>

              <h1 className="font-display text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.04] tracking-tight mb-7">
                Aprender con{' '}
                <span className="whitespace-nowrap">
                  <span className="relative inline-block">
                    impulso
                    <svg
                      aria-hidden
                      viewBox="0 0 300 24"
                      className="hand-underline absolute left-0 -bottom-3 md:-bottom-4 w-full h-[0.2em] overflow-visible"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M4 14 C 60 20, 120 6, 180 12 S 280 18, 296 10"
                        fill="none"
                        stroke="#82FF00"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[#82ff00]">.</span>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mb-12 md:mb-16">
                Construimos productos educativos donde la inteligencia artificial{' '}
                <span className="text-[#E8F0FF] font-medium">acompaña</span>, no sustituye: la
                usamos para crear un{' '}
                <span className="text-[#E8F0FF] font-medium">círculo virtuoso de aprendizaje</span>{' '}
                en el que el alumno habla, escribe, piensa y aprende explicándose.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#productos"
                  className="group inline-flex items-center bg-[#82ff00] text-black hover:bg-[#6ce600] px-8 py-4 text-lg font-medium rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#82ff00]/20"
                >
                  Conocer nuestros productos
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#manifiesto"
                  className="inline-flex items-center border border-white/20 hover:border-[#82ff00]/60 text-gray-300 hover:text-white px-7 py-4 text-lg rounded-full transition-colors duration-200"
                >
                  Cómo pensamos
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 reveal">
              <DialoguePanel />
            </div>
          </div>
        </section>

        {/* ===== MANIFESTO ===== */}
        <section id="manifiesto" className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6 md:px-12 reveal">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#82ff00] mb-4 block">
              Cómo pensamos
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-16 max-w-3xl">
              Tres principios que nos sostienen.
            </h2>

            <div>
              {[
                {
                  n: '01',
                  title: 'Aprender hablando',
                  text: 'El método socrático no es una nostalgia. Es la prueba de que estructurar el pensamiento en voz alta es la forma más rápida de comprender de verdad.',
                },
                {
                  n: '02',
                  title: 'Tecnología no adictiva',
                  text: 'Nada de scroll infinito ni notificaciones para reenganchar. La sesión termina cuando el alumno ha aprendido, no cuando ha agotado el feed.',
                },
                {
                  n: '03',
                  title: 'El profesor sigue al mando',
                  text: 'La IA no reemplaza al docente. Le da visibilidad, métricas y tiempo. Decide qué practicar, lo configura una vez, y ve cómo entiende cada estudiante.',
                },
              ].map((p) => (
                <div
                  key={p.n}
                  className="group grid md:grid-cols-12 gap-4 md:gap-10 items-baseline border-t border-white/10 py-10 md:py-12"
                >
                  <span className="md:col-span-2 font-display text-5xl md:text-6xl font-extrabold text-[#82ff00]/25 group-hover:text-[#82ff00]/60 transition-colors duration-300">
                    {p.n}
                  </span>
                  <h3 className="md:col-span-4 font-display text-2xl md:text-3xl font-bold">
                    {p.title}
                  </h3>
                  <p className="md:col-span-6 text-gray-400 text-lg leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PRODUCTS ===== */}
        <section id="productos" className="relative py-20 md:py-28">
          <div
            aria-hidden
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-[#82ff00]/5 blur-3xl pointer-events-none"
          />
          <div className="relative max-w-6xl mx-auto px-6 md:px-12">
            <div className="mb-14 md:mb-20 reveal">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#82ff00] mb-4 block">
                Dos productos · una idea
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-5">
                Diálogo en pantalla.
                <br />
                <span className="text-gray-500">Diálogo en papel.</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Dos formatos para el mismo método socrático. Elige el canal que te encaje.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
              {/* SOCRATIC */}
              <Link
                to="/socratic"
                className="group lg:col-span-7 block rounded-2xl border border-white/10 bg-[#0F1621]/50 backdrop-blur-sm p-8 md:p-10 transition-all duration-200 hover:border-[#82ff00]/30 hover:shadow-xl hover:shadow-[#82ff00]/10 reveal"
              >
                <div className="relative h-48 md:h-64 mb-8 rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src="/photos/socwritic-chat.png"
                    alt="Conversación socrática real en la plataforma Socratic"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    style={{ objectPosition: '0% 18%' }}
                    loading="lazy"
                  />
                  <div className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-[#82ff00] bg-ink/80 backdrop-blur-sm rounded-full px-2.5 py-1 border border-[#82ff00]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#82ff00] animate-pulse" />
                    en vivo
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-3xl md:text-4xl font-bold group-hover:text-[#82ff00] transition-colors">
                    Socratic
                  </h3>
                  <span className="text-[11px] font-medium tracking-wide uppercase text-[#82ff00] bg-[#82ff00]/10 rounded-full px-2.5 py-1 mt-2">
                    Disponible
                  </span>
                </div>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                  Plataforma de aprendizaje conversacional. El alumno aprende <em>explicando</em> a
                  un agente que pregunta como Sócrates; el profesor evalúa a escala con informes
                  automáticos por clase.
                </p>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500 mb-6">
                  <span className="inline-flex items-center gap-1.5">
                    <Brain className="w-4 h-4 text-[#82ff00]" /> Efecto protégé
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4 text-[#82ff00]" /> Informes por clase
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 text-[#82ff00] font-semibold text-sm">
                  Conocer Socratic
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* VERA */}
              <Link
                to="/vera"
                className="group lg:col-span-5 block rounded-2xl border border-white/10 bg-[#0F1621]/50 backdrop-blur-sm p-8 md:p-10 transition-all duration-200 hover:border-[#82ff00]/30 hover:shadow-xl hover:shadow-[#82ff00]/10 reveal"
              >
                <div className="relative h-48 md:h-64 mb-8 rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src="/photos/vera-pens-lineup.png"
                    alt="Los bolígrafos Vera en sus tres acabados sobre fondo oscuro"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-3xl md:text-4xl font-bold group-hover:text-[#82ff00] transition-colors">
                    Vera
                  </h3>
                  <span className="text-[11px] font-medium tracking-wide uppercase text-gray-400 bg-white/5 border border-white/10 rounded-full px-2.5 py-1 mt-2">
                    Pronto
                  </span>
                </div>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                  Bolígrafo con tutor socrático por voz. Reconoce lo que el alumno escribe sobre
                  papel y dialoga con él mientras avanza.{' '}
                  <span className="text-[#E8F0FF] font-medium">Sin pantalla.</span>
                </p>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500 mb-6">
                  <span className="inline-flex items-center gap-1.5">
                    <PenLine className="w-4 h-4 text-[#82ff00]" /> Papel + boli
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Mic className="w-4 h-4 text-[#82ff00]" /> Voz natural
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <EyeOff className="w-4 h-4 text-[#82ff00]" /> Cero pantallas
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 text-[#82ff00] font-semibold text-sm">
                  Conocer Vera
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ===== FOR WHOM (marquee) ===== */}
        <section className="py-16 md:py-20 overflow-hidden border-t border-white/10 reveal">
          <div className="max-w-6xl mx-auto px-6 md:px-12 mb-10 text-center">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#82ff00] mb-3 block">
              Quién usa Shearn
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Profesores y centros educativos en España.
            </h2>
          </div>
          <div className="relative">
            <div className="flex marquee-track gap-12 whitespace-nowrap will-change-transform text-gray-500 text-lg md:text-xl font-medium">
              <MarqueeRow />
              <MarqueeRow aria_hidden />
            </div>
          </div>
        </section>

        {/* ===== CONTACT CTA ===== */}
        <section id="contact" className="relative py-24 md:py-32 border-t border-white/10">
          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-[#82ff00]/10 blur-3xl animate-glow-soft pointer-events-none"
          />
          <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center reveal">
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              ¿Quieres probarlo en tu aula?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
              Hablamos sin compromiso. Te enseñamos cómo funciona y te ayudamos a montar tu primer
              diálogo o tu primera sesión con Vera en menos de una semana.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <a
                href="mailto:info@weshearn.com"
                className="inline-flex items-center bg-[#82ff00] text-black hover:bg-[#6ce600] px-8 py-4 text-lg font-medium rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#82ff00]/20"
              >
                <Mail className="mr-2 h-5 w-5" />
                Escríbenos
              </a>
              <Link
                to="/vera#waitlist"
                className="group inline-flex items-center border border-white/20 hover:border-[#82ff00]/60 text-gray-300 hover:text-white px-7 py-4 text-lg rounded-full transition-colors duration-200"
              >
                Apúntate a Vera
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
              <span>Sin compromiso</span>
              <span className="hidden sm:inline text-[#82ff00]">·</span>
              <span>Configuración en 10 min</span>
              <span className="hidden sm:inline text-[#82ff00]">·</span>
              <span>Soporte directo</span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter dark />
    </div>
  );
};

const MarqueeRow: React.FC<{ aria_hidden?: boolean }> = ({ aria_hidden }) => (
  <span className="flex items-center gap-12" aria-hidden={aria_hidden}>
    <span>Profesores de Secundaria</span>
    <span className="text-[#82ff00]">·</span>
    <span>Bachillerato y EvAU</span>
    <span className="text-[#82ff00]">·</span>
    <span>Universidad</span>
    <span className="text-[#82ff00]">·</span>
    <span>Academias y FP</span>
    <span className="text-[#82ff00]">·</span>
    <span>Padres y madres</span>
    <span className="text-[#82ff00]">·</span>
    <span>Editoriales</span>
    <span className="text-[#82ff00]">·</span>
  </span>
);

export default Home;
