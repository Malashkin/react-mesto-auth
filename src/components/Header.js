import React, { Component } from 'react';
import mainLogo from './../images/Vector.svg' 

class Header extends React.Component {
    render() { 
        return ( 
        <div className="header">
        <img className="header__logo" src={mainLogo} alt='Логотип'/>
        </div>
        )
    }
}
 
export default Header;
