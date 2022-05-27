import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';


function MoviesCard(card) {

  let savedMoviesList = card.savedMoviesList

  function contains(arr, card) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].movieId === card._id) {
        return true;
      }
    }
    return false;
  }

  let isSaved;

  if (!card.isSavedMovies) {
    isSaved = contains(savedMoviesList, card);
  }

  function handleOnSaveClick() {

    const item = {
      country: card.country || ' ',
      director: card.director || ' ',
      duration: card.duration || ' ',
      year: card.year || ' ',
      description: card.description || ' ',
      image: card.image.url || '/',
      trailerLink: card.trailerLink || '/',
      nameRU: card.nameRU || ' ',
      nameEN: card.nameEN || ' ',
      thumbnail: card.image.formats.thumbnail.url || '/',
      movieId: card._id,
    }
    card.onSave(item);
  }

  function handleOnDeleteClick() {
    card.onDelete(card._id);
  }

  function containsForDelete(arr, card) {
    for (var i = 0; i < arr.length; i++) {

      if (arr[i].movieId === card._id) {
        return arr[i]._id;
      }
    }
    return false;
  }

  function handleOnSavedClick() {
    const cardToDel = containsForDelete(savedMoviesList, card);
    card.onDelete(cardToDel);
  }

  return (
    <>
      <Switch>
        <Route exact path='/movies'>
          <div className='card'>
            <div className='card__img'>
              <a href={`${card.trailerLink}`} target="_blank"><img className='card__cover' src={`https://api.nomoreparties.co${card.image.url}`} alt={card.nameRU} /></a>
            </div>
            <div className='card__descritpion'>
              <h2 className='card__title' >{card.nameRU}</h2>
              <p className='card__duration'>{`${Math.floor(card.duration / 60)}ч ${card.duration - Math.floor(card.duration / 60) * 60}м`}</p>
            </div>
            {isSaved ? <button className='card__button_saved' onClick={handleOnSavedClick} ></button> : <button className='card__button_save' onClick={handleOnSaveClick}>Сохранить</button>}
          </div>
        </Route>
        <Route exact path='/saved-movies'>
          <div className='card'>
            <div className='card__img'>
              <a href={`${card.trailerLink}`} target="_blank"><img className='card__cover' src={card.image} alt={card.nameRU} /></a>
            </div>
            <div className='card__descritpion'>
              <h2 className='card__title' >{card.nameRU}</h2>
              <p className='card__duration'>{`${Math.floor(card.duration / 60)}ч ${card.duration - Math.floor(card.duration / 60) * 60}м`}</p>
            </div>
            <button className='card__button_delete' onClick={handleOnDeleteClick}></button>
          </div>
        </Route>
      </Switch>
    </>
  )
}

export default MoviesCard;