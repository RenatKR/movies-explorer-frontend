import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';


function SavedMovies({ moviesList, onDelete }) {
  return (
    <>
      <SearchForm />
      <MoviesCardList moviesList={moviesList} onDelete={onDelete} />
      <div className='saved-movies__indent'></div>
    </>
  );
}

export default SavedMovies;