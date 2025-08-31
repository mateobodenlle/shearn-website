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
                {HOW_IT_WORKS_STEPS.map((step) => (
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
            Desde el estudiante autodidacta hasta las grandes instituciones educativas.
          </p>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="text-center p-4">
              <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                <svg className="w-full h-full text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                </svg>
              </div>
              <div className="font-semibold text-text mb-1">Aprendizaje dirigido</div>
              <div className="text-sm text-muted">Enfoque en lo que realmente importa</div>
            </div>
            <div className="text-center p-4">
              <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                <svg className="w-full h-full text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
                </svg>
              </div>
              <div className="font-semibold text-text mb-1">Progreso acelerado</div>
              <div className="text-sm text-muted">Feedback inmediato y estructurado</div>
            </div>
            <div className="text-center p-4">
              <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                <svg className="w-full h-full text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="font-semibold text-text mb-1">Conocimiento validado</div>
              <div className="text-sm text-muted">Comprensión verificada con IA</div>
            </div>
          </div>

          {/* B2B Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-card/30 backdrop-blur-sm border border-card/50 rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-500/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent-400/5 to-transparent rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-display font-semibold text-text mb-4">
                También para instituciones
              </h3>
              <p className="text-muted leading-relaxed">
                Socwritic y Certainty se integran naturalmente en currículos universitarios, programas de formación corporativa y métodos pedagógicos tradicionales, potenciando tanto el estudio individual como los procesos educativos institucionales.
              </p>
            </div>
          </motion.div>

          {/* Connecting Visual Element */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
            className="flex justify-center mt-8 mb-4"
          >
            <div className="relative">
              <div className="w-0.5 h-16 bg-gradient-to-b from-accent-500/50 to-transparent"></div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 border border-accent-500/30 rounded-full animate-ping"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;