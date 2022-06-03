import React from 'react';
import './App.css';
import Main from '../Main/Main'
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Route, Switch, useHistory } from 'react-router-dom';
import Page404 from '../Page404/Page404';
import Navigation from '../Navigation/Navigation';
import SavedMovies from '../SavedMovies/SavedMovies';

import moviesApi from '../../utils/MoviesApi';

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import mainApi from '../../utils/MainApi';

import * as ApiAuth from '../../utils/ApiAuth';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {

  //логирование

  const [jwtForApi, setJwtForApi] = React.useState('');

  const [currentUser, setCurrentUser] = React.useState({});

  const history = useHistory();

  const [isSavedMoviesListChanged, setIsSavedMoviesListChanged] = React.useState(false);

  //создание юзера

  const [registerError, setRegisterError] = React.useState('');

  const [loggedIn, setLoggedIn] = React.useState(false);

  const [jwtIsChanged, setJwtIsChanged] = React.useState(false);

  React.useEffect(() => {
    setJwtForApi(localStorage.getItem('jwt'));
  }, [loggedIn, jwtIsChanged]);

  function handleRegister(name, password, email) {
    ApiAuth.register(name, password, email)
      .then((data) => {
        if (data) {
          setCurrentUser((old) => ({
            ...old,
            name: data.name,
            email: data.email,
            _id: data._id,
            token: data.token,
          }));
          localStorage.setItem("jwt", data.token);
          setJwtForApi(localStorage.getItem('jwt'));
          setJwtIsChanged(true);
          alert('Регистрация прошла успешно!')
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
        setRegisterError('Что-то пошло не так...')
      });
  }

  // protected-route

  function handleLogin(email, password) {
    ApiAuth.authorize(email, password)
      .then((data) => {
        if (data) {
          setCurrentUser((old) => ({
            ...old,
            token: data.token,
            name: data.name,
            email: data.email,
            _id: data._id,
          }));
          setLoggedIn(true);
          history.push("/movies");
          localStorage.setItem("jwt", data.token);
          setJwtForApi(localStorage.getItem('jwt'));
          setJwtIsChanged(true);
        }
      })
      .catch((err) => console.log(err));
  }

  //авторизация

  function handleTokenCheck() {
    if (!localStorage.getItem('jwt')) return;
    const jwt = localStorage.getItem('jwt');
    ApiAuth.checkToken(jwt)
      .then((res) => {
        if (!res) return;
        setCurrentUser((old) => ({
          ...old,
          name: res.name,
          email: res.email,
          _id: res._id,
        }))
        setLoggedIn(true);
        history.push('/movies')
      })
      .catch(err => console.log(err));
  }

  React.useEffect(() => {
    handleTokenCheck();
  }, [loggedIn, jwtIsChanged]);

  React.useEffect(() => {
    mainApi
      .getUserInfo(jwtForApi)
      .then((data) => {
        setCurrentUser((old) => ({
          ...old,
          _id: data._id,
          email: data.email,
          name: data.name,
        }));
      })
      .catch((err) => console.log(err));
  }, [loggedIn, jwtIsChanged]);

  //редактирование юзера

  function handleEditUser(name, email) {
    mainApi
      .editUserInfo(name, email, jwtForApi)
      .then((data) => {
        setCurrentUser((old) => ({
          ...old,
          email: data.email,
          name: data.name,
        }));
        alert('Изменение данных профиля прошло успешно!')
      })
      .catch(err => console.log(err));
  }

  // работа с фильмами

  const [moviesList, setMoviesList] = React.useState([]);

  const [inputQuery, setInputQuery] = React.useState('');

  const [isLoading, setIsLoading] = React.useState(false);

  const [checkBoxState, setCheckBoxState] = React.useState(false);   //короткометражки

  const [searchStatus, setSearchStatus] = React.useState(false);

  const [isThereMoreFilms, setIsThereMoreFilms] = React.useState(false);

  const [messageAfterPreloader, setMessageAfterPreloader] = React.useState('');

  const [emptySearch, setEmptySearch] = React.useState(false);


  React.useEffect(() => {

    if (localStorage.inputQuery) {

      setInputQuery(localStorage.getItem('inputQuery'));

      let movieListToRender;

      let movieListSlicedFirstRender;

      const screenWidth = window.screen.width;

      movieListToRender = JSON.parse(localStorage.getItem('movieListToRender'));

      setMoviesList(movieListToRender);

      let subarray = [];

      if (screenWidth > 768) {

        if (movieListToRender.length < 12) {
          setMoviesList([]);
          setMoviesList(movieListToRender);
          setSearchStatus(true);
          setIsThereMoreFilms(false);
          setIsLoading(false);
        }

        if (movieListToRender.length > 12) {
          localStorage.setItem('clickNumbers', 0);
          setMoviesList([]);
          movieListSlicedFirstRender = movieListToRender.slice(0, 12);
          setMoviesList(movieListSlicedFirstRender);
          let clickNumbers = Math.floor((movieListToRender.length - 12) / 3);
          localStorage.setItem('clickNumbers', clickNumbers);
          for (let i = 0; i < movieListToRender.length; i = i + 3) {
            subarray.push(movieListToRender.slice(i, i + 3))
          }
          localStorage.setItem('subarray', JSON.stringify(subarray));
          setIsLoading(false);
          setSearchStatus(true);
          setIsThereMoreFilms(true);
          setMoreButtonEnabled(true);
        }

        if (screenWidth > 480 && screenWidth < 768) {

          if (movieListToRender.length < 8) {
            setMoviesList([]);
            setMoviesList(movieListToRender);
            setSearchStatus(true);
            setIsThereMoreFilms(false);
            setIsLoading(false);
          }

          if (movieListToRender.length > 8) {
            localStorage.setItem('clickNumbers', 0);
            setMoviesList([]);
            movieListSlicedFirstRender = movieListToRender.slice(0, 8);
            setMoviesList(movieListSlicedFirstRender);
            let clickNumbers = Math.floor((movieListToRender.length - 2) / 2);
            localStorage.setItem('clickNumbers', clickNumbers);
            setSearchStatus(true);
            setIsThereMoreFilms(true);
            setMoreButtonEnabled(true);

            for (let i = 0; i < movieListToRender.length; i = i + 2) {
              subarray.push(movieListToRender.slice(i, i + 2))
            }

            localStorage.setItem('subarray', JSON.stringify(subarray));
            setIsLoading(false);
          }
        }

        if (screenWidth <= 480) {

          if (movieListToRender.length < 5) {
            setMoviesList([]);
            setMoviesList(movieListToRender);
            setSearchStatus(true);
            setIsThereMoreFilms(false);
            setIsLoading(false);
          }

          if (movieListToRender.length > 5) {
            localStorage.setItem('clickNumbers', 0);
            setMoviesList([]);
            movieListSlicedFirstRender = movieListToRender.slice(0, 5);
            setMoviesList(movieListSlicedFirstRender);
            let clickNumbers = Math.floor((movieListToRender.length - 1) / 1);
            localStorage.setItem('clickNumbers', clickNumbers);
            setSearchStatus(true);
            setIsThereMoreFilms(true);
            setMoreButtonEnabled(true);

            for (let i = 0; i < movieListToRender.length; i = i + 1) {
              subarray.push(movieListToRender.slice(i, i + 1))
            }

            localStorage.setItem('subarray', JSON.stringify(subarray));
            setIsLoading(false);
          }
        }

      }

      let checkBoxStateAfterReload = JSON.parse(localStorage.getItem('checkBoxState'));

      if (checkBoxStateAfterReload === true) {
        setCheckBoxState(true);
      }
    }
  }, [])

  const handleChangeQuery = (e) => {
    setInputQuery(e.target.value);
  }

  let movieListToRender;

  let movieListSlicedFirstRender;


  function handleSubmit(e) {

    e.preventDefault();

    setEmptySearch(false);

    setIsLoading(true);

    setMoreButtonEnabled(false);

    setCheckBoxState(false);

    const screenWidth = window.screen.width;

    moviesApi
      .getAllMovies()
      .then((data) => {

        movieListToRender = data.filter(el => el.nameRU.toLowerCase().includes(inputQuery.trim().toLowerCase())); //осуществляем поиск по запросу

        localStorage.setItem('inputQuery', inputQuery); //сохраняем значение запроса в хранилище

        localStorage.setItem('movieListToRender', JSON.stringify(movieListToRender)); //сохраняем найденный список в хранилище

        if (movieListToRender.length === 0) {
          setEmptySearch(true);
          setMessageAfterPreloader('Ничего не найдено');
        }

        let subarray = [];

        if (screenWidth > 768) {

          if (movieListToRender.length < 12) {
            setMoviesList([]);
            setMoviesList(movieListToRender);
            setSearchStatus(true);
            setIsThereMoreFilms(false);
            setIsLoading(false);
          }

          if (movieListToRender.length > 12) {
            localStorage.setItem('clickNumbers', 0);
            setMoviesList([]);
            movieListSlicedFirstRender = movieListToRender.slice(0, 12);
            setMoviesList(movieListSlicedFirstRender);
            let clickNumbers = Math.floor((movieListToRender.length - 12) / 3);
            localStorage.setItem('clickNumbers', clickNumbers);
            for (let i = 0; i < movieListToRender.length; i = i + 3) {
              subarray.push(movieListToRender.slice(i, i + 3))
            }
            localStorage.setItem('subarray', JSON.stringify(subarray));
            setIsLoading(false);
            setSearchStatus(true);
            setIsThereMoreFilms(true);
            setMoreButtonEnabled(true);
          }
        }

        if (screenWidth > 480 && screenWidth < 768) {

          if (movieListToRender.length < 8) {
            setMoviesList([]);
            setMoviesList(movieListToRender);
            setSearchStatus(true);
            setIsThereMoreFilms(false);
            setIsLoading(false);
          }

          if (movieListToRender.length > 8) {
            localStorage.setItem('clickNumbers', 0);
            setMoviesList([]);
            movieListSlicedFirstRender = movieListToRender.slice(0, 8);
            setMoviesList(movieListSlicedFirstRender);
            let clickNumbers = Math.floor((movieListToRender.length - 2) / 2);
            localStorage.setItem('clickNumbers', clickNumbers);
            setSearchStatus(true);
            setIsThereMoreFilms(true);
            setMoreButtonEnabled(true);

            for (let i = 0; i < movieListToRender.length; i = i + 2) {
              subarray.push(movieListToRender.slice(i, i + 2))
            }

            localStorage.setItem('subarray', JSON.stringify(subarray));
            setIsLoading(false);
          }
        }

        if (screenWidth <= 480) {

          if (movieListToRender.length < 5) {
            setMoviesList([]);
            setMoviesList(movieListToRender);
            setSearchStatus(true);
            setIsThereMoreFilms(false);
            setIsLoading(false);
          }

          if (movieListToRender.length > 5) {
            localStorage.setItem('clickNumbers', 0);
            setMoviesList([]);
            movieListSlicedFirstRender = movieListToRender.slice(0, 5);
            setMoviesList(movieListSlicedFirstRender);
            let clickNumbers = Math.floor((movieListToRender.length - 1) / 1);
            localStorage.setItem('clickNumbers', clickNumbers);
            setSearchStatus(true);
            setIsThereMoreFilms(true);
            setMoreButtonEnabled(true);

            for (let i = 0; i < movieListToRender.length; i = i + 1) {
              subarray.push(movieListToRender.slice(i, i + 1))
            }

            localStorage.setItem('subarray', JSON.stringify(subarray));
            setIsLoading(false);
          }
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setEmptySearch(true);
        setMessageAfterPreloader('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
        console.log(err);
      });
  }

  // кнопка Ещё

  const [clickCounts, setClickCounts] = React.useState(0);

  const [moreButtonEnabled, setMoreButtonEnabled] = React.useState(true);

  function iWantMoreButton() {

    const screenWidth = window.screen.width;

    let i = 0;

    i = clickCounts + 1

    setClickCounts(i);

    let movieListSlicedSecondRender = []

    const subarray = JSON.parse(localStorage.getItem('subarray'));

    if (screenWidth > 768) {
      for (let i = 0; i < (5 + clickCounts); i++) {
        movieListSlicedSecondRender = movieListSlicedSecondRender.concat(subarray[i]);
        setMoviesList(movieListSlicedSecondRender);
      }
    }

    if (screenWidth > 480 && screenWidth < 768) {
      for (let i = 0; i < (5 + clickCounts); i++) {
        movieListSlicedSecondRender = movieListSlicedSecondRender.concat(subarray[i]);
        setMoviesList(movieListSlicedSecondRender);
      }
    }

    if (screenWidth < 480) {
      for (let i = 0; i < (5 + clickCounts); i++) {
        movieListSlicedSecondRender = movieListSlicedSecondRender.concat(subarray[i + 1]);
        setMoviesList(movieListSlicedSecondRender);
      }
    }

    if (localStorage.getItem('movieListToRender') === JSON.stringify(movieListSlicedSecondRender)) {
      setMoreButtonEnabled(false);
      setIsThereMoreFilms(false);
    }
  }

  //checkbox короткометражки в /movies

  const handleCheckBox = () => {
    setCheckBoxState((checkBoxState) => !checkBoxState);
  }

  React.useEffect(() => {
    localStorage.setItem('checkBoxState', checkBoxState);

    if (checkBoxState === true) {
      const movieListToRender = JSON.parse(localStorage.getItem('movieListToRender'))

      if (!JSON.parse(localStorage.getItem('movieListToRender'))) {
        return;
      }

      const abc = movieListToRender.filter(el => el.duration < 40);

      setMoviesList(abc);

      setMoreButtonEnabled(false);
    }

    if (checkBoxState === false) {

      setMoviesList([])

      if (!JSON.parse(localStorage.getItem('movieListToRender'))) {
        return;
      }

      setMoviesList(JSON.parse(localStorage.getItem('movieListToRender')));
    }
  }, [checkBoxState])

  // работа с /saved-movies

  const [savedMoviesList, setSavedMoviesList] = React.useState([]);

  const [savedMoviesListAll, setSavedMoviesListAll] = React.useState([]);

  React.useEffect(() => {
    mainApi
      .getUserMovies(jwtForApi)
      .then((data) => {
        setSavedMoviesList(data);
        setSavedMoviesListAll(data);
      })
      .catch((err) => console.log(err));
  }, [isSavedMoviesListChanged, loggedIn, jwtIsChanged] );



  const handleSaveButton = (data) => {
    mainApi
      .addNewMovie(data, jwtForApi)
      .then((data) => {
        setIsSavedMoviesListChanged(!isSavedMoviesListChanged);
      })
      .catch((err) => console.log(err));
  }

  const handleDeleteButton = (cardId) => {
    mainApi
      .deleteMovie(cardId, jwtForApi)
      .then((data) => {
        setIsSavedMoviesListChanged(!isSavedMoviesListChanged);
      })
      .catch((err) => console.log(err));
  }

  const [emptySearchSavedMovies, setEmptySearchSavedMovies] = React.useState(false);

  const [inputQuerySavedMovies, setInputQuerySavedMovies] = React.useState('');

  const handleChangeQuerySavedMovies = (e) => {
    setInputQuerySavedMovies(e.target.value);
  }

  const handleSearchSubmitSavedMovieList = (e) => {
    let selectedMoviesList = []

    setEmptySearchSavedMovies(false);
    e.preventDefault();
    mainApi
      .getUserMovies(jwtForApi)
      .then((data) => {
        selectedMoviesList = data.filter(el => el.nameRU.toLowerCase().includes(inputQuerySavedMovies.trim().toLowerCase()));

        if (selectedMoviesList.length === 0) {
          setEmptySearchSavedMovies(true);
          setMessageAfterPreloader('Ничего не найдено');
        }

        setSavedMoviesList(selectedMoviesList);
      })
      .catch((err) => console.log(err));
  }


  const handleSavedMoviesLink = () => {
    setEmptySearchSavedMovies(false);
    mainApi
      .getUserMovies(jwtForApi)
      .then((data) => {
        setSavedMoviesList(data);
        setSavedMoviesListAll(data);
        setCheckBoxStateSavedMovies(false);
      })
      .catch((err) => console.log(err));
  }


  // check-box saved-movies


  const [checkBoxStateSavedMovies, setCheckBoxStateSavedMovies] = React.useState(false);

  const handleCheckBoxSavedMovies = () => {

    setCheckBoxStateSavedMovies(!checkBoxStateSavedMovies);

    if (!checkBoxStateSavedMovies) {
      mainApi
        .getUserMovies(jwtForApi)
        .then((data) => {
          const savedmovieListCheckBox = data.filter(el => el.duration < 40);
          setSavedMoviesList(savedmovieListCheckBox);
          setIsThereMoreFilms(false);
        })
        .catch((err) => console.log(err));
    }

    if (checkBoxStateSavedMovies) {
      mainApi
        .getUserMovies(jwtForApi)
        .then((data) => {
          setSavedMoviesList(data);
        })
        .catch((err) => console.log(err));
    }
  }

  // navigation

  const [navIsOpened, setNavIsOpened] = React.useState(false);

  const handleNavOpenButton = () => {
    setNavIsOpened(true);
  }

  const handleNavCloseButton = () => {
    setNavIsOpened(false);
  }

  function signOut() {
    setCurrentUser({});
    setLoggedIn(false);
    setMoviesList([]);
    setInputQuery('');
    setCheckBoxState(false);
    setIsLoading(false);
    setSearchStatus(false);
    setIsThereMoreFilms(false);
    setMessageAfterPreloader('');
    setEmptySearch(false);
    setMoreButtonEnabled(false);
    setClickCounts(0);
    setSavedMoviesList([]);
    setCheckBoxStateSavedMovies(false);
    setNavIsOpened(false);
    localStorage.clear();
    history.push("/");
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

            <Route exact path='/signup'>
              <Register handleRegister={handleRegister} registerError={registerError} setRegisterError={setRegisterError} />
            </Route>

            <Route exact path='/signin'>
              <Login handleLogin={handleLogin} />
            </Route>

            <ProtectedRoute loggedIn={loggedIn}>

              <Route exact path='/movies'>
                <Header handleOpenNavButton={handleNavOpenButton} handleSavedMoviesLink={handleSavedMoviesLink} />
                <Movies
                  onChange={handleChangeQuery}
                  onSubmit={handleSubmit}
                  moviesList={moviesList}
                  onSave={handleSaveButton}
                  searchStatus={searchStatus}
                  moreFilms={isThereMoreFilms}
                  checkBoxState={checkBoxState}
                  handleMoreButton={iWantMoreButton}
                  moreButtonEnabled={moreButtonEnabled}
                  handleCheckBox={handleCheckBox}
                  isLoading={isLoading}
                  messageAfterPreloader={messageAfterPreloader}
                  emptySearch={emptySearch}
                  savedMoviesList={savedMoviesListAll}
                  onDelete={handleDeleteButton}
                  inputQuery={inputQuery}
                />
                <Footer />
                <Navigation handleCloseButton={handleNavCloseButton} navIsOpened={navIsOpened} handleSavedMoviesLink={handleSavedMoviesLink} />
              </Route>

              <Route exact path='/saved-movies'>
                <Header handleOpenNavButton={handleNavOpenButton} handleSavedMoviesLink={handleSavedMoviesLink} />
                <SavedMovies
                  moviesList={savedMoviesList}
                  onDelete={handleDeleteButton}
                  onChange={handleChangeQuerySavedMovies}
                  onSubmit={handleSearchSubmitSavedMovieList}
                  checkBoxState={checkBoxStateSavedMovies}
                  handleCheckBox={handleCheckBoxSavedMovies}
                  isLoading={isLoading}
                  messageAfterPreloader={messageAfterPreloader}
                  emptySearch={emptySearchSavedMovies}
                />
                <Footer />
                <Navigation handleCloseButton={handleNavCloseButton} navIsOpened={navIsOpened} handleSavedMoviesLink={handleSavedMoviesLink} />
              </Route>

              <Route exact path='/profile'>
                <Header handleOpenNavButton={handleNavOpenButton} />
                <Profile handleEditUser={handleEditUser} signOut={signOut} />
                <Navigation handleCloseButton={handleNavCloseButton} navIsOpened={navIsOpened} handleSavedMoviesLink={handleSavedMoviesLink} />
              </Route>

            </ProtectedRoute>

            <Route path='*'>
              <Page404 />
            </Route>

          </Switch>

        </div >
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
