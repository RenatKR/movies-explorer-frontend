class MainApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
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
      method: 'GET',
      headers: this._headers,
    }).then((res) => {
      localStorage.setItem('res', res.ok);
      return this.checkRes(res);
    })
  }

  editUserInfo(name, email) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, email }),
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
    return fetch(this._url + `/movies/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => {
      return this.checkRes(res);
    });
  }

}

const jwt = localStorage.getItem('jwt');

console.log(jwt);

const mainApi = new MainApi({
  url: 'http://localhost:3000',
  headers: {
    authorization: `Bearer ${jwt}`,
    'Content-Type': 'application/json',
  },
});

export default mainApi;