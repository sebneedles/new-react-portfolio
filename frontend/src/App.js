import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ScrollUp from './components/scrollup/ScrollUp';
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
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
