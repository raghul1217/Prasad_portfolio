import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Trophy } from 'lucide-react';

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
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-display font-bold text-primary mb-10 md:mb-16 gradient-heading tracking-wide">
            About Me
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left: Summary */}
            <motion.div variants={itemVariants} className="w-full lg:w-1/2 glass-card p-6 md:p-10 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="text-secondary leading-relaxed text-base md:text-lg space-y-6 relative z-10">
                <p>
                  I bring <strong className="text-indigo-primary font-bold">16+ years of diverse experience</strong> across tool room, machine shop floor, sheetmetal, and heavy fabrication — including specialized expertise in tool maintenance and foundries. My core strengths lie in R&D product design, jig & fixture development, and SPM engineering.
                </p>
                <p>
                  I work with a sharp focus on cost reduction, efficiency, and delivering against management objectives — from greenfield project setup to global client deliveries.
                </p>
              </div>
            </motion.div>

            {/* Right: Stat Cards */}
            <motion.div variants={itemVariants} className="w-full lg:w-1/2 grid grid-cols-2 gap-4 sm:gap-6">
              
              <div className="glass-card p-5 sm:p-8 rounded-2xl hover:-translate-y-1 transition-all relative group overflow-hidden hover:shadow-lg hover:shadow-indigo-primary/10 border-b-4 border-b-indigo-primary/20 hover:border-b-indigo-primary">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-4xl sm:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-primary to-blue-600 mb-2">
                  <CountUp to={16} suffix="+" />
                </h3>
                <p className="text-xs sm:text-sm font-bold text-secondary uppercase tracking-widest mt-2">Years of Experience</p>
              </div>

              <div className="glass-card p-5 sm:p-8 rounded-2xl hover:-translate-y-1 transition-all relative group overflow-hidden hover:shadow-lg hover:shadow-teal-secondary/10 border-b-4 border-b-teal-secondary/20 hover:border-b-teal-secondary">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-4xl sm:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-secondary to-emerald-500 mb-2">
                  <CountUp to={15} suffix="+" />
                </h3>
                <p className="text-xs sm:text-sm font-bold text-secondary uppercase tracking-widest mt-2">Projects Led</p>
                <p className="text-[10px] sm:text-xs text-secondary/70 mt-1 font-medium">(₹15 Cr value)</p>
              </div>

              <div className="glass-card p-5 sm:p-8 rounded-2xl hover:-translate-y-1 transition-all relative group overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 border-b-4 border-b-purple-500/20 hover:border-b-purple-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-4xl sm:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500 mb-2">
                  <CountUp to={10} suffix="+" />
                </h3>
                <p className="text-xs sm:text-sm font-bold text-secondary uppercase tracking-widest mt-2">Global Clients</p>
              </div>

              <div className="glass-card p-5 sm:p-8 rounded-2xl hover:-translate-y-1 transition-all relative group overflow-hidden hover:shadow-lg hover:shadow-gold-highlight/20 border-b-4 border-b-gold-highlight flex flex-col justify-center items-start">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-highlight/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="mb-3 text-gold-highlight bg-gold-highlight/10 p-3 rounded-xl inline-block">
                  <Trophy size={32} strokeWidth={2.5} />
                </h3>
                <p className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest leading-relaxed">ACMA Award Winner</p>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
