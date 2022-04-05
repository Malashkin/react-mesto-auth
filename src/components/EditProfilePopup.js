import React from "react";
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = ({ isOpen, onClose }) => {
  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose}>
      <input
        id="input-name"
        className="popup__input popup__input_name"
        type="text"
        placeholder="Имя"
        defaultValue=""
        name="name"
        required
        minLength="2"
        maxLength="40"
      />
      <span className="popup__span input-name-error"></span>
      <input
        id="input-job"
        className="popup__input popup__input_job"
        type="text"
        placeholder="О себе"
        defaultValue=""
        name="about"
        required
        minLength="2"
        maxLength="200"
      />
      <span className="popup__span input-job-error"></span>
      <button
        type="submit"
        className="popup__button popup__button_disabled"
        disabled
      >
        Сохранить
      </button>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
