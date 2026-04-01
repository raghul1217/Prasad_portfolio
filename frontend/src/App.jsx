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
    <div className="min-h-screen bg-warm-bg text-primary font-sans antialiased relative selection:bg-indigo-primary/20">
      <div className="fixed inset-0 z-0 pointer-events-none bg-dot-pattern"></div>
      
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
