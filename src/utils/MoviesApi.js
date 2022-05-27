class MoviesApi {
  constructor(config) {
    this._url = config.url;
  }

  checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getAllMovies() {
    return fetch(this._url, {
      method: 'GET'
    }).then((res) => {
      return this.checkRes(res);
    })
  }
}

const moviesApi = new MoviesApi ({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
})

export default moviesApi;

