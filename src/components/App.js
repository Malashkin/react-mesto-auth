import React, { useState } from "react";
import "./../index.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handelAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handelAvatarClick}
          onCardClick={handleClick}
        />
        <Footer />
        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
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
        <PopupWithForm
          name="add"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="input-title"
            className="popup__input popup__input_title"
            type="text"
            placeholder="Название"
            name="name"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__span input-title-error"> </span>
          <input
            id="input-url"
            className="popup__input popup__input_image"
            type="url"
            placeholder="Ссылка на картинку"
            name="link"
            required
          />
          <span className="popup__span input-url-error"> </span>
          <button
            type="submit"
            className="popup__button popup__button_disabled"
          >
            Сохранить
          </button>
        </PopupWithForm>
        <PopupWithForm
          name="delete"
          title="Вы уверены?"
          onClose={closeAllPopups}
        >
          <h2 className="popup__title">Вы уверены?</h2>
          <button type="submit" className="popup__button">
            Да
          </button>
        </PopupWithForm>
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          onClose={closeAllPopups}
          isOpen={isEditAvatarPopupOpen}
        >
          <input
            id="input-avatar"
            className="popup__input popup__input_avatar"
            type="url"
            placeholder="Ссылка на аватар"
            name="avatar"
            required
          />
          <span className="popup__span input-avatar-error"> </span>
          <button type="submit" className="popup__button">
            Сохранить
          </button>
        </PopupWithForm>
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
    </div>
  );
}

export default App;
