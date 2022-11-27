import React from 'react';
import AffinityLogo from '../../assets/affinity.svg';

const Design = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Conception graphique</h3>
      <div className="skills__box">
        {/* Groupe 1 */}
        <div className="skills__group">
          {/* Data 1 */}
          <div className="skills__data">
            <p className="photoshop">Ps</p>
            <div>
              <h3 className="skills__name">Photoshop</h3>
            </div>
          </div>

          {/* Data 2 */}
          <div className="skills__data">
            <p className="illustrator">Ai</p>
            <div>
              <h3 className="skills__name">Illustrator</h3>
            </div>
          </div>

          {/* Data 3 */}
          <div className="skills__data">
            <p className="indesign">Id</p>
            <div>
              <h3 className="skills__name">InDesign</h3>
            </div>
          </div>
        </div>

        {/* Groupe 2 */}
        <div className="skills__group">
          {/* Data 4 */}
          <div className="skills__data">
            <p className="after-effect">Ae</p>
            <div>
              <h3 className="skills__name">After Effect</h3>
            </div>
          </div>
          {/* Data 5 */}
          <div className="skills__data">
            <img src={AffinityLogo} alt="Affinity suite" className="affinity" />
            <div>
              <h3 className="skills__name">Suite Affinity</h3>
            </div>
          </div>
          {/* Data 6 */}
          <div className="skills__data">
            <i className="fab fa-figma"></i>
            <div>
              <h3 className="skills__name">Figma</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
