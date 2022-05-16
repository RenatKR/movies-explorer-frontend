import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';


function SavedMovies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      <div className='saved-movies__indent'></div>
    </>
  );
}

export default SavedMovies;