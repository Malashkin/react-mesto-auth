import React from "react";
import mainLogo from "./../images/Vector.svg";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={mainLogo} alt="Логотип" />
      <NavBar title="Выйти" user="xb-dx" />
    </div>
  );
};

export default Header;
