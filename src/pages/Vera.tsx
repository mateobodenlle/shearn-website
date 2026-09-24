import React, { useEffect } from 'react';
import {
  PenLine,
  ChevronRight,
  Lock,
  EyeOff,
  Ear,
  MessagesSquare,
  Plus,
  ShieldCheck,
  MailX,
  MapPin,
  GraduationCap,
  Presentation,
  Building2,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import WaitlistForm from '../components/WaitlistForm';
import { useReveal } from '../hooks/useReveal';

const Vera: React.FC = () => {
  useEffect(() => {
    document.title = 'Vera · El bolígrafo que enseña hablando.';
  }, []);
  useReveal();

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden flex flex-col text-gray-900">
      <SiteHeader />

      <main className="relative flex-1">
        {/* ===== HERO ===== */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-20 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 reveal">
              <p className="font-hand text-2xl text-[#5AA300] -rotate-2 inline-block mb-6 -ml-5 md:-ml-10">
                Nuevo · Cierre privado de unidades · 2026
              </p>

              <h1 className="leading-[0.95]">
                <span className="block font-display text-6xl md:text-8xl lg:text-9xl font-bold gradient-text-lime tracking-tight">
                  Vera
                </span>
                <span className="block mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                  El bolígrafo que{' '}
                  <span className="relative inline-block">
                    enseña hablando
                    <svg
                      aria-hidden
                      viewBox="0 0 300 24"
                      className="hand-underline absolute left-0 -bottom-1 md:-bottom-2 w-full h-[0.2em] overflow-visible"
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
                  .
                </span>
              </h1>

              <p className="mt-8 text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed">
                Un bolígrafo con tutor socrático multimodal por voz. Reconoce lo que el alumno escribe
                sobre <strong className="text-gray-900">papel real</strong> y dialoga con él mientras
                aprende. Sin pantallas, sin notificaciones, sin distracciones.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#waitlist">
                  <Button className="group bg-[#82ff00] text-black hover:bg-[#6ce600] px-8 py-4 text-lg rounded-full flex items-center transition-colors duration-200">
                    Apuntarme
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="#how">
                  <Button variant="outline" className="px-7 py-4 text-lg rounded-full transition-colors duration-200">
                    Ver cómo funciona
                  </Button>
                </a>
              </div>

              <p className="mt-6 text-sm text-gray-400 flex items-center gap-2">
                <Lock className="w-3.5 h-3.5" />
                Lista privada. Sin spam, te avisamos solo cuando podamos enviarte una unidad.
              </p>
            </div>

            <div className="lg:col-span-5 relative reveal">
              <div className="relative rounded-[1.5rem] overflow-hidden border border-gray-200 aspect-[4/5] max-w-md mx-auto">
                <img
                  src="/photos/vera-hero.jpg"
                  alt="Alumna resolviendo una integral a mano mientras el móvil muestra Shearn"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: '45% 45%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 pointer-events-none" />

                <div className="absolute left-4 right-4 bottom-4 flex">
                  <div className="rounded-2xl bg-white shadow-lg border border-gray-100 px-4 py-3 max-w-[90%]">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5AA300]">
                        Vera
                      </span>
                      <span className="inline-flex items-end gap-0.5 h-3">
                        {[2, 3, 2.5, 3, 2].map((h, i) => (
                          <span
                            key={i}
                            className="wave-bar w-0.5 bg-[#82ff00] rounded"
                            style={{ height: `${h * 4}px`, animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </span>
                    </div>
                    <p className="text-sm text-gray-800 leading-snug">
                      Bien. ¿Y si la ecuación fuera <em>x²+y²=4</em>, qué cambiaría?
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute -top-5 -right-4 bg-white rounded-2xl shadow-lg border border-gray-200 px-4 py-3 max-w-[180px]">
                <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                  Sin distracciones
                </div>
                <div className="text-xl font-bold text-gray-900">0</div>
                <div className="text-xs text-gray-400 mt-0.5">pantallas y notificaciones</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SIN PANTALLA — DARK SECTION ===== */}
        <section className="section-dark py-20 md:py-28 reveal">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-2 bg-[#82ff00]/10 text-[#82ff00] rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-5">
                  <EyeOff className="w-3.5 h-3.5" />
                  Sin pantalla
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-6">
                  Aprender no debería competir con TikTok.
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-5">
                  Vera no tiene pantalla. No tiene scroll. No tiene likes. No tiene notificaciones.
                  No interrumpe la concentración del alumno, porque el alumno está mirando lo único
                  que importa:{' '}
                  <span className="font-semibold text-white">
                    su propio razonamiento sobre el papel.
                  </span>
                </p>
                <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
                  Cuando termina la sesión, no hay nada que reabrir, ningún feed que actualizar,
                  ninguna dopamina pendiente. Solo lo aprendido, en la libreta de siempre.
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
                  <img
                    src="/photos/vera-concentrated.jpg"
                    alt="Alumna concentrada resolviendo ejercicios a mano, sin pantallas"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: '50% 35%' }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
              <Stat value="0" label="notificaciones" />
              <Stat value="0" label="pantallas" />
              <Stat value="∞" label="páginas posibles" />
              <Stat value="1" accent label="conversación a la vez" />
            </div>
          </div>
        </section>

        {/* ===== CÓMO FUNCIONA ===== */}
        <section id="how" className="section-alt py-20 md:py-28 reveal">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12 md:mb-16">
              <span className="eyebrow mb-3 block">Cómo funciona</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-4">
                Tres gestos. Cero fricción.
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                El alumno escribe como siempre. Vera escucha, mira y devuelve la pregunta correcta.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              <Step
                num="01"
                icon={<PenLine className="w-5 h-5 text-[#82ff00]" />}
                title="El alumno escribe"
                body="Como toda la vida. Con su libreta, su boli (el de Vera) y sus propias palabras. La cámara de la punta lee la escritura en tiempo real."
              >
                <div className="rounded-xl h-28 relative overflow-hidden border border-gray-200">
                  <img
                    src="/photos/vera-writing.jpg"
                    alt="Mano escribiendo con el bolígrafo Vera"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: '50% 60%' }}
                    loading="lazy"
                  />
                </div>
              </Step>
              <Step
                num="02"
                icon={<Ear className="w-5 h-5 text-[#82ff00]" />}
                title="Vera lee y escucha"
                body="OCR para lo que escribe y reconocimiento de voz para lo que dice en voz alta. Un modelo multimodal lo cruza todo y entiende dónde está el alumno."
              >
                <div className="rounded-xl h-28 bg-gray-50 border border-gray-200 p-3 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>Escuchando…</span>
                  </div>
                  <div className="flex items-end gap-0.5 h-12 w-full">
                    {[4, 7, 10, 6, 11, 8, 5, 9, 11, 6, 8, 4, 10, 7, 5, 9, 11, 7, 4, 8, 10, 6, 9, 5, 11, 7, 4, 8].map(
                      (h, i) => (
                        <span
                          key={i}
                          className="flex-1 bg-[#82ff00] rounded-sm wave-bar"
                          style={{ height: `${h * 4}px`, animationDelay: `${i * 0.08}s` }}
                        />
                      )
                    )}
                  </div>
                </div>
              </Step>
              <Step
                num="03"
                icon={<MessagesSquare className="w-5 h-5 text-[#82ff00]" />}
                title="Pregunta, no responde"
                body="Vera nunca da la solución hecha. Devuelve la pregunta que destapa la laguna y guía al alumno hasta que él mismo la cierra."
              >
                <div className="rounded-xl h-28 bg-gray-50 border border-gray-200 p-3 flex flex-col justify-center gap-2.5">
                  <div className="flex items-start gap-2">
                    <span className="min-w-[2.4rem] pt-0.5 text-[9px] font-bold tracking-[0.08em] uppercase text-[#3f8a00]">
                      Vera
                    </span>
                    <span className="text-xs leading-snug text-gray-900">
                      ¿Y si el sujeto fuera el «verbo», qué pasaría con el plural?
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="min-w-[2.4rem] text-[9px] font-bold tracking-[0.08em] uppercase text-gray-400">
                      Alumno
                    </span>
                    <span className="text-xs italic text-gray-500">Ah, claro…</span>
                  </div>
                </div>
              </Step>
            </div>
          </div>
        </section>

        {/* ===== QUÉ RECONOCE ===== */}
        <section className="py-20 md:py-28 reveal">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <span className="eyebrow mb-3 block">Qué reconoce</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-5">
                  Letra, fórmulas, esquemas.
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-6">
                  Vera está entrenada sobre miles de horas de cuadernos reales: los buenos, los
                  regulares y los que parecen jeroglíficos. Funciona en castellano y en gallego, y
                  aprende del alumno con el uso.
                </p>
                <ul className="space-y-3 text-gray-600">
                  {[
                    'Texto manuscrito y mecanografiado.',
                    'Fórmulas matemáticas y químicas (LaTeX interno).',
                    'Diagramas, flechas, esquemas básicos.',
                    'Voz natural en castellano y gallego.',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#82ff00] rounded-full mt-2.5 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-7 relative">
                <div className="relative h-[26rem]">
                  <RecogPhoto
                    className="top-2 left-2 w-3/4 h-3/4 rotate-[-6deg]"
                    src="/photos/recog-math.jpg"
                    position="50% 45%"
                    label="Fórmulas"
                    alt="Fórmula matemática manuscrita reconocida por Vera"
                  />
                  <RecogPhoto
                    className="top-10 right-2 w-3/5 h-3/4 rotate-[7deg]"
                    src="/photos/recog-diagrams.jpg"
                    position="50% 50%"
                    label="Esquemas"
                    alt="Diagrama y esquema dibujado a mano"
                  />
                  <RecogPhoto
                    className="bottom-0 left-1/4 w-3/5 h-3/4 rotate-[-2deg]"
                    src="/photos/recog-language.jpg"
                    position="45% 60%"
                    label="Texto"
                    alt="Texto manuscrito en apuntes"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PARA QUIÉN ===== */}
        <section className="section-alt py-20 md:py-28 reveal">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <span className="eyebrow mb-3 block">Para quién</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 leading-[1.05] tracking-tight">
                Pensada para deberes, útil en clase.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Audience
                icon={<GraduationCap className="w-6 h-6 text-[#82ff00]" />}
                title="Alumnado 12-20"
                body="Secundaria, bachillerato y EvAU. Especialmente en asignaturas que requieren razonamiento: matemáticas, física, lengua, filosofía."
              />
              <Audience
                icon={<Presentation className="w-6 h-6 text-[#82ff00]" />}
                title="Profesorado"
                body="El profesor configura el guion socrático una vez. Vera lo aplica a cada alumno y devuelve un informe del trabajo en casa."
              />
              <Audience
                icon={<Building2 className="w-6 h-6 text-[#82ff00]" />}
                title="Centros y academias"
                body="Programas piloto institucionales con licencias por curso, soporte y datos agregados anónimos por aula."
              />
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-20 md:py-28 reveal">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <div className="text-center mb-10">
              <span className="eyebrow mb-3 block">Dudas frecuentes</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Lo que nos preguntan más
              </h2>
            </div>
            <div className="space-y-3">
              <Faq q="¿Necesita conexión a internet?" a="Sí, una conexión wifi básica o un punto de acceso del móvil del adulto. El procesamiento pesado va a servidor; el alumno no necesita pantalla en ningún momento." />
              <Faq q="¿Funciona con cualquier papel?" a="Necesita un papel propio con micrograbados que Vera usa para situar la escritura con precisión. Es muy barato y va incluido en la suscripción de Vera, así que no tienes que comprarlo aparte." />
              <Faq q="¿Qué pasa con los datos del alumno?" a="El contenido manuscrito y las conversaciones quedan asociadas a la cuenta del centro o tutor. Cumplimos RGPD y LOPDGDD. No se usan datos del alumno para entrenar modelos generales." />
              <Faq q="¿Cuándo estará disponible?" a="Primeras unidades para programas piloto a lo largo de 2026. La lista de espera es por orden de inscripción y tendrá prioridad para academias y centros." />
            </div>
          </div>
        </section>

        {/* ===== WAITLIST ===== */}
        <section id="waitlist" className="section-alt py-20 md:py-28 reveal">
          <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-5">
              Únete a la lista de espera.
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
              Te avisamos en cuanto haya unidades disponibles. Sin spam, sin venta de datos: un
              solo email cuando estemos listos.
            </p>

            <p className="mb-2">
              <span className="font-display text-4xl font-bold text-gray-900">89 €</span>
              <span className="text-sm text-gray-500"> IVA incluido</span>
              <span className="block text-gray-500 mt-1">+ suscripción de 30 €/mes</span>
            </p>
            <ul className="mb-10 space-y-1 text-sm text-gray-600">
              {WAITLIST_CONDITIONS.map((c) => <li key={c}>{c}</li>)}
            </ul>

            <WaitlistForm />

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#82ff00]" /> RGPD-compliant
              </span>
              <span className="inline-flex items-center gap-2">
                <MailX className="w-4 h-4 text-[#82ff00]" /> Cero correos comerciales
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#82ff00]" /> Hecho en Galicia
              </span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

const Stat: React.FC<{ value: string; label: string; accent?: boolean }> = ({ value, label, accent }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
    <div className={`text-3xl font-bold ${accent ? 'text-[#82ff00]' : 'text-white'}`}>{value}</div>
    <div className="text-sm text-gray-500 mt-0.5">{label}</div>
  </div>
);

const Step: React.FC<{
  num: string;
  icon: React.ReactNode;
  title: string;
  body: string;
  children: React.ReactNode;
}> = ({ num, icon, title, body, children }) => (
  <div className="card rounded-[1.5rem] p-7 md:p-8">
    <div className="flex items-center justify-between mb-5">
      <div className="w-12 h-12 rounded-2xl bg-[#82ff00]/10 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-4xl font-bold text-gray-200">{num}</span>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 leading-relaxed mb-5">{body}</p>
    {children}
  </div>
);

const Audience: React.FC<{ icon: React.ReactNode; title: string; body: string }> = ({ icon, title, body }) => (
  <div className="card rounded-[1.5rem] p-7">
    <div className="w-12 h-12 rounded-2xl bg-[#82ff00]/10 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{body}</p>
  </div>
);

const RecogPhoto: React.FC<{
  className?: string;
  src: string;
  position: string;
  label: string;
  alt: string;
}> = ({ className, src, position, label, alt }) => (
  <div className={`absolute rounded-2xl border border-gray-200 overflow-hidden bg-white ${className ?? ''}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      style={{ objectPosition: position }}
      loading="lazy"
    />
    <span className="absolute left-3 bottom-3 text-[11px] font-semibold tracking-wide uppercase text-white bg-black/50 rounded-full px-2.5 py-1">
      {label}
    </span>
  </div>
);

const Faq: React.FC<{ q: string; a: string }> = ({ q, a }) => (
  <details className="group card rounded-2xl px-6 py-4 cursor-pointer">
    <summary className="flex items-center justify-between gap-4 list-none">
      <span className="font-semibold text-gray-900">{q}</span>
      <Plus className="w-4 h-4 text-gray-400 group-open:rotate-45 transition-transform" />
    </summary>
    <p className="mt-3 text-gray-500 leading-relaxed">{a}</p>
  </details>
);

const WAITLIST_CONDITIONS = [
  'Apuntarte no te compromete a nada.',
  'En cuanto esté disponible te escribimos: pagas y te lo enviamos.',
  'Envío en una semana a toda España.',
];

export default Vera;
