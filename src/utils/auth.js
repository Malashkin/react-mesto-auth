const baseUrl = "https://auth.nomoreparties.co";

function makeRequest(url, props) {
  return fetch(url, props).then((res) =>
    res.ok
      ? res.json
      : Promise.reject({ errorCode: res.status, errorText: res.statusText })
  );
}

export function makeSingUp(email, password) {
  console.log(email, password);
  const url = baseUrl + "/singup";
  const headers = {
    "Content-Type": "application/json",
  };
  const props = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password }),
  };
  return makeRequest(url, props);
}

export function makeSingIn(email, password) {
  console.log(email, password);
  const url = baseUrl + "/singin";
  const headers = {
    "Content-Type": "application/json",
  };
  const props = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password }),
  };
  return makeRequest(url, props);
}

export function checkToken(token) {
  const url = baseUrl + "/users/me";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const props = {
    method: "GET",
    headers: headers,
  };
  return makeRequest(url, props);
}
