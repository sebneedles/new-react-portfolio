import React from 'react';
import Header from './components/header/Header';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
}

export default App;
