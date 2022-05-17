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
import { Switch, useHistory } from 'react-router-dom';
import Page404 from '../Page404/Page404';
import Navigation from '../Navigation/Navigation';
import SavedMovies from '../SavedMovies/SavedMovies';

import moviesApi from '../../utils/MoviesApi';

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from '../../utils/MainApi';

import * as ApiAuth from '../../utils/ApiAuth'

function App() {



  //создание юзера

  function handleRegister(name, password, email) {
    ApiAuth.register(name, password, email)
      .then((data) => {
        console.log(data);
        if (data) {
          console.log(data);
          alert('Регистрация прошла успешно!')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //логирование

  const [currentUser, setCurrentUser] = React.useState({});

  const [loggedIn, setLoggedIn] = React.useState(false);


  function handleLogin(email, password) {
    ApiAuth.authorize(email, password)
      .then((data) => {
        console.log(data)
        if (data) {
          console.log(data);
          setCurrentUser((old) => ({
            ...old,
            email: email,
          }));
          setLoggedIn(true);
          history.push("/");
          localStorage.setItem("jwt", data.token);
        }
      })
      .catch((err) => console.log(err));
  }

  //авторизация

  const history = useHistory();

  React.useEffect(() => {
    handleTokenCheck();
  }, []);

  function handleTokenCheck() {
    if (!localStorage.getItem('jwt')) return;
    const jwt = localStorage.getItem('jwt');
    ApiAuth.checkToken(jwt)
      .then((res) => {
        if (!res) return;
        setCurrentUser((old) => {

        })
        setLoggedIn(true);
        history.pushState('/')
      })
      .catch(err => console.log(err));

  }

  React.useEffect(() => {
    mainApi
      .getUserInfo()
      .then((data) => {
        setCurrentUser((old) => ({
          ...old,
          _id: data._id,
          email: data.email,
          name: data.name,
        }));
      })
      .catch((err) => console.log(err));
  }, []);

  //редактирование юзера

  function handleEditUser(name, email) {
    mainApi
      .editUserInfo(name, email)
      .then((data) => {
        console.log(data);
        setCurrentUser((old) => ({
          ...old,
          email: data.email,
          name: data.name,
        }));
      })
      .catch(err => console.log(err));
  }
  // работа с фильмами

  const [moviesListAll, setMoviesListAll] = React.useState([]);

  //console.log(moviesListAll)

  React.useEffect(() => {
    moviesApi
      .getAllMovies()
      .then((data) => {
        // console.log(data)
        setMoviesListAll(data);
        // console.log(moviesListAll)
      })
      .catch((err) => console.log(err));
  }, []);


  const [inputQuery, setInputQuery] = React.useState('');

  const handleChangeQuery = (e) => {
    setInputQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    // console.log(inputQuery)
    e.preventDefault();
    const abc = moviesListAll.filter(el => console.log(el));
    // console.log(abc);
  }


  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className='page'>

          <Switch>

            <Route exact path='/'>
              <Header />
              <Main />
              <Footer />
            </Route>

            <Route exact path='/movies'>
              <Header />
              <Movies onChange={handleChangeQuery} onSubmit={handleSubmit} />
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
              <Profile handleEditUser={handleEditUser} />
            </Route>

            <Route exact path='/signup'>
              <Register handleRegister={handleRegister} />
            </Route>

            <Route exact path='/signin'>
              <Login handleLogin={handleLogin} />
            </Route>

            <Route exact path='/404'>
              <Page404 />
            </Route>

          </Switch>

        </div >
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
