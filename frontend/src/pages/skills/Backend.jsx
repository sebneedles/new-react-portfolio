import React from 'react';

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Développement Backend</h3>
      <div className="skills__box">
        {/* Groupe 1 */}
        <div className="skills__group">
          {/* Data 1 */}
          <div className="skills__data">
            <i className="fas fa-certificate"></i>
            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">Débutant</span>
            </div>
          </div>

          {/* Data 2 */}
          <div className="skills__data">
            <i className="fas fa-certificate"></i>
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Débutant</span>
            </div>
          </div>
          {/* Data 3 */}
          <div className="skills__data">
            <i className="fas fa-certificate"></i>
            <div>
              <h3 className="skills__name">Node JS</h3>
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
              <h3 className="skills__name">Express JS</h3>
              <span className="skills__level">Débutant</span>
            </div>
          </div>
          {/* Data 5 */}
          <div className="skills__data">
            <i className="fas fa-certificate"></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Débutant</span>
            </div>
          </div>
          {/* Data 6 */}
          <div className="skills__data">
            <i className="fas fa-certificate"></i>
            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Débutant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
