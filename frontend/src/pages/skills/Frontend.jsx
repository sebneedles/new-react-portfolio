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
            <i className="fab fa-html5"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
            </div>
          </div>

          {/* Data 2 */}
          <div className="skills__data">
            <i className="fab fa-css3-alt"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
            </div>
          </div>
          {/* Data 3 */}
          <div className="skills__data">
            <i className="fab fa-sass"></i>
            <div>
              <h3 className="skills__name">Sass</h3>
            </div>
          </div>
          {/* Data 4 */}
          <div className="skills__data">
            <i class="fa-brands fa-wordpress"></i>
            <div>
              <h3 className="skills__name">Wordpress</h3>
            </div>
          </div>
        </div>

        {/* Groupe 2 */}
        <div className="skills__group">
          {/* Data 5 */}
          <div className="skills__data">
            <i className="fab fa-js"></i>
            <div>
              <h3 className="skills__name">Javascript</h3>
            </div>
          </div>
          {/* Data 6 */}
          <div className="skills__data">
            <i className="fab fa-react"></i>
            <div>
              <h3 className="skills__name">React</h3>
            </div>
          </div>
          {/* Data 7 */}
          <div className="skills__data">
            <i className="fab fa-git-alt"></i>
            <div>
              <h3 className="skills__name">Git</h3>
            </div>
          </div>
          {/* Data 8 */}
          <div className="skills__data">
            <i class="fa-brands fa-bootstrap"></i>
            <div>
              <h3 className="skills__name">Bootstrap</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
