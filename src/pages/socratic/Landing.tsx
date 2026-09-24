import React, { useEffect } from 'react';
import { Button } from '../../components/ui/Button';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { useReveal } from '../../hooks/useReveal';
import { Brain, MessageCircle, PenTool, ChevronRight, Users, BarChart3, BookOpen } from 'lucide-react';

const Landing: React.FC = () => {
  useEffect(() => {
    document.title = 'Socratic · Aprende explicando.';
  }, []);
  useReveal();

  const features = [
    {
      title: 'Efecto protégé',
      description: 'Aprendes explicando conceptos al agente. Al estructurar tu conocimiento, identificas lagunas y comprendes mejor.',
      icon: <MessageCircle className="h-6 w-6 text-[#82ff00]" />,
    },
    {
      title: 'Método socrático',
      description: 'El agente guía mediante preguntas dirigidas que estimulan el pensamiento crítico, sin dar respuestas directas.',
      icon: <Brain className="h-6 w-6 text-[#82ff00]" />,
    },
    {
      title: 'Análisis automático',
      description: 'Informes detallados por clase. El sistema señala lagunas de comprensión de forma escalable.',
      icon: <PenTool className="h-6 w-6 text-[#82ff00]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />

      <main className="relative flex-1">
        {/* ===== HERO ===== */}
        <section className="pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-center reveal">
            <img
              src="/shearn-symbol.svg"
              alt=""
              aria-hidden="true"
              className="h-14 md:h-16 w-auto mx-auto mb-4"
            />

            <h1 className="font-display text-6xl md:text-8xl font-bold text-gray-900 tracking-tight mb-6 leading-[0.95]">
              <span className="gradient-text-lime">Socratic</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-4">
              Plataforma de aprendizaje conversacional con método socrático.
            </p>
            <p className="text-base text-gray-400 max-w-xl mx-auto leading-relaxed mb-10">
              El alumno aprende explicando; el profesor evalúa a escala.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
              <Button className="group bg-[#82ff00] text-black hover:bg-[#6ce600] px-8 py-4 text-lg rounded-full flex items-center transition-colors duration-200" disabled title="Disponible próximamente">
                Crear cuenta
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="card rounded-2xl overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100 bg-gray-50">
                  <span className="w-3 h-3 rounded-full bg-red-300" />
                  <span className="w-3 h-3 rounded-full bg-amber-300" />
                  <span className="w-3 h-3 rounded-full bg-green-300" />
                  <span className="ml-3 text-xs text-gray-400">
                    app.shearn.es · Fotosíntesis · Demo
                  </span>
                </div>
                <img
                  src="/photos/socwritic-chat.png"
                  alt="Conversación socrática real en la plataforma Socratic"
                  className="block w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className="section-alt py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-14 reveal">
              <span className="eyebrow mb-3 block">Tres principios. Un método.</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Cómo funciona <span className="gradient-text-lime">Socratic</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="card rounded-[1.5rem] p-8 reveal">
                  <div className="w-14 h-14 rounded-2xl bg-[#82ff00]/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BENEFITS — asymmetric ===== */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-14 reveal">
              <span className="eyebrow mb-3 block">Dos perspectivas. Un mismo diálogo.</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Para estudiantes y profesores
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
              {/* Large card — dark for contrast */}
              <div className="lg:col-span-7 reveal">
                <div className="card-dark rounded-[1.5rem] p-10 h-full flex flex-col">
                  <div className="mb-6">
                    <BookOpen className="h-8 w-8 text-[#82ff00]" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-white mb-4">Aprendizaje activo</h3>
                  <p className="text-gray-400 text-lg leading-relaxed flex-1">
                    Reestructura tu conocimiento explicando conceptos al agente. El sistema te desafía con
                    preguntas que revelan lagunas y fortalecen tu dominio del tema.
                  </p>
                  <div className="mt-8">
                    <Button className="bg-[#82ff00] text-black hover:bg-[#6ce600] rounded-full px-6 py-3 transition-colors duration-200" disabled title="Disponible próximamente">
                      Registrarse como estudiante
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Stacked smaller cards */}
              <div className="lg:col-span-5 space-y-6 lg:space-y-8">
                <div className="card rounded-[1.5rem] p-8 reveal">
                  <div className="mb-4">
                    <Users className="h-7 w-7 text-[#82ff00]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Evaluación eficiente</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    Configura agentes conversacionales por tema y asígnalos a tus estudiantes. El sistema
                    evalúa la comprensión automáticamente.
                  </p>
                  <Button variant="outline" className="rounded-full px-4 py-2 text-sm transition-colors duration-200" disabled title="Disponible próximamente">
                    Registrarse como profesor
                  </Button>
                </div>

                <div className="card rounded-[1.5rem] p-8 reveal">
                  <div className="mb-4">
                    <BarChart3 className="h-7 w-7 text-[#82ff00]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Informes escalables</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    Análisis del entendimiento de toda una clase. El sistema identifica patrones y lagunas
                    a gran escala.
                  </p>
                  <Button variant="outline" className="rounded-full px-4 py-2 text-sm transition-colors duration-200" disabled title="Disponible próximamente">
                    Ver más
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="section-alt py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6 md:px-12 text-center reveal">
            <span className="eyebrow text-[#5AA300] mb-4 block">Empieza hoy</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Crea tu primera sesión socrática en cinco minutos.
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mb-10">
              Registro gratuito. Configura un tema, asígnalo a tu clase, y ve cómo razonan tus alumnos.
            </p>
            <Button className="group bg-[#82ff00] text-black hover:bg-[#6ce600] px-8 py-4 text-lg rounded-full flex items-center mx-auto transition-colors duration-200" disabled title="Disponible próximamente">
              Crear cuenta
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Landing;
