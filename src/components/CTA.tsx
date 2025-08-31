import React from 'react';
import { motion } from 'framer-motion';
import { LINKS } from '../lib/constants';
import { trackCTA, trackExternalLink } from '../lib/analytics';

const CTA: React.FC = () => {
  const handleDemoClick = () => {
    trackCTA('Ver Demo', 'cta-final');
    window.open(LINKS.demo, '_blank', 'noopener,noreferrer');
  };

  const handleContactClick = () => {
    trackCTA('Contactar', 'cta-final');
    window.open(LINKS.contact, '_blank', 'noopener,noreferrer');
  };

  const handleWhitepaperClick = () => {
    trackExternalLink('Whitepaper', LINKS.whitepaper);
    window.open(LINKS.whitepaper, '_blank', 'noopener,noreferrer');
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
    <section className="section-padding bg-gradient-to-b from-card/20 to-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto container-padding">
        {/* Final CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-text mb-6">
              Empecemos
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-12">
              Únete al ecosistema que está redefiniendo cómo aprendemos, enseñamos y creamos valor juntos.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16"
          >
            <motion.button
              onClick={handleDemoClick}
              className="btn-primary text-xl px-10 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver demo
            </motion.button>
            
            <motion.button
              onClick={handleContactClick}
              className="btn-secondary text-xl px-10 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactar
            </motion.button>
          </motion.div>

          {/* Additional Info */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 text-muted text-sm"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
              <span>Demo disponible 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
              <span>Configuración en minutos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-300 rounded-full"></div>
              <span>Soporte personalizado</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;