import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ user, signOut }) => {
  return (
    <div className="navbar">
      <p className className="navbar__user">
        {user}
      </p>
      {user ? (
        <button className="navbar__title" onClick={signOut}>
          Выйти
        </button>
      ) : (
        <NavLink
          className="navbar__title"
          activeClassName="navbar__button_active"
          to="/sign-in"
        >
          Войти
        </NavLink>
      )}
    </div>
  );
};

export default NavBar;
