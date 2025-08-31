import { motion } from 'framer-motion';
import { FEATURES } from '../lib/constants';

const Features: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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

  return (
    <section className="section-padding bg-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto container-padding">
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
            Características Clave
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl lg:text-5xl font-display font-bold text-text mb-6"
          >
            Diseñado para el <span className="text-gradient">aprendizaje real</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted max-w-3xl mx-auto"
          >
            Herramientas que priorizan tu comprensión y crecimiento intelectual, 
            adaptándose a tu proceso único de aprendizaje.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-card/30 backdrop-blur-sm border border-card/30 rounded-2xl p-8 h-full transition-all duration-500 hover:border-accent-500/30 hover:bg-card/50 card-hover overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 mb-6 flex items-center justify-center">
                    {feature.icon === 'pen' && (
                      <svg className="w-full h-full text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                      </svg>
                    )}
                    {feature.icon === 'brain' && (
                      <svg className="w-full h-full text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    )}
                    {feature.icon === 'target' && (
                      <svg className="w-full h-full text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                      </svg>
                    )}
                    {feature.icon === 'building' && (
                      <svg className="w-full h-full text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                      </svg>
                    )}
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-display font-semibold text-text mb-4 group-hover:text-accent-500 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed group-hover:text-text/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/10 via-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100"></div>
                
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent-600/20 to-accent-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted text-lg mb-8">
            Potencia tu aprendizaje con herramientas diseñadas para la comprensión profunda y el crecimiento intelectual.
          </p>
          
          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-muted text-sm">Disponibilidad</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">∞</div>
              <div className="text-muted text-sm">Adaptabilidad</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">2</div>
              <div className="text-muted text-sm">Herramientas activas</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;