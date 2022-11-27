import React from 'react';

const OtherStack = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Autres</h3>
      <div className="skills__box">
        {/* Groupe 1 */}
        <div className="skills__group">
          {/* Data 1 */}
          <div className="skills__data">
            <i className="fab fa-mailchimp"></i>
            <div>
              <h3 className="skills__name">Mass Mailings</h3>
            </div>
          </div>
          {/* Data 2 */}
          <div className="skills__data">
            <i className="fab fa-google"></i>
            <div>
              <h3 className="skills__name">Outils Google</h3>
            </div>
          </div>
          {/* Data 3 */}
          <div className="skills__data">
            <i class="fas fa-chart-line"></i>
            <div>
              <h3 className="skills__name">SEO / SEA</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherStack;
