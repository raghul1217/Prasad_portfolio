import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Download, ArrowRight } from 'lucide-react';

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
    <section id="hero" className="min-h-[100dvh] flex items-center justify-center pt-24 pb-16 px-6 relative">
      <motion.div 
        className="max-w-4xl mx-auto text-center z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-semibold text-indigo-primary mb-8 shadow-sm">
          <MapPin size={16} className="text-teal-secondary" /> 
          Mysuru, Karnataka, India
        </motion.div>

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

        <motion.div variants={itemVariants} className="h-12 md:h-14 mb-6 flex justify-center items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSubtitle}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-secondary to-blue-500"
            >
              {subtitles[currentSubtitle]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed px-4">
          16 years of precision engineering across aerospace, automotive, defense, and heavy fabrication — from concept to production floor.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
          <motion.a 
            href="/prasad-cv.pdf"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-white bg-gradient-to-r from-indigo-primary to-teal-secondary shadow-lg shadow-indigo-primary/30 hover:shadow-indigo-primary/50 transition-all font-bold flex items-center justify-center gap-2 text-lg"
          >
            <Download size={20} />
            Download CV
          </motion.a>
          
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-indigo-primary glass-card hover:bg-white transition-all font-bold group flex items-center justify-center gap-2 text-lg"
          >
            Get in Touch
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
