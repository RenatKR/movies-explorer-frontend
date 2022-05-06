import React from "react";
import logo from '../../images/logo.svg';
import profile from '../../images/profile.png';
import menu from '../../images/menu.svg';
import './Header.css';
//import { Link, Routes, Route } from "react-router-dom";

function Header(props) {
    return (
        <header className='header'>
            <div className="header__container">
                <img src={logo} className="logo" alt="logo" />
                <div className="header__block">
                    <a className='header__link' href="#">Регистрация</a>
                    <button className='header__button'>Войти</button>
                </div>
            </div>

            {/* <Route exact path='/'>
                    <div className="header__block">
                        <button className='header__button'>Фильмы</button>
                        <button className='header__button'>Сохраненные фильмы</button>
                        <button className='header__button'>
                            <img src={profile} className="header__logo" alt="profile" />
                        </button>
                        <button className='header__button'>Аккаунт</button>
                        <button className='header__button'>
                            <img src={menu} className="header__logo" alt="profile" />
                        </button>
                    </div>
                </Route> */}

        </header>
    );
}

export default Header;