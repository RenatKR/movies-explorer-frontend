import React from 'react';
import logo from '../../images/logo.svg';
import profile from '../../images/profile.png';
import './Header.css';
import { Link, Route, Switch } from 'react-router-dom';

function Header(props) {
  return (
    <Switch>
      <Route exact path='/'>
        <>
          <header className='header_color_black'>
            <div className='header__container'>
              <Link to='/'><img src={logo} className='logo' alt='logo' /></Link>
              <div className='header__block'>
                <Link to='/signup' className='header__link_color_white'>Регистрация</Link>
                <Link to='/signin'><button className='header__button'>Войти</button></Link>
              </div>
            </div>
          </header>
        </>
      </Route>

      <Route exact path='/movies'>
        <>
          <div className='header_color_white'>
            <div className='header__container'>
              <Link to='/'><img src={logo} className='logo' alt='logo' /></Link>
              <div >
                <Link to='/movies' className='header__link_color_black'>Фильмы</Link>
                <Link to='/saved-movies' className='header__link_color_black'><button className='header__button_type_plug' onClick={props.handleSavedMoviesLink}>Сохраненные фильмы</button></Link>
              </div>
              <div className='header__block header__block_hidden'>
                <Link to='/profile' className='header__account'>Аккаунт</Link>
                <img className='header__img' src={profile} alt='account' />
              </div>
              <button className='header__menu' onClick={props.handleOpenNavButton} />
            </div>
          </div>
        </>
      </Route>

      <Route exact path='/saved-movies'>
        <>
          <div className='header_color_white'>
            <div className='header__container'>
              <Link to='/'><img src={logo} className='logo' alt='logo' /></Link>
              <div >
                <Link to='/movies' className='header__link_color_black'>Фильмы</Link>
                <Link to='/saved-movies' className='header__link_color_black'>Сохраненные фильмы</Link>
              </div>
              <div className='header__block header__block_hidden'>
                <Link to='/profile' className='header__account'>Аккаунт</Link>
                <img className='header__img' src={profile} alt='account' />
              </div>
              <button className='header__menu' onClick={props.handleOpenNavButton} />
            </div>
          </div>
        </>
      </Route>

      <Route exact path='/profile'>
        <>
          <div className='header_color_white'>
            <div className='header__container'>
              <Link to='/'><img src={logo} className='logo' alt='logo' /></Link>
              <div >
                <Link to='/movies' className='header__link_color_black'>Фильмы</Link>
                <Link to='/saved-movies' className='header__link_color_black'><button className='header__button_type_plug' onClick={props.handleSavedMoviesLink}>Сохраненные фильмы</button></Link>
              </div>
              <div className='header__block header__block_hidden'>
                <Link to='/profile' className='header__account'>Аккаунт</Link>
                <img className='header__img' src={profile} alt='account' />
              </div>
              <button className='header__menu' onClick={props.handleOpenNavButton} />
            </div>
          </div>
        </>
      </Route>

    </Switch>
  );
}

export default Header;