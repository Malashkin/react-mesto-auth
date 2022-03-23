import React from "react";
import mainLogo from "./../images/Vector.svg";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={mainLogo} alt="Логотип" />
    </div>
  );
}

export default Header;
