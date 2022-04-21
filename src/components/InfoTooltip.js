import React from "react";
import PopupWithForm from "./PopupWithForm";

const InfoTooltip = ({ popupText, popupIconImg, onClose, isOpen }) => {
  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose}>
      <img className="popup__icon" src={popupIconImg} alt="Статус запроса:" />
      <p className="popup__text">{popupText}</p>
    </PopupWithForm>
  );
};

export default InfoTooltip;
