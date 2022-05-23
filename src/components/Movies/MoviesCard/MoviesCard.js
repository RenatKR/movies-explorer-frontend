import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { CurrentUserContext} from '../../../contexts/CurrentUserContext'


function MoviesCard(card) {

  const currentUser = React.useContext(CurrentUserContext);

  const isSaved = currentUser._id === card.owner

  //console.log(currentUser);

  function handleOnSaveClick() {
    const item = {
      country: card.country,
      director: card.director ,
      duration: card.duration ,
      year: card.year ,
      description: card.description ,
      image: card.image.url ,
      trailerLink: card.trailerLink,
      nameRU: card.nameRU ,
      nameEN: card.nameEN ,
      thumbnail: card.image.formats.thumbnail.url,
      movieId: card._id ,
    }
    console.log(item)
    card.onSave(item);
  }

  function handleOnDeleteClick() {
    card.onDelete(card._id);
  }



  return (
    <>
      <Switch>
        <Route exact path='/movies'>
          <div className='card'>
            <div className='card__img'>
              <img className='card__cover' src={`https://api.nomoreparties.co${card.image.url}`} alt={card.nameRU} />
            </div>
            <div className='card__descritpion'>
              <h2 className='card__title' >{card.nameRU}</h2>
              <p className='card__duration'>{`${Math.floor(card.duration/60)}ч ${card.duration - Math.floor(card.duration/60)*60}м`}</p>
            </div>
            {isSaved ? <button className='card__button_saved'></button> : <button className='card__button_save' onClick={handleOnSaveClick}>Сохранить</button>}
          </div>
        </Route>
        <Route exact path='/saved-movies'>
          <div className='card'>
            <div className='card__img'>
              <img className='card__cover' src={`https://api.nomoreparties.co${card.image}`} alt={card.nameRU} />
            </div>
            <div className='card__descritpion'>
              <h2 className='card__title' >{card.nameRU}</h2>
              <p className='card__duration'>{`${Math.floor(card.duration/60)}ч ${card.duration - Math.floor(card.duration/60)*60}м`}</p>
            </div>
            <button className='card__button_delete' onClick={handleOnDeleteClick}></button>
          </div>
        </Route>
      </Switch>
    </>
  )
}

export default MoviesCard;