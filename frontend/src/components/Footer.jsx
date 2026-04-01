import React from 'react';
import LinkedinIcon from './LinkedinIcon';

export default function Footer() {
  return (
    <footer className="bg-primary text-warm-surface py-8 px-6 border-t border-indigo-primary/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-sm text-warm-surface/70 font-medium">
          &copy; {new Date().getFullYear()} Prasad N. All rights reserved.
        </div>

        <div className="text-center">
          <p className="italic text-warm-surface/80 font-medium">"Engineering Precision. Delivering Results."</p>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://www.linkedin.com/in/prasad-n-787a7b121" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-warm-surface/70 hover:text-teal-secondary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}
