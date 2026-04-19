import React, { useState } from 'react';
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

  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mqegjowg', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        console.error('Formspree Error Response:', data);
        setStatus('error');
      }
    } catch (error) {
      console.error('Formspree Fetch Error:', error);
      setStatus('error');
    }
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
                <span className="font-medium text-lg">Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div variants={itemVariants}>
            <form className="bg-warm-surface p-8 shadow-sm border border-border-warm flex flex-col gap-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-primary mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-warm-bg border border-border-warm rounded focus:outline-none focus:border-indigo-primary focus:ring-1 focus:ring-indigo-primary transition-colors placeholder:text-secondary/50 font-medium text-primary"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-warm-bg border border-border-warm rounded focus:outline-none focus:border-indigo-primary focus:ring-1 focus:ring-indigo-primary transition-colors placeholder:text-secondary/50 font-medium text-primary"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-primary mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  value={formState.message}
                  onChange={handleInputChange}
                  rows="4" 
                  className="w-full px-4 py-3 bg-warm-bg border border-border-warm rounded focus:outline-none focus:border-indigo-primary focus:ring-1 focus:ring-indigo-primary transition-colors placeholder:text-secondary/50 font-medium text-primary resize-none"
                  placeholder="How can we work together?"
                ></textarea>
              </div>

              <motion.button 
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full mt-2 py-4 font-bold rounded shadow flex items-center justify-center gap-2 transition-all ${
                  status === 'sending' ? 'bg-secondary cursor-not-allowed' : 'bg-gradient-to-r from-indigo-primary to-teal-secondary text-white hover:shadow-lg'
                }`}
              >
                <span>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </span>
                <Send size={18} />
              </motion.button>

              {status === 'success' && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-teal-600 font-bold text-center text-sm"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-rose-600 font-bold text-center text-sm"
                >
                  ✕ Failed to send. If this is the first time, check your inbox to verify your email with Formspree.
                </motion.p>
              )}
            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
