import React from 'react';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import FilterCheckBox from './FilterCheckbox/FilterCheckbox';

function Movies({ onChange, onSubmit, moviesList, onSave, searchStatus, moreFilms, checkBoxState, clickNumbers, handleMoreButton, moreButtonEnabled }) {


  return (
    <>
      <SearchForm onChange={onChange} onSubmit={onSubmit} checkBoxState={checkBoxState} />
      <MoviesCardList moviesList={moviesList} onSave={onSave} searchStatus={searchStatus} />
      {searchStatus && moreFilms && moreButtonEnabled && <button className='movies-card-list__button' onClick={handleMoreButton} >Ещё</button>}
      {!moreFilms && <div className='movies__button-plug'></div>}

    </>
  );
}

export default Movies;