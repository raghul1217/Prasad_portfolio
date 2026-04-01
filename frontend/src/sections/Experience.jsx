import React from 'react';
import { motion } from 'framer-motion';

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
    duration: "Oct 2024",
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

  const cardVariantsLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const cardVariantsRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const cardVariantsMobile = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="experience" className="py-24 bg-warm-bg px-6 relative">
      <div className="max-w-6xl mx-auto">
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
            className="text-3xl md:text-4xl font-display font-bold text-primary mb-16 bracket-heading tracking-wide"
          >
            Work Experience
          </motion.h2>

          <div className="relative">
            {/* Center Timeline Line (Desktop) / Left Line (Mobile) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border-warm"></div>
            <div className="md:hidden absolute left-4 h-full w-px bg-border-warm"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div key={exp.id} className="relative flex flex-col md:flex-row items-center w-full">
                    
                    {/* Timeline Dot (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-primary border-4 border-warm-bg z-10"></div>
                    
                    {/* Timeline Dot (Mobile) */}
                    <div className="md:hidden absolute left-4 transform -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-primary border-2 border-warm-bg z-10 mt-6"></div>

                    {/* Desktop Layout Branches */}
                    <div className={`w-full md:w-1/2 pl-12 pr-0 md:px-8 ${isEven ? 'md:pr-12 md:pl-0 md:text-right' : 'md:pl-12 md:pr-0 md:ml-auto'}`}>
                      <motion.div 
                        variants={{
                          hidden: { opacity: 0, y: 30 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } // Simpler entrance for both viewing targets
                        }}
                        className={`bg-warm-surface p-8 shadow-sm border border-border-warm relative group hover:-translate-y-1 transition-transform ${isEven ? 'md:text-left' : 'text-left'}`}
                      >
                        {/* Teal Accent Border on Hover */}
                        <div className={`absolute top-0 h-full w-1 bg-teal-secondary transform ${isEven ? 'md:right-0 md:translate-x-full group-hover:md:translate-x-0' : ''} left-0 -translate-x-full group-hover:translate-x-0 transition-transform`}></div>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
                          <h3 className="text-xl font-display font-bold text-primary">{exp.role}</h3>
                          {exp.isCurrent && (
                            <span className="inline-block px-3 py-1 text-xs font-semibold bg-teal-secondary/10 text-teal-secondary rounded-full whitespace-nowrap">
                              Current Role
                            </span>
                          )}
                        </div>

                        <div className="mb-4">
                          <p className="text-indigo-primary font-medium text-lg">{exp.company}</p>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-secondary">
                            <span>📅 {exp.duration}</span>
                            <span>📍 {exp.location}</span>
                          </div>
                          <p className="text-sm mt-2 italic text-secondary/80">{exp.about}</p>
                        </div>

                        {exp.clients && (
                          <div className="mb-5 flex flex-wrap gap-2">
                            {exp.clients.map((client, i) => (
                              <span key={i} className={`text-xs px-2 py-1 rounded-full ${i % 2 === 0 ? 'bg-indigo-primary/10 text-indigo-primary' : 'bg-teal-secondary/10 text-teal-secondary'}`}>
                                {client}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="space-y-4">
                          {exp.responsibilities && (
                            <ul className="space-y-2">
                              {exp.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start text-secondary text-sm">
                                  <span className="text-teal-secondary mr-2 mt-0.5 opacity-70">▹</span>
                                  <span className="leading-relaxed">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {exp.designResponsibilities && (
                            <div>
                              <h4 className="text-sm font-bold text-primary mb-2 mt-4">Design Responsibilities</h4>
                              <ul className="space-y-2">
                                {exp.designResponsibilities.map((resp, idx) => (
                                  <li key={idx} className="flex items-start text-secondary text-sm">
                                    <span className="text-teal-secondary mr-2 mt-0.5 opacity-70">▹</span>
                                    <span className="leading-relaxed">{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {exp.manufacturingResponsibilities && (
                            <div>
                              <h4 className="text-sm font-bold text-primary mb-2 mt-4">Manufacturing Responsibilities</h4>
                              <ul className="space-y-2">
                                {exp.manufacturingResponsibilities.map((resp, idx) => (
                                  <li key={idx} className="flex items-start text-secondary text-sm">
                                    <span className="text-indigo-primary mr-2 mt-0.5 opacity-70">▹</span>
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
