import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent-400/3 rounded-full blur-2xl"></div>
      </div>

      <Header />
      
      <main className="relative pt-20">
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;