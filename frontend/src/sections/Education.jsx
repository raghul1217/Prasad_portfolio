import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin } from 'lucide-react';

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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="education" className="py-20 md:py-28 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20 text-left"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary gradient-heading tracking-wide inline-block">
            Education
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {educationList.map((edu, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 mb-6 text-indigo-600">
                {idx === 0 ? <GraduationCap size={24} /> : <Award size={24} />}
              </div>
              
              <div className="flex-1">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider block mb-2">
                  {edu.year}
                </span>
                <h3 className="text-lg font-black text-slate-900 leading-tight mb-2">
                  {edu.institution}
                </h3>
                <h4 className="text-sm font-semibold text-slate-600 mb-4 pb-4 border-b border-slate-100">
                  {edu.degree}
                </h4>
              </div>

              <div className="mt-auto flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-md w-max border border-slate-100">
                <MapPin size={14} className="text-slate-400" /> {edu.location}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
