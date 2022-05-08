import React from "react";

function Footer() {
    return (
        <section className="footer">
            <div className="footer__container">
                <p className="footer__sign">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <hr className="footer__line"></hr>
                <div className="footer__imprint">
                    <p className="footer__copyright">&copy; 2022</p>
                    <div className="footer__links">
                        <a className="footer__link">Яндекс.Практикум</a>
                        <a className="footer__link">GitHub</a>
                        <a className="footer__link">Vkontakte</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;