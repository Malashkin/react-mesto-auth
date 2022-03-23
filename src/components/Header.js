import React from 'react';
import mainLogo from './../images/Vector.svg' 

function Header () { 
        return (
            <React.Fragment> 
                <div className="header">
                  <img className="header__logo" src={mainLogo} alt='Логотип'/>
                 </div>
            </React.Fragment>
        )
}
 
export default Header;
