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
                <i class="fas fa-home-lg-alt nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="about.html" className="nav__link">
                <i class="fas fa-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="skills.html" className="nav__link">
                <i class="fas fa-file-code nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="portfolio.html" className="nav__link">
                <i class="fas fa-image nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="contact.html" className="nav__link">
                <i class="fas fa-paper-plane nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            class="fas fa-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
