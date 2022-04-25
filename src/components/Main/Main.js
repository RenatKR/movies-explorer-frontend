import React from "react";
import './Main.css';
import landingLogo from '../../images/landing-logo.svg'

function Main() {
    return (
        <div className="main">
            <section className="promo">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                {/* <img src={landingLogo} className="header__logo" alt="profile" /> */}
            </section>
            <section className="nav-tab">
                <a className="nav-tab__link" href="#">О проекте</a>
                <a className="nav-tab__link" href="#">Технологии</a>
                <a className="nav-tab__link" href="#">Студент</a>
            </section>
            <section className="about-project">
                

            </section>
            <section className="techs">

            </section>
            <section className="about-me">

            </section>
            <section className="portfolio">

            </section>
        </div>
    );
}

export default Main;