import React from 'react';
import './../index.css';
import mainLogo from './../images/Vector.svg' 
import Header from './Header';


function App() {
  return (
    <div className="body">
    <div className="page">
        <Header />
    <main className="content">
        <section className="profile">
            <div className="profile__card">
                <div className="profile__avatar">
                    <img className="profile__image" src="../src/images/image.jpg" alt="Аватар"/>
                    <button className="profile__edit"></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив-Кусто</h1>
                    <button className="profile__button" type="button"></button>
                    <p className="profile__spec">Исследователь океана</p>
                </div>
            </div>
            <button className="profile__add" type="button"></button>
        </section>
        <section className="cards">
        </section>
    </main>
    <footer className="footer">
        <p className="footer__copyright">© 2022 Mesto Russia</p>
    </footer>
    <template className="cards__list">
        <div className="cards__conteiner">
            <img className="cards__image" src="." alt="."/>
            <button type="button" className="cards__trashicon"></button>
            <div className="cards__description">
                <h2 className="cards__title"></h2>
                <div className="cards__reaction">
                <button type="button" className="cards__emotion"></button>
                <p className="cards__counter">0</p>
            </div>
            </div>
        </div>
    </template>
    <div id='popupEdit' className="popup popup_type_edit">
        <div className="popup__content">
            <button className="popup__close popup__close_edit" type="button"></button>
            <form className="popup__form popup__form_type_edit" name="formEdit" noValidate>
                <h2 className="popup__title">Редактировать профиль</h2>
                <input id="input-name" className="popup__input popup__input_name" type="text" placeholder="Имя" value="" name="name" required minLength="2" maxLength="40"/>
                <span className="popup__span input-name-error"></span>
                <input id="input-job" className="popup__input popup__input_job" type="text" placeholder="О себе" value="" name="about" required minLength="2" maxLength="200"/>
                <span className="popup__span input-job-error"></span>
                <button type="submit" className="popup__button popup__button_disabled" disabled>Сохранить</button>
            </form>
        </div>
    </div>
    <div id='popupAdd' className="popup popup_type_add">
        <div className="popup__content">
            <button className="popup__close" type="button"></button>
            <form className="popup__form popup__form_type_add" id="formAdd" noValidate>
                <h2 className="popup__title">Новое место</h2>
                <input id="input-title" className="popup__input popup__input_title" type="text" placeholder="Название" name="name" minLength="2" maxLength="30" required/>
                <span className="popup__span input-title-error"> </span>
                <input id="input-url" className="popup__input popup__input_image" type="url" placeholder="Ссылка на картинку" name="link" required/>
                <span className="popup__span input-url-error"> </span>
                <button type="submit" className="popup__button popup__button_disabled">Создать</button>
            </form>
        </div>
    </div>
    <div id='popupZoom' className="popup popup_type_zoom">
        <div className="popup__content popup__content_zoom">
            <button className="popup__close" type="button">
            </button>
            <img className="popup__image" alt="." src="."/>
            <h2 className="popup__subtitle"></h2>
        </div>
    </div>
    <div id='popupDelete' className="popup popup_type_delete">
        <div className="popup__content">
            <button className="popup__close" type="button"></button>
            <form className="popup__form popup__form_delete">
                <h2 className="popup__title">Вы уверены?</h2>
                <button type="submit" className="popup__button">Да</button>
            </form>
        </div>
    </div>
    <div id='popupAvatar' className="popup popup_type_avatar">
        <div className="popup__content">
            <button className="popup__close" type="button"></button>
            <form className="popup__form">
                <h2 className="popup__title">Обновить аватар</h2>
                <input id="input-avatar" className="popup__input popup__input_avatar" type="url" placeholder="Ссылка на аватар" name="avatar" required/>
                <span className="popup__span input-avatar-error"> </span>
                <button type="submit" className="popup__button">Сохранить</button>
            </form>
        </div>
    </div>
</div>
</div>
  );
}

export default App;
