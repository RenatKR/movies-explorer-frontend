import React from 'react';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import FilterCheckBox from './FilterCheckbox/FilterCheckbox';

function Movies({onChange, onSubmit}) {
  return (
    <>
      <SearchForm onChange={onChange} onSubmit={onSubmit} />
      <MoviesCardList />
      <button className='movies-card-list__button'>Ещё</button>
    </>
  );
}

export default Movies;