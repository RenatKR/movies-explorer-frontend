import React from "react";
import './Main.css';
import landingLogo from '../../images/landing-logo.svg'

function Main() {
    return (
        <div className="main">
            <section className="promo">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            </section>
            <section className="nav-tab">
                <a className="nav-tab__link" href="#">О проекте</a>
                <a className="nav-tab__link" href="#">Технологии</a>
                <a className="nav-tab__link" href="#">Студент</a>
            </section>
            <section className="about-project">
                <h2 className="about-projects__title">О проекте</h2>
                <div className="about-projects__grid-container_1">
                    <p>Дипломный проект включал 5 этапов</p>
                    <p>На выполнение диплома ушло 5 недель</p>
                    <p>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    <p>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
                <div className="about-projects__grid-container_2">
                    <p>1 неделя</p>
                    <p>4 недели</p>
                    <p>Back-end</p>
                    <p>Front-end</p>
                </div>
            </section>
            <section className="techs">
                <h2>Технологии</h2>
                <h3>7 технологий</h3>
                <p>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                
            </section>
            <section className="about-me">

            </section>
            <section className="portfolio">

            </section>
        </div>
    );
}

export default Main;