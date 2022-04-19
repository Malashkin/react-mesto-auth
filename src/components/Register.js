import React from "react";

const Register = ({
  titleText = "Регистрация",
  buttonText = "Зарегистрироваться",
}) => {
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
      <span className="singform__span">Уже зарегистрированы? Войти</span>
    </form>
  );
};

export default Register;
