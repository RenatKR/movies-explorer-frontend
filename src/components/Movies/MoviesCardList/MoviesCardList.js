import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesList, onSave, onDelete, searchStatus }) {

  return (
    <>
      <Switch>
        <Route exact path='/movies'>
          {searchStatus &&
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
                    isSaved={false}
                  />
                ))}
              </div>
            </>
          }
        </Route>

        <Route exact path='/saved-movies'>
          <div className='movies__line' />
          <div className='movies-card-list'>
            {moviesList.map(({ _id, ...props }) => (
              <MoviesCard
                key={_id}
                {...props}
                _id={_id}
                onDelete={onDelete}
                isSaved={false}
              />
            ))}
          </div>
        </Route>
      </Switch>
    </>
  )
}

export default MoviesCardList;