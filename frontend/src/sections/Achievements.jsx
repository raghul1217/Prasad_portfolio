import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Settings, Globe, Award, ShieldCheck } from 'lucide-react';

const secondaryAchievements = [
  {
    icon: <Settings size={24} />,
    title: "Global Tooling Ecosystem",
    text: "9 Years at Clark Fixture — Lead design & execution for aerospace & defense.",
  },
  {
    icon: <Globe size={24} />,
    title: "Vast Supplier Network",
    text: "Established and validated manufacturing hubs across 5+ Indian states.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Certified Gauge Expert",
    text: "IMTA Certified Gauge Designer recognizing elite precision metrics.",
  }
];

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="achievements" className="py-20 md:py-28 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20 text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-primary gradient-heading tracking-wide inline-block whitespace-nowrap">
            Key Achievements
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-6"
        >
          {/* Main Professional Achievement Card */}
          <motion.div variants={itemVariants} className="w-full rounded-2xl bg-slate-900 border border-slate-800 p-8 md:p-12 shadow-xl shadow-slate-900/10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 relative overflow-hidden group">
            {/* Subtle glow instead of bright orange */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-inner relative z-10">
              <Trophy size={40} className="text-amber-500" />
            </div>
            
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center px-3 py-1 bg-slate-800/80 text-amber-500 border border-amber-500/20 text-xs font-bold uppercase tracking-widest rounded-md mb-4">
                1st Place Award Winner
              </div>
              <h3 className="text-2xl md:text-4xl font-display font-black text-white mb-3 leading-tight">
                ACMA Prestigious Industry Award
              </h3>
              <p className="text-base md:text-lg text-slate-400 font-medium max-w-2xl mb-4">
                Awarded by the Automotive Component Manufacturers Association of India for outstanding leadership and excellence in manufacturing Productivity Improvement (2014).
              </p>
            </div>
          </motion.div>

          {/* Secondary Achievement Row - Clean Corporate Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryAchievements.map((ach, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-indigo-300 transition-colors shadow-sm flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
                  {ach.icon}
                </div>
                
                <div>
                  <h4 className="text-lg font-black text-slate-900 mb-2">
                    {ach.title}
                  </h4>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    {ach.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
