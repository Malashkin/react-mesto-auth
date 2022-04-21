import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import auth from "../utils/auth";
import CurrentUserContext from "./../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeletePopup from "./DeletePopup";
import Register from "./Register";
import Login from "./Login";
import InfoTooltip from "./InfoTooltip";
import ErrorLogo from "../images/decl-icon.svg";
import SuccessLogo from "../images/ok-icon.svg";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isNoticeSuccessPopupOpen, setIsNoticeSuccessPopupOpen] =
    useState(false);
  const [isNoticeErrorPopupOpen, setIsNoticeErrorPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [userLogin, setUserLogin] = useState("");
  const [cards, setCards] = useState([]);
  const [deletingCard, setDeletingCard] = useState(null);
  const [deletePopupButtonText, setDeletePopupButtonText] = useState("Да");
  const [editProfilePopupButtonText, setEditProfilePopupButtonText] =
    useState("Сохранить");
  const [addPlacePopupButton, setAddPlacePopupButton] = useState("Сохранить");
  const [editAvatarPopupButton, setEditAvatarPopupButton] =
    useState("Сохранить");
  const history = useHistory();

  function checkToken(token) {
    auth
      .checkToken(token)
      .then((res) => {
        if (res && res.data) {
          setLoggedIn(true);
          setUserLogin(res.data.email);
          history.push("/");
        }
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token);
    }
  });

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
    setIsNoticeSuccessPopupOpen(false);
    setIsNoticeErrorPopupOpen(false);
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

  const handleUpdateUser = (user) => {
    setEditProfilePopupButtonText("Сохранение...");
    api
      .setUserInfo(user)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      })
      .finally(() => {
        setEditProfilePopupButtonText("Сохранить");
      });
  };

  function handleCardDelete(e) {
    e.preventDefault();
    setDeletePopupButtonText("Удаление...");
    api
      .deleteCard(deletingCard._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== deletingCard._id));
        setDeletingCard(null);

        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      })
      .finally(() => {
        setDeletePopupButtonText("Да");
      });
  }

  const handleUpdateAvatar = (userAvatar) => {
    setEditAvatarPopupButton("Сохранение...");
    api
      .editAvatar(userAvatar.avatar)
      .then((newAvatar) => {
        setCurrentUser(newAvatar);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      })
      .finally(() => {
        setEditAvatarPopupButton("Сохранить");
      });
  };

  const handleAddPlaceSubmit = (card) => {
    setAddPlacePopupButton("Сохранение...");
    api
      .createCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);

        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      })
      .finally(() => {
        setAddPlacePopupButton("Сохранить");
      });
  };

  function handleLogin(email, password) {
    auth
      .makeLogin(email, password)
      .then((res) => {
        if (res && res.token) {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          setUserLogin(email);
          history.push("/");
        }
      })
      .catch((error) => {
        setIsNoticeErrorPopupOpen(true);
        console.log(error);
      });
  }

  function handleSignup(email, password) {
    auth
      .makeSignup(email, password)
      .then((res) => {
        if (res.data && res.data._id) {
          history.push("/sign-in");
          setIsNoticeSuccessPopupOpen(true);
        }
      })
      .catch((error) => {
        setIsNoticeErrorPopupOpen(true);
        console.log(error);
      });
  }

  function makeSignOut() {
    localStorage.removeItem("jwt");
    history.push("/sign-up");
    setUserLogin("");
  }

  return (
    <div className="body">
      <CurrentUserContext.Provider value={currentUser}>
        <Header signOut={makeSignOut} user={userLogin} />
        <Switch>
          <Route
            path="/sign-up"
            title="Регистрация"
            buttonText="Зарегистрироваться"
          >
            <Register onSubmit={handleSignup} />
          </Route>
          <Route path="/sign-in" title="Вход" buttonText="Войти">
            <Login onSubmit={handleLogin} />
          </Route>
          <ProtectedRoute
            path="/"
            loggedIn={loggedIn}
            component={Main}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handelAvatarClick}
            onCardClick={handleClick}
            onCardLike={handleLikeClick}
            onDeleteClick={handelDeleteClick}
            cards={cards}
          ></ProtectedRoute>
        </Switch>
        <Footer />
        <EditProfilePopup
          onUpdateUser={handleUpdateUser}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText={editProfilePopupButtonText}
        />
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          buttonText={editAvatarPopupButton}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          buttonText={addPlacePopupButton}
        />
        <DeletePopup
          isOpen={isDeletePopupOpen}
          onClose={closeAllPopups}
          onSubmit={handleCardDelete}
          buttonText={deletePopupButtonText}
        />
        <InfoTooltip
          popupIconImg={SuccessLogo}
          popupText="Вы успешно зарегистрировались"
          onClose={closeAllPopups}
          isOpen={isNoticeSuccessPopupOpen}
        />
        <InfoTooltip
          popupIconImg={ErrorLogo}
          popupText="Что-то пошло не так! Попробуйте ещё раз."
          onClose={closeAllPopups}
          isOpen={isNoticeErrorPopupOpen}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
