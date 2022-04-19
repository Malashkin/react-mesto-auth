import React, { useState } from "react";

const Login = ({}) => {
  return (
    <div className="singform">
      <h2 className="singform__title">Вход</h2>
      <input
        className="singform__input"
        placeholder="Email"
        type="email"
      ></input>
      <input
        className="singform__input"
        placeholder="Пароль"
        type="password"
      ></input>
      <button className="singform__button" type="submit">
        Войти
      </button>
    </div>
  );
};

export default Login;
