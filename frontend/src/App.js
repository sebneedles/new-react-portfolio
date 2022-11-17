import React from 'react';
import Header from './components/header/Header';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Skills from './pages/skills/Skills';
import Work from './pages/work/Work';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
    </>
  );
}

export default App;
