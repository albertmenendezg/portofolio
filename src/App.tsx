import React from 'react';
import Navbar from './components/Elements/Navbar/Navbar';
import Home from './components/Elements/Home/Home';
import About from './components/Elements/About/About';
import Skills from './components/Elements/Skills/Skills';
import Experience from './components/Elements/Experience/Experience';

function App() {
  return (
    <main className='bg-gray-800 w-full min-h-screen px-4 text-white'>
      <Navbar />
      <div className='md:px-24 flex flex-col'>
        <Home />
        <About />
        <Skills />
        <Experience />
      </div>
    </main>
  );
}

export default App;
