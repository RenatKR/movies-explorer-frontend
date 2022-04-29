import React from "react";

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio__container">
                <h3 className="portfolio__title">Портфолио</h3>
                <ul className="portfolio__list" >
                    <li className="portfolio__item"><p className="portfolio__text_m">Статичный сайт</p><p className="portfolio__text_l">&#8599;</p></li>
                    <hr className="about-projects__line"></hr>
                    <li className="portfolio__item"><p className="portfolio__text_m">Адаптивный сайт</p><p className="portfolio__text_l">&#8599;</p></li>
                    <hr className="about-projects__line"></hr>
                    <li className="portfolio__item"><p className="portfolio__text_m">Одностратичное приложение</p><p className="portfolio__text_l">&#8599;</p></li>
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;