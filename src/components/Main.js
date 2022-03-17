import React, { Component } from 'react';

class Main extends React.Component {
    render() { 
        return (<React.Fragment>
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
        </React.Fragment>);
    }
}
 
export default Main;