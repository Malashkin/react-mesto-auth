import React, { useEffect, useState } from "react";
import "./../index.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import CurrentUserContext from "./CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState("Загружаем...");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser({ ...res });
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => setCards(res))
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

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
  const handleLikeClick = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    !isLiked
      ? api
          .changeLikeCardStatus(card._id)
          .then((newCard) => {
            setCards((state) =>
              state.map((c) => (c._id === card._id ? newCard : c))
            );
          })
          .catch((err) => {
            console.log(`Ошибка ${err}`);
          })
      : api
          .deleteCardLike(card._id)
          .then((newCard) => {
            setCards((state) =>
              state.map((c) => (c._id === card._id ? newCard : c))
            );
          })
          .catch((err) => {
            console.log(`Ошибка ${err}`);
          });
  };

  const handleCardDelete = (card) => {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  };

  return (
    <div className="body">
      <div className="page">
        <Header />
        <CurrentUserContext.Provider value={currentUser}>
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handelAvatarClick}
            onCardClick={handleClick}
            onCardLike={handleLikeClick}
            onCardDelete={handleCardDelete}
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
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
