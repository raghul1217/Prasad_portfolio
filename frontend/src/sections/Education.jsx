import React from 'react';
import { motion } from 'framer-motion';

const educationList = [
  {
    degree: "M.E. in Tool Engineering",
    institution: "NTTF",
    location: "Bangalore",
    year: "2008 – 2010"
  },
  {
    degree: "B.E. in Mechanical Engineering",
    institution: "BDT College",
    location: "Davangere",
    year: "2005 – 2007"
  },
  {
    degree: "Diploma in Mechanical Engineering",
    institution: "Govt. Polytechnic",
    location: "Raichur",
    year: "2001 – 2004"
  },
  {
    degree: "Class X",
    institution: "KPCL",
    location: "Raichur",
    year: "2000 – 2001"
  }
];

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="education" className="py-24 bg-warm-bg px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-12 bracket-heading tracking-wide">
            Education
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {educationList.map((edu, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-warm-surface p-6 shadow-sm border border-border-warm hover:border-indigo-primary/30 hover:shadow-md transition-all relative group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                <h3 className="text-xl font-bold text-indigo-primary">{edu.institution}</h3>
                <span className="inline-block px-3 py-1 bg-teal-secondary/10 text-teal-secondary text-sm font-semibold rounded-full w-max">
                  {edu.year}
                </span>
              </div>
              <p className="text-lg font-medium text-primary mb-1">{edu.degree}</p>
              <p className="text-sm text-secondary flex items-center gap-1">
                <span className="opacity-70">📍</span> {edu.location}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
