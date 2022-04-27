import React from "react";
import './Main.css';
import landingLogo from '../../images/landing-logo.svg'

function Main() {
    return (
        <div className="main">
            <section className="promo">
                <h1 className="promo__title">Учебный&nbsp;проект студента факультета&nbsp;Веб&#8209;разработки.</h1>
            </section>
            <section className="nav-tab">
                <a className="nav-tab__link" href="#">О проекте</a>
                <a className="nav-tab__link" href="#">Технологии</a>
                <a className="nav-tab__link" href="#">Студент</a>
            </section>
            <section className="about-project">
                <h2 className="about-projects__title">О проекте</h2>
                <hr className="main__line"></hr>
                <div className="about-projects__description">
                    <p className="about-projects__text">Дипломный проект включал 5 этапов</p>
                    <p className="about-projects__text">На выполнение диплома ушло 5 недель</p>
                    <p className="about-projects__text_2">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    <p className="about-projects__text_2">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
                <div className="about-projects__schedule">
                    <div className="about-projects__container_green"><p className="about-projects__text_3">1 неделя</p></div>
                    <div className="about-projects__container_grey"><p className="about-projects__text_3">4 недели</p></div>
                    <p className="about-projects__text_4">Back-end</p>
                    <p className="about-projects__text_4">Front-end</p>
                </div>
            </section>
            <section className="techs">
                <div className="techs__container">
                    <h2 className="techs__title">Технологии</h2>
                    <hr className="about-projects__line"></hr>
                    <h3 className="techs__title">7 технологий</h3>
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
            <section className="about-me">
                <div className="about-me__container">
                    <h2 className="techs__title">Студент</h2>
                    <hr className="about-projects__line"></hr>

                    <div className="about-me__container_2">
                        <div className="about-me__text">
                            <h3 className="about-me__text">Ренат</h3>
                            <p className="about-me__text">Фронтенд-разработчик, 35 лет</p>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a href="#">Vkontakte</a>
                            <a href="#">GitHub</a>
                        </div>
                        <img className="about-me__photo" src='https://st.depositphotos.com/1008939/3281/i/600/depositphotos_32817757-stock-photo-smiling-man.jpg' alt='Моё фото' />
                    </div>




                </div>
            </section>
            <section className="portfolio">
                <div className="portfolio__container">
                    <h3 className="about-me__text">Портфолио</h3>
                    <ul >
                        <li className="about-me__text">Статичный сайт &#8599;</li>
                        <hr className="about-projects__line"></hr>
                        <li className="about-me__text">Адаптивный сайт &#8599;</li>
                        <hr className="about-projects__line"></hr>
                        <li className="about-me__text">Одностратичное приложение &#8599;</li>
                    </ul>
                </div>
            </section>
            <section className="footer">
                <div className="footer__container">
                    <p className="footer__sign">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                    <hr className="about-projects__line"></hr>
                    <p className="">&copy; 2022</p>
                    <div className="footer__container_2">
                        <a className="about-projects__link">Яндекс.Практикум</a>
                        <a className="about-projects__link">GitHub</a>
                        <a className="about-projects__link">Vkontakte</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;