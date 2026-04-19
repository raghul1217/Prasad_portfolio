import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Technical Manager — Precision Parts & Products Industrialization",
    company: "Sevenloop Technology Pvt Ltd",
    duration: "Nov 2025 – Present",
    location: "Bengaluru, Karnataka",
    about: "AI-driven engineering company manufacturing precision parts locally and globally",
    isCurrent: true,
    responsibilities: [
      "Project execution from concept to part approval and regular production",
      "Supplier identification and sourcing across India (Rajkot, Pune, Kolhapur, Bengaluru, Coimbatore)",
      "Part validation for casting, machining, and coating — export & domestic",
      "RFQ-stage feasibility studies to determine manufacturing process and meet QCD targets",
      "PO review, supplier feasibility, technical feedback to BD team",
      "Coordination with design and quality teams for QC documentation"
    ]
  },
  {
    id: 2,
    role: "Assistant Manager — R&D",
    company: "Veerya Attachments Pvt Ltd",
    duration: "Oct 2024 – Nov 2025",
    location: "Malur, Karnataka",
    about: "Mechanical attachments & equipment — Crushers, Grapples, Couplers, Hydraulic Cylinders",
    responsibilities: [
      "Led and managed R&D Product Design & Tool Design team across 4 sections",
      "New product development with CFT team — quality, fabrication, machine shop",
      "CAD completion, customer approval drawings, manufacturing drawing release, ECR management",
      "Designed jigs & fixtures for HMC, VMC, CNC, Welding, Cylinder line processes",
      "Hydraulic cylinder design and inhouse development; SPM design including test rigs",
      "Welding positioner design and development inhouse with bought-out components",
      "Led 15+ projects totaling ₹15 Cr across global regions",
      "HMC & VMC productivity improvement via fixture optimization and tooling upgrades",
      "Greenfield project involvement; full PPAP documentation"
    ]
  },
  {
    id: 3,
    role: "Design Engineer — Global Projects",
    company: "Clark Fixture Technologies (India) Pvt. Ltd",
    duration: "Oct 2015 – Sep 2024 (9 years)",
    location: "Mysuru, Karnataka",
    about: "Global tooling technology company — Aerospace, Medical, Automotive, Defense, Low Earth Orbit & Deep Space",
    clients: [
      "Boeing", "GE Aviation", "Gulfstream", "Pratt & Whitney", "Lockheed Martin", 
      "Rolls Royce", "ULA", "NASA", "BMW", "GM", "Toyota", "Volvo", "Ford", "Stryker", "Saint-Gobain"
    ],
    designResponsibilities: [
      "Automated Robotic Cell Fixture design — integrated proximity sensors and PLC for post-bend part validation",
      "Orbital weld fixture design enabling tube assembly and end-feature welding at production scale",
      "CAD/CAM tooling design per customer specs, reviewed/signed off, delivered via secure portal"
    ],
    manufacturingResponsibilities: [
      "CAD/CAM Virtual Manufacturing — NC files to shop server, material plots, machining drawings",
      "NC code generation for FANUC, ONSURD, and MAZAK machines",
      "One-piece CNC fixture machining — eliminates cumulative tolerance stack-up"
    ]
  },
  {
    id: 4,
    role: "Senior Engineer — Manufacturing Engineering",
    company: "WABCO-TVS (India) Ltd. (ZF India)",
    duration: "Nov 2010 – Sep 2015 (5 years)",
    location: "Chennai, Tamil Nadu",
    about: "Leading manufacturer of braking systems, Compressors, ABS, and Actuators",
    responsibilities: [
      "Manufacturing System Design (MSD), assembly and production process design",
      "Production line commissioning with LCA, PLC, and Maintenance teams",
      "Inhouse assembly line design and development",
      "Jigs & fixtures design and redesign for efficiency, cost, and quality improvement",
      "Automated fixture/jig modifications to reduce inventory and spare parts",
      "Bottleneck elimination in machining and assembly cells via automation",
      "Documentation: process flow charts, status cards, checklists, PPAP, FMEA"
    ]
  },
  {
    id: 5,
    role: "Graduate Engineer Trainee",
    company: "NTTF Industries Pvt. Ltd",
    duration: "Aug 2007 – Jul 2008",
    location: "Bangalore, Karnataka",
    about: "Industrial training center and production company",
    responsibilities: [
      "Production planning and supervision in press shop operations",
      "Tool room engineering — die maintenance for press tools and plastic moulds",
      "Lean operations and SMED tryout"
    ]
  }
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section id="experience" className="py-20 md:py-28 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-primary mb-12 md:mb-20 gradient-heading tracking-wide"
          >
            Work Experience
          </motion.h2>

          <div className="relative">
            {/* Timeline Line (Mobile: left-6, Desktop: center) */}
            <div className="absolute left-[23px] md:left-1/2 md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-indigo-500 via-teal-400 to-transparent opacity-50 rounded-full z-0"></div>

            <div className="space-y-12 md:space-y-20 relative z-10">
              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div key={exp.id} className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
                    
                    {/* Timeline Dot (Mobile: left-6 exactly, Desktop: center) */}
                    <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 mt-7 md:mt-0 w-6 h-6 rounded-full bg-white border-[5px] border-indigo-500 shadow-lg shadow-indigo-500/50 z-20 group-hover:scale-125 transition-transform duration-300"></div>

                    {/* Card Container Layout */}
                    {/* On mobile, massive left padding to clear the dot. On desktop, standard padding. */}
                    <div className={`w-full md:w-1/2 pl-12 sm:pl-16 md:px-8 ${isEven ? 'md:pr-12 md:pl-0 md:text-right' : 'md:pl-12 md:pr-0 md:ml-auto'}`}>
                      <motion.div 
                        variants={{
                          hidden: { opacity: 0, y: 30 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        className={`bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl relative transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/15 border border-white/40 ${isEven ? 'text-left md:text-right' : 'text-left'} group-hover:-translate-y-2 block`}
                      >
                        <div className={`flex flex-col ${isEven ? 'md:items-end items-start' : 'items-start'} mb-4 gap-2`}>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-indigo-900 leading-tight">{exp.role}</h3>
                          {exp.isCurrent && (
                            <span className="inline-block px-4 py-1.5 text-xs font-black uppercase tracking-widest bg-emerald-500 md:bg-teal-500 text-white rounded-full shadow-md shadow-emerald-500/30">
                              Current Role
                            </span>
                          )}
                        </div>

                        <div className={`mb-6 flex flex-col gap-3 ${isEven ? 'md:items-end md:text-right text-left items-start' : 'items-start text-left'}`}>
                          <p className="text-indigo-600 font-extrabold text-lg sm:text-xl">{exp.company}</p>
                          <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-bold text-slate-700 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl w-fit ${isEven ? 'md:ml-auto' : ''}`}>
                            <span className="flex items-center gap-1.5"><Calendar size={16} className="text-indigo-500"/> {exp.duration}</span>
                            <span className="flex items-center gap-1.5"><MapPin size={16} className="text-teal-500"/> {exp.location}</span>
                          </div>
                          <p className="text-sm mt-3 font-medium text-slate-600 bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">{exp.about}</p>
                        </div>

                        {exp.clients && (
                          <div className={`mb-6 flex flex-wrap gap-2 ${isEven ? 'md:justify-end justify-start' : 'justify-start'}`}>
                            {exp.clients.map((client, i) => (
                              <span key={i} className="text-xs px-3 py-1.5 rounded-lg font-bold bg-white text-indigo-700 border border-indigo-100 shadow-sm">
                                {client}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="space-y-6">
                          {exp.responsibilities && (
                            <ul className="space-y-4">
                              {exp.responsibilities.map((resp, idx) => (
                                <li key={idx} className={`flex text-slate-700 text-sm md:text-base font-medium ${isEven ? 'md:flex-row-reverse text-left md:text-right flex-row' : 'flex-row text-left'}`}>
                                  <CheckCircle2 size={20} className={`flex-shrink-0 mt-0.5 ${isEven ? 'md:ml-3 mr-3 md:mr-0 text-teal-500' : 'mr-3 text-teal-500'}`} />
                                  <span className="leading-relaxed">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {exp.designResponsibilities && (
                            <div className="bg-indigo-50/50 p-4 md:p-6 rounded-2xl border border-indigo-100">
                              <h4 className={`text-sm font-black text-indigo-900 mb-4 uppercase tracking-widest flex items-center gap-2 ${isEven ? 'md:justify-end justify-start' : 'justify-start'}`}>
                                <ChevronRight size={18} className="text-indigo-500"/> Design Focus
                              </h4>
                              <ul className="space-y-3">
                                {exp.designResponsibilities.map((resp, idx) => (
                                  <li key={idx} className={`flex text-slate-700 text-sm md:text-base font-medium ${isEven ? 'md:flex-row-reverse text-left md:text-right flex-row' : 'flex-row text-left'}`}>
                                    <CheckCircle2 size={18} className={`flex-shrink-0 mt-0.5 ${isEven ? 'md:ml-3 mr-3 md:mr-0 text-indigo-500' : 'mr-3 text-indigo-500'}`} />
                                    <span className="leading-relaxed">{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {exp.manufacturingResponsibilities && (
                            <div className="bg-teal-50/50 p-4 md:p-6 rounded-2xl border border-teal-100">
                               <h4 className={`text-sm font-black text-teal-900 mb-4 uppercase tracking-widest flex items-center gap-2 ${isEven ? 'md:justify-end justify-start' : 'justify-start'}`}>
                                <ChevronRight size={18} className="text-teal-500"/> Manufacturing Pro
                              </h4>
                              <ul className="space-y-3">
                                {exp.manufacturingResponsibilities.map((resp, idx) => (
                                  <li key={idx} className={`flex text-slate-700 text-sm md:text-base font-medium ${isEven ? 'md:flex-row-reverse text-left md:text-right flex-row' : 'flex-row text-left'}`}>
                                    <CheckCircle2 size={18} className={`flex-shrink-0 mt-0.5 ${isEven ? 'md:ml-3 mr-3 md:mr-0 text-teal-500' : 'mr-3 text-teal-500'}`} />
                                    <span className="leading-relaxed">{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
