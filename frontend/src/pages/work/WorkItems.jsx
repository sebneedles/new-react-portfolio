import React from 'react';
import { useState } from 'react';

const WorkItems = ({ item }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  // Empecher le scroll pendant l'affichage de la Modal
  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      {/* ITEM CARD */}
      <div className="work__card" key={item.id}>
        <img src={item.image} alt={item.title} className="work__img" />
        <h3 className="work__title">{item.title}</h3>
        <button className="work__button" onClick={toggleModal}>
          Découvrir{' '}
          <i className="fas fa-angle-double-right work__button-icon"></i>
        </button>
        {/* <button className="work__button" onClick={toggleModal}>
          Découvrir
        </button> */}
      </div>

      {/* ITEM MODAL */}
      {modal && (
        <div className="modal">
          <div className="modal__overlay" onClick={toggleModal}>
            <div className="modal__content">
              <div className="modal__title-gpe">
                <h3 className="modal__title">{item.title}</h3>
                <span className="modal__separator"> | </span>
                <h4 className="modal__year">{item.year}</h4>
              </div>
              <p className="modal__description">{item.description}</p>
              <p className="modal__infos">{item.infos}</p>
              <div className="modal__image">
                <img
                  className="modal__image-img"
                  src={item.picture}
                  alt={item.title}
                />
              </div>

              <a
                className={'modal__url' ? 'modal__url' : ''}
                //className="modal__url"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {item.url}
              </a>
              <i
                className="fas fa-times close__modal"
                onClick={toggleModal}
              ></i>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkItems;
