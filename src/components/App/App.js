import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main'
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Switch } from 'react-router-dom';
import Page404 from '../Page404/Page404';
import Navigation from '../Navigation/Navigation';
import SavedMovies from '../SavedMovies/SavedMovies';


function App() {
  return (
    <>
      <div className='page'>

        <Switch>

          <Route exact path='/'>
            <Header />
            <Main />
            <Footer />
          </Route>

          <Route exact path='/movies'>
            <Header />
            <Movies />
            <Footer />
            <Navigation />
          </Route>

          <Route exact path='/saved-movies'>
            <Header />
            <SavedMovies />
            <Footer />
          </Route>

          <Route exact path='/profile'>
            <Header />
            <Profile />
          </Route>

          <Route exact path='/signup'>
            <Register />
          </Route>

          <Route exact path='/signin'>
            <Login />
          </Route>

          <Route exact path='/404'>
            <Page404 />
          </Route>

        </Switch>

      </div >
    </>
  );
}

export default App;
