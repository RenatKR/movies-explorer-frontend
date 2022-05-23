import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Preloader from '../Movies/Preloader/Preloader';


function SavedMovies({ moviesList, onDelete, onSubmit, onChange, checkBoxState, handleCheckBox, isLoading = false }) {
  return (
    <>
      <SearchForm onSubmit={onSubmit} onChange={onChange} checkBoxState={checkBoxState} handleCheckBox={handleCheckBox} />
      {isLoading ? <Preloader /> : <MoviesCardList moviesList={moviesList} onDelete={onDelete} />}
      <div className='saved-movies__indent'></div>
    </>
  );
}

export default SavedMovies;