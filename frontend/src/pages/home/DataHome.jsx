import React from 'react';

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Sébastien Pansini <span className="home__hand">👋 </span>
      </h1>
      <h3 className="home__subtitle">Webmaster</h3>
      <p className="home__description">
        Je suis Webmaster et Infographiste Web basé à Orgon (13), bienvenue sur
        mon portfolio.
      </p>
      <a href="#portfolio" className="button button--flex">
        Voir mes projets<i className="fas fa-code button__icon"></i>
      </a>
    </div>
  );
};

export default Data;
