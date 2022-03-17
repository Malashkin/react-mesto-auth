import React, { Component } from 'react';

class Main extends React.Component {

    handleEditAvatarClick () {
document.querySelector('.popup_type_avatar').classList.add('popup_type_opened')
    };

handleEditProfileClick () {
document.querySelector('.popup_type_edit').classList.add('popup_type_opened')
    };

    handleAddPlaceClick () {
        document.querySelector('.popup_type_add').classList.add('popup_type_opened')
    };

    render() { 
        return (<React.Fragment>
        <main className="content">
        <section className="profile">
            <div className="profile__card">
                <div className="profile__avatar">
                    <img onClick={this.handleEditAvatarClick} className="profile__image" src="./images/image.jpg" alt="Аватар"/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив-Кусто</h1>
                    <button className="profile__button" onClick={this.handleEditProfileClick} type="button"></button>
                    <p className="profile__spec">Исследователь океана</p>
                </div>
            </div>
            <button className="profile__add" onClick={this.handleAddPlaceClick} type="button"></button>
        </section>
        <section className="cards">
        </section>
        </main>
        </React.Fragment>);
    }
}
 
export default Main;