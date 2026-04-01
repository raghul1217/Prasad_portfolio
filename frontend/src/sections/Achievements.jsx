import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Settings, Globe, Ruler } from 'lucide-react';

const secondaryAchievements = [
  {
    icon: <Settings size={36} strokeWidth={1.5} />,
    text: "9 Years at Clark Fixture — Global Aerospace & Defense tooling",
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-200"
  },
  {
    icon: <Globe size={36} strokeWidth={1.5} />,
    text: "Supplier network established across 5+ Indian manufacturing hubs",
    color: "text-teal-600",
    bg: "bg-teal-50 border-teal-200"
  },
  {
    icon: <Ruler size={36} strokeWidth={1.5} />,
    text: "IMTA Certified Gauge Designer",
    color: "text-purple-600",
    bg: "bg-purple-50 border-purple-200"
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
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="achievements" className="py-20 md:py-28 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-12 md:mb-16 bracket-heading tracking-wide text-center">
            Key Achievements
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8 lg:space-y-12"
        >
          {/* Main Achievement Card */}
          <motion.div variants={itemVariants} className="glass-card p-8 md:p-12 rounded-3xl border-l-[6px] border-l-gold-highlight text-center relative overflow-hidden group hover:shadow-2xl hover:shadow-gold-highlight/20 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-highlight/5 via-transparent to-gold-highlight/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-orange-100 to-amber-50 flex items-center justify-center mb-6 shadow-sm border border-gold-highlight/20 group-hover:scale-110 transition-transform duration-500">
              <Trophy size={40} className="text-gold-highlight" />
            </div>
            
            <h3 className="text-2xl md:text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 mb-4 px-4 leading-tight">
              ACMA Prestigious Award — First Place, 2014
            </h3>
            <p className="text-base md:text-xl font-bold text-secondary mb-6 max-w-2xl mx-auto">
              Automotive Component Manufacturers Association of India
            </p>
            <div className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-orange-50 to-amber-50 border border-gold-highlight/20 text-gold-highlight font-black tracking-widest uppercase text-xs md:text-sm rounded-full shadow-sm">
              Category: Productivity Improvement
            </div>
          </motion.div>

          {/* Secondary Achievement Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {secondaryAchievements.map((ach, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="glass-card p-6 md:p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center gap-5 hover:shadow-xl"
              >
                <div className={`p-4 rounded-2xl ${ach.bg} ${ach.color} shadow-sm`}>
                  {ach.icon}
                </div>
                <p className="text-primary font-bold text-sm md:text-base leading-relaxed">
                  {ach.text}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
