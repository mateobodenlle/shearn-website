import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { trackCTA } from '../lib/analytics';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackCTA('Contact Form Submit', 'contact-page');
    // Here you would normally send to your backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const founders = [
    {
      name: "Mateo Bodenlle",
      role: "CEO & Co-fundador",
      bio: "Experto en ecosistemas educativos y tokenización. Anterior experiencia en startups tech y consultoría estratégica.",
      avatar: "/placeholder-avatar.jpg",
      linkedin: "https://linkedin.com/in/mateobodenlle",
      twitter: "https://twitter.com/mateobodenlle",
      email: "mateo@shearn.com"
    },
    {
      name: "Marcos Álvarez",
      role: "CTO & Co-fundador", 
      bio: "Arquitecto de software especializado en IA y blockchain. Más de 10 años desarrollando sistemas escalables.",
      avatar: "/placeholder-avatar.jpg",
      linkedin: "https://linkedin.com/in/marcosalvarez",
      twitter: "https://twitter.com/marcosalvarez",
      email: "marcos@shearn.com"
    },
    {
      name: "Antón Varela",
      role: "CPO & Co-fundador",
      bio: "Diseñador de productos y estratega UX. Especialista en herramientas educativas y experiencia de usuario.",
      avatar: "/placeholder-avatar.jpg",
      linkedin: "https://linkedin.com/in/antonvarela",
      twitter: "https://twitter.com/antonvarela", 
      email: "anton@shearn.com"
    }
  ];

  return (
    <section className="section-padding bg-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-accent-400/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto container-padding">
        {/* Header */}
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
            Contacto
          </motion.span>
          <motion.h1 
            variants={itemVariants}
            className="text-3xl lg:text-5xl font-display font-bold text-text mb-6"
          >
            Hablemos del futuro de la <span className="text-gradient">educación</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted max-w-3xl mx-auto"
          >
            ¿Tienes una institución educativa? ¿Eres creador de contenido? ¿Quieres implementar Shearn en tu organización? 
            Estamos aquí para ayudarte.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-display font-semibold text-text mb-8"
            >
              Envíanos un mensaje
            </motion.h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-card/50 border border-card/50 rounded-lg px-4 py-3 text-text placeholder-muted focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-card/50 border border-card/50 rounded-lg px-4 py-3 text-text placeholder-muted focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="company" className="block text-sm font-medium text-text mb-2">
                  Organización
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-card/50 border border-card/50 rounded-lg px-4 py-3 text-text placeholder-muted focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300"
                  placeholder="Universidad, empresa, etc."
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-card/50 border border-card/50 rounded-lg px-4 py-3 text-text placeholder-muted focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300 resize-vertical"
                  placeholder="Cuéntanos más sobre tu proyecto o necesidades..."
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                type="submit"
                className="w-full bg-accent-500 hover:bg-accent-600 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-opacity-50 disabled:opacity-50"
                disabled={isSubmitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitted ? '¡Mensaje enviado!' : 'Enviar mensaje'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-display font-semibold text-text mb-8"
            >
              Otras formas de contacto
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">Email general</h3>
                  <p className="text-muted">hola@shearn.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">Partnerships</h3>
                  <p className="text-muted">partnerships@shearn.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">Soporte técnico</h3>
                  <p className="text-muted">soporte@shearn.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8 border-t border-card/30">
              <h3 className="font-semibold text-text mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="https://twitter.com/shearnteam" className="text-muted hover:text-accent-500 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <span className="text-2xl">𝕏</span>
                </a>
                <a href="https://linkedin.com/company/shearn" className="text-muted hover:text-accent-500 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <span className="text-2xl">💼</span>
                </a>
                <a href="https://github.com/shearnteam" className="text-muted hover:text-accent-500 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <span className="text-2xl">🐙</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Founders Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text mb-4">
              Conoce al equipo
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Los fundadores detrás de la revolución educativa de Shearn
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                variants={itemVariants}
                className="group"
              >
                <div className="relative bg-card/30 backdrop-blur-sm border border-card/30 rounded-2xl p-8 h-full group-hover:border-accent-500/30 group-hover:bg-card/50 transition-all duration-500">
                  {/* Avatar */}
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mb-4">
                      <span className="text-black font-bold text-2xl">
                        {founder.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-semibold text-text mb-1 group-hover:text-accent-500 transition-colors duration-300">
                      {founder.name}
                    </h3>
                    <p className="text-accent-500 font-medium text-sm">
                      {founder.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-muted text-sm leading-relaxed mb-6 group-hover:text-text/90 transition-colors duration-300">
                    {founder.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={founder.linkedin}
                      className="text-muted hover:text-accent-500 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <span className="text-lg">💼</span>
                    </a>
                    <a 
                      href={founder.twitter}
                      className="text-muted hover:text-accent-500 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">Twitter</span>
                      <span className="text-lg">𝕏</span>
                    </a>
                    <a 
                      href={`mailto:${founder.email}`}
                      className="text-muted hover:text-accent-500 transition-colors duration-200"
                    >
                      <span className="sr-only">Email</span>
                      <span className="text-lg">📧</span>
                    </a>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;