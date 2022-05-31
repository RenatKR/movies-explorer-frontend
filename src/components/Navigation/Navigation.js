import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../images/profile.png';
import './Navigation.css';
import close from '../../images/close.svg';

function Navigation() {
  return (
    <>
      <div className='navigation'>
        <div className='navigation__container'>
          <button className='navigation__close'>
            <img src={close} alt='закрыть' />
          </button>
          <div className='navigation__wrapper' >
            <Link to='/' className='navigation__link_type_inner'>Главная</Link>
            <Link to='/movies' className='navigation__link_type_inner'>Фильмы</Link>
            <Link to='/saved-movies' className='navigation__link_type_inner'>Сохраненные фильмы</Link>
          </div>
          <div className='navigation__block'>
            <Link className='navigation__link_type_edit'>Аккаунт</Link>
            <img className='navigation__img' src={profile} alt='nav' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;