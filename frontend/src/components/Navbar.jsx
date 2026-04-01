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

  // Close mobile menu when hash changes
  useEffect(() => {
    const handleHashChange = () => setMobileMenuOpen(false);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
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
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none`}
      >
        {/* Floating Pill Navbar */}
        <div className={`mx-auto max-w-5xl pointer-events-auto rounded-3xl transition-all duration-300 flex justify-between items-center ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-200/50 py-3 px-6' 
            : 'bg-transparent py-2 px-2'
        }`}>
          
          <a href="#" className="text-2xl font-display font-black text-indigo-700 whitespace-nowrap tracking-tighter hover:scale-105 transition-transform">
            <span className="text-teal-400 font-light">[</span> PN <span className="text-teal-400 font-light">]</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-2 bg-slate-50/50 p-1 rounded-full border border-slate-100">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`text-sm font-bold transition-all relative px-5 py-2 rounded-full ${
                  activeSection === link.href.substring(1) 
                    ? 'text-white' 
                    : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                {activeSection === link.href.substring(1) && (
                  <motion.div 
                    layoutId="activePill"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-teal-400 rounded-full -z-10 shadow-md shadow-indigo-500/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:block w-8"></div> {/* Spacer for symmetry if needed, or put a small CTA here */}

          {/* Mobile Toggle Button */}
          <button 
            className="lg:hidden text-slate-800 focus:outline-none bg-slate-50 p-2.5 rounded-xl border border-slate-200 shadow-sm active:scale-95 transition-transform"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={22} className="text-indigo-600"/>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] sm:w-[320px] bg-white z-[60] shadow-2xl flex flex-col pt-6 px-6 lg:hidden border-l border-slate-100"
            >
              <div className="flex justify-between items-center mb-10">
                <a href="#" className="text-2xl font-display font-black text-indigo-700 tracking-tighter">
                  <span className="text-teal-400 font-light">[</span> PN <span className="text-teal-400 font-light">]</span>
                </a>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 bg-slate-100 rounded-full text-slate-600 hover:text-rose-500 hover:bg-rose-50 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        setMobileMenuOpen(false);
                      }}
                      className={`text-base font-bold flex items-center justify-between px-5 py-4 rounded-2xl transition-all ${
                        isActive 
                          ? 'bg-gradient-to-r from-indigo-50 to-teal-50 text-indigo-700 shadow-sm border border-indigo-100' 
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {link.name}
                      {isActive && <motion.div layoutId="mobileActive" className="w-1.5 h-1.5 rounded-full bg-teal-500" />}
                    </a>
                  );
                })}
              </div>

              <div className="mt-auto pb-10 flex flex-col items-center">
                <a 
                  href="/prasad-cv.pdf" 
                  className="w-full text-center py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-900/20 active:scale-95 transition-transform"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
