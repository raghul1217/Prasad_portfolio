import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const subtitles = [
  "Tool Design & R&D Product Development",
  "Lean Manufacturing & Kaizen",
  "Global Project Execution",
  "SPM & Fixture Engineering"
];

export default function Hero() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="min-h-[100dvh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 relative">
      <motion.div 
        className="max-w-4xl mx-auto text-center z-10 relative flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants} 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-900 to-indigo-primary leading-tight pb-2"
        >
          Prasad N
        </motion.h1>
        
        <motion.h2 
          variants={itemVariants} 
          className="text-xl sm:text-2xl md:text-3xl font-medium text-secondary mb-4"
        >
          Manufacturing Engineering & Operations
        </motion.h2>

        <motion.div variants={itemVariants} className="h-14 md:h-16 mb-4 flex justify-center items-center overflow-hidden w-full px-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSubtitle}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-secondary to-blue-500 text-center"
            >
              {subtitles[currentSubtitle]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed px-2">
          16 years of precision engineering across aerospace, automotive, defense, and heavy fabrication — from concept to production floor.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto px-4">
          <motion.a 
            href="/prasad-cv.pdf"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-white bg-gradient-to-r from-indigo-primary to-teal-secondary shadow-xl shadow-indigo-primary/40 hover:shadow-indigo-primary/60 transition-all font-bold flex items-center justify-center gap-2 text-lg"
          >
            <Download size={20} />
            Download CV
          </motion.a>
          
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-indigo-primary bg-white/60 backdrop-blur-md border border-indigo-primary/30 hover:bg-white transition-all font-bold group flex items-center justify-center gap-2 text-lg shadow-lg shadow-black/5"
          >
            Get in Touch
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
