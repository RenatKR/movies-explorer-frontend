import React from 'react';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import FilterCheckBox from './FilterCheckbox/FilterCheckbox';

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      <button className='movies-card-list__button'>Ещё</button>
    </>
  );
}

export default Movies;