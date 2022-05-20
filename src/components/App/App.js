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

import MoviesCard from '../Movies/MoviesCard/MoviesCard'

function App() {

  const history = useHistory();

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
        //console.log(data)
        if (data) {
          setCurrentUser((old) => ({
            ...old,
            token: data.token,
            name: data.name,
            email: data.name,
            _id: data._id,
          }));
          // console.log(currentUser)
          setLoggedIn(true);
          //console.log(loggedIn);
          history.push("/");
          localStorage.setItem("jwt", data.token);
        }
      })
      .catch((err) => console.log(err));
  }

  //авторизация



  // React.useEffect(() => {
  //   handleTokenCheck();
  // }, []);

  // function handleTokenCheck() {
  //   if (!localStorage.getItem('jwt')) return;
  //   const jwt = localStorage.getItem('jwt');
  //   ApiAuth.checkToken(jwt)
  //     .then((res) => {
  //       if (!res) return;
  //       setCurrentUser((old) => {

  //       })
  //       setLoggedIn(true);
  //       history.pushState('/')
  //     })
  //     .catch(err => console.log(err));
  // }

  React.useEffect(() => {
    mainApi
      .getUserInfo()
      .then((data) => {
        //console.log(data);
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

  const [moviesList, setMoviesList] = React.useState([]);

  React.useEffect(() => {
    moviesApi
      .getAllMovies()
      .then((data) => {
        setMoviesListAll(data);
      })
      .catch((err) => console.log(err));
  }, []);


  const [inputQuery, setInputQuery] = React.useState('');

  const [isLoading, setIsLoading] = React.useState(false);

  const [checkBoxState, setCheckBoxState] = React.useState(false);

  const [searchStatus, setSearchStatus] = React.useState(false);

  const [isThereMoreFilms, setIsThereMoreFilms] = React.useState(false);

  const [isThereSavedFilms, setIsThereSavedFilms] = React.useState(false);

  const handleChangeQuery = (e) => {
    setInputQuery(e.target.value);
  }

  let abc;

  let bcd;

  //let rowNumber = 3; //количество колонн в ряд =

  function handleSubmit(e) {

    const screenWidth = window.screen.width;

    console.log(screenWidth);


    e.preventDefault();

    abc = moviesListAll.filter(el => JSON.stringify(el).toLowerCase().includes(inputQuery.toLowerCase()));

    let subarray = [];

    if (screenWidth > 720) {

      if (abc.length < 12) {
        setMoviesList([]);
        setMoviesList(abc);
        setSearchStatus(true);
        setIsThereMoreFilms(false);
      }

      if (abc.length > 12) {
        localStorage.setItem('clickNumbers', 0);
        setMoviesList([]);
        bcd = abc.slice(0, 12);
        console.log(bcd);
        setMoviesList(bcd);
        console.log(moviesList);
        let clickNumbers = Math.floor((abc.length - 12) / 3);
        localStorage.setItem('clickNumbers', clickNumbers);
        //console.log(clickNumbers);
        setSearchStatus(true);
        setIsThereMoreFilms(true);
        setMoreButtonEnabled(true);
        //console.log(isThereMoreFilms)

        for (let i = 0; i < abc.length; i = i + 3) {
          subarray.push(abc.slice(i, i + 3))
        }

        localStorage.setItem('subarray', JSON.stringify(subarray));
      }
    }

    if (468 > screenWidth > 720) {

      if (abc.length < 8) {
        setMoviesList([]);
        setMoviesList(abc);
        setSearchStatus(true);
        setIsThereMoreFilms(false);
      }

      if (abc.length > 8) {
        localStorage.setItem('clickNumbers', 0);
        setMoviesList([]);
        bcd = abc.slice(0, 8);
        setMoviesList(bcd);
        let clickNumbers = Math.floor((abc.length - 2) / 2);
        localStorage.setItem('clickNumbers', clickNumbers);
        //console.log(clickNumbers);
        setSearchStatus(true);
        setIsThereMoreFilms(true);
        setMoreButtonEnabled(true);
        // console.log(isThereMoreFilms)

        for (let i = 0; i < abc.length; i = i + 2) {
          subarray.push(abc.slice(i, i + 2))
        }

        localStorage.setItem('subarray', JSON.stringify(subarray));
      }
    }

    if (screenWidth <= 468) {

      if (abc.length < 5) {
        setMoviesList([]);
        setMoviesList(abc);
        setSearchStatus(true);
        setIsThereMoreFilms(false);
      }

      if (abc.length > 5) {
        localStorage.setItem('clickNumbers', 0);
        setMoviesList([]);
        bcd = abc.slice(0, 5);
        setMoviesList(bcd);
        let clickNumbers = Math.floor((abc.length - 1) / 1);
        localStorage.setItem('clickNumbers', clickNumbers);
        //console.log(clickNumbers);
        setSearchStatus(true);
        setIsThereMoreFilms(true);
        setMoreButtonEnabled(true);
        // console.log(isThereMoreFilms)

        for (let i = 0; i < abc.length; i = i + 1) {
          subarray.push(abc.slice(i, i + 1))
        }

        localStorage.setItem('subarray', JSON.stringify(subarray));
      }
    }






    //const abc = moviesListAll.filter(el => JSON.stringify(el).toLowerCase().match(inputQuery.toLowerCase()));
    //setMoviesList(abc);
    //setSearchStatus(true);
    // localStorage.setItem('moviesList', moviesList)
    // localStorage.setItem('inputQuery', inputQuery);
    // localStorage.setItem('checkBoxState', checkBoxState);
  }

  const [clickCounts, setClickCounts] = React.useState(0);

  const [moreButtonEnabled, setMoreButtonEnabled] = React.useState(true);



  function iWantMore() {

    const screenWidth = window.screen.width;

    let i = 0;

    i = clickCounts + 1

    setClickCounts(i);

    let def = []

    const subarray = JSON.parse(localStorage.getItem('subarray'))

    if (screenWidth > 720) {
      for (let i = 0; i < (5 + clickCounts); i++) {
        def = def.concat(subarray[i]);
        setMoviesList(def);
      }

      if (468 > screenWidth > 720) {
        for (let i = 0; i < (5 + clickCounts); i++) {
          def = def.concat(subarray[i]);
          setMoviesList(def);
        }
      }

    }


    //console.log(clickCounts)



    const clickNumbers = localStorage.getItem('clickNumbers');

    // console.log(clickNumbers);

    let a = clickNumbers - clickCounts;

    if (a === 0) {
      setMoreButtonEnabled(false);
    }
  }

  // работа с сохраненными фильмами

  const [savedMoviesList, setSavedMoviesList] = React.useState([]);

  const handleSaveButton = (data) => {
    console.log(123);
    mainApi
      .addNewMovie(data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  const handleDeleteButton = (cardId) => {
    mainApi
      .deleteMovie(cardId)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    mainApi
      .getUserMovies()
      .then((data) => {
        //console.log(data);
        setSavedMoviesList(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
              <Movies
                onChange={handleChangeQuery}
                onSubmit={handleSubmit}
                moviesList={moviesList}
                onSave={handleSaveButton}
                searchStatus={searchStatus}
                moreFilms={isThereMoreFilms}
                checkBoxState={checkBoxState}
                handleMoreButton={iWantMore}
                //clickNumbers={clickNumbers}
                moreButtonEnabled={moreButtonEnabled}
              />
              <Footer />
              <Navigation />
            </Route>

            <Route exact path='/saved-movies'>
              <Header />
              <SavedMovies moviesList={savedMoviesList} onDelete={handleDeleteButton} />
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
