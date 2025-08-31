import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION_ITEMS, LINKS } from '../lib/constants';
import { trackCTA, trackExternalLink } from '../lib/analytics';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'ecosystem', 'features', 'how-it-works', 'products', 'cta'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleBuyClick = () => {
    // Disabled for now
    // trackCTA('Buy Shearn', 'header');
    // window.open(LINKS.buy, '_blank', 'noopener,noreferrer');
  };

  const handleNavClick = (item: typeof NAVIGATION_ITEMS[0]) => {
    if (item.id === 'whitepaper') {
      trackExternalLink('Whitepaper', LINKS.whitepaper);
      window.open(LINKS.whitepaper, '_blank', 'noopener,noreferrer');
    } else if (item.id === 'demo') {
      trackCTA('Demo', 'header');
      window.open(LINKS.demo, '_blank', 'noopener,noreferrer');
    } else if (item.id === 'contacto') {
      trackCTA('Contact', 'header');
      window.open(LINKS.contact, '_blank', 'noopener,noreferrer');
    } else {
      scrollToSection(item.id);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-bg/80 backdrop-blur-md border-b border-card/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="relative flex items-center h-16 lg:h-20">
          {/* Desktop Navigation - Absolutely centered */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`relative text-sm font-medium transition-colors duration-200 hover:text-accent-500 focus:outline-none focus:text-accent-500 ${
                  activeSection === item.id ? 'text-accent-500' : 'text-muted'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-500"
                    layoutId="activeNav"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right side - CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4 ml-auto">
            <motion.button
              onClick={handleBuyClick}
              className="bg-gray-400 text-gray-600 font-semibold px-4 py-2 rounded-full cursor-not-allowed opacity-50"
              disabled
            >
              <span className="text-gray-600">Buy </span>
              <span className="text-gray-600 font-bold">Shearn</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-muted hover:text-accent-500 transition-colors focus:outline-none"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <motion.span
                  className="block w-full h-0.5 bg-current"
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block w-full h-0.5 bg-current"
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block w-full h-0.5 bg-current"
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-card/95 backdrop-blur-md border-b border-card/50"
          >
            <nav className="container-padding py-4 space-y-3">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left py-2 px-3 rounded-lg transition-colors duration-200 hover:bg-accent-500/10 hover:text-accent-500 focus:outline-none focus:bg-accent-500/10 focus:text-accent-500 ${
                    activeSection === item.id ? 'text-accent-500 bg-accent-500/10' : 'text-muted'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;