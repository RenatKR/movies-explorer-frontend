import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

function MoviesCard({ src = 'https://clck.ru/h7QpB', title, isSaved = false }) {
  return (
    <>
      <Switch>
        <Route exact path='/movies'>
          <div className='card'>
            <div className='card__img'>
              <img className='card__cover' src={src} alt={title} />
            </div>
            <div className='card__descritpion'>
              <h2 className='card__title' >33 слова о дизайне</h2>
              <p className='card__duration'>1ч 17м</p>
            </div>
            {isSaved ? <button className='card__button_saved'></button> : <button className='card__button_save'>Сохранить</button>}
          </div>
        </Route>
        <Route exact path='/saved-movies'>
          <div className='card'>
            <div className='card__img'>
              <img className='card__cover' src={src} alt={title} />
            </div>
            <div className='card__descritpion'>
              <h2 className='card__title' >33 слова о дизайне</h2>
              <p className='card__duration'>1ч 17м</p>
            </div>
            <button className='card__button_delete'></button>
          </div>
        </Route>
      </Switch>
    </>
  )
}

export default MoviesCard;