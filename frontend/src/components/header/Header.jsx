import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import CV from '../../assets/cv-sebastien-pansini.pdf';

const Header = () => {
  //    Change Background Header
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');

    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  });

  //    Toggle Menu
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          <img src={Logo} alt="logo SP" className="monlogo" />
          {/* Sébastien Pansini */}
        </a>
        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#accueil"
                onClick={() => setActiveNav('#accueil')}
                className={
                  activeNav === '#accueil'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="fas fa-home-lg-alt nav__icon"></i> Accueil
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#a-propos"
                onClick={() => setActiveNav('#a-propos')}
                className={
                  activeNav === '#a-propos'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="fas fa-user nav__icon"></i> A Propos
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#competences"
                onClick={() => setActiveNav('#competences')}
                className={
                  activeNav === '#competences'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="fas fa-file-code nav__icon"></i> Compétences
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav('#portfolio')}
                className={
                  activeNav === '#portfolio'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="fas fa-image nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={
                  activeNav === '#contact'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
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
