import React from 'react';
import { motion } from 'framer-motion';
import { HOW_IT_WORKS_STEPS } from '../lib/constants';

const HowItWorks: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, delay: 0.5, ease: "easeInOut" }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-card/20 to-bg">
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
            Cómo Funciona
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl lg:text-5xl font-display font-bold text-text mb-6"
          >
            Tres pasos hacia el <span className="text-gradient">aprendizaje activo</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted max-w-3xl mx-auto"
          >
            Un proceso simple pero poderoso que transforma cómo aprendemos y enseñamos.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="relative"
            >
              {/* Connecting Lines */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none" 
                style={{ top: '40%' }}
              >
                <motion.path
                  d="M 25% 50% Q 37.5% 30%, 50% 50% T 75% 50%"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  variants={lineVariants}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(124, 255, 77, 0.3)" />
                    <stop offset="50%" stopColor="rgba(124, 255, 77, 0.6)" />
                    <stop offset="100%" stopColor="rgba(124, 255, 77, 0.3)" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Steps */}
              <div className="grid grid-cols-3 gap-8 relative z-10">
                {HOW_IT_WORKS_STEPS.map((step, index) => (
                  <motion.div
                    key={step.step}
                    variants={itemVariants}
                    className="text-center group"
                  >
                    {/* Step Number */}
                    <div className="relative inline-flex items-center justify-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-accent-500/25 transition-all duration-300">
                        <span className="text-2xl font-bold text-black">
                          {step.step}
                        </span>
                      </div>
                      {/* Pulse effect */}
                      <div className="absolute inset-0 bg-accent-500 rounded-full opacity-0 group-hover:opacity-20 animate-ping"></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-display font-semibold text-text group-hover:text-accent-500 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted leading-relaxed group-hover:text-text/90 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="space-y-12"
            >
              {HOW_IT_WORKS_STEPS.map((step, index) => (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className="flex items-start space-x-6 group"
                >
                  {/* Step Number */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-accent-500/25 transition-all duration-300">
                      <span className="text-xl font-bold text-black">
                        {step.step}
                      </span>
                    </div>
                    {/* Connecting line (except for last item) */}
                    {index < HOW_IT_WORKS_STEPS.length - 1 && (
                      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-accent-500/50 to-transparent"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg font-display font-semibold text-text group-hover:text-accent-500 transition-colors duration-300 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted leading-relaxed group-hover:text-text/90 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-card/30"
        >
          <p className="text-muted text-lg mb-8">
            Tu participación activa es reconocida y recompensada por la comunidad.
          </p>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4">
              <div className="text-2xl mb-2">🎯</div>
              <div className="font-semibold text-text mb-1">Aprendizaje dirigido</div>
              <div className="text-sm text-muted">Enfoque en lo que realmente importa</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl mb-2">🚀</div>
              <div className="font-semibold text-text mb-1">Progreso acelerado</div>
              <div className="text-sm text-muted">Feedback inmediato y estructurado</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl mb-2">💡</div>
              <div className="font-semibold text-text mb-1">Valor reconocido</div>
              <div className="text-sm text-muted">Recompensas por contribuir</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;