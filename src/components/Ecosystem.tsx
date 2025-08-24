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
                    <div className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {module.title === 'Marketplace Shearn' && (
                        <svg width="100%" height="100%" viewBox="3200 1800 4000 3000" className="filter brightness-110">
                          <g transform="matrix(5.55556,0,0,5.55556,0,0)">
                            <g transform="matrix(1,0,0,1,714.204,15.6553)">
                              <path d="M519.434,370.227L640.929,490.95C659.494,509.397 659.494,539.35 640.93,557.797L519.434,678.521C500.869,696.968 470.725,696.968 452.16,678.521L330.665,557.797C312.1,539.351 312.1,509.398 330.665,490.951L452.161,370.227C470.725,351.78 500.869,351.78 519.434,370.227ZM567.268,504.018C565.667,502.437 563.074,502.445 561.482,504.036L543.916,521.603C542.324,523.195 542.332,525.771 543.934,527.353L561.612,544.807C563.214,546.389 565.807,546.38 567.398,544.789L584.965,527.222C586.557,525.63 586.548,523.054 584.947,521.473L567.268,504.018ZM409.982,503.73C408.486,502.254 406.066,502.262 404.58,503.747L386.63,521.698C385.144,523.184 385.152,525.588 386.647,527.065L404.711,544.9C406.207,546.377 408.627,546.369 410.113,544.883L428.063,526.933C429.549,525.447 429.541,523.042 428.046,521.566L409.982,503.73ZM527.924,464.633C526.32,463.049 523.723,463.057 522.129,464.651L426.082,560.698C424.488,562.292 424.496,564.872 426.101,566.456L443.77,583.902C445.374,585.486 447.971,585.477 449.565,583.883L545.612,487.836C547.206,486.242 547.198,483.662 545.593,482.078L527.924,464.633Z" fill="#82FF00"/>
                            </g>
                          </g>
                        </svg>
                      )}
                      {module.title === 'Socwritic' && (
                        <svg width="100%" height="100%" viewBox="3400 1800 4000 3200" className="filter brightness-110">
                          <g transform="matrix(5.55556,0,0,5.55556,0,0)">
                            <g transform="matrix(1,0,0,1,697.559,32.2144)">
                              <path d="M635.163,422.578L635.709,593.852C635.792,620.023 614.612,641.203 588.442,641.12L417.166,640.574C390.995,640.491 369.68,619.175 369.597,593.004L369.051,421.73C368.968,395.559 390.148,374.379 416.318,374.462L587.594,375.008C613.765,375.091 635.08,396.407 635.163,422.578ZM574.383,551.006C574.368,548.755 572.529,546.928 570.278,546.928L545.435,546.928C543.184,546.928 541.368,548.755 541.383,551.006L541.541,575.849C541.555,578.1 543.394,579.927 545.645,579.927L570.488,579.927C572.739,579.927 574.555,578.1 574.541,575.849L574.383,551.006ZM574.412,495.336C574.397,493.081 572.555,491.251 570.301,491.251L434.47,491.251C432.216,491.251 430.397,493.081 430.412,495.336L430.57,520.166C430.584,522.42 432.426,524.25 434.681,524.25L570.511,524.25C572.766,524.25 574.584,522.42 574.57,520.166L574.412,495.336ZM463.368,439.584C463.354,437.483 461.638,435.777 459.536,435.777L434.15,435.777C432.049,435.777 430.354,437.483 430.368,439.584L430.529,464.969C430.543,467.07 432.26,468.776 434.361,468.776L459.747,468.776C461.848,468.776 463.543,467.07 463.529,464.969L463.368,439.584Z" fill="#00AAFF"/>
                            </g>
                          </g>
                        </svg>
                      )}
                      {module.title === 'Certainty' && (
                        <svg width="100%" height="100%" viewBox="3800 1800 3000 3000" className="filter brightness-110">
                          <g transform="matrix(5.55556,0,0,5.55556,0,0)">
                            <g transform="matrix(6.12323e-17,-1,1,6.12323e-17,692.35,1042.13)">
                              <path d="M502.113,374.51C575.545,374.51 635.161,434.12 635.161,507.542C635.161,580.964 575.545,640.573 502.113,640.573C428.682,640.573 369.065,580.964 369.065,507.542C369.065,434.12 428.682,374.51 502.113,374.51ZM574.412,495.336C574.397,493.081 572.555,491.251 570.301,491.251L434.47,491.251C432.216,491.251 430.397,493.081 430.412,495.336L430.57,520.166C430.584,522.42 432.426,524.25 434.681,524.25L570.511,524.25C572.766,524.25 574.584,522.42 574.57,520.166L574.412,495.336ZM574.383,551.006C574.368,548.755 572.529,546.928 570.278,546.928L545.435,546.928C543.184,546.928 541.368,548.755 541.383,551.006L541.541,575.849C541.555,578.1 543.394,579.927 545.645,579.927L570.488,579.927C572.739,579.927 574.555,578.1 574.541,575.849L574.383,551.006ZM463.368,439.584C463.354,437.483 461.638,435.777 459.536,435.777L434.15,435.777C432.049,435.777 430.354,437.483 430.368,439.584L430.529,464.969C430.543,467.07 432.26,468.776 434.361,468.776L459.747,468.776C461.848,468.776 463.543,467.70 463.529,464.969L463.368,439.584Z" fill="#FFAC00"/>
                            </g>
                          </g>
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