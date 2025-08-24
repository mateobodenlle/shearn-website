import React from 'react';
import { motion } from 'framer-motion';
import { ECOSYSTEM_MODULES } from '../lib/constants';
import { trackCTA, trackExternalLink } from '../lib/analytics';

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
          {ECOSYSTEM_MODULES.map((module, index) => (
            <motion.div
              key={module.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-card/50 rounded-2xl p-8 h-full transition-all duration-300 hover:border-accent-500/30 hover:bg-card/70 card-hover">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  {module.iconType === 'svg' ? (
                    <img 
                      src={module.icon} 
                      alt={module.title}
                      className="w-16 h-16 object-contain filter group-hover:scale-110 transition-transform duration-300"
                    />
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