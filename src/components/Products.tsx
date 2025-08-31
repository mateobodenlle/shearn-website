import React from 'react';
import { motion } from 'framer-motion';
import { LINKS } from '../lib/constants';
import { trackCTA, trackExternalLink } from '../lib/analytics';

const Products: React.FC = () => {
  const handleProductClick = (productName: string, link: string) => {
    trackCTA(`Try ${productName}`, 'products');
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleDocsClick = (productName: string) => {
    trackExternalLink(`${productName} Docs`, `${LINKS.whitepaper}#${productName.toLowerCase()}`);
    window.open(`${LINKS.whitepaper}#${productName.toLowerCase()}`, '_blank', 'noopener,noreferrer');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const products = [
    {
      name: "Socwritic",
      title: "Crítica guiada y co-creación",
      description: "Socwritic estructura el proceso de feedback para acelerar la mejora iterativa. Perfecto para talleres, revisión de documentos y colaboración creativa.",
      features: [
        "Sistema de evaluación estructurada",
        "Flujos de trabajo colaborativos", 
        "Métricas de progreso en tiempo real",
        "Integración con herramientas populares"
      ],
      icon: "✍️",
      gradient: "from-blue-500 to-accent-500",
      link: LINKS.socwritic
    },
    {
      name: "Certainty",
      title: "Resolución de problemas paso a paso",
      description: "Certainty guía la resolución de problemas técnicos con demostraciones claras y ejercicios prácticos. Ideal para entornos STEM y aprendizaje técnico.",
      features: [
        "Resolución guiada de problemas",
        "Ejercicios interactivos",
        "Verificación automática de soluciones",
        "Progresión adaptativa"
      ],
      icon: "🔬",
      gradient: "from-purple-500 to-accent-500", 
      link: LINKS.certainty
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-accent-400/3 rounded-full blur-2xl"></div>
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
            Productos Destacados
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl lg:text-5xl font-display font-bold text-text mb-6"
          >
            Herramientas que <span className="text-gradient">potencian el aprendizaje</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted max-w-3xl mx-auto"
          >
            Cada módulo está diseñado para resolver problemas específicos del aprendizaje,
            pero funciona mejor cuando se usa en conjunto con el ecosistema completo.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              className="group"
            >
              <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                {/* Content */}
                <div className="flex-1 space-y-6">
                  {/* Icon & Title */}
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl">{product.icon}</div>
                    <div>
                      <h3 className="text-3xl font-display font-bold text-text group-hover:text-accent-500 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-lg text-muted">
                        {product.title}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-muted leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0"></div>
                        <span className="text-muted text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                    <motion.button
                      onClick={() => handleProductClick(product.name, product.link)}
                      className="btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Probar {product.name}
                    </motion.button>
                    
                    <button
                      onClick={() => handleDocsClick(product.name)}
                      className="text-accent-500 hover:text-accent-400 font-medium text-sm underline underline-offset-4 transition-colors"
                    >
                      Ver documentación
                    </button>
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 max-w-lg">
                  <div className="relative">
                    {/* Main Card */}
                    <div className="relative bg-card/50 backdrop-blur-sm border border-card/50 rounded-2xl p-8 group-hover:border-accent-500/30 transition-all duration-500">
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      {/* Mock Interface */}
                      <div className="relative space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex space-x-1">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          </div>
                          <div className="flex-1 bg-muted/20 h-6 rounded"></div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="bg-muted/10 h-4 rounded w-3/4"></div>
                          <div className="bg-muted/10 h-4 rounded w-1/2"></div>
                          <div className="bg-accent-500/20 h-8 rounded w-full"></div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-muted/10 h-6 rounded"></div>
                            <div className="bg-muted/10 h-6 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-600/20 to-accent-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Products;