import React from 'react';
import { Mail, Phone } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 border-t border-slate-800 pt-16 pb-8 overflow-hidden text-slate-300 z-10">
      {/* Background ambient glow inside footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 h-[200px] bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 border-b border-slate-800 pb-12">

          {/* Logo Brand Side */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="text-4xl font-display font-black text-white whitespace-nowrap tracking-tighter mb-4 inline-block group">
              <span className="text-teal-400 font-light group-hover:text-indigo-400 transition-colors">[</span>
              PN
              <span className="text-teal-400 font-light group-hover:text-indigo-400 transition-colors">]</span>
            </a>
            <p className="max-w-xs text-slate-400 leading-relaxed font-medium">
              Precision engineering solutions from concept to production floor. Let's build the future together.
            </p>
          </div>

          {/* Socials & Quick Links */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-4">
              <a
                href="mailto:prasadshetty60@gmail.com"
                className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center border border-slate-700 hover:border-teal-400 hover:text-teal-400 hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] transition-all duration-300"
                aria-label="Send an Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/prasad-n-787a7b121"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center border border-slate-700 hover:border-indigo-400 hover:text-indigo-400 hover:shadow-[0_0_20px_rgba(129,140,248,0.2)] transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
            <div className="flex gap-4 text-sm font-bold text-slate-500">
              <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
              <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-sm font-medium text-slate-500 text-center">
          <p>&copy; {new Date().getFullYear()} Prasad N. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
