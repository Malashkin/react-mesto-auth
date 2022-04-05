import React from "react";

const PopupWithForm = ({
  isOpen,
  onClose,
  name,
  title,
  children,
  onSubmit,
}) => {
  if (isOpen) {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    });
  }

  return (
    <div
      id={`popup_${name}`}
      className={`popup ${isOpen && "popup_type_opened"}`}
    >
      <div className="popup__content">
        <button
          onClick={onClose}
          className="popup__close"
          type="button"
        ></button>
        <form
          onSubmit={onSubmit}
          className={`popup__form popup__form_type_${name}`}
          name="formEdit"
          noValidate
        >
          <h2 className="popup__title">{title}</h2>
          {children}
        </form>
      </div>
      <div onClick={onClose} className="popup__overlay" />
    </div>
  );
};

export default PopupWithForm;
