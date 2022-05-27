import React from 'react';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';

function Movies({
  onChange,
  onSubmit,
  moviesList,
  onSave,
  searchStatus,
  moreFilms,
  checkBoxState,
  handleMoreButton,
  moreButtonEnabled,
  handleCheckBox,
  isLoading,
  messageAfterPreloader,
  emptySearch,
  savedMoviesList,
  onDelete,
  inputQuery,
  setInputQuery
}) {

  return (
    <>

      <SearchForm onChange={onChange} onSubmit={onSubmit} checkBoxState={checkBoxState} handleCheckBox={handleCheckBox} inputQuery={inputQuery} setInputQuery={setInputQuery} />

      {isLoading ? <Preloader /> : <MoviesCardList moviesList={moviesList} onSave={onSave} searchStatus={searchStatus} emptySearch={emptySearch} messageAfterPreloader={messageAfterPreloader} savedMoviesList={savedMoviesList} onDelete={onDelete} />}

      {searchStatus && moreFilms && moreButtonEnabled && <button className='movies-card-list__button' onClick={handleMoreButton} >Ещё</button>}

      {!moreButtonEnabled && <div className='movies__button-plug'></div>}

    </>
  );
}

export default Movies;