import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import LinkedinIcon from '../components/LinkedinIcon';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="py-24 bg-warm-bg px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-16 gradient-heading tracking-wide">
            Get in Touch
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left: Contact Details */}
          <motion.div variants={itemVariants} className="space-y-8">
            <p className="text-lg text-secondary leading-relaxed mb-8">
              Whether you are looking to optimize an existing production line or develop a new product from scratch, I'm ready to bring <strong className="text-primary font-medium">16 years of engineering precision</strong> to your next project.
            </p>

            <div className="space-y-6">
              <a href="tel:+919448736591" className="flex items-center gap-4 text-secondary hover:text-indigo-primary transition-colors group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-border-warm group-hover:border-indigo-primary/30 group-hover:shadow-sm transition-all text-indigo-primary">
                  <Phone size={20} />
                </div>
                <span className="font-medium text-lg">+91 9448736591</span>
              </a>

              <a href="mailto:prasadshetty60@gmail.com" className="flex items-center gap-4 text-secondary hover:text-indigo-primary transition-colors group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-border-warm group-hover:border-indigo-primary/30 group-hover:shadow-sm transition-all text-indigo-primary">
                  <Mail size={20} />
                </div>
                <span className="font-medium text-lg text-wrap break-all">prasadshetty60@gmail.com</span>
              </a>

              <a href="https://www.linkedin.com/in/prasad-n-787a7b121" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-secondary hover:text-indigo-primary transition-colors group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-border-warm group-hover:border-indigo-primary/30 group-hover:shadow-sm transition-all text-indigo-primary">
                  <LinkedinIcon size={20} />
                </div>
                <span className="font-medium text-lg break-all">linkedin.com/in/prasad-n-787a7b121</span>
              </a>

              <div className="flex items-center gap-4 text-secondary">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-border-warm text-teal-secondary">
                  <MapPin size={20} />
                </div>
                <span className="font-medium text-lg">Mysuru, Karnataka, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div variants={itemVariants}>
            <form className="bg-warm-surface p-8 shadow-sm border border-border-warm flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-primary mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-warm-bg border border-border-warm rounded focus:outline-none focus:border-indigo-primary focus:ring-1 focus:ring-indigo-primary transition-colors placeholder:text-secondary/50 font-medium text-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-warm-bg border border-border-warm rounded focus:outline-none focus:border-indigo-primary focus:ring-1 focus:ring-indigo-primary transition-colors placeholder:text-secondary/50 font-medium text-primary"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-primary mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 bg-warm-bg border border-border-warm rounded focus:outline-none focus:border-indigo-primary focus:ring-1 focus:ring-indigo-primary transition-colors placeholder:text-secondary/50 font-medium text-primary resize-none"
                  placeholder="How can we work together?"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-2 py-4 bg-gradient-to-r from-indigo-primary to-teal-secondary text-white font-bold rounded shadow flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                <span>Send Message</span>
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
