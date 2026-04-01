import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: "CAD / CAM Tools",
    skills: ["PTC Creo", "Pro-E", "SolidWorks", "Autodesk Inventor", "AutoCAD", "Vault"]
  },
  {
    category: "Manufacturing",
    skills: ["HMC", "VMC", "CNC", "DFM", "Welding", "Reverse Engineering", "Process Design", "SPM Design", "Fixture Design", "Tool Room"]
  },
  {
    category: "Methodologies",
    skills: ["Lean Manufacturing", "Kaizen", "Kanban", "SMED", "PPAP", "FMEA", "Quality Assurance"]
  },
  {
    category: "Software & Business",
    skills: ["ERP Software", "MS Excel", "MS Office", "PowerPoint", "Business Development"]
  },
  {
    category: "Certification",
    skills: ["✅ IMTA Certified Gauge Designer"]
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3, ease: "backOut" } }
  };

  return (
    <section id="skills" className="py-24 bg-section-alt px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-16 bracket-heading tracking-wide">
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={idx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-warm-surface p-6 rounded shadow-sm border border-border-warm flex flex-col h-full"
            >
              <h3 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-border-warm">{group.category}</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {group.skills.map((skill, i) => (
                  <motion.span 
                    key={i}
                    variants={itemVariants}
                    className="px-3 py-1.5 bg-[var(--color-tag-bg)] text-[var(--color-tag-text)] text-sm font-medium rounded-full hover:shadow-md transition-shadow cursor-default"
                  >
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
