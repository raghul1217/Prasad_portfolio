import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const skillGroups = [
  {
    category: "CAD / CAM Tools",
    skills: ["PTC Creo", "Pro-E", "SolidWorks", "Autodesk Inventor", "AutoCAD", "Vault"],
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50 text-blue-700"
  },
  {
    category: "Manufacturing",
    skills: ["HMC", "VMC", "CNC", "DFM", "Welding", "Reverse Engineering", "Process Design", "SPM Design", "Fixture Design", "Tool Room"],
    color: "from-teal-500 to-emerald-600",
    bg: "bg-teal-50 text-teal-700"
  },
  {
    category: "Methodologies",
    skills: ["Lean Manufacturing", "Kaizen", "Kanban", "SMED", "PPAP", "FMEA", "Quality Assurance"],
    color: "from-purple-500 to-fuchsia-600",
    bg: "bg-purple-50 text-purple-700"
  },
  {
    category: "Software & Business",
    skills: ["ERP Software", "MS Excel", "MS Office", "PowerPoint", "Business Development"],
    color: "from-orange-500 to-red-600",
    bg: "bg-orange-50 text-orange-700"
  },
  {
    category: "Certification",
    skills: ["IMTA Certified Gauge Designer"],
    color: "from-yellow-500 to-amber-600",
    bg: "bg-amber-50 text-amber-700",
    isCert: true
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.9, opacity: 0, y: 10 },
    visible: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.4, ease: "backOut" } }
  };

  return (
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-12 md:mb-20 bracket-heading tracking-wide">
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={idx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={`glass-card p-6 md:p-8 rounded-2xl flex flex-col h-full border-t-4 transition-all hover:-translate-y-1 hover:shadow-xl ${
                idx === 0 ? 'border-t-blue-500 hover:shadow-blue-500/10' :
                idx === 1 ? 'border-t-teal-500 hover:shadow-teal-500/10' :
                idx === 2 ? 'border-t-purple-500 hover:shadow-purple-500/10' :
                idx === 3 ? 'border-t-orange-500 hover:shadow-orange-500/10' :
                'border-t-amber-500 hover:shadow-amber-500/10'
              }`}
            >
              <h3 className="text-xl font-display font-extrabold text-primary mb-6 pb-3 border-b border-border-warm">{group.category}</h3>
              <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                {group.skills.map((skill, i) => (
                  <motion.span 
                    key={i}
                    variants={itemVariants}
                    className={`px-3 py-1.5 md:px-4 md:py-2 ${group.bg} text-xs md:text-sm font-bold rounded-lg shadow-sm border border-black/5 hover:scale-105 transition-transform flex items-center gap-1.5`}
                  >
                    {group.isCert && <BadgeCheck size={16} strokeWidth={2.5} />}
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
