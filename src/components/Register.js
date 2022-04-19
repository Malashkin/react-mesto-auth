import React from "react";

const Register = () => {
  return (
    <div className="singform">
      <h2 className="singform__title">Регистрация</h2>
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
        Регистрация
      </button>
      <span className="singform__span">Уже зарегистрированы? Войти</span>
    </div>
  );
};

export default Register;
