import React, { useState } from "react";

const Login = ({ titleText = "Вход", buttonText = "Войти" }) => {
  return (
    <form className="singform">
      <h2 className="singform__title">{titleText}</h2>
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
        {buttonText}
      </button>
    </form>
  );
};

export default Login;
