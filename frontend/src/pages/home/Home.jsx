import React from 'react';
import Data from './DataHome';

const Home = () => {
  return (
    <section className="home section" id="accueil">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__img"></div>

          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;
