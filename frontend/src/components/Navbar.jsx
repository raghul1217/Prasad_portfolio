import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 100)) {
          current = section;
        }
      }
      if (!current && window.scrollY < 200) current = '';
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/70 backdrop-blur-md border-b border-border-warm py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        <a href="#" className="text-2xl md:text-3xl font-display font-black text-indigo-primary whitespace-nowrap tracking-tighter">
          <span className="text-teal-secondary font-light">[</span> PN <span className="text-teal-secondary font-light">]</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`text-sm font-bold transition-all relative py-2 ${
                activeSection === link.href.substring(1) 
                  ? 'text-indigo-primary' 
                  : 'text-secondary hover:text-indigo-primary hover:-translate-y-0.5'
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div 
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-gradient-to-r from-indigo-primary to-teal-secondary shadow-sm"
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-primary focus:outline-none bg-white p-2 rounded-xl shadow-sm border border-border-warm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} className="text-indigo-primary"/> : <Menu size={24} className="text-indigo-primary"/>}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-border-warm overflow-hidden shadow-2xl absolute w-full left-0 top-full"
          >
            <div className="flex flex-col py-6 px-6 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-bold flex items-center justify-between py-2 border-b border-border-warm/50 ${
                    activeSection === link.href.substring(1) 
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-primary to-teal-secondary' 
                      : 'text-secondary'
                  }`}
                >
                  {link.name}
                  <span className="text-xs opacity-50 font-normal">0{navLinks.indexOf(link) + 1}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
