import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_PROOF } from '../lib/constants';

const SocialProof: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-bg to-card/20">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Trusted By Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p 
            variants={itemVariants}
            className="text-muted text-sm uppercase tracking-wide mb-8"
          >
            Confianza de instituciones líderes
          </motion.p>
          
          <div className="flex items-center justify-center space-x-8 lg:space-x-12 opacity-60">
            {SOCIAL_PROOF.logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                variants={logoVariants}
                className="flex items-center justify-center h-12 lg:h-16"
              >
                <div className="bg-muted/20 rounded-lg px-6 py-3 text-muted font-semibold text-sm">
                  {logo.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wide mb-4 block">
              Lo que dicen nuestros usuarios
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text">
              Transformando la <span className="text-gradient">educación</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SOCIAL_PROOF.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="relative bg-card/50 backdrop-blur-sm border border-card/30 rounded-2xl p-8 h-full group-hover:border-accent-500/30 group-hover:bg-card/70 transition-all duration-300">
                  {/* Quote Icon */}
                  <div className="text-accent-500/30 mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-text text-lg leading-relaxed mb-6 group-hover:text-text/90 transition-colors duration-300">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-text group-hover:text-accent-500 transition-colors duration-300">
                        {testimonial.author}
                      </div>
                      <div className="text-muted text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-card/30 backdrop-blur-sm border border-card/30 rounded-2xl p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <motion.div 
                  className="text-4xl lg:text-5xl font-bold text-gradient mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  95%
                </motion.div>
                <div className="text-muted">
                  Satisfacción de usuarios
                </div>
              </div>
              
              <div className="text-center">
                <motion.div 
                  className="text-4xl lg:text-5xl font-bold text-gradient mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  3x
                </motion.div>
                <div className="text-muted">
                  Velocidad de aprendizaje
                </div>
              </div>
              
              <div className="text-center">
                <motion.div 
                  className="text-4xl lg:text-5xl font-bold text-gradient mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  50+
                </motion.div>
                <div className="text-muted">
                  Instituciones activas
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-card/30">
              <p className="text-muted text-sm">
                Datos basados en estudios piloto realizados entre enero y julio de 2024
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;