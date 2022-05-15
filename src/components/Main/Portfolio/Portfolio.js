import React from 'react';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <h3 className='portfolio__title'>Портфолио</h3>
        <ul className='portfolio__list' >
          <li className='portfolio__item'><p className='portfolio__text_m'>Статичный сайт</p><a className='portfolio__text_l' href='https://github.com/RenatKR/how-to-learn' target='_blank'>&#8599;</a></li>
          <hr className='portfolio__line'></hr>
          <li className='portfolio__item'><p className='portfolio__text_m'>Адаптивный сайт</p><a className='portfolio__text_l' href='https://renatkr.github.io/russian-travel/index.html' target='_blank'>&#8599;</a></li>
          <hr className='portfolio__line'></hr>
          <li className='portfolio__item'><p className='portfolio__text_m'>Одностраничное приложение</p><a className='portfolio__text_l' href='https://github.com/RenatKR/react-mesto-auth' target='_blank'>&#8599;</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;