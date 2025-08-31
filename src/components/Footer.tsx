import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LINKS } from '../lib/constants';
import { trackCTA, trackExternalLink } from '../lib/analytics';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      trackCTA('Newsletter Subscribe', 'footer');
      // Here you would normally send to your newsletter service
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const handleLinkClick = (linkName: string, url: string) => {
    trackExternalLink(linkName, url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'News', href: '#' }
    ],
    resources: [
      { name: 'Whitepaper', href: LINKS.whitepaper },
      { name: 'Demo', href: LINKS.demo },
      { name: 'Documentation', href: '#' },
      { name: 'Support', href: '#' }
    ],
    legal: [
      { name: 'Términos', href: '#' },
      { name: 'Privacidad', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'Legal', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', href: LINKS.twitter, icon: '𝕏' },
    { name: 'LinkedIn', href: LINKS.linkedin, icon: '💼' },
    { name: 'Instagram', href: LINKS.instagram, icon: '📷' }
  ];

  return (
    <footer className="bg-card/20 border-t border-card/30">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Brand & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h3 className="text-3xl font-display font-bold text-gradient mb-4">
                  Shearn
                </h3>
                <p className="text-muted text-lg leading-relaxed">
                  El ecosistema educativo que conecta creadores y estudiantes, 
                  donde compartir conocimiento genera valor real para todos.
                </p>
              </div>

              {/* Newsletter */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-text mb-4">
                  Mantente actualizado
                </h4>
                <p className="text-muted text-sm mb-4">
                  Recibe las últimas noticias del ecosistema Shearn y actualizaciones de productos.
                </p>
                
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      className="flex-1 bg-accent-500/5 border border-card/50 rounded-lg px-4 py-3 text-text placeholder-muted focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300"
                      required
                    />
                    <motion.button
                      type="submit"
                      className="bg-accent-500 hover:bg-accent-600 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-opacity-50"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={subscribed}
                    >
                      {subscribed ? '¡Suscrito!' : 'Suscribirme'}
                    </motion.button>
                  </div>
                  <p className="text-xs text-muted">
                    Al suscribirte, aceptas nuestra política de privacidad. Puedes darte de baja en cualquier momento.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Links Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            >
              <div>
                <h4 className="text-lg font-semibold text-text mb-4">Compañía</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleLinkClick(link.name, link.href)}
                        className="text-muted hover:text-accent-500 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-text mb-4">Recursos</h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleLinkClick(link.name, link.href)}
                        className="text-muted hover:text-accent-500 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-text mb-4">Legal</h4>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleLinkClick(link.name, link.href)}
                        className="text-muted hover:text-accent-500 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-8 border-t border-card/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-muted text-sm">
              © {new Date().getFullYear()} Shearn. Todos los derechos reservados.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <motion.button
                  key={social.name}
                  onClick={() => handleLinkClick(social.name, social.href)}
                  className="text-muted hover:text-accent-500 transition-colors duration-200 text-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </motion.button>
              ))}
            </div>

            {/* Additional Info */}
            <div className="text-muted text-sm text-center md:text-right">
              Construyendo el futuro de la educación
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;