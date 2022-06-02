export const BASE_URL = "http://localhost:3000";

const jwt = localStorage.getItem('jwt');
console.log(jwt);

function checkRes(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    return checkRes(res);
  });
}

export const getUserMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    return this.checkRes(res);
  })
}

export const editUserInfo = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
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

export const addNewMovie = (data) => {
  return fetch(`${BASE_URL}/movies`, {
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

export const deleteMovie = (cardId) => {
  return fetch(`${BASE_URL}/movies/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    return this.checkRes(res);
  });
}




// const mainApi = new MainApi({
//   url: 'http://localhost:3000',
//   headers: {
//     authorization: `Bearer ${jwt}`,
//     'Content-Type': 'application/json',
//   },
// });

// export default mainApi;