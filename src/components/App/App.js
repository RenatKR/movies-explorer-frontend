import React from "react";
import { Route } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main'
import Movies from '../Movies/Movies';
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Switch } from "react-router-dom";
import Page404 from "../Page404/Page404";


function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Switch>

          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/movies">
            <Movies />

          </Route>

          {/* <Route exact path="/saved-movies">
            <SavedMovies />
          </Route> */}

          <Route exact path="/profile">
            <Profile title='Добро пожаловавать!' />
          </Route>

          <Route exact path="/signin">
            <Login />
          </Route>

          <Route exact path="/signup">
            <Register />
          </Route>

          <Route exact path="/404">
            <Page404 />
          </Route>

        </Switch>
        <Footer />
      </div >
    </>
  );
}

export default App;
