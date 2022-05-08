import React from "react";
import { Link } from "react-router-dom";
import profile from '../../images/profile.png';

function Navigation() {
    return (
        <>
            <div className="navigation__container">
                <button className="navigation__close"></button>
                <Link to='/' className="navigation__link">Главная</Link>
                <Link to='/movies' className="navigation__link">Фильмы</Link>
                <Link to='/saved-movies' className="navigation__link">Сохраненные фильмы</Link>
                <div className="header__block">
                    <Link className="header__link_color_black">Аккаунт</Link>
                    <img className="header__img" src={profile} />
                </div>
            </div>
        </>
    );
}

export default Navigation;