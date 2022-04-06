class Api {
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

  getInitialCards() {
    return fetch(`${this._baseUrl}cards/`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResult);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResult);
  }

  setUserInfo(data) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkResult);
  }

  createCardApi(data) {
    return fetch(`${this._baseUrl}cards/`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkResult);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResult);
  }

  deleteCardLike(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResult);
  }

  changeLikeCardStatus(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResult);
  }

  editAvatar(newAvatar) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: newAvatar,
      }),
    }).then(this._checkResult);
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort36/",
  headers: {
    authorization: "b63003c8-9150-4e29-8d9a-6e331bb26d1d",
    "Content-Type": "application/json",
  },
});

export default api;
