import React from 'react';

const Card = ({card, onCardClick}) => {
    function handleClick() {
        onCardClick(card);
    }  

    return (
        <div className="cards__conteiner">
        <img onClick={handleClick} className="cards__image" src={card.link} alt={card.name}/>
        <button type="button" className="cards__trashicon"></button>
        <div className="cards__description">
            <h2 className="cards__title">{card.name}</h2>
            <div className="cards__reaction">
            <button type="button" className="cards__emotion"></button>
            <p className="cards__counter">{card.likes.length}</p>
        </div>
        </div>
    </div>
    );
}

export default Card;