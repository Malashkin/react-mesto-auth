class Auth {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  makeSingUp(data) {
    console.log(data);
    return fetch(`${this._baseUrl}/singup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkResult);
  }

  makeSingIn(data) {
    console.log(data);
    return fetch(`${this._baseUrl}/singin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkResult);
  }

  checkToken(token) {
    console.log(token);
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      header: this._headers,
      Authorization: `Bearer ${token}`,
    }).then(this._checkResult);
  }
}

const auth = new Auth({
  baseUrl: "https://auth.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
});

export default auth;
