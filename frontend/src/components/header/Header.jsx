import React, { useState } from 'react';

const Header = () => {
  //    Toggle Menu
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Sébastien Pansini
        </a>
        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="index.html" className="nav__link active-link">
                <i className="fas fa-home-lg-alt nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="about.html" className="nav__link">
                <i className="fas fa-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="skills.html" className="nav__link">
                <i className="fas fa-file-code nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="portfolio.html" className="nav__link">
                <i className="fas fa-image nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="contact.html" className="nav__link">
                <i className="fas fa-paper-plane nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="fas fa-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
