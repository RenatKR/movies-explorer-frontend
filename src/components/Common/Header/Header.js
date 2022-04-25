import React from "react";
import logo from '../../../images/logo.svg';
import profile from '../../../images/profile.png';
import menu from '../../../images/menu.svg';
import './Header.css';
//import { Link, Routes, Route } from "react-router-dom";

function Header(props) {
    return (
        <header className='header'>
            <img src={logo} className="header__logo" alt="logo" />

                    <div className="header-container">
                        <a className='header__link' href="#">Регистрация</a>
                        <button className='header__button'>Войти</button>
                    </div>


                {/* <Route exact path='/'>
                    <div className="header-container">
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