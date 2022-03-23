import React, {useState, useEffect} from 'react';
import api from '../utils/api';
import Card from './Card';

const Main = ({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) => {
    const [userName, setUserName] = useState("Имя");
    const [userDescription, setUserDescription] = useState("О себе");
    const [userAvatar, setUserAvatar] = useState("Аватар");
    const [cards, setCards] = useState([]);


    useEffect(() => {
        api.getUserInfo()
            .then(res => {
                setUserAvatar(res.avatar)
                setUserDescription(res.about)
                setUserName(res.name)
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`)
            })
            api.getInitialCards()
            .then(res => setCards(res))
            .catch((err) => {
                console.log(`Ошибка: ${err}`)
            })
        },[]);

        return (<React.Fragment>
        <main className="content">
        <section className="profile">
            <div className="profile__card">
                <button onClick={onEditAvatar} className="profile__avatar" type="button">
                    {userAvatar && <img className="profile__image" src={userAvatar} alt="Аватар"/>}
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button onClick={onEditProfile} className="profile__button" type="button"></button>
                    <p className="profile__spec">{userDescription}</p>
                </div>
            </div>
            <button onClick={onAddPlace} className="profile__add" type="button"></button>
        </section>
        <section className="cards">
        {cards.map(card => <Card card={card} onCardClick={onCardClick} key={card._id}/>)}
        </section>
        </main>
        </React.Fragment>);
}
 
export default Main;