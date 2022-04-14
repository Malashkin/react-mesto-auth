import React from "react";
import mainLogo from "./../images/Vector.svg";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={mainLogo} alt="Логотип" />
      <nav className="header__navbar">Войти</nav>
    </div>
  );
};

export default Header;
