import React from 'react';
import logo from '../../images/logo.svg';
import profile from '../../images/profile.png';
import './Header.css';
import { Link, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

function Header(props) {
  return (
    <Switch>
      <Route exact path='/'>
        <>
          <header className='header_color_black'>
            <div className='header__container'>
              <img src={logo} className='logo' alt='logo' />
              <div className='header__block'>
                <Link to='signup' className='header__link_color_white' >Регистрация</Link>
                <button className='header__button'>Войти</button>
              </div>
            </div>
          </header>
        </>
      </Route>

      <Route exact path='/movies'>
        <>
          <div className='header_color_white'>
            <div className='header__container'>
              <img src={logo} className='logo' alt='logo' />
              <div >
                <Link to='/movies' className='header__link_color_black'>Фильмы</Link>
                <Link to='/saved-movies' className='header__link_color_black'>Сохраненные фильмы</Link>
              </div>
              <div className='header__block header__block_hidden'>
                <Link to='/movies' className='header__account'>Аккаунт</Link>
                <img className='header__img' src={profile} alt='account' />
              </div>
              <button className='header__menu' />
            </div>
          </div>
        </>
      </Route>

      <Route exact path='/saved-movies'>
        <>
          <div className='header_color_white'>
            <div className='header__container'>
              <img src={logo} className='logo' alt='logo' />
              <div >
                <Link to='/movies' className='header__link_color_black'>Фильмы</Link>
                <Link to='/saved-movies' className='header__link_color_black'>Сохраненные фильмы</Link>
              </div>
              <div className='header__block header__block_hidden'>
                <Link to='/profile' className='header__account'>Аккаунт</Link>
                <img className='header__img' src={profile} alt='account' />
              </div>
              <button className='header__menu' />
            </div>
          </div>
        </>
      </Route>

      <Route exact path='/profile'>
        <>
          <div className='header_color_white'>
            <div className='header__container'>
              <img src={logo} className='logo' alt='logo' />
              <div >
                <Link to='/movies' className='header__link_color_black'>Фильмы</Link>
                <Link to='/saved-movies' className='header__link_color_black'>Сохраненные фильмы</Link>
              </div>
              <div className='header__block header__block_hidden'>
                <Link to='/profile' className='header__account'>Аккаунт</Link>
                <img className='header__img' src={profile} alt='account' />
              </div>
              <button className='header__menu' />
            </div>
          </div>
        </>
      </Route>

      <Route exact path='/123'>
        <div className='header_color_white'>
          <div className='header__container'>
            <img src={logo} className='logo' alt='logo' />
            <button className='header__menu' />
          </div>
        </div>
      </Route>

    </Switch>
  );
}

export default Header;