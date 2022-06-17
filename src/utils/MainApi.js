class MainApi {
  constructor(config) {
    this._url = config.url;
  }

  checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo(jwt) {
    return fetch(this._url + '/users/me', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      return this.checkRes(res);
    });
  }

  getUserMovies(jwt) {
    return fetch(this._url + '/movies', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      return this.checkRes(res);
    })
  }

  editUserInfo(name, email, jwt) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    }).then((res) => {
      return this.checkRes(res);
    });
  }

  addNewMovie(data, jwt) {
    return fetch(this._url + '/movies', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      return this.checkRes(res);
    });
  }

  deleteMovie(cardId, jwt) {
    return fetch(this._url + `/movies/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      return this.checkRes(res);
    });
  }

}

const mainApi = new MainApi({
  url: 'http://localhost:3000',
});

export default mainApi;