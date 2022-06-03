import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  moviesList,
  onSave,
  onDelete,
  searchStatus,
  emptySearch,
  messageAfterPreloader,
  savedMoviesList
}) {

  return (
    <>
      <Switch>
        <Route exact path='/movies'>
          {!emptySearch && searchStatus &&
            <>
              <div className='movies__line' />
              <div className='movies-card-list'>
                {moviesList.map(({ id, ...props }) => (
                  <MoviesCard
                    key={id}
                    {...props}
                    _id={id}
                    onSave={onSave}
                    onDelete={onDelete}
                    isSavedMovies={false}
                    savedMoviesList={savedMoviesList}
                  />
                ))}
              </div>
            </>
          }
          {emptySearch && <p className='movies__message'>{messageAfterPreloader}</p>}

        </Route>

        <Route exact path='/saved-movies'>
          {!emptySearch && <>
            <div className='movies__line' />
            <div className='movies-card-list'>
              {moviesList.map(({ _id, ...props }) => (
                <MoviesCard
                  key={_id}
                  {...props}
                  _id={_id}
                  onDelete={onDelete}
                  isSavedMovies={true}

                />
              ))}
            </div>

          </>}

          {emptySearch && <p className='movies__message'>{messageAfterPreloader}</p>}
        </Route>
      </Switch>
    </>
  )
}

export default MoviesCardList;