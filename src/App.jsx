import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills'; // ✅ Import Skills Component
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <About />
      <Skills />  {/* ✅ Added Skills Section here */}
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
