import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Ecosystem from '../components/Ecosystem';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Products from '../components/Products';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="min-h-screen bg-bg relative overflow-x-hidden">
      {/* Reading Progress Bar */}
      <motion.div
        className="reading-progress fixed top-0 left-0 h-0.5 bg-gradient-to-r from-accent-500 to-accent-400 z-50"
        style={{
          width: `${scrollProgress}%`,
          transformOrigin: 'left'
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.1 }}
      />

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent-400/3 rounded-full blur-2xl"></div>
      </div>

      <Header />
      
      <main className="relative">
        <section id="home">
          <Hero />
        </section>
        
        <section id="ecosystem">
          <Ecosystem />
        </section>
        
        <section id="features">
          <Features />
        </section>
        
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <section id="products">
          <Products />
        </section>
        
        <section id="cta">
          <CTA />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;