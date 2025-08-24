import React from 'react';
import { motion } from 'framer-motion';
import { ECOSYSTEM_MODULES } from '../lib/constants';
import { trackExternalLink } from '../lib/analytics';

const Ecosystem: React.FC = () => {
  const handleModuleClick = (module: typeof ECOSYSTEM_MODULES[0]) => {
    if (module.link) {
      trackExternalLink(`Open ${module.title}`, module.link);
      window.open(module.link, '_blank', 'noopener,noreferrer');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-bg to-card/30">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span 
            variants={itemVariants}
            className="text-accent-500 font-semibold text-sm uppercase tracking-wide mb-4 block"
          >
            Nuevo Enfoque
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl lg:text-5xl font-display font-bold text-text mb-6"
          >
            De plataforma a <span className="text-gradient">ecosistema</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted max-w-3xl mx-auto"
          >
            Shearn conecta creadores y estudiantes en un mercado que premia el valor real. 
            Formatos libres, mejora colaborativa y aprendizaje activo con herramientas integradas.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {ECOSYSTEM_MODULES.map((module) => (
            <motion.div
              key={module.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-card/50 rounded-2xl p-8 h-full transition-all duration-300 hover:border-accent-500/30 hover:bg-card/70 card-hover">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  {module.iconType === 'svg' ? (
                    <div className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                      {module.title === 'Marketplace Shearn' && (
                        <svg width="100%" height="100%" viewBox="0 0 267 133" className="text-accent-400 group-hover:scale-110 transition-transform duration-300">
                          <circle cx="133.5" cy="66.5" r="66.5" fill="#FFC107"/>
                          <rect x="57" y="52" width="52" height="8" rx="4" fill="white"/>
                          <rect x="57" y="70" width="76" height="8" rx="4" fill="white"/>
                          <rect x="147" y="58" width="15" height="15" rx="7.5" fill="white"/>
                        </svg>
                      )}
                      {module.title === 'Socwritic' && (
                        <svg width="100%" height="100%" viewBox="0 0 267 133" className="text-accent-500 group-hover:scale-110 transition-transform duration-300">
                          <rect x="66.5" y="16.5" width="134" height="100" rx="8" fill="#00AAFF"/>
                          <rect x="85" y="35" width="52" height="8" rx="4" fill="white"/>
                          <rect x="85" y="50" width="76" height="8" rx="4" fill="white"/>
                          <rect x="85" y="75" width="15" height="15" rx="7.5" fill="white"/>
                        </svg>
                      )}
                      {module.title === 'Certainty' && (
                        <svg width="100%" height="100%" viewBox="0 0 267 133" className="text-accent-300 group-hover:scale-110 transition-transform duration-300">
                          <circle cx="133.5" cy="66.5" r="66.5" fill="#FFAC00"/>
                          <rect x="95" y="52" width="52" height="8" rx="4" fill="white"/>
                          <rect x="95" y="70" width="25" height="8" rx="4" fill="white"/>
                          <rect x="95" y="35" width="15" height="15" rx="2" fill="white"/>
                        </svg>
                      )}
                    </div>
                  ) : (
                    <div className="text-5xl">{module.icon}</div>
                  )}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-display font-semibold text-text mb-4 group-hover:text-accent-500 transition-colors duration-300">
                    {module.title}
                  </h3>
                  <p className="text-muted mb-6 leading-relaxed">
                    {module.description}
                  </p>

                  {/* CTA Button */}
                  {module.link && (
                    <motion.button
                      onClick={() => handleModuleClick(module)}
                      className="btn-secondary text-sm px-6 py-2 group-hover:border-accent-500 group-hover:text-accent-500"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Abrir {module.title.split(' ')[0]}
                    </motion.button>
                  )}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted text-lg mb-8">
            Cada módulo funciona independientemente pero se potencia en conjunto
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm text-muted">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
              <span>Interoperabilidad completa</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
              <span>Datos compartidos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-300 rounded-full"></div>
              <span>Experiencia unificada</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ecosystem;