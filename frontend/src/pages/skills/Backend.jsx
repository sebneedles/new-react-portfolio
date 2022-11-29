import React from 'react';
// import MongoLogo from '../../assets/mongodb.svg';
import MongoLogo from '../../assets/mongodb.svg';
import FirebaseLogo from '../../assets/firebase.svg';

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Développement Backend</h3>
      <div className="skills__box">
        {/* Groupe 1 */}
        <div className="skills__group">
          {/* Data 1 */}
          <div className="skills__data">
            <i className="fab fa-node-js"></i>
            <div>
              <h3 className="skills__name">Node JS</h3>
            </div>
          </div>
          {/* Data 2 */}
          <div className="skills__data">
            <img src={MongoLogo} alt="MongoDB" className="mongo" />
            <div>
              <h3 className="skills__name">MongoDB</h3>
            </div>
          </div>
          {/* Data 3 */}
          <div className="skills__data">
            <img src={FirebaseLogo} alt="Firebase" className="firebase" />
            <div>
              <h3 className="skills__name">Firebase</h3>
            </div>
          </div>
          {/* Data 4 */}
          <div className="skills__data">
            <i className="fa-brands fa-php"></i>
            <div>
              <h3 className="skills__name">PHP</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
