import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Sébastien Pansini</h1>

        <ul className="footer__list">
          <li>
            <a href="#a-propos" className="footer__link">
              A propos
            </a>
          </li>
          <li>
            <a href="#competences" className="footer__link">
              Compétences
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/sebastien-pansini/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/sebneedles"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github-square"></i>
          </a>
        </div>

        <span className="footer__copy">
          2022 &#169; Sébastien Pansini. Tous droits réservés.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
