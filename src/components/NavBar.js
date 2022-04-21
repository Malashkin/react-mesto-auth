import React from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";

const NavBar = ({ user, signOut }) => {
  return (
    <div className="navbar">
      <p className className="navbar__user">
        {user}
      </p>
      {user ? (
        <button className="navbar__button" onClick={signOut}>
          Выйти
        </button>
      ) : (
        <Switch>
          <Route path="/sign-up">
            <Link className="navbar__button" to="/sign-in">
              Войти
            </Link>
          </Route>
          <Route path="/sign-in">
            <Link className="navbar__button" to="/sign-up">
              Регистрация
            </Link>
          </Route>
        </Switch>
      )}
    </div>
  );
};

export default NavBar;
