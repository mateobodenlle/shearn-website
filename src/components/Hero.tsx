import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LINKS } from '../lib/constants';
import { trackCTA } from '../lib/analytics';

const Hero: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleDemoClick = () => {
    trackCTA('Ver Demo', 'hero');
    window.open(LINKS.demo, '_blank', 'noopener,noreferrer');
  };

  const handleWhitepaperClick = () => {
    trackCTA('Leer Whitepaper', 'hero');
    window.open(LINKS.whitepaper, '_blank', 'noopener,noreferrer');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is just UI for now
    console.log('Search:', searchValue);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 lg:pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        
        {/* Subtle Wave Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M0,100 Q50,50 100,100 T200,100" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern)" className="text-accent-500"/>
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto container-padding text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-accent-500/20 rounded-full px-4 py-2 mb-8"
        >
          <span className="text-accent-500 font-medium text-sm">Nuevo enfoque</span>
          <div className="w-1 h-1 bg-accent-500 rounded-full"></div>
          <span className="text-muted text-sm">De plataforma a ecosistema</span>
        </motion.div>

        {/* Logo/Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <div className="flex justify-center mb-4">
            <img 
              src="/shearn-logo-centered.svg" 
              alt="Shearn"
              className="h-14 lg:h-24 xl:h-28 w-auto object-contain max-w-2xl"
              style={{ filter: 'brightness(1) contrast(1)' }}
            />
          </div>
          <h2 className="text-2xl lg:text-4xl font-display font-semibold text-text mb-6">
            el ecosistema para aprender creando valor
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg lg:text-xl text-muted max-w-3xl mx-auto mb-12"
        >
          Compartir, aprender y ganar con herramientas que aceleran el aprendizaje y la producción de conocimiento.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full max-w-2xl mx-auto mb-12"
        >
          <form onSubmit={handleSearchSubmit} className="relative">
            <div className="relative group">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Share, Learn, Earn"
                className="w-full bg-card/80 backdrop-blur-sm border border-accent-500/20 rounded-full px-6 py-4 pr-14 text-lg placeholder-muted focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300 group-hover:border-accent-500/40"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-accent-500 hover:bg-accent-600 text-black p-2 rounded-full transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-opacity-50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="w-full flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8"
        >
          <motion.button
            onClick={handleDemoClick}
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver demo
          </motion.button>
          
          <motion.button
            onClick={handleWhitepaperClick}
            className="btn-secondary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Leer whitepaper
          </motion.button>
        </motion.div>

        {/* Scroll Indicator - Centered independently */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex flex-col items-center space-y-1"
        >
          <span className="text-muted text-xs">Descubre más</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border-2 border-muted/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-2 bg-accent-500 rounded-full mt-1"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;