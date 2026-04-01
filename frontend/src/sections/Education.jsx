import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

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
    <section id="education" className="py-20 md:py-28 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-12 md:mb-20 bracket-heading tracking-wide">
            Education
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {educationList.map((edu, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-card p-6 md:p-8 rounded-2xl hover:border-indigo-primary/40 hover:shadow-xl hover:shadow-indigo-primary/10 transition-all relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 relative z-10">
                <h3 className="text-xl md:text-2xl font-display font-extrabold text-indigo-primary leading-tight">{edu.institution}</h3>
                <span className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-teal-secondary/10 to-teal-secondary/20 text-teal-secondary text-xs sm:text-sm font-bold rounded-full w-max shadow-sm border border-teal-secondary/20">
                  {edu.year}
                </span>
              </div>
              <p className="text-lg md:text-xl font-bold text-primary mb-3 relative z-10">{edu.degree}</p>
              <p className="text-sm md:text-base font-medium text-secondary flex items-center gap-1.5 relative z-10">
                <MapPin size={16} className="text-teal-secondary" /> {edu.location}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
