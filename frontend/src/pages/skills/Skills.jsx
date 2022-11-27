import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import Design from './Design';
import OtherStack from './OtherStack';

const Skills = () => {
  return (
    <section className="skills section" id="competences">
      <h2 className="section__title">Compétences</h2>
      <span className="section__subtitle">Développement</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Design />
        <OtherStack />
      </div>
    </section>
  );
};

export default Skills;
