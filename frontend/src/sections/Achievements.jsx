import React from 'react';
import { motion } from 'framer-motion';

const secondaryAchievements = [
  {
    icon: "🔩",
    text: "9 Years at Clark Fixture — Global Aerospace & Defense tooling"
  },
  {
    icon: "🌍",
    text: "Supplier network established across 5+ Indian manufacturing hubs"
  },
  {
    icon: "📐",
    text: "IMTA Certified Gauge Designer"
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
    <section id="achievements" className="py-24 bg-section-alt px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-12 bracket-heading tracking-wide text-center">
            Key Achievements
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {/* Main Achievement Card */}
          <motion.div variants={itemVariants} className="bg-[#FFFBF0] p-8 md:p-10 shadow-sm border border-border-warm border-l-4 border-l-gold-highlight text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gold-highlight opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>
            <div className="text-5xl mb-6">🏆</div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-3">
              ACMA Prestigious Award — First Place, 2014
            </h3>
            <p className="text-lg font-medium text-secondary mb-1">
              Automotive Component Manufacturers Association of India
            </p>
            <p className="inline-block px-4 py-1.5 bg-gold-highlight/10 text-gold-highlight font-semibold rounded-full mt-4">
              Category: Productivity Improvement
            </p>
          </motion.div>

          {/* Secondary Achievement Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryAchievements.map((ach, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-warm-surface p-6 shadow-sm border border-border-warm hover:-translate-y-1 transition-transform flex flex-col items-center text-center gap-4"
              >
                <div className="text-4xl">{ach.icon}</div>
                <p className="text-primary font-medium text-sm leading-relaxed">
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
