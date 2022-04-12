import React from "react";
import PopupWithForm from "./PopupWithForm";

const DeletePopup = ({ isOpen, onClose, onSubmit, buttonText }) => {
  return (
    <PopupWithForm
      name="delete"
      title="Вы уверены?"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <button type="submit" className="popup__button">
        {buttonText}
      </button>
    </PopupWithForm>
  );
};

export default DeletePopup;
