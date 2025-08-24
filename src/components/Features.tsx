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
            Construido para <span className="text-gradient">maximizar valor</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted max-w-3xl mx-auto"
          >
            Nuestro algoritmo recomienda lo que te ayuda a aprender mejor, 
            no lo que consume más tiempo de pantalla.
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
                  <div className="text-4xl mb-6">
                    {feature.icon}
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
            La comunidad también gana cuando aporta: comentarios útiles, mejoras y curación de contenido.
          </p>
          
          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">100%</div>
              <div className="text-muted text-sm">Transparencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">0%</div>
              <div className="text-muted text-sm">Comisiones ocultas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-muted text-sm">Disponibilidad</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;