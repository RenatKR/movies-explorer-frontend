import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../images/profile.png';
import './Navigation.css';
import close from '../../images/close.svg';

function Navigation({ handleCloseButton, navIsOpened, handleSavedMoviesLink }) {
  return (
    <>
      <div className={`navigation ${navIsOpened && 'navigation__is-opened'} `}>
        <div className='navigation__container'>
          <button className='navigation__close' onClick={handleCloseButton}>
            <img src={close} alt='закрыть' />
          </button>
          <div className='navigation__wrapper' >
            <Link to='/' className='navigation__link_type_inner'>Главная</Link>
            <Link to='/movies' className='navigation__link_type_inner'>Фильмы</Link>

            <Link to='/saved-movies' className='navigation__link_type_inner'><button className='header__button_type_plug-for-nav' onClick={handleSavedMoviesLink}>Сохраненные фильмы</button></Link>
          </div>
          <div className='navigation__block'>
            <Link to='/profile' className='navigation__link_type_edit'>Аккаунт</Link>
            <img className='navigation__img' src={profile} alt='nav' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;