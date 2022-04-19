import React from "react";
import mainLogo from "./../images/Vector.svg";
import NavBar from "./NavBar";

const Header = ({ title, user }) => {
  return (
    <div className="header">
      <img className="header__logo" src={mainLogo} alt="Логотип" />
      <NavBar title={title} user={user} />
    </div>
  );
};

export default Header;
