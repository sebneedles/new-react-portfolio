import React from 'react';

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Développement Frontend</h3>
      <div className="skills__box">
        {/* Groupe 1 */}
        <div className="skills__group">
          {/* Data 1 */}
          <div className="skills__data">
            <i className="fas fa-certificate"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Intermédiaire</span>
            </div>
          </div>

          {/* Data 2 */}
          <div className="skills__data">
            <i className="fas fa-certificate"></i>
            <div>
              <h3 className="skills__name">CSS / SASS</h3>
              <span className="skills__level">Intermédiaire</span>
            </div>
          </div>
          {/* Data 3 */}
          <div className="skills__data">
            <i className="fas fa-certificate"></i>
            <div>
              <h3 className="skills__name">Javascript</h3>
              <span className="skills__level">Débutant</span>
            </div>
          </div>
        </div>

        {/* Groupe 2 */}
        <div className="skills__group">
          {/* Data 4 */}
          <div className="skills__data">
            <i className="fas fa-certificate"></i>
            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermédiaire</span>
            </div>
          </div>
          {/* Data 5 */}
          <div className="skills__data">
            <i className="fas fa-certificate"></i>
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Débutant</span>
            </div>
          </div>
          {/* Data 6 */}
          <div className="skills__data">
            <i className="fas fa-certificate"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Débutant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
