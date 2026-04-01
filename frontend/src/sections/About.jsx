import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

function CountUp({ to, duration = 2, suffix = '', prefix = '' }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, to, {
        duration,
        ease: "easeOut",
        onUpdate(v) {
          setValue(Math.round(v));
        }
      });
      return () => controls.stop();
    }
  }, [inView, to, duration]);

  return <span ref={ref}>{prefix}{value}{suffix}</span>;
}

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 bg-section-alt px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-display font-bold text-primary mb-12 bracket-heading tracking-wide">
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Summary */}
            <motion.div variants={itemVariants} className="text-secondary leading-relaxed text-lg space-y-6">
              <p>
                I bring <strong className="text-primary font-semibold">16 years of hands-on experience</strong> across tool room, machine shop, sheetmetal, and heavy fabrication environments. My core strengths lie in R&D product design, jig & fixture development, special purpose machine (SPM) design, and manufacturing process improvement.
              </p>
              <p>
                I work with a sharp focus on cost reduction, efficiency, and delivering against management objectives — from greenfield project setup to global client deliveries.
              </p>
            </motion.div>

            {/* Right: Stat Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 md:gap-6">
              
              <div className="bg-warm-surface p-6 shadow-sm border border-border-warm hover:-translate-y-1 transition-transform relative group overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-[3px] bg-teal-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform"></div>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-indigo-primary mb-2">
                  <CountUp to={16} suffix="+" />
                </h3>
                <p className="text-sm font-medium text-secondary uppercase tracking-wider">Years of Experience</p>
              </div>

              <div className="bg-warm-surface p-6 shadow-sm border border-border-warm hover:-translate-y-1 transition-transform relative group overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-[3px] bg-teal-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform"></div>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-indigo-primary mb-2">
                  <CountUp to={15} suffix="+" />
                </h3>
                <p className="text-sm font-medium text-secondary uppercase tracking-wider">Projects Led</p>
                <p className="text-xs text-secondary/70 mt-1">(₹15 Cr value)</p>
              </div>

              <div className="bg-warm-surface p-6 shadow-sm border border-border-warm hover:-translate-y-1 transition-transform relative group overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-[3px] bg-teal-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform"></div>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-indigo-primary mb-2">
                  <CountUp to={10} suffix="+" />
                </h3>
                <p className="text-sm font-medium text-secondary uppercase tracking-wider">Global Clients</p>
              </div>

              <div className="bg-warm-surface p-6 shadow-sm border border-border-warm border-t-gold-highlight border-t-4 hover:-translate-y-1 transition-transform flex flex-col justify-center">
                <h3 className="text-4xl mb-3 flex items-center gap-2">
                  🏆
                </h3>
                <p className="text-sm font-medium text-secondary uppercase tracking-wider">ACMA Award Winner 2014</p>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
