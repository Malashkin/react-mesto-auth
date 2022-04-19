const baseUrl = "https://auth.nomoreparties.co";

function makeRequest(url, props) {
  return fetch(url, props).then((res) =>
    res.ok
      ? res.json
      : Promise.reject({ errorCode: res.status, errorText: res.statusText })
  );
}

function makeSingUp(email, password) {
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

function makeSingIn(email, password) {
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
