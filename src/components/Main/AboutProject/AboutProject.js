import React from "react";

function AboutProject() {
    return (
        <section className="about-project" name='about-project'>
            <div className="about-project__container">
                <h2 className="about-project__title">О проекте</h2>
                <hr className="about-project__line"></hr>
                <div className="about-project__description">
                    <p className="about-project__text about-project__grid-area_location_a">Дипломный проект включал 5 этапов</p>
                    <p className="about-project__text about-project__grid-area_location_c">На выполнение диплома ушло 5 недель</p>
                    <p className="about-project__text_2 about-project__grid-area_location_b">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    <p className="about-project__text_2 about-project__grid-area_location_d">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
                <div className="about-project__schedule">
                    <div className="about-project__container_green"><p className="about-project__text_3">1 неделя</p></div>
                    <div className="about-project__container_grey"><p className="about-project__text_3">4 недели</p></div>
                    <p className="about-project__text_4">Back-end</p>
                    <p className="about-project__text_4">Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;