import React from 'react';
import './NavTab.css'

function NavTab() {
  return (
    <section className='nav-tab'>
      <a className='nav-tab__link' href='#about-project'>О проекте</a>
      <a className='nav-tab__link' href='#techs'>Технологии</a>
      <a className='nav-tab__link' href='#about-me'>Студент</a>
    </section>);
}

export default NavTab;