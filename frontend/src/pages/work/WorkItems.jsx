import React from 'react';
import { useState } from 'react';

const WorkItems = ({ item }) => {
  const [modal, setModal] = useState(false);

  const [currentIndex, setCurrentindex] = useState(0);

  const previousImage = () => {
    const firstPicture = currentIndex === 0;
    const newIndex = firstPicture ? item.picture.length - 1 : currentIndex - 1;
    setCurrentindex(newIndex);
  };

  const nextImage = () => {
    const lastPicture = currentIndex === item.picture.length - 1;
    const newIndex = lastPicture ? 0 : currentIndex + 1;
    setCurrentindex(newIndex);
  };

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
      </div>

      {/* ITEM MODAL */}
      {modal && (
        <div className="modal">
          <div className="modal__overlay">
            <div className="modal__content">
              <div className="modal__title-gpe">
                <h3 className="modal__title">{item.title}</h3>
                <h4 className="modal__year">{item.year}</h4>
              </div>
              <div className="modal__details">
                <p className="modal__description">{item.description}</p>
                <p className="modal__technos">{item.technos}</p>

                {/* Lien du site */}
                <a
                  className="modal__url"
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.url}
                </a>
              </div>

              <div className="modal__image">
                {/* Fleche Gauche */}
                <div
                  style={{
                    position: 'absolute',
                    zIndex: '1000',
                    top: '45%',
                    left: '10px',
                  }}
                  onClick={previousImage}
                >
                  <i className="fas fa-caret-left modal__arrow"></i>
                </div>
                {/* Galerie d'images */}
                <img
                  className="modal__image-img"
                  src={item.picture[currentIndex]}
                  alt={item.title}
                />
                {/* Fleche Droite */}
                <div
                  style={{
                    position: 'absolute',
                    zIndex: '1000',
                    top: '45%',
                    right: '10px',
                  }}
                  onClick={nextImage}
                >
                  <i className="fas fa-caret-right modal__arrow"></i>
                </div>
              </div>

              {/* Description du projet */}
              <p className="modal__legend">{item.legende[currentIndex]}</p>

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
