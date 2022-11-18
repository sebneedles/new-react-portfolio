import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_w1kkb6b',
        'template_um2oudn',
        form.current,
        'DpUAQmrF045QD2-Ht'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Entrons en contact</h2>
      <span className="section__subtitle">Contactez-moi</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Retrouvez-moi</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="fas fa-paper-plane contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                sebastienpansini@gmail.com
              </span>
              <a
                href="mailto:sebastienpansini@gmail.com"
                className="contact__button"
              >
                M'écrire{' '}
                <i className="fas fa-arrow-right contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="fab fa-linkedin contact__card-icon"></i>
              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data">
                https://www.linkedin.com/in/sebastien-pansini
              </span>{' '}
              <a
                href="https://www.linkedin.com/in/sebastien-pansini"
                className="contact__button"
                rel="noreferrer"
              >
                Voir <i className="fas fa-arrow-right contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="fab fa-github-square contact__card-icon"></i>
              <h3 className="contact__card-title">GitHub</h3>
              <span className="contact__card-data">
                https://github.com/sebneedles
              </span>{' '}
              <a
                href="https://github.com/sebneedles"
                target="_blank"
                rel="noreferrer"
                className="contact__button"
              >
                Voir <i className="fas fa-arrow-right contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Décrivez votre projet</h3>
          <form className="contact__form" ref={form} onSubmit={sendEmail}>
            <div className="contact__form-div">
              <label className="contact__form-tag">Nom</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insérez votre Nom"
                required="true"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insérez votre Email"
                required="true"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Votre message"
                required="true"
              ></textarea>
            </div>
            <button className="button button--flex">
              Envoyer le message{' '}
              <i className="fas fa-paper-plane button__icon"></i>
            </button>
            {done && ' Message envoyé avec succès !'}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
