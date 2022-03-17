import React, { Component } from 'react';
import mainLogo from './../images/Vector.svg' 

class Header extends React.Component {
    render() { 
        return (
            <React.Fragment> 
                <div className="header">
                  <img className="header__logo" src={mainLogo} alt='Логотип'/>
                 </div>
            </React.Fragment>
        )
    }
}
 
export default Header;
