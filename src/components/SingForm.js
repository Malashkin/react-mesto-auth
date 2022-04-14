import React from "react";

const SingForm = ({ title, buttonText, spanText }) => {
  return (
    <div className="singform">
      <h2 className="singform__title">{title}</h2>
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
      <span className="singform__span">{spanText}</span>
    </div>
  );
};

export default SingForm;
