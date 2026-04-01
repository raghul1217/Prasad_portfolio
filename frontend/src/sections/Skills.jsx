import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Lightbulb, Cog, LineChart, BadgeCheck } from 'lucide-react';

const modernSkills = [
  {
    title: "CAD / CAM Tools",
    icon: <Layers size={28} className="text-indigo-500" />,
    items: ["PTC Creo", "Pro-E", "SolidWorks", "Autodesk Inventor", "AutoCAD", "Vault"],
    bgClass: "bg-indigo-50 border-indigo-100",
    pillClass: "bg-white text-indigo-700 shadow-sm border border-indigo-100"
  },
  {
    title: "Advanced Manufacturing",
    icon: <Cog size={28} className="text-teal-500" />,
    items: ["HMC", "VMC", "CNC", "DFM", "Welding", "Process Design", "Reverse Eng", "SPM Design", "Fixture Design"],
    bgClass: "bg-teal-50 border-teal-100",
    pillClass: "bg-white text-teal-700 shadow-sm border border-teal-100"
  },
  {
    title: "Methodologies",
    icon: <Lightbulb size={28} className="text-purple-500" />,
    items: ["Lean Manufacturing", "Kaizen", "Kanban", "SMED", "PPAP", "FMEA", "Quality Assurance"],
    bgClass: "bg-purple-50 border-purple-100",
    pillClass: "bg-white text-purple-700 shadow-sm border border-purple-100"
  },
  {
    title: "Business & Management",
    icon: <LineChart size={28} className="text-rose-500" />,
    items: ["ERP Software", "Team Management", "MS Office", "Product Strategy", "Business Development"],
    bgClass: "bg-rose-50 border-rose-100",
    pillClass: "bg-white text-rose-700 shadow-sm border border-rose-100"
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
    hidden: { scale: 0.9, opacity: 0, y: 15 },
    visible: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
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
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-12 md:mb-20 gradient-heading tracking-wide">
            Skills & Expertise
          </h2>
        </motion.div>

        {/* Highlight Certification Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-10 w-full"
        >
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl p-[3px] shadow-xl shadow-orange-500/20">
            <div className="bg-white/95 backdrop-blur-xl rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
              <div className="absolute -right-10 -top-10 text-orange-500/10 hidden md:block">
                <BadgeCheck size={180} />
              </div>
              <div className="flex items-center gap-4 z-10">
                <div className="bg-orange-100 p-4 rounded-full">
                  <BadgeCheck size={36} className="text-orange-600" strokeWidth={2.5}/>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-800">IMTA Certified Gauge Designer</h3>
                  <p className="font-medium text-slate-500 mt-1">Professional Certification</p>
                </div>
              </div>
              <div className="z-10 bg-orange-500 text-white font-bold px-6 py-2.5 rounded-full shadow-md text-sm uppercase tracking-widest whitespace-nowrap w-full md:w-auto text-center">
                Certified Expert
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bento Grid layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {modernSkills.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${category.bgClass} flex flex-col`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
                  {category.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-800">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.items.map((skill, i) => (
                  <span 
                    key={i}
                    className={`px-3.5 py-2 font-bold text-sm rounded-xl ${category.pillClass} transition-colors hover:bg-slate-50`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
