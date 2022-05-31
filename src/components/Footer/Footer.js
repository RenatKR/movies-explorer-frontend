import React from 'react';

function Footer() {
  return (
    <section className='footer'>
      <div className='footer__container'>
        <p className='footer__sign'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <hr className='footer__line'></hr>
        <div className='footer__imprint'>
          <p className='footer__copyright'>&copy; 2022</p>
          <div className='footer__links'>
            <a className='footer__link' href='https://practicum.yandex.ru/' target='_blank'>Яндекс.Практикум</a>
            <a className='footer__link' href='https://github.com/RenatKR/' target='_blank'>GitHub</a>
            <a className='footer__link' href='https://vk.com/id669040713' target='_blank'>Vkontakte</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;