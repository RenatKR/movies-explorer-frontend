import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <>
      <div className='movies__line' />
      <div className='movies-card-list'>
        <MoviesCard isSaved={true} />
        <MoviesCard />
        <MoviesCard isSaved={true} />
        <MoviesCard />
        <MoviesCard isSaved={true} />
      </div>
    </>
  )
}

export default MoviesCardList;