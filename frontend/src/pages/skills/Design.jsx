import React from 'react';

const Design = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Graphic Design</h3>
      <div className="skills__box">
        {/* Groupe 1 */}
        <div className="skills__group">
          {/* Data 1 */}
          <div className="skills__data">
            <i className="fas fa-certificate"></i>
            <div>
              <h3 className="skills__name">Suite Adobe</h3>
              <span className="skills__level">Expert</span>
            </div>
          </div>

          {/* Data 2 */}
          <div className="skills__data">
            <i className="fas fa-certificate"></i>
            <div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__level">Débutant</span>
            </div>
          </div>
          {/* Data 3 */}
          <div className="skills__data">
            <i className="fas fa-certificate"></i>
            <div>
              <h3 className="skills__name">Mass Mailings</h3>
              <span className="skills__level">Intermédiaire</span>
            </div>
          </div>
        </div>

        {/* Groupe 2 */}
        <div className="skills__group">
          {/* Data 4 */}
          <div className="skills__data">
            <i className="fas fa-certificate"></i>
            <div>
              <h3 className="skills__name">SEO, SEA</h3>
              <span className="skills__level">Intermédiaire</span>
            </div>
          </div>
          {/* Data 5 */}
          <div className="skills__data">
            <i className="fas fa-certificate"></i>
            <div>
              <h3 className="skills__name">Google Analytics, Ads</h3>
              <span className="skills__level">Intermédiaire</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
