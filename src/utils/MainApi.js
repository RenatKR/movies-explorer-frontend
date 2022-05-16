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

  getUserInfo() {
    return fetch(this._url + '/users/me', {
      method: 'GET',
      headers: this._headers,
    }).then((res) => {
      return this.checkRes(res);
    });
  }

  getUserMovies() {
    return fetch(this._url + '/movies', {
      method: 'GET'
    }).then((res) => {
      return this.checkRes(res);
    })
  }

  editUserInfo(data) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => {
      return this.checkRes(res);
    });
  }

  addNewMovie(data) {
    return fetch(this._url + '/movies', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => {
      return this.checkRes(res);
    });
  }

  deleteMovie(cardId) {
    return fetch(this._url + `/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => {
      return this.checkRes(res);
    });
  }

}

const jwt = localStorage.getItem('jwt');

const mainApi = new MainApi({
  url: 'https://api.movies-explorer2000.nomoredomains.work',
  headers: {
    authorization: `Bearer ${jwt}`,
    'Content-Type': 'application/json',
  },
});

export default mainApi;