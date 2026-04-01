import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6 relative">
      <motion.div 
        className="max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-display font-bold text-primary mb-4 tracking-tight">
          Prasad N
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-medium text-secondary mb-2">
          Manufacturing Engineering & Operations
        </motion.h2>

        <motion.div variants={itemVariants} className="h-10 md:h-12 mb-6 flex justify-center items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSubtitle}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-lg md:text-xl font-medium text-teal-secondary"
            >
              {subtitles[currentSubtitle]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.p variants={itemVariants} className="text-base md:text-lg text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          16 years of precision engineering across aerospace, automotive, defense, and heavy fabrication — from concept to production floor.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <motion.a 
            href="/prasad-cv.pdf"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded text-white bg-gradient-to-r from-indigo-primary to-teal-secondary shadow-md hover:shadow-lg transition-all font-medium w-full sm:w-auto text-center"
          >
            Download CV
          </motion.a>
          
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded text-indigo-primary border-2 border-indigo-primary hover:bg-indigo-primary hover:text-white transition-all font-medium w-full sm:w-auto text-center"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-border-warm/50 text-sm font-medium text-secondary">
          <span>📍</span> Mysuru, Karnataka, India
        </motion.div>
      </motion.div>
    </section>
  );
}
