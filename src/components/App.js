import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import CurrentUserContext from "./../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeletePopup from "./DeletePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [deletingCard, setDeletingCard] = useState(null);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser({ ...res });
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
    api
      .getCardList()
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
  function handelDeleteClick(card) {
    setIsDeletePopupOpen(true);
    setDeletingCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeletePopupOpen(false);
    setSelectedCard(null);
    setDeletingCard(null);
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

  function handleCardDelete(e) {
    e.preventDefault();
    api
      .deleteCard(deletingCard._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== deletingCard._id));
        setDeletingCard(null);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }

  const handleUpdateUser = (user) => {
    api
      .setUserInfo(user)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  };

  const handleUpdateAvatar = (userAvatar) => {
    api
      .editAvatar(userAvatar.avatar)
      .then((newAvatar) => {
        setCurrentUser(newAvatar);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  };

  const handleAddPlaceSubmit = (card) => {
    api
      .createCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
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
            onDeleteClick={handelDeleteClick}
            cards={cards}
          />
          <Footer />
          <EditProfilePopup
            onUpdateUser={handleUpdateUser}
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          />
          <ImagePopup onClose={closeAllPopups} card={selectedCard} />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />
          <DeletePopup
            isOpen={isDeletePopupOpen}
            onClose={closeAllPopups}
            onSubmit={handleCardDelete}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
