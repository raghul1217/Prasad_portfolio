import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-primary font-sans antialiased relative selection:bg-indigo-primary/20 overflow-x-hidden">
      
      {/* Super Vibrant Ambient Gradient Background integrated with dot pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/20 blur-[140px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-teal-400/20 blur-[130px]"></div>
        <div className="absolute top-[40%] left-[50%] w-[40%] h-[40%] rounded-full bg-fuchsia-500/15 blur-[120px]"></div>
        <div className="absolute inset-0 bg-dot-pattern"></div>
      </div>
      
      <div className="relative z-10 font-sans">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
