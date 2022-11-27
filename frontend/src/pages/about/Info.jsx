import React from 'react';

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="fa-solid fa-award about__icon"></i>
        <h3 className="about__title">Expériences</h3>
        <span className="about__subtitle">8 ans</span>
      </div>
      <div className="about__box">
        <i className="fa-solid fa-suitcase about__icon"></i>
        <h3 className="about__title">Complets</h3>
        <span className="about__subtitle">+ de 15 projets web</span>
      </div>
      <div className="about__box">
        <i className="fas fa-concierge-bell about__icon"></i>
        <h3 className="about__title">Disponibilité</h3>
        <span className="about__subtitle">Pour vos projets</span>
      </div>
    </div>
  );
};

export default Info;
