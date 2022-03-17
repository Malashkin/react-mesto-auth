import React, { Component } from 'react';

class PopupWithForm extends React.Component {

    render() { 
        return <React.Fragment>
               <div id='popupEdit' className={`popup popup_type_${props.name}`}>
        <div className="popup__content">
            <button className="popup__close popup__close_edit" type="button"></button>
            <form className="popup__form popup__form_type_edit" name="formEdit" noValidate>
                <h2 className="popup__title">{this.title}</h2>
                <button type="submit" className="popup__button popup__button_disabled" disabled>Coхранить</button>
            </form>
        </div>
    </div>
        </React.Fragment>;
    }
}
 
export default PopupWithForm;