import React from 'react';
import '../App.css';
import Hero from './Hero';
import NavBar from '../components/NavBar';
import Projects from './Projects';
import Skills from './Skills';
import ContactMe from './ContactMe';

function App() {
  return (
    <div className='h-screen w-screen bg-gradient-to-r overflow-x-hidden from-black to-purple-700 snap-y text-white snap-mandatory overflow-y-scroll scrollbar scrollbar-track-yellow-300 scrollbar-thumb-purple-600 z-0'>

      <NavBar />

      <section id='hero' className='snap-center'>
      <Hero />
      </section>

      <section id="projects" className='snap-start'>
        <Projects />
      </section>
      
      <section id="skills" className='snap-center'>
        <Skills />
      </section>
      
      <section id="contactMe" className='snap-center'>
        <ContactMe />
      </section> 
    </div>
  );
}

export default App;
