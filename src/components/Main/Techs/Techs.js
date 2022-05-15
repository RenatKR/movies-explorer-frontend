import React from "react";

function Techs() {
  return (
    <section className="techs" name='techs'>
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>
        <hr className="techs__line"></hr>
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className="techs__grid">
          <div className="techs__block">HTML</div>
          <div className="techs__block">CSS</div>
          <div className="techs__block">JS</div>
          <div className="techs__block">React</div>
          <div className="techs__block">Git</div>
          <div className="techs__block">Express.js</div>
          <div className="techs__block">MongoDB</div>
        </div>
      </div>
    </section>
  );
}

export default Techs;